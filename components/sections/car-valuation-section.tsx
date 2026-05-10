"use client";

import Image from "next/image";
import { useState } from "react";

function LabeledField({ label, placeholder, name, value = "", onChange }: { label: string; placeholder: string; name?: string; value?: string; onChange?: (v: string) => void }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-black">{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-black/10 bg-white px-4 text-sm text-black outline-none placeholder:text-black/35 transition focus:border-[var(--accent)]"
      />
    </div>
  );
}

export function CarValuationSection() {
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [condition, setCondition] = useState("Excellent");

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-10 sm:px-6 lg:py-14">
      <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[240px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-full overflow-hidden rounded-[28px] order-2 lg:order-1">
          <Image src="/finance-car.webp" alt="Happy customers" fill className="object-cover" sizes="50vw" />
        </div>

        <div className="space-y-4 sm:space-y-5 order-1 lg:order-2">
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-black">What&apos;s your car actually worth?</h2>
            <p className="text-sm leading-7 text-black/55">
              Tell us about your car and we&apos;ll give you a fair, mechanic-backed valuation within 24 hours.
            </p>
          </div>

          <form
            id="valuation-form"
            onSubmit={async (e) => {
              e.preventDefault();
              if (submitting) return;
              setSubmitting(true);
              setStatusMessage("");
              const form = e.currentTarget as HTMLFormElement;
              const data = Object.fromEntries(new FormData(form).entries()) as Record<string, FormDataEntryValue>;
              data.condition = condition;
              try {
                const res = await fetch('/api/webhook', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ type: 'valuation', data }),
                });
                if (res.ok) {
                  form.reset();
                  setCondition('Excellent');
                  setStatusMessage('Thanks — we received your valuation request.');
                } else {
                  setStatusMessage('Submission failed. Please try again.');
                }
              } catch {
                setStatusMessage('Submission failed. Please try again.');
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <div className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2">
              <LabeledField name="make" label="Make" placeholder="Select make" />
              <LabeledField name="model" label="Model" placeholder="e.g. Corolla" />
              <LabeledField name="year" label="Year" placeholder="Select year" />
              <LabeledField name="mileage" label="Mileage (km)" placeholder="e.g. 45,000" />
            </div>

            <div className="mt-3 sm:mt-4">
              <p className="mb-2 text-sm font-semibold text-black">Condition</p>
              <div className="flex gap-1.5 sm:gap-2" role="radiogroup" aria-label="Condition">
                {['Excellent','Good','Fair','Poor'].map((item) => (
                  <label key={item} className={`h-10 sm:h-11 flex-1 rounded-[8px] border text-xs sm:text-sm transition ${item===condition ? 'border-[var(--accent)] bg-[var(--accent)] text-white' : 'border-black/10 bg-white text-black hover:border-[var(--accent)]'}`}>
                    <input type="radio" name="condition" value={item} checked={condition===item} onChange={() => setCondition(item)} className="sr-only" />
                    <span className="inline-flex w-full h-full items-center justify-center">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              <LabeledField name="phone" label="Your phone number" placeholder="04XX XXX XXX" />
            </div>

            <div className="mt-3 sm:mt-4">
              <button type="submit" disabled={submitting} className="w-full h-11 sm:h-12 rounded-[10px] bg-black text-white font-semibold shadow-lg hover:brightness-95 transition text-sm sm:text-base">
                {submitting ? 'Sending…' : 'Get my free valuation'}
              </button>
            </div>

            <div role="status" aria-live="polite" className="mt-2 sm:mt-3 text-xs sm:text-sm text-black/60">{statusMessage}</div>
          </form>

          <p className="text-center text-sm sm:text-base text-black/60">No obligation. Valuation within 24 hours. We come to you.</p>
        </div>
      </div>
    </section>
  );
}