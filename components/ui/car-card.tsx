import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
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

export function CarCard({ car }: { car: Car }) {
  const image = car.images?.[0]?.url || "/placeholder-car.svg";

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E1319] shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
      <Link href={`/cars/${car.slug}`} className="block">
        <div className="relative aspect-[16/10] bg-[#161B22]">
          <Image
            src={image}
            alt={car.images?.[0]?.alt || car.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute left-3 top-3">
            <Badge className="border-[var(--accent)]/40 bg-[var(--accent)]/20 text-[var(--accent-soft)]">
              {car.condition}
            </Badge>
          </div>
        </div>
      </Link>
      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{car.title}</h3>
            <p className="text-sm text-white/65">
              {car.year} • {car.make} {car.model}
            </p>
          </div>
          <p className="text-lg font-semibold text-[var(--accent)]">{formatPrice(car.price)}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-white/70">
          <Badge>{car.bodyType}</Badge>
          <Badge>{car.transmission}</Badge>
          <Badge>{car.fuel}</Badge>
          <Badge>{formatMileage(car.mileage)}</Badge>
        </div>
      </div>
    </article>
  );
}
