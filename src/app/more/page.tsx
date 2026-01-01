"use client";
import PageHeader from "@/components/ui/PageHeader";

export default function MorePage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="More" subtitle="Resources & Training" />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-8 bg-white/60 rounded-xl">
            <h3 className="text-2xl font-rosehot mb-4">Resources</h3>
            <p className="opacity-70">Coming soon.</p>
        </div>
        <div className="p-8 bg-white/60 rounded-xl">
            <h3 className="text-2xl font-rosehot mb-4">Training</h3>
            <p className="opacity-70">All volunteers are certified and trained. Pediatric vs Non-pediatric training info coming soon.</p>
        </div>
      </div>
    </div>
  );
}

