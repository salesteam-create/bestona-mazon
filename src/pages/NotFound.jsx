import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <div className="empty"><h1>Page not found</h1>
      <p className="muted">This page is not part of the prototype.</p>
      <Link to="/" className="pill pill-amber">Back to home</Link></div>
    </div>
  )
}
