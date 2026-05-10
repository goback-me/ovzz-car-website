import Link from "next/link";

import { SectionHeading } from "@/components/ui/section-heading";

export function Categories({ categories }: { categories: string[] }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <SectionHeading
        eyebrow="Categories"
        title="Browse by Body Type"
        subtitle="Quick shortcuts to your preferred drive style."
      />
      <div className="mt-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/cars?bodyType=${encodeURIComponent(category)}`}
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}
