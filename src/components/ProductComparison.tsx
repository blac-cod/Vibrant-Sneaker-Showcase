import React from 'react';
import { CheckIcon, XIcon, ArrowRightIcon } from 'lucide-react';
const ProductComparison = () => {
  return <section className="w-full bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Elevate Your Footwear Game
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the ultimate sneaker experience with BlackCode.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-gray-400 border-b border-gray-800">
                  Product Comparison
                </th>
                <th className="py-4 px-4 text-white border-b border-gray-800 bg-gray-800/50">
                  <div className="text-xl font-bold">Model A</div>
                  <div className="text-sm text-gray-400">
                    Innovative design and comfort
                  </div>
                </th>
                <th className="py-4 px-4 text-white border-b border-gray-800">
                  <div className="text-xl font-bold">Model B</div>
                  <div className="text-sm text-gray-400">
                    Sleek and stylish look
                  </div>
                </th>
                <th className="py-4 px-4 text-white border-b border-gray-800">
                  <div className="text-xl font-bold">Model C</div>
                  <div className="text-sm text-gray-400">
                    Durable and lightweight material
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-4 text-white border-b border-gray-800">
                  Breathable fabric for comfort
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800 bg-gray-800/50">
                  <div className="text-purple-500 font-bold">Unlimited</div>
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800">
                  <div className="text-white font-bold">25</div>
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800">
                  <div className="text-white font-bold">10</div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-white border-b border-gray-800">
                  Eco-friendly materials used
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800 bg-gray-800/50">
                  <CheckIcon size={24} className="inline-block text-green-500" />
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800">
                  <CheckIcon size={24} className="inline-block text-green-500" />
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800">
                  <CheckIcon size={24} className="inline-block text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-white border-b border-gray-800">
                  Customizable color options
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800 bg-gray-800/50">
                  <CheckIcon size={24} className="inline-block text-green-500" />
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800">
                  <CheckIcon size={24} className="inline-block text-green-500" />
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800">
                  <CheckIcon size={24} className="inline-block text-green-500" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-white border-b border-gray-800">
                  High-performance traction sole
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800 bg-gray-800/50">
                  <CheckIcon size={24} className="inline-block text-green-500" />
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800">
                  <CheckIcon size={24} className="inline-block text-green-500" />
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800">
                  <XIcon size={24} className="inline-block text-red-500" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-white border-b border-gray-800">
                  Perfect for any occasion
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800 bg-gray-800/50">
                  <CheckIcon size={24} className="inline-block text-green-500" />
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800">
                  <XIcon size={24} className="inline-block text-red-500" />
                </td>
                <td className="py-4 px-4 text-center border-b border-gray-800">
                  <XIcon size={24} className="inline-block text-red-500" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="px-8 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center">
            Shop Now
          </button>
          <button className="px-8 py-3 rounded-md border border-gray-600 text-white hover:bg-gray-800 transition-colors flex items-center">
            Learn More <ArrowRightIcon size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>;
};
export default ProductComparison;