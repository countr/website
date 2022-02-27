export type APIStats = {
  guilds: number;
  ranking: number;
  users: number;
  count: number;
  servers: Record<string, number>,
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
    const { guilds, ranking } = await getDblStatistics(env.DBL_TOKEN);
    const users = await getCountrUsers(env.COUNTR_STATS_ENDPOINT);
    const count = await getCountrCount(env.COUNTR_COUNT_ENDPOINT);

    // eslint-disable-next-line require-atomic-updates
    stats = {
      ...stats,
      guilds: Math.floor(guilds / 100) * 100,
      ranking,
      users: Math.floor(users / 100_000) * 100_000,
      count: Math.floor(count / 1000) * 1000,
      servers: {
        slogo: await getMembers("slogo"),
        sound: await getMembers("sound"),
        flare: await getMembers("cN8UVDH"),
      },
    };
  }

  return new Response(JSON.stringify(stats));
};

async function getDblStatistics(token?: string) {
  if (!token) return { guilds: 0, ranking: 0 };

  const json = await fetch("https://dblstatistics.com/api/bots/467377486141980682", {
    headers: {
      Authorization: token,
    },
  }).then(res => res.json()).catch(() => ({})) as {
    server_count?: number;
    server_count_rank?: number;
  };

  return {
    guilds: json.server_count || 0,
    ranking: json.server_count_rank || 0,
  };
}

async function getCountrUsers(endpoint?: string) {
  if (!endpoint) return 0;
  const json = await fetch(endpoint).then(res => res.json()).catch(() => ({})) as {
    users?: number;
  };

  return json.users || 0;
}

async function getCountrCount(endpoint?: string) {
  if (!endpoint) return 0;
  const count = parseInt(await fetch(endpoint).then(res => res.text()).catch(() => "0"));

  return count || 0;
}

async function getMembers(invite: string) {
  const i = await fetch(`https://discord.com/api/v8/invites/${invite}?with_counts=true`).then(res => res.json()).catch(() => ({})) as {
    approximate_member_count?: number;
  };

  return Math.floor((i.approximate_member_count || 0) / 10_000) * 10_000;
}
