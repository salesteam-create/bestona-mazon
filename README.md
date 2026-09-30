# Bestona Mazon: concept prototype

Clickable, Amazon-style marketplace prototype showing the Top 10 products in each department, with one clearly labelled Sponsored "Featured Pick" per department. Every buy button links out to Amazon (shown as a notice in the prototype).

Brand colours come from the Bestona Mazon logo (amber `#f9ac1f` and black). The logo is recreated in code (`LogoMark` in `src/components.jsx`). All brands, products, prices and ratings are invented sample data.

## Pages

| Route | Page |
| --- | --- |
| `#/` | Home: banner carousel, Top 10 cards per department, Sponsored row, deals row, department rows |
| `#/c/<slug>` | Department: Featured Pick plus Top 10 grid, filters (reviews, price, deals, brand), sort |
| `#/p/<id>` | Product: gallery, rank, price, why it made the list, buy box, comparison table |
| `#/search?q=...&cat=...` | Search across all 66 sample products, optionally within a department |
| `#/deals` | Today's Deals (ranked products with a price drop) |
| `#/saved` | Saved list (stored in the browser only) |
| `#/how-we-pick`, `#/disclosure` | Methodology, sponsored placements, affiliate disclosure |
| `#/admin` | Featured slot admin, wireframe only |

Departments: `kitchen`, `pet-supplies`, `coffee-tea`, `home`, `beauty`, `sports`.

## Run locally

```
npm install
npm run dev
```

## Edit content

All sample content lives in `src/data/catalog.js`. Colours are CSS variables at the top of `src/styles.css`.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main` or the prototype branch. One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**. Do not use "Deploy from a branch": it publishes the unbuilt source and the page shows blank.

Live URL: https://salesteam-create.github.io/bestona-mazon/
