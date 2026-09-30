import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Layout, ToastProvider } from './components.jsx'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import Product from './pages/Product.jsx'
import Search from './pages/Search.jsx'
import Admin from './pages/Admin.jsx'
import NotFound from './pages/NotFound.jsx'
import { HowWePick, Disclosure } from './pages/Static.jsx'
import './styles.css'

// Hash routing keeps deep links working on GitHub Pages without a 404 fallback.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <ToastProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/c/:slug" element={<Category />} />
            <Route path="/p/:id" element={<Product />} />
            <Route path="/search" element={<Search />} />
            <Route path="/how-we-pick" element={<HowWePick />} />
            <Route path="/disclosure" element={<Disclosure />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ToastProvider>
    </HashRouter>
  </StrictMode>,
)
