"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Tiny IntersectionObserver-based scroll reveal.
 * Add data-reveal="left" | "right" to any element to animate it on scroll.
 * CSS handles the actual transition (see globals.css).
 * Re-initializes on route changes to handle client-side navigation.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is ready after route change
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll("[data-reveal]");
      if (!elements.length) return;

      // Remove existing data-visible attributes to allow re-animation
      elements.forEach((el) => {
        el.removeAttribute("data-visible");
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-visible", "");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "50px" }
      );

      elements.forEach((el) => {
        observer.observe(el);
        // Check if element is already in viewport (e.g., when navigating back to top of page)
        const rect = el.getBoundingClientRect();
        const isInViewport =
          rect.top < window.innerHeight * 0.85 &&
          rect.bottom > window.innerHeight * 0.15;
        if (isInViewport) {
          el.setAttribute("data-visible", "");
          observer.unobserve(el);
        }
      });

      return () => observer.disconnect();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
