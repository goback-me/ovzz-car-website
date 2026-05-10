import Image from "next/image";
import Link from "next/link";

import type { Car } from "@/types/car";

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatMileage(value: number) {
  return `${new Intl.NumberFormat("en-US").format(value)} mi`;
}

export function InventoryCard({ car }: { car: Car }) {
  const image = car.images?.[0]?.url || "/placeholder-car.svg";

  return (
    <article className="h-full overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_4px_20px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(17,17,17,0.10)]">
      <Link href={`/cars/${car.slug}`} className="block h-full flex flex-col">
        <div className="relative aspect-[16/10] bg-[#f0ece4] shrink-0">
          <Image
            src={image}
            alt={car.images?.[0]?.alt || car.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
            {car.condition}
          </span>
        </div>
        <div className="inventory-card-info space-y-2 sm:space-y-3 px-3 sm:px-4 pb-3 sm:pb-4 pt-2 sm:pt-3 flex-1 flex flex-col">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-[var(--text-black)]">{car.title}</h3>
          </div>
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--accent)]">
            {formatPrice(car.price)}
          </p>
          <div className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-[12px] text-[var(--text-black)]">
            <span>{formatMileage(car.mileage)}</span>
            <span className="text-white/20">|</span>
            <span>{car.fuel}</span>
            <span className="text-white/20">|</span>
            <span>{car.transmission}</span>
          </div>
          <button className="mt-auto w-full rounded-[10px] bg-[var(--primary)] px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-[var(--text-black)] transition hover:bg-[var(--accent-strong)] hover:text-white hover:cursor-pointer">
            View full details
          </button>
        </div>
      </Link>
    </article>
  );
}
