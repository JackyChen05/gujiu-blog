# 古旧新风 · 个人博客

> 用现代思维工具重读旧问题。

**在线预览**：本地 `http://127.0.0.1:5173/`（开发中）

---

## 项目概述

| 项 | 值 |
|---|---|
| 类型 | 个人博客（React + Vite 工程） |
| 主题 | 「古旧新风」——按专题组织，首个专题是万维钢《现代思维工具课》研读笔记 |
| 位置 | `D:\WorkbuddySpace\Notebooklm\gujiu-blog` |
| 文章数 | 93 篇（世界观 12 + 成长战略 12 + 决策判断 16 + 学习教育 10 + 财富增值 18 + 社会参与 14 + 管理与组织 11） |
| 技术栈 | React 18 + Vite 5 + React Router（HashRouter）+ marked |

---

## 功能特性

- **文章列表**（`/articles`）：支持标签筛选（世界观/成长战略/决策判断/叙事/复利等）
- **文章详情**（`/article/:slug`）：五要素卡片 + 全文折叠展开
- **专题页**（`/topics`）：按专题聚合文章
- **关于页**（`/about`）：博客理念 + 版权说明
- **Markdown 渲染**：marked 渲染，重点内容加粗 + 浅黄底纹（`--mark: #fdeeda`）
- **风格**：米白 `#FAF6F1` 背景 + 珊瑚 `#CC785C` 强调色 + 衬线字体

---

## 文章结构（每篇固定）

```markdown
# 编号丨标题

## 讲什么
## 解决什么真问题
## 核心论点
## 关键例证 / 金句
## 如何应用
---
## 全文（清洗后的课程转录，重点加粗+底纹）
```

---

## 核心文件

| 文件 | 作用 |
|---|---|
| `src/main.jsx` | 入口，HashRouter 路由 |
| `src/App.jsx` | 布局（导航 + Outlet + 页脚） |
| `src/posts.js` | **文章注册表**：import md + 元数据（slug/title/topic/tags/date/excerpt/raw） |
| `src/posts/*.md` | 40 篇文章 Markdown 文件 |
| `src/pages/*.jsx` | Home / ArticleList / ArticleDetail / Topics / About |
| `src/index.css` | 全站样式（CSS 变量控制主题色） |
| `scripts/clean_transcript.py` | 转录清洗脚本（去逐字空格/广告口播/繁转简/语义分段） |

---

## 开发命令

```bash
cd D:/WorkbuddySpace/Notebooklm/gujiu-blog

# 依赖（只需一次）
PATH="/c/Users/admin/.workbuddy/binaries/node/versions/22.22.2:$PATH" npm install

# 开发服务器
PATH="/c/Users/admin/.workbuddy/binaries/node/versions/22.22.2:$PATH" npm run dev

# 构建（见下方"踩过的坑"）
PATH="/c/Users/admin/.workbuddy/binaries/node/versions/22.22.2:$PATH" \
  npx vite build --emptyOutDir false --outDir dist2 && cp -r dist2/* dist/ && rm -rf dist2
```

---

## 内容来源与处理流程

**数据源**：NotebookLM 知识库「wwg思维工具」（id: `0fd3f89b-eff9-46c9-a632-490f5a18ec15`，142 个来源，111 篇音频转录）

**抓取方式**：`gemini-notebook-mcp` 的 `source_get_content` 工具，按 source_id 逐篇拉取

**清洗规则**（`scripts/clean_transcript.py`）：
1. 去掉逐字空格噪声（中文字符之间的空格）
2. 去掉广告口播（"想收听更多付费节目……"）
3. 繁体转简体
4. 语义分段（按主题/论点切分段落）
5. 重点内容加粗 + 浅黄底纹（CSS `strong` 标签）

**特殊情况**：012 直播答疑原文 5.6 万字（含大量主持人串场/抽奖），整理为 8 组精选问答 + 万老师模块串讲，保留了含金量最高的问答。

---

## 踩过的坑与解决方法

### 1. NotebookLM 授权过期

**现象**：`source_get_content` 报错 `Authentication expired`

**解决**：
```bash
nlm login  # 复用 Chrome 登录态，无头浏览器自动完成
```
然后用 MCP 的 `refresh_auth` 刷新。注意：`refresh_auth` 单独调用无法复活过期凭证，必须先 `nlm login`。

### 2. 转录全文超长

**现象**：012 直播答疑转录 11 万字符，超过 MCP 工具返回上限

**解决**：工具会自动保存到本地文件（`C:\Users\admin\.workbuddy\projects\...\tool-results\*.txt`），用 Read 分段读取或脚本处理。

### 3. 沙箱拦截 Vite 清空 dist

**现象**：`npm run build` 报错（`trashItem` 失败），因为 Vite 默认要清空 `dist/` 再重建

**解决**：
```bash
npx vite build --emptyOutDir false --outDir dist2 && cp -r dist2/* dist/ && rm -rf dist2
```
（需授权绕过沙箱）

### 4. Node.js 版本

**要求**：必须用 WorkBuddy 管理的 Node 22.22.2，PATH 前置：
```bash
PATH="/c/Users/admin/.workbuddy/binaries/node/versions/22.22.2:$PATH"
```

---

## 当前进度与后续计划

| 模块 | 讲次范围 | 状态 |
|---|---|---|
| 世界观 | 000–012 | ✅ 完成（12 篇） |
| 成长战略 | 013–026 | ✅ 完成（12 篇） |
| 决策判断 | 027–045 | ✅ 完成（16 篇） |
| 学习教育 | 046–057 | ✅ 完成（10 篇） |
| 财富增值 | 058–079 | ✅ 完成（18 篇，跳过问答 060/066/072；058 起实际为财富/战略内容，已按实际归类） |
| 社会参与 | 080–094 | ✅ 完成（14 篇，跳过问答 089） |
| 管理与组织 | 096–108 | ✅ 完成（11 篇，跳过缺失 101 与问答 107；096 基线漂移、097 认领授予授权、098 生成、099 对称性破缺、100 临近可能、102 反馈回路、103 自组织临界、104 边际分析、105 路径创造、106 适应性循环、108 零阶道理） |
| 复杂系统 | 109–120 | ⏳ 待做（含完结篇 120） |

**进度说明**：058 经济租起已是财富/战略内容（经济租、阿尔法、商业杠杆、机会窗口、效果推理、沃德利地图、鲍莫尔成本病、杰文斯悖论、平台、托付、地位、礼、激励相容、柠檬市场、外部性、政府演化、软预算约束、可读性），故 058–079 归入财富增值模块；原计划"学习教育 046–065"实际只含 046–057。

**待确认**：问答篇（011/018/024/036/042 等）是否收录？直播答疑笔记是否保留？

---

## 给后续 Agent 的指引

### 新增一篇文章

1. 用 `source_get_content` 从 NotebookLM 抓取转录全文（source_id 从 `source_list_drive` 获取）
2. 按固定结构撰写 Markdown 文件到 `src/posts/wwg-XXX-slug.md`
3. 在 `src/posts.js` 中：
   - 顶部 `import rawXXX from './posts/wwg-XXX-slug.md?raw'`
   - `posts` 数组顶部插入元数据对象（slug/title/topic/tags/date/excerpt/raw）
4. 构建验证（见上方命令）
5. dev server 会自动热更新，无需重启

### 修改文章样式

编辑 `src/index.css`，重点类：
- `.article-body strong`（重点加粗+底纹）
- `.article-body blockquote`（引用块）
- `.article-body h2/h3`（章节标题）

### 抓取下一批讲次

讲次与 source_id 对照表在 NotebookLM「wwg思维工具」知识库中，用 `source_list_drive` 获取最新列表。

---

## 版权说明

原始音频与文字版权归得到 App 及万维钢所有。本站仅为个人学习笔记，不用于商业用途。
