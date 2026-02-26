import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Camera, Save } from 'lucide-react';

export function Settings() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-3xl space-y-8">
      <div>
         <h2 className="text-2xl font-serif text-[#333]">Account Settings</h2>
         <p className="text-gray-500 text-sm mt-1">Update your personal information and security.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
          Personal Information
        </h3>
        
        <div className="flex items-start gap-8 mb-8">
           <div className="relative group cursor-pointer">
              <img 
                src={user?.avatar} 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-100"
              />
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </div>
           </div>
           <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#555348]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#555348]"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#555348]"
                />
              </div>
           </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h3 className="text-lg font-medium mb-6">Change Password</h3>
        <div className="grid grid-cols-1 gap-6 max-w-md">
           <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Current Password</label>
              <input 
                type="password" 
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#555348]"
              />
           </div>
           <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">New Password</label>
              <input 
                type="password" 
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#555348]"
              />
           </div>
           <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Confirm New Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-[#555348]"
              />
           </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
          Cancel
        </button>
        <button className="flex items-center gap-2 bg-[#555348] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest rounded hover:bg-[#3d3a30] transition-colors shadow-lg shadow-[#555348]/20">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>
    </div>
  );
}
