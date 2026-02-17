"use client";

import PageHeader from "@/components/ui/page-header";
import AboutSection2 from "@/components/ui/about-section-2";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Learn more about SDIPP" />

      <section className="relative z-10 -mt-12 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] overflow-hidden py-12 md:py-16 bg-grainient-white">
        <GrainientWhiteSection />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AboutSection2 />
        </div>
      </section>
    </>
  );
}
