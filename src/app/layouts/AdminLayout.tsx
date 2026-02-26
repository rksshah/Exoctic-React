import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  CreditCard, 
  Settings, 
  BarChart, 
  Truck, 
  Megaphone, 
  FileText, 
  LogOut,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import { clsx } from 'clsx';
import logoBlack from 'figma:asset/d93874304e6e95d57b2b9c850a5b427480116330.png';

export function AdminLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Products', icon: ShoppingBag, path: '/admin/products' },
    { name: 'Orders', icon: FileText, path: '/admin/orders' },
    { name: 'Customers', icon: Users, path: '/admin/customers' },
    { name: 'Payments', icon: CreditCard, path: '/admin/payments' },
    { name: 'Shipping', icon: Truck, path: '/admin/shipping' },
    { name: 'Marketing', icon: Megaphone, path: '/admin/marketing' },
    { name: 'Analytics', icon: BarChart, path: '/admin/analytics' },
    { name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex font-sans">
      
      {/* Sidebar */}
      <aside 
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-64 bg-[#1a1c23] text-gray-400 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 flex flex-col",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-center border-b border-gray-800 bg-[#1a1c23]">
           <span className="text-white font-serif font-bold tracking-widest text-lg">EF ADMIN</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.path);
              
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className={clsx(
                      "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      isActive 
                        ? "bg-[#555348] text-white" 
                        : "hover:bg-gray-800 hover:text-white"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 w-full px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-900/20 hover:text-red-300 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Exit Admin
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-gray-500 hover:text-black"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center gap-2 text-gray-400 bg-gray-100 px-3 py-1.5 rounded-md w-64">
               <Search className="w-4 h-4" />
               <input 
                 type="text" 
                 placeholder="Search..." 
                 className="bg-transparent border-none focus:outline-none text-sm w-full" 
               />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-[#555348] transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#555348] flex items-center justify-center text-white font-bold text-xs">
                AU
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
