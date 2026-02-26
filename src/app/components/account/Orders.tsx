import React, { useState } from 'react';
import { Package, Search, Truck, CheckCircle, RotateCcw, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

type OrderStatus = 'processing' | 'shipped' | 'delivered' | 'returned' | 'cancelled';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
  trackingNumber?: string;
}

const DUMMY_ORDERS: Order[] = [
  {
    id: 'ord_123456',
    orderNumber: 'EF-1001',
    date: '2023-10-15',
    status: 'delivered',
    total: 245.00,
    items: [
      { name: 'Royal Alpaca Yarn - Midnight Blue', quantity: 2, price: 45.00, image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=200' },
      { name: 'Silk Mohair Blend - Cloud White', quantity: 3, price: 35.00, image: 'https://images.unsplash.com/photo-1579270634621-5f259e863116?auto=format&fit=crop&q=80&w=200' },
       { name: 'Bamboo Knitting Needles - Size 6', quantity: 1, price: 15.00, image: 'https://images.unsplash.com/photo-1584992236310-6eddd724a4c7?auto=format&fit=crop&q=80&w=200' }
    ]
  },
  {
    id: 'ord_789012',
    orderNumber: 'EF-1024',
    date: '2023-11-02',
    status: 'shipped',
    trackingNumber: '1Z999AA10123456784',
    total: 120.50,
    items: [
      { name: 'Merino Wool Roving - Autumn Mix', quantity: 1, price: 85.00, image: 'https://images.unsplash.com/photo-1616654761821-4f67d30f1466?auto=format&fit=crop&q=80&w=200' },
      { name: 'Eco-Wash Wool Soap', quantity: 2, price: 12.00, image: 'https://images.unsplash.com/photo-1605218427360-3a697663b65a?auto=format&fit=crop&q=80&w=200' }
    ]
  },
  {
    id: 'ord_345678',
    orderNumber: 'EF-1035',
    date: '2023-11-20',
    status: 'processing',
    total: 340.00,
    items: [
      { name: 'Cashmere Lace Weight - Soft Pink', quantity: 4, price: 65.00, image: 'https://images.unsplash.com/photo-1636715940535-9be6f64188d7?auto=format&fit=crop&q=80&w=200' },
      { name: 'Pattern Book: Modern Classics', quantity: 1, price: 40.00, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200' }
    ]
  },
   {
    id: 'ord_901234',
    orderNumber: 'EF-0988',
    date: '2023-09-10',
    status: 'delivered',
    total: 85.00,
    items: [
      { name: 'Hand-Dyed Sock Yarn - Galaxy', quantity: 3, price: 25.00, image: 'https://images.unsplash.com/photo-1621253077755-f70356767468?auto=format&fit=crop&q=80&w=200' }
    ]
  },
  {
    id: 'ord_555666',
    orderNumber: 'EF-0950',
    date: '2023-08-05',
    status: 'returned',
    total: 150.00,
    items: [
      { name: 'Chunky Wool - Forest Green', quantity: 5, price: 30.00, image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80&w=200' }
    ]
  }
];

export function Orders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'delivered' | 'returned' | 'track'>('all');
  
  const filteredOrders = DUMMY_ORDERS.filter(order => {
    const matchesSearch = 
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (!matchesSearch) return false;

    if (activeFilter === 'all') return true;
    if (activeFilter === 'delivered') return order.status === 'delivered';
    if (activeFilter === 'returned') return order.status === 'returned';
    // "Track Order" basically means active orders (processing or shipped)
    if (activeFilter === 'track') return order.status === 'processing' || order.status === 'shipped';
    
    return true;
  });

  const getStatusColor = (status: OrderStatus) => {
    switch(status) {
      case 'delivered': return 'bg-green-100 text-green-700';
      case 'shipped': return 'bg-blue-100 text-blue-700';
      case 'processing': return 'bg-yellow-100 text-yellow-700';
      case 'returned': return 'bg-red-100 text-red-700';
      case 'cancelled': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: OrderStatus) => {
    switch(status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'processing': return <Clock className="w-4 h-4" />;
      case 'returned': return <RotateCcw className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const tabs = [
    { id: 'all', label: 'All Orders' },
    { id: 'track', label: 'Track Order' },
    { id: 'delivered', label: 'Delivered' },
    { id: 'returned', label: 'Returned' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
           <h2 className="text-2xl font-serif text-[#333]">Order History</h2>
           <p className="text-gray-500 text-sm mt-1">Track pending orders or review your purchase history.</p>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 p-2 rounded-lg">
        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={clsx(
                "px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors",
                activeFilter === tab.id 
                  ? "bg-white text-[#555348] shadow-sm" 
                  : "text-gray-500 hover:text-black hover:bg-gray-100"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <input 
            type="text" 
            placeholder="Search orders..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#555348] bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => (
            <div key={order.id} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white">
              <div className="bg-[#f9f8f6] p-4 sm:p-5 flex flex-wrap gap-y-4 justify-between items-center text-sm border-b border-gray-100">
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  <div>
                    <p className="uppercase text-[10px] font-bold text-gray-500 mb-1 tracking-wider">Order Placed</p>
                    <p className="font-medium text-gray-900">{new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <div>
                    <p className="uppercase text-[10px] font-bold text-gray-500 mb-1 tracking-wider">Total</p>
                    <p className="font-medium text-gray-900">${order.total.toFixed(2)}</p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="uppercase text-[10px] font-bold text-gray-500 mb-1 tracking-wider">Order #</p>
                    <p className="font-medium text-gray-900">{order.orderNumber}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                   {order.status === 'shipped' && order.trackingNumber && (
                     <Link to={`/order-tracking/${order.trackingNumber}`} className="text-[#555348] font-bold text-xs uppercase tracking-wider hover:underline flex items-center gap-1">
                        <Truck className="w-3 h-3" /> Track
                     </Link>
                   )}
                   <button className="text-[#555348] font-bold text-xs uppercase tracking-wider hover:underline">
                      Invoice
                   </button>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                 <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-2">
                      <span className={clsx(
                        "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                        getStatusColor(order.status)
                      )}>
                        {getStatusIcon(order.status)}
                        {order.status}
                      </span>
                      {order.status === 'delivered' && (
                        <span className="text-sm text-gray-500">
                           on {new Date(order.date).toLocaleDateString()}
                        </span>
                      )}
                   </div>
                 </div>
  
                 <div className="space-y-4">
                   {order.items.map((item, idx) => (
                     <div key={idx} className="flex gap-4 items-center group">
                        <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 border border-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                          <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity} × ${item.price.toFixed(2)}</p>
                        </div>
                        <div className="text-right">
                           {order.status === 'delivered' ? (
                             <Link to={`/shop`} className="inline-block text-[#555348] text-[10px] font-bold uppercase tracking-widest border border-[#dedac8] px-4 py-2 rounded hover:bg-[#555348] hover:text-white hover:border-[#555348] transition-colors">
                                Buy Again
                             </Link>
                           ) : order.status === 'returned' ? (
                              <span className="text-xs text-red-500 font-medium">Refunded</span>
                           ) : null}
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          ))
        ) : (
           <div className="text-center py-16 border-2 border-dashed border-gray-100 rounded-lg bg-gray-50/50">
             <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
             <h3 className="text-lg font-medium text-gray-900">No orders found</h3>
             <p className="text-gray-500 text-sm mt-1">
               {searchTerm ? `No matches for "${searchTerm}"` : `You have no ${activeFilter !== 'all' ? activeFilter : ''} orders yet.`}
             </p>
             {activeFilter !== 'all' && (
               <button 
                 onClick={() => setActiveFilter('all')}
                 className="mt-4 text-[#555348] font-bold text-xs uppercase tracking-widest hover:underline"
               >
                 View All Orders
               </button>
             )}
           </div>
        )}
      </div>
    </div>
  );
}
