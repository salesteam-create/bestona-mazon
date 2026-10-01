import { Link, useParams } from 'react-router-dom'
import { productById, UPDATED } from '../data/catalog.js'
import { Stars, AmazonLink, SponsoredTag, Photo, DisclosureNote } from '../components.jsx'
import NotFound from './NotFound.jsx'

// Deliberately minimal: picture, short description, rating and a link to Amazon.
export default function Product() {
  const { id } = useParams()
  const product = productById(id)
  if (!product) return <NotFound />
  const sub = product.list
  const dept = sub.department

  return (
    <div className="page">
      <div className="pd-back">
        <Link to={`/list/${sub.slug}`}>← Back to the list</Link>
        <span> · </span>
        <Link to={`/d/${dept.slug}`}>{dept.name}</Link> › <Link to={`/list/${sub.slug}`}>{sub.name}</Link>
      </div>
      <div className="pd">
        <div className="pd-img"><Photo item={product} label="main product shot" /></div>
        <div className="pd-info">
          {product.sponsored ? <SponsoredTag /> : <span className="rank-chip">#{product.rank} in {sub.name} · {product.label}</span>}
          <span className="brand-link">{product.brand}</span>
          <h1>{product.name}</h1>
          <Stars rating={product.rating} reviews={product.reviews} size="lg" />
          <div className="rule" />
          <p className="pd-blurb">{product.blurb}</p>
          <div className="pd-points">
            <span className="pd-points-h">Why it stands out</span>
            {product.highlights.map((h) => <span key={h} className="dot-item">{h}</span>)}
          </div>
        </div>
        <aside className="pd-box" aria-label="Where to buy">
          <span className="pd-price">${product.price.toFixed(2)}</span>
          <span className="soft small">Price on Amazon as of {UPDATED}. Prices change, so check the latest on Amazon.</span>
          <AmazonLink product={product} block />
          <div className="rule" />
          <div className="pd-facts">
            <span>Sold on</span><span>Amazon.com</span>
            <span>Our rank</span><span>{product.sponsored ? 'Featured Pick (paid)' : `#${product.rank} of 10`}</span>
            <span>List</span><Link to={`/list/${sub.slug}`} className="u-link">{sub.name}</Link>
          </div>
          <span className="soft small">We may earn a commission at no extra cost to you.</span>
        </aside>
      </div>
      <DisclosureNote />
    </div>
  )
}
