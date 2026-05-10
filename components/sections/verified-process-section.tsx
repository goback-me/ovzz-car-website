import Image from "next/image";
import Link from "next/link";

import { InspectionList } from "@/components/home/inspection-list";
import { Button } from "@/components/ui/button";

export function VerifiedInspectionProcessSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-black/40">
              The OVZZ Verified process
            </p>
            <h2 className="text-4xl leading-tight text-black sm:text-5xl">
              We read every <span className="text-[var(--accent)]">car&apos;s story</span> before you buy it.
            </h2>
            <p className="max-w-xl text-sm text-black/60">
              Before any car is listed on OVZZ, it goes through our Car-One workshop. Not a checklist tick — a real
              mechanical evaluation by the same people who service these vehicles day in, day out.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cars">
              <Button className="h-11 rounded-xl px-5 text-sm">View OVZZ Verified cars</Button>
            </Link>
            <Link href="/service">
              <button className="h-11 rounded-xl border border-black/15 bg-white px-5 text-sm font-semibold text-black transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                Learn more about our inspection
              </button>
            </Link>
          </div>
          <div className="rounded-[20px] bg-white p-5 shadow-[0_8px_30px_rgba(17,17,17,0.07)]">
            <InspectionList />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] lg:min-h-[640px] h-full">
          <Image src="/inspection-car.webp" alt="OVZZ dealership showroom" fill className="object-cover" sizes="50vw" />
        </div>
      </div>
    </section>
  );
}