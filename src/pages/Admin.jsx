import { ADMIN_SLOTS, LIVE_SUBS } from '../data/catalog.js'
import { useToast } from '../components.jsx'

// Wireframe only: shows how the client would manage Featured Pick slots.
export default function Admin() {
  const toast = useToast()
  const noop = (e) => {
    e.preventDefault()
    toast('Concept wireframe: the admin is not functional in the prototype.')
  }

  return (
    <div className="wrap page wf">
      <div className="wf-banner">
        <strong>Concept wireframe</strong> · Featured slot admin. Not functional in the prototype.
      </div>

      <h1>Featured Pick slots</h1>
      <p className="muted">Assign a seller client's product to the Featured Pick slot of a Top 10 list and track clicks.</p>

      <div className="wf-stats">
        <div className="wf-box"><span className="wf-label">Active slots</span><strong>6 / 6</strong></div>
        <div className="wf-box"><span className="wf-label">Clicks (30 days)</span><strong>6,696</strong></div>
        <div className="wf-box"><span className="wf-label">Avg. click-through</span><strong>5.8%</strong></div>
      </div>

      <div className="wf-layout">
        <form className="wf-box wf-form" onSubmit={noop}>
          <h2>Assign a slot</h2>
          <label>Category
            <select defaultValue="">
              <option value="" disabled>Select category</option>
              {LIVE_SUBS.map((s) => <option key={s.slug}>{s.department.name} &gt; {s.name}</option>)}
            </select>
          </label>
          <label>Product ASIN
            <input placeholder="e.g. B0XXXXXXXX" />
          </label>
          <label>Seller client
            <input placeholder="Client name" />
          </label>
          <div className="wf-two">
            <label>Start date<input type="date" /></label>
            <label>End date<input type="date" /></label>
          </div>
          <label>Label shown on site
            <select defaultValue="Featured Pick">
              <option>Featured Pick</option>
            </select>
          </label>
          <div className="wf-actions">
            <button className="wf-btn" onClick={noop}>Preview card</button>
            <button className="wf-btn wf-btn-dark" type="submit">Save slot</button>
          </div>
        </form>

        <div className="wf-box">
          <h2>Current slots</h2>
          <div className="wf-table-wrap">
            <table className="wf-table">
              <thead>
                <tr><th>Category</th><th>ASIN</th><th>Product</th><th>Client</th><th>Dates</th><th>Clicks</th><th>CTR</th><th /></tr>
              </thead>
              <tbody>
                {ADMIN_SLOTS.map((s) => (
                  <tr key={s.asin}>
                    <td>{s.category}</td>
                    <td className="mono">{s.asin}</td>
                    <td>{s.product}</td>
                    <td>{s.client}</td>
                    <td>{s.start} to {s.end}</td>
                    <td>{s.clicks.toLocaleString()}</td>
                    <td>{s.ctr}</td>
                    <td><button className="wf-link" onClick={noop}>Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="wf-chart" aria-hidden="true">
            {[40, 55, 48, 62, 70, 66, 80, 74, 88, 92, 85, 96].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="wf-label">Clicks per week, all Featured Picks (illustrative)</p>
        </div>
      </div>
    </div>
  )
}
