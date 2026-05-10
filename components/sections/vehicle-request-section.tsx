"use client";

import Image from "next/image";
import { useState } from "react";

function LabeledFieldLight({ label, placeholder, name, value = "", onChange }: { label: string; placeholder: string; name?: string; value?: string; onChange?: (v: string) => void }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.1em] text-black/70">{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="h-11 w-full rounded-[12px] border border-transparent bg-[#f6f6f6] px-4 text-sm text-black outline-none placeholder:text-black/30 transition focus:border-[var(--accent)]/30 focus:ring-0"
      />
    </div>
  );
}

export function VehicleRequestSection() {
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("call");

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-8 py-8 sm:px-6 md:pb-12">
      <div className="overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-[28px] bg-[var(--accent)] p-4 sm:p-6 lg:p-10 grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white">Tell us. We&apos;ll find it.</h2>
            <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-white/90">
              Don&apos;t see your ideal car on the lot? Describe what you&apos;re after — make, model, budget, features.
              Our team sources vehicles weekly and will match you before they are even listed.
            </p>
          </div>

          <form
            id="vehicle-request-form"
            className="bg-white rounded-[12px] p-3 sm:p-5 md:p-6 shadow-[0_18px_40px_rgba(17,17,17,0.12)] w-full"
            onSubmit={async (e) => {
              e.preventDefault();
              if (submitting) return;
              setSubmitting(true);
              setStatusMessage("");
              const form = e.currentTarget as HTMLFormElement;
              const data = Object.fromEntries(new FormData(form).entries());
              try {
                const res = await fetch("/api/webhook", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ type: "vehicle_request", data }),
                });
                if (res.ok) {
                  form.reset();
                  setStatusMessage("Thanks — we received your request.");
                } else {
                  setStatusMessage("Submission failed. Please try again.");
                }
              } catch {
                setStatusMessage("Submission failed. Please try again.");
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <LabeledFieldLight name="name" label="Your name" placeholder="Your full name" />
              <LabeledFieldLight name="car" label="What car are you after" placeholder="e.g. BMW X3, any SUV under $40k" />
              <LabeledFieldLight name="budget" label="Budget" placeholder="Select budget" />
              <LabeledFieldLight name="phone" label="Phone / WhatsApp" placeholder="04XX XXX XXX" />
            </div>

            <div className="mt-6 sm:mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-black/60">Preferred contact method</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Preferred contact method">
                <label className="cursor-pointer">
                  <input 
                    type="radio" 
                    name="contact_method" 
                    value="call" 
                    checked={contactMethod === "call"}
                    onChange={() => setContactMethod("call")}
                    className="sr-only" 
                  />
                  <span className={`inline-flex h-11 min-w-[140px] w-full items-center justify-center rounded-[10px] px-6 text-sm font-semibold transition ${
                    contactMethod === "call" 
                      ? "bg-[var(--accent)] text-white" 
                      : "border border-black/10 bg-white text-black hover:border-[var(--accent)]"
                  }`}>Call me</span>
                </label>
                <label className="cursor-pointer">
                  <input 
                    type="radio" 
                    name="contact_method" 
                    value="whatsapp" 
                    checked={contactMethod === "whatsapp"}
                    onChange={() => setContactMethod("whatsapp")}
                    className="sr-only" 
                  />
                  <span className={`inline-flex h-11 min-w-[120px] w-full items-center justify-center rounded-[10px] px-5 text-sm font-semibold transition ${
                    contactMethod === "whatsapp" 
                      ? "bg-[var(--accent)] text-white" 
                      : "border border-black/10 bg-white text-black hover:border-[var(--accent)]"
                  }`}>WhatsApp</span>
                </label>
                <label className="cursor-pointer">
                  <input 
                    type="radio" 
                    name="contact_method" 
                    value="email" 
                    checked={contactMethod === "email"}
                    onChange={() => setContactMethod("email")}
                    className="sr-only" 
                  />
                  <span className={`inline-flex h-11 min-w-[120px] w-full items-center justify-center rounded-[10px] px-5 text-sm font-semibold transition ${
                    contactMethod === "email" 
                      ? "bg-[var(--accent)] text-white" 
                      : "border border-black/10 bg-white text-black hover:border-[var(--accent)]"
                  }`}>Email</span>
                </label>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <button type="submit" disabled={submitting} className="h-12 w-full rounded-[10px] bg-[var(--accent)] text-sm font-bold text-white shadow-md hover:bg-[var(--accent-strong)] transition">
                {submitting ? "Sending…" : "Find it for me"}
              </button>
              <div id="vehicle-request-live" role="status" aria-live="polite" className="mt-3 text-sm text-black/60">{statusMessage}</div>
            </div>
          </form>
        </div>

        <div className="relative min-h-[200px] sm:min-h-[280px] lg:min-h-[480px] rounded-lg sm:rounded-xl lg:rounded-[22px] overflow-hidden mt-4 sm:mt-6 lg:mt-0">
          <Image src="/tell-us-we-find-it.webp" alt="OVZZ workshop" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 40vw" />
        </div>
      </div>
    </section>
  );
}