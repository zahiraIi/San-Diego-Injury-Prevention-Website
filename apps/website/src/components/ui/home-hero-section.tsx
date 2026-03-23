"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 60, damping: 16, mass: 0.9 },
  },
};

export default function HomeHeroSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-[563px] sm:max-w-4xl md:max-w-6xl mx-auto px-5 sm:px-6 py-8 sm:py-20 md:py-24"
    >
      <motion.h1
        variants={slideUp}
        className="font-sans font-bold text-white text-[2.25rem] leading-[1.15] sm:text-5xl md:text-8xl lg:text-9xl sm:leading-[0.9] md:leading-[0.9] tracking-tighter max-w-6xl px-1"
      >
        San Diego <br className="block md:hidden" /> <br className="hidden md:block" /> Injury Prevention
        <span className="block mt-2 md:mt-3">Program</span>
      </motion.h1>
    </motion.div>
  );
}
