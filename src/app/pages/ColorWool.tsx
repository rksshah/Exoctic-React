import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check, X } from 'lucide-react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { allColorWoolProducts, Product } from '../data/mockData';
import { Pagination } from '../components/Pagination';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';

// Import hero image
import heroImage from 'figma:asset/9c1856ba9c0b7794b35f6ccba56042759d6c2884.png';

// Color family definitions
const COLOR_FAMILIES = [
  {
    id: 'All',
    label: 'All Colors',
    description: 'Browse our complete collection',
    swatches: ['#1a1a1a', '#CC0000', '#006994', '#355E3B'],
  },
  {
    id: 'Neutral',
    label: 'Neutral',
    description: 'Timeless blacks, whites, greys & beiges',
    swatches: ['#1a1a1a', '#e8e4dc', '#9e9e9e', '#c4b99a'],
  },
  {
    id: 'Red',
    label: 'Red',
    description: 'Vibrant reds, oranges & warm tones',
    swatches: ['#CC0000', '#ED6B2F', '#F4A460', '#B22222'],
  },
  {
    id: 'Blue',
    label: 'Blue',
    description: 'Deep navy, sky & ocean blues',
    swatches: ['#006994', '#191970', '#87CEEB', '#4682B4'],
  },
  {
    id: 'Green',
    label: 'Green',
    description: 'Forest, sage & nature greens',
    swatches: ['#355E3B', '#228B22', '#29AB87', '#8FBC8F'],
  },
  {
    id: 'Pink',
    label: 'Pink',
    description: 'Rose, blush & berry pinks',
    swatches: ['#8B0057', '#FFB6C1', '#FF69B4', '#C71585'],
  },
  {
    id: 'Yellow',
    label: 'Yellow',
    description: 'Sunshine, marigold & golden yellows',
    swatches: ['#EFC050', '#FFFF31', '#FFD700', '#DAA520'],
  },
  {
    id: 'Purple',
    label: 'Purple',
    description: 'Royal, lavender & violet purples',
    swatches: ['#4169E1', '#E6E6FA', '#800080', '#9370DB'],
  },
];

// Hero background colors per family
const FAMILY_HERO_BG: Record<string, string> = {
  All:     '#dedac8',
  Neutral: '#dedac8',
  Red:     '#c8534a',
  Blue:    '#3a5a8c',
  Green:   '#4a6e4a',
  Pink:    '#b56a8a',
  Yellow:  '#c4a23a',
  Purple:  '#6a4a9e',
};

export function ColorWool() {
  const [selectedFamily, setSelectedFamily] = useState<string>('Neutral');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedWeights, setSelectedWeights] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState('best-selling');
  const [activeTab, setActiveTab] = useState('color-wool');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Quick View State
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Filter Data
  const materials = ['Merino', 'Alpaca', 'Wool'];
  const weights = ['Lace', 'Fingering', 'Sport', 'DK', 'Worsted', 'Bulky', 'Roving'];

  // Tabs
  const tabs = [
    { id: 'collections', label: 'COLLECTION', href: '/shop' },
    { id: 'color-wool', label: 'COLOR WOOL', href: '/shop/color-wool' },
    { id: 'fiber-roving', label: 'FIBER ROVING', href: '/shop/fibers-roving' },
    { id: 'yarns', label: 'YARNS', href: '/shop/luxury-yarns' },
    { id: 'accessories', label: 'ACCESSORIES', href: '/shop/accessories' },
  ];

  const filteredProducts = useMemo(() => {
    return allColorWoolProducts.filter(product => {
      // Color family filter — if "All" is selected, don't filter by family
      if (selectedFamily !== 'All' && product.colorFamily !== selectedFamily) return false;

      // Material Filter
      if (selectedMaterials.length > 0) {
        if (!selectedMaterials.some(m => product.details.fiberType.includes(m))) return false;
      }

      // Weight Filter
      if (selectedWeights.length > 0) {
        if (!selectedWeights.some(w => product.details.weight.includes(w))) return false;
      }

      // Price Filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return (a.isNew ? -1 : 1);
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedFamily, selectedMaterials, selectedWeights, priceRange, sortBy]);

  // Reset page on any filter/family change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFamily, selectedMaterials, selectedWeights, priceRange, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const resetFilters = () => {
    setSelectedFamily('All');
    setSelectedMaterials([]);
    setSelectedWeights([]);
    setPriceRange([0, 100]);
  };

  const currentFamilyData = COLOR_FAMILIES.find(f => f.id === selectedFamily)!;
  const heroBg = FAMILY_HERO_BG[selectedFamily] ?? '#dedac8';

  return (
    <div className="pt-[126px] pb-24 min-h-screen bg-[#f9f8f6]">

      {/* --- HERO BANNER (dynamic per family) --- */}
      <div
        className="relative h-[280px] overflow-hidden transition-colors duration-700"
        style={{ backgroundColor: heroBg }}
      >
        <img
          src={heroImage}
          alt="Color Wool Collection"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <motion.h1
            key={selectedFamily}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-serif text-6xl md:text-7xl text-white tracking-[0.3em] drop-shadow-2xl"
          >
            {selectedFamily === 'All' ? 'COLOR WOOL' : selectedFamily.toUpperCase()}
          </motion.h1>
          <motion.p
            key={`desc-${selectedFamily}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-white/80 text-sm tracking-widest uppercase"
          >
            {currentFamilyData.description}
          </motion.p>
        </div>
      </div>

      {/* --- COLOR FAMILY SELECTOR --- */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-5">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {COLOR_FAMILIES.map((family) => {
              const isActive = selectedFamily === family.id;
              return (
                <button
                  key={family.id}
                  onClick={() => setSelectedFamily(family.id)}
                  className={clsx(
                    'flex items-center gap-2.5 px-4 py-2.5 rounded-full border transition-all duration-200 whitespace-nowrap flex-shrink-0 group',
                    isActive
                      ? 'border-[#555348] bg-[#555348] text-white shadow-sm'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-[#555348] hover:text-[#555348]'
                  )}
                >
                  {/* Color swatches preview */}
                  <div className="flex -space-x-1">
                    {family.swatches.slice(0, 3).map((hex, i) => (
                      <div
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-white/50 flex-shrink-0"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {family.label}
                  </span>
                  {/* Product count badge */}
                  <span
                    className={clsx(
                      'text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center',
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-[#e8e4dc] group-hover:text-[#555348]'
                    )}
                  >
                    {family.id === 'All' 
                      ? allColorWoolProducts.length 
                      : allColorWoolProducts.filter(p => p.colorFamily === family.id).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- TABS NAVIGATION --- */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center gap-12 py-4">
            {tabs.map(tab => (
              <Link
                key={tab.id}
                to={tab.href}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  'text-xs font-bold tracking-[0.15em] transition-colors',
                  activeTab === tab.id
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-gray-500 hover:text-black'
                )}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mt-12">
        {/* Sort / Filter bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              <span className="font-bold text-black">{filteredProducts.length}</span> products
            </span>
            {(selectedFamily !== 'Neutral' || selectedMaterials.length > 0 || selectedWeights.length > 0 || priceRange[1] < 100) && (
              <button
                onClick={resetFilters}
                className="text-xs font-bold uppercase tracking-widest text-[#555348] flex items-center gap-1 hover:text-black transition-colors"
              >
                <X className="w-3 h-3" /> Clear All
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Sort by:</span>
            <div className="relative group">
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#8c8a7b] transition-colors">
                {sortBy.replace(/-/g, ' ')} <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
                <div className="bg-white shadow-xl border border-gray-100 w-48 py-2 flex flex-col">
                  {['best-selling', 'newest', 'price-low', 'price-high', 'rating'].map(opt => (
                    <button
                      key={opt}
                      className={clsx(
                        'text-left px-4 py-2 text-sm hover:bg-gray-50 capitalize transition-colors',
                        sortBy === opt ? 'text-black font-bold' : 'text-gray-600 hover:text-black'
                      )}
                      onClick={() => setSortBy(opt)}
                    >
                      {opt.replace(/-/g, ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* --- SIDEBAR FILTERS --- */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-8 bg-white p-6 shadow-sm">

              {/* Active Color Family info */}
              {selectedFamily !== 'All' && (
                <div className="pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex -space-x-1">
                      {currentFamilyData.swatches.map((hex, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full border border-white"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#555348]">
                      {currentFamilyData.label} Tones
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{currentFamilyData.description}</p>
                </div>
              )}

              {/* Material Filter */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest mb-4">Material</h3>
                <div className="space-y-3">
                  {materials.map(mat => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                      <div className={clsx(
                        'w-4 h-4 border transition-colors flex items-center justify-center',
                        selectedMaterials.includes(mat)
                          ? 'bg-[#555348] border-[#555348]'
                          : 'border-gray-300 group-hover:border-[#555348]'
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
                          );
                        }}
                      />
                      <span className="text-sm text-gray-600 group-hover:text-black transition-colors">{mat}</span>
                    </label>
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
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#555348]"
                />
              </div>

              <hr className="border-gray-100" />

              {/* Weight Filter */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest mb-4">Weight</h3>
                <div className="space-y-3">
                  {weights.map(weight => (
                    <label key={weight} className="flex items-center gap-3 cursor-pointer group">
                      <div className={clsx(
                        'w-4 h-4 border transition-colors flex items-center justify-center',
                        selectedWeights.includes(weight)
                          ? 'bg-[#555348] border-[#555348]'
                          : 'border-gray-300 group-hover:border-[#555348]'
                      )}>
                        {selectedWeights.includes(weight) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedWeights.includes(weight)}
                        onChange={() => {
                          setSelectedWeights(prev =>
                            prev.includes(weight) ? prev.filter(w => w !== weight) : [...prev, weight]
                          );
                        }}
                      />
                      <span className="text-sm text-gray-600 group-hover:text-black transition-colors">{weight}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Reset */}
              <button
                onClick={resetFilters}
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#555348] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </aside>

          {/* --- PRODUCT GRID --- */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {filteredProducts.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-24"
                >
                  {/* Color swatches preview for selected family */}
                  <div className="flex justify-center gap-2 mb-6">
                    {currentFamilyData.swatches.map((hex, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full shadow-md"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                  <p className="font-serif text-2xl text-gray-400 mb-2">
                    No {selectedFamily} products match your filters.
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    Try adjusting your filters or browsing other color families.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="text-xs font-bold uppercase tracking-widest text-[#555348] underline underline-offset-4"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`grid-${selectedFamily}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {paginatedProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="group"
                      >
                        <Link
                          to={`/product/${product.slug}`}
                          className="block relative aspect-square overflow-hidden bg-white mb-4 shadow-sm hover:shadow-lg transition-shadow"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />

                          {/* Badges */}
                          <div className="absolute top-3 left-3 flex flex-col gap-1">
                            {product.isNew && (
                              <span className="bg-white text-[#555348] text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                                New
                              </span>
                            )}
                            {product.isBestSeller && (
                              <span className="bg-[#555348] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                                Best Seller
                              </span>
                            )}
                          </div>

                          {/* Color dot */}
                          {product.colorCode && (
                            <div
                              className="absolute bottom-3 right-3 w-5 h-5 rounded-full border-2 border-white shadow-md"
                              style={{ backgroundColor: product.colorCode }}
                              title={product.color}
                            />
                          )}

                          {/* Hover CTA Buttons */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                // Add to cart logic
                              }}
                              className="bg-white text-[#555348] px-4 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#555348] hover:text-white transition-colors"
                              title="Add to Cart"
                            >
                              Add to Cart
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                // Add to favorites logic
                              }}
                              className="bg-white text-[#555348] p-2.5 hover:bg-[#555348] hover:text-white transition-colors"
                              title="Add to Favorites"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setQuickViewProduct(product);
                                setIsQuickViewOpen(true);
                              }}
                              className="bg-white text-[#555348] p-2.5 hover:bg-[#555348] hover:text-white transition-colors"
                              title="Quick View"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                          </div>
                        </Link>

                        <div className="text-center">
                          <h3 className="text-xs font-bold uppercase tracking-wider mb-1 group-hover:text-[#555348] transition-colors">
                            <Link to={`/product/${product.slug}`}>{product.name}</Link>
                          </h3>
                          <p className="text-sm text-gray-900 mb-1">From ${product.price.toFixed(2)}</p>
                          {product.colorVariants && (
                            <p className="text-xs text-gray-400">{product.colorVariants} color available</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalItems={filteredProducts.length}
                    itemsPerPage={itemsPerPage}
                  />
                </motion.div>
              )}
            </AnimatePresence>
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