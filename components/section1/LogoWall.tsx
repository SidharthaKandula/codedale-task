"use client";

import LogoRow from "./LogoRow";
import { carouselData } from "./data";
import { ChevronRight } from "lucide-react";

const createRow = (offset: number) =>
  Array.from({ length: 10 }, (_, i) => {
    return carouselData[(i + offset) % carouselData.length];
  });

export default function LogoWall() {
  return (
    <section className="bg-white py-16 lg:py-24">
      {/* Heading */}
      <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:mb-16">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Connect to 300+ tools
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-700 sm:text-lg lg:text-xl">
          Activate audiences, lifecycle, and ad campaigns instantly across any
          tool your team uses.
        </p>

        <button className="mt-8 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 sm:px-7 sm:py-3.5 sm:text-base">
          See All Integrations
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Logo Rows */}
      <div className="space-y-4 overflow-hidden sm:space-y-5 lg:space-y-6">
        <LogoRow items={createRow(0)} duration={28} />

        <LogoRow items={createRow(2)} duration={32} />

        <LogoRow items={createRow(4)} duration={36} />
      </div>
    </section>
  );
}