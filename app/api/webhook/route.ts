import { NextResponse } from "next/server";
import { getServerEnv } from "@/lib/env";

export async function POST(request: Request) {
  const env = getServerEnv();
  const webhookUrl = env.zapierWebhookUrl;

  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured on server." }, { status: 500 });
  }

  const payload = await request.json().catch(() => null);

  if (!payload) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Webhook responded with non-OK:", res.status, text);
      return NextResponse.json({ error: "Webhook forwarding failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to forward webhook:", err);
    return NextResponse.json({ error: "Failed to forward webhook." }, { status: 502 });
  }
}
