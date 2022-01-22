/* eslint-disable require-atomic-updates */
/* eslint-disable camelcase */
const stats: {
  server_count?: number;
  server_count_rank?: number;
  users?: number; // to/do whenever rewrite is out
  count?: number; // to/do whenever rewrite is out
  servers?: Record<string, number>;
  last: number;
} = { last: 0 };

const onRequest: PagesFunction = async () => {
  if (stats.last + 300_000 < Date.now()) {
    stats.last = Date.now();

    const {
      server_count = null,
      server_count_rank = null,
    } = await getDblStatistics();

    const servers: Record<string, number> = {
      slogo: floor(await getMembers("slogo"), 10000),
      sound: floor(await getMembers("sound"), 10000),
      flare: floor(await getMembers("cN8UVDH"), 10000),
    };

    if (server_count) stats.server_count = floor(server_count, 100);
    if (server_count_rank) stats.server_count_rank = server_count_rank;
    if (servers) stats.servers = servers;
  }

  return new Response(JSON.stringify(stats));
};

export default onRequest;

function floor(num: number, nearest: number) {
  return Math.floor(num / nearest) * nearest;
}

async function getDblStatistics() {
  if (!process.env.DBL_TOKEN) return { server_count: 0, server_count_rank: 0 };
  const { server_count = 0, server_count_rank = 0 } = await fetch("https://dblstatistics.com/api/bots/467377486141980682", {
    headers: { Authorization: process.env.DBL_TOKEN },
  }).then(res => res.json()).catch(() => ({})) as {
    server_count?: number;
    server_count_rank?: number;
  };

  return { server_count, server_count_rank };
}

async function getMembers(invite: string) {
  const i = await fetch(`https://discord.com/api/v8/invites/${invite}?with_counts=true`).then(res => res.json()).catch(() => ({})) as {
    approximate_member_count?: number;
  };

  return i.approximate_member_count || 0;
}
