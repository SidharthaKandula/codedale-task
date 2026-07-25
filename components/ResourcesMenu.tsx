import React from 'react'

const ResourcesMenu = () => {
  return (
    <div>
      <div className="absolute left-1/2 top-full z-50 -translate-x-1/2">
  <div className="w-[1280px] rounded-2xl border border-gray-200 bg-white px-10 py-8 shadow-xl">
    <div className="grid grid-cols-4 gap-4">

      {/* EXPLORE */}
      <div className="border-r border-gray-200 pr-5">
        <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
          Explore
        </p>

        <div className="space-y-12">
          <p className="text-[18px] font-medium">Blog</p>
          <p className="text-[18px] font-medium">Learn</p>
          <p className="text-[18px] font-medium">Whitepapers & guides</p>
          <p className="text-[18px] font-medium">Playbooks</p>
          <p className="text-[18px] font-medium">Lifecycle Leaders newsletter</p>
          <p className="text-[18px] font-medium">CDP Comparisons</p>
        </div>
      </div>

      {/* DOCUMENTATION */}
      <div className="border-r border-gray-200 pr-4">
        <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
          Documentation
        </p>

        <div className="space-y-6">

          <div>
            <h3 className="text-[18px] font-semibold text-gray-900">
              Core concepts
            </h3>

            <p className="mt-3 text-[16px] leading-7 text-gray-600">
              Understand the basics of how Hightouch works
            </p>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-gray-900">
              Syncs
            </h3>

            <p className="mt-3 text-[16px] leading-7 text-gray-600">
              Syncs define how you want to get data from your source to
              destination
            </p>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-gray-900">
              Models
            </h3>

            <p className="mt-3 text-[16px] leading-7 text-gray-600">
              Hightouch models define and organize data from a source
            </p>
          </div>

        </div>

        <button className="mt-6 flex items-center gap-4 text-[18px] font-semibold">
          Read our docs

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            →
          </span>
        </button>
      </div>

      {/* GET STARTED */}
      <div className="border-r border-gray-200 pr-5">
        <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
          Get Started
        </p>

        <div className="space-y-6">

          <div>
            <h3 className="text-[18px] font-semibold text-gray-900">
              Talk to us
            </h3>

            <p className="mt-3 text-[16px] leading-7 text-gray-600">
              Schedule 30-minutes to talk through how to solve your use cases
            </p>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-gray-900">
              Events
            </h3>

            <p className="mt-3 text-[16px] leading-7 text-gray-600">
              Find conferences, local events, and webinars to learn more
            </p>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-gray-900">
              Solutions partners
            </h3>

            <p className="mt-3 text-[16px] leading-7 text-gray-600">
              Our Partners design, build and deliver exceptional data solutions
            </p>
          </div>

        </div>
      </div>

      {/* FEATURED */}
      <div>
        <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
          Featured
        </p>

        <img
          src="/faf4a29db38f4d84cf1ea65f546b6e55ee9c24ee-1056x960.webp"
          alt="Gartner"
          className="h-44 w-full rounded-3xl object-cover"
        />

        <p className="mt-4 text-[16px] leading-7 text-gray-600">
          See why Hightouch was named a CDP Leader by Gartner®
        </p>

        <button className="mt-4 flex items-center gap-4 text-[18px] font-semibold">
          Get the report

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            →
          </span>
        </button>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default ResourcesMenu
