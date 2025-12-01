# SEO Website 2

Telegram主站镜像2 - 与seo-website-tg相同功能，独立域名部署。

## 功能特点

- 多域名支持，动态适配站点配置
- 博客文章系统，从Supabase数据库获取
- 响应式设计，支持移动端

## SEO优化

已完成的SEO优化：

- **Open Graph**: 动态生成OG标签
- **Twitter Cards**: 社交分享优化
- **Canonical URLs**: 规范链接防止重复内容
- **JSON-LD Schema**: WebSite, Organization, SoftwareApplication
- **图片优化**: AVIF/WebP格式
- **安全头部**: X-Content-Type-Options, Referrer-Policy
- **静态资源缓存**: 1年缓存策略

## 技术栈

- Next.js 14 (App Router)
- TailwindCSS
- Prisma Client
- TypeScript

## 快速开始

```bash
pnpm install
pnpm dev
```

## 部署到Vercel

1. 导入此仓库到Vercel
2. 配置环境变量
3. 绑定域名

## 环境变量

```bash
DATABASE_URL=postgresql://...
NEXT_PUBLIC_API_URL=https://adminseohub.xyz/api
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 许可证

Private - All Rights Reserved
