"use client";

import Image from "next/image";

export default function PhoneTrack({
  data,
  activeIndex,
}: any) {
  const phones = [
    ...data.slice(activeIndex),
    ...data.slice(0, activeIndex),
  ];

  return (
    <div className="w-full overflow-x-hidden mt-10 md:mt-14 lg:mt-16 px-4">
      <div
        className="
          flex
          justify-center
          items-center
          gap-3
          sm:gap-4
          md:gap-6
          lg:gap-8
          mx-auto
        "
      >
        {phones.map((phone: any, index: number) => {
          const active = index === 2;

          return (
            <div
              key={phone.id}
              className={`
                flex-shrink-0
                transition-all
                duration-700
                ${
                  active
                    ? "scale-100 sm:scale-105 lg:scale-110"
                    : "scale-90 sm:scale-95 lg:scale-100"
                }
              `}
            >
              <Image
                src={phone.image}
                alt={phone.title}
                width={360}
                height={720}
                className={`
                  rounded-3xl
                  object-cover
                  transition-all
                  duration-700

                  ${
                    active
                      ? `
                        w-[130px] h-[240px]
                        sm:w-[180px] sm:h-[320px]
                        md:w-[240px] md:h-[420px]
                        lg:w-[360px] lg:h-[420px]
                      `
                      : `
                        w-[100px] h-[190px]
                        sm:w-[140px] sm:h-[260px]
                        md:w-[180px] md:h-[320px]
                        lg:w-[280px] lg:h-[360px]
                      `
                  }
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}