"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/page-header";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

// ─── Gallery section config: folder label + image list ─────────────────────

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface GallerySectionConfig {
  title: string;
  images: GalleryImage[];
}

const GBM_IMAGES: GalleryImage[] = [
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `gbm-${i + 1}`,
    src: `/images/GBM/GBM${i + 1}.webp`,
    alt: `GBM photo ${i + 1}`,
  })),
  { id: "gbm-9", src: "/images/GBM/GMB9.webp", alt: "GBM photo 9" },
];

const VITALS_TRAINING_IMAGES: GalleryImage[] = [
  "IMG_0726",
  "IMG_0727",
  "IMG_0728",
  "IMG_0729",
  "IMG_0730",
  "IMG_0731",
  "IMG_0732",
  "IMG_0733",
  "IMG_7684",
  "IMG_7685",
  "IMG_7686",
  "IMG_7688",
  "IMG_7689",
  "IMG_7692",
  "IMG_7694",
  "IMG_7695",
].map((name, i) => ({
  id: `vitals-${i + 1}`,
  src: `/images/vitals-training/${name}.webp`,
  alt: `Vitals training ${i + 1}`,
}));

const VOLUNTEERING_IMAGES: GalleryImage[] = Array.from(
  { length: 11 },
  (_, i) => ({
    id: `vol-${i + 1}`,
    src: `/images/volunteering/volunteer${i + 1}.webp`,
    alt: `Volunteering ${i + 1}`,
  })
);

const CHATEAU_IMAGES: GalleryImage[] = Array.from({ length: 23 }, (_, i) => ({
  id: `chateau-${i + 1}`,
  src: `/images/chateau/chateau${i + 1}.webp`,
  alt: `Chateau La Jolla event ${i + 1}`,
}));

const ATRIA_TAI_CHI_IMAGES: GalleryImage[] = [
  "IMG_0661",
  "IMG_0663",
  "IMG_0664",
  "IMG_0665",
  "IMG_0666",
  "IMG_0667",
  "IMG_0668",
  "IMG_0669",
  "IMG_0670",
  "IMG_0671",
  "IMG_0672",
].map((name, i) => ({
  id: `atria-${i + 1}`,
  src: `/images/atria-tai-chi/${name}.webp`,
  alt: `Atria La Jolla Tai Chi ${i + 1}`,
}));

const GALLERY_SECTIONS: GallerySectionConfig[] = [
  { title: "GBM", images: GBM_IMAGES },
  { title: "Vitals Training", images: VITALS_TRAINING_IMAGES },
  { title: "Volunteering", images: VOLUNTEERING_IMAGES },
  { title: "1:17 Chateau", images: CHATEAU_IMAGES },
  { title: "Atria La Jolla Tai Chi", images: ATRIA_TAI_CHI_IMAGES },
];

// ─── Single section: label + bordered grid of squares ─────────────────────

function GallerySection({ title, images }: GallerySectionConfig) {
  return (
    <section className="border-2 border-[#1a3a5c]/25 rounded-xl p-4 md:p-6 bg-white/60">
      <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#1a3a5c] mb-4 md:mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative aspect-square rounded-lg overflow-hidden border-2 border-[#1a3a5c]/20 bg-gray-100"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Photos from our events and activities"
      />

      <section className="relative py-16 md:py-24">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
          <div className="space-y-10 md:space-y-14">
          {GALLERY_SECTIONS.map((section) => (
            <GallerySection
              key={section.title}
              title={section.title}
              images={section.images}
            />
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
