import { CarCard } from "@/components/ui/car-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Car } from "@/types/car";

export function FeaturedCars({ cars }: { cars: Car[] }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Featured"
        title="Cars That Turn Heads"
        subtitle="Hand-picked inventory with verified records and financing support."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
