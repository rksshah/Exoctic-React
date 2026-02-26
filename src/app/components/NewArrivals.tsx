import React from 'react';
import { newArrivalsProducts } from '../data/mockData';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

export function NewArrivals() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* LEFT: Sticky Text Content */}
          <div className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-32 h-fit">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.3em] uppercase text-[#8c8a7b] mb-6"
              >
                Fresh from the Mill
              </motion.h4>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-7xl text-black leading-[0.9] mb-8"
              >
                New<br/>Arrivals
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#555348] text-lg leading-relaxed mb-12 max-w-sm"
              >
                Discover our latest collection of ethically sourced, hand-dyed wools. From the rugged highlands to your knitting needles, experience the difference of artisanal fiber.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link 
                  to="/shop"
                  className="inline-block bg-transparent border border-black px-12 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
                >
                  Shop All Products
                </Link>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: 2-Column Product Grid matching Figma */}
          <div className="w-full lg:w-2/3">
             <div className="flex gap-8">
                {/* Left Column - Items 1, 3, 5 (no offset) */}
                <div className="flex-1 flex flex-col gap-16">
                  {newArrivalsProducts.filter((_, i) => i % 2 === 0).map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                      className="flex flex-col gap-4"
                    >
                      {/* Product Card */}
                      <div className="group">
                        <div className="bg-[#f9f8f6] rounded-[6px] overflow-hidden relative w-full aspect-[440.672/550.828]">
                          <Link to={`/products/${product.slug}`}>
                            <img 
                              src={product.images[0]} 
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </Link>
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* NEW Badge */}
                          <div className="absolute top-3 left-3">
                            <div className="bg-[rgba(255,255,255,0.9)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] px-2 py-1">
                              <span className="font-bold text-[10px] text-black uppercase tracking-[1px] leading-[15px]">NEW</span>
                            </div>
                          </div>

                          {/* CTA Buttons on Hover */}
                          <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <button className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#555348] transition-colors flex items-center justify-center gap-2">
                              <ShoppingCart className="w-4 h-4" />
                              Add to Cart
                            </button>
                            <div className="flex gap-2">
                              <button className="flex-1 bg-white text-black py-3 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                <Heart className="w-4 h-4" />
                                Favorite
                              </button>
                              <button className="flex-1 bg-white text-black py-3 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                <Eye className="w-4 h-4" />
                                Quick View
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Product Info */}
                        <Link to={`/products/${product.slug}`} className="block">
                          <div className="pl-1 flex flex-col gap-1">
                            <h3 className="font-['Playfair_Display'] font-medium text-[18px] text-black leading-[22.5px] group-hover:text-[#8c8a7b] transition-colors">{product.name}</h3>
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-[14px] text-[#555348] leading-[20px] tracking-[0.35px]">${product.price.toFixed(2)}</span>
                              <span className="font-normal text-[10px] text-[#99a1af] uppercase tracking-[0.5px] leading-[15px]">WOOL</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column - Items 2, 4, 6 (with top offset) */}
                <div className="flex-1 flex flex-col gap-16 pt-48">
                  {newArrivalsProducts.filter((_, i) => i % 2 !== 0).map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: (idx * 0.2) + 0.2 }}
                      className="flex flex-col gap-4"
                    >
                      {/* Product Card */}
                      <div className="group">
                        <div className="bg-[#f9f8f6] rounded-[6px] overflow-hidden relative w-full aspect-[440.672/550.828]">
                          <Link to={`/products/${product.slug}`}>
                            <img 
                              src={product.images[0]} 
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </Link>
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* NEW Badge */}
                          <div className="absolute top-3 left-3">
                            <div className="bg-[rgba(255,255,255,0.9)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] px-2 py-1">
                              <span className="font-bold text-[10px] text-black uppercase tracking-[1px] leading-[15px]">NEW</span>
                            </div>
                          </div>

                          {/* CTA Buttons on Hover */}
                          <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <button className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#555348] transition-colors flex items-center justify-center gap-2">
                              <ShoppingCart className="w-4 h-4" />
                              Add to Cart
                            </button>
                            <div className="flex gap-2">
                              <button className="flex-1 bg-white text-black py-3 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                <Heart className="w-4 h-4" />
                                Favorite
                              </button>
                              <button className="flex-1 bg-white text-black py-3 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                <Eye className="w-4 h-4" />
                                Quick View
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Product Info */}
                        <Link to={`/products/${product.slug}`} className="block">
                          <div className="pl-1 flex flex-col gap-1">
                            <h3 className="font-['Playfair_Display'] font-medium text-[18px] text-black leading-[22.5px] group-hover:text-[#8c8a7b] transition-colors">{product.name}</h3>
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-[14px] text-[#555348] leading-[20px] tracking-[0.35px]">${product.price.toFixed(2)}</span>
                              <span className="font-normal text-[10px] text-[#99a1af] uppercase tracking-[0.5px] leading-[15px]">WOOL</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}