"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { WordPullUp } from "@/components/ui/word-pull-up";
import Link from "next/link";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { IconHeartHandshake, IconCoins, IconBook } from "@tabler/icons-react";
import { Shadow } from "@/components/ui/animated-shape";

export default function Home() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-5 md:gap-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-48 h-48 md:w-72 md:h-72"
          >
            <Image
              src="/logo.png"
              alt="San Diego Injury Prevention Program Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-lg md:text-2xl font-bold tracking-widest text-accent-red mb-2 uppercase">
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
              className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 md:mt-6"
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

      {/* Mission Section */}
      <section className="bg-[#1a3a5c] py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 md:gap-10 items-center"
          >
            {/* Animated Shape */}
            <div className="flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Shadow className="w-72 h-40 md:w-96 md:h-56 text-[#b8c5d4]" />
              </motion.div>
            </div>
            
            {/* Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-rosehot text-[#b8c5d4] mb-5">Mission</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200">
                We are dedicated to promoting fitness and mobility among older individuals in the San Diego area. Our club offers a supportive community where members can engage in various activities to enhance their overall well-being.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                At San Diego Injury Prevention Program, we believe in empowering seniors to lead active lives free from injuries. Through our programs, we focus on improving fitness levels, mobility, and quality of life. Join us in our mission to prioritize health and wellness for all.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FeaturesSectionWithHoverEffects
              features={[
                {
                  title: "Individualized Care",
                  description: "We provide communities with care specific for them. Our senior clients receive custom mobility plans that account for their goals and conditions.",
                  icon: <IconHeartHandshake className="w-8 h-8" />,
                },
                {
                  title: "Resource Dissemination",
                  description: "We ensure that those we serve are aware of and are able to access tools that promote their long-term health, connecting each person with what they need.",
                  icon: <IconCoins className="w-8 h-8" />,
                },
                {
                  title: "Education",
                  description: "We seek to educate people about injury prevention topics to compliment the resources we distribute, utilizing modern approaches and research.",
                  icon: <IconBook className="w-8 h-8" />,
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="bg-[#f5f0e8] py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Top divider line */}
          <div className="w-full h-[2px] bg-[#1a3a5c] mb-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 md:gap-10 items-center"
          >
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-rosehot text-accent-red mb-6">How to Join?</h2>
              <ul className="space-y-6 text-lg md:text-xl text-[#1a3a5c]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#1a3a5c] rounded-full mt-3 flex-shrink-0" />
                  <span>No application fee required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#1a3a5c] rounded-full mt-3 flex-shrink-0" />
                  <span>Members must be 14 years of age or older.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#1a3a5c] rounded-full mt-3 flex-shrink-0" />
                  <span>
                    More information on membership can be found on the{" "}
                    <Link href="/apply" className="underline hover:text-accent-red transition-colors">
                      Apply
                    </Link>{" "}
                    page.
                  </span>
                </li>
              </ul>
            </div>

            {/* Image with decorative frame */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-accent-red rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border-4 border-accent-red rounded-lg" />
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/volunteering/volunteer1.webp"
                  alt="SDIPP members during a session"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
