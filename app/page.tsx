"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, Leaf, Award, Users } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  description: string;
  longDesc: string;
  benefits: string[];
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Raw Cacao Beans",
    price: 850,
    unit: "kg",
    description: "The purest form — unroasted, unprocessed, maximum nutrients.",
    longDesc: "Our raw cacao beans are harvested at peak ripeness from organic farms in South America. Retaining all natural enzymes, antioxidants, and mood-enhancing compounds.",
    benefits: ["Highest antioxidant levels", "Natural mood elevation", "Sustained energy without crash", "Rich in magnesium & iron"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070",
    category: "raw"
  },
  {
    id: 2,
    name: "Roasted Shelled Cacao Beans",
    price: 900,
    unit: "kg",
    description: "Roasted for deeper flavour while preserving 85% of nutrients.",
    longDesc: "Gently roasted to unlock rich chocolate notes while maintaining exceptional nutritional density. Perfect for snacking or grinding fresh.",
    benefits: ["Enhanced flavour profile", "Easier digestion", "Still extremely high in flavanols", "Ideal for daily consumption"],
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?q=80&w=2070",
    category: "roasted"
  },
  {
    id: 3,
    name: "Cacao Nibs",
    price: 1000,
    unit: "kg",
    description: "Crunchy, versatile superfood — nature's dark chocolate chips.",
    longDesc: "Pure broken cacao beans. Add to smoothies, yogurt, salads or eat straight. The most convenient way to enjoy raw cacao daily.",
    benefits: ["Versatile in recipes", "High fibre & healthy fats", "Natural theobromine boost", "No added sugar"],
    image: "https://images.unsplash.com/photo-1606313561344-9a2f7f0e8e2e?q=80&w=2070",
    category: "nibs"
  },
  {
    id: 4,
    name: "Cacao Powder",
    price: 1000,
    unit: "kg",
    description: "Cold-pressed for maximum nutrient retention. Perfect for lattes & baking.",
    longDesc: "Our premium cacao powder is cold-pressed to preserve heat-sensitive nutrients. Rich, velvety texture with intense chocolate flavour.",
    benefits: ["Highest flavanol content", "Perfect for smoothies & lattes", "Supports cardiovascular health", "Natural pre-workout"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070",
    category: "powder"
  },
  {
    id: 5,
    name: "Cacao Paste",
    price: 1200,
    unit: "kg",
    description: "100% pure cacao liquor — the foundation of all fine chocolate.",
    longDesc: "Stone-ground cacao beans turned into rich paste. The ultimate ingredient for making your own chocolate or adding intense flavour to recipes.",
    benefits: ["Most concentrated form", "Ideal for homemade chocolate", "Maximum theobromine & mood support", "Used by top chefs worldwide"],
    image: "https://images.unsplash.com/photo-1606313561344-9a2f7f0e8e2e?q=80&w=2070",
    category: "paste"
  }
];

interface CartItem extends Product {
  quantity: number;
}

export default function OrganicLiving() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('organicLivingCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('organicLivingCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
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
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-luxury-gold flex items-center justify-center">
              <Leaf className="w-5 h-5 text-luxury-black" />
            </div>
            <div>
              <div className="font-serif text-2xl tracking-[3px] text-luxury-gold">ORGANIC LIVING</div>
              <div className="text-[10px] text-white/50 -mt-1 tracking-[2px]">EST 2019 • CAPE TOWN</div>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm uppercase tracking-widest">
            <a href="#shop" className="hover:text-luxury-gold transition-colors">Shop</a>
            <a href="#benefits" className="hover:text-luxury-gold transition-colors">The Science</a>
            <a href="#cafes" className="hover:text-luxury-gold transition-colors">For Cafés</a>
            <a href="#story" className="hover:text-luxury-gold transition-colors">Our Story</a>
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
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-luxury-gold/30 text-luxury-gold text-xs tracking-[3px] mb-6">
            CAPE TOWN • ORGANIC • SINGLE ORIGIN
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

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="text-[10px] tracking-[3px] text-white/50 mb-2">SCROLL TO BEGIN</div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-xs tracking-[2px] text-white/50">
          <div className="flex items-center gap-2"><Award className="w-4 h-4" /> CERTIFIED ORGANIC</div>
          <div className="flex items-center gap-2"><Leaf className="w-4 h-4" /> SINGLE-ORIGIN PERU & ECUADOR</div>
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
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="luxury-card group relative overflow-hidden rounded-3xl border border-white/10 bg-luxury-brown flex flex-col"
            >
              <div className="relative h-[420px] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
                
                <div className="absolute top-6 right-6 px-4 py-1 bg-black/70 text-xs tracking-widest rounded-full border border-luxury-gold/30">
                  {product.category.toUpperCase()}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div>
                  <h3 className="text-3xl font-serif tracking-tight mb-2">{product.name}</h3>
                  <div className="text-luxury-gold text-2xl font-light tracking-tighter mb-6">
                    R{product.price} <span className="text-sm align-super">/ {product.unit}</span>
                  </div>
                </div>

                <p className="text-white/70 text-[15px] leading-relaxed mb-8 flex-1">
                  {product.description}
                </p>

                <button 
                  onClick={() => addToCart(product)}
                  className="w-full py-4 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all text-sm tracking-[2px] font-medium"
                >
                  ADD TO CART
                </button>
              </div>
            </motion.div>
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
            onClick={() => alert('Thank you! Our wholesale team will contact you within 24 hours. Please email info@organicliving.co.za or use the form below.')}
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
              <div className="w-8 h-8 rounded-full bg-luxury-gold flex items-center justify-center">
                <Leaf className="w-4 h-4 text-black" />
              </div>
              <div className="font-serif text-2xl text-luxury-gold tracking-[2px]">ORGANIC LIVING</div>
            </div>
            <div className="text-white/50 max-w-xs">
              Premium organic cacao from regenerative farms in South America. Delivered fresh to cafés and homes across Southern Africa.
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="uppercase tracking-[2px] text-xs mb-4 text-white/50">EXPLORE</div>
            <div className="space-y-2 text-white/70">
              <a href="#shop" className="block hover:text-white">The Collection</a>
              <a href="#benefits" className="block hover:text-white">The Science</a>
              <a href="#cafes" className="block hover:text-white">For Partners</a>
              <a href="#story" className="block hover:text-white">Our Story</a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="uppercase tracking-[2px] text-xs mb-4 text-white/50">CONTACT</div>
            <div className="space-y-1 text-white/70">
              <div>Cape Town, South Africa</div>
              <a href="mailto:hello@organicliving.co.za" className="hover:text-luxury-gold">hello@organicliving.co.za</a>
              <div>+27 21 123 4567</div>
            </div>
            <div className="mt-8 text-[10px] text-white/40">
              © {new Date().getFullYear()} Organic Living. All rights reserved.<br />
              This is a premium demonstration site built for you.
            </div>
          </div>
        </div>
      </footer>

      {/* CART SIDEBAR */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <div className="absolute inset-0 bg-black/80" onClick={() => setIsCartOpen(false)} />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-luxury-black border-l border-white/10 h-full flex flex-col"
            >
              <div className="p-8 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5" />
                  <div className="text-xl tracking-tight">Your Cart</div>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="text-white/50 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {cart.length > 0 ? (
                <>
                  <div className="flex-1 overflow-auto p-8 space-y-8">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-5">
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium pr-8">{item.name}</div>
                          <div className="text-luxury-gold text-sm mt-0.5">R{item.price} / {item.unit}</div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border border-white/20 rounded">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-white/5">−</button>
                              <div className="px-4 text-sm tabular-nums">{item.quantity}</div>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-white/5">+</button>
                            </div>
                            
                            <button onClick={() => removeFromCart(item.id)} className="text-xs text-white/50 hover:text-red-400">REMOVE</button>
                          </div>
                        </div>
                        <div className="text-right font-medium tabular-nums self-start mt-1">
                          R{(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 border-t border-white/10">
                    <div className="flex justify-between text-lg mb-6">
                      <div>Total</div>
                      <div className="font-medium tabular-nums">R{cartTotal.toLocaleString()}</div>
                    </div>
                    
                    <button 
                      onClick={handleCheckout}
                      className="w-full py-4 bg-luxury-gold text-luxury-black font-medium tracking-[1px] hover:bg-white transition-all"
                    >
                      PROCEED TO CHECKOUT
                    </button>
                    <p className="text-center text-[10px] text-white/50 mt-4">Secure checkout • Free shipping on orders over R2,500</p>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center px-8">
                  <div className="text-6xl mb-6 opacity-40">🫘</div>
                  <div className="text-xl mb-2">Your cart is empty</div>
                  <p className="text-white/50">Add some premium cacao to begin your optimization journey.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-8 px-8 py-3 border border-white/30 text-sm tracking-widest hover:bg-white/5"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CHECKOUT MODAL */}
      <AnimatePresence>
        {showCheckout && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              className="bg-luxury-black border border-luxury-gold/30 max-w-lg w-full rounded-3xl p-10 relative"
            >
              <button onClick={() => setShowCheckout(false)} className="absolute top-6 right-6 text-white/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>

              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-luxury-gold" />
                </div>
                
                <div className="text-4xl font-serif tracking-tight mb-4">Thank You</div>
                <div className="text-xl text-white/70 mb-8">Your order has been received.</div>

                <div className="bg-white/5 rounded-2xl p-6 text-left text-sm space-y-3 mb-8">
                  <div className="flex justify-between"><span className="text-white/50">Order total</span> <span className="font-medium">R{cartTotal.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-white/50">Estimated delivery</span> <span>3–5 business days</span></div>
                  <div className="flex justify-between"><span className="text-white/50">Payment</span> <span>Cash on Delivery / EFT</span></div>
                </div>

                <button 
                  onClick={completeOrder}
                  className="w-full py-4 bg-luxury-gold text-luxury-black font-medium tracking-[1px] hover:bg-white transition-all"
                >
                  CONFIRM ORDER
                </button>
                
                <p className="text-[11px] text-white/50 mt-6">A member of our team will contact you shortly to finalise delivery details and any wholesale pricing.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}