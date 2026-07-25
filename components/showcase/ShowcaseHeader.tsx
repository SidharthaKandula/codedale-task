export default function ShowcaseHeader() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-0 lg:pt-14">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <h1 className="max-w-[620px] text-4xl font-thin leading-none tracking-[-2px] text-black sm:text-5xl lg:text-7xl lg:tracking-[-1px]">
            Marketing looks
            <br />
            different here
          </h1>
        </div>

        {/* Right Content */}
        <div className="lg:pt-2">
          <p className="max-w-[600px] text-lg leading-8 text-black sm:text-xl lg:text-2xl lg:leading-[1.35] font-thin">
            Go from insight to live campaign in minutes –
            powered by all your data, brand knowledge,
            and AI.
          </p>

          <button className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#2E2A33] px-6 py-3 text-base font-medium text-white transition-all hover:opacity-90">
            Get a demo

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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