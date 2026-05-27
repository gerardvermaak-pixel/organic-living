import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LearnMoreCacao() {
  return (
    <div className="bg-[#0a0a0a] text-[#d1c5b0] min-h-screen">
      {/* Header */}
      <div className="border-b border-[#3a2a1f] py-8">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <div className="text-xs tracking-[2px] text-[#a38b6d]">THE WORLD OF CACAO</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="text-[#d4af37] text-sm tracking-[3px] mb-4">CEREMONIAL • SINGLE ORIGIN • TANZANIA</div>
          <h1 className="font-serif text-7xl text-white tracking-tighter mb-6">The World of Cacao</h1>
          <p className="max-w-2xl mx-auto text-xl text-[#a38b6d]">
            Understanding the three noble varieties that shape every cup of ceremonial cacao.
          </p>
        </div>

        {/* Forastero */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[#3a2a1f]" />
            <div className="uppercase tracking-[2px] text-xs text-[#d4af37]">FORASTERO</div>
            <div className="h-px flex-1 bg-[#3a2a1f]" />
          </div>
          
          <h3 className="font-serif text-4xl text-white mb-6">The Everyday Giant</h3>
          
          <div className="prose prose-invert max-w-none text-lg leading-relaxed">
            <p>
              Forastero variety still dominates world chocolate production. The high-yielding plants of Forastero made it an easy choice for growers. Even up until the mid-20th century, growers replaced the Criollo crop with the lower-quality Forastero for this reason.
            </p>
            <p className="italic text-[#a38b6d] mt-4">
              Think of Forastero as your regular grocery store tomato, and Criollo as that heirloom tomato that creates taste explosions in your mouth.
            </p>
            <p>
              Forastero is primarily cultivated in West Africa and is known as “bulk cocoa.” This cocoa is generally earthy and simple — reliable, but rarely complex.
            </p>
          </div>
        </div>

        {/* Trinitario */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[#3a2a1f]" />
            <div className="uppercase tracking-[2px] text-xs text-[#d4af37]">TRINITARIO</div>
            <div className="h-px flex-1 bg-[#3a2a1f]" />
          </div>
          
          <h3 className="font-serif text-4xl text-white mb-6">The Beautiful Hybrid</h3>
          
          <div className="prose prose-invert max-w-none text-lg leading-relaxed">
            <p>
              Trinitario beans, while not as rare as Criollo, still make up less than 10% of total cacao production. This hybrid strain spread from the Caribbean islands to South America in the 19th and 20th centuries.
            </p>
            <p>
              Being the least pure, Trinitario has the widest range of tastes and profiles of any variety. The ratios of Criollo to Forastero, and the terroir, greatly influence the complex flavors found in this bean.
            </p>
          </div>
        </div>

        {/* Criollo */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-[#3a2a1f]" />
            <div className="uppercase tracking-[2px] text-xs text-[#d4af37]">CRIOLLO</div>
            <div className="h-px flex-1 bg-[#3a2a1f]" />
          </div>
          
          <h3 className="font-serif text-4xl text-white mb-6">The Rare Heirloom</h3>
          
          <div className="prose prose-invert max-w-none text-lg leading-relaxed">
            <p>
              Due to its fragile state, susceptibility to disease, and low production, Criollo plants now make up less than 1–5% of total global cacao production.
            </p>
            <p>
              Partly due to its rarity, and definitely due to its unique, complex flavor, Criollo beans are regarded as super-fine cocoa. Many heirloom varieties are highly sought after by craft chocolate makers.
            </p>
            <p className="mt-4">
              Within the Criollo variety you’ll find names like <span className="text-[#d4af37]">Porcelana, Chuao, and Ocumare</span> — each referencing a particular terroir. Criollo cocoa is often fruit-forward, very aromatic, and has very little bitterness.
            </p>
          </div>
        </div>

        {/* Closing */}
        <div className="border-t border-[#3a2a1f] pt-12 text-center">
          <p className="text-xl max-w-xl mx-auto">
            At <span className="text-[#d4af37]">Organic Living</span>, we work only with the finest single-origin Tanzanian beans — chosen for their depth, purity, and ceremonial power.
          </p>
          <div className="mt-8 text-sm text-[#a38b6d]">12 Kohler Street, Montagu • Est. 2025</div>
        </div>
      </div>
    </div>
  );
}
