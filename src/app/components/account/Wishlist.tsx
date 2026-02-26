import React from 'react';
import { useWishlist } from '../../contexts/WishlistContext';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, X } from 'lucide-react';

export function AccountWishlist() {
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
      <div className="text-center py-20 border border-dashed border-gray-200 rounded-lg">
        <Heart className="w-16 h-16 text-gray-200 mx-auto mb-6" />
        <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
        <p className="text-gray-500 mb-8">Save items you love for later</p>
        <Link to="/shop">
          <button className="bg-[#555348] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
            Start Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
         <h2 className="text-2xl font-serif text-[#333]">My Wishlist</h2>
         <p className="text-gray-500 text-sm mt-1">Saved items for later purchase.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {wishlistItems.map((product) => (
          <div key={product.id} className="group relative border border-gray-100 rounded-lg p-4 hover:shadow-lg transition-all duration-300 bg-white">
            
            <button
              onClick={() => removeFromWishlist(product.id)}
              className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <Link to={`/product/${product.slug}`} className="block relative aspect-square bg-[#f9f8f6] mb-4 overflow-hidden rounded-md">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </Link>

            <div className="space-y-2">
              <Link to={`/product/${product.slug}`}>
                <h3 className="font-medium text-gray-900 hover:text-[#555348] transition-colors truncate">
                  {product.name}
                </h3>
              </Link>
              <div className="flex justify-between items-center">
                 <p className="font-bold text-[#555348]">${product.price.toFixed(2)}</p>
                 <p className="text-xs text-gray-500 capitalize">{product.fiberType}</p>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-3 bg-[#f9f8f6] text-[#555348] py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#555348] hover:text-white transition-colors flex items-center justify-center gap-2 rounded"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
