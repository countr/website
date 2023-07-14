/* eslint-disable i/prefer-default-export -- this is a cloudflare function */
import type { RESTGetAPIInviteResult } from "discord-api-types/rest/v10";

const cacheTtl = 60 * 60 * 24;

export const onRequest: PagesFunction<never, "serverInvite", never> = async request => {
  const { serverInvite } = request.params;
  const dataRequest = await fetch(`https://discord.com/api/v10/invites/${String(serverInvite)}?with_counts=true`, { cf: { cacheTtl, cacheEverything: true } });

  if (dataRequest.status !== 200) return new Response(null, { status: dataRequest.status });

  const data = await dataRequest.json<RESTGetAPIInviteResult>();
  if (!data.guild) return new Response(null, { status: 404 });

  const iconUrl = data.guild.icon ?
    `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.webp` :
    "https://cdn.discordapp.com/embed/avatars/1.png";

  const icon = await fetch(iconUrl, { cf: { cacheTtl, cacheEverything: true } });

  return new Response(icon.body, {
    headers: {
      "Content-Type": "image/webp",
      "Content-Length": String(icon.body),
      "Cache-Control": `public, max-age=${cacheTtl}`,
    },
  });
};
