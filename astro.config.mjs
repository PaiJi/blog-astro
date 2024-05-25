import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.jipai.moe",
  integrations: [mdx(), sitemap(), react(), tailwind()],
  devToolbar: {
    enabled: false,
  },

  redirects: {
    "/tag/大振/": "/tags/大振/",
    "/tag/steam/": "/tags/steam/",
    "/limit-spotify-cache/": "/limit-spotify-cache-size/",
    "/category/diary/": "/categories/diary/",
  },

  markdown: {
    shikiConfig: {
      // 选择 Shiki 内置的主题（或添加你自己的主题）
      // https://shiki.style/themes
      theme: "one-light",
      // 另外，也提供了多种主题
      // 查看下面关于使用亮/暗双主题的的说明
      // themes: {
      //   light: "github-light-default",
      //   dark: "github-dark",
      // },
      // 添加自定义语言
      // 注意：Shiki 内置了无数语言，包括 .astro！
      // https://shiki.style/languages
      langs: [],
      // 启用自动换行，以防止水平滚动
      wrap: true,
      // 添加自定义转换器：https://shiki.style/guide/transformers
      // 查找常用转换器：https://shiki.style/packages/transformers
      transformers: [],
    },
  },

  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },
});
