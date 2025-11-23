import Link from 'next/link'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '博客文章 - Telegram中文官网',
  description: 'Telegram使用教程、功能介绍、技巧分享。了解Telegram的最新功能和使用方法。',
  keywords: ['Telegram教程', 'Telegram使用技巧', 'Telegram功能介绍', '即时通讯教程'],
}

const ADMIN_API_URL = process.env.ADMIN_API_URL || 'https://adminseohub.xyz'
const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN || 'localhost:3000'

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string | null
  coverImage: string | null
  category: string | null
  tags: string[]
  publishedAt: string
  author: {
    name: string
  }
}

interface PostsResponse {
  posts: Post[]
  total: number
  hasMore: boolean
}

async function getAllPosts(): Promise<Post[]> {
  try {
    const apiUrl = `${ADMIN_API_URL}/api/public/posts?domain=${SITE_DOMAIN}&limit=20`
    const res = await fetch(apiUrl, {
      next: { revalidate: 300 } // 缓存5分钟
    })

    if (!res.ok) {
      console.error('Failed to fetch posts:', res.status)
      return []
    }

    const data: PostsResponse = await res.json()
    return data.posts || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-telegram-blue to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Telegram博客
          </h1>
          <p className="text-xl opacity-90">
            使用教程、功能介绍、技巧分享
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              暂无文章
            </h2>
            <p className="text-gray-600">
              精彩内容即将发布，敬请期待！
            </p>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="mb-8 text-gray-600">
              找到 <span className="font-semibold text-telegram-blue">{posts.length}</span> 篇文章
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Cover Image */}
                  {post.coverImage && (
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-3 text-sm">
                      {post.category && (
                        <span className="inline-block px-3 py-1 bg-telegram-blue text-white rounded-full text-xs">
                          {post.category}
                        </span>
                      )}
                      <time className="text-gray-500 text-xs">
                        {format(new Date(post.publishedAt), 'yyyy年MM月dd日', { locale: zhCN })}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-telegram-blue transition">
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-telegram-blue font-semibold hover:underline text-sm"
                    >
                      阅读全文
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
