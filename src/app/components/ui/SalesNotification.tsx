import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X } from 'lucide-react';

const NAMES = ["Sarah", "Emma", "James", "Olivia", "William", "Sophia", "Michael"];
const LOCATIONS = ["London", "New York", "Paris", "Berlin", "Sydney", "Toronto", "Austin"];
const PRODUCTS = ["Merino Roving", "Silk Blend Yarn", "Knitting Needles", "Cashmere Skein"];

export function SalesNotification() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", location: "", product: "" });

  useEffect(() => {
    // Initial delay
    const initialTimer = setTimeout(() => {
      showNotification();
    }, 5000);

    // Loop
    const interval = setInterval(() => {
      showNotification();
    }, 15000 + Math.random() * 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const showNotification = () => {
    setData({
      name: NAMES[Math.floor(Math.random() * NAMES.length)],
      location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
      product: PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)]
    });
    setVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-6 z-50 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-4 rounded-lg flex items-center gap-4 max-w-xs"
        >
          <button 
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-black"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="w-10 h-10 bg-[#dedac8] rounded-full flex items-center justify-center shrink-0">
             <ShoppingBag className="w-5 h-5 text-[#555348]" />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Just purchased</p>
            <p className="text-sm font-medium text-gray-900 leading-tight">
              {data.name} in {data.location} bought <span className="font-serif italic">{data.product}</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
