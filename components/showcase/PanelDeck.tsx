"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  panels: string[];
}

export default function PanelDeck({ panels }: Props) {
  const [cards, setCards] = useState(panels);

  useEffect(() => {
    setCards(panels);
  }, [panels]);

  // Rotate cards every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const copy = [...prev];
        const first = copy.shift()!;
        copy.push(first);
        return copy;
      });
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  // Back → Middle → Front

const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 640);
  };

  checkScreen(); // initial check

  window.addEventListener("resize", checkScreen);

  return () => window.removeEventListener("resize", checkScreen);
}, []);

const positions = isMobile
  ? [
      { y: -35, scale: 0.88, opacity: 0.35, zIndex: 10 },
      { y: -18, scale: 0.94, opacity: 0.65, zIndex: 20 },
      { y: 0, scale: 1, opacity: 1, zIndex: 30 },
    ]
  : [
      { y: -100, scale: 0.88, opacity: 0.35, zIndex: 10 },
      { y: -70, scale: 0.94, opacity: 0.65, zIndex: 20 },
      { y: -30, scale: 1, opacity: 1, zIndex: 30 },
    ];
  return (
    <div
      className="
        relative
        mx-auto
        w-[240px]
        h-[260px]

        sm:w-[300px]
        sm:h-[320px]

        md:w-[380px]
        md:h-[420px]

        lg:w-[520px]
        lg:h-[520px]

        xl:w-[560px]
        xl:h-[560px]
      "
    >
      <AnimatePresence initial={false}>
        {cards
          .slice(0, 3)
          .reverse()
          .map((image, index) => {
            const pos = positions[index];

            return (
              <motion.div
                key={image}
                layout
                initial={{
                  y: 40,
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  y: pos.y,
                  scale: pos.scale,
                  opacity: pos.opacity,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  zIndex: pos.zIndex,
                }}
                className="
                  absolute
                  left-1/2
                  top-12
                  -translate-x-1/2
                  mt-20

                  overflow-hidden

                  rounded-[20px]
                  lg:rounded-[30px]

                  bg-white/10
                  backdrop-blur-3xl

                  

                  shadow-[0_20px_60px_rgba(0,0,0,.25)]

                  w-[180px]
                  sm:w-[240px]
                  md:w-[300px]
                  lg:w-[380px]
                  xl:w-[420px]
                "
              >
                <img
                  src={image}
                  alt=""
                  draggable={false}
                  className="
                    w-full
                    rounded-[20px]
                    lg:rounded-[30px]
                    object-cover
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