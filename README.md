# Bestona Mazon: concept prototype

Clickable prototype of a Top 10 review site. Each category has one Top 10 list: a short intro, one clearly labelled Featured Pick (sponsored), then ten ranked products. Every "Buy now" button opens Amazon in a new tab.

Structure follows the 1 Oct review feedback: categories everywhere outside a list, a vertical ranked list, a minimal product page, and a header that does not copy Amazon's. Visual design follows the "Marketplace design frames" handoff (Jost and DM Mono, ink `#141210`, amber `#F9A91E`, cream `#FAF8F4`, real logo in `public/logo.png`). All brands, products, prices and ratings are invented sample data.

## Pages

| Route | Page |
| --- | --- |
| `#/` | Home: hero, department circles, latest Top 10 lists, departments, method, newsletter |
| `#/d/<department>` | Department: its categories (one live list each, others "coming soon") |
| `#/list/<category>` | Top 10 list: intro, Featured Pick, ranked 1 to 10, more categories |
| `#/p/<id>` | Product quick look: photo, short description, rating, link to Amazon |
| `#/search?q=...` | Search returns categories, not products |
| `#/how-we-pick`, `#/disclosure` | Method, Featured Picks, affiliate disclosure |
| `#/admin` | Featured slot admin, wireframe only |

Live lists: `air-fryers`, `dog-beds`, `coffee-beans`, `bed-sheets`, `moisturizers`, `water-bottles`.

## Photos and links

Photos are sample stock images from Unsplash, stored in `public/images/` and named after the department (`dept-<slug>`), category (`cat-<slug>`) or product id. Replace a file with the same name to change a photo. Product photos are illustrative and tagged "Sample photo".

"Buy now" opens Amazon in a new tab. Sample products link to an Amazon search for their category; set `url` on a product in `src/data/catalog.js` to point it at a specific listing or affiliate link.

## Run locally

```
npm install
npm run dev
```

## Edit content

All sample content lives in `src/data/catalog.js`. Colours and fonts are CSS variables at the top of `src/styles.css`.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main` or the prototype branch. One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**. Do not use "Deploy from a branch": it publishes the unbuilt source and the page shows blank.

Live URL: https://salesteam-create.github.io/bestona-mazon/
