import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, X } from 'lucide-react';

export function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: product.colors[0],
      weight: product.weights?.[0] || '100g',
      quantity: 1,
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="pt-0 pb-24 bg-white min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-12">My Wishlist</h1>
          
          <div className="text-center py-16">
            <Heart className="w-20 h-20 text-gray-200 mx-auto mb-6" />
            <h2 className="text-2xl font-medium mb-3">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">Save items you love for later</p>
            <Link to="/shop">
              <button className="bg-[#555348] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium mb-2">My Wishlist</h1>
            <p className="text-gray-500">{wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''}</p>
          </div>
          <Link to="/shop">
            <button className="text-sm font-bold uppercase tracking-widest hover:text-[#555348] transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlistItems.map((product) => (
            <div key={product.id} className="group relative">
              
              {/* Remove Button */}
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
              >
                <X className="w-4 h-4 text-red-600" />
              </button>

              {/* Product Image */}
              <Link to={`/product/${product.slug}`}>
                <div className="aspect-square bg-[#f9f8f6] mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <Link to={`/product/${product.slug}`}>
                <h3 className="font-medium mb-1 hover:text-[#555348] transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-gray-500 mb-3">{product.fiberType}</p>
              <p className="font-bold mb-4">${product.price.toFixed(2)}</p>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#555348] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
                <Link to={`/product/${product.slug}`} className="block">
                  <button className="w-full border border-gray-300 py-3 text-xs font-bold uppercase tracking-widest hover:border-[#555348] hover:text-[#555348] transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
