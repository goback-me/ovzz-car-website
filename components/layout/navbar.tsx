"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Browse cars" },
  { href: "/cars", label: "Categories" },
  { href: "/contact", label: "Financing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <header className="sticky top-15 z-50 m-0 relative m-5">
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center rounded-2xl border border-white/10 rounded-xl bg-black/40 backdrop-blur-md  px-4 py-2 sm:px-5 absolute left-0 right-0 w-[97%]">
        <div className="flex items-center gap-3 justify-self-start">
          <button
            type="button"
            aria-label="Open navigation"
            onClick={() => setSidebarOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-white/80" />
              <span className="h-0.5 w-5 rounded-full bg-white/80" />
              <span className="h-0.5 w-5 rounded-full bg-white/80" />
            </span>
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((item, i) => (
              <Link
                key={`${item.href}-${i}`}
                href={item.href}
                className="text-[13px] font-medium text-white/75 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/" className="justify-self-center">
          <Image
            src="/ovzz-logo.svg"
            alt="OVZZ Car Sales"
            width={160}
            height={48}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <div className="flex items-center justify-end gap-3 justify-self-end">
          <Link href="/contact" className="inline-flex sm:hidden">
            <Button className="h-10 rounded-xl px-4 text-sm">Quote</Button>
          </Link>

          <Link href="/contact" className="hidden sm:inline-flex">
            <Button className="h-10 rounded-xl px-5 text-sm">Get a quote</Button>
          </Link>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-[#0E1015] border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Image
            src="/ovzz-logo.svg"
            alt="OVZZ Car Sales"
            width={120}
            height={36}
            className="h-8 w-auto"
          />
          <button
            onClick={() => setSidebarOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Close sidebar"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-1">
          {links.map((item, i) => (
            <Link
              key={`${item.href}-${i}`}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className="px-4 py-3 text-sm font-medium text-white/75 transition rounded-lg hover:text-white hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-gradient-to-t from-[#0E1015]">
          <Link href="/contact" onClick={() => setSidebarOpen(false)} className="block">
            <Button className="w-full rounded-xl h-11 text-base">Get a quote</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
