"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useState,useEffect } from "react";
import MegaMenu from "@/components/MegaMenu";


const menus = [
  { key: "platform", label: "Platform" },
  { key: "solutions", label: "Solutions" },
  { key: "integrations", label: "Integrations" },
  { key: "customers", label: "Customers" },
  { key: "resources", label: "Resources" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [footerVisible, setFooterVisible] = useState(false);
  useEffect(() => {
  const handleFooter = (e: Event) => {
    const event = e as CustomEvent<boolean>;
    setFooterVisible(event.detail);
  };

  window.addEventListener("footer-visible", handleFooter);

  return () => {
    window.removeEventListener("footer-visible", handleFooter);
  };
}, []);
  return (
    <>
      {/* HEADER */}
      <header
  className={`sticky top-0 z-[100] border-b transition-all duration-300 ${
    footerVisible
      ? "bg-[#151313] border-[#2c2c2c]"
      : "bg-white border-gray-200"
  }`}
>
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 lg:px-20">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/Hightouch-logo_black.png"
              alt="Logo"
              width={150}
              height={30}
              border-none
              
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-2 text-[14px]"
            onMouseLeave={() => setActiveMenu(null)}
          >
            {menus.map((menu) => (
              <button
                key={menu.key}
                onMouseEnter={() => setActiveMenu(menu.key)}
                className={`rounded-full px-4 py-2 transition ${
                  activeMenu === menu.key
                    ? "bg-gray-100 text-black"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {menu.label}
              </button>
            ))}

            <Link
              href="/"
              className="rounded-full px-4 py-2 text-gray-600 hover:bg-gray-100"
              onMouseEnter={() => setActiveMenu(null)}
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="rounded-full border border-gray-300 px-5 py-2 text-gray-700">
              Log in
            </button>

            <button className="flex items-center gap-2 rounded-full bg-black px-5 py-2 text-white">
              Get a demo
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-gray-900"
            onClick={() => {
              setOpen(true);
              setActiveMenu(null);
            }}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Desktop Mega Menu */}
      <div
        className="hidden lg:block relative"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <MegaMenu activeMenu={activeMenu} />
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[200] bg-white overflow-y-auto text-gray-900">

          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b px-5 py-5">

            <Image
              src="/Hightouch-logo_black.svg"
              alt="Logo"
              width={150}
              height={30}
            />

            <button
              onClick={() => {
                setOpen(false);
                setActiveMenu(null);
              }}
              className="rounded-lg border p-2"
            >
              <X size={22} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="py-3">

            {menus.map((menu) => (
              <div
                key={menu.key}
                className="border-b"
              >
                <button
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === menu.key ? null : menu.key
                    )
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-lg font-medium text-gray-900"
                >
                  {menu.label}

                  <ChevronDown
                    className={`transition-transform duration-300 text-gray-900 ${
                      activeMenu === menu.key
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {activeMenu === menu.key && (
                  <div className="bg-gray-50 px-5 py-4">
                    <MegaMenu activeMenu={activeMenu} />
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/"
              className="block border-b px-6 py-5 text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
          </div>
                    {/* Bottom Buttons */}
          <div className="border-t p-5 flex gap-3">
            <button className="flex-1 rounded-full border border-gray-300 py-3 font-medium">
              Log in
            </button>

            <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#242021] py-3 font-medium text-white">
              Get a demo
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}