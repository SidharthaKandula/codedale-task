"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";
import ShowcaseCard from "./ShowcaseCard";
import { showcaseData } from "./data";

interface Props {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const CARD_WIDTH = 470;

export default function PhoneCarousel({
  active,
  setActive,
}: Props) {
  const [cards, setCards] = useState(showcaseData);

  const x = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      animate(x.current, -CARD_WIDTH, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(value) {
          x.current = value;
        },
        onComplete() {
          setCards((prev) => {
            const first = prev[0];
            return [...prev.slice(1), first];
          });

          x.current = 0;

          setActive((prev: number) => (prev + 1) % showcaseData.length);
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [setActive]);

  return (
    <div className="mt-20 overflow-hidden">
      <motion.div
        animate={{
          x: x.current,
        }}
        transition={{
          duration: 0,
        }}
        className="flex gap-10"
      >
        {cards.map((item, index) => (
          <div
            key={item.id}
            className={`transition-all duration-700 ${
              index === 1
                ? "scale-100 opacity-100"
                : "scale-90 opacity-40 blur-[1px]"
            }`}
          >
            <ShowcaseCard
              item={item}
              active={index === 1}
              onHover={() => {}}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}