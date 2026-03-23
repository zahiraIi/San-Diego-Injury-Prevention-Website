"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface GeneralBoardMember {
  name: string;
  image: string;
  email?: string;
}

interface GeneralBoardGalleryProps {
  members: GeneralBoardMember[];
  title?: string;
}

export default function GeneralBoardGallery({
  members,
  title = "General Board",
}: GeneralBoardGalleryProps) {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 border-t border-gray-200/80">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-sans font-bold text-[#1a3a5c] mb-8 md:mb-10 text-center"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
        {members.map((member, index) => (
          <motion.figure
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-2xl overflow-hidden bg-gray-100 shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
            </div>
            <figcaption className="mt-3 font-semibold text-[#1a3a5c] text-sm md:text-base">
              {member.name}
            </figcaption>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="mt-1 text-xs md:text-sm text-gray-600 hover:text-[#1a3a5c] transition-colors break-all"
              >
                {member.email}
              </a>
            )}
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

