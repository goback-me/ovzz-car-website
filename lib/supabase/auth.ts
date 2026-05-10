import { getServerEnv } from "@/lib/env";

export function isAllowedAdminEmail(email?: string | null) {
  if (!email) {
    return false;
  }

  const normalized = email.trim().toLowerCase();
  const serverEnv = getServerEnv();

  if (serverEnv.adminAllowedEmails.length === 0) {
    return true;
  }

  return serverEnv.adminAllowedEmails.includes(normalized);
}
