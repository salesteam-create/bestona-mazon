import { Link } from 'react-router-dom'
import { DEPARTMENTS, LIVE_SUBS, ALL_SUBS, UPDATED, subBySlug } from '../data/catalog.js'
import { DeptCircle, DeptCard, ListCard, Photo, DisclosureNote } from '../components.jsx'

export default function Home() {
  const spotlight = subBySlug('air-fryers')
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-main">
          <div className="hero-copy">
            <span className="eyebrow">Top 10 lists · Updated {UPDATED}</span>
            <h1>The ten products worth buying, in every category.</h1>
            <p>We narrow Amazon's bestsellers down to ten, and tell you why each one made the list. No endless scrolling.</p>
          </div>
          <div className="hero-actions">
            <a href="#departments" className="pill pill-dark pill-lg">Browse categories</a>
            <Link to="/how-we-pick" className="pill pill-outline pill-lg">How we pick</Link>
          </div>
        </div>
        <div className="hero-side">
          <Link to={`/list/${spotlight.slug}`} className="hero-panel hero-photo">
            <Photo item={spotlight} label="lifestyle photo" className="hero-photo-bg" />
            <span className="hero-panel-text">
              <strong>New list: {spotlight.title.replace('The 10 best', 'the 10 best')}</strong>
              <span>Basket size, even cooking and easy cleaning, compared</span>
            </span>
          </Link>
          <Link to="/how-we-pick" className="hero-panel hero-dark">
            <span className="hero-panel-text">
              <strong>Honest by design</strong>
              <span>Sponsored picks are always labelled and never ranked</span>
            </span>
            <span className="amber-link">Our method →</span>
          </Link>
        </div>
      </section>

      <section className="block" id="departments">
        <div className="block-head">
          <h2>Shop by category</h2>
          <a href="#all-departments" className="u-link">All departments</a>
        </div>
        <div className="circles">
          {DEPARTMENTS.map((d) => <DeptCircle key={d.slug} dept={d} />)}
        </div>
      </section>

      <section className="block">
        <div className="block-head">
          <div className="block-title">
            <h2>Latest Top 10 lists</h2>
            <span className="mono-chip">{LIVE_SUBS.length} lists · {ALL_SUBS.length} categories</span>
          </div>
        </div>
        <div className="lc-grid">
          {LIVE_SUBS.map((s) => <ListCard key={s.slug} sub={s} />)}
        </div>
      </section>

      <section className="block" id="all-departments">
        <div className="block-head">
          <h2>Browse by department</h2>
        </div>
        <div className="dc-grid">
          {DEPARTMENTS.map((d) => <DeptCard key={d.slug} dept={d} />)}
        </div>
      </section>

      <section className="block">
        <div className="how">
          <div className="how-intro">
            <span className="eyebrow eyebrow-amber">How our lists work</span>
            <h2>Built the same way, every time.</h2>
            <Link to="/how-we-pick" className="pill pill-amber">Read our method</Link>
          </div>
          <ol className="how-steps">
            <li><strong>Start from real demand</strong><span>We begin with Amazon's bestsellers in each category.</span></li>
            <li><strong>Filter for quality</strong><span>We drop products with weak long-term ratings or repeated complaints.</span></li>
            <li><strong>Rank and explain</strong><span>Ten picks, each with a short reason it made the list.</span></li>
            <li><strong>Label what's paid</strong><span>One Featured Pick per list, clearly marked and kept out of the ranking.</span></li>
          </ol>
        </div>
      </section>

      <section className="block">
        <div className="news">
          <div>
            <h2>Get new Top 10s first</h2>
            <p>One short email when a list changes.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@example.com" aria-label="Email address" />
            <button className="pill pill-amber" type="submit">Subscribe</button>
          </form>
        </div>
        <DisclosureNote />
      </section>
    </div>
  )
}
