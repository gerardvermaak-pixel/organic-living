import ProductCard from './ProductCard';
import { Product, products } from '@/lib/products';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function Products({ onAddToCart }: ProductsProps) {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#d4af37] text-sm tracking-[3px]">OUR OFFERINGS</div>
          <h2 className="font-serif text-6xl text-white mt-4">Ceremonial &amp; Culinary Cacao</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
