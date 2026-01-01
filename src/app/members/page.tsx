"use client";
import PageHeader from "@/components/ui/PageHeader";

export default function MembersPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="Members" subtitle="Our dedicated volunteers" />
      <div className="text-center opacity-60">
        <p>List of volunteers and members will be displayed here.</p>
        <p className="mt-4">Anyone 14+ can be a volunteer!</p>
      </div>
    </div>
  );
}

