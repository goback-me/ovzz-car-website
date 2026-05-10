import { CarCard } from "@/components/ui/car-card";
import type { Car } from "@/types/car";

export function CarsGrid({ cars }: { cars: Car[] }) {
  if (cars.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#0E1319] p-8 text-center text-white/70">
        No cars match your current filters.
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
