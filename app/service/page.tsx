import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    title: "Pre-Delivery Inspection",
    description: "Every listed car goes through a multi-point inspection and digital diagnostic report.",
  },
  {
    title: "Finance Assistance",
    description: "We collaborate with partner banks to provide fast approvals and clear repayment options.",
  },
  {
    title: "Warranty Plans",
    description: "Extended warranty packages available for engine, transmission, and electrical systems.",
  },
  {
    title: "Doorstep Delivery",
    description: "Get your vehicle delivered safely to your location with final handover support.",
  },
];

export default function ServicePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Service"
        title="Everything Around The Drive"
        subtitle="From inspection to post-sale support, our service stack is designed for confidence."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {services.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/10 bg-[#0E1319] p-5">
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-white/70">{item.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
