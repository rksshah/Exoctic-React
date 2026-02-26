import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import SheepAnimalsSvgrepoCom from '../../imports/SheepAnimalsSvgrepoCom';
import logoWhite from 'figma:asset/43db0573a5eeb17b273372fd5158c47b8afd19b2.png';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'exiting' | 'finished'>('loading');

  useEffect(() => {
    // Phase 1: Loading Progress (0 -> 100)
    const duration = 2500; // 2.5s loading time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small delay before lifting the curtain
      const timeout = setTimeout(() => {
        setPhase('reveal');
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  useEffect(() => {
    if (phase === 'reveal') {
      // Hold logo for a bit then start exit
      const timeout = setTimeout(() => {
        setPhase('exiting');
      }, 2000); // Logo visible for 2s
      return () => clearTimeout(timeout);
    }

    if (phase === 'exiting') {
       // Wait for exit animation to finish
       const timeout = setTimeout(() => {
         setPhase('finished');
         onComplete();
       }, 1000); 
       return () => clearTimeout(timeout);
    }
  }, [phase, onComplete]);

  if (phase === 'finished') return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none">
      
      {/* LAYER 1: The Black Logo Screen (Underneath) */}
      <motion.div 
        className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center"
        animate={{ opacity: phase === 'exiting' ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ 
             opacity: phase === 'reveal' ? 1 : (phase === 'exiting' ? 0 : 0),
             scale: phase === 'reveal' ? 1 : (phase === 'exiting' ? 1.1 : 0.9)
           }}
           transition={{ duration: 0.8, ease: "easeOut" }}
         >
            <img src={logoWhite} alt="Exotic Fiber" className="w-64 md:w-80 h-auto" />
         </motion.div>
      </motion.div>

      {/* LAYER 2: The Cream Loading Screen (On Top) */}
      <motion.div
        className="absolute inset-0 bg-[#f9f8f6] flex flex-col items-center justify-center"
        initial={{ y: 0 }}
        animate={{ y: phase === 'loading' ? '0%' : '-100%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Custom ease for "curtain" feel
      >
        <div className="w-full max-w-md px-8 relative">
          
          {/* Walking Sheep */}
          <div className="relative mb-8">
            <motion.div
              style={{ left: `${progress}%`, x: '-50%' }}
              className="absolute bottom-0 w-24 h-20"
            >
               {/* Bobbing animation for the imported static sheep */}
               <motion.div
                 animate={{ y: [0, -3, 0] }}
                 transition={{
                   duration: 0.4,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
                 className="w-full h-full"
               >
                 <SheepAnimalsSvgrepoCom />
               </motion.div>
            </motion.div>
            
            {/* Track Line */}
            <div className="w-full h-[2px] bg-[#dedac8] mt-20 relative">
               <motion.div 
                 className="absolute left-0 top-0 bottom-0 bg-[#555348]"
                 style={{ width: `${progress}%` }}
               />
            </div>
          </div>

          {/* Percentage */}
          <div className="text-center">
             <span className="font-serif text-6xl text-[#1a1a1a] block">
               {Math.round(progress)}%
             </span>
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#555348] mt-2 block">
               Gathering Wool
             </span>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
