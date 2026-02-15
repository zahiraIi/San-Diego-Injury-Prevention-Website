"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Asterisk, Users, Heart, Dumbbell, Shield, Handshake } from "lucide-react";
import { ImpactPlansFeatures } from "@/components/ui/impact-plans-features";
import GrainientBlueSection from "@/components/ui/GrainientBlueSection";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";
import { FeaturePresidents } from "@/components/ui/feature-presidents";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const impactCards = [
  { title: "Committees", description: "Join a variety of committees, including outreach, legal, and research.", icon: Users },
  { title: "Health Fairs", description: "Network at health fairs, both with APAMSA and in the community.", icon: Heart },
  { title: "Weekly classes", description: "Lead fitness, yoga, and other classes for residents of nursing homes.", icon: Dumbbell },
  { title: "Fall/Injury prevention", description: "Volunteer through Scripps and the UCSD Health Trauma Center.", icon: Shield },
  { title: "Collaboration", description: "Work with the San Diego Fall Prevention Task Force.", icon: Handshake },
];

const PRESIDENTS_MESSAGE_PARAGRAPHS = [
  "The San Diego Injury Prevention Program was founded based off a simple realization: injuries are not inevitable. These injuries plague everyone, from children, to senior citizens, to even regular families, leaving lasting consequences impacting multiple facets of life. However, a combination of proper education, community engagement, and lifestyle changes holds the potential to reduce the morbidity of so many traumas. Our mission is therefore, to reduce preventable injuries and promote safer environments for individuals and families throughout San Diego.",
  "The most effective way to stop injuries is to prevent them from happening. In this spirit, our dedicated team identifies risk factors and promotes evidence-based strategies to help empower our community with the knowledge to live a little safer each day. Addressing every walk of life, our programs extend into every community, be it through our school presentations on adolescent physical activity, mobility and fall prevention classes at senior residential homes, or our public health outreach for various underrepresented groups.",
  "As collaboration is the cornerstone of community impact, these initiatives would not be possible without our various partners, for which we are grateful to continue working with. Finding other organizations that match our drive to improve our community, the San Diego Injury Prevention Program is always proud to work with the San Diego County Fall Prevention Task Force, UCSD Trauma Center, Scripps Health, United Way of San Diego, and multiple other healthcare professionals and community organizations. It is through this shared commitment to safety and these strong collaborations that we can continue to expand our reach and tailor our initiatives further to our local communities.",
  "As we grow, we plan on continuing to strengthen our programs and expand access to proper injury prevention services, ensuring that these services are accessible and inclusive. Innovation and analysis will continue to fuel our improvement as we optimize our programs and keep them informed by feedback, research, and data. So, while we will improve and expand, we will never lose sight of our goal and the community we serve.",
  "Thank you to our partners, our supporters, and of course, our dedicated volunteers. Together we can build a healthier, safer San Diego — one less injury at a time.",
];

const SCROLL_REVEAL = {
  start: "top 85%",
  once: true,
  duration: 0.6,
};

export default function Home() {
  const [heroKey] = useState(() => Math.random());
  const scrollRoot = useRef<HTMLDivElement>(null);
  const introText = useRef<HTMLDivElement>(null);
  const introImage = useRef<HTMLDivElement>(null);
  const missionPhoto = useRef<HTMLDivElement>(null);
  const missionText = useRef<HTMLDivElement>(null);
  const joinText = useRef<HTMLDivElement>(null);
  const joinImage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const d = SCROLL_REVEAL.duration;
      [introText, introImage].forEach((ref, i) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current,
          { opacity: 0, x: ref === introText ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: d,
            delay: ref === introImage ? 0.15 : 0,
            ease: "power2.out",
            scrollTrigger: { trigger: ref.current, start: SCROLL_REVEAL.start, once: SCROLL_REVEAL.once },
          }
        );
      });
      [missionPhoto, missionText].forEach((ref, i) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current,
          { opacity: 0, x: ref === missionPhoto ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: d,
            delay: ref === missionText ? 0.1 : 0,
            ease: "power2.out",
            scrollTrigger: { trigger: ref.current, start: SCROLL_REVEAL.start, once: SCROLL_REVEAL.once },
          }
        );
      });
      [joinText, joinImage].forEach((ref) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current,
          { opacity: 0, x: ref === joinText ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: d,
            delay: ref === joinImage ? 0.1 : 0,
            ease: "power2.out",
            scrollTrigger: { trigger: ref.current, start: SCROLL_REVEAL.start, once: SCROLL_REVEAL.once },
          }
        );
      });
    }, scrollRoot);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollRoot}>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Blue gradient, Asterisk + Text (UMA-style height/spacing)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[650px] flex flex-col justify-center items-center text-center overflow-hidden pt-16">
        <GrainientBlueSection />
        {/* Content — key forces remount so entrance animation runs on every visit */}
        <div key={heroKey} className="relative z-10 flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-4xl mx-auto">
          {/* Asterisk Icon */}
          <motion.div
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 sm:mb-6 md:mb-10"
          >
            <Asterisk className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-white" strokeWidth={2} />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans font-bold text-white text-4xl sm:text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-6xl lowercase px-2"
          >
            san diego <br className="block md:hidden" /> <br className="hidden md:block" /> injury prevention
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-sans text-white/90 text-lg sm:text-xl md:text-3xl mt-4 sm:mt-6 md:mt-8 tracking-wide font-medium lowercase"
          >
            program
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INTRO — Gradient background, Text Left, Team Photo Right
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6">
        {/* White to gray gradient background */}
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
            {/* Text */}
            <div ref={introText}>
              <h2 className="font-sans text-[#7f1d1d] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
                San Diego's premier student-run injury prevention program.
              </h2>
              <p className="text-[#0f172a] text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-medium">
                We are a student-run organization dedicated to empowering seniors in the
                San Diego area through evidence-based fitness programs, community outreach,
                and fall prevention education.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-[#7f1d1d] text-white rounded-full font-bold text-xs sm:text-sm hover:bg-[#6b1515] transition-all duration-300 shadow-lg hover:shadow-xl border border-[#6b1515]"
              >
                apply <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Link>
            </div>

            {/* Board Photo */}
            <div
              ref={introImage}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mt-6 md:mt-0"
            >
              <Image
                src="/images/board/wholeboard.webp"
                alt="SDIPP board members"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          MISSION — Site gradient with volunteering photo + text
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        <GrainientBlueSection />
        
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center justify-center relative z-10">
          {/* Volunteering photo */}
          <div
            ref={missionPhoto}
            className="relative w-full md:max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl flex-shrink-0"
          >
            <Image
              src="/images/vitals-training/IMG_7695.webp"
              alt="SDIPP vitals training session"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Mission text */}
          <div ref={missionText} className="text-left space-y-4 sm:space-y-5 max-w-2xl">
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Mission
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              We are dedicated to promoting fitness and mobility among older individuals in the San Diego
              area. Our club offers a supportive community where members can engage in various activities
              to enhance their overall well-being.
            </p>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              At San Diego Injury Prevention Program, we believe in empowering seniors to lead active
              lives free from injuries. Through our programs, we focus on improving fitness levels,
              mobility, and quality of life. Join us in our mission to prioritize health and wellness for all.
            </p>
          </div>
        </div>
      </section>

      {/* Impact & Plans */}
      <ImpactPlansFeatures items={impactCards} />

      {/* Message from the Presidents */}
      <section className="relative">
        <GrainientBlueSection />
        <div className="relative z-10">
          <FeaturePresidents
            badge="Message"
            title="Message from the Presidents"
            items={PRESIDENTS_MESSAGE_PARAGRAPHS.map((description) => ({
              description,
            }))}
            imageSrc="/images/team/Presidents.webp"
            imageAlt="SDIPP Presidents"
            light
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          HOW TO JOIN — White background with framed image
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center relative z-10">
          {/* Text content */}
          <div ref={joinText}>
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[#7f1d1d] mb-4 sm:mb-6">
              How to Join?
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-[#0f172a] text-sm sm:text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#7f1d1d] flex-shrink-0" />
                <span>No application fee required.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#7f1d1d] flex-shrink-0" />
                <span>Members must be 14 years of age or older.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#7f1d1d] flex-shrink-0" />
                <span>
                  More information on membership can be found on the{" "}
                  <Link
                    href="/apply"
                    className="underline decoration-[#7f1d1d]/70 underline-offset-4 hover:text-[#7f1d1d] transition-colors"
                  >
                    Apply
                  </Link>{" "}
                  page.
                </span>
              </li>
            </ul>
          </div>

          {/* Framed image */}
          <div ref={joinImage} className="relative mt-6 md:mt-0">
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-full h-full rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-[#7f1d1d]/60" />
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-full h-full rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-[#7f1d1d]/30" />
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/volunteering/volunteer1.webp"
                alt="SDIPP members during a session"
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER — (Moved to Global Layout)
      ═══════════════════════════════════════════════════════════════════ */}
    </div>
  );
}
