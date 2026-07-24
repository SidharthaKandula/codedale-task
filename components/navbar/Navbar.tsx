"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import MegaMenu from "@/components/MegaMenu";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-gray-200 bg-white">
        <div className=" mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-5 lg:px-20">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/Hightouch-logo_black.svg"
              alt="Hightouch"
              width={150}
              height={28}
            />
          </Link>

          {/* Desktop Navigation */}
         <nav className="hidden lg:flex items-center gap-3 text-[14px] font-light text-[#7c7c7c]">

  <Link
    href="/" className="hover:bg-gray-100 rounded-2xl px-3 py-2"
    onMouseEnter={() => setActiveMenu("platform")}
  >
    Platform
  </Link>

  <Link
    href="/" className="hover:bg-gray-100 rounded-2xl px-3 py-2"
    onMouseEnter={() => setActiveMenu("solutions")}
  >
    Solutions
  </Link>

  <Link
    href="/" className="hover:bg-gray-100 rounded-2xl px-3 py-2"
    onMouseEnter={() => setActiveMenu("integrations")}
  >
    Integrations
  </Link>

  <Link
    href="/" className="hover:bg-gray-100 rounded-2xl px-3 py-2"
    onMouseEnter={() => setActiveMenu("customers")}
  >
    Customers
  </Link>

  <Link
    href="/" className="hover:bg-gray-100 rounded-2xl px-3 py-2"
    onMouseEnter={() => setActiveMenu("resources")}
  >
    Resources
  </Link>

  <Link
    href="/" className="hover:bg-gray-100 rounded-2xl px-3 py-2"
    onMouseEnter={() => setActiveMenu(null)}
  >
    Pricing
  </Link>

</nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="rounded-2xl border border-gray-300 px-5 py-2.5 text-[15px]">
              Log in
            </button>

            <button className="flex items-center gap-2 rounded-2xl bg-[#242021] px-5 py-2.5 text-white hover:bg-gray-600">
              Get a demo
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <Menu size={28} />
          </button>

        </div>
      </header>
      {/* Desktop Mega Menu */}
<div
  className="relative hidden lg:block"
  onMouseLeave={() => setActiveMenu(null)}
>
  <MegaMenu activeMenu={activeMenu} />
</div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">

          {/* Top */}
          <div className="flex items-center justify-between p-5">
            <Image
              src="/Hightouch-logo_black.svg"
              alt="Hightouch"
              width={150}
              height={28}
              priority
              loading="eager"
            />

            <button
              onClick={() => setOpen(false)}
              className="rounded-xl border p-2"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-6 flex-1">
           <Link
              href="/"
              onMouseEnter={() => setActiveMenu("platform")}
            >
              Platform
            </Link>

            <Link
              href="/"
              onMouseEnter={() => setActiveMenu("solutions")}
            >
              Solutions
            </Link>

            <Link
              href="/"
              onMouseEnter={() => setActiveMenu("integrations")}
            >
              Integrations
            </Link>

            <Link
              href="/"
              onMouseEnter={() => setActiveMenu("customers")}
            >
              Customers
            </Link>

            <Link
              href="/"
              onMouseEnter={() => setActiveMenu("resources")}
            >
              Resources
            </Link>

            <Link href="/">
              Pricing
            </Link>
          </nav>
          <div
  onMouseLeave={() => setActiveMenu(null)}
>
  
</div>

          {/* Bottom Buttons */}
          <div className="border-t p-4 flex gap-3">
            <button className="flex-1 rounded-full border py-3">
              Log in
            </button>

            <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#242021] py-3 text-white">
              Get a demo
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}