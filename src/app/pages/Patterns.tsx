import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText } from 'lucide-react';

export function Patterns() {
  const patterns = [
    {
      id: 1,
      name: 'Merino Lace Shawl',
      designer: 'Sarah Chen',
      image: 'https://images.unsplash.com/photo-1728393287642-13bee7126ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      price: 0, // Free
      difficulty: 'Intermediate',
      time: '20-30 hours',
      description: 'Delicate lace shawl knit in fingering weight merino. Features traditional Estonian lace motifs.',
      yarnWeight: 'Fingering',
      yardage: '800-1000 yards'
    },
    {
      id: 2,
      name: 'Simple Slouchy Beanie',
      designer: 'Maria Lopez',
      image: 'https://images.unsplash.com/photo-1728393287642-13bee7126ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      price: 0,
      difficulty: 'Beginner',
      time: '5-8 hours',
      description: 'Easy, cozy beanie perfect for beginners. Knit in the round with simple rib and stockinette.',
      yarnWeight: 'Worsted',
      yardage: '120-150 yards'
    },
    {
      id: 3,
      name: 'Textured Cowl',
      designer: 'Exotic Fiber Studio',
      image: 'https://images.unsplash.com/photo-1728393287642-13bee7126ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      price: 8.00,
      difficulty: 'Easy',
      time: '8-12 hours',
      description: 'Quick knit cowl with interesting texture. Works beautifully with variegated yarns.',
      yarnWeight: 'Bulky',
      yardage: '200-250 yards'
    },
    {
      id: 4,
      name: 'Heirloom Baby Blanket',
      designer: 'Anna Bergström',
      image: 'https://images.unsplash.com/photo-1728393287642-13bee7126ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      price: 12.00,
      difficulty: 'Intermediate',
      time: '40-50 hours',
      description: 'Beautiful lace-edged blanket perfect for a baby gift. Knit flat with optional border.',
      yarnWeight: 'DK',
      yardage: '1200-1400 yards'
    },
    {
      id: 5,
      name: 'Cabled Mittens',
      designer: 'Exotic Fiber Studio',
      image: 'https://images.unsplash.com/photo-1728393287642-13bee7126ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      price: 0,
      difficulty: 'Advanced',
      time: '15-20 hours',
      description: 'Classic mittens with intricate cable pattern. Includes instructions for thumb gusset.',
      yarnWeight: 'Worsted',
      yardage: '200-250 yards'
    },
    {
      id: 6,
      name: 'Market Tote Bag',
      designer: 'Lisa Nakamura',
      image: 'https://images.unsplash.com/photo-1728393287642-13bee7126ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      price: 6.00,
      difficulty: 'Intermediate',
      time: '15-20 hours',
      description: 'Sturdy, reusable tote knit in cotton or linen blend. Features reinforced handles.',
      yarnWeight: 'Worsted',
      yardage: '400-500 yards'
    }
  ];

  return (
    <div className="pt-0 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-black">Patterns</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light mb-6">Knitting Patterns</h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed mb-6">
            Beautifully designed patterns for all skill levels. Many are free, and all are written with clear instructions, helpful photos, and yarn recommendations from our collection.
          </p>
          <div className="flex gap-4 text-sm">
            <span className="px-4 py-2 bg-[#f9f8f6] rounded-full">
              <span className="font-bold">{patterns.filter(p => p.price === 0).length}</span> Free Patterns
            </span>
            <span className="px-4 py-2 bg-[#f9f8f6] rounded-full">
              <span className="font-bold">{patterns.length}</span> Total Patterns
            </span>
          </div>
        </div>

        {/* Patterns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patterns.map((pattern) => (
            <div key={pattern.id} className="group border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#555348] transition-colors">
              <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                <img 
                  src={pattern.image}
                  alt={pattern.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                {pattern.price === 0 && (
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3 rounded-full">
                    Free
                  </span>
                )}
                <h3 className="text-xl font-medium mb-2">{pattern.name}</h3>
                <p className="text-sm text-gray-500 mb-4">By {pattern.designer}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{pattern.description}</p>
                
                <div className="space-y-2 text-xs text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span className="font-bold">Difficulty:</span>
                    <span>{pattern.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Time:</span>
                    <span>{pattern.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Yarn Weight:</span>
                    <span>{pattern.yarnWeight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Yardage:</span>
                    <span>{pattern.yardage}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <p className="font-bold">
                    {pattern.price === 0 ? 'Free' : `$${pattern.price.toFixed(2)}`}
                  </p>
                  <button className="flex items-center gap-2 bg-[#555348] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
                    <Download className="w-4 h-4" />
                    {pattern.price === 0 ? 'Download' : 'Purchase'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-[#f9f8f6] rounded-lg p-12 text-center">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-700" strokeWidth={1} />
          <h3 className="text-2xl font-light mb-4">Design Your Own Pattern?</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            We're always looking for talented designers to collaborate with. Submit your pattern for consideration and earn a commission on every sale.
          </p>
          <button className="bg-[#555348] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
            Submit Pattern
          </button>
        </div>

      </div>
    </div>
  );
}
