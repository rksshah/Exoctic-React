import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Heart, Star, Check } from 'lucide-react';
import { clsx } from 'clsx';
import { Product } from '../data/mockData';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState('2oz');
  const [activeImage, setActiveImage] = useState(0);

  // Reset state when product changes
  React.useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedColor(0);
      setActiveImage(0);
      setSelectedWeight('2oz'); // Default
    }
  }, [product]);

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);
  
  // Mock variants if not present in data
  const colorVariants = product.color ? [{ name: product.color, color: product.colorCode || '#000' }] : [
    { name: 'Original', color: '#1a1a1a' },
    { name: 'Natural', color: '#e8dcc8' }
  ];

  const weightOptions = ['1/2oz', '1oz', '2oz', '4oz'];

  const handleAddToCart = () => {
    const colorName = colorVariants[selectedColor]?.name || 'Default';
    addToCart(product, quantity, colorName, selectedWeight);
    onClose();
  };

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 m-auto w-full max-w-4xl h-[85vh] md:h-[600px] bg-white shadow-2xl z-[101] flex overflow-hidden rounded-sm"
          >
             <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full hover:bg-black hover:text-white transition-colors"
             >
                <X className="w-4 h-4" />
             </button>

             <div className="flex flex-col md:flex-row w-full h-full">
                {/* Left: Gallery */}
                <div className="w-full md:w-1/2 bg-[#f9f8f6] h-1/2 md:h-full relative flex flex-col">
                   <div className="flex-1 relative overflow-hidden">
                      <motion.img 
                        key={activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        src={product.images[activeImage] || product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                   </div>
                   {/* Thumbnails */}
                   {product.images.length > 1 && (
                     <div className="p-4 flex gap-2 justify-center absolute bottom-0 w-full bg-gradient-to-t from-black/10 to-transparent">
                        {product.images.slice(0, 4).map((img, idx) => (
                          <button 
                            key={idx}
                            onClick={() => setActiveImage(idx)}
                            className={clsx(
                              "w-12 h-12 border-2 transition-all",
                              activeImage === idx ? "border-black" : "border-white/50 hover:border-white"
                            )}
                          >
                            <img src={img} className="w-full h-full object-cover" alt="" />
                          </button>
                        ))}
                     </div>
                   )}
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto custom-scrollbar flex flex-col">
                   <div className="flex justify-between items-start mb-2">
                      <div>
                        {product.isNew && (
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#555348] mb-2 block">New Arrival</span>
                        )}
                        <h2 className="font-serif text-2xl md:text-3xl text-black leading-tight mb-2">{product.name}</h2>
                      </div>
                      <p className="text-xl font-medium">${product.price.toFixed(2)}</p>
                   </div>

                   {/* Ratings */}
                   <div className="flex items-center gap-1 mb-6">
                      <div className="flex text-[#555348]">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} className={clsx("w-3 h-3", i < Math.floor(product.rating) ? "fill-current" : "text-gray-300")} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">({product.reviewCount} reviews)</span>
                   </div>

                   {/* Key Details (No Description) */}
                   <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-2 text-sm">
                         <span className="font-bold w-20">Fiber:</span>
                         <span className="text-gray-600">{product.details?.fiberType || 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                         <span className="font-bold w-20">Weight:</span>
                         <span className="text-gray-600">{product.details?.weight || 'N/A'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                         <span className="font-bold w-20">Status:</span>
                         <span className="text-green-700 font-medium flex items-center gap-1">
                            <Check className="w-3 h-3" /> In Stock
                         </span>
                      </div>
                   </div>

                   {/* Variants */}
                   <div className="space-y-6 flex-1">
                      {/* Color */}
                      <div>
                         <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Select Color</span>
                         <div className="flex gap-2">
                            {colorVariants.map((variant, idx) => (
                               <button
                                  key={idx}
                                  onClick={() => setSelectedColor(idx)}
                                  className={clsx(
                                     "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all",
                                     selectedColor === idx ? "ring-1 ring-offset-2 ring-black" : "hover:scale-110"
                                  )}
                                  title={variant.name}
                               >
                                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: variant.color }} />
                               </button>
                            ))}
                         </div>
                      </div>

                      {/* Weight/Size */}
                      <div>
                         <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Size</span>
                         <div className="flex flex-wrap gap-2">
                            {weightOptions.map((w) => (
                               <button
                                  key={w}
                                  onClick={() => setSelectedWeight(w)}
                                  className={clsx(
                                     "px-3 py-1 text-xs border transition-colors",
                                     selectedWeight === w ? "bg-black text-white border-black" : "border-gray-200 hover:border-black"
                                  )}
                               >
                                  {w}
                               </button>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* Actions */}
                   <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4">
                      <div className="flex items-center border border-gray-200 h-12 w-32">
                         <button 
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-10 h-full flex items-center justify-center hover:bg-gray-50"
                         >
                            <Minus className="w-3 h-3" />
                         </button>
                         <div className="flex-1 text-center font-medium">{quantity}</div>
                         <button 
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-10 h-full flex items-center justify-center hover:bg-gray-50"
                         >
                            <Plus className="w-3 h-3" />
                         </button>
                      </div>

                      <button 
                         onClick={handleAddToCart}
                         className="flex-1 bg-[#555348] text-white h-12 px-6 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors flex items-center justify-center gap-2"
                      >
                         <ShoppingBag className="w-4 h-4" /> Add to Cart
                      </button>

                      <button 
                         onClick={toggleWishlist}
                         className={clsx(
                            "w-12 h-12 border flex items-center justify-center transition-colors",
                            inWishlist ? "border-red-200 bg-red-50 text-red-500" : "border-gray-200 hover:border-black"
                         )}
                      >
                         <Heart className={clsx("w-5 h-5", inWishlist && "fill-current")} />
                      </button>
                   </div>

                   <div className="mt-4 text-center">
                      <button onClick={onClose} className="text-[10px] uppercase tracking-widest border-b border-gray-300 pb-0.5 hover:border-black hover:text-black text-gray-500 transition-colors">
                         View Full Details
                      </button>
                   </div>
                </div>
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
