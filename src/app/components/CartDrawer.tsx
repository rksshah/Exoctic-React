import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Truck, CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, total, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="font-serif text-xl">Shopping Cart</h2>
                <span className="text-sm text-gray-500">({items.length})</span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
                  <p className="font-serif text-xl text-gray-400 mb-2">Your cart is empty</p>
                  <p className="text-sm text-gray-500 mb-6">Add some beautiful fibers to get started</p>
                  <Link to="/shop">
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="bg-[#555348] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.selectedColor}-${item.selectedWeight}`} className="flex gap-4 pb-4 border-b border-gray-100">
                      <div className="w-24 h-24 bg-[#f9f8f6] flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm mb-1 truncate">{item.product.name}</h3>
                        {item.selectedColor && (
                          <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>
                        )}
                        {item.selectedWeight && (
                          <p className="text-xs text-gray-500">Weight: {item.selectedWeight}</p>
                        )}
                        <p className="text-sm font-bold mt-2">${item.product.price.toFixed(2)}</p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-auto text-xs text-gray-400 hover:text-red-600 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 p-6 space-y-4">
                {/* Free Shipping Banner */}
                {total < 200 && (
                  <div className="bg-blue-50 border border-blue-100 p-3 rounded flex items-start gap-2">
                    <Truck className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-blue-900">
                      You're <span className="font-bold">${(200 - total).toFixed(2)}</span> away from <span className="font-bold">free shipping!</span>
                    </p>
                  </div>
                )}

                {total >= 200 && (
                  <div className="bg-green-50 border border-green-100 p-3 rounded flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-green-900 font-bold">
                      You qualify for free shipping!
                    </p>
                  </div>
                )}

                {/* Subtotal */}
                <div className="flex items-center justify-between text-lg">
                  <span className="font-serif">Subtotal</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Shipping and taxes calculated at checkout
                </p>

                {/* Checkout Button */}
                <Link to="/checkout">
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-[#555348] text-white py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </Link>

                {/* Continue Shopping */}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-xs text-gray-500 hover:text-black transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}