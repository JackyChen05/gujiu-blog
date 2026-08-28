import { useParams, Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { marked } from 'marked'
import { getPost } from '../posts.js'

marked.setOptions({ gfm: true, breaks: false })

export default function ArticleDetail() {
  const { slug } = useParams()
  const post = getPost(slug)
  const [showFull, setShowFull] = useState(false)

  const html = useMemo(() => {
    if (!post) return ''
    let md = post.raw
    if (!showFull) {
      const idx = md.indexOf('## 全文')
      if (idx > -1) md = md.slice(0, idx)
    }
    return marked.parse(md)
  }, [post, showFull])

  if (!post) {
    return <div className="page"><p>文章不存在。<Link to="/articles">返回文章列表</Link></p></div>
  }
  const hasFull = post.raw.includes('## 全文')

  return (
    <article className="article">
      <header className="article-header">
        <h1>{post.title}</h1>
        <div className="article-meta">
          <span>{post.date}</span>
          {post.tags.map(t => <Link key={t} to={`/articles?tag=${encodeURIComponent(t)}`} className="tag">{t}</Link>)}
        </div>
      </header>
      <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />
      {hasFull && (
        <div className="full-toggle">
          <button onClick={() => setShowFull(v => !v)}>
            {showFull ? '收起全文' : '展开课程全文（转录已清洗）'}
          </button>
        </div>
      )}
      <div className="back-link"><Link to="/articles">← 返回文章列表</Link></div>
    </article>
  )
}
