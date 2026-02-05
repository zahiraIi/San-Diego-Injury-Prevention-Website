"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/PageHeader";
import GBMGallery from "@/components/ui/gbm-gallery";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="Gallery" subtitle="Photos from our events and activities" />

      {/* GBM Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-rosehot text-accent-red mb-8 text-center">GBM Photos</h2>
        <GBMGallery />
      </motion.div>

      {/* Volunteering Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <InteractiveBentoGallery
          mediaItems={[
            {
              id: 1,
              type: "image",
              title: "Volunteering at SDIPP",
              desc: "Community outreach and support",
              url: "/images/volunteering/volunteer1.webp",
              span: "col-span-1 row-span-4",
            },
            {
              id: 2,
              type: "image",
              title: "Health Fair Participation",
              desc: "Connecting with the community",
              url: "/images/volunteering/volunteer2.webp",
              span: "col-span-2 row-span-4",
            },
            {
              id: 3,
              type: "image",
              title: "Fitness Classes",
              desc: "Leading weekly fitness sessions",
              url: "/images/volunteering/volunteer3.webp",
              span: "col-span-1 row-span-4",
            },
            {
              id: 4,
              type: "image",
              title: "Fall Prevention Program",
              desc: "Working with UCSD Health",
              url: "/images/volunteering/volunteer4.webp",
              span: "col-span-2 row-span-3",
            },
            {
              id: 5,
              type: "image",
              title: "Community Engagement",
              desc: "Building relationships",
              url: "/images/volunteering/volunteer5.webp",
              span: "col-span-1 row-span-3",
            },
            {
              id: 6,
              type: "image",
              title: "Yoga Sessions",
              desc: "Promoting mobility and wellness",
              url: "/images/volunteering/volunteer6.webp",
              span: "col-span-1 row-span-3",
            },
            {
              id: 7,
              type: "image",
              title: "Outreach Events",
              desc: "Spreading awareness",
              url: "/images/volunteering/volunteer7.webp",
              span: "col-span-2 row-span-3",
            },
            {
              id: 8,
              type: "image",
              title: "Team Collaboration",
              desc: "Working together for the community",
              url: "/images/volunteering/volunteer8.webp",
              span: "col-span-2 row-span-3",
            },
            {
              id: 9,
              type: "image",
              title: "Community Service",
              desc: "Making a difference together",
              url: "/images/volunteering/volunteer9.webp",
              span: "col-span-1 row-span-3",
            },
            {
              id: 10,
              type: "image",
              title: "Student Volunteers",
              desc: "Students helping seniors",
              url: "/images/volunteering/volunteer10.webp",
              span: "col-span-2 row-span-3",
            },
            {
              id: 11,
              type: "image",
              title: "Active Living",
              desc: "Promoting healthy lifestyles",
              url: "/images/volunteering/volunteer 11.webp",
              span: "col-span-1 row-span-3",
            },
          ]}
          title="Volunteering"
          description="Explore our community engagement and outreach activities"
        />
      </motion.div>
    </div>
  );
}
