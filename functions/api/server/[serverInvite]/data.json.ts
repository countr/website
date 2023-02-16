/* eslint-disable import/prefer-default-export -- this is a cloudflare function */
import type { RESTGetAPIInviteResult } from "discord-api-types/rest/v10";

export interface APIServerData {
  name: string;
  members: number;
}

const cacheTtl = 60 * 60 * 24;

export const onRequest: PagesFunction<never, "serverInvite", never> = async request => {
  const { serverInvite } = request.params;
  const dataRequest = await fetch(`https://discord.com/api/v8/invites/${String(serverInvite)}?with_counts=true`, { cf: { cacheTtl, cacheEverything: true }});

  if (dataRequest.status !== 200) return new Response(null, { status: dataRequest.status });

  const data = await dataRequest.json<RESTGetAPIInviteResult>();
  if (!data.guild) return new Response(null, { status: 404 });

  const content = JSON.stringify({
    name: data.guild.name,
    members: data.approximate_member_count,
  } as APIServerData);

  return new Response(content, {
    headers: {
      "Content-Type": "application/json",
      "Content-Length": String(content.length),
      "Cache-Control": `public, max-age=${cacheTtl}`,
    },
  });
};
