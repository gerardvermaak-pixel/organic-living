'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SharePage() {
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(`${window.location.origin}/home`);
    }
  }, []);

  const handleCopy = async () => {
    const url = shareUrl || '/home';

    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      return;
    }

    window.prompt('Copy this public link:', url);
  };

  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
        <div className="text-sm uppercase tracking-[4px] text-[#d4af37] mb-4">
          Public link
        </div>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Open Organic Living without signing in
        </h1>
        <p className="text-lg text-white/70 mb-8">
          This page is shareable and accessible to anyone. No sign-up or sign-in is required.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Link
            href="/home"
            className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-black font-medium hover:brightness-95 transition"
          >
            Open the site
          </Link>
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition"
          >
            Copy public link
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="text-sm text-white/50 mb-2">Share this URL</div>
          <div className="break-all text-sm text-white/80">{shareUrl || '/home'}</div>
        </div>
      </div>
    </div>
  );
}
