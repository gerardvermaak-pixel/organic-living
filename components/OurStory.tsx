"use client";

import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#d4af37]" />
            <span className="uppercase tracking-[3px] text-xs text-[#d4af37]">EST. 2025 • MONTAGU</span>
            <div className="h-px w-12 bg-[#d4af37]" />
          </div>
          
          <h2 className="font-serif text-6xl md:text-7xl text-white tracking-tight">
            Our Story
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 text-[#d1c5b0] text-lg leading-relaxed">
          <p>
            In the heart of the Klein Karoo, where the mountains meet the vineyards of Montagu, 
            <span className="text-[#d4af37]"> Organic Living</span> was born.
          </p>
          
          <p>
            At <span className="font-medium text-white">12 Kohler Street</span>, we created a sanctuary for those who believe that true nourishment begins with intention.
          </p>
          
          <p>
            We source <span className="text-[#d4af37]">single-origin, ceremonial-grade Tanzanian cacao beans</span> grown by smallholder farmers who work in harmony with the land. 
            Each harvest is organic, traceable, and handled with the respect it deserves — from pod to cup.
          </p>
          
          <p className="italic text-[#a38b6d]">
            This is not mass-market chocolate.<br />
            This is living cacao — rich, complex, and alive with the spirit of the earth.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 inline-flex flex-col items-center"
        >
          <div className="text-[#d4af37] text-sm tracking-[2px] mb-2">MONTAGU, WESTERN CAPE</div>
          <div className="text-white text-xl font-light">12 Kohler Street</div>
        </motion.div>
      </div>
    </section>
  );
}
