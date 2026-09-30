import { useSearchParams, Link } from 'react-router-dom'
import { ALL_PRODUCTS, CATEGORIES } from '../data/catalog.js'
import { Breadcrumbs, MiniProduct } from '../components.jsx'

export default function Search() {
  const [params] = useSearchParams()
  const q = (params.get('q') || '').trim()
  const needle = q.toLowerCase()
  const results = needle
    ? ALL_PRODUCTS.filter((p) =>
        [p.name, p.brand, p.category.name, p.reason].some((t) => t.toLowerCase().includes(needle)),
      )
    : []

  return (
    <div className="wrap page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Search' }]} />
      <h1>{q ? <>Results for "{q}"</> : 'Search'}</h1>
      <p className="small muted">Prototype search covers the 33 sample products only.</p>

      {q && results.length > 0 && (
        <>
          <p className="muted">{results.length} {results.length === 1 ? 'pick' : 'picks'} found</p>
          <div className="mini-grid">
            {results.map((p) => <MiniProduct key={p.id} product={p} />)}
          </div>
        </>
      )}

      {(!q || results.length === 0) && (
        <div className="empty">
          {q && <p>No picks match "{q}".</p>}
          <p>Try "coffee", "dog", "kettle" or browse a category:</p>
          <div className="chip-row">
            {CATEGORIES.map((c) => <Link key={c.slug} className="chip" to={`/c/${c.slug}`}>{c.name}</Link>)}
          </div>
        </div>
      )}
    </div>
  )
}
