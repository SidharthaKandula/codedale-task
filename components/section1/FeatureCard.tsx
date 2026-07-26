"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  image: string;
}

export default function FeatureCard({ image }: Props) {
  return (
    <div className="relative flex items-center justify-center">

      <AnimatePresence mode="wait">
        <motion.img
          key={image}
          src={image}
          alt=""
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -35,
            scale: 0.97,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="relative z-20 w-full max-w-[1000px] rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,.45)]"
        />
      </AnimatePresence>

      {/* Floating animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}