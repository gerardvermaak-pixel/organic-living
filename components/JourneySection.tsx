"use client";

import OriginMap from './OriginMap';
import LearnMoreButton from './LearnMoreButton';

export default function JourneySection() {
  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-[#1a140f]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <OriginMap />
        <div className="mt-6">
          <LearnMoreButton />
        </div>
      </div>
    </section>
  );
}
