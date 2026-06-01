import Link from 'next/link';

export default function Landing() {
  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/Icccx.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-8 tracking-tight">Welcome to Organic Living</h1>
          <Link href="/home" className="inline-block px-10 py-4 bg-[#d4af37] text-black font-medium rounded-full hover:brightness-95 transition">
            Enter the Site
          </Link>
        </div>
      </div>
    </div>
  );
}
