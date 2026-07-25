"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  panels: string[];
}

export default function PanelScroller({ panels }: Props) {
  // duplicate panels so the animation loops smoothly
  const images = [...panels, ...panels];

  return (
    <div className="relative h-[340px] overflow-hidden mt-8">
      <motion.div
        animate={{
          y: ["0%", "-50%"],
        }}
        transition={{
          duration: 6,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-20"
      >
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt=""
            width={430}
            height={180}
            className="rounded-3xl"
            rounded-lg
          />
        ))}
      </motion.div>
    </div>
  );
}