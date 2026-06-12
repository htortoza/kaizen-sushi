# Kaizen Sushi — 改善

Sitio web del restaurante de sushi premium **Kaizen Sushi** (Santiago, Chile): delivery online y catering para eventos y empresas.

Construido a partir de la **Web Factory** (Astro + GSAP + Lenis), pero **no es un relleno de plantilla**: el home es una pieza a medida con preloader ritual, hero editorial y narrativa de scroll (secciones que se encogen/oscurecen, anatomía del nigiri pinneada, galería horizontal).

## Stack
- **Astro 5** (SSG)
- **GSAP + ScrollTrigger** — coreografía de motion
- **Lenis** — smooth scroll
- **CSS Variables** — todo el diseño pasa por `src/styles/theme.css`

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
```

## Arquitectura
- `contracts/site.json` — marca, navegación y datos de empresa (fuente única del chrome).
- `contracts/pages/*.json` — contrato por página + bloque `media` (imágenes generadas con Magnific).
- `src/pages/index.astro` — **home bespoke** (no se regenera con `generate.js`).
- `src/pages/menu.astro`, `catering.astro` — generadas desde contrato (pendiente elevarlas al nivel del home).
- `src/utils/media.js` — pipeline de media (Magnific → `/public` → contrato).

## Imágenes
Generadas con Magnific (estética oscura premium japonesa) y servidas desde `public/images/`.

---
Generado con la Web Factory · pilot client.
