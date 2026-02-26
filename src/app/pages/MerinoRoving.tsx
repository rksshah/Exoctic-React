import React, { useState } from 'react';
import { products, fibersRovingProducts, Product } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';
import { Pagination } from '../components/Pagination';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 9;

export function MerinoRoving() {
  // Combine all products that belong to Fibers Roving category
  const allProducts = [...products, ...fibersRovingProducts].filter(p =>
    p.categoryId === 'c2'
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState('featured');

  // Quick View State
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Available filters based on actual products
  const materials = ['Merino', 'Alpaca', 'Silk', 'Cashmere', 'Yak', 'Mohair'];
  const colorFilters = [
    { name: 'Black', color: '#000000' },
    { name: 'White', color: '#FFFFFF' },
    { name: 'Beige', color: '#D4C5B0' },
    { name: 'Pink', color: '#E91E63' },
    { name: 'Blue', color: '#2196F3' },
    { name: 'Green', color: '#4CAF50' },
    { name: 'Yellow', color: '#FFC107' },
    { name: 'Purple', color: '#9C27B0' },
  ];

  // Filter products
  let filteredProducts = allProducts;

  // Material filter
  if (selectedMaterials.length > 0) {
    filteredProducts = filteredProducts.filter(p =>
      selectedMaterials.some(material =>
        p.details?.fiberType?.toLowerCase().includes(material.toLowerCase()) ||
        p.name.toLowerCase().includes(material.toLowerCase())
      )
    );
  }

  // Color filter
  if (selectedColors.length > 0) {
    filteredProducts = filteredProducts.filter(p =>
      selectedColors.some(color =>
        p.color?.toLowerCase().includes(color.toLowerCase()) ||
        p.name.toLowerCase().includes(color.toLowerCase())
      )
    );
  }

  // Price range filter
  filteredProducts = filteredProducts.filter(p =>
    p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-az':
        return a.name.localeCompare(b.name);
      case 'name-za':
        return b.name.localeCompare(a.name);
      case 'featured':
      default:
        return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
    setCurrentPage(1);
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedMaterials([]);
    setSelectedColors([]);
    setPriceRange([0, 100]);
    setCurrentPage(1);
  };

  const hasActiveFilters = selectedMaterials.length > 0 || selectedColors.length > 0 || priceRange[0] > 0 || priceRange[1] < 100;

  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="py-8 border-b border-gray-200 mb-8">
          <p className="text-xs tracking-wider text-gray-500 mb-2 uppercase">Collection</p>
          <h1 className="text-4xl md:text-5xl font-light mb-2">Fibers Roving</h1>
          <p className="text-gray-600">Unspun delight for spinners and felters.</p>
        </div>

        {/* Results count and Sort */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-700">{sortedProducts.length}</span> results
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-semibold border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="featured">FEATURED</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="name-az">NAME: A-Z</option>
              <option value="name-za">NAME: Z-A</option>
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Filters Sidebar */}
          <aside className="w-64 shrink-0 space-y-8">
            {/* Material Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wide">MATERIAL</h3>
              <div className="space-y-3">
                {materials.map((material) => (
                  <label key={material} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(material)}
                      onChange={() => toggleMaterial(material)}
                      className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-black transition-colors">
                      {material}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wide">COLOR</h3>
              <div className="flex flex-wrap gap-3">
                {colorFilters.map((colorFilter) => (
                  <button
                    key={colorFilter.name}
                    onClick={() => toggleColor(colorFilter.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColors.includes(colorFilter.name)
                        ? 'border-black scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: colorFilter.color }}
                    title={colorFilter.name}
                  />
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-4 tracking-wide">PRICE RANGE</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>-</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {sortedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onQuickView={() => { setQuickViewProduct(product); setIsQuickViewOpen(true); }} />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  totalItems={sortedProducts.length}
                  itemsPerPage={ITEMS_PER_PAGE}
                />
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg mb-4">No products found.</p>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-600 hover:text-black underline"
                  >
                    CLEAR FILTERS
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </div>
  );
}