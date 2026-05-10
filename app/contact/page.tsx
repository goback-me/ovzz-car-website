import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let Us Find Your Next Car"
        subtitle="Share what you need and our consultants will curate matching options quickly."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0E1319] p-6 text-sm text-white/75">
          <p className="text-lg font-semibold text-white">Visit Showroom</p>
          <p className="mt-3">420 Dealer Avenue, Austin, TX</p>
          <p className="mt-2">+1 (555) 874-2233</p>
          <p className="mt-2">sales@ovzzmotors.com</p>
          <p className="mt-4">Mon - Fri: 9:00 AM - 8:00 PM</p>
          <p>Saturday: 10:00 AM - 6:00 PM</p>
        </div>
        <form className="rounded-2xl border border-white/10 bg-[#0E1319] p-6">
          <div className="space-y-3">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input placeholder="Phone" />
            <textarea
              className="min-h-28 w-full rounded-lg border border-white/15 bg-[#11161D] px-3 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-[var(--accent)]"
              placeholder="What are you looking for?"
            />
            <Button type="submit" className="w-full">Send Message</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
