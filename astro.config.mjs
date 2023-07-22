import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.elijahjamesandthenightmares.com',
  compressHTML: true,
  output: 'static',
  experimental: {
    assets: true,
  },
  integrations: [
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
