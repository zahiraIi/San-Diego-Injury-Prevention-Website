"use client";
import PageHeader from "@/components/ui/page-header";

export default function RecognitionsPage() {
  return (
    <>
      <PageHeader title="Volunteer Recognitions" subtitle="Celebrating our community impact" />

      <section className="relative z-10 sm: overflow-hidden py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center opacity-60">
          <p>Volunteer spotlights and awards will be featured here.</p>
        </div>
      </section>
    </>
  );
}
