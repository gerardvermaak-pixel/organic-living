"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onComplete: () => void;
}

export default function CheckoutModal({ isOpen, onClose, total, onComplete }: CheckoutModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            className="bg-luxury-black border border-luxury-gold/30 max-w-lg w-full rounded-3xl p-10 relative"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-luxury-gold" />
              </div>
              
              <div className="text-4xl font-serif tracking-tight mb-4">Thank You</div>
              <div className="text-xl text-white/70 mb-8">Your order has been received.</div>

              <div className="bg-white/5 rounded-2xl p-6 text-left text-sm space-y-3 mb-8">
                <div className="flex justify-between"><span className="text-white/50">Order total</span> <span className="font-medium">R{total.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-white/50">Estimated delivery</span> <span>3–5 business days</span></div>
                <div className="flex justify-between"><span className="text-white/50">Payment</span> <span>Cash on Delivery / EFT</span></div>
              </div>

              <button 
                onClick={onComplete}
                className="w-full py-4 bg-luxury-gold text-luxury-black font-medium tracking-[1px] hover:bg-white transition-all"
              >
                CONFIRM ORDER
              </button>
              
              <p className="text-[11px] text-white/50 mt-6">A member of our team will contact you shortly to finalise delivery details and any wholesale pricing.</p>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}