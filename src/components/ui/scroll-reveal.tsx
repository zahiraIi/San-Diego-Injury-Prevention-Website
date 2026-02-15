"use client";

import { useEffect } from "react";

/**
 * Tiny IntersectionObserver-based scroll reveal.
 * Add data-reveal="left" | "right" to any element to animate it on scroll.
 * CSS handles the actual transition (see globals.css).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
