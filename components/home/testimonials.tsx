import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    name: "Amelia K.",
    quote:
      "The listing matched the car exactly. No hidden surprises, and the delivery timeline was perfect.",
  },
  {
    name: "Ravi M.",
    quote:
      "Smooth financing process and detailed walkthrough. It felt premium from first call to handover.",
  },
  {
    name: "Noah T.",
    quote:
      "Their team helped compare trims honestly. I got the right car for my family, not just the expensive one.",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Drivers Say"
        subtitle="Real stories from recent buyers."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-2xl border border-white/10 bg-[#0D131B] p-5">
            <p className="text-sm leading-7 text-white/75">“{item.quote}”</p>
            <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
