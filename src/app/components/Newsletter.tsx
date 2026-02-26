import React, { useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Check, Sparkles, Gift, Zap, Heart, TrendingUp, ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 5000);
  };

  const benefits = [
    { icon: Gift, text: '15% Off First Order', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, text: 'Early Access to Sales', color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, text: 'Exclusive Collections', color: 'from-red-500 to-orange-500' },
    { icon: Sparkles, text: 'VIP Member Perks', color: 'from-amber-500 to-yellow-500' },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2a2520] to-[#1a1a1a] overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#dedac8]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#8c8a7b]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0.1 }}
          animate={{ 
            y: [-20, -60, -20],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute w-1 h-1 bg-[#dedac8] rounded-full"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        />
      ))}

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="bg-gradient-to-br from-white via-[#f9f8f6] to-white rounded-3xl shadow-2xl overflow-hidden border border-[#dedac8]/30">
            
            {/* Urgency Banner */}
            <motion.div 
              initial={{ y: -100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
              className="bg-gradient-to-r from-[#dedac8] via-[#8c8a7b] to-[#dedac8] py-3 px-6 text-center relative overflow-hidden"
            >
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <div className="flex items-center justify-center gap-3 text-[#1a1a1a] relative z-10">
                <TrendingUp className="w-4 h-4" />
                <span className="font-bold text-sm uppercase tracking-wider">
                  Limited Time: Join 10,000+ Crafters & Save 15%
                </span>
                <TrendingUp className="w-4 h-4" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12">
              
              {/* Left Side - Value Proposition */}
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4 leading-tight">
                  Join Our Newsletter
                </h2>
                
                <p className="text-[#555348] text-lg leading-relaxed mb-6">
                  Subscribe to receive exclusive fiber collections, crafting tips, and 15% off your first order.
                </p>

                {/* Simple Benefits List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-[#555348]">
                    <Check className="w-5 h-5 text-[#8c8a7b] flex-shrink-0" strokeWidth={2.5} />
                    <span>15% off your first order</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#555348]">
                    <Check className="w-5 h-5 text-[#8c8a7b] flex-shrink-0" strokeWidth={2.5} />
                    <span>Early access to new collections</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#555348]">
                    <Check className="w-5 h-5 text-[#8c8a7b] flex-shrink-0" strokeWidth={2.5} />
                    <span>Exclusive crafting guides & tips</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#555348]">
                    <Check className="w-5 h-5 text-[#8c8a7b] flex-shrink-0" strokeWidth={2.5} />
                    <span>Special member-only offers</span>
                  </li>
                </ul>

                {/* Social Proof */}
                <p className="text-sm text-[#99a1af]">
                  Join 10,000+ makers • Unsubscribe anytime
                </p>
              </div>

              {/* Right Side - Form */}
              <div className="flex flex-col justify-center">
                <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-10">
                  {!isSubmitted ? (
                    <>
                      <div className="flex items-center justify-center w-14 h-14 bg-[#dedac8] rounded-xl mb-6 mx-auto">
                        <Mail className="w-7 h-7 text-[#1a1a1a]" strokeWidth={2} />
                      </div>

                      <h3 className="font-serif text-2xl text-white mb-2 text-center">
                        Get 15% Off
                      </h3>
                      <p className="text-white/60 text-sm mb-6 text-center">
                        Enter your email to unlock your discount
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address" 
                          required
                          className="w-full bg-white/10 border border-white/20 px-5 py-3.5 text-white placeholder-white/50 focus:outline-none focus:border-[#dedac8] focus:bg-white/15 transition-all rounded-lg"
                        />

                        <button 
                          type="submit"
                          className="w-full bg-[#dedac8] text-[#1a1a1a] px-6 py-3.5 font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors rounded-lg flex items-center justify-center gap-2"
                        >
                          Subscribe Now
                          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                      </form>

                      <p className="mt-6 text-center text-xs text-white/50">
                        We respect your privacy. Unsubscribe anytime.
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6 mx-auto">
                        <Check className="w-8 h-8 text-white" strokeWidth={3} />
                      </div>
                      <h3 className="font-serif text-2xl text-white mb-2">
                        Welcome!
                      </h3>
                      <p className="text-white/70 mb-4">
                        Check your inbox for your discount code.
                      </p>
                      <div className="inline-block px-6 py-3 bg-white/10 rounded-lg border border-white/20">
                        <span className="text-xl font-mono font-bold text-[#dedac8]">WELCOME15</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}