import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page page-inner empty">
      <h1>Page not found</h1>
      <p className="muted">This page is not part of the prototype.</p>
      <Link to="/" className="btn btn-buy">Back to home</Link>
    </div>
  )
}
