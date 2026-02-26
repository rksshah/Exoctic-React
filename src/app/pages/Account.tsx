import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useWishlist } from '../contexts/WishlistContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, MapPin, CreditCard, Settings, LogOut, Package } from 'lucide-react';
import { clsx } from 'clsx';

// Import Inner Components
import { Orders } from '../components/account/Orders';
import { AccountWishlist } from '../components/account/Wishlist';
import { Addresses } from '../components/account/Addresses';
import { PaymentMethods } from '../components/account/PaymentMethods';
import { Settings as AccountSettings } from '../components/account/Settings';

type AccountTab = 'orders' | 'wishlist' | 'addresses' | 'payment' | 'settings';

export function Account() {
  const { user, isAuthenticated, logout } = useAuth();
  const { wishlistCount } = useWishlist();
  const [activeTab, setActiveTab] = useState<AccountTab>('orders');
  const navigate = useNavigate();

  // Redirect to home if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { id: 'orders', label: 'Orders', icon: Package, component: <Orders /> },
    { id: 'wishlist', label: 'Wishlist', icon: Heart, component: <AccountWishlist />, count: wishlistCount },
    { id: 'addresses', label: 'Addresses', icon: MapPin, component: <Addresses /> },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard, component: <PaymentMethods /> },
    { id: 'settings', label: 'Account Settings', icon: Settings, component: <AccountSettings /> },
  ];

  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back
          </button>
          <h1 className="text-3xl md:text-4xl font-medium mb-2">My Account</h1>
          <p className="text-gray-500">Welcome back, {user?.firstName}!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3">
            <div className="bg-[#f9f8f6] rounded-lg overflow-hidden sticky top-36">
              {/* User Profile Summary */}
              <div className="p-6 border-b border-gray-200/60 bg-[#555348] text-white">
                <div className="flex items-center gap-4">
                   <div className="relative shrink-0">
                    <img 
                      src={user?.avatar} 
                      alt={user?.firstName} 
                      className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#555348] rounded-full"></div>
                   </div>
                   <div className="overflow-hidden min-w-0">
                     <h3 className="font-bold text-sm truncate">{user?.firstName} {user?.lastName}</h3>
                     <p className="text-xs text-white/70 truncate">{user?.email}</p>
                   </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="p-2 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as AccountTab)}
                      className={clsx(
                        "w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all duration-200 group relative",
                        isActive 
                          ? "bg-white text-[#555348] shadow-sm" 
                          : "text-gray-600 hover:bg-white/60 hover:text-black"
                      )}
                    >
                      <Icon className={clsx("w-4 h-4 shrink-0", isActive ? "text-[#555348]" : "text-gray-400 group-hover:text-gray-600")} />
                      {item.label}
                      {item.count !== undefined && item.count > 0 && (
                        <span className={clsx(
                          "ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full",
                          isActive ? "bg-[#555348] text-white" : "bg-gray-200 text-gray-600"
                        )}>
                          {item.count}
                        </span>
                      )}
                      
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#555348] rounded-r"></div>
                      )}
                    </button>
                  );
                })}

                <div className="pt-2 mt-2 border-t border-gray-200">
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4 shrink-0" />
                    Sign Out
                  </button>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
             {/* Mobile Tabs Dropdown (Visible only on small screens) */}
             <div className="lg:hidden mb-6">
               <select 
                 className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium focus:outline-none focus:border-[#555348]"
                 value={activeTab}
                 onChange={(e) => setActiveTab(e.target.value as AccountTab)}
               >
                 {menuItems.map(item => (
                   <option key={item.id} value={item.id}>{item.label}</option>
                 ))}
               </select>
             </div>

            <div className="bg-white min-h-[500px]">
              {menuItems.find(item => item.id === activeTab)?.component}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
