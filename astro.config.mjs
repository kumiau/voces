import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  integrations: [UnoCSS()],
  alias: {
    '@': './src',
    '@components': './src/components',
    '@layouts': './src/layouts',
    '@styles': './src/styles',
  },
});
