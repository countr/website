let stats = {
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

    const { guilds, ranking } = await getDblStatistics();

    // eslint-disable-next-line require-atomic-updates
    stats = {
      ...stats,
      guilds: Math.floor(guilds / 100) * 100,
      ranking,
      servers: {
        slogo: await getMembers("slogo"),
        sound: await getMembers("sound"),
        flare: await getMembers("cN8UVDH"),
      },
    };
  }

  return new Response(JSON.stringify(stats));
};

async function getDblStatistics() {
  if (!process.env.DBL_TOKEN) return { guilds: 0, ranking: 0 };

  const json = await fetch("https://dblstatistics.com/api/bots/467377486141980682", {
    headers: {
      Authorization: process.env.DBL_TOKEN,
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

async function getMembers(invite: string) {
  const i = await fetch(`https://discord.com/api/v8/invites/${invite}?with_counts=true`).then(res => res.json()).catch(() => ({})) as {
    approximate_member_count?: number;
  };

  return Math.floor((i.approximate_member_count || 0) / 10_000) * 10_000;
}
