import { Link } from 'react-router-dom'
import { posts, TOPICS, byPostNo } from '../posts.js'

export default function Topics() {
  return (
    <div>
      <h1 className="page-title">专题</h1>
      {Object.entries(TOPICS).map(([id, t]) => {
        const list = posts.filter(p => p.topic === id).sort(byPostNo)
        return (
          <section key={id} className="topic-section">
            <h2 className="section-title">{t.name} <Link to={`/topic/${id}`} className="tag">查看全部 →</Link></h2>
            <p className="topic-desc">{t.desc}</p>
            <ul className="post-list">
              {list.map(p => (
                <li key={p.slug}>
                  <Link to={`/article/${p.slug}`}>
                    <span className="post-title">{p.title}</span>
                    <span className="post-excerpt">{p.excerpt}</span>
                    <span className="post-meta">{p.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
