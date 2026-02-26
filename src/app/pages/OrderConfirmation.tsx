import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail, Download } from 'lucide-react';
import { Order } from '../types/order';

export function OrderConfirmation() {
  const { orderNumber } = useParams();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    // Load order from localStorage
    const orders = JSON.parse(localStorage.getItem('exotic-fiber-orders') || '[]');
    const foundOrder = orders.find((o: Order) => o.orderNumber === orderNumber);
    setOrder(foundOrder || null);
  }, [orderNumber]);

  if (!order) {
    return (
      <div className="pt-0 pb-24 bg-white min-h-screen">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-3xl font-medium mb-4">Order Not Found</h1>
          <p className="text-gray-500 mb-8">We couldn't find this order.</p>
          <Link to="/shop">
            <button className="bg-[#555348] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">Order Confirmed!</h1>
          <p className="text-gray-600 mb-2">Thank you for your purchase</p>
          <p className="text-sm text-gray-400">Order #{order.orderNumber}</p>
        </div>

        {/* Order Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-[#f9f8f6] p-6 rounded-lg text-center">
            <Mail className="w-8 h-8 text-[#555348] mx-auto mb-3" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">Confirmation Sent</p>
            <p className="text-xs text-gray-500">Check your email</p>
          </div>
          <div className="bg-[#f9f8f6] p-6 rounded-lg text-center">
            <Package className="w-8 h-8 text-[#555348] mx-auto mb-3" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">Estimated Delivery</p>
            <p className="text-xs text-gray-500">
              {new Date(order.estimatedDelivery).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="bg-[#f9f8f6] p-6 rounded-lg text-center">
            <Truck className="w-8 h-8 text-[#555348] mx-auto mb-3" />
            <p className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">Track Anytime</p>
            <p className="text-xs text-gray-500 font-mono">{order.trackingNumber}</p>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-xl font-medium mb-6">Order Details</h2>
          
          {/* Items */}
          <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 bg-[#f9f8f6] rounded overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.color} • {item.weight} • Quantity: {item.quantity}
                  </p>
                  <p className="text-sm font-bold mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Summary */}
          <div className="space-y-2 text-sm mb-6 pb-6 border-b border-gray-100">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">
                {order.shipping === 0 ? 'FREE' : `$${order.shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">${order.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <span className="font-bold text-base">Total</span>
              <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-3">Shipping Address</h3>
            <p className="text-sm text-gray-700">
              {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
              {order.shippingAddress.address}<br />
              {order.shippingAddress.apartment && <>{order.shippingAddress.apartment}<br /></>}
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
              {order.shippingAddress.phone}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={`/order-tracking/${order.trackingNumber}`} className="flex-1">
            <button className="w-full bg-[#555348] text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
              Track Your Order
            </button>
          </Link>
          <Link to="/shop" className="flex-1">
            <button className="w-full border border-gray-300 py-4 text-xs font-bold uppercase tracking-widest hover:border-[#555348] hover:text-[#555348] transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-[#f9f8f6] p-6 rounded-lg text-center">
          <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Need Help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            If you have any questions about your order, please contact our customer service team.
          </p>
          <Link to="/contact">
            <button className="text-xs font-bold uppercase tracking-widest text-[#555348] hover:underline">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}