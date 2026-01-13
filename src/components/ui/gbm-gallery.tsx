"use client";
import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import Image from "next/image";

const GBM_IMAGES = [
  "/images/GBM/GBM1.JPG",
  "/images/GBM/GBM2.JPG",
  "/images/GBM/GBM3.JPG",
  "/images/GBM/GBM4.JPG",
  "/images/GBM/GBM5.JPG",
  "/images/GBM/GBM6.JPG",
  "/images/GBM/GBM7.JPG",
  "/images/GBM/GBM8.JPG",
  "/images/GBM/GMB9.JPG",
];

export default function GBMGallery() {
  return (
    <div className="w-full py-12 flex justify-center">
      <div className="w-full max-w-5xl mx-auto px-4">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.09 },
            },
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {GBM_IMAGES.map((imgSrc, index) => {
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  }}
                  key={index}
                  className="w-full"
                >
                  <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                    <Image
                      src={imgSrc}
                      alt={`GBM Event Photo ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}
