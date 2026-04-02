"use client";

import PageHeader from "@/components/ui/page-header";
import AboutSection2 from "@/components/ui/about-section-2";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Learn more about SDIPP" />

      <section className="relative z-10 overflow-hidden py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AboutSection2 />
        </div>
      </section>
    </>
  );
}
