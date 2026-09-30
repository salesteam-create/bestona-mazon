import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, SPONSORED, RANKED, discount } from '../data/catalog.js'
import { Row, DisclosureNote } from '../components.jsx'
import { ProductImage, Icon } from '../icons.jsx'

const SLIDES = [
  {
    eyebrow: 'Top 10 lists',
    title: 'Only the 10 products worth buying',
    body: 'Every department, narrowed to ten picks with a one-line reason for each.',
    cta: { label: 'Browse departments', to: '/c/kitchen' },
    tone: 'amber',
    icons: ['fryer', 'bottle', 'fountain'],
  },
  {
    eyebrow: "Today's Deals",
    title: 'Top 10 picks, now on sale',
    body: 'Ranked products with a price drop on Amazon today.',
    cta: { label: 'See all deals', to: '/deals' },
    tone: 'coral',
    icons: ['vacuum', 'dryer', 'backpack'],
  },
  {
    eyebrow: 'New list',
    title: 'The 10 best coffees and teas',
    body: 'Beans, pods, cold brew and loose leaf, tested against the bestsellers.',
    cta: { label: 'See the list', to: '/c/coffee-tea' },
    tone: 'dark',
    icons: ['beans', 'cup', 'leaf'],
  },
]

function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 6000)
    return () => clearInterval(t)
  }, [paused])
  const s = SLIDES[i]
  return (
    <section
      className={`hero tone-${s.tone}`}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button className="hero-arrow left" aria-label="Previous slide" onClick={() => setI((i + SLIDES.length - 1) % SLIDES.length)}>‹</button>
      <div className="hero-inner" key={i}>
        <div className="hero-copy">
          <span className="hero-eyebrow">{s.eyebrow}</span>
          <h1>{s.title}</h1>
          <p>{s.body}</p>
          <Link className="btn btn-hero" to={s.cta.to}>{s.cta.label}</Link>
        </div>
        <div className="hero-art" aria-hidden="true">
          {s.icons.map((n, k) => <span key={n} className={`hero-bubble b${k}`}><Icon name={n} size={k === 0 ? 120 : 76} strokeWidth={1.4} /></span>)}
        </div>
      </div>
      <button className="hero-arrow right" aria-label="Next slide" onClick={() => setI((i + 1) % SLIDES.length)}>›</button>
      <div className="hero-dots">
        {SLIDES.map((_, k) => <button key={k} className={k === i ? 'on' : ''} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} />)}
      </div>
    </section>
  )
}

function CategoryCard({ cat }) {
  const four = cat.products.slice(0, 4)
  return (
    <article className="hcard">
      <h2>Top 10 in {cat.name}</h2>
      <div className="hcard-grid">
        {four.map((p) => (
          <Link key={p.id} to={`/p/${p.id}`} className="hcard-item">
            <ProductImage product={p} size="sm" />
            <span className="hcard-label">#{p.rank} {p.name.split(',')[0]}</span>
          </Link>
        ))}
      </div>
      <Link to={`/c/${cat.slug}`} className="see-more">See the full top 10</Link>
    </article>
  )
}

export default function Home() {
  const deals = RANKED.filter((p) => discount(p) >= 15).sort((a, b) => discount(b) - discount(a))
  const mostReviewed = [...RANKED].sort((a, b) => b.reviews - a.reviews).slice(0, 12)

  return (
    <div className="home">
      <Hero />
      <div className="home-body">
        <div className="hcard-row">
          {CATEGORIES.slice(0, 4).map((c) => <CategoryCard key={c.slug} cat={c} />)}
        </div>

        <Row
          title="Featured Picks from our partner brands"
          note="Sponsored"
          link={{ label: 'How sponsored picks work', to: '/how-we-pick#featured' }}
          products={SPONSORED}
        />

        <Row title="Today's Deals on Top 10 picks" link={{ label: 'See all deals', to: '/deals' }} products={deals} />

        <div className="hcard-row">
          {CATEGORIES.slice(4).map((c) => <CategoryCard key={c.slug} cat={c} />)}
          <article className="hcard hcard-trust">
            <h2>Why shop our Top 10s?</h2>
            <ul>
              <li><strong>10 picks</strong> per department, no endless scrolling</li>
              <li><strong>1 reason</strong> written for every product</li>
              <li><strong>Sponsored</strong> picks always labelled and kept out of the ranking</li>
            </ul>
            <Link to="/how-we-pick" className="see-more">How we pick</Link>
          </article>
          <article className="hcard hcard-news">
            <h2>Get new Top 10s first</h2>
            <p>One short email when a list changes.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@example.com" aria-label="Email address" />
              <button className="btn btn-buy btn-block" type="submit">Subscribe</button>
            </form>
            <span className="small-note">Visual only in the prototype.</span>
          </article>
        </div>

        <Row title="Most-reviewed products across our lists" products={mostReviewed} />

        {CATEGORIES.map((c) => (
          <Row key={c.slug} title={`Top 10 in ${c.name}`} link={{ label: 'See the list', to: `/c/${c.slug}` }} products={c.products} />
        ))}

        <DisclosureNote className="home-disclosure" />
      </div>
    </div>
  )
}
