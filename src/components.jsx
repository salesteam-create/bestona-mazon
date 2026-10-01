import { createContext, useContext, useState, useCallback, useRef } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { BRAND, DEPARTMENTS, UPDATED } from './data/catalog.js'

/* ---------- Toast (stands in for outbound Amazon links) ---------- */

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
      <div className={`toast ${msg ? 'toast-show' : ''}`} role="status" aria-live="polite">{msg}</div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)

export function AmazonLink({ product, block, size }) {
  const toast = useToast()
  return (
    <button
      type="button"
      className={`pill pill-amber ${block ? 'pill-block' : ''} ${size === 'sm' ? 'pill-sm' : ''}`}
      onClick={() => toast(`Prototype: in the live site this goes straight to "${product.name}" on Amazon.`)}
    >
      <span className="lbl-long">Check price on Amazon</span><span className="lbl-short">See on Amazon</span> <span aria-hidden="true">↗</span>
    </button>
  )
}

/* ---------- Images: photo if set, striped photo placeholder if not ---------- */

const src = (path) => `${import.meta.env.BASE_URL}${path}`

export function Photo({ item, label, shape = 'square', className = '' }) {
  if (item?.image) {
    return <img className={`photo photo-${shape} ${className}`} src={src(item.image)} alt="" loading="lazy" />
  }
  return (
    <div className={`ph ph-${shape} ${className}`} role="img" aria-label={`Photo placeholder: ${label}`}>
      {label && <span>{label}</span>}
    </div>
  )
}

/* ---------- Small pieces ---------- */

export function Stars({ rating, reviews, size }) {
  return (
    <span className={`stars ${size === 'lg' ? 'stars-lg' : ''}`} aria-label={`${rating} out of 5 stars, ${reviews.toLocaleString()} ratings on Amazon`}>
      <span className="stars-track" aria-hidden="true">
        ★★★★★<span className="stars-fill" style={{ width: `${(rating / 5) * 100}%` }}>★★★★★</span>
      </span>
      <strong>{rating.toFixed(1)}</strong>
      <span className="soft">({reviews.toLocaleString()})</span>
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

export function DisclosureNote({ className = '' }) {
  return (
    <p className={`disclosure ${className}`}>
      We may earn a commission when you buy through our links. Featured Picks are paid placements, always labelled,
      and never part of the ranked Top 10. <Link to="/how-we-pick">How we pick</Link>
    </p>
  )
}

export function SponsoredTag() {
  return (
    <Link to="/how-we-pick#featured" className="sp-tag">
      Featured Pick · Sponsored <span aria-hidden="true">ⓘ</span>
    </Link>
  )
}

/* ---------- Category pieces (used everywhere outside a list) ---------- */

// Card styled like the frames' ProductCard, but for a category list.
export function ListCard({ sub }) {
  const body = (
    <>
      <div className="lc-img">
        <Photo item={sub} label={`${sub.name.toLowerCase()} photo`} />
        <span className="badge">{sub.live ? 'Top 10' : 'Coming soon'}</span>
      </div>
      <div className="lc-title">{sub.name}</div>
      <div className="lc-meta">
        <span>{sub.department.name}</span>
        <span>{sub.live ? <>Updated <strong>{UPDATED}</strong></> : 'List in progress'}</span>
      </div>
    </>
  )
  return sub.live ? <Link to={`/list/${sub.slug}`} className="lc">{body}</Link> : <span className="lc lc-soon" aria-disabled="true">{body}</span>
}

// Circle tile from the frames' "Shop by category" row.
export function DeptCircle({ dept }) {
  return (
    <Link to={`/d/${dept.slug}`} className="circle">
      <Photo item={dept} shape="circle" />
      <span>{dept.name}</span>
    </Link>
  )
}

// Card styled like the frames' seller cards, used for departments.
export function DeptCard({ dept }) {
  const initials = dept.name.split(/[\s&]+/).filter(Boolean).map((w) => w[0]).join('').slice(0, 2)
  return (
    <Link to={`/d/${dept.slug}`} className="dc">
      <div className="dc-head">
        <span className="dc-mark">{initials}</span>
        <span className="dc-name">
          <strong>{dept.name}</strong>
          <span>{dept.subcategories.length} categories · {dept.subcategories.filter((s) => s.live).length} live</span>
        </span>
      </div>
      <div className="dc-thumbs">
        {dept.subcategories.slice(0, 3).map((s) => <Photo key={s.slug} item={s} className="dc-thumb" />)}
      </div>
      <span className="dc-cta">See categories →</span>
    </Link>
  )
}

/* ---------- List page pieces ---------- */

export function FeaturedBlock({ product }) {
  return (
    <section className="feat" aria-label="Featured Pick, sponsored">
      <div className="feat-top">
        <SponsoredTag />
        <span className="soft small">Paid placement · outside the ranking</span>
      </div>
      <div className="feat-inner">
        <Link to={`/p/${product.id}`} className="feat-img"><Photo item={product} label="product shot" /></Link>
        <div className="feat-body">
          <span className="brand-link">{product.brand}</span>
          <h2><Link to={`/p/${product.id}`}>{product.name}</Link></h2>
          <Stars rating={product.rating} reviews={product.reviews} />
          <p>{product.blurb}</p>
          <div className="row-actions">
            <span className="price">${product.price.toFixed(2)}</span>
            <AmazonLink product={product} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function RankedItem({ product }) {
  return (
    <li className="rk">
      <span className="rk-num" aria-hidden="true">{String(product.rank).padStart(2, '0')}</span>
      <Link to={`/p/${product.id}`} className="rk-img">
        <Photo item={product} label="product shot" />
        <span className="badge">{product.label}</span>
      </Link>
      <div className="rk-body">
        <span className="rk-label-m">{product.label}</span>
        <span className="brand-link">{product.brand}</span>
        <h3><Link to={`/p/${product.id}`}><span className="sr-only">Number {product.rank}: </span>{product.name}</Link></h3>
        <Stars rating={product.rating} reviews={product.reviews} />
        <p>{product.blurb}</p>
        <div className="row-actions">
          <span className="price">${product.price.toFixed(2)}<small> on Amazon, {UPDATED}</small></span>
          <AmazonLink product={product} />
          <Link to={`/p/${product.id}`} className="u-link">Quick look</Link>
        </div>
      </div>
    </li>
  )
}

/* ---------- Layout ---------- */

export function SearchBar({ big }) {
  const nav = useNavigate()
  const loc = useLocation()
  const [q, setQ] = useState(() => new URLSearchParams(loc.search).get('q') || '')
  return (
    <form
      className={`searchbar ${big ? 'searchbar-big' : ''}`}
      role="search"
      onSubmit={(e) => { e.preventDefault(); nav(`/search?q=${encodeURIComponent(q.trim())}`) }}
    >
      <input type="search" placeholder="Search Top 10 lists, e.g. air fryers" aria-label="Search Top 10 lists" value={q} onChange={(e) => setQ(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}

export function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  const close = () => setOpen(false)
  return (
    <>
      <header className="hdr">
        <div className="hdr-top">
          <Link to="/" className="hdr-logo" aria-label={`${BRAND.name} home`}>
            <img src={src('logo.png')} alt="Bestona Mazon" />
          </Link>
          <div className="hdr-search"><SearchBar key={loc.search} /></div>
          <Link to="/how-we-pick" className="hdr-meta">
            <span>Our method</span>
            <strong>How we pick</strong>
          </Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="dept-nav" onClick={() => setOpen(!open)}>
            <span className="burger" aria-hidden="true"><i /><i /><i /></span>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        <nav id="dept-nav" className={`hdr-nav ${open ? 'open' : ''}`} aria-label="Departments">
          <NavLink to="/" end onClick={close}>All departments</NavLink>
          {DEPARTMENTS.map((d) => <NavLink key={d.slug} to={`/d/${d.slug}`} onClick={close}>{d.name}</NavLink>)}
          <NavLink to="/how-we-pick" onClick={close} className="nav-mobile-only">How we pick</NavLink>
          <Link to="/how-we-pick#featured" onClick={close} className="hdr-partner">Partner with us</Link>
        </nav>
      </header>
      <div className="proto-note">Concept prototype · products, prices and ratings are sample data</div>
      <main>{children}</main>
      <footer className="ftr">
        <div className="ftr-grid">
          <div className="ftr-brand">
            <span className="ftr-logo">BESTONA <span>MAZON</span></span>
            <span>{BRAND.tagline}</span>
          </div>
          <div>
            <span className="ftr-h">Departments</span>
            {DEPARTMENTS.slice(0, 3).map((d) => <Link key={d.slug} to={`/d/${d.slug}`}>{d.name}</Link>)}
          </div>
          <div>
            <span className="ftr-h">More</span>
            {DEPARTMENTS.slice(3).map((d) => <Link key={d.slug} to={`/d/${d.slug}`}>{d.name}</Link>)}
          </div>
          <div>
            <span className="ftr-h">About</span>
            <Link to="/how-we-pick">How we pick</Link>
            <Link to="/disclosure">Affiliate disclosure</Link>
            <Link to="/admin">Partner admin (concept)</Link>
          </div>
        </div>
        <div className="ftr-base"><DisclosureNote className="on-dark" /></div>
      </footer>
    </>
  )
}
