"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import OrderModal from './OrderModal';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ y: -8 }}
        className="group bg-[#111] border border-[#3a2a1f] rounded-3xl overflow-hidden flex flex-col h-full"
      >
         <div className="relative h-80 bg-[#1a140f] flex items-center justify-center overflow-hidden">
          <div className="text-8xl opacity-20">🍫</div>
          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-10" />
          
          <div className="absolute top-4 right-4 bg-[#d4af37] text-black text-xs font-medium px-3 py-1 rounded-full tracking-wider">
            100% PURE
          </div>
        </div>

        <div className="p-8 flex flex-col flex-1">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-serif text-3xl text-white tracking-tight">{product.name}</h3>
                <p className="text-[#a38b6d] mt-1">{(product as any).weight ?? product.unit ?? 'Bulk'}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-light text-[#d4af37]">R{product.price}</div>
              </div>
            </div>

            <p className="mt-6 text-[#d1c5b0] leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-auto pt-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-[#d4af37] hover:text-black text-black py-4 rounded-2xl font-medium transition-all active:scale-[0.985]"
            >
              <ShoppingCart size={18} />
              PLACE ORDER
            </button>
            <p className="text-center text-xs text-[#666] mt-3">Vegan • No sugar • Plant-based</p>
          </div>
        </div>
      </motion.div>

      {/* Order Modal */}
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={product} 
      />
    </>
  );
}