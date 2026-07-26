"use client";

import { motion } from "framer-motion";

interface Props {
  active: number;
  count: number;
  duration: number;
}
interface Feature {
  title: string;
  description: string;
}

export default function ProgressBars({
  active,
  count,
  duration,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="relative h-[4px] flex-1 overflow-hidden rounded-full bg-gray-300"
        >
          {active === index && (
            <motion.div
              key={active}
              className="absolute inset-y-0 left-0 rounded-full bg-green-600 to-cyan-300 shadow-[0_0_12px_rgba(96,165,250,.8)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: duration / 1000,
                ease: "linear",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}