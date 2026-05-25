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