// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ─── AGENTE: reemplaza este valor con el dominio real del cliente ───
  site: 'https://kaizensushi.cl',

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/draft/') && !page.includes('/admin/'),
    }),
  ],

  compressHTML: true,

  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('gsap'))  return 'gsap';
            if (id.includes('lenis')) return 'lenis';
          },
        },
      },
    },
    optimizeDeps: {
      include: ['gsap', 'lenis'],
    },
  },
});
