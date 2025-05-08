import React from 'react';
const CTASection = () => {
  return <section className="w-full bg-gradient-to-b from-gray-900 to-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Discover Your Perfect Sneakers
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our exclusive range of bold sneakers designed for the modern
            trendsetter like you.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="px-8 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity">
            Shop Now
          </button>
          <button className="px-8 py-3 rounded-md border border-gray-600 text-white hover:bg-gray-800 transition-colors">
            Sign Up
          </button>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Subscribe to updates
              </h3>
              <p className="text-gray-400 mb-4">
                Stay ahead in sneaker fashion and trends. Get exclusive offers
                and early access to new releases.
              </p>
              <div className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy.
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email here" className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white w-full focus:border-purple-500 focus:outline-none" />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity whitespace-nowrap">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;