"use client";

import { useMemo, useState } from "react";
import StoryCard from "./StoryCard";
import { stories } from "@/components/data/stories";

export default function Pets() {
  // Start with Card 3 in the center
  const [active, setActive] = useState(2);

  const previous = () => {
    setActive((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const next = () => {
    setActive((prev) => (prev + 1) % stories.length);
  };

  const visibleCards = useMemo(() => {
    const left = stories[(active - 1 + stories.length) % stories.length];
    const center = stories[active];
    const right = stories[(active + 1) % stories.length];

    return {
      left,
      center,
      right,
    };
  }, [active]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-5xl">
        <h1 className="text-center text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Leaders are reinventing marketing with data and AI.
          <br className="hidden sm:block" />
          <span className="block sm:inline"> You can too.</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="relative mx-auto h-[420px] sm:h-[520px] lg:h-[760px] w-full overflow-hidden">
        {/* Left */}
        <StoryCard
          story={visibleCards.left}
          position="left"
          onClick={previous}
        />

        {/* Center */}
        <StoryCard
          story={visibleCards.center}
          position="center"
          onClick={next}
        />

        {/* Right */}
        <StoryCard
          story={visibleCards.right}
          position="right"
          onClick={next}
        />
      </div>
    </section>
  );
}