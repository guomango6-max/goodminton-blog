# Goodminton Blog

Astro + Vercel 博客。母库：Obsidian vault `D:\ob`。

## 本地运行

```bash
npm install
npm run dev
```

## 发布文章

文章放在 `src/content/blog/`，frontmatter 加 `published: true` 即公开。

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

## 部署

推送到 GitHub → Vercel 自动部署。
子域名 blog.goodminton.fi 在 Vercel 项目设置里绑定。

## 第二阶段：从 Obsidian 导出

vault 文章 frontmatter 加 published: true，脚本单向复制到 src/content/blog/，推送即发布。不写回 vault。
