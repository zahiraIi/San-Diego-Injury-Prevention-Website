"use client";
import PageHeader from "@/components/ui/PageHeader";

export default function FAQPage() {
  const faqs = [
    { q: "How do I become a member?", a: "Refer to the Apply page on this website!", isBenefits: false },
    { 
      q: "What are the benefits of being an active member?", 
      isBenefits: true
    },
    { q: "How do I get certified for volunteer hours?", a: "Our master spreadsheet logs your hours. More info coming soon.", isBenefits: false }
  ];

  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="FAQ" subtitle="Common Questions" />
      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((item, i) => (
          <div key={i} className="bg-white/60 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-accent-red mb-2">{item.q}</h3>
            {item.isBenefits ? (
              <div className="opacity-80 space-y-4">
                <p>
                  As an active member, you'll be part of a supportive, purpose-driven community! You get the chance to give back, build meaningful connections, and make a real impact while growing personally.
                </p>
                <p>
                  Many members are inspired by personal experiences, such as helping older adults stay mobile and independent so they can enjoy time with family and pursue hobbies. These shared stories and goals create a strong sense of community and fulfillment in SDIPP.
                </p>
                <div>
                  <p className="font-semibold mb-2">Kaplan benefits:</p>
                  <p className="mb-3">
                    Since we've partnered with Kaplan (a company that provides prep courses for MCAT, law school, etc.), UCSD SDIPP members can get:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>15% off on Kaplan MCAT courses</li>
                    <li>Exclusive access to a Kaplan expert to help you build your study plan and find the best prep option</li>
                    <li>A free study guide and access to upcoming teacher-led events</li>
                  </ul>
                </div>
              </div>
            ) : (
              <p className="opacity-80">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

