"use client";

import { useMemo, useState } from "react";

import { CarsFilters } from "@/components/cars/cars-filters";
import { CarsGrid } from "@/components/cars/cars-grid";
import { filterCars, type CarFilterState } from "@/lib/filter-cars";
import type { Car } from "@/types/car";

const defaultFilters: CarFilterState = {
  query: "",
  make: "",
  model: "",
  bodyType: "",
  category: "",
  condition: "",
  minPrice: "",
  maxPrice: "",
};

function uniqueValues(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export function CarsPageClient({
  cars,
  initialFilters,
}: {
  cars: Car[];
  initialFilters?: Partial<CarFilterState>;
}) {
  const [filters, setFilters] = useState<CarFilterState>({
    ...defaultFilters,
    ...initialFilters,
  });

  const options = useMemo(
    () => ({
      makes: uniqueValues(cars.map((car) => car.make)),
      models: uniqueValues(
        cars
          .filter((car) => !filters.make || car.make === filters.make)
          .map((car) => car.model)
      ),
      bodyTypes: uniqueValues(cars.map((car) => car.bodyType)),
      conditions: uniqueValues(cars.map((car) => car.condition)),
    }),
    [cars, filters.make]
  );

  const filteredCars = useMemo(() => filterCars(cars, filters), [cars, filters]);

  const setFilter = (name: keyof CarFilterState, value: string) => {
    setFilters((current) => ({
      ...current,
      [name]: value,
      ...(name === "make" ? { model: "" } : {}),
    }));
  };

  return (
    <div>
      <CarsFilters
        options={options}
        filters={filters}
        onChange={setFilter}
        onReset={() => setFilters(defaultFilters)}
      />
      <p className="mb-4 text-sm text-white/70">{filteredCars.length} cars found</p>
      <CarsGrid cars={filteredCars} />
    </div>
  );
}
