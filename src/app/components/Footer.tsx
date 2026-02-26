import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ChevronDown, ArrowRight, CreditCard, Shield, Truck, Award, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoWhite from 'figma:asset/43db0573a5eeb17b273372fd5158c47b8afd19b2.png';

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const shopLinks = [
    { label: 'New Arrivals', path: '/pages/new-arrivals', badge: 'New' },
    { label: 'Color Wool', path: '/pages/color-wool', badge: null },
    { label: 'Merino Roving', path: '/pages/merino-roving', badge: 'Popular' },
    { label: 'Luxury Yarns', path: '/shop/luxury-yarns', badge: null },
    { label: 'Materials', path: '/pages/materials', badge: null },
    { label: 'Accessories', path: '/shop/accessories', badge: null },
  ];

  const companyLinks = [
    { label: 'Our Story', path: '/about' },
    { label: 'Sustainability', path: '/pages/sustainability' },
    { label: 'The Herds', path: '/pages/factories' },
    { label: 'Journal', path: '/journal' },
    { label: 'Contact Us', path: '/pages/contact' },
  ];

  const supportLinks = [
    { label: 'Help Center', path: '/pages/help' },
    { label: 'Shipping & Returns', path: '/pages/shipping' },
    { label: 'Track Order', path: '/pages/track-order' },
    { label: 'Size Guide', path: '/pages/size-guide' },
    { label: 'Care Instructions', path: '/pages/care' },
  ];

  const trustFeatures = [
    { icon: Shield, text: 'Secure Checkout', subtext: '256-bit SSL' },
    { icon: Truck, text: 'Free Shipping', subtext: 'Orders over $75' },
    { icon: Award, text: 'Quality Guaranteed', subtext: '100% Authentic' },
    { icon: MessageCircle, text: '24/7 Support', subtext: 'Expert Help' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-white">
      
      {/* CTA Banner Section - High Conversion Focus */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#2a2520] via-[#1a1a1a] to-[#2a2520] relative overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left - CTA Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <div className="inline-flex items-center gap-2 bg-[#dedac8]/20 px-4 py-2 rounded-full mb-4">
                  <Award className="w-4 h-4 text-[#dedac8]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#dedac8]">
                    Limited Time Offer
                  </span>
                </div>
              </motion.div>

              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
                Start Your Crafting
                <br />
                <span className="text-[#dedac8]">Journey Today</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6 max-w-xl">
                Discover premium fibers, exclusive collections, and join a community of 10,000+ passionate makers.
              </p>

              {/* Quick CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/pages/new-arrivals">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#dedac8] text-[#1a1a1a] px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white transition-all rounded-lg shadow-lg hover:shadow-xl flex items-center gap-2 group"
                  >
                    Shop New Arrivals
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-white/20 transition-all rounded-lg"
                  >
                    Our Story
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right - Trust Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {trustFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#dedac8]/30 transition-all group"
                >
                  <feature.icon className="w-8 h-8 text-[#dedac8] mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-bold text-sm mb-1">{feature.text}</h4>
                  <p className="text-white/50 text-xs">{feature.subtext}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16">
        
        {/* Top Section - Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pb-12 mb-12 border-b border-white/10">
          
          {/* Shop Column */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-5 hidden md:block">Shop</h3>
            
            {/* Mobile Accordion */}
            <button 
              onClick={() => toggleSection('shop')}
              className="flex items-center justify-between w-full text-white font-bold text-base uppercase tracking-wider mb-5 md:hidden"
            >
              <span>Shop</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openSection === 'shop' ? 'rotate-180' : ''}`} />
            </button>
            
            <ul className={`space-y-3 transition-all duration-300 ${openSection === 'shop' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden md:overflow-visible'}`}>
              {shopLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-[#dedac8] transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    {link.badge && (
                      <span className="text-[10px] bg-[#dedac8]/20 text-[#dedac8] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-5 hidden md:block">Company</h3>
            
            <button 
              onClick={() => toggleSection('company')}
              className="flex items-center justify-between w-full text-white font-bold text-base uppercase tracking-wider mb-5 md:hidden"
            >
              <span>Company</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openSection === 'company' ? 'rotate-180' : ''}`} />
            </button>
            
            <ul className={`space-y-3 transition-all duration-300 ${openSection === 'company' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden md:overflow-visible'}`}>
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-[#dedac8] transition-colors text-sm inline-block group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-5 hidden md:block">Support</h3>
            
            <button 
              onClick={() => toggleSection('support')}
              className="flex items-center justify-between w-full text-white font-bold text-base uppercase tracking-wider mb-5 md:hidden"
            >
              <span>Support</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openSection === 'support' ? 'rotate-180' : ''}`} />
            </button>
            
            <ul className={`space-y-3 transition-all duration-300 ${openSection === 'support' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden md:overflow-visible'}`}>
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-[#dedac8] transition-colors text-sm inline-block group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Middle Section - Logo & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-12 mb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src={logoWhite} alt="Exotic Fiber" className="h-16 md:h-20 w-auto" />
            </Link>
            <p className="text-white/70 text-base leading-relaxed max-w-md">
              Curating the world's finest fibers for discerning makers. Every strand tells a story of quality, sustainability, and artisanal excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Get In Touch</h4>
            <a 
              href="mailto:hello@exoticfiber.com" 
              className="flex items-center gap-3 text-white/70 hover:text-[#dedac8] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#dedac8]/20 group-hover:border-[#dedac8]/30 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Email</div>
                <div className="font-medium">hello@exoticfiber.com</div>
              </div>
            </a>
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-3 text-white/70 hover:text-[#dedac8] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#dedac8]/20 group-hover:border-[#dedac8]/30 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Phone</div>
                <div className="font-medium">+1 (555) 123-4567</div>
              </div>
            </a>
            <div className="flex items-start gap-3 text-white/70">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Address</div>
                <div className="font-medium leading-relaxed">
                  128 Mercer Street<br />
                  New York, NY 10012
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Social Media - More Prominent */}
        <div className="pb-8 mb-8 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 text-center md:text-left">
                Join Our Community
              </h4>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
                  { Icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
                  { Icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
                  { Icon: Youtube, url: 'https://youtube.com', label: 'YouTube' }
                ].map(({ Icon, url, label }, i) => (
                  <motion.a 
                    key={i} 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-[#dedac8] hover:border-[#dedac8] flex items-center justify-center text-white/70 hover:text-[#1a1a1a] transition-all duration-300 group"
                    title={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter Mini CTA */}
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm mb-2">
                Want exclusive updates?
              </p>
              <a 
                href="#newsletter" 
                className="inline-flex items-center gap-2 text-[#dedac8] hover:text-white transition-colors font-medium text-sm group"
              >
                Subscribe to Newsletter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/50">
            <Link to="/pages/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/pages/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/pages/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-white/50 text-center md:text-right">
            © {new Date().getFullYear()} Exotic Fiber. All rights reserved.
          </div>

        </div>

      </div>

      {/* Payment Methods - Trust Builder */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-white/40" />
              <span className="text-xs text-white/50 font-medium uppercase tracking-wider">We Accept</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay', 'Shop Pay'].map((payment, idx) => (
                <div 
                  key={idx} 
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs text-white/60 font-medium hover:bg-white/10 transition-colors"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}