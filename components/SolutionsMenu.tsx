import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function SolutionsMenu() {
  return (
    <div className="absolute left-0 top-0 z-50 w-full rounded-b-[40px] bg-white shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
      <div className="mx-auto grid max-w-[1450px] grid-cols-[0.9fr_1fr_1fr_1fr_0.9fr]">
        
  <div className="w-[1400px] rounded-2xl border border-gray-200 bg-white px-10 py-8">
    <div className="grid grid-cols-5 gap-10">

      {/* BY TEAM */}
      <div className="border-r border-gray-200 pr-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
          By Team
        </p>

        <div className="space-y-4 text-[18px] font-medium text-gray-900">
          <p>Marketing</p>
          <p>Advertising</p>
          <p>Data</p>
          <p>Operations</p>
        </div>
      </div>

      {/* BY INDUSTRY */}
      <div className="border-r border-gray-200 pr-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
          By Industry
        </p>

        <div className="space-y-4 text-[18px] font-medium text-gray-900">
          <p>Retail & eCommerce</p>
          <p>Financial Services</p>
          <p>Travel & Hospitality</p>
          <p>Media & Entertainment</p>
          <p>Quick Service Restaurants</p>
          <p>Healthcare</p>
          <p>B2B SaaS</p>
        </div>
      </div>

      {/* FOR MARKETING */}
      <div className="border-r border-gray-200 pr-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
          For Marketing
        </p>

        <div className="space-y-4 text-[18px] font-medium text-gray-900">
          <p>Audience segmentation</p>
          <p>Journey orchestration</p>
          <p>Real-time personalization</p>
          <p>Profile enrichment</p>
          <p>Customer 360</p>
        </div>
      </div>

      {/* FOR ADVERTISING */}
      <div className="border-r border-gray-200 pr-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
          For Advertising
        </p>

        <div className="space-y-4 text-[18px] font-medium text-gray-900">
          <p>Audience targeting</p>
          <p>Audience suppression</p>
          <p>Conversion tracking</p>
          <p>Match rate boosting</p>
        </div>
      </div>

      {/* FEATURED */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
          Featured
        </p>

        <img
          src="/37110b9452fff8098d4a8e4c67b5b8e9889f7e6a-2400x1254.webp"
          alt="Featured"
          className="mb-5 h-32 w-full rounded-xl object-cover"
        />

        <p className="text-[15px] leading-7 text-gray-600">
          Learn about the benefits of a Composable CDP and how it compares
          to a traditional CDP solution.
        </p>

        <button className="mt-3 flex items-center gap-3 font-semibold">
          Learn more
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
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