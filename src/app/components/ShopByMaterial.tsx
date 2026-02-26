import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import images from Figma assets
import imgMerino from "figma:asset/d10a273a857ec1f0b26cda6a28e448e822ec0d50.png";
import imgCashmere from "figma:asset/2a9267edb44feead5dfa72e57cb80a0a545ef3a6.png";
import imgAlpaca from "figma:asset/55563daa0dcd2f41e160160fa50729130f375700.png";
import imgSilk from "figma:asset/100cc717353c83301b4635529624b6c2880ef593.png";
import imgMohair from "figma:asset/a50b7145945202c18167a519c4b444f5bac25444.png";
import imgYak from "figma:asset/1e8c59875c71221835495d9b81e9d2931811d922.png";
import imgCamel from "figma:asset/befc214794a55b5084a7be7a895b2e3f5dae5734.png";
import imgAngora from "figma:asset/2982e5a63ca8a0fc5d0641096a62892e90930241.png";

const materials = [
  { name: 'Sheep Wool', image: imgMerino, desc: 'Soft & Breathable' },
  { name: 'Cashmere', image: imgCashmere, desc: 'Pure Luxury' },
  { name: 'Alpaca', image: imgAlpaca, desc: 'Hypoallergenic' },
  { name: 'Silk', image: imgSilk, desc: 'Lustrous Shine' },
  { name: 'Mohair', image: imgMohair, desc: 'Fluffy Halo' },
  { name: 'Yak', image: imgYak, desc: 'Warm as Down' },
  { name: 'Camel', image: imgCamel, desc: 'Heritage Fiber' },
  { name: 'Angora Rabbit', image: imgAngora, desc: 'Cloud Soft' }
];

export function ShopByMaterial() {
  return (
    <section className="py-24 bg-[#f9f8f6]">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c8a7b] mb-2 block">Our Palette</span>
            <h2 className="font-serif text-4xl md:text-5xl text-black">Shop by Material</h2>
          </div>
          <Link to="/about" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:text-[#8c8a7b] transition-colors">
            View Material Guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {materials.map((item, idx) => (
            <Link 
              key={item.name}
              to="/shop"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative aspect-[3/4] overflow-hidden bg-white cursor-pointer"
              >
                <ImageWithFallback
                  src={item.image} 
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="font-serif text-2xl text-white mb-1">{item.name}</h3>
                  <p className="text-white/80 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
