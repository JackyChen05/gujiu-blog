import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ArticleList from './pages/ArticleList.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'
import Topics from './pages/Topics.jsx'
import TopicDetail from './pages/TopicDetail.jsx'
import About from './pages/About.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<ArticleList />} />
          <Route path="article/:slug" element={<ArticleDetail />} />
          <Route path="topics" element={<Topics />} />
          <Route path="topic/:id" element={<TopicDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
