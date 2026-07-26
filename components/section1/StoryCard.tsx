"use client";

import { motion } from "framer-motion";
import { Story } from "@/components/data/stories";

interface Props {
  story: Story;
  position: "left" | "center" | "right";
  onClick?: () => void;
}

export default function StoryCard({
  story,
  position,
  onClick,
}: Props) {
  const isCenter = position === "center";

  const variants = {
    left: {
      x: -820,
      scale: 0.82,
      opacity: 0.55,
      filter: "blur(4px)",
      zIndex: 0,
    },

    center: {
      x: 0,
      scale: 0.82,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 10,
    },

    right: {
      x: 820,
      scale: 0.82,
      opacity: 0.55,
      filter: "blur(4px)",
      zIndex: 0,
    },
  };

  return (
    <motion.div
      layout
      animate={position}
      variants={variants}
      transition={{
        duration: 0.65,
        ease: "easeInOut",
      }}
      onClick={onClick}
      className="absolute left-1/2 top-0 w-[900px] -translate-x-1/2 cursor-pointer"
    >
      {/* Card */}
      <div className="overflow-hidden rounded-[34px] bg-white ">
        {/* Media */}
        <div className="h-[520px] overflow-hidden">
          {story.type === "video" ? (
            <video
              src={story.src}
              autoPlay={isCenter}
              muted
              loop={isCenter}
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={story.src}
              alt={story.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {/* Bottom Content */}
        <div className="flex items-center justify-between px-10 py-8">
          <div className="max-w-xl">
            
            <p className="mt-3 text-2xl text-gray-800 font-semibold">
              {story.description}
            </p>
          </div>

          <button className="rounded-full border border-black px-7 py-3 transition hover:bg-black hover:text-white text-gray-900">
            {story.button}
          </button>
        </div>
      </div>
    </motion.div>
  );
}