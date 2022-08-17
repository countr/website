// @ts-check

const copyright = `Copyright © ${new Date().getFullYear()} Promise Solutions`;
const editUrl = "https://github.dev/countr/website/blob/main";

/** @type { import("@docusaurus/types").Config } */
const config = {
  baseUrl: "/",
  title: "Countr",
  url: "https://countr.xyz",
  favicon: "/favicon.ico",
  tagline: "An advanced counting bot to manage a counting channel in your guild!",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  noIndex: process.env.NODE_ENV !== "production",

  /** @type { import("@docusaurus/preset-classic").ThemeConfig } */
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    metadata: [{ name: "theme-color", content: "#bd4632" }],
    navbar: {
      title: "Countr",
      logo: {
        alt: "Countr Logo",
        src: "/logo.png",
      },
      items: [
        {
          label: "Documentation",
          position: "left",
          to: "docs",
        },
        {
          label: "Blog",
          position: "left",
          to: "blog",
        },
        {
          label: "Bot Status",
          position: "right",
          href: "https://status.countr.xyz",
        },
        {
          label: "Support Server",
          position: "right",
          href: "https://promise.solutions/discord",
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      links: [
        {
          title: "Countr",
          items: [
            {
              label: "Terms of Service",
              to: "/terms",
            },
            {
              label: "Privacy Policy",
              to: "/privacy",
            },
            {
              label: "GitHub",
              href: "https://github.com/countr",
            },
          ],
        },
      ],
      copyright,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    algolia: {
      appId: "W0EOHXQRJJ",
      apiKey: "911d13589678145ce659d8ff2fb31c8f",
      indexName: "countr",
    },
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",

      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({ // eslint-disable-line no-extra-parens
        path: "content/docs",
        editUrl,
        routeBasePath: "/docs",
        showLastUpdateTime: true,
        exclude: ["README.md", "template.md"],
      }),
    ],
    [
      "@docusaurus/plugin-content-blog",

      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({ // eslint-disable-line no-extra-parens
        path: "content/blog",
        blogTitle: "Countr Blog",
        blogDescription: "The Countr Blog, where we announce everything new about Countr.",
        blogSidebarCount: "ALL",
        blogSidebarTitle: "Blog",
        routeBasePath: "/blog",
        authorsMapPath: "../authors.yml",
        feedOptions: {
          type: "all",
          title: "Countr Blog",
          description: "The Countr Blog, where we announce all new about Countr.",
          copyright,
          language: "en",
        },
        exclude: ["README.md", "template.md"],
      }),
    ],
    [
      "@docusaurus/plugin-content-pages",

      /** @type {import('@docusaurus/plugin-content-pages').Options} */
      ({ path: "src/pages", routeBasePath: "/" }), // eslint-disable-line no-extra-parens
    ],
    [
      "@docusaurus/plugin-client-redirects",

      /** @type {import('@docusaurus/plugin-client-redirects').Options} */
      ({ fromExtensions: ["html"]}), // eslint-disable-line no-extra-parens
    ],
    [
      "@docusaurus/plugin-google-gtag",

      /** @type {import('@docusaurus/plugin-google-gtag').Options} */
      ({ trackingID: "G-07GPGSSG3Y" }), // eslint-disable-line no-extra-parens
    ],
    [
      "@docusaurus/plugin-sitemap",

      /** @type {import('@docusaurus/plugin-sitemap').Options} */
      ({ changefreq: "hourly", priority: 0.5 }), // eslint-disable-line no-extra-parens
    ],
    [
      "@docusaurus/plugin-ideal-image",

      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({ name: "assets/images/[name]-[hash:hex:7]-[width].[ext]" }), // eslint-disable-line no-extra-parens
    ],
  ],
  scripts: [
    { src: "https://arc.io/widget.min.js#7MqQMouh", async: true },
    { src: "https://status.countr.xyz/widget/script.js", async: true },
  ],
  themes: ["@docusaurus/theme-classic", "@docusaurus/theme-search-algolia"],
  clientModules: [
    require.resolve("./src/discord-components.js"),
    require.resolve("./src/style.css"),
  ],
};

module.exports = config;
