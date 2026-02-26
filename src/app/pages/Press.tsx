import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Mail, ExternalLink } from 'lucide-react';

export function Press() {
  const pressHits = [
    {
      publication: 'Fiber Arts Magazine',
      title: 'The New Wave of Ethical Yarn Companies',
      date: 'January 2026',
      quote: 'Exotic Fiber is setting a new standard for transparency in the fiber industry.',
      link: '#'
    },
    {
      publication: 'Modern Maker',
      title: 'Where to Source Sustainable Luxury Fibers',
      date: 'December 2025',
      quote: 'Their hand-dyed colorways are unmatched, and the sourcing story behind each skein is just as beautiful.',
      link: '#'
    },
    {
      publication: 'Craft Industry Alliance',
      title: 'Small Businesses Leading the Sustainability Movement',
      date: 'November 2025',
      quote: 'Exotic Fiber proves that profit and planet don\'t have to be at odds.',
      link: '#'
    },
    {
      publication: 'The Weaver\'s Guild Journal',
      title: 'A Closer Look at Traceable Merino',
      date: 'September 2025',
      quote: 'Their commitment to animal welfare and farmer partnerships is refreshing in an industry full of greenwashing.',
      link: '#'
    }
  ];

  return (
    <div className="pt-0 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c8a7b] mb-4 block">
            Press
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-black mb-6">
            Media & Press Resources
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to our press room. Here you'll find our latest news, media assets, and contact information for press inquiries.
          </p>
        </div>

        {/* Press Kit Downloads */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium mb-8">Press Kit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#555348] transition-colors">
              <FileText className="w-8 h-8 text-[#555348] mb-4" />
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Brand Guidelines</h3>
              <p className="text-sm text-gray-600 mb-4">Logos, colors, typography, and usage guidelines.</p>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#555348] hover:text-[#3d3a30] transition-colors">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#555348] transition-colors">
              <FileText className="w-8 h-8 text-[#555348] mb-4" />
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Company Fact Sheet</h3>
              <p className="text-sm text-gray-600 mb-4">Key facts, milestones, and company statistics.</p>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#555348] hover:text-[#3d3a30] transition-colors">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#555348] transition-colors">
              <FileText className="w-8 h-8 text-[#555348] mb-4" />
              <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Product Images</h3>
              <p className="text-sm text-gray-600 mb-4">High-resolution product and lifestyle photography.</p>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#555348] hover:text-[#3d3a30] transition-colors">
                <Download className="w-4 h-4" />
                Download ZIP
              </button>
            </div>
          </div>
        </div>

        {/* Recent Press */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium mb-12">Recent Press</h2>
          <div className="space-y-8">
            {pressHits.map((press, index) => (
              <motion.div
                key={press.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 border-[#555348] pl-6 py-2"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#8c8a7b]">{press.publication}</p>
                    <h3 className="text-xl font-medium mt-1">{press.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{press.date}</p>
                </div>
                <p className="text-gray-700 italic mb-3">"{press.quote}"</p>
                <a 
                  href={press.link}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#555348] hover:text-[#3d3a30] transition-colors"
                >
                  Read Article
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-[#f9f8f6] rounded-lg p-12 mb-24">
          <h2 className="text-3xl font-medium mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-[#555348] mb-2">2015</p>
              <p className="text-sm uppercase tracking-widest text-gray-600">Founded</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#555348] mb-2">40+</p>
              <p className="text-sm uppercase tracking-widest text-gray-600">Partner Farms</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#555348] mb-2">12</p>
              <p className="text-sm uppercase tracking-widest text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#555348] mb-2">100%</p>
              <p className="text-sm uppercase tracking-widest text-gray-600">Traceable</p>
            </div>
          </div>
        </div>

        {/* Press Contact */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-medium mb-6">Press Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For media inquiries, interview requests, or partnership opportunities, please reach out to our press team.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#555348] mt-0.5" />
                <div>
                  <p className="font-bold text-sm uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:press@exoticfiber.com" className="text-[#555348] hover:underline">
                    press@exoticfiber.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#555348] mt-0.5" />
                <div>
                  <p className="font-bold text-sm uppercase tracking-widest mb-1">Response Time</p>
                  <p className="text-gray-700">We aim to respond within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#555348] to-[#3d3a30] text-white rounded-lg p-8">
            <h3 className="text-2xl font-medium mb-4">Looking for a Story?</h3>
            <p className="text-white/90 leading-relaxed mb-6">
              We're passionate about talking sustainability, ethical sourcing, the fiber industry, and the maker movement. Our founder and team are available for interviews, panels, and podcasts.
            </p>
            <button className="border-2 border-white text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#555348] transition-colors">
              Schedule Interview
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
