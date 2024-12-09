/* eslint-disable import/prefer-default-export -- this is a cloudflare function */
export const onRequest: PagesFunction = () => fetch("https://arc.io/arc-sw.js", { cf: { cacheEverything: true, cacheTtl: 60 * 60 } });
