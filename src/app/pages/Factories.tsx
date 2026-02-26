import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Heart, Users, Award } from 'lucide-react';

export function Factories() {
  const herds = [
    {
      name: 'Altiplano Alpaca Collective',
      location: 'Arequipa, Peru',
      image: 'https://images.unsplash.com/photo-1567519378642-965a4229af35?auto=format&fit=crop&q=80&w=800',
      description: 'A cooperative of over 200 small-holder alpaca farmers in the Peruvian highlands. These families have been raising alpacas for generations, maintaining traditional rotational grazing practices that preserve the fragile grassland ecosystem.',
      highlights: [
        'Fair Trade Certified',
        'Hand-sorted fiber grades',
        '100% family-owned farms',
        'Traditional grazing methods'
      ]
    },
    {
      name: 'Mongolian Cashmere Herders',
      location: 'Gobi Desert, Mongolia',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
      description: 'Nomadic herding families who move with the seasons across the Gobi Desert. They produce some of the world\'s finest cashmere through careful breeding and sustainable land management. We work directly with 15 families.',
      highlights: [
        'Sustainable Fiber Initiative member',
        'Seasonal migration for land health',
        'Direct farmer payments',
        'Premium grade fiber only'
      ]
    },
    {
      name: 'South Island Merino',
      location: 'Canterbury, New Zealand',
      image: 'https://images.unsplash.com/photo-1588676000557-dc67e2d3bd19?auto=format&fit=crop&q=80&w=800',
      description: 'Three regenerative sheep stations in New Zealand\'s Southern Alps. These farms are pioneers in carbon-positive farming, using sheep to restore native grasslands while producing ultra-fine merino wool.',
      highlights: [
        'ZQ Merino certified',
        'Carbon-positive farming',
        'No mulesing practice',
        'Biodiversity restoration'
      ]
    },
    {
      name: 'Scottish Highland Shepherds',
      location: 'Isle of Skye, Scotland',
      image: 'https://images.unsplash.com/photo-1566596825056-e80d32d481d8?auto=format&fit=crop&q=80&w=800',
      description: 'Four family farms raising native Scottish Blackface and Shetland sheep on the rugged Isle of Skye. Their wool is hardy, beautiful, and carries the heritage of centuries of Highland shepherding.',
      highlights: [
        'Heritage breed preservation',
        'Organic certified',
        'Crofting traditions',
        'Community-owned processing'
      ]
    }
  ];

  return (
    <div className="pt-0 pb-24 bg-white">
      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c8a7b] mb-4 block">
            The Herds
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-black mb-6">
            Meet the Animals & Families Behind Our Fibers
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every fiber we source comes from real farms, real herds, and real people. These are the places where our story begins—where animals graze on open land, where families carry on generations of tradition, and where fiber is more than a product.
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-20">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600" 
            alt="Herds on open land" 
            className="w-full aspect-[21/9] object-cover rounded-lg"
          />
        </div>

        {/* Why It Matters */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium mb-12">Why Sourcing Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f9f8f6] p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#555348] text-white rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3">Animal Welfare</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We only work with farms that exceed animal welfare standards—no live export, no mulesing, and plenty of space to roam.
              </p>
            </div>

            <div className="bg-[#f9f8f6] p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#555348] text-white rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3">Fair Prices</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                By buying directly from farmers and cooperatives, we ensure they're paid fairly—often 30-50% above commodity rates.
              </p>
            </div>

            <div className="bg-[#f9f8f6] p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#555348] text-white rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-3">Full Traceability</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every lot of fiber can be traced back to the specific farm or cooperative. No mystery wool here.
              </p>
            </div>
          </div>
        </div>

        {/* Herd Spotlights */}
        <div>
          <h2 className="text-3xl font-medium mb-12">Our Partner Farms</h2>
          <div className="space-y-16">
            {herds.map((herd, index) => (
              <motion.div
                key={herd.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img 
                    src={herd.image}
                    alt={herd.name}
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-2 text-[#8c8a7b] text-xs font-bold uppercase tracking-widest mb-3">
                    <MapPin className="w-4 h-4" />
                    {herd.location}
                  </div>
                  <h3 className="text-3xl font-medium mb-4">{herd.name}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {herd.description}
                  </p>
                  <div className="space-y-2">
                    {herd.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#555348] rounded-full" />
                        <p className="text-sm font-medium text-gray-800">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-[#f9f8f6] rounded-lg p-12 text-center">
          <h2 className="text-3xl font-medium mb-4">Want to Learn More?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We publish detailed farm profiles, seasonal updates, and behind-the-scenes stories in our Journal. Follow along to meet the people and animals behind your favorite fibers.
          </p>
          <button className="bg-[#555348] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
            Visit Our Journal
          </button>
        </div>
      </div>
    </div>
  );
}