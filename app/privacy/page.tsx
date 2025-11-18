import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隐私政策 - Telegram中文官网',
  description: 'Telegram隐私政策，了解我们如何保护您的个人信息和数据安全。',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">隐私政策</h1>

          <div className="text-sm text-gray-500 mb-8">
            最后更新日期：2025年1月
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 信息收集</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                我们致力于保护您的隐私。本隐私政策说明了我们如何收集、使用和保护您的个人信息。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我们收集的信息类型包括：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
                <li>您主动提供的信息（如联系方式）</li>
                <li>自动收集的使用数据（如访问日志）</li>
                <li>Cookie和类似技术收集的信息</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 信息使用</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                我们使用收集的信息用于以下目的：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>提供和改进我们的服务</li>
                <li>个性化用户体验</li>
                <li>发送更新和通知</li>
                <li>分析网站使用情况</li>
                <li>保护网站安全和防止欺诈</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 信息共享</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                我们不会出售、交易或转让您的个人信息给第三方。以下情况除外：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>获得您的明确同意</li>
                <li>法律要求或政府机构要求</li>
                <li>保护我们的权利、财产或安全</li>
                <li>与可信赖的第三方服务提供商合作（他们同意保密）</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 数据安全</h2>
              <p className="text-gray-700 leading-relaxed">
                我们采用行业标准的安全措施来保护您的个人信息，包括加密传输、安全存储和访问控制。
                然而，请注意互联网传输不可能100%安全，我们无法保证绝对的安全性。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookie使用</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                我们使用Cookie来改善用户体验。Cookie是存储在您设备上的小文件，帮助我们：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>记住您的偏好设置</li>
                <li>分析网站流量</li>
                <li>提供个性化内容</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                您可以通过浏览器设置管理或禁用Cookie，但这可能影响网站功能。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 第三方链接</h2>
              <p className="text-gray-700 leading-relaxed">
                本网站可能包含第三方网站的链接。我们不对这些网站的隐私政策负责。
                我们建议您在访问第三方网站时查看其隐私政策。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 儿童隐私</h2>
              <p className="text-gray-700 leading-relaxed">
                我们的服务不面向13岁以下的儿童。我们不会故意收集儿童的个人信息。
                如果您发现我们收集了儿童的信息，请联系我们，我们将及时删除。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. 您的权利</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                您拥有以下权利：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>访问您的个人信息</li>
                <li>更正不准确的信息</li>
                <li>请求删除您的信息</li>
                <li>反对信息处理</li>
                <li>数据可携带权</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. 隐私政策更新</h2>
              <p className="text-gray-700 leading-relaxed">
                我们可能会不时更新本隐私政策。更新后的政策将在本页面发布，并标注更新日期。
                重大变更时，我们会通过显著方式通知您。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. 联系我们</h2>
              <p className="text-gray-700 leading-relaxed">
                如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>网站：</strong> Telegram中文官网<br />
                  <strong>邮箱：</strong> privacy@example.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
