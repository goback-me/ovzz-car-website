"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLoginPage() {
  const router = useRouter();
  const nextPath =
    typeof window === "undefined"
      ? "/studio"
      : new URLSearchParams(window.location.search).get("next") || "/studio";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Unable to login.");
        return;
      }

      router.push(nextPath);
      router.refresh();
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0E1319] p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Admin</p>
        <h1 className="mt-2 text-2xl font-semibold text-white">Secure Login</h1>
        <p className="mt-2 text-sm text-white/65">Use your Supabase Auth credentials to access admin tools.</p>

        <form className="mt-6 space-y-3" onSubmit={onSubmit}>
          <Input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
      </div>
    </main>
  );
}
