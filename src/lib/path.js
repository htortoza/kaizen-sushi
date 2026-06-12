// src/lib/path.js
// Prefija rutas internas con el base del sitio (necesario en GitHub Pages: /kaizen-sushi/).
// Externas (http, mailto, tel, wa.me, #) se devuelven sin tocar.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(p) {
  if (typeof p !== 'string' || !p.startsWith('/')) return p;
  return `${BASE}${p}`;
}
