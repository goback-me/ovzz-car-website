"use client";

import { useMemo, useState } from "react";

import { InventoryCard } from "@/components/home/inventory-card";
import type { Car } from "@/types/car";

const PRICE_RANGES = [
  { label: "Any price", min: 0, max: Infinity },
  { label: "Under $20k", min: 0, max: 20000 },
  { label: "$20k–$40k", min: 20000, max: 40000 },
  { label: "$40k+", min: 40000, max: Infinity },
];

export function FeaturedCarsShowcaseSection({ cars, displayBrands }: { cars: Car[]; displayBrands: string[] }) {
  const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGES[0].label);
  const [selectedBrand, setSelectedBrand] = useState("All brands");
  const [selectedFuel, setSelectedFuel] = useState("Any fuel");

  const [appliedFilters, setAppliedFilters] = useState({ price: PRICE_RANGES[0].label, brand: "All brands", fuel: "Any fuel" });

  const fuelOptions = ["Any fuel", "Petrol", "Diesel", "Hybrid", "Electric"];

  const filteredCars = useMemo(() => {
    const priceRange = PRICE_RANGES.find((p) => p.label === appliedFilters.price) || PRICE_RANGES[0];

    return cars.filter((car) => {
      const priceMatch = (car.price || 0) >= priceRange.min && (car.price || 0) <= priceRange.max;
      const brandMatch = appliedFilters.brand === "All brands" || car.make === appliedFilters.brand;
      const fuelMatch = appliedFilters.fuel === "Any fuel" || (car.fuel || "") === appliedFilters.fuel;
      return priceMatch && brandMatch && fuelMatch;
    });
  }, [cars, appliedFilters]);

  function handleApply() {
    setAppliedFilters({ price: selectedPrice, brand: selectedBrand, fuel: selectedFuel });
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:py-14">
      <div className="flex flex-col gap-6 lg:gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex-1">
          <h2 className="text-2xl tracking-tight text-black sm:text-3xl md:text-4xl lg:text-[3.2rem]">
            <span className="text-[var(--accent)]">Handpicked.</span> Properly checked.
          </h2>
          <p className="mt-2 max-w-xl text-xs leading-6 text-black/55 sm:text-sm md:leading-7">
            These aren&apos;t just available cars — they&apos;re cars our mechanics have signed off on. Every vehicle in
            this section has been through our workshop before it&apos;s available to buy.
          </p>
        </div>
        <div className="grid w-full lg:w-auto grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:shrink-0 lg:items-center lg:gap-3">
          <div className="flex items-start flex-col">
            <span className="mb-1 text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-black/40">Price</span>
            <div className="w-full rounded-lg border border-black/10 bg-white px-2 sm:px-4 py-1.5 sm:py-2 shadow-sm">
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-black outline-none"
              >
                {PRICE_RANGES.map((r) => (
                  <option key={r.label} value={r.label}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <span className="mb-1 text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-black/40">Brand</span>
            <div className="w-full rounded-lg border border-black/10 bg-white px-2 sm:px-4 py-1.5 sm:py-2 shadow-sm">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-black outline-none"
              >
                {["All brands", ...displayBrands].map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-start flex-col">
            <span className="mb-1 text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-black/40">Fuel</span>
            <div className="w-full rounded-lg border border-black/10 bg-white px-2 sm:px-4 py-1.5 sm:py-2 shadow-sm">
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-black outline-none"
              >
                {fuelOptions.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleApply}
            className="col-span-2 sm:col-span-1 h-8 sm:h-[47px] rounded-lg sm:rounded-xl bg-[var(--accent)] px-3 sm:px-5 text-xs sm:text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredCars.map((car) => (
          <InventoryCard key={car.id} car={car} />
        ))}
      </div>

      {/* {filteredCars.length > 0 && (
        <div className="mt-10 text-center">
          <Link href="/cars">
            <button className="h-11 rounded-xl border border-black/15 bg-white px-8 text-sm font-semibold text-black shadow-sm transition hover:bg-black hover:text-white">
              View all cars
            </button>
          </Link>
        </div>
      )} */}
    </section>
  );
}