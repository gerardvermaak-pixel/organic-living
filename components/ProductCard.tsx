"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/products';

interface Props {
  product: Product;
  onAddToCart?: (p: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-[#111] border border-[#3a2a1f] rounded-3xl overflow-hidden flex flex-col h-full"
    >
      <div className="relative h-80 bg-[#1a140f] flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-8xl opacity-20">🍫</div>
        )}

        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-10" />

        <div className="absolute top-4 right-4 bg-[#d4af37] text-black text-xs font-medium px-3 py-1 rounded-full tracking-wider">
          {product.badge ?? '100% PURE'}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-serif text-3xl text-white tracking-tight">{product.name}</h3>
              <p className="text-[#a38b6d] mt-1">{product.weight ?? 'Bulk'}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-light text-[#d4af37]">R{product.price}</div>
            </div>
          </div>

          <p className="mt-6 text-[#d1c5b0] leading-relaxed">{product.description}</p>
        </div>

        <div className="mt-auto pt-8">
          <button
            onClick={() => onAddToCart ? onAddToCart(product) : alert('Added to cart!')}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-[#d4af37] hover:text-black text-black py-4 rounded-2xl font-medium transition-all active:scale-[0.985]"
          >
            <ShoppingCart size={18} />
            ADD TO CART
          </button>
          <p className="text-center text-xs text-[#666] mt-3">Vegan • No sugar • Plant-based</p>
        </div>
      </div>
    </motion.div>
  );
}
"use client";

import { motion } from 'framer-motion';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
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
          onClick={() => onAddToCart(product)}
          className="w-full py-4 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all text-sm tracking-[2px] font-medium"
        >
          ADD TO CART
        </button>
      </div>
    </motion.div>
  );
}