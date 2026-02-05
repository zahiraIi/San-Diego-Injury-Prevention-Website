"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { WordPullUp } from "@/components/ui/word-pull-up";
import Link from "next/link";
import { IconAccessible, IconNetwork, IconSchool } from "@tabler/icons-react";

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

      {/* Mission Section */}
      <section className="bg-[#1a3a5c] py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Rocket Illustration */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <svg
                  viewBox="0 0 200 300"
                  className="w-64 h-96 md:w-80 md:h-[450px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Rocket body */}
                  <ellipse cx="100" cy="140" rx="45" ry="80" fill="#8a9bae" />
                  {/* Rocket nose */}
                  <path d="M55 140 L100 30 L145 140" fill="#c45c3e" />
                  {/* Window */}
                  <circle cx="100" cy="120" r="20" fill="#1a3a5c" stroke="#6b7f94" strokeWidth="4" />
                  <circle cx="100" cy="120" r="12" fill="#4a6a8a" />
                  {/* Left fin */}
                  <path d="M55 180 L30 250 L55 220" fill="#c45c3e" />
                  {/* Right fin */}
                  <path d="M145 180 L170 250 L145 220" fill="#c45c3e" />
                  {/* Flames */}
                  <path d="M70 220 L100 290 L130 220" fill="#e07850" />
                  <path d="M80 220 L100 270 L120 220" fill="#f0a060" />
                  {/* Orbit ring */}
                  <ellipse cx="100" cy="150" rx="70" ry="25" stroke="#6b8faa" strokeWidth="3" fill="none" opacity="0.6" transform="rotate(-20 100 150)" />
                </svg>
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
              <h2 className="text-5xl md:text-6xl font-rosehot text-[#b8c5d4] mb-8">Mission</h2>
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
      <section className="bg-[#f5f0e8] py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-rosehot text-accent-red">Pillars</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Individualized Care */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#a8c4d4] rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <IconAccessible className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-rosehot text-[#1a3a5c] mb-4">Individualized Care</h3>
              <p className="text-[#1a3a5c] text-sm leading-relaxed">
                We provide communities with care specific for them. Our senior clients receive custom mobility plans that account for their goals and conditions, and are heard by real people on a consistent basis during our Walk With a Senior Program. Our health fairs focus on underserved socioeconomic groups, and we partner with San Diego organizations to identify the best ways for us to support injury prevention initiatives relevant to their community.
              </p>
            </motion.div>

            {/* Resource Dissemination */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#5a8fa8] rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <IconNetwork className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-rosehot text-white mb-4">Resource Dissemination</h3>
              <p className="text-white text-sm leading-relaxed">
                Many people in San Diego, from elders to new families, often lack access to injury prevention necessities. Our collaborations, such as with the Dignity at Home Fall Prevention Program, ensure that those we serve are aware of and are able to access tools that promote their long-term health. We work with our volunteers to identify and connect each person who comes to us with what they need.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#3a7a8c] rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <IconSchool className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-rosehot text-white mb-4">Education</h3>
              <p className="text-white text-sm leading-relaxed">
                We seek to educate people about injury prevention topics to compliment the resources we distribute. As a student organization, we utilize modern approaches and research to address problems. Our educational initiatives are supported by our dedicated committees, as well as our volunteering affiliation with UCSD Trauma. We also take pride in developing presentations for children that focus on sports and injury science, general health, and careers in medicine.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="bg-[#f5f0e8] py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Top divider line */}
          <div className="w-full h-[2px] bg-[#1a3a5c] mb-16" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div>
              <h2 className="text-5xl md:text-6xl font-rosehot text-accent-red mb-10">How to Join?</h2>
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
