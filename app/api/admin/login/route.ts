import { NextResponse } from "next/server";

import { isAllowedAdminEmail } from "@/lib/supabase/auth";
import { createSupabaseAuthClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const email = String((body as { email?: string } | null)?.email || "").trim();
  const password = String((body as { password?: string } | null)?.password || "");

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 422 });
  }

  const authClient = createSupabaseAuthClient();
  const { data, error } = await authClient.auth.signInWithPassword({ email, password });

  if (error || !data.user) {
    return NextResponse.json({ error: "Invalid login credentials." }, { status: 401 });
  }

  if (!isAllowedAdminEmail(data.user.email)) {
    return NextResponse.json({ error: "This account is not authorized." }, { status: 403 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("ovzz_admin_email", data.user.email || email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
