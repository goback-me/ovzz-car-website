import type { LeadPayload } from "@/types/car";

export function validateInquiryPayload(payload: unknown): {
  valid: boolean;
  error?: string;
  value?: LeadPayload;
} {
  if (!payload || typeof payload !== "object") {
    return { valid: false, error: "Invalid request body." };
  }

  const source = payload as Record<string, unknown>;

  const value: LeadPayload = {
    name: String(source.name || "").trim(),
    email: String(source.email || "").trim(),
    phone: String(source.phone || "").trim(),
    message: String(source.message || "").trim(),
    carId: String(source.carId || "").trim(),
  };

  if (!value.name || value.name.length < 2) {
    return { valid: false, error: "Name is required." };
  }

  if (!value.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)) {
    return { valid: false, error: "Valid email is required." };
  }

  if (!value.phone || value.phone.length < 7) {
    return { valid: false, error: "Valid phone is required." };
  }

  if (!value.message || value.message.length < 8) {
    return { valid: false, error: "Message is too short." };
  }

  if (!value.carId) {
    return { valid: false, error: "Missing car reference." };
  }

  return { valid: true, value };
}
