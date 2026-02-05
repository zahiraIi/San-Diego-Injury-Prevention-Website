"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/PageHeader";
import GBMGallery from "@/components/ui/gbm-gallery";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="GBM Gallery" subtitle="Photos from our General Body Meetings" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GBMGallery />
      </motion.div>
    </div>
  );
}
