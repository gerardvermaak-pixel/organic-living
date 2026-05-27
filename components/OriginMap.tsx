"use client";

import { motion } from 'framer-motion';

export default function OriginMap() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto py-12">
      <div className="text-center mb-10">
        <div className="text-[#d4af37] text-sm tracking-[3px] mb-2">FROM EARTH TO CEREMONY</div>
        <h3 className="font-serif text-5xl text-white tracking-tight">Our Cacao’s Journey</h3>
        <p className="text-[#a38b6d] mt-3">Single-origin Tanzanian beans • Delivered with intention to Montagu</p>
      </div>

      <div className="relative bg-[#0f0c09] border border-[#3a2a1f] rounded-3xl p-6 overflow-hidden shadow-2xl">
        <svg 
          viewBox="0 0 900 620" 
          className="w-full h-auto"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Africa Continent Base */}
          <path 
            d="M180 90 Q280 50 420 75 Q580 55 720 130 Q810 220 780 340 Q720 430 580 470 Q420 490 280 440 Q160 360 170 200 Z" 
            fill="#1c160f" 
            stroke="#3a2a1f" 
            strokeWidth="8"
          />

          {/* Tanzania Outline (Animated) */}
          <motion.path
            d="M510 215 Q545 195 580 210 Q595 245 575 280 Q540 295 515 270 Z"
            fill="none"
            stroke="#d4af37"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
          />
          <text x="545" y="255" fill="#d4af37" fontSize="13" fontWeight="600" letterSpacing="1">TANZANIA</text>

          {/* South Africa Outline (Animated) */}
          <motion.path
            d="M260 380 Q310 360 370 375 Q410 410 390 460 Q340 485 290 465 Q250 430 260 380 Z"
            fill="none"
            stroke="#d4af37"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 3, delay: 1.2 }}
          />
          <text x="310" y="450" fill="#d4af37" fontSize="13" fontWeight="600" letterSpacing="1">SOUTH AFRICA</text>

          {/* Animated Journey Line */}
          <motion.path
            d="M555 245 Q430 320 295 410"
            stroke="#d4af37"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Pulsing Location Dots */}
          <g>
            {/* Tanzania Dot */}
            <motion.circle 
              cx="555" 
              cy="245" 
              r="7" 
              fill="#d4af37"
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle cx="555" cy="245" r="3" fill="#0f0c09" />

            {/* Montagu Dot */}
            <motion.circle 
              cx="295" 
              cy="410" 
              r="7" 
              fill="#d4af37"
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
            />
            <circle cx="295" cy="410" r="3" fill="#0f0c09" />
          </g>
        </svg>

        <div className="text-center mt-4 text-xs text-[#a38b6d] tracking-widest">
          12 KOHLER STREET, MONTAGU • EST. 2025
        </div>
      </div>
    </div>
  );
}
