import React from 'react';
import { Search, Mail, Phone, MoreHorizontal, User, Shield } from 'lucide-react';
import { clsx } from 'clsx';

const DUMMY_CUSTOMERS = [
  { id: 'CUST-001', name: 'Alice Smith', email: 'alice@example.com', orders: 12, spent: '$1,245.00', location: 'New York, USA', status: 'Active', role: 'VIP' },
  { id: 'CUST-002', name: 'John Doe', email: 'john@example.com', orders: 3, spent: '$245.00', location: 'London, UK', status: 'Active', role: 'Customer' },
  { id: 'CUST-003', name: 'Emma Wilson', email: 'emma@example.com', orders: 8, spent: '$890.00', location: 'Toronto, CA', status: 'Active', role: 'Wholesale' },
  { id: 'CUST-004', name: 'Michael Brown', email: 'michael@example.com', orders: 1, spent: '$45.00', location: 'Sydney, AU', status: 'Inactive', role: 'Customer' },
  { id: 'CUST-005', name: 'Sarah Davis', email: 'sarah@example.com', orders: 5, spent: '$560.00', location: 'Paris, FR', status: 'Active', role: 'Customer' },
  { id: 'CUST-006', name: 'Robert Wilson', email: 'robert@example.com', orders: 0, spent: '$0.00', location: 'Berlin, DE', status: 'Blocked', role: 'Customer' },
];

export function AdminCustomers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
           <p className="text-gray-500 text-sm">View and manage customer profiles.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#555348]"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
              Filter by Segment
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
              <tr>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Orders</th>
                <th className="px-6 py-4">Total Spent</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {DUMMY_CUSTOMERS.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                           <p className="font-medium text-gray-900">{customer.name}</p>
                           {customer.role === 'VIP' && <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">VIP</span>}
                           {customer.role === 'Wholesale' && <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">B2B</span>}
                        </div>
                        <p className="text-xs text-gray-500">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={clsx(
                      "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5",
                      customer.status === 'Active' ? "bg-green-50 text-green-700" :
                      customer.status === 'Inactive' ? "bg-gray-100 text-gray-600" :
                      "bg-red-50 text-red-700"
                    )}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-700">{customer.orders}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{customer.spent}</td>
                  <td className="px-6 py-4 text-gray-500">{customer.location}</td>
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
          <p>Showing 1-6 of 2,450 customers</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
