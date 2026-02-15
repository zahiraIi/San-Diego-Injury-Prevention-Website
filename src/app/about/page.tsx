"use client";

import PageHeader from "@/components/ui/page-header";
import AboutSection2 from "@/components/ui/about-section-2";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-16">
      <PageHeader title="About Us" subtitle="Learn more about SDIPP" />

      <AboutSection2 />
    </div>
  );
}
