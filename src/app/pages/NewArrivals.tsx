import React, { useState, useEffect } from 'react';
import { products } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { Pagination } from '../components/Pagination';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 9;

export function NewArrivals() {
  // Filter products added in the last 30 days (mock: products with id < 10)
  const newProducts = products.filter(p => parseInt(p.id.replace('p', '')) < 10);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = newProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black">New Arrivals</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">New Arrivals</h1>
          <p className="text-gray-600 max-w-2xl">
            Discover our latest additions—freshly dyed colorways, new fiber blends, and seasonal releases. These are the newest treasures to arrive in our studio.
          </p>
        </div>

        {/* Product Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Showing <span className="font-bold">{newProducts.length}</span> new products
          </p>
        </div>

        {/* Products Grid */}
        {newProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalItems={newProducts.length}
              itemsPerPage={ITEMS_PER_PAGE}
            />
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">No new arrivals at the moment</p>
            <Link 
              to="/shop" 
              className="inline-block bg-[#555348] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors"
            >
              Shop All Products
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
