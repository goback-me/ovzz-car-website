import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types/car";

export function CarCategoryShowcaseSection({
  categories,
}: {
  categories: Category[];
}) {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto w-full max-w-7xl rounded-[22px] bg-[var(--dark-blue-bg)] px-4 py-10 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Find the right car for your actual life</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white">
          Not sure where to start? Browse by type or budget. Every car in every category has been through our
          workshop — so you&apos;re always starting from a place of trust.
        </p>
      </div>

      <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => {
          // Use category image if available, otherwise use placeholder
          const imageUrl = category.image?.url || "/inspection-car.webp";
          const imageAlt = category.image?.alt || category.name;

          return (
            <Link
              href={`/cars?category=${encodeURIComponent(category.slug)}`}
              key={category.id}
              className="group relative overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_4px_20px_rgba(17,17,17,0.06)] transition hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(17,17,17,0.1)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f0ebe0]">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />

                <div className="absolute inset-0 flex items-end">
                  <div className="w-full bg-gradient-to-t from-black/55 to-transparent p-4">
                    <p className="text-2xl font-semibold text-white">{category.name}</p>
                    <p className="text-sm text-white/75">{category.count || 0}+ cars</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}