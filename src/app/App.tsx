import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { AnimatePresence } from 'motion/react';

// Context Providers
import { CartProvider } from './contexts/CartContext';
import { SearchProvider } from './contexts/SearchContext';
import { AuthProvider } from './contexts/AuthContext';
import { WishlistProvider } from './contexts/WishlistContext';

// Layouts
import { ShopLayout } from './layouts/ShopLayout';
import { AdminLayout } from './layouts/AdminLayout';

// Pages
import { Home } from './pages/Home';
import { ShopCollection } from './pages/ShopCollection';
import { ColorWool } from './pages/ColorWool';
import { ProductDetails } from './pages/ProductDetails';
import { About } from './pages/About';
import { Journal } from './pages/Journal';
import { JournalPost } from './pages/JournalPost';
import { Materials } from './pages/Materials';
import { Factories } from './pages/Factories';
import { Sustainability } from './pages/Sustainability';
import { Contact } from './pages/Contact';
import { Wholesale } from './pages/Wholesale';
import { Account } from './pages/Account';
import { Wishlist } from './pages/Wishlist';
import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { OrderTracking } from './pages/OrderTracking';
import { Careers } from './pages/Careers';
import { Press } from './pages/Press';
import { NewArrivals } from './pages/NewArrivals';
import { MerinoRoving } from './pages/MerinoRoving';
import { Patterns } from './pages/Patterns';
import { GiftCards } from './pages/GiftCards';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { FAQ, Shipping, Returns, Values, HowItWorks } from './pages/TextPage';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminProducts } from './pages/admin/AdminProducts';
import { AdminOrders } from './pages/admin/AdminOrders';
import { AdminCustomers } from './pages/admin/AdminCustomers';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes - Separate Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="*" element={<div className="p-12 text-center text-gray-500">Module Under Construction</div>} />
        </Route>

        {/* Customer Routes - Shop Layout */}
        <Route element={<ShopLayout />}>
          {/* Core Shop */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopCollection />} />
          <Route path="/shop/color-wool" element={<ColorWool />} />
          <Route path="/shop/fibers-roving" element={<MerinoRoving />} />
          <Route path="/shop/:categorySlug" element={<ShopCollection />} />
          <Route path="/collections/:categorySlug" element={<ShopCollection />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          
          {/* Account */}
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation/:orderNumber" element={<OrderConfirmation />} />
          <Route path="/order-tracking/:trackingNumber" element={<OrderTracking />} />

          {/* Brand & Story */}
          <Route path="/about" element={<About />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/materials" element={<Materials />} />
          <Route path="/pages/factories" element={<Factories />} />
          <Route path="/pages/sustainability" element={<Sustainability />} />
          <Route path="/pages/how-it-works" element={<HowItWorks />} />
          <Route path="/pages/values" element={<Values />} />

          {/* Content */}
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalPost />} />

          {/* Business & Support */}
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pages/wholesale" element={<Wholesale />} />
          <Route path="/pages/faq" element={<FAQ />} />
          <Route path="/pages/shipping" element={<Shipping />} />
          <Route path="/pages/returns" element={<Returns />} />
          <Route path="/pages/careers" element={<Careers />} />
          <Route path="/pages/press" element={<Press />} />
          <Route path="/pages/new-arrivals" element={<NewArrivals />} />
          <Route path="/pages/merino-roving" element={<MerinoRoving />} />
          <Route path="/pages/patterns" element={<Patterns />} />
          <Route path="/pages/gift-cards" element={<GiftCards />} />
          <Route path="/pages/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pages/terms-conditions" element={<TermsConditions />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

function MainContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="font-sans antialiased bg-white selection:bg-[#dedac8] selection:text-black relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && <AppRoutes />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <MainContent />
            </Router>
          </WishlistProvider>
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  );
}