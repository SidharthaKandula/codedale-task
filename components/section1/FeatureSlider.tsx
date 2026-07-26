"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    image: "/ad-insights.webp",
    background: "/morning.webp",
  },
  {
    image: "/insights.webp",
    background: "/night.webp",
  },
  {
    image: "/audience-builder.webp",
    background: "/morning.webp",
  },
  {
    image: "/cdp-ui.webp",
    background: "/night.webp",
  },
];

const features = [
  {
    title: "Explore insights",
    description:
      "Brainstorm winning campaigns faster. Use agents to aggregate signals across your data, market, and competitors to surface what to act on next.",
  },
  {
    title: "Build audiences & journeys",
    description:
      "Create any audience with a no-code builder, then orchestrate personalized journeys across every channel in your stack.",
  },
  {
    title: "Generate lifecycle campaigns",
    description:
      "Go from idea to personalized campaign in minutes. Agents help plan, create, and execute across channels by pulling from existing assets and customer data.",
  },
  {
    title: "Create on-brand ads at scale",
    description:
      "Build, edit, and launch on-brand ads at the volume performance marketing requires. Agents create infinite ads from approved assets and informed by data.",
  },
];

const DURATION = 4000;

export default function FeatureSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, DURATION);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-3xl lg:mx-0 lg:mb-20">
        <h1 className="text-center text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-left lg:text-5xl">
          Plan, create, and execute your marketing faster and more autonomously
        </h1>

        <p className="mt-6 text-center text-base leading-7 text-gray-600 sm:text-lg lg:text-left lg:text-xl">
          From insight and audience, to creative and execution, marketers get
          specialized AI agents that know exactly how to do the job.
        </p>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden rounded-[28px] bg-[#111] py-10 sm:py-14 lg:rounded-[40px] lg:py-24">

        {/* Animated Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].background}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slides[active].background}
              alt=""
              className="h-full w-full scale-110 object-cover blur-3xl opacity-50"
            />
          </motion.div>
        </AnimatePresence>

        {/* Foreground */}
        <div className="relative z-10 flex justify-center px-4">

          <div className="relative aspect-[16/10] w-full max-w-[1050px]">

            <AnimatePresence mode="wait">
              <motion.img
                key={slides[active].image}
                src={slides[active].image}
                alt=""
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -30,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="absolute inset-0 h-full w-full rounded-2xl object-contain shadow-2xl lg:rounded-3xl"
              />
            </AnimatePresence>

          </div>

        </div>

      </div>
            {/* Features */}
      <div className="mx-auto mt-10 grid w-full gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-10">
        {features.map((feature, index) => (
          <div key={index}>
            {/* Progress Bar */}
            <div className="relative mb-6 h-[3px] overflow-hidden rounded-full bg-gray-300">
              {active === index && (
                <motion.div
                  key={active}
                  className="absolute left-0 top-0 h-full bg-green-600"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: DURATION / 1000,
                    ease: "linear",
                  }}
                />
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base lg:leading-8">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}