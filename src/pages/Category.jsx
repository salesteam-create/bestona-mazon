import { Link, useParams } from 'react-router-dom'
import { DEPARTMENTS, departmentBySlug, subBySlug, UPDATED } from '../data/catalog.js'
import { Breadcrumbs, ListCard, DeptCircle, FeaturedBlock, RankedItem, DisclosureNote } from '../components.jsx'
import NotFound from './NotFound.jsx'

export function Department() {
  const { slug } = useParams()
  const dept = departmentBySlug(slug)
  if (!dept) return <NotFound />
  return (
    <div className="page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: dept.name }]} />
      <header className="page-head">
        <h1>{dept.name}</h1>
        <p className="lead">{dept.intro} Pick a category to see its Top 10.</p>
      </header>
      <div className="lc-grid lc-grid-4">
        {dept.subcategories.map((s) => <ListCard key={s.slug} sub={s} />)}
      </div>
      <section className="block-inner">
        <div className="block-head"><h2>Other departments</h2></div>
        <div className="circles">
          {DEPARTMENTS.filter((d) => d.slug !== slug).map((d) => <DeptCircle key={d.slug} dept={d} />)}
        </div>
      </section>
    </div>
  )
}

export function List() {
  const { slug } = useParams()
  const sub = subBySlug(slug)
  if (!sub || !sub.live) return <NotFound />
  const dept = sub.department
  const siblings = dept.subcategories.filter((s) => s.slug !== slug)

  return (
    <div className="page list-page">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: dept.name, to: `/d/${dept.slug}` }, { label: sub.name }]} />
      <header className="page-head">
        <h1>{sub.title}</h1>
        <p className="byline">
          <span className="mono-chip">Updated {UPDATED}</span>
          <span>10 ranked picks + 1 Featured Pick</span>
          <Link to="/how-we-pick" className="u-link">How we pick</Link>
        </p>
        <p className="lead">{sub.intro}</p>
      </header>
      <DisclosureNote />

      <FeaturedBlock product={sub.featured} />

      <section aria-labelledby="ranked-head">
        <div className="block-head"><h2 id="ranked-head">Our Top 10, ranked</h2></div>
        <ol className="rk-list">
          {sub.products.map((prod) => <RankedItem key={prod.id} product={prod} />)}
        </ol>
      </section>

      <section className="block-inner">
        <div className="block-head">
          <h2>More in {dept.name}</h2>
          <Link to={`/d/${dept.slug}`} className="u-link">All {dept.name} categories</Link>
        </div>
        <div className="lc-grid lc-grid-4">
          {siblings.map((s) => <ListCard key={s.slug} sub={s} />)}
        </div>
      </section>
    </div>
  )
}
