import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-black text-luxury-cream p-6">
      <div className="text-center">
        <h1 className="text-4xl font-serif mb-4">Page not found</h1>
        <p className="mb-6 text-white/60">Sorry, we couldn't find the page you're looking for.</p>
        <Link href="/home" className="px-6 py-3 bg-luxury-gold text-black rounded-full">Return Home</Link>
      </div>
    </div>
  );
}
