"use client";

import { MessageCircle , Cookie } from "lucide-react";
import Image from "next/image";

export default function FloatingWidgets() {
  return (
    <>
      {/* Cookie Button */}
      <button
        className="fixed bottom-6 left-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#2f3538] shadow-xl transition hover:scale-105"
      >
        <Cookie size={30} className="text-white" />
      </button>

      {/* Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#2f3538] shadow-xl transition hover:scale-105"
      >
        <MessageCircle
          size={34}
          className="fill-white text-white"
        />
      </button>
    </>
  );
}