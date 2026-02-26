import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Award, Sparkles } from 'lucide-react';

// Import images from Figma assets
import imgMerino from "figma:asset/d10a273a857ec1f0b26cda6a28e448e822ec0d50.png";
import imgCashmere from "figma:asset/2a9267edb44feead5dfa72e57cb80a0a545ef3a6.png";
import imgAlpaca from "figma:asset/55563daa0dcd2f41e160160fa50729130f375700.png";
import imgSilk from "figma:asset/100cc717353c83301b4635529624b6c2880ef593.png";
import imgMohair from "figma:asset/a50b7145945202c18167a519c4b444f5bac25444.png";
import imgYak from "figma:asset/1e8c59875c71221835495d9b81e9d2931811d922.png";
import imgCamel from "figma:asset/befc214794a55b5084a7be7a895b2e3f5dae5734.png";
import imgAngora from "figma:asset/2982e5a63ca8a0fc5d0641096a62892e90930241.png";

interface Fiber {
  name: string;
  origin: string;
  desc: string;
  image: string;
  props: string[];
  rarity: 'Premium' | 'Luxury' | 'Rare';
  grade?: string;
}

export function Materials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fibers: Fiber[] = [
    {
      name: "Sheep Wool",
      origin: "New Zealand",
      desc: "Sourced from high-altitude flocks, our premium sheep wool is renowned for its incredible softness and breathability. The natural crimp in wool fibers creates tiny air pockets that provide excellent insulation while remaining lightweight.",
      image: imgMerino,
      props: ["Moisture Wicking", "Temperature Regulating", "Naturally Elastic"],
      rarity: "Premium",
      grade: "Superfine Grade"
    },
    {
      name: "Cashmere",
      origin: "Mongolia",
      desc: "The epitome of luxury. Combed from the undercoat of goats in the harsh Mongolian winter, providing unmatched softness. Each goat produces only a small amount of this precious fiber annually.",
      image: imgCashmere,
      props: ["Ultra Soft", "Lightweight", "8x Warmer than Wool"],
      rarity: "Luxury",
      grade: "Grade A"
    },
    {
      name: "Alpaca",
      origin: "Peruvian Andes",
      desc: "Sorted by hand to ensure only the finest fibers make the cut. Warmer than wool and hypoallergenic due to the lack of lanolin. Alpaca fiber is naturally water-resistant and comes in over 22 natural colors.",
      image: imgAlpaca,
      props: ["Hypoallergenic", "Thermal Insulation", "Silky Sheen"],
      rarity: "Luxury",
      grade: "Royal Grade"
    },
    {
      name: "Silk",
      origin: "India",
      desc: "Our mulberry silk is harvested ethically, ensuring sustainability. Known as the 'queen of fibers', silk provides exceptional drape and a luxurious hand feel that elevates any project.",
      image: imgSilk,
      props: ["High Luster", "Extreme Strength", "Excellent Drape"],
      rarity: "Luxury",
      grade: "Mulberry A1"
    },
    {
      name: "Mohair",
      origin: "South Africa",
      desc: "Sourced from Angora goats, mohair is prized for its distinctive fluffy halo and exceptional dye uptake. This resilient fiber adds a beautiful loft to any yarn blend while maintaining excellent durability.",
      image: imgMohair,
      props: ["Fluffy Halo", "Vibrant Dye Colors", "Highly Durable"],
      rarity: "Premium",
      grade: "Kid Mohair"
    },
    {
      name: "Yak",
      origin: "Tibetan Plateau",
      desc: "Harvested from yaks living at extreme altitudes, this rare fiber is as warm as down while remaining incredibly soft. The fine undercoat provides superior insulation without bulk.",
      image: imgYak,
      props: ["Warm as Down", "Breathable", "Sustainable"],
      rarity: "Rare",
      grade: "Khullu Down"
    },
    {
      name: "Camel",
      origin: "Mongolia",
      desc: "A heritage fiber collected during the spring molt, camel hair offers exceptional warmth and a unique earthy palette. The hollow fiber structure provides excellent insulation while remaining lightweight.",
      image: imgCamel,
      props: ["Heritage Fiber", "Naturally Warm", "Unique Color Palette"],
      rarity: "Rare",
      grade: "Baby Camel"
    },
    {
      name: "Angora Rabbit",
      origin: "France",
      desc: "The softest fiber in our collection, Angora rabbit hair is prized for its cloud-like texture and exceptional warmth. Each fiber has a smooth, slippery surface that creates an incredibly silky feel.",
      image: imgAngora,
      props: ["Cloud Soft", "Exceptionally Warm", "Luxurious Texture"],
      rarity: "Luxury",
      grade: "Premier Cru"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'Luxury': return 'text-[#8b7355]';
      case 'Rare': return 'text-[#6b5d52]';
      default: return 'text-[#8c8a7b]';
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative pt-[120px] pb-32 bg-gradient-to-b from-[#f9f8f6] to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#8c8a7b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b7355]/5 rounded-full blur-3xl" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#8c8a7b]" />
              <Sparkles className="w-4 h-4 text-[#8c8a7b]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8c8a7b]">
                Our Fiber Collection
              </span>
              <Sparkles className="w-4 h-4 text-[#8c8a7b]" />
              <div className="h-px w-12 bg-[#8c8a7b]" />
            </div>
            
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-black mb-8 leading-[1.1]">
              Curated from<br />Nature's Finest
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
              Each fiber in our collection is carefully sourced from the world's premier regions, selected for its exceptional quality and sustainable provenance.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 pt-16 border-t border-[#8c8a7b]/20"
          >
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-black mb-2">8</div>
              <div className="text-xs uppercase tracking-widest text-[#8c8a7b]">Premium Fibers</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-black mb-2">7</div>
              <div className="text-xs uppercase tracking-widest text-[#8c8a7b]">Countries</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-black mb-2">100%</div>
              <div className="text-xs uppercase tracking-widest text-[#8c8a7b]">Traceable</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Materials Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-[1700px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {fibers.map((fiber, idx) => (
              <motion.div
                key={fiber.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onHoverStart={() => setHoveredIndex(idx)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-white"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f9f8f6] mb-8">
                  <img 
                    src={fiber.image} 
                    alt={fiber.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Rarity Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 flex items-center gap-2">
                      <Award className="w-3 h-3 text-[#8c8a7b]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">
                        {fiber.rarity}
                      </span>
                    </div>
                  </div>

                  {/* Origin Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-black/80 backdrop-blur-sm px-4 py-2 flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-white" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                        {fiber.origin}
                      </span>
                    </div>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Link 
                      to="/shop"
                      className="w-full bg-white text-black px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#f9f8f6] transition-colors flex items-center justify-center gap-2"
                    >
                      Explore Collection <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-baseline justify-between mb-3">
                      <h2 className="font-serif text-4xl md:text-5xl text-black">
                        {fiber.name}
                      </h2>
                      {fiber.grade && (
                        <span className="text-xs uppercase tracking-[0.2em] text-[#8c8a7b] font-medium">
                          {fiber.grade}
                        </span>
                      )}
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {fiber.desc}
                    </p>
                  </div>

                  {/* Properties Grid */}
                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8c8a7b] mb-4">
                      Characteristics
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {fiber.props.map((prop, propIdx) => (
                        <motion.div 
                          key={prop}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: propIdx * 0.1 }}
                          className="flex items-center gap-3 group/item"
                        >
                          <div className="w-8 h-px bg-[#8c8a7b]/30 group-hover/item:bg-[#8c8a7b] transition-colors" />
                          <span className="text-sm font-medium text-gray-800 group-hover/item:text-black transition-colors">
                            {prop}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="py-32 bg-[#f9f8f6]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-6 h-6 text-[#8c8a7b] mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-6xl text-black mb-6">
              Begin Your Journey
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover how these exceptional fibers transform into your next cherished creation. 
              Every skein tells a story of craftsmanship and care.
            </p>
            <Link 
              to="/shop"
              className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#555348] transition-colors"
            >
              Browse Our Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
