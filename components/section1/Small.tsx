"use client";

const stats = [
  {
    value: "1000+",
    label: "AUDIENCES\nMANAGED",
    logo: "/show/84dbb616e064de970801b02e16e419d60fcd4b44-2560x1009.png",
  },
  {
    value: "200%",
    label: "BOOST IN\nENGAGEMENT",
    logo: "/e70a07028cd578556c2b58facdc711280c65fa9d-1000x256.webp",
  },
  {
    value: "52%",
    label: "INCREASE IN NEW\nCUSTOMER ACQUISITION",
    logo: "/show/aa9251b965e9084e83c5cb6df9e8e153a38c1048-489x60.svg",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
        {stats.map((item) => (
          <div key={item.value}>
            {/* Top */}
            <div className="flex min-h-[100px] items-center gap-4 sm:min-h-[120px] sm:gap-5">
              <h2 className="text-5xl font-semibold leading-none tracking-[-2px] text-[#101010] sm:text-6xl lg:text-[64px] lg:tracking-[-4px]">
                {item.value}
              </h2>

              <p className="whitespace-pre-line text-xs uppercase leading-5 tracking-[1.5px] text-neutral-700 sm:text-sm sm:leading-6 sm:tracking-[1.8px]">
                {item.label}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-neutral-300" />

            {/* Logo */}
            <div className="mt-6 flex h-12 items-center">
              <img
                src={item.logo}
                alt=""
                className="max-h-12 w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}