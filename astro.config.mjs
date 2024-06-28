import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ejhallows.com',
  compressHTML: true,
  output: 'static',
  experimental: {
    assets: true,
  },
  integrations: [sitemap()],
});
