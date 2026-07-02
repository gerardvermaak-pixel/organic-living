import Link from 'next/link';

export default function Landing() {
  return (
    <div className="min-h-screen w-full relative">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/Cacao1%20(2).jpg')" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-6xl font-serif mb-8 tracking-tight">Welcome to Organic Living</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/home" className="inline-block px-10 py-4 bg-[#d4af37] text-black font-medium rounded-full hover:brightness-95 transition">
              Enter the Site
            </Link>
            <Link href="/share" className="inline-block px-10 py-4 border border-white/40 text-white font-medium rounded-full hover:bg-white/10 transition">
              Use Public Share Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
