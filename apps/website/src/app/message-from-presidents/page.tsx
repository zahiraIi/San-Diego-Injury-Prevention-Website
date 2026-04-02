"use client";

import dynamic from "next/dynamic";
import PageHeader from "@/components/ui/page-header";
import { FeaturePresidents } from "@/components/ui/feature-presidents";
import { PRESIDENTS_MESSAGE_PARAGRAPHS } from "@/content/presidents-message";

const GrainientWhiteSection = dynamic(
  () => import("@/components/ui/GrainientWhiteSection")
);

export default function MessageFromPresidentsPage() {
  return (
    <>
      <PageHeader
        title="Message from the Presidents"
        subtitle="A note from our leadership"
      />

      <section className="relative z-10 sm: overflow-hidden py-12 md:py-16 bg-white ">
                <div className="relative z-10">
          <FeaturePresidents
            showHeading={false}
            items={PRESIDENTS_MESSAGE_PARAGRAPHS.map((description) => ({
              description,
            }))}
            imageSrc="/images/presidents/Presidents.webp"
            imageAlt="SDIPP Presidents"
            whiteCard
          />
        </div>
      </section>
    </>
  );
}
