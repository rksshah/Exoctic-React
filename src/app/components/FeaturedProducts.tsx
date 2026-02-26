import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProducts, categories } from '../data/mockData';

export function FeaturedProducts() {
  // Get random 8 products to show
  const featuredProducts = allProducts
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  // Helper to get category name
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.name || 'Product';
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[#8c8a7b] mb-3">
            Before You Go
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-4">
            You Might Love These
          </h2>
          <p className="text-[#555348] text-lg max-w-2xl mx-auto">
            Handpicked favorites from our collection
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link to={`/product/${product.slug}`}>
                <div className="relative aspect-[3/4] bg-[#f9f8f6] rounded-lg overflow-hidden mb-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay with CTAs */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <button 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1a1a] hover:bg-[#dedac8] transition-all transform translate-y-4 group-hover:translate-y-0"
                      style={{ transitionDelay: '50ms' }}
                      onClick={(e) => {
                        e.preventDefault();
                        // Add to cart logic
                      }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                    <button 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1a1a] hover:bg-[#dedac8] transition-all transform translate-y-4 group-hover:translate-y-0"
                      style={{ transitionDelay: '100ms' }}
                      onClick={(e) => {
                        e.preventDefault();
                        // Add to wishlist logic
                      }}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button 
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1a1a] hover:bg-[#dedac8] transition-all transform translate-y-4 group-hover:translate-y-0"
                      style={{ transitionDelay: '150ms' }}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Badge if New */}
                  {product.isNew && (
                    <div className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      New
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#99a1af] mb-1">
                    {getCategoryName(product.categoryId)}
                  </p>
                  <h3 className="font-medium text-[#1a1a1a] mb-2 group-hover:text-[#8c8a7b] transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-bold text-[#1a1a1a]">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/shop">
            <button className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-[#555348] transition-all rounded-lg group">
              Explore All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}