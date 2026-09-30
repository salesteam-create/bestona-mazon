import { Link, useParams } from 'react-router-dom'
import { productById } from '../data/catalog.js'
import { Breadcrumbs, Stars, Price, AmazonButton, DisclosureNote } from '../components.jsx'
import { ProductImage } from '../icons.jsx'
import NotFound from './NotFound.jsx'

export default function Product() {
  const { id } = useParams()
  const product = productById(id)
  if (!product || !product.summary) return <NotFound />
  const { category: cat, summary: s } = product

  return (
    <div className="wrap page">
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: cat.name, to: `/c/${cat.slug}` },
          { label: product.name },
        ]}
      />

      <div className="pd">
        <ProductImage product={product} size="lg" />
        <div className="pd-info">
          <span className="rank-pill">#{product.rank} in {cat.name}</span>
          <p className="eyebrow">{product.brand}</p>
          <h1>{product.name}</h1>
          <Stars rating={product.rating} reviews={product.reviews} />
          <p className="lead">{s.overview}</p>
          <div className="pd-buy">
            <Price value={product.price} />
            <AmazonButton product={product} />
          </div>
          <DisclosureNote compact />
        </div>
      </div>

      <div className="pd-grid">
        <section className="card">
          <h2>Key features</h2>
          <ul className="ticks">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </section>
        <section className="card">
          <h2>Who it suits</h2>
          <p>{s.suits}</p>
        </section>
        <section className="card pros">
          <h2>Pros</h2>
          <ul>{s.pros.map((f) => <li key={f}>{f}</li>)}</ul>
        </section>
        <section className="card cons">
          <h2>Cons</h2>
          <ul>{s.cons.map((f) => <li key={f}>{f}</li>)}</ul>
        </section>
      </div>

      <div className="pd-bottom">
        <div>
          <h2>Ready to compare?</h2>
          <p className="muted">See where it sits against the rest of the top 10.</p>
        </div>
        <div className="row-actions">
          <Link to={`/c/${cat.slug}`} className="btn btn-ghost">Back to the top 10</Link>
          <AmazonButton product={product} />
        </div>
      </div>
    </div>
  )
}
