import { Link, useSearchParams } from 'react-router-dom'
import { posts } from '../posts.js'

export default function ArticleList() {
  const [params, setParams] = useSearchParams()
  const tag = params.get('tag')
  const filtered = tag ? posts.filter(p => p.tags.includes(tag)) : posts
  const allTags = [...new Set(posts.flatMap(p => p.tags))]
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
