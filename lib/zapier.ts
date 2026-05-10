import { getServerEnv } from "@/lib/env";
import type { Car, LeadPayload } from "@/types/car";

export async function sendInquiryToZapier(lead: LeadPayload, car?: Car | null) {
  const serverEnv = getServerEnv();

  if (!serverEnv.zapierWebhookUrl) {
    return;
  }

  const response = await fetch(serverEnv.zapierWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lead,
      car,
      createdAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Zapier webhook failed with status ${response.status}`);
  }
}
