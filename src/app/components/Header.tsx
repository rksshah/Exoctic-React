import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, ArrowRight, MapPin, Heart, LogIn } from 'lucide-react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'motion/react';
import { clsx } from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useSearch } from '../contexts/SearchContext';
import { useAuth } from '../contexts/AuthContext';
import { useWishlist } from '../contexts/WishlistContext';

// Import Logo Assets
import logoBlack from 'figma:asset/d93874304e6e95d57b2b9c850a5b427480116330.png';
import logoWhite from 'figma:asset/43db0573a5eeb17b273372fd5158c47b8afd19b2.png';

// Custom Chevron Icon from Figma
const NavChevron = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    width="12" 
    height="12" 
    viewBox="0 0 12 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M10.0153 4.76531L6.26531 8.51531C6.23049 8.55018 6.18913 8.57784 6.1436 8.59671C6.09808 8.61558 6.04928 8.62529 6 8.62529C5.95072 8.62529 5.90192 8.61558 5.8564 8.59671C5.81087 8.57784 5.76951 8.55018 5.73469 8.51531L1.98469 4.76531C1.91432 4.69495 1.87479 4.59951 1.87479 4.5C1.87479 4.40049 1.91432 4.30505 1.98469 4.23469C2.05505 4.16432 2.15049 4.12479 2.25 4.12479C2.34951 4.12479 2.44495 4.16432 2.51531 4.23469L6 7.71984L9.48469 4.23469C9.51953 4.19985 9.56089 4.17221 9.60641 4.15335C9.65194 4.1345 9.70073 4.12479 9.75 4.12479C9.79927 4.12479 9.84806 4.1345 9.89359 4.15335C9.93911 4.17221 9.98047 4.19985 10.0153 4.23469C10.0502 4.26953 10.0778 4.31089 10.0966 4.35641C10.1155 4.40194 10.1252 4.45073 10.1252 4.5C10.1252 4.54927 10.1155 4.59806 10.0966 4.64359C10.0778 4.68911 10.0502 4.73047 10.0153 4.76531Z" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="0.1875"
    />
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isDarkHeader = isScrolled || !isHome;
  
  // Hover states for mega menus
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Use contexts
  const { itemCount, setIsCartOpen } = useCart();
  const { setIsSearchOpen } = useSearch();
  const { isAuthenticated, user, setIsAuthModalOpen } = useAuth();
  const { wishlistCount } = useWishlist();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolledDown = latest > 50;
    if (isScrolledDown !== isScrolled) {
      setIsScrolled(isScrolledDown);
    }
  });

  // --- MEGA MENU DATA ---

  const colorWoolMenu = {
    // Split into groups for the 2-column layout
    basics: [
      { name: "Neutral", slug: "neutral", image: "https://images.unsplash.com/photo-1639654808436-6f696353f207?auto=format&fit=crop&q=80&w=150" },
      { name: "Brown", slug: "brown", image: "https://images.unsplash.com/photo-1609593891818-75522e1b8bb7?auto=format&fit=crop&q=80&w=150" },
      { name: "Dark", slug: "dark", image: "https://images.unsplash.com/photo-1645560374623-fc162182812e?auto=format&fit=crop&q=80&w=150" },
      { name: "Melange", slug: "melange", image: "https://images.unsplash.com/photo-1761766319959-70f832bee4a0?auto=format&fit=crop&q=80&w=150" },
    ],
    vibrant: [
      { name: "Red", slug: "red", image: "https://images.unsplash.com/photo-1726207873167-45c91eb95b8e?auto=format&fit=crop&q=80&w=150" },
      { name: "Orange", slug: "orange", image: "https://images.unsplash.com/photo-1639654760507-5f98562dbdcf?auto=format&fit=crop&q=80&w=150" },
      { name: "Yellow", slug: "yellow", image: "https://images.unsplash.com/photo-1674880659627-c7a0594277cd?auto=format&fit=crop&q=80&w=150" },
      { name: "Green", slug: "green", image: "https://images.unsplash.com/photo-1712893120836-611667463b58?auto=format&fit=crop&q=80&w=150" },
      { name: "Cyan Blue", slug: "cyan-blue", image: "https://images.unsplash.com/photo-1760074058330-4c593a20411a?auto=format&fit=crop&q=80&w=150" },
      { name: "Purple", slug: "purple", image: "https://images.unsplash.com/photo-1737094654353-969e1ac732f8?auto=format&fit=crop&q=80&w=150" },
      { name: "Pink", slug: "pink", image: "https://images.unsplash.com/photo-1636715940535-9be6f64188d7?auto=format&fit=crop&q=80&w=150" },
    ],
    featured: {
      title: "The Spectrum",
      subtitle: "Hand-dyed in small batches for vibrant, lasting color.",
      image: "https://images.unsplash.com/photo-1692365272628-530e24acc610?auto=format&fit=crop&q=80&w=600",
      cta: "Shop All Colors"
    }
  };

  const shopMenu = {
    categories: [
      { name: "Fiber Roving", slug: "fibers-roving", desc: "For spinning & felting" },
      { name: "Yarn", slug: "luxury-yarns", desc: "Cashmere, Silk & Alpaca" },
    ],
    featured: {
      title: "The Autumn Collection",
      subtitle: "Warm tones for cooler days.",
      image: "https://images.unsplash.com/photo-1669039168021-f3fe6dc3c020?auto=format&fit=crop&q=80&w=600",
      cta: "Shop the Collection"
    }
  };

  const accessoriesMenu = {
    categories: [
      { name: "Wool Dry Balls", slug: "accessories", desc: "Eco-friendly dryer solution" },
    ],
    featured: {
      title: "Sustainable Care",
      subtitle: "Make your knits last longer naturally.",
      image: "https://images.unsplash.com/photo-1605218427360-3a697663b65a?auto=format&fit=crop&q=80&w=600",
      cta: "Shop Care"
    }
  };

  const aboutMenu = {
    categories: [
      { name: "Our Story", href: "/about", desc: "The journey of Exotic Fiber" },
      { name: "Our Materials", href: "/pages/materials", desc: "Ethically sourced wool" },
      { name: "Our Factories", href: "/pages/factories", desc: "Artisan craftsmanship" },
      { name: "How It Works", href: "/pages/how-it-works", desc: "From farm to fiber" },
      { name: "Sustainability", href: "/pages/sustainability", desc: "Eco-conscious production" },
    ],
    stats: [
      { label: "Fair Trade Certified", value: "100%" },
      { label: "Partner Farms", value: "12" },
    ],
    featured: {
      title: "Transparency First",
      subtitle: "We believe in knowing exactly where your wool comes from.",
      image: "https://images.unsplash.com/photo-1632932580949-3182167aaebb?auto=format&fit=crop&q=80&w=600",
      cta: "Read Our Report"
    }
  };

  const journalMenu = {
    categories: [
      { name: "Tutorials", desc: "Step-by-step guides" },
      { name: "Free Patterns", desc: "Community favorites" },
      { name: "Dyer Diaries", desc: "Behind the scenes" },
      { name: "Events", desc: "Workshops & meetups" },
    ],
    featured: {
      title: "Mastering Colorwork",
      subtitle: "Tips for perfect tension.",
      image: "https://images.unsplash.com/photo-1735414526681-ef9339138f65?auto=format&fit=crop&q=80&w=600",
      cta: "Read Article"
    }
  };

  return (
    <>
      {/* Premium Announcement Bar (Marquee) */}
      <div className="bg-[#555348] text-[#dedac8] py-2.5 relative z-[60] overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex gap-8 items-center"
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            style={{ width: "max-content" }}
          >
            {/* Duplicated content for seamless loop */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center gap-8 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                <span>Complimentary Shipping over $200</span>
                <span className="w-1 h-1 bg-[#dedac8] rounded-full" />
                <span>30-Day Happiness Guarantee</span>
                <span className="w-1 h-1 bg-[#dedac8] rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <header 
        className={clsx(
          "left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isScrolled 
            ? "fixed top-0 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]" 
            : "absolute top-[36px]",
          !isScrolled && isHome ? "py-8" : "py-4", // Conditional padding
          isScrolled
            ? "bg-white/95 backdrop-blur-md"
            : ""
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative">
          <div className="flex items-center justify-between">
            
            {/* LEFT: Mobile Menu & Primary Nav */}
            <div className="flex-1 flex items-center justify-start">
               <button 
                className="lg:hidden p-2 -ml-2 hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className={clsx("w-7 h-7", isDarkHeader ? "text-black" : "text-white")} />
              </button>

              <nav className="hidden lg:flex items-center gap-8">
                
                {/* 1. COLOR WOOL (Mega Menu Trigger) */}
                <div 
                  className="h-full py-4"
                  onMouseEnter={() => setActiveDropdown('color-wool')}
                >
                  <Link to="/shop/color-wool" className="outline-none">
                    <button 
                      className={clsx(
                        "flex items-center gap-1 text-[15px] font-normal font-['Figtree'] leading-[26px] uppercase transition-colors relative group",
                        isDarkHeader ? "text-black hover:text-[#8c8a7b]" : "text-white hover:text-[#dedac8]"
                      )}
                    >
                      Color Wool
                      <NavChevron className={clsx("mb-[2px] transition-transform duration-300", activeDropdown === 'color-wool' ? "rotate-180" : "")} />
                      <span className={clsx(
                        "absolute -bottom-1 left-0 w-full h-[1px] bg-current transform scale-x-0 transition-transform duration-300 origin-left",
                        activeDropdown === 'color-wool' ? "scale-x-100" : "group-hover:scale-x-100"
                      )}/>
                    </button>
                  </Link>
                </div>

                {/* 2. SHOP (Mega Menu Trigger) */}
                <div 
                  className="h-full py-4"
                  onMouseEnter={() => setActiveDropdown('shop')}
                >
                  <Link to="/shop" className="outline-none">
                    <button 
                      className={clsx(
                        "flex items-center gap-1 text-[15px] font-normal font-['Figtree'] leading-[26px] uppercase transition-colors relative group",
                        isDarkHeader ? "text-black hover:text-[#8c8a7b]" : "text-white hover:text-[#dedac8]"
                      )}
                    >
                      Shop 
                      <NavChevron className={clsx("mb-[2px] transition-transform duration-300", activeDropdown === 'shop' ? "rotate-180" : "")} />
                      <span className={clsx(
                        "absolute -bottom-1 left-0 w-full h-[1px] bg-current transform scale-x-0 transition-transform duration-300 origin-left",
                        activeDropdown === 'shop' ? "scale-x-100" : "group-hover:scale-x-100"
                      )}/>
                    </button>
                  </Link>
                </div>

                {/* 3. ACCESSORIES (Mega Menu Trigger) */}
                 <div 
                  className="h-full py-4"
                  onMouseEnter={() => setActiveDropdown('accessories')}
                >
                  <Link to="/shop/accessories" className="outline-none">
                    <button 
                      className={clsx(
                        "flex items-center gap-1 text-[15px] font-normal font-['Figtree'] leading-[26px] uppercase transition-colors relative group",
                        isDarkHeader ? "text-black hover:text-[#8c8a7b]" : "text-white hover:text-[#dedac8]"
                      )}
                    >
                      Accessories
                      <NavChevron className={clsx("mb-[2px] transition-transform duration-300", activeDropdown === 'accessories' ? "rotate-180" : "")} />
                       <span className={clsx(
                        "absolute -bottom-1 left-0 w-full h-[1px] bg-current transform scale-x-0 transition-transform duration-300 origin-left",
                        activeDropdown === 'accessories' ? "scale-x-100" : "group-hover:scale-x-100"
                      )}/>
                    </button>
                  </Link>
                </div>

                {/* 4. ABOUT US (Mega Menu Trigger) */}
                <div 
                  className="h-full py-4"
                  onMouseEnter={() => setActiveDropdown('about')}
                >
                  <Link to="/about" className="outline-none">
                    <button 
                      className={clsx(
                        "flex items-center gap-1 text-[15px] font-normal font-['Figtree'] leading-[26px] uppercase transition-colors relative group",
                        isDarkHeader ? "text-black hover:text-[#8c8a7b]" : "text-white hover:text-[#dedac8]"
                      )}
                    >
                      About Us
                      <NavChevron className={clsx("mb-[2px] transition-transform duration-300", activeDropdown === 'about' ? "rotate-180" : "")} />
                       <span className={clsx(
                        "absolute -bottom-1 left-0 w-full h-[1px] bg-current transform scale-x-0 transition-transform duration-300 origin-left",
                        activeDropdown === 'about' ? "scale-x-100" : "group-hover:scale-x-100"
                      )}/>
                    </button>
                  </Link>
                </div>

              </nav>
            </div>

            {/* CENTER: Logo - Absolute Centered on All Screens */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <Link to="/" className="block transition-transform duration-500 hover:scale-105">
                <img 
                  key={isDarkHeader ? "black-logo" : "white-logo"}
                  src={isDarkHeader ? logoBlack : logoWhite} 
                  alt="Exotic Fiber Logo" 
                  className={clsx(
                    "h-auto object-contain transition-all duration-500",
                    (isScrolled || !isHome) ? "w-20 md:w-32" : "w-32 md:w-48" // Adjusted sizes to prevent cutoff
                  )}
                />
              </Link>
            </div>

            {/* RIGHT: Utilities */}
            <div className="flex-1 flex items-center justify-end gap-6 md:gap-8">
              <div className="flex items-center gap-5">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className={clsx("transition-colors hover:scale-110", isDarkHeader ? "text-black" : "text-white")}
                >
                  <Search className="w-5 h-5" strokeWidth={1.5} />
                </button>
                
                {/* Account Button - Hidden on Mobile */}
                {isAuthenticated ? (
                  <Link to="/account" className="hidden lg:block">
                    <button className={clsx("flex items-center gap-2 transition-colors hover:scale-110", isDarkHeader ? "text-black" : "text-white")}>
                      <img 
                        src={user?.avatar} 
                        alt={user?.firstName} 
                        className="w-6 h-6 rounded-full border-2 border-current"
                      />
                    </button>
                  </Link>
                ) : (
                  <button 
                    onClick={() => setIsAuthModalOpen(true)}
                    className={clsx("hidden lg:block transition-colors hover:scale-110", isDarkHeader ? "text-black" : "text-white")}
                  >
                    <User className="w-5 h-5" strokeWidth={1.5} />
                  </button>
                )}

                {/* Cart Button - Hidden on Mobile */}
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className={clsx("hidden lg:flex transition-colors hover:scale-110 relative group", isDarkHeader ? "text-black" : "text-white")}
                >
                  <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                  {itemCount > 0 && (
                    <span className={clsx(
                      "absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm transition-transform group-hover:scale-110",
                       isDarkHeader ? "bg-[#555348] text-white" : "bg-white text-black"
                    )}>
                      {itemCount}
                    </span>
                  )}
                </button>

                {/* Wishlist Button - Hidden on Mobile */}
                <Link to="/wishlist" className="hidden lg:block">
                  <button 
                    className={clsx("transition-colors hover:scale-110 relative group", isDarkHeader ? "text-black" : "text-white")}
                  >
                    <Heart className="w-5 h-5" strokeWidth={1.5} />
                    {wishlistCount > 0 && (
                      <span className={clsx(
                        "absolute -top-1.5 -right-1.5 text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-sm transition-transform group-hover:scale-110",
                         isDarkHeader ? "bg-[#555348] text-white" : "bg-white text-black"
                      )}>
                        {wishlistCount}
                      </span>
                    )}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- FULL WIDTH MEGA MENU CONTAINER --- */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-40 overflow-hidden"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12">
                
                {/* COLOR WOOL MENU CONTENT */}
                {activeDropdown === 'color-wool' && (
                  <div className="grid grid-cols-12 gap-12">
                    {/* Col 1: Basics */}
                    <div className="col-span-3 border-r border-gray-100">
                      <h4 className="font-serif text-2xl text-black mb-6">Essentials</h4>
                      <div className="space-y-4">
                        {colorWoolMenu.basics.map((color) => (
                          <Link 
                            key={color.name} 
                            to={`/shop/color-${color.slug}`} 
                            className="group flex items-center gap-3"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <img 
                              src={color.image} 
                              alt={color.name}
                              className="w-8 h-8 rounded-full border border-black/10 shadow-sm object-cover"
                            />
                            <span className="font-bold text-sm text-gray-900 group-hover:text-[#555348] transition-colors flex items-center gap-2">
                              {color.name} 
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-8 pt-8 border-t border-gray-100">
                         <Link 
                            to="/shop/color-wool" 
                            className="text-xs font-bold uppercase tracking-widest text-[#555348] hover:text-black"
                            onClick={() => setActiveDropdown(null)}
                          >
                            Shop All Colors
                          </Link>
                      </div>
                    </div>

                    {/* Col 2: Vibrant */}
                    <div className="col-span-3 border-r border-gray-100 px-6">
                      <h4 className="font-serif text-2xl text-black mb-6">Chromatic</h4>
                      <div className="space-y-4">
                        {colorWoolMenu.vibrant.map((color) => (
                          <Link 
                            key={color.name} 
                            to={`/shop/color-${color.slug}`} 
                            className="group flex items-center gap-3"
                            onClick={() => setActiveDropdown(null)}
                          >
                             <img 
                              src={color.image} 
                              alt={color.name}
                              className="w-8 h-8 rounded-full border border-black/10 shadow-sm object-cover"
                            />
                            <span className="font-bold text-sm text-gray-900 group-hover:text-[#555348] transition-colors flex items-center gap-2">
                              {color.name} 
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Col 3: Visual Feature */}
                    <div className="col-span-6 relative group overflow-hidden rounded-sm bg-[#f9f8f6]">
                      <div className="absolute inset-0">
                        <img 
                          src={colorWoolMenu.featured.image} 
                          alt="Color Spectrum" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="relative h-full flex flex-col justify-end p-8 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest mb-2 bg-white/20 backdrop-blur-md w-fit px-2 py-1 rounded-sm">Featured</span>
                        <h3 className="font-serif text-3xl mb-2">{colorWoolMenu.featured.title}</h3>
                        <p className="text-sm text-white/90 mb-6 max-w-xs">{colorWoolMenu.featured.subtitle}</p>
                        <Link to="/shop/color-wool" onClick={() => setActiveDropdown(null)}>
                          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                            {colorWoolMenu.featured.cta} <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* SHOP MENU CONTENT */}
                {activeDropdown === 'shop' && (
                  <div className="grid grid-cols-12 gap-12">
                    {/* Col 1: Categories */}
                    <div className="col-span-3 border-r border-gray-100">
                      <h4 className="font-serif text-2xl text-black mb-6">Collections</h4>
                      <div className="space-y-4">
                        {shopMenu.categories.map((cat) => (
                          <Link 
                            key={cat.name} 
                            to={`/shop/${cat.slug}`} 
                            className="group flex flex-col"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="font-bold text-sm text-gray-900 group-hover:text-[#555348] transition-colors flex items-center gap-2">
                              {cat.name} 
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </span>
                            <span className="text-xs text-gray-500 font-light">{cat.desc}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-8 pt-8 border-t border-gray-100">
                        <Link 
                          to="/shop" 
                          className="text-xs font-bold uppercase tracking-widest text-[#555348] hover:text-black"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Shop All Products
                        </Link>
                      </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="col-span-3 border-r border-gray-100 px-6">
                      <h4 className="font-serif text-2xl text-black mb-6">For Creators</h4>
                      <ul className="space-y-4">
                        {['New Arrivals', 'Best Sellers', 'Gift Sets', 'Wholesale', 'Color Cards'].map(item => (
                           <li key={item}>
                             <Link 
                              to="/shop" 
                              className="text-sm text-gray-600 hover:text-black hover:underline decoration-[#dedac8] underline-offset-4 transition-all"
                              onClick={() => setActiveDropdown(null)}
                             >
                               {item}
                             </Link>
                           </li>
                        ))}
                      </ul>
                    </div>

                    {/* Col 3: Visual Feature */}
                    <div className="col-span-6 relative group overflow-hidden rounded-sm bg-[#f9f8f6]">
                      <div className="absolute inset-0">
                        <img 
                          src={shopMenu.featured.image} 
                          alt="Featured" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="relative h-full flex flex-col justify-end p-8 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest mb-2 bg-white/20 backdrop-blur-md w-fit px-2 py-1 rounded-sm">Featured</span>
                        <h3 className="font-serif text-3xl mb-2">{shopMenu.featured.title}</h3>
                        <p className="text-sm text-white/90 mb-6 max-w-xs">{shopMenu.featured.subtitle}</p>
                        <Link to="/shop" onClick={() => setActiveDropdown(null)}>
                          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                            {shopMenu.featured.cta} <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* ACCESSORIES MENU CONTENT */}
                {activeDropdown === 'accessories' && (
                  <div className="grid grid-cols-12 gap-12">
                    {/* Col 1: Categories */}
                    <div className="col-span-3 border-r border-gray-100">
                      <h4 className="font-serif text-2xl text-black mb-6">Accessories</h4>
                      <div className="space-y-4">
                        {accessoriesMenu.categories.map((cat) => (
                          <Link 
                            key={cat.name} 
                            to={`/shop/${cat.slug}`} 
                            className="group flex flex-col"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="font-bold text-sm text-gray-900 group-hover:text-[#555348] transition-colors flex items-center gap-2">
                              {cat.name} 
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </span>
                            <span className="text-xs text-gray-500 font-light">{cat.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Col 2: Info/Promo */}
                    <div className="col-span-3 border-r border-gray-100 px-6 flex items-center">
                        <p className="text-sm text-gray-500 italic">
                          "Small tools for big ideas. Our accessories are sourced with the same care as our fibers."
                        </p>
                    </div>

                    {/* Col 3: Visual Feature */}
                    <div className="col-span-6 relative group overflow-hidden rounded-sm bg-[#f9f8f6]">
                      <div className="absolute inset-0">
                        <img 
                          src={accessoriesMenu.featured.image} 
                          alt="Accessories" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 transition-colors" />
                      </div>
                      <div className="relative h-full flex flex-col justify-end p-8 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest mb-2 bg-white/20 backdrop-blur-md w-fit px-2 py-1 rounded-sm">Featured</span>
                        <h3 className="font-serif text-3xl mb-2">{accessoriesMenu.featured.title}</h3>
                        <p className="text-sm text-white/90 mb-6 max-w-xs">{accessoriesMenu.featured.subtitle}</p>
                        <Link to="/shop/accessories" onClick={() => setActiveDropdown(null)}>
                          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                            {accessoriesMenu.featured.cta} <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* ABOUT MENU CONTENT */}
                {activeDropdown === 'about' && (
                  <div className="grid grid-cols-12 gap-12">
                     {/* Col 1: Categories */}
                     <div className="col-span-3 border-r border-gray-100">
                        <h4 className="font-serif text-2xl text-black mb-6">Who We Are</h4>
                        <div className="space-y-4">
                          {aboutMenu.categories.map((cat) => (
                            <Link 
                              key={cat.name} 
                              to={cat.href} 
                              className="group flex flex-col"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="font-bold text-sm text-gray-900 group-hover:text-[#555348] transition-colors flex items-center gap-2">
                                {cat.name} 
                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                              </span>
                              <span className="text-xs text-gray-500 font-light">{cat.desc}</span>
                            </Link>
                          ))}
                        </div>
                     </div>

                     {/* Col 2: Stats */}
                     <div className="col-span-3 border-r border-gray-100 px-6 flex flex-col justify-center">
                        <div className="space-y-8">
                          {aboutMenu.stats.map(stat => (
                            <div key={stat.label}>
                              <p className="text-4xl font-serif text-[#555348]">{stat.value}</p>
                              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                     </div>

                     {/* Col 3: Visual Feature */}
                     <div className="col-span-6 relative group overflow-hidden rounded-sm bg-[#f9f8f6]">
                        <div className="absolute inset-0">
                          <img 
                            src={aboutMenu.featured.image} 
                            alt="Sustainability" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <div className="relative h-full flex flex-col justify-end p-8 text-white">
                          <MapPin className="w-8 h-8 mb-4 text-[#dedac8]" />
                          <span className="text-[10px] font-bold uppercase tracking-widest mb-2 bg-white/20 backdrop-blur-md w-fit px-2 py-1 rounded-sm">Impact</span>
                          <h3 className="font-serif text-3xl mb-2">{aboutMenu.featured.title}</h3>
                          <p className="text-sm text-white/90 mb-6 max-w-xs">{aboutMenu.featured.subtitle}</p>
                          <Link to="/pages/sustainability" onClick={() => setActiveDropdown(null)}>
                            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                              {aboutMenu.featured.cta} <ArrowRight className="w-4 h-4" />
                            </button>
                          </Link>
                        </div>
                     </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white"
          >
             <div className="flex flex-col h-full">
               <div className="flex justify-between items-center p-6 border-b border-gray-100">
                  <img src={logoBlack} alt="Exotic Fiber" className="w-32" />
                  <button onClick={() => setIsMenuOpen(false)}>
                    <X className="w-8 h-8 text-black" strokeWidth={1} />
                  </button>
               </div>
               
               <div className="flex-1 overflow-y-auto p-8">
                 <div className="space-y-8">
                   
                   {/* USER ACTIONS (Mobile Only) */}
                   <div className="grid grid-cols-3 gap-4 mb-8">
                     <Link to="/account" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 rounded-sm">
                       {isAuthenticated && user?.avatar ? (
                         <img src={user.avatar} alt="Account" className="w-6 h-6 rounded-full" />
                       ) : (
                         <User className="w-6 h-6 text-black" />
                       )}
                       <span className="text-[10px] font-bold uppercase tracking-widest">Account</span>
                     </Link>
                     <Link to="/wishlist" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 rounded-sm relative">
                       <Heart className="w-6 h-6 text-black" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Wishlist</span>
                       {wishlistCount > 0 && (
                          <span className="absolute top-2 right-2 w-4 h-4 bg-[#555348] text-white text-[9px] flex items-center justify-center rounded-full">{wishlistCount}</span>
                       )}
                     </Link>
                     <button onClick={() => { setIsCartOpen(true); setIsMenuOpen(false); }} className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 rounded-sm relative">
                       <ShoppingBag className="w-6 h-6 text-black" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Cart</span>
                       {itemCount > 0 && (
                          <span className="absolute top-2 right-2 w-4 h-4 bg-[#555348] text-white text-[9px] flex items-center justify-center rounded-full">{itemCount}</span>
                       )}
                     </button>
                   </div>
                   
                   <hr className="border-gray-100 my-4"/>

                   {/* Mobile Color Wool */}
                   <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Color Wool</h4>
                      <div className="grid grid-cols-2 gap-3">
                         {[...colorWoolMenu.basics, ...colorWoolMenu.vibrant].map((item, idx) => (
                            <Link 
                              key={item.name}
                              to={`/shop/color-${item.slug}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center gap-2"
                            >
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-8 h-8 rounded-full border border-black/10 object-cover"
                                />
                                <span className="text-lg font-medium text-black">{item.name}</span>
                            </Link>
                         ))}
                      </div>
                   </div>

                   <hr className="border-gray-100 my-4"/>

                   {/* Mobile Shop */}
                   <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Shop</h4>
                      {shopMenu.categories.map((item, idx) => (
                        <Link 
                          key={item.name}
                          to={`/shop/${item.slug}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="block"
                        >
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="font-serif text-2xl text-black hover:text-[#555348] mb-3"
                          >
                            {item.name}
                          </motion.div>
                        </Link>
                      ))}
                   </div>
                   
                   <hr className="border-gray-100 my-4"/>

                   {/* Mobile Accessories */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Accessories</h4>
                      {accessoriesMenu.categories.map((item, idx) => (
                        <Link 
                          key={item.name}
                          to={`/shop/${item.slug}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="block"
                        >
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="font-serif text-2xl text-black hover:text-[#555348] mb-3"
                          >
                            {item.name}
                          </motion.div>
                        </Link>
                      ))}
                   </div>
                   
                   <hr className="border-gray-100 my-4"/>
                   
                   {/* Mobile About */}
                   <div>
                     <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">About</h4>
                     <div className="space-y-3">
                       {aboutMenu.categories.map(link => (
                         <Link 
                            key={link.name} 
                            to={link.href} 
                            className="block text-lg font-medium text-gray-800"
                            onClick={() => setIsMenuOpen(false)}
                          >
                           {link.name}
                         </Link>
                       ))}
                     </div>
                   </div>

                   <hr className="border-gray-100 my-4"/>

                   {/* Mobile Journal */}
                   <div>
                     <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Journal</h4>
                     <div className="space-y-3">
                       {journalMenu.categories.map(cat => (
                         <a key={cat.name} href="#" className="block text-lg font-medium text-gray-800">
                           {cat.name}
                         </a>
                       ))}
                     </div>
                   </div>

                 </div>
               </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}