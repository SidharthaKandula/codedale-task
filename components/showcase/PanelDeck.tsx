"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Panel {
  title: string;
  description: string;
  image?: string;
}

interface PanelDeckProps {
  panel: Panel;
  panelIndex: number;
}

export default function PanelDeck({
  panel,
  panelIndex,
}: PanelDeckProps) {
  return (
    <div
      className="
        absolute
        right-24
        top-1/2
        -translate-y-1/2
        w-[380px]
        h-[260px]
        z-20
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={panelIndex}
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.88,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0.65,
            y: -35,
            scale: 0.94,
          }}
          transition={{
            duration: 0.65,
            ease: "easeInOut",
          }}
          className="
            relative
            w-full
            h-full
            rounded-[28px]
            border
            border-white/20
            bg-white/10
            backdrop-blur-2xl
            shadow-[0_25px_60px_rgba(0,0,0,0.18)]
            overflow-hidden
            p-7
          "
        >
          {/* Gradient Overlay */}
          <div
            className="
              absolute
              inset-0
              rounded-[28px]
              bg-gradient-to-br
              from-white/30
              via-white/10
              to-transparent
              pointer-events-none
            "
          />

          {/* Top Highlight */}
          <div
            className="
              absolute
              top-0
              left-0
              right-0
              h-px
              bg-white/50
            "
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {panel.title}
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-gray-700">
                {panel.description}
              </p>
            </div>

            {panel.image && (
              <div className="mt-6 flex justify-center">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="max-h-28 object-contain"
                />
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}