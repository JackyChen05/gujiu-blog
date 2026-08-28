import { Link, Outlet, useLocation } from 'react-router-dom'

export default function App() {
  const { pathname } = useLocation()
  const nav = [
    { to: '/', label: '首页' },
    { to: '/articles', label: '文章' },
    { to: '/topics', label: '专题' },
    { to: '/about', label: '关于' },
  ]
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">古旧新风</Link>
          <nav>
            {nav.map(n => (
              <Link key={n.to} to={n.to} className={pathname === n.to ? 'active' : ''}>{n.label}</Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container">古旧新风 — 用现代思维工具重读旧问题</div>
      </footer>
    </div>
  )
}
