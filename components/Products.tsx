"use client";

import ProductCard from './ProductCard';
import { Product } from '@/lib/products';

const slab: Product = {
  id: 999,
  name: '100% Dark Chocolate Slab',
  price: 285,
  weight: '1 Kg',
  description:
    'Chocolate in its purest form. Intense, complex flavor perfect for desserts, baking, and ceremonial use. Vegan, plant-based, and completely sugar-free.',
  image: undefined,
};

export default function Products() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#d4af37] text-sm tracking-[3px]">OUR OFFERINGS</div>
          <h2 className="font-serif text-6xl text-white mt-4">Ceremonial &amp; Culinary Cacao</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ProductCard product={slab} />
        </div>
      </div>
    </section>
  );
}
