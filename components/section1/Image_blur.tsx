"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ImageBlur() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Heading */}
        <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900 lg:mb-12 lg:text-4xl">
          Reinvent the way your marketing team works
        </h2>

        {/* ---------------- CARD 1 ---------------- */}
        <motion.div
          initial="rest"
          whileHover="hover"
          className="relative overflow-hidden rounded-[32px]"
        >
          {/* Background */}
          <motion.img
            src="/bg1.jpeg"
            alt="Background"
            variants={{
              rest: {
                scale: 1,
                filter: "brightness(1) saturate(1)",
              },
              hover: {
                scale: 1.05,
                filter: "brightness(1.12) saturate(1.2)",
              },
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative flex flex-col items-center justify-between px-6 py-10 lg:flex-row lg:px-10 lg:py-0 lg:h-[350px]">
            {/* Left */}
            <div className="w-full max-w-lg text-center lg:text-left">
              <p className="text-sm font-bold tracking-wide lg:text-lg">
                AGENTIC MARKETING PLATFORM (AMP)
              </p>

              <h1 className="mt-4 text-3xl font-bold leading-tight lg:mt-5 lg:text-4xl">
                Never run out of on-brand ads or emails again
              </h1>

              <p className="mt-5 text-base lg:text-lg">
                The fastest way to launch insight-backed campaigns across
                performance and lifecycle marketing.
              </p>

              <button className="mx-auto mt-8 flex items-center text-base font-bold lg:mx-0 lg:text-lg">
                Discover AMP
                <div className="ml-2 rounded-full bg-white p-1">
                  <ChevronRight size={18} />
                </div>
              </button>
            </div>

            {/* Right */}
            <motion.img
              src="/amp-ui (1).webp"
              alt="AMP UI"
              variants={{
                rest: {
                  y: 0,
                  scale: 1,
                },
                hover: {
                  y: 5,
                  scale: 1.03,
                },
              }}
              transition={{ duration: 0.45 }}
              className="mt-10 h-auto w-full max-w-[520px] rounded-2xl lg:mt-0 lg:h-80 lg:w-auto"
            />
          </div>
        </motion.div>

        {/* ---------------- CARD 2 ---------------- */}
        <motion.div
          initial="rest"
          whileHover="hover"
          className="relative mt-10 overflow-hidden rounded-[32px]"
        >
          {/* Background */}
          <motion.img
            src="/bg1.jpeg"
            alt="Background"
            variants={{
              rest: {
                scale: 1,
                filter: "brightness(1) saturate(1)",
              },
              hover: {
                scale: 1.05,
                filter: "brightness(1.12) saturate(1.2)",
              },
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative flex flex-col items-center justify-between px-6 py-10 lg:flex-row lg:px-10 lg:py-0 lg:h-[350px]">
            {/* Left */}
            <div className="w-full max-w-lg text-center lg:text-left">
              <p className="text-sm font-bold tracking-wide lg:text-lg">
                COMPOSABLE CUSTOMER DATA PLATFORM (CDP)
              </p>

              <h1 className="mt-4 text-3xl font-bold leading-tight lg:mt-5 lg:text-4xl">
                Activate your complete customer data in real time
              </h1>

              <p className="mt-5 text-base lg:text-lg">
                Access real-time marketing data and insights with the most
                flexible, secure, and quick-to-deploy CDP.
              </p>

              <button className="mx-auto mt-8 flex items-center text-base font-bold lg:mx-0 lg:text-lg">
                Learn about Composable CDP
                <div className="ml-2 rounded-full bg-white p-1">
                  <ChevronRight size={18} />
                </div>
              </button>
            </div>

            {/* Right */}
            <motion.img
              src="/cdp-ui.webp"
              alt="CDP UI"
              variants={{
                rest: {
                  y: 0,
                  scale: 1,
                },
                hover: {
                  y: 5,
                  scale: 1.03,
                },
              }}
              transition={{ duration: 0.45 }}
              className="mt-10 h-auto w-full max-w-[520px] rounded-2xl lg:mt-0 lg:h-80 lg:w-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}