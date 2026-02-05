"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { WordPullUp } from "@/components/ui/word-pull-up";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <Image
              src="/logo.png"
              alt="San Diego Injury Prevention Program Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-bold tracking-widest text-accent-red mb-4 uppercase">
                Welcome to the
              </h2>
            </motion.div>
            
            <div className="w-full max-w-7xl mx-auto px-4">
              <GradualSpacing
                text="San Diego Injury Prevention Program"
                className="font-rosehot text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight tracking-tight"
                duration={0.6}
                delayMultiple={0.05}
                framerProps={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
            </div>
            
            <div className="max-w-2xl mx-auto">
              <WordPullUp
                words="Promoting fitness, mobility, and injury-free lives for seniors in our community."
                className="text-xl md:text-2xl text-accent-blue font-charter leading-normal tracking-normal"
                wrapperFramerProps={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 1.2,
                    },
                  },
                }}
                framerProps={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              />
            </div>

            {/* Quick Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Link 
                href="/about" 
                className="px-6 py-3 bg-accent-blue text-white rounded-full font-bold hover:bg-accent-blue/90 transition-colors"
              >
                Learn More
              </Link>
              <Link 
                href="/apply" 
                className="px-6 py-3 bg-accent-red text-white rounded-full font-bold hover:bg-accent-red/90 transition-colors"
              >
                Join Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
