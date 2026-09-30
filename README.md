# Bestona Mazon: concept prototype

Clickable front-end prototype for an Amazon product discovery site (top 10 per category, with a clearly labelled Featured Pick slot). Built from the scope document *Concept Prototype: Scope Document, Draft v0.1*.

The UI uses a placeholder brand ("Shortlist") and a neutral palette until the naming decision is made. All products, brands, prices and ratings are invented sample data.

## Pages

| Route | Page |
| --- | --- |
| `#/` | Home: hero, Shop by Category grid, featured picks, trust line, newsletter (visual) |
| `#/c/kitchen`, `#/c/pet-supplies`, `#/c/coffee-tea` | Category: Featured Pick card, independent Top 10, sort and price filter, related categories |
| `#/p/k1`, `#/p/p1`, `#/p/c1` | Product summary template (populated for the #1 product in each category) |
| `#/search?q=...` | Search over the 33 sample products |
| `#/how-we-pick` | Methodology and how Featured Picks work |
| `#/disclosure` | Affiliate disclosure, privacy and cookie placeholders |
| `#/admin` | Featured slot admin, wireframe only |

"Check price on Amazon" buttons show a notice instead of leaving the site.

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
