import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="w-full px-4 py-3 bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">BC</span>
            </div>
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              BlackCode
            </span>
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-purple-400 transition-colors">
            Home
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors">
            Shop
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors">
            Collection
          </a>
          <a href="#" className="text-white hover:text-purple-400 transition-colors">
            About
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 rounded-md text-white hover:bg-gray-800 transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity">
            Shop Now
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-gray-800 py-4">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              Shop
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              Collection
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors">
              About
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <button className="px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity">
                Shop Now
              </button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;