import { Link } from 'react-router-dom'
import { BRAND, DEPARTMENTS, CATEGORIES, ALL_PRODUCTS } from '../data/catalog.js'
import { MiniProduct, DisclosureNote } from '../components.jsx'
import { Icon } from '../icons.jsx'

export default function Home() {
  const featured = ALL_PRODUCTS.filter((p) => p.featured)
  const topPicks = CATEGORIES.map((c) => ({ ...c.products[0], category: c }))

  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <p className="eyebrow">Top 10 lists, refreshed regularly</p>
            <h1>Skip the scrolling. See the ten products worth buying.</h1>
            <p className="lead">{BRAND.tagline} Each list starts from Amazon's bestsellers and adds a short, honest reason for every pick.</p>
            <div className="hero-actions">
              <a href="#categories" className="btn btn-primary">Shop by category</a>
              <Link to="/how-we-pick" className="btn btn-ghost">How we pick</Link>
            </div>
          </div>
          <ul className="hero-stats" aria-label="What you get">
            <li><strong>10</strong><span>picks per category</span></li>
            <li><strong>1</strong><span>line on why each made the list</span></li>
            <li><strong>0</strong><span>hidden sponsored rankings</span></li>
          </ul>
        </div>
      </section>

      <section id="categories" className="wrap section">
        <div className="section-head">
          <h2>Shop by category</h2>
          <p className="muted">Three categories are live in this prototype. The rest show the planned structure.</p>
        </div>
        <div className="dept-grid">
          {DEPARTMENTS.map((d) => {
            const anyLive = d.categories.some((c) => c.live)
            return (
              <article key={d.name} className={`dept ${anyLive ? '' : 'dept-soon'}`}>
                <h3>{d.name}</h3>
                <ul className="dept-tiles">
                  {d.categories.map((c) => (
                    <li key={c.name}>
                      {c.live ? (
                        <Link to={`/c/${c.slug}`} className="tile tile-live">
                          <span className="tile-icon"><Icon name={d.icon} size={32} /></span>
                          <span>{c.name}</span>
                        </Link>
                      ) : (
                        <span className="tile" aria-disabled="true">
                          <span className="tile-icon"><Icon name={d.icon} size={32} /></span>
                          <span>{c.name}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                {anyLive ? (
                  <Link className="small link-more" to={`/c/${d.categories.find((c) => c.live).slug}`}>See the top 10 →</Link>
                ) : (
                  <span className="small muted">Coming soon</span>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div className="section-head">
            <h2>Featured picks</h2>
            <p className="muted">Paid placements from brands we work with. Always labelled, never mixed into the rankings.</p>
          </div>
          <div className="mini-grid">
            {featured.map((p) => <MiniProduct key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2>#1 in each category right now</h2>
        </div>
        <div className="mini-grid">
          {topPicks.map((p) => <MiniProduct key={p.id} product={p} />)}
        </div>
      </section>

      <section className="wrap section">
        <div className="trust">
          <div>
            <h2>Why trust our lists?</h2>
            <p className="muted">We start from real bestseller data, check long-term ratings and repeat purchases, and write a reason for every pick. Paid placements are separate and clearly marked.</p>
          </div>
          <DisclosureNote />
        </div>
      </section>

      <section className="wrap section">
        <div className="newsletter">
          <div>
            <h2>Get the new top 10s first</h2>
            <p className="muted">One short email when lists change. No spam.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@example.com" aria-label="Email address" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
          <p className="small muted">Visual only in the prototype.</p>
        </div>
      </section>
    </>
  )
}
