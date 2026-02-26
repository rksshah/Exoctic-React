import React from 'react';
import { CreditCard, Plus } from 'lucide-react';

export function PaymentMethods() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
           <h2 className="text-2xl font-serif text-[#333]">Payment Methods</h2>
           <p className="text-gray-500 text-sm mt-1">Manage your saved payment options securely.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#555348] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded hover:bg-[#3d3a30] transition-colors">
          <Plus className="w-4 h-4" /> Add New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-gradient-to-br from-[#1a1f2c] to-[#2d3748] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <CreditCard className="w-8 h-8 text-white/80" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 opacity-80" />
            </div>

            <div className="mb-6 relative z-10">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Card Number</p>
              <p className="font-mono text-xl tracking-wider">•••• •••• •••• 8842</p>
            </div>

            <div className="flex justify-between items-end relative z-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Card Holder</p>
                <p className="font-medium">DEMO ACCOUNT</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Expires</p>
                <p className="font-mono">12/25</p>
              </div>
            </div>
        </div>

        <button className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:border-[#555348] hover:text-[#555348] transition-colors min-h-[220px]">
          <Plus className="w-8 h-8 mb-2" />
          <span className="font-bold text-sm uppercase tracking-wider">Add Payment Method</span>
        </button>
      </div>
    </div>
  );
}
