import { notFound } from "next/navigation";

import { CarGallery } from "@/components/cars/car-gallery";
import { CarSpecs } from "@/components/cars/car-specs";
import { InquiryForm } from "@/components/cars/inquiry-form";
import { getCarBySlug } from "@/lib/cars";

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = await getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{car.condition}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{car.title}</h1>
            <p className="mt-2 text-white/70">{car.year} • {car.make} {car.model}</p>
          </div>
          <CarGallery images={car.images} title={car.title} />
          <div className="rounded-2xl border border-white/10 bg-[#0E1319] p-5">
            <h2 className="mb-3 text-lg font-semibold text-white">Description</h2>
            <p className="text-sm leading-7 text-white/75">{car.description}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0E1319] p-5">
            <h2 className="mb-3 text-lg font-semibold text-white">Features</h2>
            <ul className="grid gap-2 text-sm text-white/75 sm:grid-cols-2">
              {car.features?.map((feature) => (
                <li key={feature} className="rounded-lg bg-white/5 px-3 py-2">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="space-y-4">
          <CarSpecs car={car} />
          <InquiryForm carId={car.id} carTitle={car.title} />
        </aside>
      </div>
    </main>
  );
}
