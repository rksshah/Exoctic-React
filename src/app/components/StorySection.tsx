import React, { useRef } from 'react';
import { assets } from '../data';
import { motion, useScroll, useTransform } from 'motion/react';

export function StorySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={containerRef} className="bg-[#dedac8] py-32 md:py-48 overflow-hidden relative" style={{ position: 'relative' }}>
       {/* Background decorative element */}
       <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute top-20 left-20 text-[20rem] font-serif leading-none mix-blend-overlay">E</div>
         <div className="absolute bottom-20 right-20 text-[20rem] font-serif leading-none mix-blend-overlay">F</div>
       </div>

       <div className="max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
         <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
           
           {/* Text Content */}
           <div className="flex-1 order-2 md:order-1 relative">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: "easeOut" }}
             >
               <span className="inline-block py-1 px-3 border border-[#555348] rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-[#555348] mb-8">
                 Ethical Sourcing
               </span>
               <h2 className="font-serif text-5xl md:text-7xl text-black mb-8 leading-[0.9]">
                 The "Soft Gold"<br/>
                 <span className="italic font-light ml-12 opacity-80">Of Natural Fibers</span>
               </h2>
               <div className="space-y-8 text-[#555348] text-lg font-light leading-relaxed max-w-md ml-auto md:mr-12">
                 <p>
                   Cashmere is treasured for its incredible softness and warmth. 
                   Sourced from the fine undercoat of cashmere goats, it offers a lightweight 
                   feel that is incredibly insulating.
                 </p>
                 <p>
                   Our fibers are ethically sourced directly from herders who treat their 
                   flocks with care and respect. We believe premium luxury begins with 
                   happy animals and sustainable land management.
                 </p>
                 
                 <div className="pt-8">
                    <a href="#" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] group">
                      <span className="w-12 h-[1px] bg-black group-hover:w-20 transition-all duration-300" />
                      Read Our Full Story
                    </a>
                 </div>
               </div>
             </motion.div>
           </div>

           {/* Image Parallax Container */}
           <div className="flex-1 w-full order-1 md:order-2 relative h-[600px] md:h-[800px]">
             <div className="absolute inset-0 overflow-hidden">
               <motion.div style={{ scale: imageScale, y }} className="w-full h-[120%] -top-[10%] relative">
                  <img 
                    src={assets.story.goats2} 
                    alt="Cashmere Goats in pasture" 
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
               </motion.div>
             </div>
             
             {/* Floating Image Overlay */}
             <motion.div 
               style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
               className="absolute -bottom-20 -left-20 w-64 md:w-80 aspect-[3/4] hidden md:block border-8 border-[#dedac8] shadow-2xl"
             >
               <img 
                 src={assets.story.goats1}
                 alt="Detail of fiber"
                 loading="lazy"
                 className="w-full h-full object-cover" 
               />
             </motion.div>
           </div>

         </div>
       </div>
    </section>
  );
}
