import React, { useState, useEffect } from 'react';
import { MapPin, Plus, Edit2, Trash2, X, Check, Building2, Home, Truck, Archive, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'motion/react';

// --- TYPES ---

type AddressType = 'Residential' | 'Commercial' | 'Warehouse' | 'PO Box';

export interface Address {
  id: string;
  // Identity
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Business (Optional)
  isBusiness: boolean;
  companyName?: string;
  taxId?: string;
  
  // Location
  country: string;
  street: string;
  street2?: string;
  city: string;
  state: string;
  zip: string;
  
  // Metadata
  deliveryType: AddressType;
  instructions?: string;
  
  // Defaults
  isDefaultShipping: boolean;
  isDefaultBilling: boolean;
}

// --- MOCK DATA ---

const INITIAL_ADDRESSES: Address[] = [
  {
    id: 'addr_1',
    firstName: 'Demo',
    lastName: 'User',
    email: 'demo@exoticfiber.com',
    phone: '+1 (555) 123-4567',
    isBusiness: false,
    country: 'United States',
    street: '123 Luxury Lane',
    street2: 'Suite 404',
    city: 'Beverly Hills',
    state: 'CA',
    zip: '90210',
    deliveryType: 'Residential',
    isDefaultShipping: true,
    isDefaultBilling: true,
  },
  {
    id: 'addr_2',
    firstName: 'Demo',
    lastName: 'User',
    email: 'demo@exoticfiber.com',
    phone: '+1 (555) 987-6543',
    isBusiness: true,
    companyName: 'Exotic Knits LLC',
    taxId: 'US-99-999999',
    country: 'United States',
    street: '456 Artisan Way',
    city: 'Portland',
    state: 'OR',
    zip: '97209',
    deliveryType: 'Warehouse',
    instructions: 'Please use the loading dock at the back.',
    isDefaultShipping: false,
    isDefaultBilling: false,
  }
];

const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'UK', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' },
  { code: 'NZ', name: 'New Zealand' },
];

const DELIVERY_TYPES: AddressType[] = ['Residential', 'Commercial', 'Warehouse', 'PO Box'];

// --- COMPONENT ---

export function Addresses() {
  const [addresses, setAddresses] = useState<Address[]>(INITIAL_ADDRESSES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<Address>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset form when modal opens
  const openModal = (address?: Address) => {
    if (address) {
      setEditingId(address.id);
      setFormData({ ...address });
    } else {
      setEditingId(null);
      setFormData({
        country: 'United States',
        deliveryType: 'Residential',
        isBusiness: false,
        isDefaultShipping: false,
        isDefaultBilling: false
      });
    }
    setErrors({});
    setIsModalOpen(true);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email?.trim()) newErrors.email = 'Email is required';
    if (!formData.phone?.trim()) newErrors.phone = 'Phone is required';
    if (!formData.street?.trim()) newErrors.street = 'Address is required';
    if (!formData.city?.trim()) newErrors.city = 'City is required';
    if (!formData.state?.trim()) newErrors.state = 'State/Province is required';
    if (!formData.zip?.trim()) newErrors.zip = 'Postal code is required';
    
    if (formData.isBusiness) {
        if (!formData.taxId?.trim()) newErrors.taxId = 'Tax ID is required for business accounts';
        if (!formData.companyName?.trim()) newErrors.companyName = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    if (editingId) {
      // Update existing
      setAddresses(prev => prev.map(addr => {
        if (addr.id === editingId) {
           return { ...addr, ...formData } as Address;
        }
        // Handle defaults logic: if new one is default, unset others
        if (formData.isDefaultShipping && addr.isDefaultShipping) return { ...addr, isDefaultShipping: false };
        if (formData.isDefaultBilling && addr.isDefaultBilling) return { ...addr, isDefaultBilling: false };
        return addr;
      }));
    } else {
      // Add new
      const newAddress = {
        ...formData,
        id: `addr_${Date.now()}`
      } as Address;

      setAddresses(prev => {
        const updated = [...prev];
        // If this is the only address, make it default automatically
        if (updated.length === 0) {
            newAddress.isDefaultShipping = true;
            newAddress.isDefaultBilling = true;
        }
        // Unset other defaults if this one claims them
        return updated.map(addr => ({
            ...addr,
            isDefaultShipping: newAddress.isDefaultShipping ? false : addr.isDefaultShipping,
            isDefaultBilling: newAddress.isDefaultBilling ? false : addr.isDefaultBilling,
        })).concat(newAddress);
      });
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setAddresses(prev => prev.filter(a => a.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
           <h2 className="text-2xl font-serif text-[#333]">Address Book</h2>
           <p className="text-gray-500 text-sm mt-1">Manage shipping locations and billing details.</p>
        </div>
        <button 
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-[#555348] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded hover:bg-[#3d3a30] transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" /> Add New Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        <AnimatePresence>
          {addresses.map((addr) => (
            <motion.div 
              key={addr.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={clsx(
                "border rounded-lg p-6 hover:shadow-md transition-all relative group bg-white flex flex-col justify-between min-h-[280px]",
                (addr.isDefaultShipping || addr.isDefaultBilling) ? "border-[#dedac8] bg-[#fdfdfc]" : "border-gray-200"
              )}
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {addr.isDefaultShipping && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#555348] bg-[#dedac8]/30 px-2 py-1 rounded">
                      Default Shipping
                    </span>
                  )}
                  {addr.isDefaultBilling && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      Default Billing
                    </span>
                  )}
                  <span className={clsx("text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded flex items-center gap-1", 
                    addr.isBusiness ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"
                  )}>
                    {addr.isBusiness ? <Building2 className="w-3 h-3" /> : <Home className="w-3 h-3" />}
                    {addr.deliveryType}
                  </span>
                </div>
                
                <h3 className="font-serif text-lg font-bold text-gray-900">{addr.firstName} {addr.lastName}</h3>
                {addr.isBusiness && (
                  <p className="text-sm font-bold text-gray-700 mt-0.5">{addr.companyName}</p>
                )}
                
                <div className="text-sm text-gray-600 leading-relaxed mt-4 space-y-1">
                  <p>{addr.street}</p>
                  {addr.street2 && <p>{addr.street2}</p>}
                  <p>{addr.city}, {addr.state} {addr.zip}</p>
                  <p className="font-medium text-gray-900">{addr.country}</p>
                  
                  <div className="pt-2 mt-2 border-t border-gray-100 flex flex-col gap-1 text-xs text-gray-500">
                     <p>📞 {addr.phone}</p>
                     <p>✉️ {addr.email}</p>
                     {addr.isBusiness && addr.taxId && <p>🆔 Tax ID: {addr.taxId}</p>}
                  </div>

                  {addr.instructions && (
                    <div className="mt-3 bg-yellow-50 p-2 rounded text-xs text-yellow-800 border border-yellow-100 flex gap-2 items-start">
                        <AlertCircle className="w-3 h-3 mt-0.5 shrink-0" />
                        <span>"{addr.instructions}"</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-100 mt-6">
                <button 
                  onClick={() => openModal(addr)}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#555348] transition-colors"
                >
                  <Edit2 className="w-3.5 h-3.5" /> Edit
                </button>
                <div className="w-px bg-gray-200"></div>
                <button 
                  onClick={() => handleDelete(addr.id)}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Remove
                </button>
              </div>
            </motion.div>
          ))}

          {/* Empty State / Add Button */}
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => openModal()}
            className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:border-[#555348] hover:text-[#555348] hover:bg-[#f9f8f6] transition-all min-h-[280px] group"
          >
            <div className="w-12 h-12 rounded-full bg-gray-50 group-hover:bg-[#dedac8] flex items-center justify-center mb-4 transition-colors">
               <Plus className="w-6 h-6 group-hover:text-white" />
            </div>
            <span className="font-bold text-sm uppercase tracking-wider">Add New Address</span>
          </motion.button>
        </AnimatePresence>
      </div>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="fixed top-[5%] left-1/2 -translate-x-1/2 w-full max-w-3xl bg-white rounded-xl shadow-2xl z-[101] max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="font-serif text-2xl text-[#1a1a1a]">
                   {editingId ? 'Edit Address' : 'Add New Address'}
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
                
                {/* Section 1: Identity */}
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-[#555348] rounded-full"></span> Contact Information
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                        <input 
                          type="text" 
                          value={formData.firstName || ''}
                          onChange={e => setFormData({...formData, firstName: e.target.value})}
                          className={clsx("w-full p-2.5 border rounded-lg focus:outline-none focus:border-[#555348] transition-colors", errors.firstName ? "border-red-300 bg-red-50" : "border-gray-200")}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                        <input 
                          type="text" 
                          value={formData.lastName || ''}
                          onChange={e => setFormData({...formData, lastName: e.target.value})}
                          className={clsx("w-full p-2.5 border rounded-lg focus:outline-none focus:border-[#555348] transition-colors", errors.lastName ? "border-red-300 bg-red-50" : "border-gray-200")}
                        />
                         {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input 
                          type="email" 
                          value={formData.email || ''}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className={clsx("w-full p-2.5 border rounded-lg focus:outline-none focus:border-[#555348] transition-colors", errors.email ? "border-red-300 bg-red-50" : "border-gray-200")}
                        />
                         {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input 
                          type="tel" 
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone || ''}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className={clsx("w-full p-2.5 border rounded-lg focus:outline-none focus:border-[#555348] transition-colors", errors.phone ? "border-red-300 bg-red-50" : "border-gray-200")}
                        />
                         {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                   </div>
                </div>

                {/* Section 2: Business Toggle */}
                <div className="bg-[#f9f8f6] p-4 rounded-lg border border-[#dedac8]">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={formData.isBusiness || false}
                      onChange={e => setFormData({...formData, isBusiness: e.target.checked})}
                      className="w-5 h-5 accent-[#555348]"
                    />
                    <div>
                      <span className="font-bold text-gray-900 block">This is a business address</span>
                      <span className="text-xs text-gray-500 block">Requires Company Name and Tax ID for wholesale processing.</span>
                    </div>
                  </label>

                  {/* Business Fields (Conditional) */}
                  <motion.div 
                    initial={false}
                    animate={{ height: formData.isBusiness ? 'auto' : 0, opacity: formData.isBusiness ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 mt-2 border-t border-gray-200/50">
                       <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                        <input 
                          type="text" 
                          value={formData.companyName || ''}
                          onChange={e => setFormData({...formData, companyName: e.target.value})}
                          className={clsx("w-full p-2.5 border rounded-lg bg-white", errors.companyName ? "border-red-300" : "border-gray-200")}
                        />
                        {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID / VAT / GST *</label>
                        <input 
                          type="text" 
                          value={formData.taxId || ''}
                          onChange={e => setFormData({...formData, taxId: e.target.value})}
                          className={clsx("w-full p-2.5 border rounded-lg bg-white", errors.taxId ? "border-red-300" : "border-gray-200")}
                        />
                         {errors.taxId && <p className="text-red-500 text-xs mt-1">{errors.taxId}</p>}
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Business License (Optional)</label>
                         <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#555348] file:text-white hover:file:bg-[#3d3a30]"/>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Section 3: Address */}
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-[#555348] rounded-full"></span> Delivery Details
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country / Region *</label>
                        <select 
                          value={formData.country || 'United States'}
                          onChange={e => setFormData({...formData, country: e.target.value})}
                          className="w-full p-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-[#555348]"
                        >
                          {COUNTRIES.map(c => (
                            <option key={c.code} value={c.name}>{c.name}</option>
                          ))}
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
                        <input 
                          type="text" 
                          placeholder="123 Example St"
                          value={formData.street || ''}
                          onChange={e => setFormData({...formData, street: e.target.value})}
                          className={clsx("w-full p-2.5 border rounded-lg", errors.street ? "border-red-300" : "border-gray-200")}
                        />
                         {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Apartment, suite, unit, etc.</label>
                        <input 
                          type="text" 
                          placeholder="Unit 4B"
                          value={formData.street2 || ''}
                          onChange={e => setFormData({...formData, street2: e.target.value})}
                          className="w-full p-2.5 border border-gray-200 rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                        <input 
                          type="text" 
                          value={formData.city || ''}
                          onChange={e => setFormData({...formData, city: e.target.value})}
                          className={clsx("w-full p-2.5 border rounded-lg", errors.city ? "border-red-300" : "border-gray-200")}
                        />
                         {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                          <input 
                            type="text" 
                            value={formData.state || ''}
                            onChange={e => setFormData({...formData, state: e.target.value})}
                            className={clsx("w-full p-2.5 border rounded-lg", errors.state ? "border-red-300" : "border-gray-200")}
                          />
                           {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code *</label>
                          <input 
                            type="text" 
                            value={formData.zip || ''}
                            onChange={e => setFormData({...formData, zip: e.target.value})}
                            className={clsx("w-full p-2.5 border rounded-lg", errors.zip ? "border-red-300" : "border-gray-200")}
                          />
                           {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location Type</label>
                        <select 
                          value={formData.deliveryType || 'Residential'}
                          onChange={e => setFormData({...formData, deliveryType: e.target.value as any})}
                          className="w-full p-2.5 border border-gray-200 rounded-lg"
                        >
                          {DELIVERY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                   </div>
                </div>

                {/* Section 4: Instructions & Defaults */}
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-[#555348] rounded-full"></span> Preferences
                   </h4>
                   <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Instructions</label>
                        <textarea 
                          rows={3}
                          placeholder="Gate code, leave at back door, etc."
                          value={formData.instructions || ''}
                          onChange={e => setFormData({...formData, instructions: e.target.value})}
                          className="w-full p-2.5 border border-gray-200 rounded-lg text-sm resize-none"
                        />
                      </div>

                      <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={formData.isDefaultShipping || false}
                            onChange={e => setFormData({...formData, isDefaultShipping: e.target.checked})}
                            className="w-4 h-4 accent-[#555348]"
                          />
                          <span className="text-sm text-gray-700">Set as default <span className="font-bold">Shipping</span> address</span>
                        </label>
                        
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={formData.isDefaultBilling || false}
                            onChange={e => setFormData({...formData, isDefaultBilling: e.target.checked})}
                            className="w-4 h-4 accent-[#555348]"
                          />
                          <span className="text-sm text-gray-700">Set as default <span className="font-bold">Billing</span> address</span>
                        </label>
                      </div>
                   </div>
                </div>

              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
                 <button 
                   onClick={() => setIsModalOpen(false)}
                   className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
                 >
                   Cancel
                 </button>
                 <button 
                   onClick={handleSave}
                   className="px-6 py-3 rounded-lg bg-[#555348] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#3d3a30] transition-colors shadow-lg shadow-[#555348]/20"
                 >
                   Save Address
                 </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
