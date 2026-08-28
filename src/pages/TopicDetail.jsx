import { Link, useParams } from 'react-router-dom'
import { posts, TOPICS, byPostNo } from '../posts.js'

export default function TopicDetail() {
  const { id } = useParams()
  const topic = TOPICS[id]
  if (!topic) {
    return (
      <div>
        <h1 className="page-title">专题不存在</h1>
        <p className="topic-desc">没有找到该专题，请返回专题总览。</p>
        <Link to="/topics" className="tag">← 返回专题</Link>
      </div>
    )
  }
  const list = posts.filter(p => p.topic === id).sort(byPostNo)
  return (
    <div>
      <h1 className="page-title">{topic.name}</h1>
      <p className="topic-desc">{topic.desc}</p>
      <p className="topic-count">{list.length} 篇 · 按讲次顺序</p>
      <ul className="post-list">
        {list.map(p => (
          <li key={p.slug}>
            <Link to={`/article/${p.slug}`}>
              <span className="post-title">{p.title}</span>
              <span className="post-excerpt">{p.excerpt}</span>
              <span className="post-meta">{p.date} · {p.tags.join(' / ')}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p><Link to="/topics" className="tag">← 返回专题总览</Link></p>
    </div>
  )
}
