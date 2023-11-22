import type { Options as PluginClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import type { Options as PluginContentBlogOptions } from "@docusaurus/plugin-content-blog";
import type { Options as PluginContentDocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as PluginContentPagesOptions } from "@docusaurus/plugin-content-pages";
import type { Options as PluginGoogleGtagOptions } from "@docusaurus/plugin-google-gtag";
import type { Options as PluginIdealImageOptions } from "@docusaurus/plugin-ideal-image";
import type { Options as PluginSitemapOptions } from "@docusaurus/plugin-sitemap";
import type { ThemeConfig } from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { EnumChangefreq } from "sitemap";

const copyright = `Copyright © ${new Date().getFullYear()} Promise Solutions`;
const editUrl = "https://github.dev/countr/website/blob/main";

const config: Config = {
  baseUrl: "/",
  title: "Countr",
  url: "https://countr.xyz",
  favicon: "/favicon.ico",
  tagline: "An advanced counting bot to manage a counting channel in your guild!",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",

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
  } satisfies ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "content/docs",
        editUrl,
        routeBasePath: "/docs",
        exclude: ["README.md", "template.md"],
      } satisfies PluginContentDocsOptions,
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
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
      } satisfies PluginContentBlogOptions,
    ],
    [
      "@docusaurus/plugin-content-pages",
      { path: "src/pages", routeBasePath: "/" } satisfies PluginContentPagesOptions,
    ],
    [
      "@docusaurus/plugin-client-redirects",
      { fromExtensions: ["html"] } satisfies PluginClientRedirectsOptions,
    ],
    [
      "@docusaurus/plugin-google-gtag",
      { trackingID: "G-07GPGSSG3Y" } satisfies PluginGoogleGtagOptions,
    ],
    [
      "@docusaurus/plugin-sitemap",
      { changefreq: EnumChangefreq.HOURLY, priority: 0.5 } satisfies PluginSitemapOptions,
    ],
    [
      "@docusaurus/plugin-ideal-image",
      { name: "assets/images/[name]-[hash:hex:7]-[width].[ext]" } satisfies PluginIdealImageOptions,
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

export default config;
