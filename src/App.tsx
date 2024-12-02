import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">Kelvin</span>
            </div>
            
            {/* 桌面端导航链接 */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">首页</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">关于我们</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">服务</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">联系我们</a>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 移动端菜单 */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 text-base font-medium">首页</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 text-base font-medium">关于我们</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 text-base font-medium">服务</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 text-base font-medium">联系我们</a>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main>
        {/* Hero部分 */}
        <section className="pt-20 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              欢迎来到 Kelvin 的世界
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              探索无限可能，创造独特价值
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors duration-300">
              了解更多
            </button>
          </div>
        </section>

        {/* 特性卡片部分 */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">创新设计</h3>
                <p className="text-gray-600">独特的视觉体验</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">优质服务</h3>
                <p className="text-gray-600">专业团队支持</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">技术领先</h3>
                <p className="text-gray-600">行业领先解决方案</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">联系方式</h4>
              <p className="text-gray-300 mb-2">邮箱：contact@kelvin.com</p>
              <p className="text-gray-300">电话：+86 123 4567 8900</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">关注我们</h4>
              <div className="space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">微信</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">微博</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Kelvin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
