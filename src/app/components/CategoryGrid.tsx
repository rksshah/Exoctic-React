import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

import imgRoving from "figma:asset/7d6ced70973eb6ce387a53217cae884ec1b4417a.png";
import imgYarn from "figma:asset/9bc99d87f2e89d64f6519f514f477e4ecdd7c248.png";
import imgTools from "figma:asset/1d7350f560ff821b3f7713e67264b01307d8e820.png";

export function CategoryGrid() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      title: "Roving",
      subtitle: "FIBER ROVING",
      desc: "Raw fibers ready for spinning or felting projects.",
      image: imgRoving,
      link: "/pages/merino-roving"
    },
    {
      id: 2,
      title: "Yarn",
      subtitle: "SUSTAINABLE YARNS",
      desc: "Our signature collection of merino and silk blends.",
      image: imgYarn,
      link: "/shop/luxury-yarns"
    },
    {
      id: 3,
      title: "ACCESSORIES",
      subtitle: "WOOL DRY BALLS",
      desc: "Hand-carved needles and notions for the discerning maker.",
      image: imgTools,
      link: "/shop/accessories"
    }
  ];

  return (
    <section className="bg-[#1a1a1a] py-32 border-t border-white/5 relative">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        <div className="mb-16 flex items-end justify-between">
          <h2 className="font-serif text-5xl md:text-6xl text-white">
            Curated <span className="text-[#dedac8] italic">Collections</span>
          </h2>
          <p className="hidden md:block text-white/40 text-sm max-w-xs text-right">
            Explore our three pillars of textile creation, sourced from the finest herds.
          </p>
        </div>

        {/* Accordion / Expandable Grid Layout */}
        <div className="relative grid grid-cols-1 gap-4 lg:flex lg:flex-row lg:h-[600px]">
          {categories.map((cat) => {
             const isActive = activeId === cat.id;
             // If nothing is active, everyone is equal. If something is active, it gets bigger.
             
             return (
               <motion.div
                 key={cat.id}
                 onMouseEnter={() => setActiveId(cat.id)}
                 onMouseLeave={() => setActiveId(null)}
                 className="relative overflow-hidden group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl h-[450px] lg:h-auto w-full"
                 // Tailwind classes for width transition
                 style={{ 
                   flex: isActive ? 3 : 1 
                 }}
               >
                 <Link to={cat.link} className="block w-full h-full">
                    {/* Image Background */}
                    <div className="absolute inset-0 bg-[#2a2a2a]">
                      <img 
                        src={cat.image} 
                        alt={cat.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>

                    {/* Content Container - Sticks to bottom */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                       
                       {/* Top Right Icon */}
                       <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-[#dedac8] group-hover:text-black group-hover:border-transparent transition-all duration-300">
                          {isActive ? <ArrowUpRight className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                       </div>

                       {/* Text Content */}
                       <div className="relative z-10 transform transition-transform duration-500">
                          <span 
                            className="text-[#dedac8] text-[10px] uppercase tracking-[0.2em] font-bold block mb-2"
                          >
                            {cat.subtitle}
                          </span>
                          <h3 
                            className="font-serif text-4xl md:text-5xl text-white mb-4"
                          >
                            {cat.title}
                          </h3>
                          
                          {/* Reveal Description on Hover/Active */}
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                               height: isActive ? 'auto' : 0,
                               opacity: isActive ? 1 : 0
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-white/70 text-sm leading-relaxed max-w-md mb-6">
                              {cat.desc}
                            </p>
                            <span className="text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 inline-block hover:text-[#dedac8] hover:border-[#dedac8] transition-colors">
                              View Products
                            </span>
                          </motion.div>
                       </div>
                    </div>
                 </Link>
               </motion.div>
             );
          })}
        </div>

      </div>
    </section>
  );
}