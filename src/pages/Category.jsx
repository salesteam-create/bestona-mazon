import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { categoryBySlug } from '../data/catalog.js'
import { Breadcrumbs, FeaturedCard, ProductRow, DisclosureNote } from '../components.jsx'
import { Icon } from '../icons.jsx'
import NotFound from './NotFound.jsx'

const SORTS = {
  rank: { label: 'Our ranking', fn: (a, b) => a.rank - b.rank },
  rating: { label: 'Highest rated', fn: (a, b) => b.rating - a.rating || a.rank - b.rank },
  low: { label: 'Price: low to high', fn: (a, b) => a.price - b.price },
  high: { label: 'Price: high to low', fn: (a, b) => b.price - a.price },
}

const PRICE_BANDS = {
  all: { label: 'Any price', test: () => true },
  u25: { label: 'Under $25', test: (p) => p.price < 25 },
  '25to50': { label: '$25 to $50', test: (p) => p.price >= 25 && p.price <= 50 },
  o50: { label: 'Over $50', test: (p) => p.price > 50 },
}

export default function Category() {
  const { slug } = useParams()
  const cat = categoryBySlug(slug)
  const [sort, setSort] = useState('rank')
  const [band, setBand] = useState('all')

  const list = useMemo(() => {
    if (!cat) return []
    return cat.products.filter(PRICE_BANDS[band].test).sort(SORTS[sort].fn)
  }, [cat, sort, band])

  if (!cat) return <NotFound />

  return (
    <div className="wrap page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: cat.department }, { label: cat.name }]} />

      <header className="cat-head">
        <span className="cat-icon"><Icon name={cat.icon} size={40} /></span>
        <div>
          <h1>The 10 best {cat.name.toLowerCase()} picks</h1>
          <p className="lead">{cat.intro}</p>
          <p className="small muted">Updated 30 Sep 2026 · <Link to="/how-we-pick">How we pick</Link></p>
        </div>
      </header>

      <DisclosureNote compact />

      <FeaturedCard product={cat.featured} category={cat} />

      <section aria-labelledby="top10">
        <div className="list-head">
          <h2 id="top10">Independent Top 10</h2>
          <div className="controls">
            <label>
              <span className="small muted">Sort</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {Object.entries(SORTS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
            </label>
            <label>
              <span className="small muted">Price</span>
              <select value={band} onChange={(e) => setBand(e.target.value)}>
                {Object.entries(PRICE_BANDS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
            </label>
          </div>
        </div>
        {list.length ? (
          <ol className="plist">
            {list.map((p) => <ProductRow key={p.id} product={p} />)}
          </ol>
        ) : (
          <p className="empty">No picks in this price range. Try another filter.</p>
        )}
      </section>

      <section className="section">
        <h2>Related categories</h2>
        <div className="related">
          {cat.related.map((s) => {
            const r = categoryBySlug(s)
            return (
              <Link key={s} to={`/c/${s}`} className="related-card">
                <Icon name={r.icon} size={28} />
                <span>{r.name}</span>
                <span aria-hidden="true">→</span>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
