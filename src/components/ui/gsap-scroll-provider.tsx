"use client";

import { useEffect } from "react";

/**
 * Registers GSAP ScrollTrigger once for the app. Renders children unchanged.
 * Use this in root layout so ScrollTrigger is available on all pages.
 */
export default function GSAPScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    return () => {
      import("gsap/ScrollTrigger").then(({ default: ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);

  return <>{children}</>;
}
