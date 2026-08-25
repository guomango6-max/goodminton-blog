# Goodminton Blog

Astro + Vercel 博客。母库：Obsidian vault `D:\ob`。

## 本地运行

```bash
npm install
npm run dev
```

## 发布文章

文章放在 `posts/`，frontmatter 加 `published: true` 即公开。

```yaml
---
title: '文章标题'
description: '一句话描述'
pubDate: '2026-06-12'
published: true
tags: ['教学']
lang: 'zh'
---
```

`published: false` 或不写 = 草稿，不出现在博客。

羽毛球文章请至少带一个识别标签：`羽毛球`、`badminton` 或 `sulkapallo`。发布后会进入 `/badminton.json`，Goodminton 主站首页每 5 分钟自动读取最新文章，无需同步复制正文。

## 部署

推送到 GitHub → Vercel 自动部署。
子域名 blog.goodminton.fi 在 Vercel 项目设置里绑定。

## 第二阶段：从 Obsidian 导出

vault 文章 frontmatter 加 published: true，脚本单向复制到 `posts/`，推送即发布。不写回 vault。
