"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Landing() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to Organic Living';
  const typingSpeed = 80; // ms per character

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Full-bleed hero background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/Cacao1%20(2).jpg')" }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Centered content - no header */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-serif tracking-[-2px] mb-10 min-h-[1.2em]">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        <Link 
          href="/home" 
          className="inline-block px-12 py-4 bg-[#d4af37] hover:bg-white text-black font-medium text-sm tracking-[2px] rounded-full transition-all active:scale-[0.985]"
        >
          Enter the Site
        </Link>

        <p className="mt-8 text-white/50 text-sm tracking-widest">EST 2019 • CAPE TOWN • SINGLE-ORIGIN TANZANIA</p>
      </div>
    </div>
  );
}
