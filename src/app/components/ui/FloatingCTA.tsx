import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Tag, X, Gift } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show trigger after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && !isOpen && (
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#262626] text-[#dedac8] py-3 px-4 rounded-l-md shadow-lg flex items-center gap-2 cursor-pointer origin-right"
          >
            <Gift className="w-5 h-5 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest writing-mode-vertical hidden md:inline-block">Get 10% Off</span>
            <span className="text-xs font-bold uppercase tracking-widest md:hidden">10% Off</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white p-8 md:p-10 rounded-sm shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#f9f8f6] rounded-full flex items-center justify-center text-[#555348] mb-6">
                  <Tag className="w-8 h-8" />
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl text-black mb-3">
                  First time here?
                </h3>
                
                <p className="text-gray-600 mb-8 max-w-xs">
                  Join our community of makers and receive exclusive access to new drops.
                </p>

                <div className="w-full bg-[#f9f8f6] border border-dashed border-[#dedac8] p-4 mb-8 rounded-sm">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Your Code</p>
                  <p className="text-2xl font-bold tracking-widest text-[#555348] selection:bg-[#dedac8]">WELCOME10</p>
                </div>

                <button 
                  onClick={() => {
                    // Navigate to shop or copy code logic
                    setIsOpen(false);
                    window.location.href = '/shop';
                  }}
                  className="w-full bg-[#262626] text-white py-4 px-8 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#dedac8] hover:text-black transition-colors flex items-center justify-center gap-2"
                >
                  Shop Collection <ArrowRight className="w-4 h-4" />
                </button>
                
                <p className="text-[10px] text-gray-400 mt-6">
                  *Valid on orders over $100. Cannot be combined with other offers.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
