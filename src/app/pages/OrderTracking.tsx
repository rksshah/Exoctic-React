import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Package, Truck, CheckCircle, MapPin } from 'lucide-react';
import { clsx } from 'clsx';
import { Order, TrackingEvent } from '../types/order';

export function OrderTracking() {
  const { trackingNumber } = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [trackingEvents, setTrackingEvents] = useState<TrackingEvent[]>([]);

  useEffect(() => {
    // Load order from localStorage
    const orders = JSON.parse(localStorage.getItem('exotic-fiber-orders') || '[]');
    const foundOrder = orders.find((o: Order) => o.trackingNumber === trackingNumber);
    setOrder(foundOrder || null);

    if (foundOrder) {
      // Generate mock tracking events based on order status
      const events: TrackingEvent[] = [
        {
          status: 'Order Confirmed',
          location: 'Exotic Fiber Warehouse',
          timestamp: foundOrder.createdAt,
          description: 'Your order has been confirmed and is being prepared for shipment.',
        },
        {
          status: 'Processing',
          location: 'Exotic Fiber Warehouse',
          timestamp: new Date(new Date(foundOrder.createdAt).getTime() + 2 * 60 * 60 * 1000).toISOString(),
          description: 'Your items are being carefully packaged.',
        },
      ];

      if (foundOrder.status === 'shipped' || foundOrder.status === 'delivered') {
        events.push({
          status: 'Shipped',
          location: 'Distribution Center - New York, NY',
          timestamp: new Date(new Date(foundOrder.createdAt).getTime() + 24 * 60 * 60 * 1000).toISOString(),
          description: 'Your package has been shipped and is on its way.',
        });
        events.push({
          status: 'In Transit',
          location: 'Regional Facility - Chicago, IL',
          timestamp: new Date(new Date(foundOrder.createdAt).getTime() + 48 * 60 * 60 * 1000).toISOString(),
          description: 'Package is in transit to your delivery address.',
        });
      }

      if (foundOrder.status === 'delivered') {
        events.push({
          status: 'Out for Delivery',
          location: 'Local Delivery Hub',
          timestamp: new Date(new Date(foundOrder.createdAt).getTime() + 72 * 60 * 60 * 1000).toISOString(),
          description: 'Your package is out for delivery today.',
        });
        events.push({
          status: 'Delivered',
          location: foundOrder.shippingAddress.city + ', ' + foundOrder.shippingAddress.state,
          timestamp: new Date(new Date(foundOrder.createdAt).getTime() + 75 * 60 * 60 * 1000).toISOString(),
          description: 'Package has been delivered.',
        });
      }

      setTrackingEvents(events.reverse());
    }
  }, [trackingNumber]);

  if (!order) {
    return (
      <div className="pt-0 pb-24 bg-white min-h-screen">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-3xl font-medium mb-4">Tracking Not Found</h1>
          <p className="text-gray-500 mb-8">We couldn't find tracking information for this number.</p>
          <Link to="/shop">
            <button className="bg-[#555348] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const statusConfig = {
    processing: { text: 'Processing', color: 'text-blue-600', bg: 'bg-blue-100' },
    shipped: { text: 'Shipped', color: 'text-purple-600', bg: 'bg-purple-100' },
    delivered: { text: 'Delivered', color: 'text-green-600', bg: 'bg-green-100' },
    cancelled: { text: 'Cancelled', color: 'text-red-600', bg: 'bg-red-100' },
  };

  const currentStatus = statusConfig[order.status];

  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-medium mb-3">Track Your Order</h1>
          <p className="text-gray-500">Tracking Number: <span className="font-mono font-bold text-[#555348]">{trackingNumber}</span></p>
        </div>

        {/* Status Card */}
        <div className="bg-gradient-to-br from-[#555348] to-[#3d3a30] text-white rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60 mb-3">Current Status</p>
              <div className="flex items-center gap-3 mb-4">
                <span className={clsx("px-4 py-2 rounded text-sm font-bold", currentStatus.bg, currentStatus.color)}>
                  {currentStatus.text}
                </span>
              </div>
              <p className="text-sm text-white/80 mb-2">Order #{order.orderNumber}</p>
              <p className="text-lg font-medium">
                Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Delivering To</p>
              <p className="text-sm">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Tracking Timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-medium mb-6">Tracking History</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gray-200" />
              
              {/* Events */}
              <div className="space-y-6">
                {trackingEvents.map((event, index) => {
                  const isLatest = index === 0;
                  return (
                    <div key={index} className="relative pl-12">
                      {/* Icon */}
                      <div className={clsx(
                        "absolute left-0 w-8 h-8 rounded-full flex items-center justify-center",
                        isLatest ? "bg-[#555348] text-white" : "bg-gray-200 text-gray-500"
                      )}>
                        {event.status === 'Delivered' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : event.status.includes('Transit') || event.status.includes('Delivery') ? (
                          <Truck className="w-4 h-4" />
                        ) : event.status === 'Shipped' ? (
                          <Package className="w-4 h-4" />
                        ) : (
                          <MapPin className="w-4 h-4" />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className={clsx(
                        "bg-white border rounded-lg p-4",
                        isLatest ? "border-[#555348]" : "border-gray-200"
                      )}>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-bold text-sm">{event.status}</h3>
                          <span className="text-xs text-gray-500">
                            {new Date(event.timestamp).toLocaleString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: 'numeric',
                              minute: '2-digit',
                              hour12: true
                            })}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">{event.location}</p>
                        <p className="text-sm text-gray-700">{event.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-32">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-6">Order Items</h3>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-[#f9f8f6] rounded overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Total</span>
                  <span className="font-bold">${order.total.toFixed(2)}</span>
                </div>
              </div>

              <Link to="/contact" className="block mt-6">
                <button className="w-full border border-gray-300 py-3 text-xs font-bold uppercase tracking-widest hover:border-[#555348] hover:text-[#555348] transition-colors">
                  Need Help?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}