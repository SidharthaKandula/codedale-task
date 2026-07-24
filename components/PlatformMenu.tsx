import {
  ChevronRight,
  Megaphone,
  Send,
  Sparkles,
  BrainCircuit,
  UserSquare2,
  ScanSearch,
  Clock3,
  BarChart3,
  Database,
  CalendarClock,
  ShieldCheck,
} from "lucide-react";

export default function PlatformMenu() {
  return (
    <div className="absolute left-0 top-full z-50 w-full rounded-b-[36px] bg-white shadow-2xl">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[0.95fr_1.25fr_0.8fr] gap-10 px-9 py-8">

        {/* LEFT COLUMN */}
        <div className="border-r border-gray-200 pr-10">

          {/* Add content here */}
          {/* LEFT COLUMN */}
<div className="border-r border-gray-200 pr-6">

  {/* Heading */}
  <div className="mb-6 flex items-start justify-between">
    <h2 className="max-w-[320px] text-[24px] font-medium leading-[40px] tracking-[-0.03em] text-[#101111]">
      Agentic Marketing
      <br />
      Platform
    </h2>

    <ChevronRight
      size={34}
      strokeWidth={1.8}
      className="mt-2 text-[#101111]"
    />
  </div>

  {/* Ad Studio */}
  <div className="group mb-3 flex cursor-pointer gap-2">

    <div className="mt-1">
      <Megaphone
        size={24}
        strokeWidth={1.8}
        className="text-[#101111]"
      />
    </div>

    <div>
      <h3 className="mb-1 text-[15px] font-medium text-[#101111] group-hover:text-black">
        Ad Studio
      </h3>

      <p className="max-w-[240px] text-[16px] leading-7 text-[#6e6e73]">
        Create and launch winning ads at scale,
        all backed by data
      </p>
    </div>

  </div>

  {/* Lifecycle Studio */}
  <div className="group mb-3 flex cursor-pointer gap-2">

    <div className="mt-1">
      <Send
        size={24}
        strokeWidth={1.8}
        className="text-[#101111]"
      />
    </div>

    <div>

      <div className="mb-2 flex items-center gap-1">

        <h3 className="text-[15px] font-medium text-[#101111]">
          Lifecycle Studio
        </h3>

        <span className="rounded-full bg-[#7266FF] px-2 py-1 text-[13px] font-semibold text-white">
          New
        </span>

      </div>

      <p className="max-w-[340px] text-[16px] leading-7 text-[#6e6e73]">
        Launch on-brand,
        personalized campaigns in minutes
      </p>

    </div>

  </div>

  {/* Label */}
  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[2px] text-[#6e6e73]">
    AMP FEATURES
  </p>

  {/* Content Assembly */}
  <div className="group mb-3 flex cursor-pointer gap-2">

    <div className="mt-1">
      <Sparkles
        size={24}
        strokeWidth={1.8}
      />
    </div>

    <div>

      <h3 className="mb-2 text-[18px] font-medium">
        Content Assembly
      </h3>

      <p className="max-w-[340px] text-[16px] leading-7 text-[#6e6e73]">
        Create infinite content using your
        existing assets and brand guidelines
      </p>

    </div>

  </div>

  {/* AI Decisioning */}
  <div className="group flex cursor-pointer gap-2">

    <div className="mt-1">
      <BrainCircuit
        size={18}
        strokeWidth={1.8}
      />
    </div>

    <div>

      <h3 className="mb-2 text-[18px] font-medium">
        AI Decisioning
      </h3>

      <p className="max-w-[240px] text-[16px] leading-7 text-[#6e6e73]">
        Deliver 1:1 experiences at scale
        using reinforcement learning
      </p>

    </div>

  </div>

</div>

        </div>

        {/* MIDDLE COLUMN */}
        <div>
        {/* MIDDLE COLUMN */}
<div>

  {/* Heading */}
  <div className="mb-3 flex items-center gap-3">
    <h2 className="text-[34px] font-medium tracking-[-0.03em] text-[#101111]">
      Composable CDP
    </h2>

    <ChevronRight
      size={30}
      strokeWidth={1.8}
      className="mt-1"
    />
  </div>

  {/* Grid */}
  <div className="grid grid-cols-2 gap-x-6 gap-y-6">

    {/* Customer Studio */}
    <div className="group flex cursor-pointer gap-2">
      <UserSquare2
        size={24}
        strokeWidth={1.8}
        className="mt-1"
      />

      <div>
        <h3 className="mb-2 text-[18px] font-medium text-[#101111]">
          Customer Studio
        </h3>

        <p className="text-[16px] leading-7 text-[#6e6e73]">
          Build audiences
        </p>
      </div>
    </div>

    {/* Reverse ETL */}
    <div className="group flex cursor-pointer gap-2">
      <Database
        size={24}
        strokeWidth={1.8}
        className="mt-1"
      />

      <div>
        <h3 className="mb-2 text-[18px] font-medium text-[#101111]">
          Reverse ETL
        </h3>

        <p className="text-[16px] leading-7 text-[#6e6e73]">
          Sync data
        </p>
      </div>
    </div>

    {/* Identity Resolution */}
    <div className="group flex cursor-pointer gap-2">
      <ScanSearch
        size={24}
        strokeWidth={1.8}
        className="mt-1"
      />

      <div>
        <h3 className="mb-2 text-[18px] font-medium text-[#101111]">
          Identity Resolution
        </h3>

        <p className="text-[16px] leading-7 text-[#6e6e73]">
          Stitch users together
        </p>
      </div>
    </div>

    {/* Hightouch Events */}
    <div className="group flex cursor-pointer gap-2">
      <CalendarClock
        size={24}
        strokeWidth={1.8}
        className="mt-1"
      />

      <div>
        <h3 className="mb-2 text-[18px] font-medium text-[#101111]">
          Hightouch Events
        </h3>

        <p className="text-[16px] leading-7 text-[#6e6e73]">
          Collect data
        </p>
      </div>
    </div>

    {/* Real-time Personalization */}
    <div className="group flex cursor-pointer gap-2">
      <Clock3
        size={24}
        strokeWidth={1.8}
        className="mt-1"
      />

      <div>
        <h3 className="mb-2 text-[18px] font-medium text-[#101111]">
          Real-time Personalization
        </h3>

        <p className="text-[16px] leading-7 text-[#6e6e73]">
          Dynamic digital experiences
        </p>
      </div>
    </div>

    {/* Match Booster */}
    <div className="group flex cursor-pointer gap-2">
      <ShieldCheck
        size={24}
        strokeWidth={1.8}
        className="mt-1"
      />

      <div>
        <h3 className="mb-2 text-[18px] font-medium text-[#101111]">
          Match Booster
        </h3>

        <p className="text-[16px] leading-7 text-[#6e6e73]">
          Increase ad match rates
        </p>
      </div>
    </div>

    {/* Intelligence */}
    <div className="group flex cursor-pointer gap-2">
      <BarChart3
        size={24}
        strokeWidth={1.8}
        className="mt-1"
      />

      <div>
        <h3 className="mb-2 text-[18px] font-medium text-[#101111]">
          Intelligence
        </h3>

        <p className="text-[16px] leading-7 text-[#6e6e73]">
          Analyze campaigns
        </p>
      </div>
    </div>

  </div>

</div>
          {/* Add content here */}

        </div>

        {/* RIGHT COLUMN */}
        <div className="rounded-[34px] bg-[#f5f5f5] p-1">

          {/* Add content here */}
          {/* RIGHT COLUMN */}
<div className="rounded-[34px] bg-[#F6F6F6] px-10 py-1">

  {/* Label */}
  <p className="mb-5 text-[11px] font-semibold uppercase tracking-[2px] text-[#6E6E73]">
    ENTERPRISE-READY PLATFORM FEATURES
  </p>

  {/* Enterprise Security */}
  <div className="mb-3 cursor-pointer">
    <h3 className="mb-3 text-[18px] font-medium text-[#101111]">
      Enterprise-level security
    </h3>

    <p className="text-[16px] leading-7 text-[#6E6E73]">
      Enterprise-level security with
      SOC 2 Type 2 and ISO 27001
      certification
    </p>
  </div>

  {/* Observability */}
  <div className="mb-3 cursor-pointer">
    <h3 className="mb-3 text-[18px] font-medium text-[#101111]">
      Observability
    </h3>

    <p className="text-[16px] leading-7 text-[#6E6E73]">
      Full transparency and control
      to monitor and troubleshoot
    </p>
  </div>

  {/* Governance */}
  <div className="cursor-pointer">
    <h3 className="mb-3 text-[18px] font-medium text-[#101111]">
      Governance & access control
    </h3>

    <p className="text-[16px] leading-7 text-[#6E6E73]">
      Robust access control and
      change management
    </p>
  </div>

</div>

        </div>

      </div>
    </div>
  );
}