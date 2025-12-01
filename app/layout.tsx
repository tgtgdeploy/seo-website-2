import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { getDomainSEOMetadata } from '@/lib/get-website-by-domain'
import { headers } from 'next/headers'

// 获取当前域名
async function getSiteUrl(): Promise<string> {
  const headersList = await headers()
  const host = headersList.get('host') || 'localhost:3002'
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  return `${protocol}://${host}`
}

// 动态生成SEO元数据，根据访问的域名
export async function generateMetadata(): Promise<Metadata> {
  const seo = await getDomainSEOMetadata()
  const siteUrl = await getSiteUrl()

  return {
    metadataBase: new URL(siteUrl),
    title: { default: seo.title, template: `%s | ${seo.title}` },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: 'Telegram Team' }],
    alternates: { canonical: siteUrl },
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url: siteUrl,
      siteName: seo.title,
      title: seo.title,
      description: seo.description,
      images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: seo.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [`${siteUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION || '' },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <JsonLd />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
