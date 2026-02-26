import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProducts, categories } from '../data/mockData';

export function QuickShop() {
  // Get 4 random products
  const quickShopProducts = allProducts
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  // Helper to get category name
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.name || 'Product';
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#f9f8f6] to-white border-t border-[#dedac8]/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-2">
              One More Look
            </h3>
            <p className="text-[#555348]">
              Don't miss these handpicked favorites
            </p>
          </div>
          <Link to="/shop">
            <button className="inline-flex items-center gap-2 text-[#1a1a1a] font-bold uppercase tracking-wider text-sm hover:text-[#8c8a7b] transition-colors group">
              Shop All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Horizontal Product Scroll */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {quickShopProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/product/${product.slug}`} className="group block">
                <div className="relative aspect-[3/4] bg-[#f9f8f6] rounded-lg overflow-hidden mb-3">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-[#1a1a1a] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      New
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#99a1af] mb-1">
                    {getCategoryName(product.categoryId)}
                  </p>
                  <h4 className="font-medium text-sm text-[#1a1a1a] mb-1 group-hover:text-[#8c8a7b] transition-colors line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="font-bold text-sm text-[#1a1a1a]">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}