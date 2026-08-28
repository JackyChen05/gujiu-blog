import { Link, useSearchParams } from 'react-router-dom'
import { posts, TOPICS, byPostNo } from '../posts.js'

export default function ArticleList() {
  const [params, setParams] = useSearchParams()
  const tag = params.get('tag')
  const allTags = [...new Set(posts.flatMap(p => p.tags))]
  let filtered
  if (tag) {
    filtered = posts.filter(p => p.tags.includes(tag))
  } else {
    // 无筛选：按专题分组（注册顺序）、组内按讲次编号升序
    const topicOrder = Object.keys(TOPICS)
    filtered = [...posts].sort((a, b) => {
      const t = topicOrder.indexOf(a.topic) - topicOrder.indexOf(b.topic)
      return t !== 0 ? t : byPostNo(a, b)
    })
  }
  return (
    <div>
      <h1 className="page-title">全部文章</h1>
      <div className="tag-bar">
        <button className={!tag ? 'tag active' : 'tag'} onClick={() => setParams({})}>全部</button>
        {allTags.map(t => (
          <button key={t} className={tag === t ? 'tag active' : 'tag'} onClick={() => setParams({ tag: t })}>{t}</button>
        ))}
      </div>
      <ul className="post-list">
        {filtered.map(p => (
          <li key={p.slug}>
            <Link to={`/article/${p.slug}`}>
              <span className="post-title">{p.title}</span>
              <span className="post-excerpt">{p.excerpt}</span>
              <span className="post-meta">{p.date} · {p.tags.join(' / ')}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
