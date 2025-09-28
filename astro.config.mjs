import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  site: 'https://kumiau.github.io',
  base: '/voces',
  integrations: [UnoCSS()],
  alias: {
    '@': './src',
    '@components': './src/components',
    '@layouts': './src/layouts',
    '@styles': './src/styles',
  },
});
