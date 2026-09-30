import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productById, discount } from '../data/catalog.js'
import { Breadcrumbs, Stars, Price, AsOf, AmazonButton, SaveButton, SponsoredLabel, RankBadge, Row, DisclosureNote } from '../components.jsx'
import { ProductImage } from '../icons.jsx'
import NotFound from './NotFound.jsx'

export default function Product() {
  const { id } = useParams()
  const product = productById(id)
  const [view, setView] = useState(0)
  if (!product) return <NotFound />
  const cat = product.category
  const others = cat.products.filter((p) => p.id !== product.id)
  const compare = [product, ...others.slice(0, 3)]

  return (
    <div className="page page-inner" key={id}>
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: cat.name, to: `/c/${cat.slug}` }, { label: product.name.split(',')[0] }]} />

      <div className="pd">
        <div className="pd-gallery">
          <div className="pd-thumbs">
            {[0, 1, 2, 3].map((v) => (
              <button key={v} className={view === v ? 'on' : ''} onClick={() => setView(v)} onMouseEnter={() => setView(v)} aria-label={`Image ${v + 1}`}>
                <ProductImage product={product} size="xs" variant={v} />
              </button>
            ))}
          </div>
          <div className="pd-main-img">
            <ProductImage product={product} size="lg" variant={view} />
            <span className="sample-tag">Sample image</span>
          </div>
        </div>

        <div className="pd-info">
          {product.sponsored ? <SponsoredLabel /> : null}
          <h1>{product.name}</h1>
          <span className="pd-brand">Brand: {product.brand}</span>
          <div className="pd-rating">
            <Stars rating={product.rating} reviews={product.reviews} />
            <span className="muted">ratings on Amazon</span>
          </div>
          {product.sponsored ? (
            <span className="ribbon ribbon-sp inline">Featured Pick · Paid placement</span>
          ) : (
            <RankBadge product={product} />
          )}
          <hr />
          <Price product={product} size="lg" />
          <AsOf />
          <hr />
          <div className="pd-why">
            <h2>{product.sponsored ? 'Why we feature it' : 'Why it made our Top 10'}</h2>
            <p>{product.reason}</p>
            {product.suits && <p><strong>Best for:</strong> {product.suits}</p>}
          </div>
          <h2>About this item</h2>
          <ul className="bullets">{product.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          {product.pros && (
            <div className="pc">
              <div><h3>What we like</h3><ul className="pros">{product.pros.map((x) => <li key={x}>{x}</li>)}</ul></div>
              <div><h3>Worth knowing</h3><ul className="cons">{product.cons.map((x) => <li key={x}>{x}</li>)}</ul></div>
            </div>
          )}
        </div>

        <aside className="buybox" aria-label="Buy options">
          <Price product={product} />
          {discount(product) > 0 && <span className="deal-tag">Deal on Amazon today</span>}
          <p className="buybox-meta">Sold and shipped on <strong>Amazon.com</strong>. Price and availability are set by Amazon.</p>
          <AmazonButton product={product} block />
          <SaveButton product={product} withLabel />
          <hr />
          <p className="buybox-meta small">
            We may earn a commission when you buy through this link, at no extra cost to you.
            {product.sponsored && ' This is a paid Featured Pick.'}
          </p>
        </aside>
      </div>

      {!product.sponsored && (
        <section className="compare">
          <h2>Compare with other Top 10 picks</h2>
          <div className="compare-scroll">
            <table>
              <thead>
                <tr>
                  <th />
                  {compare.map((p) => (
                    <th key={p.id} className={p.id === product.id ? 'this' : ''}>
                      <Link to={`/p/${p.id}`}>
                        <ProductImage product={p} size="sm" />
                        <span>{p.name.split(',')[0]}</span>
                      </Link>
                      {p.id === product.id && <em>This item</em>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr><th>Rank</th>{compare.map((p) => <td key={p.id}>#{p.rank} in {cat.name}</td>)}</tr>
                <tr><th>Rating</th>{compare.map((p) => <td key={p.id}><Stars rating={p.rating} reviews={p.reviews} compact /></td>)}</tr>
                <tr><th>Price</th>{compare.map((p) => <td key={p.id}><strong>${p.price.toFixed(2)}</strong></td>)}</tr>
                <tr><th>Brand</th>{compare.map((p) => <td key={p.id}>{p.brand}</td>)}</tr>
                <tr><th>Why it's here</th>{compare.map((p) => <td key={p.id} className="why">{p.reason}</td>)}</tr>
                <tr><th /><td colSpan={compare.length}><div className="compare-ctas">{compare.map((p) => <AmazonButton key={p.id} product={p} size="sm" />)}</div></td></tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      <Row title={`More from the Top 10 in ${cat.name}`} link={{ label: 'See the full list', to: `/c/${cat.slug}` }} products={others} />
      <DisclosureNote />
    </div>
  )
}
