"use client";
import PageHeader from "@/components/ui/page-header";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

export default function MembersPage() {
  return (
    <>
      <PageHeader title="Members" subtitle="Our dedicated volunteers" />

      <section className="relative z-10 -mt-12 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] overflow-hidden py-12 md:py-16 bg-grainient-white">
        <GrainientWhiteSection />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center opacity-60">
          <p>List of volunteers and members will be displayed here.</p>
          <p className="mt-4">Anyone 14+ can be a volunteer!</p>
        </div>
      </section>
    </>
  );
}
