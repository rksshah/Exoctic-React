import React from 'react';
import { ShieldCheck, Leaf, Heart, Recycle, Globe, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustProof() {
  const badges = [
    { icon: ShieldCheck, title: "RWS Certified", subtitle: "Responsible Wool Standard" },
    { icon: Leaf, title: "GOTS Organic", subtitle: "Global Organic Textile Standard" },
    { icon: Heart, title: "Cruelty Free", subtitle: "Non-Mulesed Flocks" },
    { icon: Globe, title: "Fair Trade", subtitle: "Direct-to-Herder Partnerships" }
  ];

  return (
    <section className="bg-[#555348] text-[#dedac8] py-16 border-t border-white/10">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
          {badges.map((badge, idx) => (
            <motion.div 
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full border border-[#dedac8]/30 flex items-center justify-center group-hover:bg-[#dedac8] group-hover:text-[#555348] transition-colors duration-300">
                <badge.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-lg leading-none mb-1">{badge.title}</h4>
                <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">{badge.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
