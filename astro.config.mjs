import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ejhallows.com',
  compressHTML: true,
  output: 'static',
  integrations: [sitemap(), icon()],
});
