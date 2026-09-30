import { Link, useParams } from 'react-router-dom'
import { CATEGORIES, categoryBySlug } from '../data/catalog.js'
import { Breadcrumbs, Results, DisclosureNote } from '../components.jsx'
import { Icon } from '../icons.jsx'
import NotFound from './NotFound.jsx'

export default function Category() {
  const { slug } = useParams()
  const cat = categoryBySlug(slug)
  if (!cat) return <NotFound />

  return (
    <div className="page">
      <div className="cat-banner">
        <div className="cat-banner-inner">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, ...(cat.department !== cat.name ? [{ label: cat.department }] : []), { label: cat.name }]} />
          <div className="cat-title">
            <span className="cat-icon"><Icon name={cat.icon} size={36} /></span>
            <div>
              <h1>Top 10 in {cat.name}</h1>
              <p>{cat.intro} Updated 30 Sep 2026.</p>
            </div>
          </div>
          <div className="cat-chips">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} to={`/c/${c.slug}`} className={`chip ${c.slug === slug ? 'on' : ''}`}>{c.name}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="page-inner">
        <DisclosureNote />
        <Results key={slug} title={cat.name} products={cat.products} sponsored={[cat.featured]} />
      </div>
    </div>
  )
}
