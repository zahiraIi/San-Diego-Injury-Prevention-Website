"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import GBMGallery from "@/components/ui/gbm-gallery";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

// ─── Volunteering media items ────────────────────────────────────────────────

const volunteeringItems = [
  {
    id: 1,
    type: "image" as const,
    title: "Volunteering at SDIPP",
    desc: "Community outreach and support",
    url: "/images/volunteering/volunteer1.webp",
    span: "col-span-1 row-span-4",
  },
  {
    id: 2,
    type: "image" as const,
    title: "Health Fair Participation",
    desc: "Connecting with the community",
    url: "/images/volunteering/volunteer2.webp",
    span: "col-span-2 row-span-4",
  },
  {
    id: 3,
    type: "image" as const,
    title: "Fitness Classes",
    desc: "Leading weekly fitness sessions",
    url: "/images/volunteering/volunteer3.webp",
    span: "col-span-1 row-span-4",
  },
  {
    id: 4,
    type: "image" as const,
    title: "Fall Prevention Program",
    desc: "Working with UCSD Health",
    url: "/images/volunteering/volunteer4.webp",
    span: "col-span-2 row-span-3",
  },
  {
    id: 5,
    type: "image" as const,
    title: "Community Engagement",
    desc: "Building relationships",
    url: "/images/volunteering/volunteer5.webp",
    span: "col-span-1 row-span-3",
  },
  {
    id: 6,
    type: "image" as const,
    title: "Yoga Sessions",
    desc: "Promoting mobility and wellness",
    url: "/images/volunteering/volunteer6.webp",
    span: "col-span-1 row-span-3",
  },
  {
    id: 7,
    type: "image" as const,
    title: "Outreach Events",
    desc: "Spreading awareness",
    url: "/images/volunteering/volunteer7.webp",
    span: "col-span-2 row-span-3",
  },
  {
    id: 8,
    type: "image" as const,
    title: "Team Collaboration",
    desc: "Working together for the community",
    url: "/images/volunteering/volunteer8.webp",
    span: "col-span-2 row-span-3",
  },
  {
    id: 9,
    type: "image" as const,
    title: "Community Service",
    desc: "Making a difference together",
    url: "/images/volunteering/volunteer9.webp",
    span: "col-span-1 row-span-3",
  },
  {
    id: 10,
    type: "image" as const,
    title: "Student Volunteers",
    desc: "Students helping seniors",
    url: "/images/volunteering/volunteer10.webp",
    span: "col-span-2 row-span-3",
  },
  {
    id: 11,
    type: "image" as const,
    title: "Active Living",
    desc: "Promoting healthy lifestyles",
    url: "/images/volunteering/volunteer 11.webp",
    span: "col-span-1 row-span-3",
  },
];

// ─── Collapsible section component ──────────────────────────────────────────

interface GallerySectionProps {
  title: string;
  count: number;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function GallerySection({ title, count, isOpen, onToggle, children }: GallerySectionProps) {
  return (
    <div className="mb-12 md:mb-16">
      {/* Clickable header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-6 md:px-8 py-5 md:py-6 rounded-xl
                   bg-white/50 dark:bg-white/5 backdrop-blur-sm
                   border border-accent-blue/15 hover:border-accent-blue/30
                   shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-sans text-accent-red">
            {title}
          </h2>
          <span className="text-xs md:text-sm font-medium text-muted-foreground opacity-60 bg-accent-blue/10 px-2.5 py-0.5 rounded-full">
            {count} photos
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-accent-blue opacity-70 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-8 md:pt-10">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Gallery page ───────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    volunteering: false,
    gbm: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <PageHeader title="Gallery" subtitle="Photos from our events and activities" />

      {/* Main Content Area with Gradient Background */}
      <section className="relative py-16 md:py-20 px-4 md:px-6 pb-20 md:pb-24">
        {/* White to gray gradient background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(115deg, #ffffff, #dddddd)' }} />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Volunteering Section (first) */}
          <GallerySection
            title="Volunteering"
            count={volunteeringItems.length}
            isOpen={openSections.volunteering}
            onToggle={() => toggleSection("volunteering")}
          >
            <InteractiveBentoGallery
              mediaItems={volunteeringItems}
              title="Volunteering"
              description="Explore our community engagement and outreach activities"
              hideHeader
            />
          </GallerySection>

          {/* GBM Section (second) */}
          <GallerySection
            title="GBM Photos"
            count={9}
            isOpen={openSections.gbm}
            onToggle={() => toggleSection("gbm")}
          >
            <GBMGallery />
          </GallerySection>
        </div>
      </section>
    </>
  );
}
