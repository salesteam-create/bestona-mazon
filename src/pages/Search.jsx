import { useSearchParams, Link } from 'react-router-dom'
import { RANKED, SPONSORED, CATEGORIES, categoryBySlug, discount, productById } from '../data/catalog.js'
import { Breadcrumbs, Results, ProductCard, useSaved } from '../components.jsx'

const match = (needle) => (p) =>
  [p.name, p.brand, p.category.name, p.reason, ...p.bullets].some((t) => t.toLowerCase().includes(needle))

export default function Search() {
  const [params] = useSearchParams()
  const q = (params.get('q') || '').trim()
  const cat = categoryBySlug(params.get('cat'))
  const needle = q.toLowerCase()
  const inScope = (p) => !cat || p.category.slug === cat.slug
  const ranked = RANKED.filter(inScope).filter(match(needle))
  const sponsored = SPONSORED.filter(inScope).filter(match(needle))
  const label = [q && `"${q}"`, cat && `in ${cat.name}`].filter(Boolean).join(' ')

  return (
    <div className="page page-inner">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Search' }]} />
      {ranked.length + sponsored.length ? (
        <Results key={q + (cat?.slug || '')} title={label || 'all Top 10 picks'} products={ranked} sponsored={sponsored.slice(0, 1)} showCategories defaultSort="rating" />
      ) : (
        <div className="empty">
          <h1>No results for {label}</h1>
          <p>Try "coffee", "dog", "blender" or browse a department:</p>
          <div className="cat-chips center">
            {CATEGORIES.map((c) => <Link key={c.slug} className="chip" to={`/c/${c.slug}`}>{c.name}</Link>)}
          </div>
        </div>
      )}
    </div>
  )
}

export function Deals() {
  const deals = RANKED.filter((p) => discount(p) > 0)
  return (
    <div className="page page-inner">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: "Today's Deals" }]} />
      <div className="deals-head">
        <h1>Today's Deals</h1>
        <p>Top 10 picks with a price drop on Amazon today. Sample prices as shown on 30 Sep 2026.</p>
      </div>
      <Results title="Today's Deals" products={deals} showCategories defaultSort="rank" />
    </div>
  )
}

export function Saved() {
  const { ids } = useSaved()
  const items = ids.map(productById).filter(Boolean)
  return (
    <div className="page page-inner">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Saved' }]} />
      <h1>Your saved list</h1>
      <p className="muted">Saved in this browser only. Tap the heart on any product to add it.</p>
      {items.length ? (
        <div className="pgrid pgrid-wide">{items.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      ) : (
        <div className="empty">
          <p>Nothing saved yet.</p>
          <Link to="/" className="btn btn-buy">Start browsing</Link>
        </div>
      )}
    </div>
  )
}
