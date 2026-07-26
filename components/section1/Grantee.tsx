"use client";

export default function Grantee() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:gap-24 lg:px-8 lg:py-24">
      {/* Left Side */}
      <div className="relative flex h-[340px] w-full max-w-[340px] items-center justify-center overflow-hidden rounded-[28px] sm:h-[420px] sm:max-w-[420px] lg:h-[490px] lg:max-w-[490px] lg:rounded-[36px]">
        {/* Background */}
        <img
          src="/gartner-bg.webp"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* White Card */}
        <div className="relative z-10 rounded-[20px] bg-white p-4 shadow-2xl sm:p-6">
          <img
            src="/gartner-quadrant.webp"
            alt="Gartner Report"
            className="w-[200px] rounded-xl sm:w-[250px] lg:w-[280px]"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
        <h2 className="text-3xl font-medium leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Hightouch named a Leader in Gartner® Magic Quadrant™ for Customer Data
          Platforms
        </h2>

        <button className="mt-8 flex items-center gap-3 rounded-full bg-[#2f2b2d] px-6 py-3 text-base font-medium text-white transition hover:bg-black">
          Get the report

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M8 5l8 7-8 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}