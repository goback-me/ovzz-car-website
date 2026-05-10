"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="bg-[var(--primary)] text-white p-4 sm:p-6">
      <div className="mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 bg-[var(--secondary)] rounded-[22px]">
        {/* Main footer content */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 py-10 sm:py-14 md:py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_2fr]">
          {/* Left: Logo and description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/ovzz-logo.svg"
                alt="OVZZ Car Sales"
                width={240}
                height={80}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
              />
            </Link>
            <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-white/70 max-w-xs">
              Brisbane&apos;s mechanic-backed used car dealership. Every vehicle inspected, fairly priced, and supported long after you drive away.
            </p>
          </div>

          {/* Right: Three columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 col-span-1 sm:col-span-2 lg:col-span-1">
            {/* Browse column */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/90 mb-3 sm:mb-4">Browse</p>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <Link href="/cars" className="block text-white/70 hover:text-white transition">All cars</Link>
                <Link href="/cars?category=suv" className="block text-white/70 hover:text-white transition">SUVs</Link>
                <Link href="/cars?category=sedan" className="block text-white/70 hover:text-white transition">Sedan</Link>
                <Link href="/cars?category=luxury" className="block text-white/70 hover:text-white transition">Luxury</Link>
                <Link href="/cars?price=under-20k" className="block text-white/70 hover:text-white transition">Under $20k</Link>
                <Link href="/cars?category=electric" className="block text-white/70 hover:text-white transition">Electric</Link>
              </div>
            </div>

            {/* Quick links column */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/90 mb-3 sm:mb-4">Quick links</p>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <Link href="/about" className="block text-white/70 hover:text-white transition">About us</Link>
                <Link href="/how-it-works" className="block text-white/70 hover:text-white transition">How it works</Link>
                <Link href="/financing" className="block text-white/70 hover:text-white transition">Financing</Link>
                <Link href="/trade-in" className="block text-white/70 hover:text-white transition">Trade in</Link>
                <Link href="/service" className="block text-white/70 hover:text-white transition">Car-One Auto</Link>
                <Link href="/contact" className="block text-white/70 hover:text-white transition">Contact us</Link>
              </div>
            </div>

            {/* Contact Info column - hidden on mobile, visible on desktop */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/90 mb-3 sm:mb-4">Contact Info</p>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/70 mb-4 sm:mb-6">
                <p>12 1244 21658</p>
                <p>info@ovzzcarsales.com</p>
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/90 mb-2 sm:mb-3">Connect with us</p>
              <div className="flex gap-3 sm:gap-4">
                <a href="#" aria-label="Facebook" className="text-white/70 hover:text-[var(--accent)] transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-white/70 hover:text-[var(--accent)] transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 11.511c.165 1.441-.028 2.919-.513 4.223-.704 1.944-2.086 3.318-3.779 3.802-1.266.35-2.619.35-3.885 0-1.693-.484-3.075-1.858-3.779-3.802-.485-1.304-.678-2.782-.513-4.223.269-2.345 1.47-4.227 3.182-5.278 1.088-.663 2.323-.876 3.607-.876s2.519.213 3.607.876c1.712 1.051 2.913 2.933 3.182 5.278z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-[var(--accent)] transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-white/70 hover:text-[var(--accent)] transition">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.856 1.51 5 5 0 00-8.646 3.653 5 5 0 00.126 1.144 14.048 14.048 0 01-10.228-5.144 5 5 0 001.551 6.573 5.002 5.002 0 01-2.265-.616v.06a5 5 0 004.008 4.905 5 5 0 01-2.258.085 5.007 5.007 0 004.671 3.477 10.002 10.002 0 01-6.177 2.136c-.39 0-.779-.023-1.17-.067a14.047 14.047 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between py-4 sm:py-6 text-xs sm:text-sm text-white/60 gap-3 sm:gap-4">
          <p>Inspected and supported by Car-One Automotive. Hendra & Woolloongabba, Brisbane QLD</p>
          <div className="flex gap-6">
            <Link href="/disclaimer" className="hover:text-white transition">Disclaimer</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
