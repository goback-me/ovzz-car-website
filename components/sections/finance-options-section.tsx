import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FinanceOptionsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-5">
          <h2 className="text-4xl leading-tight text-black sm:text-5xl">Drive now. Pay your way.</h2>
          <p className="max-w-lg text-sm leading-7 text-black/55">
            Know your number before you walk in. Our finance options are straightforward — no jargon, no bait-and-
            switch rates, no pressure to decide on the day. Whether you want low weekly repayments or a quick payout,
            we&apos;ll find a structure that works for your life — not just our bottom line.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact">
              <Button className="h-11 rounded-xl px-5 text-sm">Talk to us about finance</Button>
            </Link>
            <Link href="/service">
              <button className="h-11 rounded-xl border border-black/15 bg-white px-5 text-sm font-semibold text-black transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
                Apply for financing
              </button>
            </Link>
          </div>
        </div>
        <div className="relative min-h-[400px] overflow-hidden rounded-[28px] h-full">
          <Image src="/pay-your-way.webp" alt="Happy customers receiving car keys" fill className="object-cover" sizes="50vw" />
        </div>
      </div>
    </section>
  );
}