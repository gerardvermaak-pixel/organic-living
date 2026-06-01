"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Product, CartItem } from '@/lib/products';
import CartSidebar from './CartSidebar';
import CheckoutModal from './CheckoutModal';

export default function Header() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('organicLivingCart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('organicLivingCart', JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeFromCart = (id: number) => setCart(prev => prev.filter(item => item.id !== id));

  const cartTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  const handleCheckout = () => { setIsCartOpen(false); setShowCheckout(true); };
  const completeOrder = () => { setCart([]); setShowCheckout(false); alert('Thank you for your order!'); };

  return (
    <>
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
            <Link href="/home#shop" className="hover:text-luxury-gold transition-colors">Shop</Link>
            <Link href="/learn-more" className="hover:text-luxury-gold transition-colors">Learn About Cacao</Link>
            <Link href="/home#benefits" className="hover:text-luxury-gold transition-colors">The Science</Link>
            <Link href="/home#cafes" className="hover:text-luxury-gold transition-colors">For Cafés</Link>
            <Link href="/home#story" className="hover:text-luxury-gold transition-colors">Our Story</Link>
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
    </>
  );
}
