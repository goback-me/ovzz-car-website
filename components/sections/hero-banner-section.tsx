import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroBannerSection() {
  return (
    <section className="mx-auto w-full px-4">
      <div className="relative overflow-hidden rounded-[22px] bg-[#0E1015]">
        <div className="absolute inset-0">
          <video
            src="/ovzz-car.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        <div className="relative grid gap-8 px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-10 lg:min-h-[560px] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-40 items-end">
          
          {/* Left */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl lg:text-[4.25rem] lg:tracking-[-0.03em]">
              The car you choose shouldn&apos;t keep you up at night.
            </h1>
            <p className="text-lg leading-6 text-white/65 sm:text-sm md:text-[15px] md:leading-7">
              We&apos;re not a typical dealership. We&apos;re mechanics who sell cars — which means every vehicle is
              checked by our workshop before it&apos;s listed, and serviced by the same team long after you&apos;ve
              driven it home.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/cars" className="flex-1 sm:flex-none">
                <Button className="btn-lg btn-orange w-full sm:w-auto">Browse verified cars</Button>
              </Link>
              <Link href="/contact" className="flex-1 sm:flex-none">
                <button className="btn-white btn-banner-secondary w-full sm:w-auto">Get a quote</button>
              </Link>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex lg:justify-end">
            <div className="w-full lg:max-w-[320px] rounded-xl border border-white/30 bg-white/10 p-4 sm:p-5 backdrop-blur-sm">
              <div className="space-y-2.5">
                {["Make", "Model", "Body type", "Price range"].map((field) => (
                  <input
                    key={field}
                    placeholder={field}
                    className="h-10 w-full rounded-lg border border-black/12 bg-white px-3 text-xs text-black outline-none placeholder:text-black/35 transition focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20 sm:text-sm"
                  />
                ))}
                <Button className="mt-2 h-10 w-full rounded-lg text-xs sm:text-sm">Search</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}