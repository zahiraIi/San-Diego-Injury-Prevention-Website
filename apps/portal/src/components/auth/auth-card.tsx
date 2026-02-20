"use client";

import React, { useState } from "react";
import Link from "next/link";

interface AuthCardProps {
  /** Main heading */
  title?: string;
  /** Subheading below title */
  subtitle?: string;
  /** Email value (controlled) */
  email: string;
  /** Email change handler */
  onEmailChange: (value: string) => void;
  /** Password value (controlled) */
  password: string;
  /** Password change handler */
  onPasswordChange: (value: string) => void;
  /** Submit button label */
  submitLabel?: string;
  /** Called when form is submitted with email + password */
  onSubmit: (e: React.FormEvent) => void;
  /** Called when Google sign-in is clicked */
  onGoogleSignIn: () => void;
  /** Link to alternate auth page (e.g. signup) */
  alternateLink?: { href: string; label: string };
  /** Error message to show */
  error?: string | null;
  /** Whether submit/Google are in progress */
  loading?: boolean;
}

export function AuthCard({
  title = "Welcome to SDIPP Portal",
  subtitle = "Please sign in below.",
  email,
  onEmailChange,
  password,
  onPasswordChange,
  submitLabel = "Continue with Email",
  onSubmit,
  onGoogleSignIn,
  alternateLink,
  error,
  loading = false,
}: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50/50 via-white to-orange-50/50 dark:from-zinc-900 dark:via-[#111] dark:to-zinc-900 transition-colors duration-500">
      {/* Main Card */}
      <div className="w-full max-w-[400px] p-8 bg-white dark:bg-[#161616] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none dark:border dark:border-white/5 flex flex-col items-center">
        {/* Animated Icon Container */}
        <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 dark:bg-white/5 dark:border-white/10 flex items-center justify-center mb-6 group cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-gray-700 dark:text-gray-300 relative"
          >
            <path
              d="M10 12h5m0 0l-2-2m2 2l-2 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 -translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            />
            <path
              d="M6 20V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M6 20V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14Z"
              stroke="currentColor"
              strokeWidth="1.5"
              className="origin-left transition-all duration-500 ease-in-out fill-white dark:fill-[#161616] group-hover:scale-x-[0.25] group-hover:-skew-y-[15deg]"
            />
          </svg>
        </div>

        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          {subtitle}
        </p>

        {error && (
          <div className="w-full mb-4 px-4 py-2.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-300">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="w-full space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                Email
              </label>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="you@email.com"
              required
              className="w-full px-4 py-2.5 bg-transparent border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 block">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2.5 bg-transparent border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#222] dark:bg-white text-white dark:text-black py-2.5 rounded-lg text-sm font-medium hover:bg-black dark:hover:bg-gray-100 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {loading ? "Signing in..." : submitLabel}
          </button>
        </form>

        {/* Dividers & Social Auth */}
        <div className="w-full h-px bg-gray-100 dark:bg-white/5 my-6 relative">
          <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#161616] px-2 text-[10px] text-gray-400 uppercase tracking-widest">
            or
          </span>
        </div>

        <div className="w-full space-y-2">
          <button
            type="button"
            onClick={onGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 py-2.5 rounded-lg text-sm font-medium active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </button>

          <button
            type="button"
            disabled
            className="w-full flex items-center justify-center gap-2 bg-gray-50 dark:bg-white/5 text-gray-400 dark:text-gray-500 py-2.5 rounded-lg text-sm font-medium cursor-not-allowed opacity-70"
            title="Coming soon"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
            </svg>
            Sign in with Passkey (coming soon)
          </button>
        </div>

        {alternateLink && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href={alternateLink.href}
              className="text-gray-900 dark:text-white font-medium hover:underline"
            >
              {alternateLink.label}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
