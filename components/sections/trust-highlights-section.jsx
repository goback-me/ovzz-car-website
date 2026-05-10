import Image from "next/image";

export function TrustHighlightsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)]">About Us</p>
          <h2 className="text-4xl leading-[1.1] text-black sm:text-5xl">
            <span style={{ color: "var(--accent)" }}>Instant</span>,{" "}
            <span style={{ color: "var(--accent)" }}>accurate</span>, and{" "}
            <span style={{ color: "var(--accent)" }}>reliable</span> reports of any vehicle you want at your fingertips
          </h2>
        </div>
        <div className="space-y-5 lg:pt-10">
          <div className="flex -space-x-3">
            {[
              "bg-gradient-to-br from-orange-300 to-orange-500",
              "bg-gradient-to-br from-orange-500 to-orange-700",
              "bg-gradient-to-br from-slate-400 to-slate-600",
            ].map((grad, i) => (
              <div
                key={grad}
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white shadow-md ${grad}`}
              >
                {["M", "J", "A"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm leading-7 text-black/60">
            Our professional team help you to make an informed decision before bidding on any vehicle. Every car is
            inspected by our in-house mechanics before it&apos;s listed.
          </p>
        </div>
      </div>

      {/* Mobile layout: 2 cards → image → 2 cards */}
      <div className="mt-10 lg:hidden">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(17,17,17,0.10)]">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E1015]">
              <Image src="/inspection.svg" alt="Inspection" width={18} height={18} />
            </div>
            <p className="text-sm font-semibold leading-snug text-black">Inspected by our own mechanics</p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(17,17,17,0.10)]">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E1015]">
              <Image src="/after-sales.svg" alt="After-sales Support" width={18} height={18} />
            </div>
            <p className="text-sm font-semibold leading-snug text-black">After-sales support at OVZZ Car Sales</p>
          </div>
        </div>

        <div className="relative w-full rounded-[28px] overflow-hidden bg-gray-100" style={{ aspectRatio: "16/9" }}>
          <Image src="/about-car.webp" alt="About OVZZ" fill className="object-contain" sizes="100vw" />
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(17,17,17,0.10)]">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E1015]">
              <Image src="/service-history.svg" alt="Service History" width={18} height={18} />
            </div>
            <p className="text-sm font-semibold leading-snug text-black">Full service history on every car</p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(17,17,17,0.10)]">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E1015]">
              <Image src="/pricing.svg" alt="Transparent Pricing" width={18} height={18} />
            </div>
            <p className="text-sm font-semibold leading-snug text-black">Transparent pricing. Always.</p>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="mt-10 hidden lg:block">
        <div className="relative w-full rounded-[28px] overflow-hidden bg-white" style={{ paddingBottom: "45%" }}>
          
          {/* Image */}
          <div className="absolute inset-0">
            <Image
              src="/about-car.webp"
              alt="About OVZZ"
              fill
              className="object-contain object-center"
              sizes="100vw"
            />
          </div>

          {/* Top Left */}
          <div className="absolute left-10 top-[88px] max-w-[190px] rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(17,17,17,0.10)] z-10">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E1015]">
              <Image src="/inspection.svg" alt="Inspection" width={18} height={18} />
            </div>
            <p className="text-sm font-semibold leading-snug text-black">Inspected by our own mechanics</p>
          </div>

          {/* Top Right */}
          <div className="absolute right-10 top-[62px] max-w-[220px] rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(17,17,17,0.10)] z-10">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E1015]">
              <Image src="/after-sales.svg" alt="After-sales Support" width={18} height={18} />
            </div>
            <p className="text-sm font-semibold leading-snug text-black">After-sales support at OVZZ Car Sales</p>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-8 left-[130px] max-w-[220px] rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(17,17,17,0.10)] z-10">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E1015]">
              <Image src="/service-history.svg" alt="Service History" width={18} height={18} />
            </div>
            <p className="text-sm font-semibold leading-snug text-black">Full service history on every car</p>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-6 right-10 max-w-[200px] rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(17,17,17,0.10)] z-10">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0E1015]">
              <Image src="/pricing.svg" alt="Transparent Pricing" width={18} height={18} />
            </div>
            <p className="text-sm font-semibold leading-snug text-black">Transparent pricing. Always.</p>
          </div>

        </div>
      </div>

    </section>
  );
}