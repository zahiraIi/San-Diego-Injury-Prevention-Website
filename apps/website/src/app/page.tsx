import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const GrainientBlueSection = dynamic(
  () => import("@/components/ui/GrainientBlueSection")
);
const GrainientWhiteSection = dynamic(
  () => import("@/components/ui/GrainientWhiteSection")
);
const HomeImpactSection = dynamic(
  () => import("@/components/ui/home-impact-section")
);
const HomePresidentsTeaser = dynamic(
  () => import("@/components/ui/home-presidents-teaser")
);
const IntroSectionImage = dynamic(
  () => import("@/components/ui/intro-section-image"),
  { ssr: true }
);
import HomeHeroSection from "@/components/ui/home-hero-section";

export default function Home() {
  return (
    <div>
      {/* ─── HERO — smaller on mobile (Berkeley-style) so intro content is visible ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[48svh] sm:min-h-[70svh] md:min-h-[100svh] flex flex-col justify-center items-center text-center overflow-hidden pt-14 pb-16 sm:pt-16 sm:pb-32 bg-grainient-blue">
        <GrainientBlueSection />
        <HomeHeroSection />
      </section>

      {/* ─── INTRO — no overlap on mobile (md and up only); square top on mobile ───────────────────────── */}
      <section className="relative z-10 mt-0 md:-mt-20 rounded-t-none md:rounded-t-[2rem] lg:rounded-t-[3rem] py-6 sm:py-16 md:py-20 px-5 sm:px-6 bg-grainient-white overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
            <div data-reveal="left">
              <h2 className="font-sans text-[#7f1d1d] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight tracking-tight">
                San Diego&apos;s premier student-run injury prevention program.
              </h2>
              <p className="text-[#0f172a] text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-medium">
                We are a student-run 501(c)3 nonprofit organization centered at UC San Diego, dedicated to empowering our community through injury education, community outreach, and evidence-based programs.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-[#7f1d1d] text-white rounded-full font-bold text-xs sm:text-sm hover:bg-[#6b1515] transition-all duration-300 shadow-lg hover:shadow-xl border border-[#6b1515]"
              >
                apply <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Link>
            </div>

            <IntroSectionImage />
          </div>
        </div>
      </section>

      {/* ─── MISSION — no overlap on mobile ─────────────────────────────── */}
      <section className="relative z-20 mt-0 md:-mt-10 rounded-t-none md:rounded-t-[2rem] lg:rounded-t-[3rem] py-8 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-grainient-blue shadow-[0_-10px_30px_rgba(0,20,50,0.08)]">
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
              SDIPP is committed to reducing preventable injuries and promoting safer environments for individuals and families across the San Diego area. Through our various programs and initiatives, we aim to increase the use of evidence-based strategies for injury prevention in all areas, from adolescent sports to fall prevention classes at senior residential homes. With the help of our dedicated student volunteers and our various collaborations with other organizations like the UCSD Trauma Center or Scripps Health, we strive to empower our community with the knowledge to live a little safer each day.
            </p>
          </div>
        </div>
      </section>

      {/* ─── IMPACT — no overlap on mobile ───────────────────────────────── */}
      <div className="relative z-30 mt-0 md:-mt-10 rounded-t-none md:rounded-t-[2rem] lg:rounded-t-[3rem] overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <HomeImpactSection />
      </div>

      {/* ─── PRESIDENTS — no overlap on mobile ──────────────────────────── */}
      <section className="relative z-40 mt-0 md:-mt-10 rounded-t-none md:rounded-t-[2rem] lg:rounded-t-[3rem] overflow-hidden bg-grainient-blue shadow-[0_-10px_30px_rgba(0,20,50,0.08)]">
        <GrainientBlueSection />
        <div className="relative z-10">
          <HomePresidentsTeaser />
        </div>
      </section>

      {/* ─── HOW TO JOIN — no overlap on mobile ──────────────────────────── */}
      <section className="relative z-50 mt-0 md:-mt-10 rounded-t-none md:rounded-t-[2rem] lg:rounded-t-[3rem] py-8 sm:py-16 md:py-20 px-4 sm:px-6 bg-grainient-white overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
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
