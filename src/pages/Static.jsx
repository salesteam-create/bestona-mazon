import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components.jsx'

export function HowWePick() {
  return (
    <div className="page page-inner prose">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'How we pick' }]} />
      <h1>How we pick</h1>
      <p className="lead">Every list is built the same way, so you can judge it for yourself.</p>

      <ol className="steps">
        <li>
          <h3>Start from real demand</h3>
          <p>We begin with the products people actually buy most in each Amazon category.</p>
        </li>
        <li>
          <h3>Filter for quality</h3>
          <p>We drop products with weak long-term ratings, a pattern of returns or safety complaints, and near-duplicate listings.</p>
        </li>
        <li>
          <h3>Rank and explain</h3>
          <p>The remaining products are ranked on rating, value and how often buyers come back. Each pick gets a short reason it made the list.</p>
        </li>
        <li>
          <h3>Refresh regularly</h3>
          <p>Lists are reviewed on a regular schedule. Prices are shown with the date they were checked.</p>
        </li>
      </ol>

      <h2 id="featured">How Featured Picks work</h2>
      <p><span className="ribbon ribbon-sp inline">Featured Pick</span> <span className="sponsored-text">Sponsored</span></p>
      <p>
        Some brands pay to appear as a Featured Pick at the top of a category. Featured Picks are always labelled,
        shown in the first slot of each department, separate from the ranked products, and are never counted in the independent Top 10. Paying for a Featured
        Pick does not change a product's position in the rankings.
      </p>

      <h2>How we make money</h2>
      <p>
        We earn a commission when you buy through our links, at no extra cost to you, and from Featured Pick
        placements. See our <Link to="/disclosure">affiliate disclosure</Link>.
      </p>
    </div>
  )
}

export function Disclosure() {
  return (
    <div className="page page-inner prose">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Disclosure and legal' }]} />
      <h1>Disclosure and legal</h1>
      <p className="notice">Placeholder copy for the prototype. Final wording needs legal review.</p>

      <h2 id="affiliate">Affiliate disclosure</h2>
      <p>
        As an Amazon Associate we earn from qualifying purchases. When you click a link to Amazon and buy something, we
        may earn a commission. This does not change the price you pay.
      </p>
      <p>
        Featured Picks are paid placements from brands we work with. They are labelled "Featured Pick" and "Sponsored"
        and sit outside the independent rankings.
      </p>

      <h2 id="privacy">Privacy policy</h2>
      <p className="placeholder">Privacy policy to be added: what we collect, why, how long we keep it, and your rights.</p>

      <h2 id="cookies">Cookie policy</h2>
      <p className="placeholder">Cookie policy to be added: analytics and affiliate cookies, and how to manage consent.</p>
    </div>
  )
}
