const cacheTtl = 60 * 60;

export interface APIStats {
  count: number;
  guilds: number;
  ranking: number;
  users: number;
}

export const onRequest: PagesFunction<Partial<Record<"COUNTR_STATS_ENDPOINT" | "DBL_TOKEN", string>>, never, never> = async request => {
  const { guilds, ranking } = await getDblStatistics(request.env.DBL_TOKEN);
  const { count, users } = await getCountrStatistics(request.env.COUNTR_STATS_ENDPOINT);

  const content = JSON.stringify({
    count: Math.floor(count / 1000) * 1000,
    guilds: Math.floor(guilds / 100) * 100,
    ranking,
    users: Math.floor(users / 100_000) * 100_000,
  } as APIStats);

  return new Response(content, {
    headers: {
      "Content-Type": "application/json",
      "Content-Length": String(content.length),
      "Cache-Control": `public, max-age=${cacheTtl}`,
    },
  });
};

async function getDblStatistics(token?: string): Promise<Record<"guilds" | "ranking", number>> {
  if (!token) return { guilds: 0, ranking: 0 };

  const {
    server_count: guilds,
    server_count_rank: ranking,
  } = await fetch("https://dblstatistics.com/api/bots/467377486141980682", {
    headers: { Authorization: token },
    cf: { cacheTtl, cacheEverything: true },
  })
    .then(async res => res.json<Record<"server_count_rank" | "server_count", number>>())
    .catch(() => ({
      /* eslint-disable camelcase */
      server_count: 0,
      server_count_rank: 0,
      /* eslint-enable camelcase */
    }));

  return { guilds, ranking };
}

async function getCountrStatistics(endpoint?: string): Promise<Record<"count" | "users", number>> {
  if (!endpoint) return { count: 0, users: 0 };

  const { shards, weeklyCount } = await fetch(endpoint, { cf: { cacheTtl, cacheEverything: true }})
    .then(async res => res.json<{
      shards: Record<string, { users: number }>;
      weeklyCount: number;
    }>())
    .catch(() => ({
      shards: {},
      weeklyCount: 0,
    }));

  const totalUsers = Object.values(shards).reduce((sum, { users }) => sum + users, 0);

  return { count: weeklyCount, users: totalUsers };
}
