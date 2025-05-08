import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const images = ["/Like_Jordans_spot_phone.jpg", "/start_hERE_PART_TWO.jpg", "/Nike_4_Jordans.jpg", "/Make_but_4_Jordans.jpg", "/PART_3.jpg"];
  const handleImageClick = () => {
    setIsAnimating(true);
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const handleIndicatorClick = (index: number) => {
    if (index !== currentImageIndex) {
      setIsAnimating(true);
      setCurrentImageIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <section className="w-full bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  Step into Style
                </span>
                <br />
                <span className="text-white">with BlackCode Sneakers</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Discover our latest collection that merges bold design with
                unparalleled comfort. Elevate your street style and make a
                statement with every step.
              </p>
              <div className="flex space-x-4">
                <button className="px-8 py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center">
                  Shop Now <ArrowRightIcon size={16} className="ml-2" />
                </button>
                <button className="px-8 py-3 rounded-md border border-gray-600 text-white hover:bg-gray-800 transition-colors">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg"></div>
            <div className="relative w-full h-full cursor-pointer group" onClick={handleImageClick}>
              {images.map((src, index) => <img key={index} src={src} alt={`BlackCode sneaker design ${index + 1}`} className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out transform
                    ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                    ${isAnimating ? 'blur-sm' : 'blur-0'}
                    group-hover:scale-105`} />)}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  Click to view next
                </span>
              </div>
            </div>
            {/* Image indicators */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-3">
              {images.map((_, index) => <button key={index} onClick={() => handleIndicatorClick(index)} className={`w-3 h-3 rounded-full transition-all duration-300 transform
                    ${index === currentImageIndex ? 'bg-white w-6' : 'bg-gray-500 hover:bg-gray-400'}`} aria-label={`View sneaker ${index + 1}`} />)}
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
    </section>;
};
export default HeroSection;