import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Globe, Lock, Leaf, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { assets } from '../data';

import imgHeroBg from "figma:asset/5ef22f352d6d504f3d85d78a2364243712777e30.png";
import imgMidnightMerino from "figma:asset/9bc99d87f2e89d64f6519f514f477e4ecdd7c248.png";

// Import new Fibers Roving images for trending products
import imgColorBlendsMerinoWoolRovingA7Wetland from "figma:asset/27aa69646b78fcbca843e7c6e5700bc714e906af.png";
import img100ColorsMerinoWoolNeedleFeltingHandspun from "figma:asset/54f82fa89c4fc2c9f948229fcf96a24c6dee9693.png";
import img121MulberrySilkWhiteRoving from "figma:asset/fc0948927136fe1b6028005c2f8acd996ac0273b.png";
import img114PureCashmereWhiteRoving from "figma:asset/886afad9aee638977087da719a7eed1f81751764.png";

// Custom Arrows for the Slider to match the luxury aesthetic
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button 
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white text-white hover:text-black w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button 
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white text-white hover:text-black w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
  );
}

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);

  const heroImage = imgHeroBg;

  const trendingProducts = [
    {
      id: 'roving-1',
      name: "Wetland Merino Roving",
      slug: "color-blends-merino-wool-roving-a7-wetland",
      desc: "Beautiful wetland-inspired color blend with stunning teal and green tones.",
      price: "$4.99",
      image: imgColorBlendsMerinoWoolRovingA7Wetland,
      tag: "Best Seller"
    },
    {
      id: 'roving-4',
      name: "100 Colors Merino Set",
      slug: "100-colors-merino-wool-needle-felting-handspun",
      desc: "Complete set of 100 vibrant merino wool colors for needle felting.",
      price: "$28.99",
      image: img100ColorsMerinoWoolNeedleFeltingHandspun,
      tag: "Premium Set"
    },
    {
      id: 'roving-6',
      name: "Mulberry Silk Roving",
      slug: "121-mulberry-silk-white-roving",
      desc: "Pure white mulberry silk roving for luxury blending and felting.",
      price: "$9.99",
      image: img121MulberrySilkWhiteRoving,
      tag: "Luxury"
    },
    {
      id: 'roving-14',
      name: "Pure Cashmere White",
      slug: "114-pure-cashmere-white-roving",
      desc: "Premium white cashmere roving for the softest projects.",
      price: "$12.99",
      image: img114PureCashmereWhiteRoving,
      tag: "Limited"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i: number) => (
      <div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white transition-colors mt-2" />
    )
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen min-h-[900px] bg-[#1a1a1a] overflow-hidden">
      
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroImage} 
          alt="Premium Knitting Yarn Collection" 
          className="w-full h-full object-cover opacity-90 scale-105"
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between pt-24">
        
        {/* Left: Text & CTA */}
        <div className="w-full md:w-3/5 text-white pt-12 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="bg-[#dedac8] text-[#555348] text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
              New Season
            </span>
            <div className="h-[1px] w-12 bg-white/40" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
              Sustainable Fibers
            </span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1] mb-8">
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Masterpiece
            </motion.span>
            <motion.span 
              className="block italic font-light text-[#dedac8] ml-2 md:ml-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              in every skein.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/80 text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Elevate your craft with the world's finest ethically sourced wool. 
            Direct from heritage farms to your needles.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Link to="/pages/merino-roving" className="bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#dedac8] transition-colors">
              Shop Fiber Roving
            </Link>
            <Link to="/shop/luxury-yarns" className="bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors backdrop-blur-sm">
              Shop Yarn
            </Link>
            <Link to="/shop/accessories" className="bg-transparent border border-white/30 text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-colors backdrop-blur-sm">
              Shop Accessories
            </Link>
          </motion.div>

          {/* Social Proof / Reviews Section */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.1, duration: 1 }}
             className="flex items-center gap-4 mb-12"
          >
            <div className="flex -space-x-2">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                 </div>
               ))}
               <div className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-[#dedac8] flex items-center justify-center text-[10px] font-bold text-[#555348]">
                 5k+
               </div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-[#dedac8] gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-medium mt-1">
                Rated 4.9/5 by Makers
              </p>
            </div>
          </motion.div>

          {/* Key Benefits (Trust Signals) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="flex flex-wrap md:flex-nowrap items-start md:items-center gap-y-4 gap-x-8 md:gap-10 text-white/60 border-t border-white/10 pt-8 max-w-2xl"
          >
            <div className="flex items-center gap-3 min-w-fit">
              <Leaf className="w-5 h-5 text-[#dedac8] shrink-0" />
              <span className="text-[10px] uppercase tracking-widest font-medium whitespace-nowrap">Sustainable Sourcing</span>
            </div>
            <div className="flex items-center gap-3 min-w-fit">
              <Globe className="w-5 h-5 text-[#dedac8] shrink-0" />
              <span className="text-[10px] uppercase tracking-widest font-medium whitespace-nowrap">Worldwide Shipping</span>
            </div>
             <div className="flex items-center gap-3 min-w-fit">
              <Lock className="w-5 h-5 text-[#dedac8] shrink-0" />
              <span className="text-[10px] uppercase tracking-widest font-medium whitespace-nowrap">Secure Checkout</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Featured Product Carousel (CRO Booster) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block w-[360px] relative mt-12 lg:mt-0"
        >
          {/* Container with backdrop blur for the card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-sm shadow-2xl">
            <Slider {...settings}>
              {trendingProducts.map((product) => (
                <div key={product.id} className="outline-none">
                  {/* Tag */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-[#dedac8] text-[#555348] text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {product.tag}
                    </span>
                  </div>

                  <Link to={`/product/${product.slug}`} className="block">
                    <div className="aspect-square bg-[#f4f4f4] mb-4 overflow-hidden rounded-sm relative group cursor-pointer">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                  
                  <h3 className="text-white font-serif text-2xl mb-1">
                    <Link to={`/product/${product.slug}`} className="hover:text-[#dedac8] transition-colors">{product.name}</Link>
                  </h3>
                  <p className="text-white/60 text-xs mb-4 line-clamp-2 h-8">{product.desc}</p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[#dedac8] font-bold text-lg">{product.price}</span>
                    <Link 
                      to={`/product/${product.slug}`}
                      className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-[#dedac8] transition-colors"
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </div>
  );
}