import React from "react";

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
  const paddingClass = size === "compact" ? "pt-24 md:pt-32 pb-16 md:pb-20" : "pt-32 md:pt-40 pb-20 md:pb-24";

  return (
    <section className="relative w-full bg-[#1B2A53]">
      <div className={`relative z-10 container mx-auto px-4 md:px-6 ${paddingClass}`}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white uppercase tracking-wide mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

