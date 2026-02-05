"use client";

import PageHeader from "@/components/ui/PageHeader";
import AboutSection2 from "@/components/ui/about-section-2";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="About Us" subtitle="Learn more about SDIPP" />

      <AboutSection2 />
    </div>
  );
}
