import React from "react";
import GrainientBlueSection from "@/components/ui/GrainientBlueSection";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  /**
   * Optional size to control vertical padding.
   * - "default": tall band (hero-style)
   * - "compact": shorter band for content pages
   */
  size?: "default" | "compact";
}

export default function PageHeader({ title, subtitle, size = "default" }: PageHeaderProps) {
  // Use a shorter band for compact headers (e.g. Events page)
  const paddingClass = size === "compact" ? "py-8 md:py-10" : "py-24 md:py-28";

  return (
    <section className="relative w-screen ml-[calc(-50vw+50%)]">
      <GrainientBlueSection />
      <div className={`relative z-10 container mx-auto px-4 md:px-6 ${paddingClass}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg lg:text-xl text-white/90 font-sans max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

