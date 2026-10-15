import { defineConfig } from 'astro/config';
import { siteConfig } from './src/data/site.js';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  output: 'static',
  redirects: {
    '/reviews': '/about#reviews'
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'never'
  },
  server: {
    host: true
  },
  compressHTML: true
});