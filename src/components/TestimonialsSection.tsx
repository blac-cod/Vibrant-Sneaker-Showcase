import React from 'react';
import { StarIcon } from 'lucide-react';
const TestimonialsSection = () => {
  return <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Customer Testimonials
          </h2>
          <p className="text-gray-300">
            These sneakers are a game changer for my style!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-colors">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} className="text-yellow-500 fill-yellow-500" />)}
            </div>
            <p className="text-gray-300 mb-6">
              "The comfort is unmatched, and they look fantastic! I get
              compliments everywhere I go."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">RD</span>
              </div>
              <div>
                <h4 className="font-medium text-white">Renee Donald</h4>
                <p className="text-gray-400 text-sm">Designer, Fashion Co.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-pink-500 transition-colors">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} className="text-yellow-500 fill-yellow-500" />)}
            </div>
            <p className="text-gray-300 mb-6">
              "I love how versatile these sneakers are! They work with
              everything in my wardrobe."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">AJ</span>
              </div>
              <div>
                <h4 className="font-medium text-white">Antwan Johnson</h4>
                <p className="text-gray-400 text-sm">Editor, Style Mag</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-colors">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} className="text-yellow-500 fill-yellow-500" />)}
            </div>
            <p className="text-gray-300 mb-6">
              "Stylish and comfortable – these have become my go-to sneakers for
              both casual and semi-formal occasions!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold">MW</span>
              </div>
              <div>
                <h4 className="font-medium text-white">Mary Wambui</h4>
                <p className="text-gray-400 text-sm">Athlete, Sports Brand</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl rounded-xl overflow-hidden">
            <img src="/brave_screenshot_www.relume.io_%2810%29.png" alt="BlackCode sneaker showcase" className="w-full h-[300px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Join the BlackCode Community
                </h3>
                <p className="text-gray-300 max-w-lg mb-6">
                  Share your style and connect with other sneaker enthusiasts
                  around the world.
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity">
                  Follow Us @BlackCode
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;