import React from 'react';
import { Search, Filter, Eye, MoreHorizontal, Download } from 'lucide-react';
import { clsx } from 'clsx';

const DUMMY_ORDERS = [
  { id: '#EF-1024', customer: 'Alice Smith', email: 'alice@example.com', date: 'Oct 24, 2023', total: '$85.00', items: 3, payment: 'Paid', status: 'Delivered' },
  { id: '#EF-1025', customer: 'John Doe', email: 'john@example.com', date: 'Oct 24, 2023', total: '$120.50', items: 1, payment: 'Paid', status: 'Processing' },
  { id: '#EF-1026', customer: 'Emma Wilson', email: 'emma@example.com', date: 'Oct 23, 2023', total: '$340.00', items: 4, payment: 'Pending', status: 'Shipped' },
  { id: '#EF-1027', customer: 'Michael Brown', email: 'michael@example.com', date: 'Oct 23, 2023', total: '$45.00', items: 2, payment: 'Paid', status: 'Pending' },
  { id: '#EF-1028', customer: 'Sarah Davis', email: 'sarah@example.com', date: 'Oct 22, 2023', total: '$25.00', items: 1, payment: 'Paid', status: 'Delivered' },
  { id: '#EF-1029', customer: 'Robert Wilson', email: 'robert@example.com', date: 'Oct 21, 2023', total: '$215.00', items: 5, payment: 'Refunded', status: 'Cancelled' },
  { id: '#EF-1030', customer: 'Jennifer Lee', email: 'jen@example.com', date: 'Oct 20, 2023', total: '$65.00', items: 2, payment: 'Paid', status: 'Delivered' },
];

export function AdminOrders() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
           <p className="text-gray-500 text-sm">Monitor and fulfill customer orders.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4" /> Export Orders
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by order ID, customer..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#555348]"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 bg-white focus:outline-none">
              <option>All Statuses</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
              <Filter className="w-4 h-4" /> More Filters
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
              <tr>
                <th className="px-6 py-4">Order</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Payment</th>
                <th className="px-6 py-4">Fulfillment</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {DUMMY_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 font-bold text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-500">{order.date}</td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.email}</p>
                  </td>
                  <td className="px-6 py-4 font-medium">{order.total}</td>
                  <td className="px-6 py-4">
                     <span className={clsx(
                      "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                      order.payment === 'Paid' ? "bg-green-50 text-green-700 border border-green-100" :
                      order.payment === 'Refunded' ? "bg-gray-100 text-gray-600 border border-gray-200" :
                      "bg-yellow-50 text-yellow-700 border border-yellow-100"
                    )}>
                      {order.payment}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={clsx(
                      "flex items-center gap-2 w-fit px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider",
                      order.status === 'Delivered' ? "text-green-700" :
                      order.status === 'Processing' ? "text-blue-700" :
                      order.status === 'Shipped' ? "text-indigo-700" :
                      order.status === 'Cancelled' ? "text-red-700" :
                      "text-yellow-700"
                    )}>
                      <span className={clsx("w-1.5 h-1.5 rounded-full",
                         order.status === 'Delivered' ? "bg-green-600" :
                         order.status === 'Processing' ? "bg-blue-600" :
                         order.status === 'Shipped' ? "bg-indigo-600" :
                         order.status === 'Cancelled' ? "bg-red-600" :
                         "bg-yellow-600"
                      )} />
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <button className="text-gray-400 hover:text-[#555348] transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                     </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <p>Showing 1-7 of 152 orders</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
