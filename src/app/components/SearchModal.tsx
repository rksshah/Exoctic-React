import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, TrendingUp } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';
import { products, woolProducts } from '../data/mockData';
import { Link } from 'react-router-dom';

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, searchQuery, setSearchQuery } = useSearch();
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const allProducts = [...products, ...woolProducts];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.details.fiberType.toLowerCase().includes(query) ||
        product.color?.toLowerCase().includes(query)
    ).slice(0, 6); // Limit to 6 results

    setSearchResults(results);
  }, [searchQuery]);

  const popularSearches = ['Merino Wool', 'Black Roving', 'Luxury Yarn', 'Cashmere', 'Felting Wool'];

  const handleClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white shadow-2xl z-[101] rounded-lg overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search for fibers, yarns, colors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg outline-none placeholder:text-gray-400"
                />
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[500px] overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600">
                      Popular Searches
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="px-4 py-2 bg-[#f9f8f6] hover:bg-[#dedac8] text-sm text-gray-700 rounded-full transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-4 px-2">
                    Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                  </p>
                  <div className="space-y-2">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.slug}`}
                        onClick={handleClose}
                        className="flex items-center gap-4 p-2 hover:bg-[#f9f8f6] rounded-lg transition-colors group"
                      >
                        <div className="w-16 h-16 bg-[#f9f8f6] flex-shrink-0">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm mb-1 truncate group-hover:text-[#555348] transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-xs text-gray-500 truncate">{product.details.fiberType}</p>
                          <p className="text-sm font-bold mt-1">${product.price.toFixed(2)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      to={`/shop?search=${encodeURIComponent(searchQuery)}`}
                      onClick={handleClose}
                      className="block text-center text-xs font-bold uppercase tracking-widest text-[#555348] hover:text-black transition-colors"
                    >
                      View All Results
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <p className="text-gray-400 mb-2">No results found for "{searchQuery}"</p>
                  <p className="text-xs text-gray-500">Try searching for different keywords</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
