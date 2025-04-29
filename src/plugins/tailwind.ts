import type { PluginModule } from "@docusaurus/types";
import PostCSS from "@tailwindcss/postcss";

const tailwindPlugin: PluginModule = () => ({
  name: "tailwind",
  configurePostCss(postcssOptions) {
    postcssOptions.plugins.push(PostCSS);
    return postcssOptions;
  },
});

export default tailwindPlugin;
