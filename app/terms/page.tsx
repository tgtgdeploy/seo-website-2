import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '服务条款 - Telegram中文官网',
  description: 'Telegram中文官网服务条款，了解使用本网站的相关规定和用户协议。',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">服务条款</h1>

          <div className="text-sm text-gray-500 mb-8">
            最后更新日期：2025年1月
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 接受条款</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                欢迎使用Telegram中文官网（以下简称"本网站"）。通过访问和使用本网站，
                您同意遵守以下服务条款。如果您不同意这些条款，请不要使用本网站。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我们保留随时修改这些条款的权利。修改后的条款将在本页面发布，
                继续使用本网站即表示您接受修改后的条款。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 服务说明</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本网站是一个信息发布平台，为用户提供：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Telegram应用相关资讯和教程</li>
                <li>功能介绍和使用指南</li>
                <li>社区动态和趋势分析</li>
                <li>常见问题解答</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                请注意：本网站是独立的资讯平台，与Telegram官方没有直接关联。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 用户责任</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                作为本网站的用户，您同意：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>不得将本网站用于任何非法目的</li>
                <li>不得试图未经授权访问本网站的系统或网络</li>
                <li>不得干扰或破坏本网站的正常运行</li>
                <li>不得发布或传播恶意软件、病毒或其他有害代码</li>
                <li>不得侵犯他人的知识产权或其他合法权益</li>
                <li>遵守所有适用的法律法规</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 知识产权</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本网站的所有内容，包括但不限于文字、图片、图形、标志、设计、代码等，
                均受知识产权法保护。未经授权，您不得：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>复制、修改、分发或展示本网站的内容</li>
                <li>将本网站内容用于商业目的</li>
                <li>删除或修改任何版权声明</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                您可以为个人、非商业目的浏览和打印本网站内容。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 免责声明</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本网站按"现状"提供，不作任何明示或暗示的保证，包括但不限于：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>内容的准确性、完整性或及时性</li>
                <li>本网站不会中断或无错误运行</li>
                <li>缺陷会被纠正</li>
                <li>本网站或服务器不含病毒或其他有害组件</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                您使用本网站的风险由您自行承担。我们不对因使用或无法使用本网站而造成的任何损失负责。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 第三方链接</h2>
              <p className="text-gray-700 leading-relaxed">
                本网站可能包含指向第三方网站的链接。这些链接仅为方便用户而提供，
                我们不对第三方网站的内容、产品或服务负责。访问第三方网站的风险由您自行承担。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 责任限制</h2>
              <p className="text-gray-700 leading-relaxed">
                在法律允许的最大范围内，我们不对以下情况承担责任：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
                <li>任何直接、间接、偶然、特殊或后果性损失</li>
                <li>利润损失、数据丢失或业务中断</li>
                <li>因使用或无法使用本网站而产生的任何损失</li>
                <li>第三方的行为或内容</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. 赔偿</h2>
              <p className="text-gray-700 leading-relaxed">
                您同意赔偿并使我们免受因您违反本服务条款、侵犯他人权利或违反法律而引起的任何索赔、
                损失、责任、成本和费用（包括合理的律师费）。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. 终止服务</h2>
              <p className="text-gray-700 leading-relaxed">
                我们保留随时终止或暂停您访问本网站的权利，无需事先通知，
                原因包括但不限于违反本服务条款或我们认为有必要的任何其他原因。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. 适用法律</h2>
              <p className="text-gray-700 leading-relaxed">
                本服务条款受相关法律管辖并按其解释。
                因本服务条款引起的任何争议应通过友好协商解决。
                如协商不成，应提交有管辖权的法院解决。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. 可分割性</h2>
              <p className="text-gray-700 leading-relaxed">
                如果本服务条款的任何条款被认定为无效或不可执行，
                该条款应在必要范围内进行修改以使其有效，或被删除，
                而其余条款仍然有效。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. 联系我们</h2>
              <p className="text-gray-700 leading-relaxed">
                如果您对本服务条款有任何疑问，请通过以下方式联系我们：
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>网站：</strong> Telegram中文官网<br />
                  <strong>邮箱：</strong> legal@example.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
