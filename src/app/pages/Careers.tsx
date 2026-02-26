import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Heart, Users, TrendingUp, MapPin, Clock } from 'lucide-react';

export function Careers() {
  const openings = [
    {
      title: 'Fiber Specialist',
      department: 'Production',
      location: 'Portland, OR',
      type: 'Full-time',
      description: 'Help us source, grade, and prepare luxury fibers. Experience with wool processing preferred.'
    },
    {
      title: 'E-Commerce Manager',
      department: 'Digital',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead our online presence, from website optimization to email campaigns. Shopify experience required.'
    },
    {
      title: 'Studio Dyeing Assistant',
      department: 'Production',
      location: 'Portland, OR',
      type: 'Part-time',
      description: 'Join our dye studio to create beautiful, hand-dyed colorways. Training provided for the right candidate.'
    },
    {
      title: 'Customer Experience Lead',
      department: 'Customer Service',
      location: 'Remote',
      type: 'Full-time',
      description: 'Be the voice of Exotic Fiber. Help customers find the perfect materials and resolve any issues with empathy.'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance. Plus mental health support and wellness stipend.'
    },
    {
      icon: TrendingUp,
      title: 'Growth & Learning',
      description: '$1,500 annual learning budget for workshops, conferences, or courses related to your role.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a team of makers, creatives, and fiber enthusiasts. Monthly team fiber projects and skill shares.'
    },
    {
      icon: Briefcase,
      title: 'Flexible Work',
      description: 'Flexible hours, remote-friendly roles, and unlimited PTO (with a 15-day minimum).'
    }
  ];

  return (
    <div className="pt-0 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8c8a7b] mb-4 block">
            Careers
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-black mb-6">
            Join Our Community
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're building something meaningful—a company that values craft, sustainability, and people. If you're passionate about fibers, ethical business, and making beautiful things, we'd love to hear from you.
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-20">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
            alt="Our Team" 
            className="w-full aspect-[21/9] object-cover rounded-lg"
          />
        </div>

        {/* Why Join Us */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium mb-12">Why Exotic Fiber?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                We're a small team (12 people!) doing big things. Every person here plays a meaningful role in connecting makers with beautiful, ethically-sourced fibers from around the world.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe work should be fulfilling, fair, and flexible. That means competitive pay, real benefits, and a culture where creativity and work-life balance aren't just buzzwords.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you care about where things come from, how they're made, and the impact your work has on people and the planet, you'll fit right in.
              </p>
            </div>
            <div className="bg-[#f9f8f6] p-8 rounded-lg">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#555348] rounded-full mt-2" />
                  <div>
                    <p className="font-medium text-sm mb-1">Transparency First</p>
                    <p className="text-xs text-gray-600">We share our financials, our sourcing, and our challenges openly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#555348] rounded-full mt-2" />
                  <div>
                    <p className="font-medium text-sm mb-1">Quality Over Growth</p>
                    <p className="text-xs text-gray-600">We'd rather grow slowly and do things right than compromise our values.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#555348] rounded-full mt-2" />
                  <div>
                    <p className="font-medium text-sm mb-1">Makers at Heart</p>
                    <p className="text-xs text-gray-600">Almost everyone on our team is a fiber artist. We use what we sell.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#555348] rounded-full mt-2" />
                  <div>
                    <p className="font-medium text-sm mb-1">Work-Life Harmony</p>
                    <p className="text-xs text-gray-600">Boundaries matter. We don't glorify hustle culture.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f9f8f6] p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-[#555348] text-white rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-widest mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-24">
          <h2 className="text-3xl font-medium mb-12">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#555348] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="bg-[#555348] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Don't See a Fit */}
        <div className="bg-[#f9f8f6] rounded-lg p-12 text-center">
          <h2 className="text-3xl font-medium mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented, passionate people. Send us your resume and a note about what you'd love to do at Exotic Fiber—we'll keep it on file.
          </p>
          <button className="bg-[#555348] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#3d3a30] transition-colors">
            Send Open Application
          </button>
        </div>

      </div>
    </div>
  );
}
