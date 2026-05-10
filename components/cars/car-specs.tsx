import type { Car } from "@/types/car";

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export function CarSpecs({ car }: { car: Car }) {
  const specs = [
    ["Price", formatPrice(car.price)],
    ["Year", String(car.year)],
    ["Mileage", `${formatNumber(car.mileage)} mi`],
    ["Body Type", car.bodyType],
    ["Condition", car.condition],
    ["Transmission", car.transmission],
    ["Fuel", car.fuel],
    ["Make / Model", `${car.make} ${car.model}`],
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0E1319] p-5">
      <h2 className="mb-4 text-lg font-semibold text-white">Vehicle Specs</h2>
      <dl className="space-y-3 text-sm">
        {specs.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-3 border-b border-white/5 pb-2">
            <dt className="text-white/60">{label}</dt>
            <dd className="font-medium text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
