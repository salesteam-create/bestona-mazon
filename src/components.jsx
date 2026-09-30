import { createContext, useContext, useState, useCallback, useRef, useEffect, useMemo } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { BRAND, CATEGORIES, COMING_SOON, PRICE_AS_OF, discount, productById } from './data/catalog.js'
import { Icon, ProductImage } from './icons.jsx'

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

export function AmazonButton({ product, label = 'Buy on Amazon', size, block }) {
  const toast = useToast()
  return (
    <button
      type="button"
      className={`btn btn-buy ${size === 'sm' ? 'btn-sm' : ''} ${block ? 'btn-block' : ''}`}
      onClick={(e) => {
        e.preventDefault()
        toast(`Prototype: in the live site this opens "${product.name}" on Amazon via an affiliate link.`)
      }}
    >
      {label}
      <span aria-hidden="true" className="ext">↗</span>
    </button>
  )
}

/* ---------- Saved list (per-browser convenience only) ---------- */

const SavedContext = createContext({ ids: [], toggle: () => {}, has: () => false })
const KEY = 'bm-saved'

export function SavedProvider({ children }) {
  const [ids, setIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] }
  })
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(ids)) } catch { /* storage unavailable */ }
  }, [ids])
  const value = useMemo(() => ({
    ids,
    has: (id) => ids.includes(id),
    toggle: (id) => setIds((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id])),
  }), [ids])
  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>
}

export const useSaved = () => useContext(SavedContext)

export function SaveButton({ product, withLabel }) {
  const { has, toggle } = useSaved()
  const on = has(product.id)
  return (
    <button
      type="button"
      className={`save-btn ${on ? 'on' : ''} ${withLabel ? 'with-label' : ''}`}
      aria-pressed={on}
      aria-label={on ? 'Remove from saved' : 'Save for later'}
      onClick={(e) => { e.preventDefault(); toggle(product.id) }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill={on ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>
      {withLabel && <span>{on ? 'Saved' : 'Save to list'}</span>}
    </button>
  )
}

/* ---------- Small pieces ---------- */

export function Stars({ rating, reviews, compact }) {
  const pct = (rating / 5) * 100
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars, ${reviews.toLocaleString()} ratings`}>
      {!compact && <span className="stars-num">{rating.toFixed(1)}</span>}
      <span className="stars-track" aria-hidden="true">
        ★★★★★<span className="stars-fill" style={{ width: `${pct}%` }}>★★★★★</span>
      </span>
      <span className="stars-count">{compact ? `(${shortNum(reviews)})` : reviews.toLocaleString()}</span>
    </span>
  )
}

const shortNum = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K` : String(n))

export function Price({ product, size }) {
  const [whole, cents] = product.price.toFixed(2).split('.')
  const off = discount(product)
  return (
    <div className={`price ${size === 'lg' ? 'price-lg' : ''}`}>
      {off > 0 && <span className="price-off">-{off}%</span>}
      <span className="price-main" aria-label={`$${product.price.toFixed(2)}`}>
        <sup>$</sup>{whole}<sup>{cents}</sup>
      </span>
      {product.list && <span className="price-list">List: <s>${product.list.toFixed(2)}</s></span>}
    </div>
  )
}

export function AsOf() {
  return <span className="as-of">Price on Amazon as of {PRICE_AS_OF}</span>
}

export function SponsoredLabel() {
  return (
    <Link to="/how-we-pick#featured" className="sponsored" onClick={(e) => e.stopPropagation()}>
      Sponsored <span aria-hidden="true">ⓘ</span>
    </Link>
  )
}

export function RankBadge({ product }) {
  return (
    <span className={`rank-badge ${product.rank === 1 ? 'rank-1' : ''}`}>
      #{product.rank} <span>in {product.category.name}</span>
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
    <p className={`disclosure-note ${className}`}>
      As an Amazon Associate we earn from qualifying purchases. Sponsored picks are paid placements, always labelled,
      and never part of the Top 10. <Link to="/how-we-pick">How we pick</Link>
    </p>
  )
}

/* ---------- Product cards ---------- */

export function ProductCard({ product }) {
  return (
    <article className={`pcard ${product.sponsored ? 'pcard-sponsored' : ''}`}>
      <Link to={`/p/${product.id}`} className="pcard-img">
        <ProductImage product={product} size="md" />
        {product.sponsored ? <span className="ribbon ribbon-sp">Featured Pick</span> : <RankBadge product={product} />}
      </Link>
      <SaveButton product={product} />
      <div className="pcard-body">
        {product.sponsored && <SponsoredLabel />}
        <Link to={`/p/${product.id}`} className="pcard-title">{product.name}</Link>
        <span className="pcard-brand">by {product.brand}</span>
        <Stars rating={product.rating} reviews={product.reviews} />
        <Price product={product} />
        <AsOf />
        <p className="pcard-why"><strong>Why it's here:</strong> {product.reason}</p>
        <div className="pcard-cta"><AmazonButton product={product} block /></div>
      </div>
    </article>
  )
}

export function ProductTile({ product }) {
  return (
    <Link to={`/p/${product.id}`} className="ptile">
      <div className="ptile-img">
        <ProductImage product={product} size="sm" />
        {discount(product) > 0 && <span className="deal-chip">-{discount(product)}%</span>}
      </div>
      {product.sponsored ? <span className="sponsored-text">Sponsored</span> : <span className="ptile-rank">#{product.rank} in {product.category.name}</span>}
      <span className="ptile-title">{product.name}</span>
      <Stars rating={product.rating} reviews={product.reviews} compact />
      <span className="ptile-price">${product.price.toFixed(2)}</span>
    </Link>
  )
}

export function Row({ title, link, products, note }) {
  const ref = useRef()
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' })
  return (
    <section className="row-card">
      <div className="row-head">
        <h2>{title}</h2>
        {link && <Link to={link.to} className="see-more">{link.label}</Link>}
        {note && <span className="row-note">{note}</span>}
      </div>
      <div className="row-wrap">
        <button className="row-arrow left" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
        <div className="row-scroll" ref={ref}>
          {products.map((p) => <ProductTile key={p.id} product={p} />)}
        </div>
        <button className="row-arrow right" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
      </div>
    </section>
  )
}

/* ---------- Results with filters (category, search, deals) ---------- */

const SORTS = {
  rank: { label: 'Our Top 10 ranking', fn: (a, b) => a.rank - b.rank },
  rating: { label: 'Avg. customer review', fn: (a, b) => b.rating - a.rating || a.rank - b.rank },
  low: { label: 'Price: Low to High', fn: (a, b) => a.price - b.price },
  high: { label: 'Price: High to Low', fn: (a, b) => b.price - a.price },
  reviews: { label: 'Most reviews', fn: (a, b) => b.reviews - a.reviews },
}

const PRICES = [
  { key: 'all', label: 'Any price', test: () => true },
  { key: 'u25', label: 'Under $25', test: (p) => p.price < 25 },
  { key: '25-50', label: '$25 to $50', test: (p) => p.price >= 25 && p.price <= 50 },
  { key: '50-100', label: '$50 to $100', test: (p) => p.price > 50 && p.price <= 100 },
  { key: 'o100', label: '$100 & above', test: (p) => p.price > 100 },
]

export function Results({ title, products, sponsored = [], showCategories, defaultSort = 'rank' }) {
  const [sort, setSort] = useState(defaultSort)
  const [price, setPrice] = useState('all')
  const [minStars, setMinStars] = useState(0)
  const [brands, setBrands] = useState([])
  const [dealsOnly, setDealsOnly] = useState(false)
  const [open, setOpen] = useState(false)

  const allBrands = useMemo(() => [...new Set(products.map((p) => p.brand))].sort(), [products])
  const pass = (p) =>
    PRICES.find((x) => x.key === price).test(p) &&
    p.rating >= minStars &&
    (!brands.length || brands.includes(p.brand)) &&
    (!dealsOnly || discount(p) > 0)
  const list = products.filter(pass).sort(SORTS[sort].fn)
  const sp = sponsored.filter(pass)
  const active = price !== 'all' || minStars || brands.length || dealsOnly
  const clear = () => { setPrice('all'); setMinStars(0); setBrands([]); setDealsOnly(false) }

  return (
    <div className="results">
      <div className="results-bar">
        <p>
          <strong>{list.length}</strong> of {products.length} results {title && <>for <span className="hl">{title}</span></>}
        </p>
        <div className="results-tools">
          <button className="filter-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>Filters{active ? ' •' : ''}</button>
          <label className="sort">
            <span>Sort by:</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              {Object.entries(SORTS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </label>
        </div>
      </div>

      <div className="results-layout">
        <aside className={`filters ${open ? 'open' : ''}`} aria-label="Filters">
          {showCategories && (
            <div className="fgroup">
              <h3>Department</h3>
              {CATEGORIES.map((c) => <Link key={c.slug} to={`/c/${c.slug}`} className="flink">{c.name}</Link>)}
            </div>
          )}
          <div className="fgroup">
            <h3>Customer Reviews</h3>
            {[4.5, 4].map((s) => (
              <button key={s} className={`flink stars-filter ${minStars === s ? 'on' : ''}`} onClick={() => setMinStars(minStars === s ? 0 : s)}>
                <span className="stars-track" aria-hidden="true">★★★★★<span className="stars-fill" style={{ width: `${(s / 5) * 100}%` }}>★★★★★</span></span>
                <span>{s} & Up</span>
              </button>
            ))}
          </div>
          <div className="fgroup">
            <h3>Price</h3>
            {PRICES.map((x) => (
              <button key={x.key} className={`flink ${price === x.key ? 'on' : ''}`} onClick={() => setPrice(x.key)}>{x.label}</button>
            ))}
          </div>
          <div className="fgroup">
            <h3>Deals & Discounts</h3>
            <label className="check"><input type="checkbox" checked={dealsOnly} onChange={(e) => setDealsOnly(e.target.checked)} /> Today's Deals</label>
          </div>
          <div className="fgroup">
            <h3>Brands</h3>
            {allBrands.map((b) => (
              <label key={b} className="check">
                <input
                  type="checkbox"
                  checked={brands.includes(b)}
                  onChange={() => setBrands((cur) => (cur.includes(b) ? cur.filter((x) => x !== b) : [...cur, b]))}
                />
                {b}
              </label>
            ))}
          </div>
          {active ? <button className="clear" onClick={clear}>Clear all filters</button> : null}
        </aside>

        <div className="results-main">
          {list.length + sp.length ? (
            <div className="pgrid">
              {sp.map((p) => <ProductCard key={p.id} product={p} />)}
              {list.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="empty">
              <p>No results match these filters.</p>
              <button className="btn btn-ghost" onClick={clear}>Clear filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ---------- Layout ---------- */

// Recreated from the brand logo: amber circle with a black "bm" mark.
export function LogoMark({ size = 38 }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#f9ac1f" />
      <text x="46" y="67" textAnchor="middle" fontFamily="Montserrat, Inter, Arial, sans-serif" fontWeight="800" fontSize="50" letterSpacing="-3" fill="#111">bm</text>
      <path d="M64 29 L80 25 L82 37 Z" fill="#111" />
    </svg>
  )
}

export function Logo({ light }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label={`${BRAND.name} home`}>
      <LogoMark />
      <span className="logo-word">BESTONA<span>MAZON</span></span>
    </Link>
  )
}

function SearchBar() {
  const nav = useNavigate()
  const loc = useLocation()
  const params = new URLSearchParams(loc.search)
  const [q, setQ] = useState(params.get('q') || '')
  const [cat, setCat] = useState(params.get('cat') || 'all')
  return (
    <form
      className="searchbar"
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
        nav(`/search?q=${encodeURIComponent(q.trim())}${cat !== 'all' ? `&cat=${cat}` : ''}`)
      }}
    >
      <select value={cat} onChange={(e) => setCat(e.target.value)} aria-label="Search in category">
        <option value="all">All</option>
        {CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
      </select>
      <input type="search" placeholder="Search Bestona Mazon" aria-label="Search" value={q} onChange={(e) => setQ(e.target.value)} />
      <button type="submit" aria-label="Search">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
      </button>
    </form>
  )
}

function Drawer({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <>
      <div className={`scrim ${open ? 'show' : ''}`} onClick={onClose} aria-hidden="true" />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-label="All departments" aria-hidden={!open}>
        <div className="drawer-head">
          <span className="drawer-user">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
            Hello, shopper
          </span>
          <button onClick={onClose} aria-label="Close menu" className="drawer-x">✕</button>
        </div>
        <div className="drawer-body">
          <h3>Top 10 by department</h3>
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to={`/c/${c.slug}`} onClick={onClose} className="drawer-link">
              <Icon name={c.icon} size={22} /> {c.name} <span aria-hidden="true">›</span>
            </Link>
          ))}
          <h3>Coming soon</h3>
          {COMING_SOON.map((n) => <span key={n} className="drawer-link muted-link">{n}</span>)}
          <h3>Help & settings</h3>
          <Link to="/deals" onClick={onClose} className="drawer-link">Today's Deals</Link>
          <Link to="/saved" onClick={onClose} className="drawer-link">Your saved list</Link>
          <Link to="/how-we-pick" onClick={onClose} className="drawer-link">How we pick</Link>
          <Link to="/disclosure" onClick={onClose} className="drawer-link">Affiliate disclosure</Link>
          <Link to="/admin" onClick={onClose} className="drawer-link">Partner admin (concept)</Link>
        </div>
      </aside>
    </>
  )
}

export function Layout({ children }) {
  const [drawer, setDrawer] = useState(false)
  const { ids } = useSaved()
  const loc = useLocation()
  const close = useCallback(() => setDrawer(false), [])
  const validSaved = ids.filter((id) => productById(id)).length

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <Logo light />
          <span className="locale">
            <small>Shopping on</small>
            <strong>Amazon.com (US)</strong>
          </span>
          <SearchBar key={loc.search} />
          <span className="account">
            <small>Hello, sign in</small>
            <strong>Account</strong>
          </span>
          <Link to="/how-we-pick" className="account hide-sm">
            <small>Our method</small>
            <strong>How we pick</strong>
          </Link>
          <Link to="/saved" className="saved-link" aria-label={`Saved items: ${validSaved}`}>
            <span className="saved-count">{validSaved}</span>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>
            <strong className="hide-sm">Saved</strong>
          </Link>
        </div>
      </header>
      <nav className="subnav" aria-label="Departments">
        <button className="all-btn" onClick={() => setDrawer(true)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          All
        </button>
        <NavLink to="/deals">Today's Deals</NavLink>
        {CATEGORIES.map((c) => <NavLink key={c.slug} to={`/c/${c.slug}`}>{c.name}</NavLink>)}
        <NavLink to="/how-we-pick">How we pick</NavLink>
        <span className="subnav-note">Sample data prototype</span>
      </nav>
      <Drawer open={drawer} onClose={close} />
      <main>{children}</main>
      <footer className="footer">
        <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top</button>
        <div className="footer-cols">
          <div>
            <h4>Get to know us</h4>
            <Link to="/how-we-pick">How we pick</Link>
            <Link to="/how-we-pick#featured">About sponsored picks</Link>
            <Link to="/disclosure">Affiliate disclosure</Link>
          </div>
          <div>
            <h4>Top 10 lists</h4>
            {CATEGORIES.slice(0, 3).map((c) => <Link key={c.slug} to={`/c/${c.slug}`}>{c.name}</Link>)}
          </div>
          <div>
            <h4>More lists</h4>
            {CATEGORIES.slice(3).map((c) => <Link key={c.slug} to={`/c/${c.slug}`}>{c.name}</Link>)}
          </div>
          <div>
            <h4>For brands</h4>
            <Link to="/admin">Partner admin (concept)</Link>
            <Link to="/how-we-pick#featured">Become a Featured Pick</Link>
          </div>
        </div>
        <div className="footer-base">
          <Logo light />
          <DisclosureNote className="on-dark" />
          <p className="footer-legal">
            <Link to="/disclosure#privacy">Privacy</Link> · <Link to="/disclosure#cookies">Cookies</Link> · Concept prototype. All products, prices and ratings are sample data.
          </p>
        </div>
      </footer>
    </>
  )
}
