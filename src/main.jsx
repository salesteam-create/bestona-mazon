import { StrictMode, Component, useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Layout, ToastProvider } from './components.jsx'
import Home from './pages/Home.jsx'
import { Department, List } from './pages/Category.jsx'
import Product from './pages/Product.jsx'
import Search from './pages/Search.jsx'
import Admin from './pages/Admin.jsx'
import NotFound from './pages/NotFound.jsx'
import { HowWePick, Disclosure } from './pages/Static.jsx'
import './styles.css'

// Hash routing keeps deep links working on GitHub Pages without a 404 fallback.

// Jump (not animate) to the top before the new page paints, so a click from
// far down a long page never lands on an empty-looking screen.
function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

// Show a message instead of a blank screen if a page ever fails to render.
class PageErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  componentDidUpdate(prev) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) this.setState({ error: null })
  }
  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="page">
        <div className="empty">
          <h1>Something went wrong on this page</h1>
          <p>Try another page, or reload.</p>
          <button className="pill pill-amber" onClick={() => window.location.reload()}>Reload</button>
        </div>
      </div>
    )
  }
}

function Pages() {
  const { pathname } = useLocation()
  return (
    <PageErrorBoundary resetKey={pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/d/:slug" element={<Department />} />
        <Route path="/list/:slug" element={<List />} />
        <Route path="/p/:id" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/how-we-pick" element={<HowWePick />} />
        <Route path="/disclosure" element={<Disclosure />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageErrorBoundary>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <ToastProvider>
        <Layout>
          <Pages />
        </Layout>
      </ToastProvider>
    </HashRouter>
  </StrictMode>,
)
