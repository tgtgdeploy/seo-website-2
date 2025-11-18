import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '关于我们 - Telegram中文官网',
  description: '了解Telegram中文官网，我们致力于为中文用户提供最新的Telegram资讯、教程和技巧。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-telegram-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-3xl">T</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">关于我们</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Telegram Trend Guide - 您的Telegram中文资源平台
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">我们是谁</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Telegram中文官网是一个专注于为中文用户提供Telegram相关信息的资讯平台。
              我们致力于帮助中文用户更好地了解和使用Telegram这款优秀的即时通讯应用。
            </p>
            <p className="text-gray-700 leading-relaxed">
              自成立以来，我们始终坚持为用户提供最新、最准确的Telegram资讯，
              包括功能介绍、使用教程、隐私保护、最新动态等内容。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">我们的使命</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">知识普及</h3>
                <p className="text-gray-600">
                  为中文用户提供全面的Telegram使用指南和教程，降低使用门槛。
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">隐私保护</h3>
                <p className="text-gray-600">
                  帮助用户了解Telegram的隐私保护功能，守护数字时代的个人隐私。
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">社区连接</h3>
                <p className="text-gray-600">
                  分享Telegram趋势和玩法，帮助用户发现更多有价值的内容和社区。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">我们提供的服务</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-telegram-blue rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">最新资讯</h3>
                  <p className="text-gray-600">
                    第一时间为您带来Telegram的最新功能、更新和动态。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-telegram-blue rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">使用教程</h3>
                  <p className="text-gray-600">
                    详细的图文教程，帮助您掌握Telegram的各项功能和技巧。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-telegram-blue rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">问题解答</h3>
                  <p className="text-gray-600">
                    全面的FAQ和技术支持，解决您在使用过程中遇到的各种问题。
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-telegram-blue rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">社区推荐</h3>
                  <p className="text-gray-600">
                    精选优质的Telegram频道、群组和机器人，发现更多精彩内容。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">我们的价值观</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-telegram-blue mr-2">✓</span>
                  <span><strong>用户至上：</strong>始终以用户需求为导向，提供最有价值的内容</span>
                </li>
                <li className="flex items-start">
                  <span className="text-telegram-blue mr-2">✓</span>
                  <span><strong>准确可靠：</strong>确保信息的准确性和时效性，不传播虚假信息</span>
                </li>
                <li className="flex items-start">
                  <span className="text-telegram-blue mr-2">✓</span>
                  <span><strong>隐私保护：</strong>尊重并保护用户隐私，倡导安全的网络使用习惯</span>
                </li>
                <li className="flex items-start">
                  <span className="text-telegram-blue mr-2">✓</span>
                  <span><strong>持续创新：</strong>不断优化内容和服务，与Telegram共同进步</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">联系我们</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              我们欢迎您的反馈和建议！如果您有任何问题、建议或合作意向，请随时与我们联系。
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">📧 邮箱</h3>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">🌐 网站</h3>
                  <Link href="/" className="text-telegram-blue hover:underline">
                    Telegram中文官网
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-telegram-blue text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">准备开始使用Telegram了吗？</h2>
          <p className="text-lg mb-6 opacity-90">
            探索更多功能，加入全球数亿用户的安全通讯网络
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/blog"
              className="bg-white text-telegram-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              阅读博客
            </Link>
            <Link
              href="/#faq"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-telegram-blue transition"
            >
              查看FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
