import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronDown, Check, X, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { products, woolProducts, newArrivalsProducts, fibersRovingProducts, accessoriesProducts, luxuryYarnProducts, categories, Category, Product } from '../data/mockData';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { Pagination } from '../components/Pagination';

export function ShopCollection() {
  const { categorySlug } = useParams();
  
  // Find current category or default to 'Shop All'
  const currentCategory = categories.find(c => c.slug === categorySlug);
  
  // Special Collections Logic
  let pageTitle = 'All Products';
  let pageDesc = "Explore our complete collection of premium fibers, hand-dyed yarns, and artisanal accessories.";
  
  if (currentCategory) {
    pageTitle = currentCategory.name;
    pageDesc = currentCategory.description;
  } else if (categorySlug) {
    const smartCollections: Record<string, { title: string, desc: string }> = {
      'new-arrivals': { title: 'New Arrivals', desc: 'Fresh from the dye pots. Shop the latest additions to our studio.' },
      'best-sellers': { title: 'Best Sellers', desc: 'Our most loved yarns and fibers, chosen by makers like you.' },
      'merino-wool-roving': { title: 'Merino Wool Roving', desc: 'Cloud-soft merino ready for spinning, felting, or weaving.' },
      'cashmere-roving': { title: 'Cashmere Roving', desc: 'The ultimate luxury fiber. Pure, soft, and ready to spin.' },
      'natural-animal-fibers': { title: 'Natural Animal Fibers', desc: 'Undyed, untreated, and purely natural wools and fibers.' },
      'yarn-for-felting': { title: 'Yarn for Felting', desc: 'Non-superwash wools that felt beautifully for your projects.' },
      'yarn-for-hand-spinning': { title: 'Fiber for Spinning', desc: 'Premium roving and top for hand spinners.' },
      'gift-sets': { title: 'Curated Gift Sets', desc: 'Perfect bundles for the fiber artist in your life.' }
    };

    if (smartCollections[categorySlug]) {
      pageTitle = smartCollections[categorySlug].title;
      pageDesc = smartCollections[categorySlug].desc;
    }
  }
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  // Quick View State
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Filter Data
  const materials = ['Merino', 'Alpaca', 'Silk', 'Cashmere', 'Yak', 'Mohair'];
  
  const colorFilters = [
    { name: 'Black', hex: '#000000', matches: ['Black', 'Midnight'] },
    { name: 'White', hex: '#FFFFFF', matches: ['White', 'Ivory', 'Cloud'] },
    { name: 'Grey', hex: '#808080', matches: ['Grey', 'Nickel', 'Silver', 'Mist', 'Shadow', 'Frost'] },
    { name: 'Beige', hex: '#E1C699', matches: ['Beige', 'Pink Beige', 'Vintage', 'Earth', 'Camel'] },
    { name: 'Red', hex: '#C41E3A', matches: ['Red', 'Fire', 'Sunset', 'Berry'] },
    { name: 'Blue', hex: '#0047AB', matches: ['Blue', 'Ocean', 'Royal'] },
    { name: 'Green', hex: '#228B22', matches: ['Green', 'Forest', 'Seeded Sage', 'Sage'] },
    { name: 'Yellow', hex: '#FFC30B', matches: ['Yellow', 'Marigold', 'Daffodil', 'Gold'] },
    { name: 'Purple', hex: '#800080', matches: ['Purple', 'Berry', 'Lavender'] },
  ];

  const filteredProducts = useMemo(() => {
    const allProducts = [...products, ...woolProducts, ...newArrivalsProducts, ...fibersRovingProducts, ...accessoriesProducts, ...luxuryYarnProducts];
    return allProducts.filter(product => {
      // Category Filter
      if (currentCategory && product.categoryId !== currentCategory.id) return false;
      
      // Smart Collection Filters
      if (categorySlug === 'new-arrivals' && !product.isNew) return false;
      if (categorySlug === 'best-sellers' && !product.isBestSeller) return false;
      if (categorySlug === 'merino-wool-roving' && (!product.name.toLowerCase().includes('merino') || product.categoryId !== 'c2')) return false;
      if (categorySlug === 'cashmere-roving' && (!product.name.toLowerCase().includes('cashmere') || product.categoryId !== 'c2')) return false;
      
      // Material Filter
      if (selectedMaterials.length > 0) {
        if (!selectedMaterials.some(m => product.details?.fiberType?.includes(m))) return false;
      }

      // Color Filter
      if (selectedColors.length > 0) {
        const productColor = product.color || '';
        const matchesColor = selectedColors.some(selectedColorName => {
           const filter = colorFilters.find(f => f.name === selectedColorName);
           return filter?.matches.some(match => productColor.includes(match));
        });
        if (!matchesColor) return false;
      }
      
      // Price Filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return (a.isNew ? -1 : 1);
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured
    });
  }, [categorySlug, selectedMaterials, priceRange, sortBy, currentCategory]);

  // Reset to page 1 when filters/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedMaterials, selectedColors, priceRange, sortBy, categorySlug]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <div className="pt-0 pb-24 min-h-screen bg-white">
      {/* --- SEO HEADER --- */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c8a7b] mb-3 block">
              {categorySlug ? 'Collection' : 'Shop All'}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-black mb-6">
              {pageTitle}
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              {pageDesc}
            </p>
          </div>
          
          <div className="hidden md:block text-right">
             <span className="text-sm text-gray-400 font-mono">
               Showing {filteredProducts.length} results
             </span>
          </div>
        </div>
      </div>

      <hr className="border-gray-100 mb-12" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- SIDEBAR FILTERS --- */}
          <aside className={clsx(
            "lg:w-64 flex-shrink-0 transition-all duration-300",
            isFilterOpen ? "block" : "hidden lg:block"
          )}>
            <div className="sticky top-32 space-y-8">
              
              <div className="flex items-center justify-between lg:hidden mb-6">
                <span className="font-serif text-2xl">Filters</span>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest mb-4">Material</h3>
                <div className="space-y-3">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                      <div className={clsx(
                        "w-4 h-4 border transition-colors flex items-center justify-center",
                        selectedMaterials.includes(mat) ? "bg-[#555348] border-[#555348]" : "border-gray-300 group-hover:border-[#555348]"
                      )}>
                        {selectedMaterials.includes(mat) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => {
                          setSelectedMaterials(prev => 
                            prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
                          )
                        }}
                      />
                      <span className="text-sm text-gray-600 group-hover:text-black transition-colors">{mat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Color Filter */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest mb-4">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {colorFilters.map(color => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColors(prev => 
                          prev.includes(color.name) ? prev.filter(c => c !== color.name) : [...prev, color.name]
                        )
                      }}
                      className={clsx(
                        "w-8 h-8 rounded-full border flex items-center justify-center transition-all relative shadow-sm",
                        selectedColors.includes(color.name) ? "border-[#555348] ring-1 ring-[#555348] ring-offset-2 scale-110" : "border-gray-200 hover:border-gray-400 hover:scale-105"
                      )}
                      title={color.name}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColors.includes(color.name) && (
                         <Check className={clsx(
                           "w-4 h-4", 
                           ['White', 'Beige', 'Yellow'].includes(color.name) ? "text-black" : "text-white"
                         )} />
                      )}
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Price Filter */}
              <div>
                 <h3 className="font-bold text-xs uppercase tracking-widest mb-4">Price Range</h3>
                 <div className="flex items-center gap-4 mb-4">
                   <div className="bg-gray-50 px-3 py-2 text-sm text-gray-600 w-full">${priceRange[0]}</div>
                   <span className="text-gray-400">-</span>
                   <div className="bg-gray-50 px-3 py-2 text-sm text-gray-600 w-full">${priceRange[1]}</div>
                 </div>
                 <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#555348]"
                 />
              </div>

              <hr className="border-gray-100" />

              {/* Reset */}
              <button 
                onClick={() => {
                  setSelectedMaterials([]);
                  setSelectedColors([]);
                  setPriceRange([0, 100]);
                }}
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#555348] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <div className="flex-1">
            
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 sticky top-[80px] z-30 bg-white/90 backdrop-blur-md py-4 border-b border-gray-100 lg:border-none">
              <button 
                className="lg:hidden flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
                onClick={() => setIsFilterOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" /> Filter
              </button>

              <div className="flex items-center gap-4 ml-auto">
                <span className="text-sm text-gray-500 hidden md:inline">Sort by:</span>
                <div className="relative group">
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#8c8a7b] transition-colors">
                    {sortBy.replace('-', ' ')} <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                    <div className="bg-white shadow-xl border border-gray-100 w-48 py-2 flex flex-col">
                      {['featured', 'newest', 'price-low', 'price-high', 'rating'].map(opt => (
                        <button 
                          key={opt}
                          className="text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-600 hover:text-black capitalize"
                          onClick={() => setSortBy(opt)}
                        >
                          {opt.replace('-', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
              <AnimatePresence mode="popLayout">
                {paginatedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard 
                      product={product} 
                      onQuickView={handleQuickView} 
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-gray-400">No products found.</p>
                <button 
                  onClick={() => { setSelectedMaterials([]); setSelectedColors([]); setPriceRange([0, 200]); }}
                  className="mt-4 text-xs font-bold uppercase tracking-widest text-[#555348] underline underline-offset-4"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalItems={filteredProducts.length}
                itemsPerPage={ITEMS_PER_PAGE}
              />
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal 
        product={quickViewProduct} 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
      />
    </div>
  );
}