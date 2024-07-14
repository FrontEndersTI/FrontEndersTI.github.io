import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://FrontEndersTI.github.io',
  // base: '/FrontEndersTI.github.io',
  integrations: [compress(), mdx(), tailwind({
    applyBaseStyles: false
  }), icon()],
  // output: "server",
  // adapter: netlify()
});
