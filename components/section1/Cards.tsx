"use client";

import Card from "./Card";

export default function Cards() {
  return (
    <>
      {/* Desktop */}
      <section className="relative mx-auto mt-24 hidden h-[500px] max-w-[1180px] lg:block">
        <Card
          title="Your marketing context"
          image="/card-1.webp"
          bgImage="/card-2-bg.webp"
          className="left-0 top-0 z-10"
        />

        <Card
          title="Proactive agentic insights"
          image="/card-2.webp"
          bgImage="/card-2-bg.webp"
          className="left-[280px] top-4 z-20"
        />

        <Card
          title="On-brand creative, every time"
          image="/card-3.webp"
          bgImage="/card-2-bg.webp"
          className="left-[560px] top-8 z-30"
        />

        <Card
          title="Real-time, omnichannel orchestration"
          image="/card-4.webp"
          bgImage="/card-2-bg.webp"
          className="left-[840px] top-12 z-40"
        />
      </section>

      {/* Mobile & Tablet */}
      <section className="mx-auto mt-12 flex max-w-md flex-col gap-6 px-4 lg:hidden">
        <Card
          title="Your marketing context"
          image="/card-1.webp"
          bgImage="/card-2-bg.webp"
          className="relative left-0 top-0"
        />

        <Card
          title="Proactive agentic insights"
          image="/card-2.webp"
          bgImage="/card-2-bg.webp"
          className="relative left-0 top-0"
        />

        <Card
          title="On-brand creative, every time"
          image="/card-3.webp"
          bgImage="/card-2-bg.webp"
          className="relative left-0 top-0"
        />

        <Card
          title="Real-time, omnichannel orchestration"
          image="/card-4.webp"
          bgImage="/card-2-bg.webp"
          className="relative left-0 top-0"
        />
      </section>
    </>
  );
}