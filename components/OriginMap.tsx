"use client";

import { motion } from 'framer-motion';

export default function OriginMap() {
  return (
    <div className="relative w-full max-w-2xl mx-auto py-12">
      <div className="text-center mb-8">
        <div className="text-[#d4af37] text-sm tracking-[3px] font-medium">FROM SOURCE TO SANCTUARY</div>
        <h3 className="font-serif text-4xl text-white mt-2">Our Cacao Journey</h3>
      </div>
      
      <div className="relative bg-[#111] border border-[#3a2a1f] rounded-3xl p-8 overflow-hidden shadow-2xl">
        {/* Simplified Africa Map (SVG) */}
        <svg 
          viewBox="0 0 800 500" 
          className="w-full h-auto"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Africa outline */}
          <path 
            d="M200 80 Q280 60 380 90 Q520 70 620 140 Q680 220 650 320 Q580 400 450 420 Q300 430 220 380 Q160 300 180 180 Z" 
            stroke="#3a2a1f" 
            strokeWidth="3" 
            fill="#1a140f"
          />

          {/* Tanzania Highlight */}
          <motion.circle 
            cx="520" 
            cy="240" 
            r="18" 
            fill="#d4af37" 
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <text x="520" y="245" textAnchor="middle" fill="#d4af37" fontSize="11" fontWeight="600" className="pointer-events-none select-none">TANZANIA</text>

          {/* Montagu (South Africa) Highlight */}
          <motion.circle 
            cx="280" 
            cy="380" 
            r="14" 
            fill="#d4af37" 
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }}
          />
          <text x="280" y="405" textAnchor="middle" fill="#d4af37" fontSize="11" fontWeight="600" className="pointer-events-none select-none">MONTAGU</text>

          {/* Animated Journey Line */}
          <motion.path
            d="M520 240 Q420 310 280 380"
            stroke="#d4af37"
            strokeWidth="2.5"
            strokeDasharray="8 4"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
          />

          {/* Optimized fluid light particle traveling down the path */}
          <motion.circle 
            cx="520" 
            cy="240" 
            r="4" 
            fill="#d4af37"
            animate={{ 
              cx: [520, 410, 280],
              cy: [240, 310, 380],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
        </svg>

        <div className="text-center mt-6 text-sm text-[#a38b6d] leading-relaxed font-light">
          Single-origin Tanzanian cacao • Hand-selected for ceremony<br />
          Brought with reverence to <span className="text-white font-normal">12 Kohler Street, Montagu</span>
        </div>
      </div>
    </div>
  );
}
