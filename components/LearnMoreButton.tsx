"use client";

import Link from 'next/link';

export default function LearnMoreButton() {
  return (
    <Link href="/learn-more" className="inline-block px-8 py-3 border border-[#3a2a1f] text-sm text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all rounded-lg">
      Learn More About Cacao
    </Link>
  );
}
