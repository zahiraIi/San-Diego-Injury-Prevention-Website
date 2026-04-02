"use client";

import { FeaturePresidents } from "@/components/ui/feature-presidents";
import { PRESIDENTS_MESSAGE_PARAGRAPHS } from "@/content/presidents-message";

export default function HomePresidentsSection() {
  return (
    <FeaturePresidents
      badge="Message"
      title="Message from the Presidents"
      items={PRESIDENTS_MESSAGE_PARAGRAPHS.map((description) => ({
        description,
      }))}
      imageSrc="/images/presidents/Presidents.webp"
      imageAlt="SDIPP Presidents"
      light
    />
  );
}
