"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { LeadPayload } from "@/types/car";

const initialState: LeadPayload = {
  name: "",
  email: "",
  phone: "",
  message: "",
  carId: "",
};

export function InquiryForm({ carId, carTitle }: { carId: string; carTitle: string }) {
  const [formData, setFormData] = useState<LeadPayload>({ ...initialState, carId });
  const [status, setStatus] = useState<{ type: "idle" | "error" | "success"; message: string }>({
    type: "idle",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const updateField = (name: keyof LeadPayload, value: string) => {
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result?.error || "Unable to submit inquiry right now.",
        });
        return;
      }

      setStatus({ type: "success", message: "Inquiry sent. Our team will contact you shortly." });
      setFormData({ ...initialState, carId });
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0E1319] p-5">
      <h2 className="mb-1 text-lg font-semibold text-white">Inquire About This Car</h2>
      <p className="mb-4 text-sm text-white/65">{carTitle}</p>
      <form className="space-y-3" onSubmit={onSubmit}>
        <Input
          required
          placeholder="Your name"
          value={formData.name}
          onChange={(event) => updateField("name", event.target.value)}
        />
        <Input
          required
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
        />
        <Input
          required
          placeholder="Phone"
          value={formData.phone}
          onChange={(event) => updateField("phone", event.target.value)}
        />
        <textarea
          className="min-h-28 w-full rounded-lg border border-white/15 bg-[#11161D] px-3 py-3 text-sm text-white outline-none placeholder:text-white/45 focus:border-[var(--accent)]"
          required
          placeholder="Message"
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
        <Button className="w-full" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
      {status.message ? (
        <p className={`mt-3 text-sm ${status.type === "error" ? "text-red-300" : "text-emerald-300"}`}>
          {status.message}
        </p>
      ) : null}
    </div>
  );
}
