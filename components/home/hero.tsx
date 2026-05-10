import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,0,0.26),transparent_46%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_36%),#090D12]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pt-28 sm:pt-32 md:pt-36 lg:pt-24 pb-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
  <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Premium Selection
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
            The car you choose should keep you up at night.
          </h1>
          <p className="max-w-lg text-base text-white/70">
            Explore certified cars with clean history, transparent pricing, and doorstep support.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/cars">
              <Button>Browse Cars</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Book a Visit</Button>
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/15 bg-[#101720]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <h2 className="mb-4 text-lg font-semibold text-white">Find Your Match</h2>
          <form action="/cars" className="space-y-3">
            <Input name="query" placeholder="Search by make or model" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input name="minPrice" placeholder="Min Price" type="number" min={0} />
              <Input name="maxPrice" placeholder="Max Price" type="number" min={0} />
            </div>
            <Button type="submit" className="w-full">Search Inventory</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
