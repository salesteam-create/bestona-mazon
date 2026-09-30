import { createContext, useContext, useState, useCallback, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BRAND, CATEGORIES, PRICE_AS_OF } from './data/catalog.js'
import { ProductImage } from './icons.jsx'

/* ---------- Outbound link toast ---------- */

const ToastContext = createContext(() => {})

export function ToastProvider({ children }) {
  const [msg, setMsg] = useState(null)
  const timer = useRef()
  const show = useCallback((text) => {
    setMsg(text)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setMsg(null), 3200)
  }, [])
  return (
    <ToastContext.Provider value={show}>
      {children}
      <div className={`toast ${msg ? 'toast-show' : ''}`} role="status" aria-live="polite">
        {msg}
      </div>
    </ToastContext.Provider>
  )
}

export function AmazonButton({ product, variant = 'primary', label = 'Check price on Amazon' }) {
  const toast = useContext(ToastContext)
  return (
    <button
      type="button"
      className={`btn btn-${variant}`}
      onClick={() =>
        toast(`Prototype: in the live site this opens "${product.name}" on Amazon via an affiliate link.`)
      }
    >
      {label}
      <span aria-hidden="true" className="ext">↗</span>
    </button>
  )
}

export function useToast() {
  return useContext(ToastContext)
}

/* ---------- Small pieces ---------- */

export function Stars({ rating, reviews }) {
  const pct = (rating / 5) * 100
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars from ${reviews.toLocaleString()} ratings`}>
      <span className="stars-track" aria-hidden="true">
        ★★★★★
        <span className="stars-fill" style={{ width: `${pct}%` }}>★★★★★</span>
      </span>
      <span className="stars-num">{rating.toFixed(1)}</span>
      {reviews != null && <span className="muted">({reviews.toLocaleString()})</span>}
    </span>
  )
}

export function Price({ value }) {
  return (
    <span className="price">
      <strong>${value.toFixed(2)}</strong>
      <span className="muted small"> as of {PRICE_AS_OF}</span>
    </span>
  )
}

export function Breadcrumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={i}>
          {i > 0 && <span className="crumb-sep" aria-hidden="true">›</span>}
          {it.to ? <Link to={it.to}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
        </span>
      ))}
    </nav>
  )
}

export function DisclosureNote({ compact }) {
  return (
    <p className={`disclosure-note ${compact ? 'compact' : ''}`}>
      As an Amazon Associate we earn from qualifying purchases. Featured Picks are paid placements and are
      always labelled. <Link to="/how-we-pick">How we pick</Link>
    </p>
  )
}

export function FeaturedBadge() {
  return (
    <span className="badge badge-featured">
      Featured Pick <span className="badge-sep">·</span> Sponsored
    </span>
  )
}

/* ---------- Product cards ---------- */

export function FeaturedCard({ product, category }) {
  return (
    <article className="featured-card" aria-label="Featured Pick, sponsored placement">
      <div className="featured-head">
        <FeaturedBadge />
        <Link to="/how-we-pick#featured" className="small muted">What is this?</Link>
      </div>
      <div className="featured-body">
        <ProductImage product={product} size="md" />
        <div className="featured-info">
          <p className="eyebrow">{product.brand}</p>
          <h3>{product.name}</h3>
          <Stars rating={product.rating} reviews={product.reviews} />
          <p className="reason">{product.reason}</p>
          <div className="row-actions">
            <Price value={product.price} />
            <AmazonButton product={product} />
          </div>
        </div>
      </div>
      <p className="featured-foot small muted">
        Paid placement from a brand we work with. It sits outside the independent Top 10 below
        {category ? ` for ${category.name}` : ''}.
      </p>
    </article>
  )
}

export function ProductRow({ product }) {
  const hasSummary = Boolean(product.summary)
  const title = hasSummary ? <Link to={`/p/${product.id}`}>{product.name}</Link> : product.name
  return (
    <li className="prow">
      <div className="prow-rank" aria-label={`Rank ${product.rank}`}>{product.rank}</div>
      <ProductImage product={product} size="md" />
      <div className="prow-info">
        <p className="eyebrow">{product.brand}</p>
        <h3>{title}</h3>
        <Stars rating={product.rating} reviews={product.reviews} />
        <p className="reason">
          <span className="reason-label">Why it made the list:</span> {product.reason}
        </p>
        {hasSummary && (
          <Link to={`/p/${product.id}`} className="small link-more">Read the summary →</Link>
        )}
      </div>
      <div className="prow-buy">
        <Price value={product.price} />
        <AmazonButton product={product} />
      </div>
    </li>
  )
}

export function MiniProduct({ product }) {
  return (
    <article className="mini">
      <ProductImage product={product} size="md" />
      <div>
        {product.featured && <FeaturedBadge />}
        <h3 className="mini-title">{product.name}</h3>
        <p className="muted small">{product.category.name}</p>
        <Stars rating={product.rating} reviews={product.reviews} />
        <div className="mini-actions">
          <Link to={`/c/${product.category.slug}`} className="btn btn-ghost">View category</Link>
          <AmazonButton product={product} variant="secondary" label="On Amazon" />
        </div>
      </div>
    </article>
  )
}

/* ---------- Layout ---------- */

function SearchBox({ className = '' }) {
  const nav = useNavigate()
  const [q, setQ] = useState('')
  return (
    <form
      className={`search ${className}`}
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
        nav(`/search?q=${encodeURIComponent(q.trim())}`)
      }}
    >
      <input
        type="search"
        placeholder="Search top picks, e.g. air fryer"
        aria-label="Search products"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button type="submit" aria-label="Search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
      </button>
    </form>
  )
}

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label={`${BRAND.name} home`}>
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h14M5 12h10M5 17h6" /></svg>
      </span>
      {BRAND.name}
      <span className="logo-tag">placeholder brand</span>
    </Link>
  )
}

export function Layout({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="sample-bar">
        Concept prototype. All products, prices and ratings are sample data.
      </div>
      <header className="site-header">
        <div className="wrap header-inner">
          <Logo />
          <SearchBox className="search-desktop" />
          <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        <nav id="site-nav" className={`wrap cat-nav ${open ? 'open' : ''}`} aria-label="Categories">
          <SearchBox className="search-mobile" />
          {CATEGORIES.map((c) => (
            <NavLink key={c.slug} to={`/c/${c.slug}`} onClick={() => setOpen(false)}>
              {c.name}
            </NavLink>
          ))}
          <NavLink to="/how-we-pick" onClick={() => setOpen(false)}>How we pick</NavLink>
          <NavLink to="/admin" className="nav-admin" onClick={() => setOpen(false)}>Admin (concept)</NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <Logo />
            <p className="muted small footer-copy">{BRAND.tagline}</p>
          </div>
          <div>
            <h4>Categories</h4>
            {CATEGORIES.map((c) => <Link key={c.slug} to={`/c/${c.slug}`}>{c.name}</Link>)}
          </div>
          <div>
            <h4>About</h4>
            <Link to="/how-we-pick">How we pick</Link>
            <Link to="/disclosure">Affiliate disclosure</Link>
            <Link to="/disclosure#privacy">Privacy</Link>
            <Link to="/disclosure#cookies">Cookies</Link>
          </div>
        </div>
        <div className="wrap">
          <DisclosureNote compact />
        </div>
      </footer>
    </>
  )
}
