"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Leaf, Award, Users, ShoppingCart } from 'lucide-react';
import { products, Product } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';
import CheckoutModal from '@/components/CheckoutModal';
import OurStory from '@/components/OurStory';
import JourneySection from '@/components/JourneySection';
import Products from '@/components/Products';

export interface CartItem extends Product {
  quantity: number;
}

export default function OrganicLiving() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('organicLivingCart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('organicLivingCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setShowCheckout(true);
  };

  const completeOrder = () => {
    alert("Thank you for your order! Our team will contact you within 24 hours to arrange delivery and confirm wholesale pricing if applicable.");
    setCart([]);
    setShowCheckout(false);
  };

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/landing" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-luxury-gold flex items-center justify-center overflow-hidden">
                <img src="/Cacao1%20(15).png" alt="Organic Living" className="w-full h-full object-cover" />
              </div>
            <div>
              <div className="font-serif text-2xl tracking-[3px] text-luxury-gold">ORGANIC LIVING</div>
              <div className="text-[10px] text-white/50 -mt-1 tracking-[2px]">EST 2019 • CAPE TOWN</div>
            </div>
          </Link>

          <div className="flex items-center gap-8 text-sm uppercase tracking-widest">
            <a href="/home#shop" className="hover:text-luxury-gold transition-colors">Shop</a>
            <a href="/learn-more" className="hover:text-luxury-gold transition-colors">Learn About Cacao</a>
            <a href="/home#benefits" className="hover:text-luxury-gold transition-colors">The Science</a>
            <a href="/home#cafes" className="hover:text-luxury-gold transition-colors">For Cafés</a>
            <a href="/home#story" className="hover:text-luxury-gold transition-colors">Our Story</a>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 hover:text-luxury-gold transition-colors relative"
            >
              <ShoppingCart className="w-4 h-4" />
              CART
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-2 bg-luxury-gold text-luxury-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center pt-20" style={{ backgroundImage: "url("/Cacao1%20(2).jpg")", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-luxury-gold/30 text-luxury-gold text-xs tracking-[3px] mb-6">
            CAPE TOWN • ORGANIC • SINGLE-ORIGIN TANZANIA
          </div>
          
          <h1 className="text-[92px] md:text-[120px] leading-[0.92] font-serif tracking-tighter mb-6">
            HUMAN<br />OPTIMIZATION<br /> <span className="text-luxury-gold">THROUGH CACAO</span>
          </h1>
          
          <p className="max-w-lg mx-auto text-xl text-white/70 mb-10">
            Premium organic cacao for high-performers, cafés & wellness spaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="#shop"
              className="px-12 py-4 bg-luxury-gold text-luxury-black font-medium text-sm tracking-[2px] hover:bg-white transition-all flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              SHOP NOW
              <div className="group-hover:-rotate-45 transition-transform">→</div>
            </motion.a>
            
            <motion.a 
              href="#cafes"
              className="px-12 py-4 border border-white/30 hover:bg-white/5 text-sm tracking-[2px] transition-all flex items-center justify-center"
            >
              FOR CAFÉS & WELLNESS
            </motion.a>
          </div>
        </div>

        
      </section>

      <OurStory />

      <JourneySection />

      <Products onAddToCart={addToCart} />

      {/* TRUST BAR */}
      <div className="border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-xs tracking-[2px] text-white/50">
          <div className="flex items-center gap-2"><Award className="w-4 h-4" /> CERTIFIED ORGANIC</div>
          <div className="flex items-center gap-2"><Leaf className="w-4 h-4" /> SINGLE-ORIGIN TANZANIA</div>
          <div className="flex items-center gap-2"><Users className="w-4 h-4" /> SUPPLIED TO 180+ CAFÉS</div>
          <div>TRACEABLE TO FARM</div>
        </div>
      </div>

      {/* SHOP SECTION */}
      <section id="shop" className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="text-center mb-16">
          <div className="text-luxury-gold text-xs tracking-[4px] mb-3">DISCOVER THE COLLECTION</div>
          <h2 className="text-6xl font-serif tracking-tight">Our Premium Cacao</h2>
          <p className="mt-4 text-xl text-white/60 max-w-md mx-auto">Five exceptional forms. One uncompromising standard.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-white/50">
          All prices in South African Rand (ZAR). Bulk discounts available for cafés & wellness centres.
        </div>
      </section>

      {/* BENEFITS / SCIENCE */}
      <section id="benefits" className="bg-luxury-brown py-24 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-luxury-gold text-xs tracking-[4px] mb-4">THE SCIENCE OF OPTIMIZATION</div>
              <h2 className="text-6xl font-serif tracking-tight leading-none mb-8">
                Nature's most powerful<br />performance enhancer.
              </h2>
              <p className="text-xl text-white/70 max-w-md">
                Cacao contains the highest concentration of flavanols and theobromine of any food on Earth — clinically shown to improve focus, mood, blood flow, and recovery.
              </p>
            </div>

            <div className="space-y-8">
              {[ 
                { icon: "🧠", title: "Cognitive Performance", desc: "Increases cerebral blood flow by up to 30% within 2 hours" },
                { icon: "❤️", title: "Cardiovascular Health", desc: "Improves endothelial function and reduces blood pressure" },
                { icon: "⚡", title: "Sustained Energy", desc: "Theobromine provides clean, jitter-free energy for 6–8 hours" },
                { icon: "😊", title: "Mood & Neurotransmitters", desc: "Naturally boosts serotonin, dopamine & anandamide (bliss molecule)" }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="text-4xl mt-1 opacity-80">{item.icon}</div>
                  <div>
                    <div className="font-medium text-xl mb-1.5 tracking-tight">{item.title}</div>
                    <div className="text-white/60 text-[15px] leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOR CAFÉS & WELLNESS SHOPS */}
      <section id="cafes" className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="text-luxury-gold text-xs tracking-[4px] mb-4">B2B PARTNERSHIPS</div>
          <h2 className="text-7xl font-serif tracking-tighter leading-none mb-8">
            Supplying the finest<br />cafés & wellness spaces
          </h2>
          <p className="text-2xl text-white/70">
            We work with over 180 independent cafés, yoga studios, and high-end wellness centres across South Africa and beyond.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[ 
            { title: "Bulk Pricing", desc: "Special rates from 5kg upwards. Tiered discounts up to 25% for regular partners." },
            { title: "Menu Integration", desc: "Free recipe development, latte art training, and branded display materials." },
            { title: "Reliable Supply", desc: "Monthly standing orders with guaranteed freshness and consistent quality." }
          ].map((item, index) => (
            <div key={index} className="border border-white/10 p-9 rounded-3xl hover:border-luxury-gold/50 transition-colors">
              <div className="text-luxury-gold text-5xl font-light mb-8">0{index+1}</div>
              <div className="text-2xl font-serif tracking-tight mb-4">{item.title}</div>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => alert('Thank you! Our wholesale team will contact you within 24 hours. Please email Businessfly369@gmail.com or call +27 66 353 5181.')}
            className="px-16 py-5 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black text-sm tracking-[3px] transition-all"
          >
            REQUEST WHOLESALE ACCOUNT
          </button>
          <p className="mt-4 text-xs text-white/50">Minimum order 5kg • Net 30 terms available for approved partners</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="story" className="bg-luxury-brown py-24 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-luxury-gold text-xs tracking-[4px] mb-6">ESTABLISHED IN CAPE TOWN</div>
          <h2 className="text-6xl font-serif tracking-tight max-w-3xl mx-auto leading-none mb-10">
            We believe the best cacao in the world should be accessible to those who value quality over quantity.
          </h2>
          
          <div className="max-w-2xl mx-auto text-xl text-white/70 space-y-6">
            <p>Founded in 2019 by a former professional athlete and nutritionist, Organic Living began as a personal quest to source the cleanest, most potent cacao on the planet.</p>
            <p>Today we work directly with smallholder farmers in Peru and Ecuador who practice regenerative agriculture. Every batch is traceable, organic, and handled with reverence.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center border-b border-white/10">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-luxury-gold text-xs tracking-[3px] mb-4">READY TO OPTIMIZE?</div>
          <h2 className="text-6xl font-serif tracking-tight mb-8">Start your journey with the world's most powerful superfood.</h2>
          
          <button 
            onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-14 py-5 bg-luxury-gold text-luxury-black text-sm tracking-[2px] hover:bg-white transition-all"
          >
            SHOP THE COLLECTION
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-16 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/landing" className="w-8 h-8 rounded-full bg-luxury-gold flex items-center justify-center overflow-hidden">
                <img src="/Icccx.jpg" alt="Organic Living" className="w-full h-full object-cover" />
              </Link>
              <div className="font-serif text-2xl text-luxury-gold tracking-[2px]">ORGANIC LIVING</div>
            </div>
            <div className="text-white/50 max-w-xs">
              Premium single-origin Tanzania organic cacao. Delivered fresh to cafés and homes across Southern Africa.
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="uppercase tracking-[2px] text-xs mb-4 text-white/50">EXPLORE</div>
            <div className="space-y-2 text-white/70">
                <a href="/home#shop" className="block hover:text-white">The Collection</a>
                <a href="/home#benefits" className="block hover:text-white">The Science</a>
                <a href="/home#cafes" className="block hover:text-white">For Partners</a>
                <a href="/home#story" className="block hover:text-white">Our Story</a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="uppercase tracking-[2px] text-xs mb-4 text-white/50">CONTACT</div>
            <div className="space-y-1 text-white/70">
              <div>Cape Town, South Africa</div>
              <a href="mailto:Businessfly369@gmail.com" className="hover:text-luxury-gold">Businessfly369@gmail.com</a>
              <div>+27 66 353 5181</div>
            </div>
            <div className="mt-8 text-[10px] text-white/40">
              © {new Date().getFullYear()} Organic Living. All rights reserved.<br />
              This is a premium demonstration site built for you.
            </div>
          </div>
        </div>
      </footer>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
        total={cartTotal}
      />

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        total={cartTotal}
        onComplete={completeOrder}
      />
    </div>
  );
}
