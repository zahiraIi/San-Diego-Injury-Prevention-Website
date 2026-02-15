"use client";

import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const asteriskVariant = {
  hidden: { opacity: 0, rotate: -90, scale: 0.5 },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 80, damping: 14, mass: 0.8 },
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
      className="relative z-10 flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-4xl mx-auto"
    >
      <motion.div variants={asteriskVariant} className="mb-4 sm:mb-6 md:mb-10">
        <Asterisk className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-white" strokeWidth={2} />
      </motion.div>

      <motion.h1
        variants={slideUp}
        className="font-sans font-bold text-white text-4xl sm:text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-6xl lowercase px-2"
      >
        san diego <br className="block md:hidden" /> <br className="hidden md:block" /> injury prevention
      </motion.h1>

      <motion.p
        variants={slideUp}
        className="font-sans text-white/90 text-lg sm:text-xl md:text-3xl mt-4 sm:mt-6 md:mt-8 tracking-wide font-medium lowercase"
      >
        program
      </motion.p>
    </motion.div>
  );
}
