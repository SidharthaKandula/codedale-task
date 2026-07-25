"use client";

import { useEffect, useState } from "react";

import { showcaseData } from "./data";

import ShowcaseHeader from "./ShowcaseHeader";
import PhoneTrack from "./PhoneTrack";
import PanelDeck from "./PanelDeck";

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      "
    >
      <img
        src={showcaseData[activeIndex].background}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        -z-10
        "
      />

      <ShowcaseHeader />

      <div></div>

      <PhoneTrack data={showcaseData} activeIndex={activeIndex} />

      <div
        key={activeIndex}
        className="animate-in fade-in duration-700
"
      >
        <PanelDeck panels={showcaseData[activeIndex].panels} />
      </div>
    </section>
  );
}
