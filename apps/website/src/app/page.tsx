import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const CurveOverlay = dynamic(() => import("@/components/ui/curve-overlay"));
import AeroHero2 from "@/components/ui/aero-hero-2";
const HomeImpactSection = dynamic(() => import("@/components/ui/home-impact-section"));
const HomePresidentsTeaser = dynamic(() => import("@/components/ui/home-presidents-teaser"));

export default function Home() {
  return (
    <div className="bg-white">
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <AeroHero2 />

      {/* ─── INTRO SPLIT ───────────────────────── */}
      <section className="relative flex flex-col md:flex-row min-h-[600px] overflow-hidden bg-white">
        <div className="w-full md:w-1/2 relative bg-[#E2231A] p-10 md:p-20 flex items-center justify-center z-10">
          <CurveOverlay position="right" color="bg-white" className="hidden md:block w-full h-[150vw] mix-blend-overlay opacity-20" />
          <div className="max-w-lg relative z-20">
            <h2 className="font-heading text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              San Diego&rsquo;s premier
              <br />
              student-run injury
              <br />
              prevention program.
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8 font-medium">
              We are a student-run 501(c)3 nonprofit organization centered at UC San Diego, dedicated to empowering our community through injury education, community outreach, and evidence-based programs.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-[#E2231A] transition-colors"
            >
              apply now
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
          <Image
            src="/images/Fall Prevention Classes at Atria La Jolla/1.webp"
            alt="SDIPP community programs"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ─── MISSION SPLIT ─────────────────────────────── */}
      <section className="relative flex flex-col-reverse md:flex-row min-h-[600px] overflow-hidden bg-[#1B2A53]">
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
          <Image
            src="/images/volunteer training/vt5.webp"
            alt="SDIPP volunteers practice measuring vital signs with certified EMTs"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full md:w-1/2 relative bg-[#1B2A53] p-10 md:p-20 flex items-center justify-center z-10">
          <CurveOverlay position="left" color="bg-white" className="hidden md:block w-[150%] opacity-10" />
          <div className="max-w-lg relative z-20">
            <span className="text-white uppercase font-bold text-xs tracking-widest mb-2 block">Our Mission</span>
            <h2 className="font-heading uppercase text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-none tracking-wide">
              BUILDING A SAFER SAN DIEGO
            </h2>
            <p className="text-white text-lg leading-relaxed font-medium">
              SDIPP is committed to reducing preventable injuries and promoting safer environments for individuals and families across the San Diego area. Through our various programs and initiatives, we aim to increase the use of evidence-based strategies for injury prevention in all areas, from adolescent sports to fall prevention classes at senior residential homes.
            </p>
          </div>
        </div>
      </section>

      {/* ─── IMPACT ───────────────────────────────── */}
      <div className="relative bg-white">
        <HomeImpactSection />
      </div>

      {/* ─── PRESIDENTS ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1B2A53] py-20">
        <HomePresidentsTeaser />
      </section>

      {/* ─── HOW TO JOIN SPLIT ──────────────────────────── */}
      <section className="relative flex flex-col md:flex-row min-h-[600px] overflow-hidden bg-white">
        <div className="w-full md:w-1/2 relative p-10 md:p-20 flex items-center justify-center bg-white z-10">
          <div className="max-w-lg relative z-20">
            <h2 className="font-heading uppercase text-[#1B2A53] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-none tracking-wide">
              HOW TO JOIN
            </h2>
            <ul className="space-y-4 text-[#1B2A53] text-lg font-medium mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-3 w-3 rounded-full bg-[#E2231A] flex-shrink-0" />
                <span>No application fee required.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-3 w-3 rounded-full bg-[#E2231A] flex-shrink-0" />
                <span>Members must be 18 years of age or older.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-3 w-3 rounded-full bg-[#E2231A] flex-shrink-0" />
                <span>Dedicated to community health and wellness.</span>
              </li>
            </ul>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#E2231A] border-2 border-[#E2231A] text-white rounded-full font-heading font-bold uppercase tracking-wider hover:bg-transparent hover:text-[#E2231A] transition-colors"
            >
              apply today
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
          <Image
            src="/images/Organization Meetings/org1.webp"
            alt="SDIPP members at a general meeting"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </div>
  );
}
