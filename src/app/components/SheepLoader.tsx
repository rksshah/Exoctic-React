import React from 'react';
import { motion } from 'motion/react';

export function SheepLoader({ className = "", color = "#555348" }: { className?: string; color?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        width="100"
        height="80"
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Legs - Animated */}
        <motion.g
          animate={{
            rotate: [-10, 10, -10],
            x: [-2, 2, -2]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ originX: "50%", originY: "0%" }}
        >
           {/* Back Leg Far */}
           <rect x="25" y="55" width="6" height="20" rx="3" fill={color} opacity="0.8" />
           {/* Front Leg Far */}
           <rect x="65" y="55" width="6" height="20" rx="3" fill={color} opacity="0.8" />
        </motion.g>

        <motion.g
          animate={{
            rotate: [10, -10, 10],
            x: [2, -2, 2]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ originX: "50%", originY: "0%" }}
        >
           {/* Back Leg Near */}
           <rect x="15" y="55" width="6" height="20" rx="3" fill={color} />
           {/* Front Leg Near */}
           <rect x="55" y="55" width="6" height="20" rx="3" fill={color} />
        </motion.g>

        {/* Body - Bobbing */}
        <motion.g
          animate={{
            y: [0, -2, 0]
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Main Body Fluff */}
          <path
            d="M20 30C20 18.9543 28.9543 10 40 10H60C71.0457 10 80 18.9543 80 30V45C80 56.0457 71.0457 65 60 65H40C28.9543 65 20 56.0457 20 45V30Z"
            fill={color}
          />
          <circle cx="25" cy="30" r="10" fill={color} />
          <circle cx="35" cy="20" r="10" fill={color} />
          <circle cx="50" cy="15" r="10" fill={color} />
          <circle cx="65" cy="20" r="10" fill={color} />
          <circle cx="75" cy="30" r="10" fill={color} />
          <circle cx="80" cy="45" r="8" fill={color} />
          <circle cx="70" cy="55" r="8" fill={color} />
          <circle cx="50" cy="60" r="8" fill={color} />
          <circle cx="30" cy="55" r="8" fill={color} />
          <circle cx="20" cy="45" r="8" fill={color} />

          {/* Head */}
          <g transform="translate(75, 20)">
            <ellipse cx="12" cy="8" rx="14" ry="10" fill="#1a1a1a" />
            {/* Ear */}
            <path d="M4 4C4 4 0 8 0 12C0 16 6 16 6 12" fill="#1a1a1a" />
            {/* Eye */}
            <circle cx="16" cy="6" r="1.5" fill="white" />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}
