"use client";

import { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '@/lib/products';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function OrderModal({ isOpen, onClose, product }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: '1',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Order Request: ${product.name}`;
    const body = `\nName: ${formData.name}\nEmail: ${formData.email}\nProduct: ${product.name} (${(product as any).weight ?? product.unit})\nQuantity: ${formData.quantity}\nPrice: R${product.price * parseInt(formData.quantity)}\n\nMessage:\n${formData.message}\n`;

    window.location.href = `mailto:hello@organicliving.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      onClose();
      alert("Thank you! Your email client should open with the order details.");
    }, 300);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#111] border border-[#3a2a1f] rounded-3xl max-w-md w-full p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#a38b6d] hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="font-serif text-3xl text-white mb-2">Place Your Order</h2>
        <p className="text-[#a38b6d] mb-6">{product.name} — {(product as any).weight ?? product.unit}</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-[#d1c5b0] mb-1">Full Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-[#1a140f] border border-[#3a2a1f] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#d1c5b0] mb-1">Email Address</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-[#1a140f] border border-[#3a2a1f] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#d1c5b0] mb-1">Quantity</label>
            <select 
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              className="w-full bg-[#1a140f] border border-[#3a2a1f] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]"
            >
              <option value="1">1 × R{product.price}</option>
              <option value="2">2 × R{product.price * 2}</option>
              <option value="3">3 × R{product.price * 3}</option>
              <option value="5">5 × R{product.price * 5}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-[#d1c5b0] mb-1">Message / Special Requests (optional)</label>
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-[#1a140f] border border-[#3a2a1f] rounded-xl px-4 py-3 text-white h-24 focus:outline-none focus:border-[#d4af37]"
              placeholder="Delivery address, preferred date, etc."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#d4af37] hover:bg-[#c9a227] text-black py-4 rounded-2xl font-medium mt-4 transition-all"
          >
            SEND ORDER REQUEST
          </button>
        </form>

        <p className="text-center text-xs text-[#666] mt-4">
          We'll reply within 24 hours to confirm your order
        </p>
      </div>
    </div>
  );
}
