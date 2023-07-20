import { defineConfig } from 'astro/config';
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
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
});
