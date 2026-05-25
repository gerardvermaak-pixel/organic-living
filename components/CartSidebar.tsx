"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Plus, Minus } from 'lucide-react';
import { CartItem } from '@/app/page';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
  total: number;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
  onCheckout,
  total
}: CartSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/80" onClick={onClose} />
          
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
              <button onClick={onClose} className="text-white/50 hover:text-white">
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
                            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-white/5">−</button>
                            <div className="px-4 text-sm tabular-nums">{item.quantity}</div>
                            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-white/5">+</button>
                          </div>
                          
                          <button onClick={() => onRemove(item.id)} className="text-xs text-white/50 hover:text-red-400">REMOVE</button>
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
                    <div className="font-medium tabular-nums">R{total.toLocaleString()}</div>
                  </div>
                  
                  <button 
                    onClick={onCheckout}
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
                  onClick={onClose}
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
  );
}