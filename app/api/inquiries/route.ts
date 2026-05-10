import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/server";
import { validateInquiryPayload } from "@/lib/validators/inquiry";
import { sendInquiryToZapier } from "@/lib/zapier";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const validation = validateInquiryPayload(body);

  if (!validation.valid || !validation.value) {
    return NextResponse.json({ error: validation.error || "Invalid payload." }, { status: 422 });
  }

  const lead = validation.value;
  const supabase = createSupabaseAdminClient();

  const { error } = await supabase.from("leads").insert({
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    message: lead.message,
    car_id: lead.carId,
    created_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Failed to save lead:", error);
    return NextResponse.json({ error: "Could not save inquiry." }, { status: 500 });
  }

  try {
    await sendInquiryToZapier(lead, null);
  } catch {
    console.error("From Submission failed:");
  }

  return NextResponse.json({ ok: true });
}
