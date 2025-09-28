import { defineConfig } from 'astro/config';

export default defineConfig({
  alias: {
    '@': './src',
    '@components': './src/components',
    '@layouts': './src/layouts',
    '@styles': './src/styles',
  },
});
