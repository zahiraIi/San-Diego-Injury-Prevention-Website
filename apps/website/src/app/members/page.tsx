"use client";
import PageHeader from "@/components/ui/page-header";

export default function MembersPage() {
  return (
    <>
      <PageHeader title="Members" subtitle="Our dedicated volunteers" />

      <section className="relative z-10 sm: overflow-hidden py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center opacity-60">
          <p>List of volunteers and members will be displayed here.</p>
          <p className="mt-4">Anyone 18+ can be a volunteer!</p>
        </div>
      </section>
    </>
  );
}
