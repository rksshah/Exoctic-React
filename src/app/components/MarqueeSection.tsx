import React from 'react';
import { Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import images from Figma assets
import imgWhiteRoving from "figma:asset/a951dca75aa10b86f397dda1498b683f7f2e5236.png";
import imgA7Wetland from "figma:asset/4932aa51eed576810e36c9f68b24dc5f2e6661d1.png";
import imgA8PearGreen from "figma:asset/288a47e0ab89e51890589360ff3f521b0f9bc28c.png";
import imgA11Mocha from "figma:asset/e3b5f4e50662343c3144e10f4769c63df542b33c.png";
import imgA9Space from "figma:asset/89b3dd6026a2ac25fb7ed4604fd8989f167caa42.png";
import imgA6Boysenberry from "figma:asset/b24faae795bb4f7b23f8a07b51b76f4115e94261.png";
import imgA25Volcano from "figma:asset/815e1e9e86ec985f06fb2684e0c277805dfc707f.png";

const products = [
  {
    id: 1,
    name: "WHITE ROVING",
    price: "$4.99",
    image: imgWhiteRoving
  },
  {
    id: 2,
    name: "A7 WETLAND",
    price: "$4.99",
    image: imgA7Wetland
  },
  {
    id: 3,
    name: "A8 PEAR GREEN",
    price: "$4.99",
    image: imgA8PearGreen
  },
  {
    id: 4,
    name: "A11 MOCHA",
    price: "$4.99",
    image: imgA11Mocha
  },
  {
    id: 5,
    name: "A9 SPACE",
    price: "$4.99",
    image: imgA9Space
  },
  {
    id: 6,
    name: "A6 BOYSENBERRY",
    price: "$4.99",
    image: imgA6Boysenberry
  },
  {
    id: 7,
    name: "A25 VOLCANO",
    price: "$4.99",
    image: imgA25Volcano
  }
];

export function MarqueeSection() {
  return (
    <section className="py-20 bg-[#f9f8f6] overflow-hidden border-y border-[#dedac8]/30">
      <div className="mb-12 text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a]">FIBER ROVING</h2>
        <p className="text-[#555348] mt-2 text-sm uppercase tracking-widest">MADE BY NATURE</p>
      </div>

      <div className="relative w-full flex overflow-x-hidden group/marquee">
        {/* Container 1: First set of items */}
        <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap group-hover/marquee:[animation-play-state:paused]">
          {products.map((product) => (
            <div key={product.id} className="mx-6 md:mx-10 w-48 md:w-64 flex-shrink-0">
               <ProductCircle product={product} />
            </div>
          ))}
        </div>

        {/* Container 2: Duplicate set of items for seamless loop */}
        <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap group-hover/marquee:[animation-play-state:paused]">
          {products.map((product) => (
            <div key={`dup-${product.id}`} className="mx-6 md:mx-10 w-48 md:w-64 flex-shrink-0">
               <ProductCircle product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCircle({ product }: { product: any }) {
  return (
    <div className="group relative cursor-pointer">
      {/* Circle Image Container */}
      <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 ease-out group-hover:scale-105">
        <ImageWithFallback 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
          <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-5 h-5" />
          </span>
          <span className="text-white text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            View Detail
          </span>
        </div>
      </div>

      {/* Product Info Below */}
      <div className="text-center mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-serif text-lg text-[#1a1a1a] mb-1">{product.name}</h3>
        <p className="text-[#555348] font-bold text-sm">{product.price}</p>
      </div>
    </div>
  );
}
