export default function ShowcaseHeader() {
  return (
    <section className="max-w-7xl mx-auto  pb-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-4">

    {/* Left Content */}
    <div>
      <h1 className="text-5xl leading-[1] font-thin tracking-[-3px] text-black max-w-[620px]">
        Marketing looks
        <br />
        different here
      </h1>
    </div>

    {/* Right Content */}
    <div className="">
      <p className="max-w-[800px] text-2xl leading-[1.25] font-normal text-black">
        Go from insight to live campaign in minutes –
        powered by all your data, brand knowledge,
        and AI.
      </p>

      <button className="mt-5 inline-flex items-center gap-3 rounded-3xl bg-[#2E2A33] px-4 text-[15px] font-medium text-white transition hover:opacity-90">
        Get a demo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-13 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

  </div>
</section>
  );
}