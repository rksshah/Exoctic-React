import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Share2, Minus, Plus, ChevronRight, Truck, ShieldCheck, HelpCircle, MessageCircle, Package, Clock, Users } from 'lucide-react';
import { clsx } from 'clsx';
import { products, woolProducts, getProductBySlug } from '../data/mockData';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { toast } from 'sonner';
import { ProductCard } from '../components/ProductCard';

export function ProductDetails() {
  const { slug } = useParams();
  const product = getProductBySlug(slug || '') || woolProducts[0]; // Fallback to first wool product
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState('2oz');

  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  // Color variants (mock if not present)
  const colorVariants = product.color ? [{ name: product.color, color: product.colorCode || '#000' }] : [
    { name: 'Original', color: '#1a1a1a' },
    { name: 'Natural', color: '#e8dcc8' }
  ];

  // Weight options
  const weightOptions = ['1/2oz', '1oz', '2oz', '4oz', '8oz'];

  // Gallery
  const gallery = product.images;

  // Related products
  const relatedProducts = [...woolProducts, ...products]
    .filter(p => p.id !== product.id && p.categoryId === product.categoryId)
    .slice(0, 4);

  const handleAddToCart = () => {
    const colorName = colorVariants[selectedColor]?.name || 'Default';
    addToCart(product, quantity, colorName, selectedWeight);
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 mb-8 py-4">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black font-bold">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">
          
          {/* --- LEFT: GALLERY (Sticky) --- */}
          <div className="lg:w-3/5">
             <div className="flex flex-col-reverse md:flex-row gap-4 sticky top-24">
                {/* Thumbnails (Vertical on desktop) */}
                <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-24 md:max-h-[80vh]">
                   {gallery.map((img, idx) => (
                     <button
                       key={idx}
                       onClick={() => setActiveImage(idx)}
                       className={clsx(
                         "flex-shrink-0 w-20 h-20 md:w-full md:h-auto md:aspect-square bg-[#f9f8f6] border transition-all overflow-hidden",
                         activeImage === idx ? "border-black ring-1 ring-black" : "border-transparent hover:border-gray-300"
                       )}
                     >
                       <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                     </button>
                   ))}
                </div>

                {/* Main Image */}
                <div className="flex-1 bg-[#f9f8f6] relative aspect-[4/5] md:aspect-auto md:min-h-[80vh] overflow-hidden">
                  <motion.img 
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src={gallery[activeImage] || gallery[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {product.isNew && <span className="bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest">New Arrival</span>}
                  </div>
                </div>
             </div>
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <div className="lg:w-2/5 pt-4">
            <div className="sticky top-24 space-y-8">
              
              {/* Header */}
              <div>
                <div className="flex justify-between items-start">
                   <h1 className="font-serif text-3xl md:text-4xl text-black leading-tight mb-2">
                     {product.name}
                   </h1>
                   <button 
                     onClick={handleWishlistToggle}
                     className={clsx(
                       "w-10 h-10 rounded-full flex items-center justify-center transition-colors border",
                       inWishlist ? "border-red-200 bg-red-50 text-red-500" : "border-gray-200 hover:border-black text-gray-500"
                     )}
                   >
                     <Heart className={clsx("w-5 h-5", inWishlist && "fill-current")} />
                   </button>
                </div>
                <div className="flex items-end gap-4 mt-2">
                   <p className="text-2xl font-medium text-black">${product.price.toFixed(2)}</p>
                   <div className="flex items-center gap-1 mb-1.5">
                      <div className="flex text-[#555348]">
                         {[...Array(5)].map((_, i) => (
                           <div key={i} className={clsx("w-3 h-3 rounded-full mr-1", i < Math.floor(product.rating) ? "bg-[#555348]" : "bg-gray-200")} />
                         ))}
                      </div>
                      <span className="text-xs text-gray-500 underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-black">
                        {product.reviewCount} Reviews
                      </span>
                   </div>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100" />

              {/* Description Snippet */}
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {product.shortDescription}
              </p>

              {/* Selectors */}
              <div className="space-y-6">
                
                {/* Color */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3 block">
                    Color: <span className="text-gray-500 font-normal">{colorVariants[selectedColor]?.name}</span>
                  </span>
                  <div className="flex gap-3">
                    {colorVariants.map((variant, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(idx)}
                        className={clsx(
                          "w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all relative",
                          selectedColor === idx ? "ring-1 ring-offset-2 ring-black scale-110" : "hover:scale-105"
                        )}
                        title={variant.name}
                      >
                        <div className="w-8 h-8 rounded-full" style={{ backgroundColor: variant.color }} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Weight */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-900">Weight</span>
                    <button className="text-[10px] uppercase tracking-wider text-gray-400 hover:text-black underline underline-offset-2">Size Guide</button>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {weightOptions.map((weight) => (
                      <button
                        key={weight}
                        onClick={() => setSelectedWeight(weight)}
                        className={clsx(
                          "py-3 border text-xs font-bold uppercase tracking-wider transition-all",
                          selectedWeight === weight 
                            ? "border-black bg-black text-white" 
                            : "border-gray-200 bg-white text-gray-500 hover:border-black hover:text-black"
                        )}
                      >
                        {weight}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                   <span className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3 block">Quantity</span>
                   <div className="flex items-center border border-gray-200 w-32 h-12">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <div className="flex-1 text-center font-medium text-sm">{quantity}</div>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-[#555348] text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#3d3a30] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
                <button className="w-full bg-[#5469d4] text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#4355c4] transition-colors opacity-90 hover:opacity-100">
                  Buy with Shop
                </button>
              </div>

              {/* CRO: Stock & Urgency Alert */}
              {typeof product.stock === 'number' && product.stock < 10 && (
                <div className="bg-amber-50 border border-amber-200 px-4 py-3 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                      {product.stock < 5 ? 'Almost Gone!' : 'Limited Stock'}
                    </p>
                    <p className="text-xs text-amber-700">
                      Only {product.stock} left in stock. Order soon!
                    </p>
                  </div>
                </div>
              )}

              {/* CRO: Social Proof - Simulated Activity */}
              <div className="bg-green-50 border border-green-200 px-4 py-3 flex items-start gap-3">
                <Users className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-green-900 uppercase tracking-wider mb-1">
                    Popular Item
                  </p>
                  <p className="text-xs text-green-700">
                    {Math.floor(Math.random() * 8) + 5} people are viewing this right now
                  </p>
                </div>
              </div>

              {/* CRO: Questions? Contact Us Button */}
              <a 
                href={`mailto:hello@exoticfiber.com?subject=Question about ${product.name}`}
                className="w-full bg-white border-2 border-[#555348] text-[#555348] py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#555348] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Questions? Contact Us
              </a>

              {/* CRO: Bulk Order Incentive */}
              {quantity >= 5 && (
                <div className="bg-blue-50 border border-blue-200 px-4 py-3">
                  <p className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                    💰 Ordering 5+? You qualify for bulk pricing!
                  </p>
                  <p className="text-xs text-blue-700">
                    Contact us for special bulk rates and save more.
                  </p>
                </div>
              )}

              {/* Value Props */}
              <div className="grid grid-cols-3 gap-2 py-6 border-y border-gray-100">
                 <div className="flex flex-col items-center text-center gap-2">
                    <Truck className="w-5 h-5 text-gray-400" />
                    <span className="text-[10px] uppercase font-bold text-gray-600">Free Shipping</span>
                 </div>
                 <div className="flex flex-col items-center text-center gap-2 border-x border-gray-100">
                    <ShieldCheck className="w-5 h-5 text-gray-400" />
                    <span className="text-[10px] uppercase font-bold text-gray-600">Secure Checkout</span>
                 </div>
                 <div className="flex flex-col items-center text-center gap-2">
                    <HelpCircle className="w-5 h-5 text-gray-400" />
                    <span className="text-[10px] uppercase font-bold text-gray-600">24/7 Support</span>
                 </div>
              </div>

              {/* Details Accordion (Simulated) */}
              <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                 <div>
                   <h3 className="font-bold text-black uppercase tracking-widest text-xs mb-2">Description</h3>
                   <p>{product.description}</p>
                 </div>
                 <div className="grid grid-cols-2 gap-y-2">
                    <div className="font-bold text-black text-xs uppercase tracking-wider">Fiber</div>
                    <div>{product.details?.fiberType || 'N/A'}</div>
                    <div className="font-bold text-black text-xs uppercase tracking-wider">Yardage</div>
                    <div>{product.details?.yardage || 'N/A'}</div>
                    <div className="font-bold text-black text-xs uppercase tracking-wider">Care</div>
                    <div>{product.details?.care || 'N/A'}</div>
                 </div>
              </div>

              {/* CRO: Trust & Guarantee Section */}
              <div className="bg-gray-50 border border-gray-200 p-6 space-y-4">
                <h3 className="font-bold text-black uppercase tracking-widest text-xs mb-3">Why Buy From Exotic Fiber?</h3>
                <div className="space-y-3 text-xs text-gray-600">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#555348] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-black mb-0.5">Quality Guarantee</p>
                      <p>Premium fiber tested for consistency and quality. We stand behind every product.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-4 h-4 text-[#555348] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-black mb-0.5">Easy Returns</p>
                      <p>Not satisfied? Return within 30 days for a full refund, no questions asked.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-4 h-4 text-[#555348] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-black mb-0.5">Expert Support</p>
                      <p>Have questions? Our fiber experts are here to help you choose the perfect materials.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- RECOMMENDATIONS --- */}
        <div className="mt-32 border-t border-gray-100 pt-16">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">You May Also Like</h2>
            <Link to="/shop" className="hidden md:block text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#555348] hover:border-[#555348] transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}