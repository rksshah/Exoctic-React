import React from 'react';
import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight, 
  Package,
  AlertCircle
} from 'lucide-react';
import { clsx } from 'clsx';

const StatCard = ({ title, value, change, isPositive, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <div className={clsx("p-2 rounded-lg", color)}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className={clsx(
        "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
        isPositive ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
      )}>
        {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
        {change}
      </div>
    </div>
    <p className="text-gray-500 text-sm font-medium">{title}</p>
    <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
  </div>
);

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$124,592.00" 
          change="+12.5%" 
          isPositive={true} 
          icon={DollarSign}
          color="bg-[#555348]"
        />
        <StatCard 
          title="Total Orders" 
          value="1,493" 
          change="+8.2%" 
          isPositive={true} 
          icon={ShoppingBag}
          color="bg-blue-500"
        />
        <StatCard 
          title="Total Customers" 
          value="8,245" 
          change="+1.2%" 
          isPositive={true} 
          icon={Users}
          color="bg-purple-500"
        />
         <StatCard 
          title="Pending Returns" 
          value="12" 
          change="-2.4%" 
          isPositive={false} 
          icon={AlertCircle}
          color="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-gray-900">Recent Orders</h3>
            <button className="text-sm text-[#555348] font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">Order ID</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3 rounded-r-lg">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { id: '#EF-1024', customer: 'Alice Smith', product: 'Merino Wool Roving', amount: '$85.00', status: 'Delivered' },
                  { id: '#EF-1025', customer: 'John Doe', product: 'Silk Mohair Blend', amount: '$120.50', status: 'Processing' },
                  { id: '#EF-1026', customer: 'Emma Wilson', product: 'Cashmere Lace', amount: '$340.00', status: 'Shipped' },
                  { id: '#EF-1027', customer: 'Michael Brown', product: 'Bamboo Needles', amount: '$45.00', status: 'Pending' },
                  { id: '#EF-1028', customer: 'Sarah Davis', product: 'Hand-Dyed Sock Yarn', amount: '$25.00', status: 'Delivered' },
                ].map((order, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900">{order.id}</td>
                    <td className="px-4 py-3">{order.customer}</td>
                    <td className="px-4 py-3 text-gray-500">{order.product}</td>
                    <td className="px-4 py-3 font-medium">{order.amount}</td>
                    <td className="px-4 py-3">
                      <span className={clsx(
                        "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                        order.status === 'Delivered' ? "bg-green-100 text-green-700" :
                        order.status === 'Processing' ? "bg-blue-100 text-blue-700" :
                        order.status === 'Shipped' ? "bg-indigo-100 text-indigo-700" :
                        "bg-yellow-100 text-yellow-700"
                      )}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-6">Top Selling Products</h3>
          <div className="space-y-6">
            {[
              { name: 'Royal Alpaca Yarn', sales: '245 sales', revenue: '$12,450', image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=100' },
              { name: 'Merino Wool Roving', sales: '180 sales', revenue: '$8,200', image: 'https://images.unsplash.com/photo-1616654761821-4f67d30f1466?auto=format&fit=crop&q=80&w=100' },
              { name: 'Silk Mohair Blend', sales: '156 sales', revenue: '$7,800', image: 'https://images.unsplash.com/photo-1579270634621-5f259e863116?auto=format&fit=crop&q=80&w=100' },
              { name: 'Cashmere Lace', sales: '98 sales', revenue: '$6,400', image: 'https://images.unsplash.com/photo-1636715940535-9be6f64188d7?auto=format&fit=crop&q=80&w=100' },
            ].map((product, i) => (
              <div key={i} className="flex items-center gap-4">
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-gray-900 truncate">{product.name}</h4>
                  <p className="text-xs text-gray-500">{product.sales}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm text-gray-900">{product.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
