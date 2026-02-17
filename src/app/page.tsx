import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ScrollReveal = dynamic(() => import("@/components/ui/scroll-reveal"));
const GrainientBlueSection = dynamic(
  () => import("@/components/ui/GrainientBlueSection")
);
const GrainientWhiteSection = dynamic(
  () => import("@/components/ui/GrainientWhiteSection")
);
const HomeImpactSection = dynamic(
  () => import("@/components/ui/home-impact-section")
);
const HomePresidentsSection = dynamic(
  () => import("@/components/ui/home-presidents-section")
);
import HomeHeroSection from "@/components/ui/home-hero-section";

export default function Home() {
  return (
    <div>
      <ScrollReveal />

      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center items-center text-center overflow-hidden pt-16 pb-32 bg-grainient-blue">
        <GrainientBlueSection />
        <HomeHeroSection />
      </section>

      {/* ─── INTRO — white card overlaps the hero ──────────────────────── */}
      <section className="relative z-10 -mt-20 rounded-t-[2rem] sm:rounded-t-[3rem] py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-grainient-white overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
            <div data-reveal="left">
              <h2 className="font-sans text-[#7f1d1d] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
                San Diego&apos;s premier student-run injury prevention program.
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

            <div
              data-reveal="right"
              data-delay=""
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mt-6 md:mt-0"
            >
              <Image
                src="/images/board/wholeboard.webp"
                alt="SDIPP board members"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION — blue card overlaps intro ────────────────────────── */}
      <section className="relative z-20 -mt-10 rounded-t-[2rem] sm:rounded-t-[3rem] py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-grainient-blue shadow-[0_-10px_30px_rgba(0,20,50,0.08)]">
        <GrainientBlueSection />

        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center justify-center relative z-10">
          <div
            data-reveal="left"
            className="relative w-full md:max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-xl flex-shrink-0"
          >
            <Image
              src="/images/vitals-training/IMG_7695.webp"
              alt="SDIPP vitals training session"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </div>

          <div data-reveal="right" data-delay="" className="text-left space-y-4 sm:space-y-5 max-w-2xl">
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

      {/* ─── IMPACT — white card overlaps mission ──────────────────────── */}
      <div className="relative z-30 -mt-10 rounded-t-[2rem] sm:rounded-t-[3rem] overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <HomeImpactSection />
      </div>

      {/* ─── PRESIDENTS — blue card overlaps impact ────────────────────── */}
      <section className="relative z-40 -mt-10 rounded-t-[2rem] sm:rounded-t-[3rem] overflow-hidden bg-grainient-blue shadow-[0_-10px_30px_rgba(0,20,50,0.08)]">
        <GrainientBlueSection />
        <div className="relative z-10">
          <HomePresidentsSection />
        </div>
      </section>

      {/* ─── HOW TO JOIN — white card overlaps presidents ──────────────── */}
      <section className="relative z-50 -mt-10 rounded-t-[2rem] sm:rounded-t-[3rem] py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-grainient-white overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-14 items-center relative z-10">
          <div data-reveal="left">
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

          <div data-reveal="right" data-delay="" className="relative mt-6 md:mt-0">
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-full h-full rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-[#7f1d1d]/60" />
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-full h-full rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-[#7f1d1d]/30" />
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/volunteering/volunteer1.webp"
                alt="SDIPP members during a session"
                width={800}
                height={500}
                loading="lazy"
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
