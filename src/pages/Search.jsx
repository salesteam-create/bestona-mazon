import { useSearchParams, Link } from 'react-router-dom'
import { ALL_SUBS, DEPARTMENTS } from '../data/catalog.js'
import { ListCard } from '../components.jsx'

// Search returns categories, not products, so products only ever appear inside a list.
export default function Search() {
  const [params] = useSearchParams()
  const raw = (params.get('q') || '').trim()
  const words = raw.toLowerCase().split(/\s+/).filter(Boolean).map((w) => w.replace(/s$/, ''))
  const hit = (s) => {
    const hay = [s.name, s.department.name, s.title || '', s.intro || '', ...(s.products || []).map((x) => x.name)].join(' ').toLowerCase()
    return words.length > 0 && words.every((w) => hay.includes(w))
  }
  const results = ALL_SUBS.filter(hit).sort((a, b) => b.live - a.live)

  return (
    <div className="page">
      <div className="results-head">
        <span className="soft small">Search</span>
        <span className="results-count">
          {raw ? <><strong>{results.length} {results.length === 1 ? 'category' : 'categories'}</strong> for "{raw}"</> : 'Search our Top 10 lists'}
        </span>
      </div>
      {results.length ? (
        <div className="lc-grid lc-grid-4">{results.map((s) => <ListCard key={s.slug} sub={s} />)}</div>
      ) : (
        <div className="empty">
          <p>{raw ? 'No categories match that yet.' : 'Try a product type, like "coffee" or "dog bed".'} Or browse a department:</p>
          <div className="chip-row">
            {DEPARTMENTS.map((d) => <Link key={d.slug} to={`/d/${d.slug}`} className="chip">{d.name}</Link>)}
          </div>
        </div>
      )}
    </div>
  )
}
