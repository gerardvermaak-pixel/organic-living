"use client";

import React from 'react';
import { ArrowLeft, ThermometerSun, Clock, Leaf, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LearnMoreCacao() {
  const scrollToRecipes = () => {
    const recipesSection = document.getElementById('recipes');
    if (recipesSection) {
      recipesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-luxury-black text-luxury-cream min-h-screen">
      {/* Header */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-2 text-luxury-gold hover:text-white transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" /> 
            <span>Back to Shop</span>
          </Link>
          <div className="text-xs tracking-[3px] text-luxury-gold/70">LEARN • PREPARE • STORE</div>
        </div>
      </div>

      {/* HERO */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-luxury-gold/30 text-luxury-gold text-xs tracking-[3px] mb-6">
          SINGLE-ORIGIN TANZANIA • CEREMONIAL GRADE
        </div>
        
        <h1 className="font-serif text-6xl md:text-7xl tracking-tighter mb-6">
          The Art of Cacao<br />Preparation & Use
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-luxury-cream/70 mb-10">
          A practical guide to working with our premium paste, powder, nibs and beans — 
          from ceremonial drink rituals to daily optimization and proper long-term storage.
        </p>

        <button 
          onClick={scrollToRecipes}
          className="inline-flex items-center gap-3 px-10 py-4 bg-luxury-gold text-luxury-black font-medium text-sm tracking-[2px] hover:bg-white transition-all rounded-2xl group"
        >
          EXPLORE CEREMONIAL RECIPES
          <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* MAIN FOCUS: CACAO PASTE DRINK */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-white/10" />
          <div className="uppercase tracking-[3px] text-xs text-luxury-gold">THE FOUNDATION</div>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <h2 className="font-serif text-5xl tracking-tight mb-6">Cacao Paste:<br />Preparing the Perfect Drink</h2>
            
            <div className="prose prose-invert max-w-none text-[17px] leading-relaxed text-luxury-cream/90 space-y-6">
              <p>
                Our single-origin Tanzanian cacao paste is 100% pure ground cacao — nothing added, nothing removed. 
                It is the most complete and potent form for ceremonial and daily drinks because it retains the full spectrum of 
                flavanols, theobromine, healthy fats and aromatic compounds.
              </p>
              <p>
                Unlike powder (which has had the cacao butter pressed out), paste delivers a richer mouthfeel, 
                sustained energy, and deeper ceremonial experience. This is the traditional form used in many indigenous rituals.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 bg-luxury-brown/60 border border-white/10 rounded-3xl p-8 text-sm">
            <div className="uppercase tracking-[2px] text-luxury-gold text-xs mb-4">RECOMMENDED STARTING RATIO</div>
            <div className="font-serif text-4xl mb-1">25–35 g</div>
            <div className="text-luxury-cream/70 mb-6">paste per 200–250 ml liquid</div>
            
            <div className="space-y-3 text-luxury-cream/80">
              <div className="flex justify-between"><span>Beginner / Daily</span><span className="text-luxury-gold">20–25 g</span></div>
              <div className="flex justify-between"><span>Ceremonial / Strong</span><span className="text-luxury-gold">30–40 g</span></div>
              <div className="flex justify-between"><span>Blended with milk alternative</span><span className="text-luxury-gold">25 g</span></div>
            </div>
          </div>
        </div>

        {/* Step-by-step preparation */}
        <div className="mt-16">
          <h3 className="font-serif text-3xl tracking-tight mb-8 text-luxury-gold">Step-by-Step: How to Prepare Ceremonial Cacao Drink</h3>
          
          <div className="space-y-8">
            {[ 
              {
                step: "01",
                title: "Measure & Break",
                desc: "Weigh your desired amount of paste. Break or chop into small pieces so it melts evenly. Cold paste from the fridge melts more slowly — this is normal."
              },
              {
                step: "02",
                title: "Gentle Melting (Critical)",
                desc: "Place pieces in a small saucepan or heat-proof bowl over a bain-marie (double boiler) or in a bowl set over barely simmering water. Stir frequently. Never exceed ~42°C (107°F) if you want to preserve maximum enzymes and delicate aromatics. The paste should become glossy and fully liquid — like melted dark chocolate."
              },
              {
                step: "03",
                title: "Add Hot Liquid",
                desc: "Heat your water or plant-based milk (oat, almond, coconut work beautifully) to just below boiling (~80–90°C). Slowly pour into the melted paste while whisking vigorously. A traditional molinillo or a small battery whisk creates the best froth and integrates everything smoothly."
              },
              {
                step: "04",
                title: "Season & Balance",
                desc: "Add a tiny pinch of high-quality sea salt (enhances flavour). Optional ceremonial additions: Ceylon cinnamon, vanilla bean, cardamom, a touch of raw honey or date paste, or a pinch of chili for warmth. Blend or whisk again until frothy and velvety."
              },
              {
                step: "05",
                title: "Serve Mindfully",
                desc: "Pour into a favourite cup. Take a moment to smell the aroma. Sip slowly. Traditional practice often includes setting an intention or gratitude before drinking. The effects (focus, warmth, mood lift) typically begin within 20–40 minutes."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-luxury-gold/10 text-luxury-gold flex items-center justify-center font-serif text-2xl tracking-tighter border border-luxury-gold/30">
                  {item.step}
                </div>
                <div className="pt-1">
                  <div className="font-medium text-xl tracking-tight mb-2">{item.title}</div>
                  <div className="text-luxury-cream/80 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 p-6 border border-luxury-gold/20 rounded-3xl bg-luxury-brown/40 text-sm text-luxury-cream/80">
          <strong className="text-luxury-gold">Pro tip:</strong> For the smoothest texture and to avoid any graininess, use a small blender or immersion blender for the final step. 
          Store any leftover drink in the fridge and gently re-warm (never boil) within 24 hours.
        </div>
      </section>

      {/* FORMS OF USE */}
      <section className="bg-luxury-brown/60 border-y border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-white/10" />
            <div className="uppercase tracking-[3px] text-xs text-luxury-gold">VERSATILE FORMS</div>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <h2 className="font-serif text-5xl tracking-tight mb-10 text-center">Choosing the Right Form for Your Needs</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[ 
              { 
                form: "Cacao Paste", 
                use: "Best for ceremonial drinks, hot chocolates, and making your own chocolate. Retains full fat content and deepest flavour.",
                how: "Melt gently and whisk into warm liquid or use in recipes calling for unsweetened chocolate."
              },
              { 
                form: "Cacao Powder", 
                use: "Ideal for smoothies, baking, lattes, and quick daily use. Lower fat, still rich in flavanols.",
                how: "Whisk directly into warm liquids or blend into cold drinks. Less creamy than paste."
              },
              { 
                form: "Cacao Nibs", 
                use: "Perfect crunchy topping for yoghurt, oatmeal, salads, or energy balls. Great for texture and mild stimulation.",
                how: "Eat straight, toast lightly, or pulse in a blender for coarser 'cacao chunks'."
              },
              { 
                form: "Whole Beans / Roasted", 
                use: "For traditional chewing (small amounts), making your own paste at home, or slow-roasting for deeper flavour.",
                how: "Chew 3–5 beans mindfully. Or grind in a coffee/spice grinder to make fresh paste or powder."
              }
            ].map((item, i) => (
              <div key={i} className="luxury-card border border-white/10 rounded-3xl p-7 bg-luxury-black/60 hover:border-luxury-gold/40 transition-all h-full flex flex-col">
                <div className="font-serif text-2xl tracking-tight mb-4 text-luxury-gold">{item.form}</div>
                <div className="text-luxury-cream/90 flex-1 mb-4">{item.use}</div>
                <div className="text-xs uppercase tracking-widest text-luxury-gold/70 pt-4 border-t border-white/10">How to use</div>
                <div className="text-sm mt-2 text-luxury-cream/80">{item.how}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORAGE GUIDE */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-white/10" />
          <div className="uppercase tracking-[3px] text-xs text-luxury-gold">LONGEVITY</div>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2 className="font-serif text-5xl tracking-tight mb-10">How to Store Cacao for Maximum Freshness</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="text-luxury-gold" size={22} />
              <div className="font-medium text-xl">Cacao Paste</div>
            </div>
            <ul className="space-y-2 text-luxury-cream/80 text-[15px]">
              <li>• Store in airtight glass or food-grade container</li>
              <li>• Cool, dark cupboard (15–20°C ideal)</li>
              <li>• Fridge extends life significantly (up to 12+ months)</li>
              <li>• Can be frozen in portions for 2+ years</li>
              <li>• Avoid moisture and strong odours</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="text-luxury-gold" size={22} />
              <div className="font-medium text-xl">Cacao Powder & Nibs</div>
            </div>
            <ul className="space-y-2 text-luxury-cream/80 text-[15px]">
              <li>• Airtight container in cool pantry</li>
              <li>• Powder: 12–18 months best quality</li>
              <li>• Nibs: up to 2 years (they are very stable)</li>
              <li>• Fridge or freezer for longest freshness</li>
              <li>• Keep away from humidity — clumping = moisture</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="text-luxury-gold" size={22} />
              <div className="font-medium text-xl">Prepared Drink</div>
            </div>
            <ul className="space-y-2 text-luxury-cream/80 text-[15px]">
              <li>• Cool completely before refrigerating</li>
              <li>• Consume within 24–48 hours</li>
              <li>• Reheat gently — never boil or microwave on high</li>
              <li>• Best flavour on the day it is made</li>
              <li>• Do not leave at room temperature >4 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-sm text-luxury-cream/60 max-w-3xl">
          Our paste is made in small batches with no preservatives. Proper storage preserves both flavour and the delicate bioactive compounds that make cacao so special.
        </div>
      </section>

      {/* RECIPES SECTION */}
      <section id="recipes" className="bg-luxury-brown/60 border-y border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-luxury-gold text-xs tracking-[3px] mb-3">FROM OUR KITCHEN TO YOURS</div>
            <h2 className="font-serif text-5xl tracking-tight mb-4">Ceremonial & Daily Recipes</h2>
            <p className="max-w-md mx-auto text-luxury-cream/70">Start with these time-tested favourites. Adjust to your taste and intention.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              {
                title: "Classic Ceremonial Cacao",
                time: "8 min",
                desc: "The pure traditional preparation. Paste + hot water + pinch of salt. Deep, grounding, and profoundly focusing.",
                tags: ["Ceremonial", "Pure"]
              },
              {
                title: "Spiced Mocha Ritual",
                time: "10 min",
                desc: "Paste, oat milk, raw cacao powder boost, cinnamon, cardamom, chili & a touch of honey. Warming and heart-opening.",
                tags: ["Daily", "Spiced"]
              },
              {
                title: "Rose & Vanilla Heart Opener",
                time: "12 min",
                desc: "Gentle floral version with rose water, vanilla, and a hint of maple. Beautiful for self-care or sharing with loved ones.",
                tags: ["Ceremonial", "Floral"]
              }
            ].map((recipe, index) => (
              <div key={index} className="luxury-card border border-white/10 bg-luxury-black rounded-3xl p-8 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="font-serif text-2xl tracking-tight pr-4">{recipe.title}</div>
                  <div className="flex items-center gap-1.5 text-xs text-luxury-gold/80 whitespace-nowrap pt-1">
                    <Clock size={14} /> {recipe.time}
                  </div>
                </div>
                <p className="text-luxury-cream/80 flex-1 mb-6">{recipe.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-[10px] px-3 py-1 rounded-full border border-luxury-gold/30 text-luxury-gold/80 tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-luxury-cream/60 mb-4">More recipes, variations, and chocolate-making guides coming soon.</p>
            <Link 
              href="/home#shop" 
              className="inline-flex items-center gap-2 text-luxury-gold hover:text-white transition-colors text-sm tracking-[2px]"
            >
              SHOP THE FULL COLLECTION <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL NOTE */}
      <div className="max-w-3xl mx-auto px-6 py-16 text-center text-luxury-cream/70">
        <p className="text-lg">
          Cacao is a powerful plant teacher. Approach it with respect, start with smaller amounts if you are sensitive to theobromine, 
          and listen to your body. Our Tanzanian paste is grown and processed with intention — we hope it supports your journey of optimization and connection.
        </p>
        <div className="mt-8 text-xs tracking-[2px] text-luxury-gold/60">ORGANIC LIVING • MONTAGU, SOUTH AFRICA</div>
      </div>
    </div>
  );
}
