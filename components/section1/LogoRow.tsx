"use client";

import { motion } from "framer-motion";
import { CarouselItem } from "./data";

interface Props {
  items: CarouselItem[];
  duration: number;
}

export default function LogoRow({ items, duration }: Props) {
  const logos = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-6"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration,
          repeat: Infinity,
        }}
      >
        {logos.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="flex h-[50px] w-[100px] rounded-full shrink-0 cursor-pointer items-center justify-center rounded-[28px]  bg-white "
          >
            <img
              src={item.logo}
              alt={item.title}
              className="max-w-[50px] object-contain rounded-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}