"use client";

import { useState } from "react";
import { showcaseData } from "./data";
import ShowcaseHeader from "./ShowcaseHeader";
import ShowcaseCard from "./ShowcaseCard";

export default function Showcase() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative overflow-hidden transition-all duration-700"
      style={{
        backgroundImage: `url(${showcaseData[active].background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-8 py-16">
        <ShowcaseHeader />

        <div className="mt-16 flex justify-center gap-6">
          {showcaseData.map((card, index) => (
            <ShowcaseCard
              key={card.id}
              item={card}
              active={active === index}
              onHover={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}