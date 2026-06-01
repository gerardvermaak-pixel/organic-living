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
          <p className="font-semibold text-white">
            The Tanzanian Essence: From Volcanic Soil to Crafted Perfection
          </p>

          <p>
            At the heart of every exquisite chocolate bar lies a story of place, passion, and precision. Our commitment to excellence begins in the lush, high-altitude landscapes of Tanzania’s Mbeya region. Here, in the shadow of volcanic peaks, nature provides the ideal terroir for rare, fine-flavor cacao.
          </p>

          <p className="font-semibold text-white">A Soil-to-Soul Journey</p>

          <p>
            Our cacao is more than just an ingredient; it is a testament to the land. Cultivated by smallholder farmers who embrace traditional agroforestry, our beans benefit from a naturally biodiverse ecosystem. By growing cacao alongside banana trees and other native flora, our farmers nurture the soil naturally, ensuring every bean is organic, chemical-free, and imbued with the vibrant, complex notes unique to this specific corner of Africa.
          </p>

          <p className="font-semibold text-white">The Bean-to-Bar Philosophy</p>

          <p>
            We believe that true luxury is found in transparency. By choosing the "Bean-to-Bar" path, we bypass the impersonal commodity markets to forge direct, meaningful relationships with the farmers themselves.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Traceability:</strong> We know exactly where our beans come from, ensuring every harvest is handled with the care it deserves.</li>
            <li><strong>Artisanal Craft:</strong> From the initial fermentation—where our farmers coax out the beans' innate flavor profiles—to the final, meticulous tempering in our workshop, we oversee every stage of the process.</li>
            <li><strong>Purity:</strong> With a minimal-ingredient approach, we let the natural chemistry of the cacao shine. No additives, no mass-production shortcuts—just the unadulterated, antioxidant-rich power of nature.</li>
          </ul>

          <p className="font-semibold text-white">Why It Matters</p>

          <p>
            When you choose our chocolate, you aren’t just enjoying a treat; you are participating in a movement that champions:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Empowerment:</strong> By paying premiums that exceed market standards, we support the livelihoods of Tanzanian farmers, allowing them to invest in their families and their land.</li>
            <li><strong>Sustainability:</strong> Our production methods respect the environment, favoring traditional techniques that sequester carbon and preserve the land for future generations.</li>
          </ul>

          <p>
            <strong>The Experience:</strong> You are tasting the culmination of art and science—a product defined by the "snap" of tempered cocoa butter, the complexity of a single-origin roast, and the ethical satisfaction of knowing your indulgence makes a world of difference.
          </p>

          <p className="italic text-[#a38b6d]">
            All our products are organic, traceable, and presented with full transparency.
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
