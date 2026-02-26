import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Globe, Award, Leaf, Droplet, Package, Sparkles } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white">
      
      {/* Hero Section with Image */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1762980967054-7dca4e704171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGVlcCUyMGdyYXppbmclMjBwYXN0b3JhbCUyMGZpZWxkfGVufDF8fHx8MTc3MDc0NDMzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Pastoral landscape with grazing animals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 max-w-3xl mx-auto leading-tight">
            We believe nature, fiber<br />product can develop your life
          </h1>
        </div>
      </div>

      {/* Introduction Text */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <p className="text-center text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
          At Exotic Fiber, we're passionate about connecting makers with the world's finest natural fibers. Our journey began with a simple belief: that the materials we work with should honor both the animals and the land they come from.
        </p>
        <p className="text-center text-gray-600 leading-relaxed text-base md:text-lg">
          Every skein, every roving, every fiber we offer is sourced with care, traced to its origin, and selected for its exceptional quality. We partner directly with family farms across the globe to bring you fibers that tell a story—of heritage, craftsmanship, and respect for nature.
        </p>
      </div>

      {/* Our Values */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">Our Value</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-10 h-10 text-gray-700" strokeWidth={1} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3">Animal Welfare</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We partner only with farms that prioritize humane treatment, ensuring animals are raised with care and respect.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-gray-700" strokeWidth={1} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3">Fair Trade</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every farmer and artisan we work with receives fair wages and support for their communities.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Leaf className="w-10 h-10 text-gray-700" strokeWidth={1} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3">Sustainability</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                From low-impact dyes to biodegradable packaging, we minimize our environmental footprint at every step.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="w-10 h-10 text-gray-700" strokeWidth={1} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-3">Quality</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We hand-select every fiber for its exceptional quality, ensuring makers receive nothing but the best.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Quote Section */}
      <div className="bg-[#e8e4d8] py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed">
            "We see ourselves as stewards—connecting sustainable fiber producers to a new generation of fiber enthusiasts."
          </p>
        </div>
      </div>

      {/* Sustainable Section */}
      <div className="grid md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1556918346-a81d7ecdbeff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjB3b29sJTIwZmliZXJ8ZW58MXx8fHwxNzcwNzQ0MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sustainable practices"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="order-1 md:order-2 py-16 md:py-24 px-8 md:px-16 bg-white flex items-center justify-center">
          <div className="max-w-md">
            <h3 className="text-3xl md:text-4xl font-light mb-6">Sustainable</h3>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to sustainability goes beyond words. We use low-impact, heavy metal-free dyes, source renewable energy for our studio, and ensure every package arrives plastic-free. From farm to your hands, we're dedicated to protecting the planet.
            </p>
          </div>
        </div>
      </div>

      {/* Hand Sourcing Section */}
      <div className="grid md:grid-cols-2 items-center">
        <div className="py-16 md:py-24 px-8 md:px-16 bg-white flex items-center justify-center">
          <div className="max-w-md">
            <h3 className="text-3xl md:text-4xl font-light mb-6">Hand Sourcing</h3>
            <p className="text-gray-600 leading-relaxed">
              We personally visit and vet every farm we work with. Our sourcing team travels to remote regions—from the Peruvian highlands to the Mongolian steppes—to build relationships with herders and ensure ethical practices at every stage.
            </p>
          </div>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1690025046509-bc7b60325044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2F0cyUyMGhlcmQlMjBmYXJtJTIwYW5pbWFsc3xlbnwxfHx8fDE3NzA3NDQzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hand sourcing"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Natural Section */}
      <div className="grid md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1716808154267-98c9b7f939e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdvb2wlMjBmaWJlciUyMG5hdHVyYWx8ZW58MXx8fHwxNzcwNzQ0MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Natural fiber"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="order-1 md:order-2 py-16 md:py-24 px-8 md:px-16 bg-white flex items-center justify-center">
          <div className="max-w-md">
            <h3 className="text-3xl md:text-4xl font-light mb-6">Natural</h3>
            <p className="text-gray-600 leading-relaxed">
              Nature knows best. Our fibers are minimally processed, preserving their natural lanolin, crimp, and character. We offer undyed, natural colorways for those who appreciate fiber in its purest form—straight from the animal.
            </p>
          </div>
        </div>
      </div>

      {/* Low Pack Section */}
      <div className="grid md:grid-cols-2 items-center">
        <div className="py-16 md:py-24 px-8 md:px-16 bg-white flex items-center justify-center">
          <div className="max-w-md">
            <h3 className="text-3xl md:text-4xl font-light mb-6">Low Pack</h3>
            <p className="text-gray-600 leading-relaxed">
              Less waste, more care. Our packaging is minimal, recyclable, and compostable. We use kraft paper, plant-based labels, and cotton bags—nothing that will sit in a landfill for centuries. Simple, clean, and kind to the earth.
            </p>
          </div>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1649408196515-871a30fa6e34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwc2tlaW5zJTIwb3JnYW5pemVkJTIwc2hlbGZ8ZW58MXx8fHwxNzcwNzQ0MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Low packaging"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 bg-white/95 backdrop-blur-sm p-8 md:p-12 max-w-md mx-6 text-center">
          <h3 className="text-2xl font-light mb-4">Join our community</h3>
          <p className="text-sm text-gray-600 mb-6">
            Get early access to new colorways, exclusive patterns, and stories from our partner farms.
          </p>
          <button className="w-full bg-[#555348] text-white py-3 px-6 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Values Grid */}
      <div className="py-16 bg-[#f9f8f6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
                <Droplet className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Water Conscious</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                40% less water used in our dyeing process
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
                <Package className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Zero Plastic</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                100% plastic-free packaging and shipping
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
                <Globe className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Carbon Neutral</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every order shipped with carbon offset
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full">
                <Sparkles className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Hand Dyed</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Small batch dyeing for unique colorways
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}