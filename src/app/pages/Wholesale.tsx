import React from 'react';
import { Link } from 'react-router-dom';
import { Package, FileText, Globe } from 'lucide-react';

export function Wholesale() {
  return (
    <div className="pt-[120px] pb-24 bg-white">
      
      {/* Hero */}
      <div className="bg-[#1a1a1a] text-white py-32 px-6">
         <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#dedac8] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Exotic Fiber B2B</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8">Partner With Us</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
              Bring the world's finest fibers to your local yarn shop or dye studio. We offer competitive pricing, low minimums, and dedicated support for our wholesale partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="bg-[#dedac8] text-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                 Apply for Account
               </button>
               <button className="border border-white/30 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors">
                 View Catalog
               </button>
            </div>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        
        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
             <Package className="w-10 h-10 mx-auto mb-6 text-black" strokeWidth={1} />
             <h3 className="font-serif text-2xl mb-4">Low Minimums</h3>
             <p className="text-gray-600 text-sm">Start small with a $300 minimum opening order. Reorders are just $150.</p>
          </div>
          <div className="p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
             <Globe className="w-10 h-10 mx-auto mb-6 text-black" strokeWidth={1} />
             <h3 className="font-serif text-2xl mb-4">Global Shipping</h3>
             <p className="text-gray-600 text-sm">We ship to over 50 countries with discounted rates via DHL and FedEx.</p>
          </div>
          <div className="p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
             <FileText className="w-10 h-10 mx-auto mb-6 text-black" strokeWidth={1} />
             <h3 className="font-serif text-2xl mb-4">Marketing Assets</h3>
             <p className="text-gray-600 text-sm">Access our library of high-res photos and social media kits to help you sell.</p>
          </div>
        </div>

        {/* Catalog Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#f9f8f6] p-12 md:p-24 rounded-sm">
           <div>
              <h2 className="font-serif text-4xl mb-6">Undyed Bases</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Perfect for indie dyers. Our "Naked" line features 100% natural, untreated fibers ready for your pot.
              </p>
              <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3 font-medium border-b border-gray-200 pb-2">
                   <span>SW Merino / Nylon</span>
                   <span className="ml-auto text-gray-400">Fingering</span>
                 </li>
                 <li className="flex items-center gap-3 font-medium border-b border-gray-200 pb-2">
                   <span>100% Cashmere</span>
                   <span className="ml-auto text-gray-400">DK</span>
                 </li>
                 <li className="flex items-center gap-3 font-medium border-b border-gray-200 pb-2">
                   <span>Baby Alpaca / Silk</span>
                   <span className="ml-auto text-gray-400">Lace</span>
                 </li>
              </ul>
              <Link to="/contact" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#555348] hover:border-[#555348] transition-colors">
                Request Samples
              </Link>
           </div>
           <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1705555795196-07a71c63f246?auto=format&fit=crop&q=80&w=800" 
                alt="Undyed Yarn" 
                className="w-full aspect-square object-cover shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
           </div>
        </div>

      </div>

    </div>
  );
}
