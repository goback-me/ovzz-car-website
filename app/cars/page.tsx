import { CarsPageClient } from "@/components/cars/cars-page-client";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAllCars } from "@/lib/cars";

export default async function CarsPage({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    category?: string;
    bodyType?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}) {
  const cars = await getAllCars();
  const params = await searchParams;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Inventory"
        title="All Cars"
        subtitle="Filter by make, model, price, body type, and condition to find your next car."
      />
      <div className="mt-8">
        <CarsPageClient
          cars={cars}
          initialFilters={{
            query: params.query || "",
            category: params.category || "",
            bodyType: params.bodyType || "",
            minPrice: params.minPrice || "",
            maxPrice: params.maxPrice || "",
          }}
        />
      </div>
    </main>
  );
}
