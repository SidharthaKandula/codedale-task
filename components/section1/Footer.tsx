"use client";
import {ChevronRight} from "lucide-react";

export default function Footer() {
    
  return (
    <footer
  id="footer"
  className="bg-[#151313] pt-16 pb-16 text-white lg:pt-24"
>
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:py-24">
  <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
    Get a personalized demo
  </h1>

  <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg lg:text-xl">
    Meet with an implementation expert to learn how Hightouch can help you
    achieve your top business priorities.
  </p>

  <button className="mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200 sm:text-base">
    Get a demo
    <ChevronRight size={18} />
  </button>
</div>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Platform */}
          <div>
            <h3 className="mb-6 text-lg font-semibold lg:text-xl">Platform</h3>

            <ul className="space-y-2 text-gray-400">
              <li>Composable CDP</li>
              <li>Agentic Marketing Platform</li>
              <li>Ad Studio</li>
              <li>Lifecycle Studio</li>
              <li>Content Assembly</li>
              <li>AI Decisioning</li>
              <li>Reverse ETL</li>
              <li>Customer Studio</li>
              <li>Identity Resolution</li>
              <li>Hightouch Events</li>
              <li>Real-time Personalization</li>
              <li>Match Booster</li>
              <li>Intelligence</li>
              <li>Observability</li>
              <li>Extensions</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-6 text-lg font-semibold lg:text-xl">Solutions</h3>

            <p className="mb-4 text-xs font-bold uppercase text-white">
              By Team
            </p>

            <ul className="space-y-2 text-gray-400">
              <li>Marketing</li>
              <li>Advertising</li>
              <li>Data</li>
              <li>Operations</li>
            </ul>

            <p className="mt-10 mb-4 text-xs font-bold uppercase text-white">
              By Industry
            </p>

            <ul className="space-y-2 text-sm leading-6 text-gray-400">
              <li>Retail & eCommerce</li>
              <li>Financial Services</li>
              <li>Travel & Hospitality</li>
              <li>Media & Entertainment</li>
              <li>Quick Service Restaurants</li>
              <li>Healthcare</li>
              <li>B2B SaaS</li>
              
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-semibold lg:text-xl">Resources</h3>

           <ul className="space-y-2 text-sm leading-6 text-gray-400">
              <li>Docs</li>
              <li>Changelog</li>
              <li>Integrations</li>
              <li>Blog</li>
              <li>Playbooks</li>
              <li>Whitepapers & Guides</li>
              <li>Compare CDPs</li>
              <li>CDP Industries Hub</li>
              <li>Composable CDP Hub</li>
              <li>SQL Dictionary</li>
              <li>Content Assembly</li>
              <li>AI Decisioning</li>
              <li>Reverse ETL</li>
              <li>Customer Studio</li>
              <li>Identity Resolution</li>
              <li>Hightouch Events</li>
              <li>Real-time Personalization</li>
              <li>Match Booster</li>
              <li>Intelligence</li>
              <li>Observability</li>
              <li>Extensions</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-lg font-semibold lg:text-xl">Company</h3>

          <ul className="space-y-3 text-sm leading-6 text-gray-400">
              <li>Careers</li>
              <li>About us</li>
              <li>Customers</li>
              <li>Pricing</li>
              <li>Press</li>
              <li>Events</li>
              <li>Solutions partners</li>
            </ul>

            <h4 className="mt-10 mb-4 text-xs font-bold uppercase">
              Social
            </h4>

            
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-lg font-semibold lg:text-xl">
              Legal & Privacy
            </h3>

           <ul className="space-y-3 text-sm leading-6 text-gray-400">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms of Service</li>
              <li>Platform Privacy Notice</li>
              <li>Cookie Preferences</li>
              <li>Your Privacy Choices</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
<div className="mx-auto mt-20 max-w-[1400px] border-t border-white/10 px-4 pt-10 sm:px-6 lg:px-20">
  {/* Top Row */}
  <div className="flex flex-col items-center justify-between gap-6 text-center text-xs text-gray-400 lg:flex-row lg:text-left">
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
      <span className="text-white">All systems normal</span>
    </div>

    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 010 18" />
        <path d="M12 3a15 15 0 000 18" />
      </svg>

      <span>English</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>

    <p>Hightouch © 2026</p>
  </div>

  {/* Disclaimer */}
  <div className="mt-8 space-y-4 text-sm leading-7 text-gray-400 lg:text-[14px] lg:leading-8">
    <p>
      Gartner, Magic Quadrant for Customer Data Platforms, Lizzy Foo Kune,
      Rachel Dooley, Suzanne White, Benjamin Bloom, Audrey Brosnan,
      26 January 2026.
    </p>

    <p>
      GARTNER is a registered trademark and service mark of Gartner, Inc.
      and/or its affiliates in the U.S. and internationally and is used herein
      with permission. All rights reserved.
    </p>

    <p>
      Magic Quadrant is a registered trademark of Gartner, Inc. and/or its
      affiliates and is used herein with permission. All rights reserved.
    </p>

    <p>
      Gartner does not endorse any vendor, product or service depicted in its
      research publications, and does not advise technology users to select only
      those vendors with the highest ratings or other designation. Gartner
      research publications consist of the opinions of Gartner's research
      organization and should not be construed as statements of fact. Gartner
      disclaims all warranties, expressed or implied, with respect to this
      research, including any warranties of merchantability or fitness for a
      particular purpose.
    </p>
  </div>
</div>
    </footer>
  );
}