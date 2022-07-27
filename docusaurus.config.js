// @ts-check

const copyright = `Copyright © ${new Date().getFullYear()} Promise Solutions`;
const editUrl = "https://github.dev/countr/website/blob/production";

/** @type { import("@docusaurus/types").Config } */
const config = {
  baseUrl: "/",
  title: "Countr",
  url: "https://countr.xyz",
  favicon: "/favicon.ico",
  tagline: "An advanced counting bot to manage a counting channel in your guild!",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  themeConfig: {
    // theme-classic
    ...{
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      metadata: [{ name: "theme-color", content: "#bd4632" }],
      navbar: {
        title: "Countr",
        logo: {
          alt: "Countr Logo",
          src: "img/logo.svg",
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
            label: "Tutorials",
            position: "left",
            to: "/tutorials",
          },
          {
            label: "Community Posts",
            position: "left",
            to: "posts",
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
      prism: {
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/dracula"),
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
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "content/docs",
        editUrl,
        routeBasePath: "/docs",
        showLastUpdateTime: true,
        exclude: ["README.md", "template.md"],
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "plugin-content-blog--blog",
        path: "content/blog",
        blogTitle: "Countr Blog",
        blogDescription: "The Countr Blog, where we announce all new about Countr.",
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
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "plugin-content-blog--tutorials",
        path: "content/tutorials",
        editUrl,
        blogTitle: "Countr Tutorials",
        blogDescription: "Get neat tips and tricks on how to customize Countr to the fullest.",
        blogSidebarCount: "ALL",
        blogSidebarTitle: "Tutorials",
        routeBasePath: "/tutorials",
        authorsMapPath: "../authors.yml",
        feedOptions: {
          type: "all",
          title: "Countr Tutorials",
          description: "Get neat tips and tricks on how to customize Countr to the fullest.",
          copyright,
          language: "en",
        },
        exclude: ["README.md", "template.md"],
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "plugin-content-blog--posts",
        path: "content/posts",
        editUrl,
        blogTitle: "Countr Community Posts",
        blogDescription: "Read posts from the community on how they use Countr.",
        blogSidebarCount: "ALL",
        blogSidebarTitle: "Countr Community Posts",
        routeBasePath: "/posts",
        authorsMapPath: "../authors.yml",
        feedOptions: {
          type: "all",
          title: "Countr Community Posts",
          description: "Read posts from the community on how they use Countr.",
          copyright,
          language: "en",
        },
        exclude: ["README.md", "template.md"],
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      { path: "src/pages", routeBasePath: "/" },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      { fromExtensions: ["html"]},
    ],
    [
      "@docusaurus/plugin-google-gtag",
      { trackingID: "G-07GPGSSG3Y" },
    ],
    [
      "@docusaurus/plugin-sitemap",
      { changefreq: "hourly", priority: 0.5 },
    ],
  ],
  scripts: [{ src: "https://arc.io/widget.min.js#watbhJvw", async: true }],
  themes: ["@docusaurus/theme-classic"],
  clientModules: [
    require.resolve("./static/discord-components.js"),
    require.resolve("./static/style.css"),
  ],
};

module.exports = config;
