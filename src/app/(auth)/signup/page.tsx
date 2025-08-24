"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const dynamic = "force-dynamic";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setLoading(true);
    try {
      const { createSupabaseClient } = await import("@/lib/supabase/client");
      const supabase = createSupabaseClient();
      const email = String(formData.get("email"));
      const password = String(formData.get("password"));
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      toast.success("Account created. Check your email to verify.");
      window.location.href = "/signin";
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to sign up";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-dvh grid place-items-center p-6">
      <div className="w-full max-w-md glass-card rounded-xl p-6 animate-soft-enter">
        <h1 className="text-2xl font-semibold mb-1">Create your account</h1>
        <p className="text-sm text-foreground/70 mb-6">Get started in seconds</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="you@company.com" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button className="w-full" disabled={loading}>
            {loading ? "Creating..." : "Sign up"}
          </Button>
        </form>
        <div className="text-sm text-foreground/70 mt-4">
          <Link className="text-primary" href="/signin">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
}


