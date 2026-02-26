import React from 'react';
import { assets } from '../data';
import { motion } from 'motion/react';
import { Heart, Globe, Droplets } from 'lucide-react';

export function ProcessSection() {
  return (
    <section className="bg-[#f2f0eb] py-32 relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        
        {/* Header centered */}
        <div className="text-center max-w-3xl mx-auto mb-24">
           <motion.h4 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-xs font-bold tracking-[0.3em] uppercase text-[#8c8a7b] mb-6"
           >
             Conscious Crafting
           </motion.h4>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="font-serif text-5xl md:text-6xl text-black mb-8"
           >
             How to Support?
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-[#555348] text-lg font-light leading-relaxed"
           >
              By purchasing our premium wools and yarns, you directly support our makers. 
              Each skein tells a story of tradition, care, and craftsmanship.
           </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-8 min-h-[600px]">
          
          {/* Large Feature Image */}
          <div className="md:w-1/2 relative min-h-[400px]">
            <motion.div
              className="absolute inset-0 rounded-sm overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <img 
                 src={assets.story.process} 
                 alt="Hand processing wool" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </div>

          {/* Interactive Values Grid */}
          <div className="md:w-1/2 flex flex-col gap-4">
             {[
               { icon: Globe, title: "Traceable Origins", text: "We know exactly which farm every batch comes from." },
               { icon: Heart, title: "Animal Welfare", text: "Cruelty-free shearing and happy, free-roaming herds." },
               { icon: Droplets, title: "Eco-Friendly Dyeing", text: "Botanical dyes and water recycling systems." }
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.2 }}
                 className="flex-1 bg-white p-8 md:p-10 flex items-start gap-6 hover:shadow-xl transition-shadow duration-300 group cursor-default"
               >
                 <div className="bg-[#f4f4f4] p-4 rounded-full group-hover:bg-[#dedac8] transition-colors duration-500">
                   <item.icon className="w-6 h-6 text-[#555348]" strokeWidth={1.5} />
                 </div>
                 <div>
                   <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                   <p className="text-[#555348] text-sm leading-relaxed">{item.text}</p>
                 </div>
               </motion.div>
             ))}
          </div>

        </div>
        
        {/* CTA */}
        <div className="mt-20 flex justify-center gap-8">
            <button className="bg-[#555348] text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-black transition-colors shadow-lg hover:shadow-xl">
              Visit The Farm
            </button>
            <button className="bg-white border border-[#e5e5e5] text-[#555348] px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-[#555348] transition-colors">
              Donate to Makers
            </button>
        </div>
      </div>
    </section>
  );
}
