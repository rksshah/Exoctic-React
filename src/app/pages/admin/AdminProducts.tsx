import React from 'react';
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';
import { clsx } from 'clsx';

const DUMMY_PRODUCTS = [
  { id: 'PRD-001', name: 'Royal Alpaca Yarn', category: 'Yarn', price: 45.00, stock: 124, status: 'Active', image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=100' },
  { id: 'PRD-002', name: 'Merino Wool Roving', category: 'Fiber', price: 28.00, stock: 56, status: 'Active', image: 'https://images.unsplash.com/photo-1616654761821-4f67d30f1466?auto=format&fit=crop&q=80&w=100' },
  { id: 'PRD-003', name: 'Silk Mohair Blend', category: 'Yarn', price: 35.00, stock: 89, status: 'Active', image: 'https://images.unsplash.com/photo-1579270634621-5f259e863116?auto=format&fit=crop&q=80&w=100' },
  { id: 'PRD-004', name: 'Bamboo Knitting Needles', category: 'Tools', price: 15.00, stock: 200, status: 'Active', image: 'https://images.unsplash.com/photo-1584992236310-6eddd724a4c7?auto=format&fit=crop&q=80&w=100' },
  { id: 'PRD-005', name: 'Cashmere Lace Weight', category: 'Yarn', price: 65.00, stock: 12, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1636715940535-9be6f64188d7?auto=format&fit=crop&q=80&w=100' },
  { id: 'PRD-006', name: 'Limited Edition Dye Kit', category: 'Kits', price: 85.00, stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1605218427360-3a697663b65a?auto=format&fit=crop&q=80&w=100' },
];

export function AdminProducts() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold text-gray-900">Products</h1>
           <p className="text-gray-500 text-sm">Manage your product catalog, inventory, and pricing.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#555348] text-white px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-[#3d3a30] transition-colors shadow-lg shadow-[#555348]/20">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#555348]"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
              <Filter className="w-4 h-4" /> Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
              Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
              <tr>
                <th className="px-6 py-4">Product Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {DUMMY_PRODUCTS.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-gray-600">{product.stock} units</td>
                  <td className="px-6 py-4">
                    <span className={clsx(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5",
                      product.status === 'Active' ? "bg-green-100 text-green-700" :
                      product.status === 'Low Stock' ? "bg-orange-100 text-orange-700" :
                      "bg-red-100 text-red-700"
                    )}>
                      <span className={clsx("w-1.5 h-1.5 rounded-full", 
                         product.status === 'Active' ? "bg-green-600" :
                         product.status === 'Low Stock' ? "bg-orange-600" :
                         "bg-red-600"
                      )} />
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 text-gray-400 hover:text-[#555348] transition-colors"><Eye className="w-4 h-4" /></button>
                      <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors"><Edit className="w-4 h-4" /></button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <p>Showing 1-6 of 24 products</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
