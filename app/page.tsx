import { BrandStrip } from "@/components/home/brand-strip";
import { CarCategoryShowcaseSection } from "@/components/sections/car-category-showcase-section";
import { CarValuationSection } from "@/components/sections/car-valuation-section";
import { CustomerReviewsSection } from "@/components/sections/customer-reviews-section";
import { FeaturedCarsShowcaseSection } from "@/components/sections/featured-cars-showcase-section";
import { FinanceOptionsSection } from "@/components/sections/finance-options-section";
import { HeroBannerSection } from "@/components/sections/hero-banner-section";
import { TrustHighlightsSection } from "@/components/sections/trust-highlights-section";
import { VehicleRequestSection } from "@/components/sections/vehicle-request-section";
import { VerifiedInspectionProcessSection } from "@/components/sections/verified-process-section";
import { getAllCars, getFeaturedCars, getHomeInventorySummary, getCategoriesWithCounts } from "@/lib/cars";

export default async function Home() {
  const [featuredCars, inventorySummary, categories] = await Promise.all([
    getFeaturedCars(),
    getHomeInventorySummary(),
    getCategoriesWithCounts(),
  ]);

  // Show featured cars first, then fill with other cars up to 6 total
  let cars = featuredCars.slice(0, 6);
  if (cars.length < 6) {
    const allCars = await getAllCars();
    const remainingSlots = 6 - cars.length;
    const additionalCars = allCars
      .filter((car) => !featuredCars.some((fc) => fc.id === car.id))
      .slice(0, remainingSlots);
    cars = [...cars, ...additionalCars];
  }

  // Get top brands from inventory
  const displayBrands = topValuesByFrequency(
    inventorySummary.map((item) => item.make),
    8,
    ["BMW", "Audi", "Mercedes", "Volkswagen"],
  );

  return (
    <main className="bg-white text-black">
      <HeroBannerSection />

      <BrandStrip />

      <TrustHighlightsSection />

      <CarCategoryShowcaseSection categories={categories} />

      <FeaturedCarsShowcaseSection cars={cars} displayBrands={displayBrands} />

      <VerifiedInspectionProcessSection />

      <CarValuationSection />

      <FinanceOptionsSection />

      <CustomerReviewsSection />

      <VehicleRequestSection />
    </main>
  );
}

function topValuesByFrequency(values: string[], limit: number, fallback: string[]): string[] {
  const counts = new Map<string, number>();

  for (const value of values) {
    if (!value) {
      continue;
    }

    counts.set(value, (counts.get(value) || 0) + 1);
  }

  const sortedValues = Array.from(counts.entries())
    .sort((left, right) => right[1] - left[1])
    .map(([value]) => value)
    .slice(0, limit);

  return sortedValues.length > 0 ? sortedValues : fallback;
}