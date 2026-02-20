"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { AuthCard } from "@/components/auth/auth-card";

export default function LoginPage() {
  const { signIn, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signIn(email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message.replace("Firebase: ", "") : "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message.replace("Firebase: ", "") : "Google login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Welcome to SDIPP Portal"
      subtitle="Please sign in below."
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
      submitLabel="Continue with Email"
      onSubmit={handleSubmit}
      onGoogleSignIn={handleGoogle}
      alternateLink={{ href: "/signup", label: "Sign up" }}
      error={error}
      loading={loading}
    />
  );
}
