"use client";
import PageHeader from "@/components/ui/PageHeader";

export default function FAQPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="FAQ" subtitle="Common Questions" />
      <div className="max-w-3xl mx-auto space-y-8">
        {[
          { q: "How do I become a member?", a: "Refer to the Apply page on this website!" },
          { q: "What are the benefits?", a: "Join a supportive community, get Kaplan benefits (15% off courses), and make a real impact." },
          { q: "How do I get certified for volunteer hours?", a: "Our master spreadsheet logs your hours. More info coming soon." }
        ].map((item, i) => (
          <div key={i} className="bg-white/60 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-accent-red mb-2">{item.q}</h3>
            <p className="opacity-80">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

