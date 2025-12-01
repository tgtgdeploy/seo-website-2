import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Telegram Icon */}
          <div className="flex justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256">
              <defs>
                <linearGradient id="telegramGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#2AABEE"></stop>
                  <stop offset="100%" stopColor="#229ED9"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#telegramGradient)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"></path>
              <path fill="#FFF" d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"></path>
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Telegram中文官网
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            全球领先的即时通讯应用<br />
            安全、快速、强大的聊天交友工具
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/download"
              className="bg-telegram-blue text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-600 transition shadow-lg"
            >
              立即下载 Telegram
            </Link>
            <Link
              href="/blog"
              className="bg-white text-telegram-blue px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition border-2 border-telegram-blue"
            >
              了解更多
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-telegram-blue text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-lg mb-2">安全加密</h3>
              <p className="text-gray-600 text-sm">端对端加密，保护您的隐私</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-telegram-blue text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">极速体验</h3>
              <p className="text-gray-600 text-sm">云端同步，多设备无缝切换</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-telegram-blue text-4xl mb-3">🌐</div>
              <h3 className="font-bold text-lg mb-2">全球互联</h3>
              <p className="text-gray-600 text-sm">跨越国界，连接全世界</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
