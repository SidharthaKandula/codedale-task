"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselData } from "./data";

const GAP = 24;

export default function AwardsCarousel() {
  const cards = useMemo(
    () => [
      carouselData[carouselData.length - 2],
      carouselData[carouselData.length - 1],
      ...carouselData,
      carouselData[0],
      carouselData[1],
    ],
    []
  );

  const [active, setActive] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState(390);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateSizes = () => {
      if (!containerRef.current) return;

      const width = window.innerWidth;

      let currentCardWidth = 390;

      if (width < 640) {
        currentCardWidth = width - 48;
      } else if (width < 1024) {
        currentCardWidth = 340;
      }

      setCardWidth(currentCardWidth);

      const containerWidth = containerRef.current.offsetWidth;

      setOffset(
        containerWidth / 2 -
          currentCardWidth / 2 -
          active * (currentCardWidth + GAP)
      );
    };

    updateSizes();

    window.addEventListener("resize", updateSizes);

    return () => window.removeEventListener("resize", updateSizes);
  }, [active]);

  const next = () => {
    if (active < cards.length - 3) {
      setActive((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (active > 2) {
      setActive((prev) => prev - 1);
    }
  };

  return (
    <section className="mx-auto mt-16 w-full overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:mt-24">
      {/* Heading */}

      <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl lg:mb-20">
        Recognized as an industry leader
      </h1>

      <div
        className="rounded-3xl py-10 lg:py-14"
        style={{
          backgroundImage: `url(${carouselData[0].background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            animate={{ x: offset }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="flex gap-6"
          >
            {cards.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                whileHover={{
                  y: -12,
                }}
                transition={{
                  duration: 0.25,
                }}
                style={{ width: cardWidth }}
                className="shrink-0 cursor-pointer rounded-[28px] bg-white p-5 shadow-xl sm:p-6 lg:rounded-[34px] lg:p-8"
              >
                {/* Image */}

                <div className="flex h-[220px] items-center justify-center rounded-2xl bg-[#f7f7f7] sm:h-[260px] lg:h-[300px]">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-h-full w-auto rounded-xl object-contain"
                  />
                </div>

                {/* Description */}

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold leading-7 text-gray-600 sm:text-lg lg:text-xl lg:leading-8">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}

        <div className="mt-8 flex justify-center gap-4 lg:mt-10">
          <button
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 transition hover:scale-105 lg:h-14 lg:w-14"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 transition hover:scale-105 lg:h-14 lg:w-14"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}