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
    phone: '',
    quantity: '1',
    message: '',
  });

  if (!isOpen) return null;

  const buildOrderDetails = () => {
    const quantity = parseInt(formData.quantity, 10) || 1;
    const subject = `Order Request: ${product.name}`;
    const body = `\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProduct: ${product.name} (${(product as any).weight ?? product.unit})\nQuantity: ${quantity}\nPrice: R${product.price * quantity}\n\nMessage:\n${formData.message}\n`;

    return { subject, body };
  };

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const { subject, body } = buildOrderDetails();
    const message = `${subject}\n\n${body}`;

    window.open(`https://wa.me/27663535181?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      onClose();
      alert('Thank you! Your WhatsApp chat has been opened with your order details.');
    }, 300);
  };

  const handleEmailOrder = () => {
    const { subject, body } = buildOrderDetails();

    window.location.href = `mailto:Businessfly369@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      onClose();
      alert('Thank you! Your email client should open with the order details.');
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

        <form onSubmit={handleWhatsAppOrder} className="space-y-5">
          <div>
            <label className="block text-sm text-[#d1c5b0] mb-1">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#1a140f] border border-[#3a2a1f] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#d1c5b0] mb-1">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#1a140f] border border-[#3a2a1f] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div>
            <label className="block text-sm text-[#d1c5b0] mb-1">Phone Number</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#1a140f] border border-[#3a2a1f] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]"
              placeholder="e.g. 066 353 5181"
            />
          </div>

          <div>
            <label className="block text-sm text-[#d1c5b0] mb-1">Quantity</label>
            <select
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#1a140f] border border-[#3a2a1f] rounded-xl px-4 py-3 text-white h-24 focus:outline-none focus:border-[#d4af37]"
              placeholder="Delivery address, preferred date, etc."
            />
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="submit"
              className="w-full bg-[#d4af37] hover:bg-[#c9a227] text-black py-4 rounded-2xl font-medium transition-all"
            >
              Request WhatsApp Contact Order
            </button>

            <button
              type="button"
              onClick={handleEmailOrder}
              className="w-full border border-[#3a2a1f] bg-transparent hover:bg-white/5 text-[#d1c5b0] py-4 rounded-2xl font-medium transition-all"
            >
              Send Order via Email
            </button>
          </div>
        </form>

        <p className="text-center text-xs text-[#666] mt-4">
          We&apos;ll reply within 24 hours to confirm your order
        </p>
      </div>
    </div>
  );
}
