"use client";

import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { X, Award } from 'lucide-react';
=======
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  onComplete: () => void;
}

export default function CheckoutModal({ isOpen, onClose, total, onComplete }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    notes: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing (replace with real payment logic later)
    setTimeout(() => {
      setIsProcessing(false);
      onComplete();
      onClose();
      // Reset form
      setFormData({ name: '', email: '', address: '', city: '', notes: '' });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-2xl bg-[#0a0a0a] border border-[#3a2a1f] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#3a2a1f] px-6 py-4">
              <div>
                <h2 className="font-serif text-2xl text-[#d4af37]">Complete Your Order</h2>
                <p className="text-sm text-[#a38b6d]">Organic Living • Premium Cacao</p>
              </div>
              <button
                onClick={onClose}
                className="text-[#a38b6d] hover:text-white transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Order Summary */}
              <div className="rounded-xl bg-[#111] p-4 border border-[#3a2a1f]">
                <div className="flex justify-between text-sm">
                  <span className="text-[#a38b6d]">Order Total</span>
                  <span className="font-medium text-[#d4af37]">R{total.toFixed(2)}</span>
                </div>
                <div className="text-[10px] text-[#666] mt-1">Includes premium packaging &amp; delivery</div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-[1px] text-[#a38b6d] mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-[#111] border border-[#3a2a1f] px-4 py-3 text-white placeholder-[#555] focus:border-[#d4af37] focus:outline-none"
                    placeholder="Alex Rivera"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[1px] text-[#a38b6d] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-[#111] border border-[#3a2a1f] px-4 py-3 text-white placeholder-[#555] focus:border-[#d4af37] focus:outline-none"
                    placeholder="you@domain.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[1px] text-[#a38b6d] mb-1.5">Delivery Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-[#111] border border-[#3a2a1f] px-4 py-3 text-white placeholder-[#555] focus:border-[#d4af37] focus:outline-none"
                    placeholder="12 Oak Lane, Constantia"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[1px] text-[#a38b6d] mb-1.5">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg bg-[#111] border border-[#3a2a1f] px-4 py-3 text-white placeholder-[#555] focus:border-[#d4af37] focus:outline-none"
                      placeholder="Cape Town"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[1px] text-[#a38b6d] mb-1.5">Postal Code</label>
                    <input
                      type="text"
                      className="w-full rounded-lg bg-[#111] border border-[#3a2a1f] px-4 py-3 text-white placeholder-[#555] focus:border-[#d4af37] focus:outline-none"
                      placeholder="7806"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[1px] text-[#a38b6d] mb-1.5">Order Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    className="w-full resize-y rounded-lg bg-[#111] border border-[#3a2a1f] px-4 py-3 text-white placeholder-[#555] focus:border-[#d4af37] focus:outline-none"
                    placeholder="Gift message or special instructions..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="mt-2 w-full rounded-full bg-[#d4af37] py-4 text-sm font-medium text-black hover:bg-[#e8c97a] active:bg-[#c9a227] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>Processing your premium order...</>
                ) : (
                  <>Complete Purchase — R{total.toFixed(2)}</>
                )}
              </button>

              <p className="text-center text-[10px] text-[#666]">
                Secure checkout • 30-day satisfaction guarantee
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[1px] text-[#a38b6d] mb-1.5">Order Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    className="w-full resize-y rounded-lg bg-[#111] border border-[#3a2a1f] px-4 py-3 text-white placeholder-[#555] focus:border-[#d4af37] focus:outline-none"
                    placeholder="Gift message or special instructions..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="mt-2 w-full rounded-full bg-[#d4af37] py-4 text-sm font-medium text-black hover:bg-[#e8c97a] active:bg-[#c9a227] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>Processing your premium order...</>
                ) : (
                  <>Complete Purchase — R{total.toFixed(2)}</>
                )}
              </button>

              <p className="text-center text-[10px] text-[#666]">
                Secure checkout • 30-day satisfaction guarantee
              </p>
            </form>
          </motion.div>
>>>>>>> 55f2293 (Fix CheckoutModal with clean premium luxury design + use client)
        </div>
      )}
    </AnimatePresence>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 55f2293 (Fix CheckoutModal with clean premium luxury design + use client)
