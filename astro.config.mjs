// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://johnsulf.github.io',
  base: '/team',
  vite: {
    plugins: [tailwindcss()],
  },
});
