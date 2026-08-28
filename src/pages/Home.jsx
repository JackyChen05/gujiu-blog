import { Link } from 'react-router-dom'
import { posts, TOPICS } from '../posts.js'

export default function Home() {
  const latest = posts.slice(0, 6)
  return (
    <div>
      <section className="hero">
        <h1>古旧新风</h1>
        <p>把古旧的问题，交给新鲜的思维工具。按专题组织，首辑：万维钢《现代思维工具课》。</p>
      </section>
      <section>
        <h2 className="section-title">专题</h2>
        <div className="topic-cards">
          {Object.entries(TOPICS).map(([id, t]) => {
            const count = posts.filter(p => p.topic === id).length
            return (
              <Link to={`/topic/${id}`} key={id} className="topic-card">
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
                <span className="topic-count">{count} 篇</span>
              </Link>
            )
          })}
        </div>
      </section>
      <section>
        <h2 className="section-title">最新文章</h2>
        <ul className="post-list">
          {latest.map(p => (
            <li key={p.slug}>
              <Link to={`/article/${p.slug}`}>
                <span className="post-title">{p.title}</span>
                <span className="post-excerpt">{p.excerpt}</span>
                <span className="post-meta">{p.date} · {p.tags.join(' / ')}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
