"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  image: string;        // Foreground image
  bgImage: string;      // Background image
  className?: string;
}

export default function Card({
  title,
  image,
  bgImage,
  className,
}: CardProps) {
  return (
    <motion.div
      whileHover={{ y: 15, scale: 1.03 }}
      transition={{ duration: 0.35 }}
      className={`absolute w-[300px] h-[390px] rounded-[30px] overflow-hidden bg-white shadow-xl ${className}`}
    >
      {/* Background Image */}
      <div className="relative h-[270px] overflow-hidden rounded-t-[30px]">
  {/* Background */}
  <img
    src={bgImage}
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Foreground */}
  <div className="absolute inset-0 flex items-end justify-center p-4">
    <img
      src={image}
      className="max-h-full w-auto object-contain"
    />
  </div>
</div>

      <div className="p-6">
        <h2 className="text-xl font-medium leading-tight text-gray-900">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}