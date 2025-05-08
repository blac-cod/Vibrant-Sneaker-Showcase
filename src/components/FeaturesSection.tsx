import React from 'react';
import { TrendingUpIcon, AwardIcon, ZapIcon } from 'lucide-react';
const FeaturesSection = () => {
  return <section className="w-full bg-gradient-to-b from-black to-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Experience the Future of Footwear
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            BlackCode's innovative sneaker designs blend style with performance
            for the modern trendsetter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-colors duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <TrendingUpIcon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Trend-Setting Design
            </h3>
            <p className="text-gray-400">
              Our bold and innovative designs are crafted for those who dare to
              stand out and make a statement.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-pink-500 transition-colors duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <AwardIcon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Premium Comfort
            </h3>
            <p className="text-gray-400">
              Experience unparalleled comfort with our ergonomic design and
              premium materials that mold to your feet.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-colors duration-300 transform hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <ZapIcon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              Urban Performance
            </h3>
            <p className="text-gray-400">
              Built for the urban explorer, our sneakers deliver performance and
              durability without compromising on style.
            </p>
          </div>
        </div>
        <div className="mt-16 relative overflow-hidden rounded-xl">
          <img src="/brave_screenshot_www.relume.io_%282%29.png" alt="BlackCode sneaker collection" className="w-full h-[300px] md:h-[400px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Crafted for the Modern Trendsetter
              </h3>
              <p className="text-gray-300 max-w-md mb-6">
                Our sneakers combine style and functionality, perfect for the
                urban lifestyle.
              </p>
              <button className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors">
                Discover the Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturesSection;