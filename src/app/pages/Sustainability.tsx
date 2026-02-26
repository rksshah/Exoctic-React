import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Recycle, Droplets, Wind, Sun, Package } from 'lucide-react';

export function Sustainability() {
  return (
    <div className="pt-0 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c8a7b] mb-4 block">
            Sustainability
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-black mb-6">
            Treading Lightly, Creating Mindfully
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every skein of yarn, every fiber, every choice we make is rooted in our commitment to the planet. Sustainability isn't a marketing term for us—it's how we operate, every single day.
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-20">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600" 
            alt="Sustainable Practices" 
            className="w-full aspect-[21/9] object-cover rounded-lg"
          />
        </div>

        {/* Our Commitments */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium mb-12">Our Commitments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Droplets, 
                title: "Water Conservation", 
                desc: "Our dyeing process uses 40% less water than industry standards. All wastewater is filtered and treated before being returned to local systems." 
              },
              { 
                icon: Recycle, 
                title: "Zero Waste Goal", 
                desc: "We repurpose 95% of fiber scraps into felted goods, stuffing, or composted. Our goal: 100% circular by 2027." 
              },
              { 
                icon: Leaf, 
                title: "Low-Impact Dyes", 
                desc: "We use GOTS-certified, heavy metal-free dyes. 60% of our palette now comes from botanical sources like indigo and madder root." 
              },
              { 
                icon: Wind, 
                title: "Carbon Neutral Shipping", 
                desc: "Every order is shipped carbon-neutral. We offset 110% of our shipping emissions through verified reforestation projects." 
              },
              { 
                icon: Package, 
                title: "Plastic-Free Packaging", 
                desc: "100% of our packaging is recyclable, compostable, or reusable. No plastic tape, no bubble wrap, no exceptions." 
              },
              { 
                icon: Sun, 
                title: "Renewable Energy", 
                desc: "Our studio and warehouse run on 100% solar power, reducing our carbon footprint by 12 tons annually." 
              }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#f9f8f6] p-8 rounded-lg"
              >
                <div className="w-12 h-12 bg-[#555348] text-white rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-widest mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="bg-gradient-to-br from-[#555348] to-[#3d3a30] text-white rounded-lg p-12 mb-24">
          <h2 className="text-3xl font-medium mb-12 text-center">Our 2025 Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">12M</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Gallons Water Saved</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">95%</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Waste Diverted</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">0</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Plastic Packaging</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Renewable Energy</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium mb-8 text-center">Certifications & Partnerships</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We hold ourselves accountable to third-party standards and work with organizations that share our values.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['GOTS Certified', 'B Corp Pending', 'Climate Neutral', 'Fair Trade'].map((cert) => (
              <div key={cert} className="border-2 border-gray-200 rounded-lg p-6 text-center">
                <p className="font-bold text-sm uppercase tracking-widest text-gray-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2026 Pledge */}
        <div className="bg-[#f9f8f6] rounded-lg p-12 text-center">
          <h2 className="text-3xl font-medium mb-4">Our 2026 Pledge</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            By December 2026, we commit to being 100% regenerative—meaning we give back more to the planet than we take. This includes soil restoration partnerships, biodiversity initiatives, and full supply chain transparency.
          </p>
          <button className="bg-[#555348] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
            Read Our Full Impact Report
          </button>
        </div>

      </div>
    </div>
  );
}