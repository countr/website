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

// eslint-disable-next-line no-undef -- is a global type definition
export const onRequest: PagesFunction = async request => {
  const now = Date.now();
  if (stats.last + 300_000 < now) {
    stats.last = now;

    const env = request.env as unknown as Record<string, string>;
    const { guilds, ranking } = await getDblStatistics(env["DBL_TOKEN"]);
    const users = await getCountrUsers(env["COUNTR_STATS_ENDPOINT"]);
    const count = await getCountrCount(env["COUNTR_COUNT_ENDPOINT"]);

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

async function getDblStatistics(token?: string): Promise<{ guilds: number; ranking: number }> {
  if (!token) return { guilds: 0, ranking: 0 };

  const {
    server_count: guilds = 0,
    server_count_rank: ranking = 0,
  } = await fetch("https://dblstatistics.com/api/bots/467377486141980682", {
    headers: {
      Authorization: token, // eslint-disable-line @typescript-eslint/naming-convention
    },
  }).then(async res => res.json())
    .catch(() => ({})) as Record<string, number>;

  return { guilds, ranking };
}

async function getCountrUsers(endpoint?: string): Promise<number> {
  if (!endpoint) return 0;
  const { users = 0 } = await fetch(endpoint)
    .then(async res => res.json())
    .catch(() => ({})) as Record<"users", number>;

  return users;
}

async function getCountrCount(endpoint?: string): Promise<number> {
  if (!endpoint) return 0;
  const count = parseInt(await fetch(endpoint)
    .then(async res => res.text())
    .catch(() => "0"), 10);

  return count || 0;
}

async function getMembers(invite: string): Promise<number> {
  const { approximate_member_count: memberCount = 0 } = await fetch(`https://discord.com/api/v8/invites/${invite}?with_counts=true`)
    .then(async res => res.json())
    .catch(() => ({})) as Record<string, number>;

  return Math.floor(memberCount / 10_000) * 10_000;
}
