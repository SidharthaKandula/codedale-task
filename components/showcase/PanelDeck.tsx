"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  panels: string[];
}

export default function PanelDeck({ panels }: Props) {
  const [cards, setCards] = useState(panels);
  const [offset, setOffset] = useState(18);

  useEffect(() => {
    setCards(panels);
  }, [panels]);

  // Responsive stack offset
  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth >= 1280) {
        setOffset(48);
      } else if (window.innerWidth >= 1024) {
        setOffset(40);
      } else if (window.innerWidth >= 768) {
        setOffset(28);
      } else {
        setOffset(18);
      }
    };

    updateOffset();

    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  // Rotate cards every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const copy = [...prev];
        const first = copy.shift()!;
        copy.push(first);
        return copy;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const positions = [
    {
      x: 0,
      scale: 1,
      opacity: 1,
      rotate: 0,
      zIndex: 40,
    },
    {
      x: 10,
      scale: 0.95,
      opacity: 0.75,
      rotate: 0,
      zIndex: 30,
    },
    {
      x: 30 ,
      scale: 0.9,
      opacity: 0.55,
      rotate: -4,
      zIndex: 20,
    },
  ];

  return (
    <div
      className="
        relative
        mx-auto

        w-[220px]
        h-[220px]

        sm:w-[280px]
        sm:h-[280px]

        md:w-[360px]
        md:h-[360px]

        lg:w-[520px]
        lg:h-[520px]

        xl:w-[560px]
        xl:h-[560px]
      "
    >
      <AnimatePresence initial={false}>
        {cards.slice(0, 3).map((image, index) => {
          const pos = positions[index];

          return (
            <motion.div
              key={`${image}-${index}`}
              layout
              initial={{
                y: 120,
                opacity: 0,
                scale: 0.82,
              }}
              animate={{
                x: pos.x,
                scale: pos.scale,
                opacity: pos.opacity,
                rotate: pos.rotate,
              }}
              exit={{
                y: -120,
                opacity: 0,
                scale: 1.08,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                zIndex: pos.zIndex,
              }}
              className="
                absolute
                left-1/2
                -translate-x-1/2

                overflow-hidden

                rounded-[18px]
                lg:rounded-[32px]

                border
                border-white/20

                bg-white/10
                backdrop-blur-3xl

                shadow-[0_20px_60px_rgba(0,0,0,.25)]

                w-[170px]
                sm:w-[220px]
                md:w-[270px]
                lg:w-[360px]
                xl:w-[400px]

                mt-3
                sm:mt-5
                lg:mt-10
              "
            >
              <img
                src={image}
                alt=""
                className="
                  w-full
                  object-cover
                  rounded-[18px]
                  lg:rounded-[32px]
                  select-none
                  pointer-events-none
                "
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}