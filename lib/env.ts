type EnvValue = string | undefined;

function requireEnv(name: string, value: EnvValue): string {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export function getPublicEnv() {
  return {
    sanityProjectId: requireEnv(
      "NEXT_PUBLIC_SANITY_PROJECT_ID",
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    ),
    sanityDataset: requireEnv(
      "NEXT_PUBLIC_SANITY_DATASET",
      process.env.NEXT_PUBLIC_SANITY_DATASET
    ),
    sanityApiVersion:
      process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-09",
    supabaseUrl: requireEnv(
      "NEXT_PUBLIC_SUPABASE_URL",
      process.env.NEXT_PUBLIC_SUPABASE_URL
    ),
    supabaseAnonKey: requireEnv(
      "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ),
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  };
}

export function getServerEnv() {
  return {
    supabaseServiceRoleKey: requireEnv(
      "SUPABASE_SERVICE_ROLE_KEY",
      process.env.SUPABASE_SERVICE_ROLE_KEY
    ),
    zapierWebhookUrl: process.env.ZAPIER_WEBHOOK_URL || "",
    adminAllowedEmails:
      process.env.ADMIN_ALLOWED_EMAILS?.split(",")
        .map((email) => email.trim().toLowerCase())
        .filter(Boolean) || [],
  };
}
