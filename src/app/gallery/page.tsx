"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import {
  DraggableContainer,
  GridBody,
  GridItem,
} from "@/components/ui/infinite-drag-scroll";

// ─── All gallery images from the three folders ─────────────────────────────

const CHATEAU_PREFIX = "/images/1:17Chateau/chateau";
const GBM_PREFIX = "/images/GBM/GBM";
const VOL_PREFIX = "/images/volunteering/volunteer";

const chateauImages = Array.from({ length: 23 }, (_, i) => ({
  id: `chateau-${i + 1}`,
  src: `${CHATEAU_PREFIX}${i + 1}.webp`,
  alt: `Chateau La Jolla event ${i + 1}`,
}));

const gbmImages = [
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `gbm-${i + 1}`,
    src: `${GBM_PREFIX}${i + 1}.webp`,
    alt: `GBM photo ${i + 1}`,
  })),
  { id: "gbm-9", src: "/images/GBM/GMB9.webp", alt: "GBM photo 9" },
];

const volunteerImages = [
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `vol-${i + 1}`,
    src: `${VOL_PREFIX}${i + 1}.webp`,
    alt: `Volunteering ${i + 1}`,
  })),
  { id: "vol-11", src: "/images/volunteering/volunteer 11.webp", alt: "Volunteering 11" },
];

const ALL_GALLERY_IMAGES = [...volunteerImages, ...gbmImages, ...chateauImages];

// Preview: 6 images for the right-side grid (masonry-style)
const PREVIEW_IMAGES = [
  volunteerImages[0],
  volunteerImages[3],
  gbmImages[0],
  gbmImages[4],
  chateauImages[0],
  chateauImages[5],
];

// ─── Gallery page ───────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [viewAllOpen, setViewAllOpen] = useState(false);

  return (
    <>
      <PageHeader title="Gallery" subtitle="Photos from our events and activities" />

      {/* Main content: Shadcn-style two-column layout */}
      <section className="relative py-16 md:py-24 px-4 md:px-6">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(115deg, #ffffff, #dddddd)" }}
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Text + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <p className="text-xs font-semibold tracking-widest text-[#1a3a5c]/80 uppercase mb-3">
                Gallery
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#1a3a5c] mb-4 leading-tight">
                Our Story in Pictures
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Every image tells a story—explore our gallery to see our journey unfold.
              </p>
              <button
                type="button"
                onClick={() => setViewAllOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1a3a5c] text-white font-sans font-medium hover:bg-[#1a3a5c]/90 transition-colors"
              >
                See all
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Right: 6-image preview grid (uniform height) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {PREVIEW_IMAGES.map((img) => (
                <div
                  key={img.id}
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    unoptimized={img.src.includes(" ") ? true : undefined}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full gallery overlay: drag-scroll + instruction text */}
      <AnimatePresence>
        {viewAllOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#141414]"
          >
            <div className="flex-none flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-white/10">
              <h3 className="font-sans font-bold text-white text-lg">Gallery</h3>
              <button
                type="button"
                onClick={() => setViewAllOpen(false)}
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close gallery"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
              <DraggableContainer variant="masonry" heightClass="h-full">
                <GridBody>
                  {ALL_GALLERY_IMAGES.map((img) => (
                    <GridItem
                      key={img.id}
                      className="relative h-54 w-36 md:h-96 md:w-64"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="pointer-events-none object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        unoptimized={img.src.includes(" ") ? true : undefined}
                      />
                    </GridItem>
                  ))}
                </GridBody>
              </DraggableContainer>
            </div>
            <p className="flex-none text-center text-white/60 text-sm py-4 px-4 font-sans">
              Drag to pan around the gallery · Scroll to move up and down
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
