export interface APIStats {
  guilds: number;
  ranking: number;
  users: number;
  count: number;
  servers: Record<string, number>;
  last: number;
}

let stats: APIStats = {
  guilds: 0,
  ranking: 0,
  users: 0,
  count: 0,
  servers: {
    slogo: 0,
    sound: 0,
    flare: 0,
  },
  last: 0,
};

export const onRequest: PagesFunction = async request => {
  const now = Date.now();
  if (stats.last + 300_000 < now) {
    stats.last = now;

    const env = request.env as unknown as Record<string, string>;
    const { guilds, ranking } = await getDblStatistics(env["DBL_TOKEN"]);
    const { users, count } = await getCountrStatistics(env["COUNTR_STATS_ENDPOINT"]);

    // eslint-disable-next-line require-atomic-updates
    stats = {
      ...stats,
      guilds: Math.floor(guilds / 100) * 100,
      ranking,
      users: Math.floor(users / 100_000) * 100_000,
      count: Math.floor(count / 1000) * 1000,
      servers: {
        slogo: await getMembersFromInvite("slogo"),
        sound: await getMembersFromInvite("sound"),
        flare: await getMembersFromInvite("cN8UVDH"),
        operagx: await getMembersFromInvite("operagx"),
      },
    };
  }

  return new Response(JSON.stringify(stats));
};

async function getDblStatistics(token?: string): Promise<{ guilds: number; ranking: number }> {
  if (!token) return { guilds: 0, ranking: 0 };

  const {
    server_count: guilds = 0,
    server_count_rank: ranking = 0,
  } = await fetch("https://dblstatistics.com/api/bots/467377486141980682", {
    headers: { Authorization: token },
  }).then(async res => res.json())
    .catch(() => ({})) as Record<string, number>;

  return { guilds, ranking };
}

export interface CountrApiResponse {
  shards: Record<string, {
    guilds: number;
    users: number;
  }>;
  weeklyCount: number;
}

async function getCountrStatistics(endpoint?: string): Promise<{ users: number; count: number }> {
  if (!endpoint) return { users: 0, count: 0 };
  const { shards, weeklyCount } = await fetch(endpoint)
    .then(async res => res.json<CountrApiResponse>())
    .catch(() => ({ shards: {}, weeklyCount: 0 } as CountrApiResponse));

  const users = Object.values(shards).reduce((sum, shard) => sum + shard.users, 0);

  return { users, count: weeklyCount };
}

async function getMembersFromInvite(invite: string): Promise<number> {
  const { approximate_member_count: memberCount = 0 } = await fetch(`https://discord.com/api/v8/invites/${invite}?with_counts=true`)
    .then(async res => res.json())
    .catch(() => ({})) as Record<string, number>;

  return Math.floor(memberCount / 10_000) * 10_000;
}
