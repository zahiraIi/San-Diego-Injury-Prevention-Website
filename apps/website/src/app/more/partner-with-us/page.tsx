"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/page-header";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

type PartnerTab = "partner" | "collaborator";

type PartnerImageVariant = "logo" | "photo";

interface PartnerItem {
  name: string;
  desc: string;
  image: string;
  imageAlt: string;
  variant: PartnerImageVariant;
}

interface PartnerGroup {
  category: string;
  items: PartnerItem[];
}

const COLLABORATORS: PartnerGroup[] = [
  {
    category: "Healthcare Partners",
    items: [
      {
        name: "San Diego Fall Prevention Task Force",
        image: "/images/collaborators/logo-sd-fall-prevention-task-force.png",
        imageAlt: "San Diego Fall Prevention Task Force logo",
        variant: "logo",
        desc: "A key partner in advancing fall prevention efforts, offering evidence-based resources, exercise guidance, and community connections that strengthen our outreach.",
      },
      {
        name: "Scripps Memorial Hospital La Jolla",
        image: "/images/collaborators/logo-scripps-la-jolla.png",
        imageAlt: "Scripps Memorial Hospital La Jolla logo",
        variant: "logo",
        desc: "Works alongside us through its trauma services team to support community health fairs, provide trainings such as ACS Stop the Bleed, and share critical injury prevention resources.",
      },
      {
        name: "UC San Diego Health Trauma Center",
        image: "/images/collaborators/logo-ucsd-health.png",
        imageAlt: "UC San Diego Health logo",
        variant: "logo",
        desc: "Partners with us to support outreach and community engagement, offering injury prevention expertise, valuable resources, and connections that expand our impact.",
      },
      {
        name: "Volunteers in Medicine San Diego",
        image: "/images/collaborators/logo-volunteers-in-medicine.png",
        imageAlt: "Volunteers in Medicine San Diego logo",
        variant: "logo",
        desc: "Collaborates with us at community health fairs by providing educational presentations and on-site engagement to expand access to care and health resources.",
      },
    ],
  },
  {
    category: "Community & Education Partners",
    items: [
      {
        name: "United Way of San Diego County",
        image: "/images/collaborators/logo-united-way-sd.png",
        imageAlt: "United Way of San Diego County logo",
        variant: "logo",
        desc: "Collaborates with us to deliver health literacy presentations in local schools, helping students build knowledge and skills for lifelong well-being.",
      },
    ],
  },
  {
    category: "Residential Partners",
    items: [
      {
        name: "Atria La Jolla",
        image: "/images/collaborators/logo-atria-la-jolla.png",
        imageAlt: "Atria La Jolla logo",
        variant: "logo",
        desc: "Supports our programming by hosting regular classes focused on balance, mobility, and injury prevention for older adults, integrating fitness, tai chi, and movement.",
      },
      {
        name: "AvantGarde Senior Living La Jolla",
        image: "/images/collaborators/logo-avantgarde-la-jolla.png",
        imageAlt: "AvantGarde Senior Living La Jolla logo",
        variant: "logo",
        desc: "Provides space for our mobility classes, helping residents stay active and reduce their risk of falls.",
      },
      {
        name: "Belmont Village Senior Living La Jolla",
        image: "/images/collaborators/logo-belmont-village.png",
        imageAlt: "Belmont Village Senior Living logo",
        variant: "logo",
        desc: "Partners with us to bring fall prevention programming directly to residents, promoting safety and independence.",
      },
      {
        name: "Chateau La Jolla",
        image: "/images/collaborators/logo-chateau-la-jolla.png",
        imageAlt: "Chateau La Jolla logo",
        variant: "logo",
        desc: "Hosts our tai chi and fall prevention classes, providing a welcoming space for older residents to stay active and reduce fall risk.",
      },
    ],
  },
  {
    category: "Individual Collaborators",
    items: [
      {
        name: "Dr. Jia Shen",
        image: "/images/collaborators/dr-jia-shen.png",
        imageAlt: "Dr. Jia Shen, MD, Cardiology, UC San Diego Health",
        variant: "photo",
        desc: "Partners with us at community health fairs to expand outreach and better serve Chinese-speaking populations through culturally and linguistically accessible care.",
      },
      {
        name: "Dr. Matthew Tay",
        image: "/images/collaborators/dr-matthew-tay.png",
        imageAlt: "Dr. Matthew Tay leading tai chi and mobility instruction",
        variant: "photo",
        desc: "Partnering to deliver tai chi and mobility classes that help older adults improve balance, build strength, and reduce fall risk in residential care settings.",
      },
    ],
  },
];

function PartnerCard({ item }: { item: PartnerItem }) {
  const isPhoto = item.variant === "photo";

  return (
    <div className="bg-white/60 rounded-xl p-6 border border-[#1a3a5c]/10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
      <div
        className={
          isPhoto
            ? "shrink-0 w-full max-w-[200px] sm:max-w-[220px] mx-auto sm:mx-0"
            : "shrink-0 w-full sm:w-44 md:w-52 flex items-center justify-center sm:justify-start min-h-[4.5rem]"
        }
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={isPhoto ? 440 : 320}
          height={isPhoto ? 560 : 160}
          className={
            isPhoto
              ? "w-full h-auto rounded-lg object-cover shadow-sm border border-[#1a3a5c]/10"
              : "max-h-24 w-auto max-w-full object-contain object-left"
          }
          sizes={isPhoto ? "(max-width: 640px) 200px, 220px" : "(max-width: 640px) 100vw, 208px"}
        />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-lg font-bold text-[#1a3a5c] mb-2">{item.name}</h4>
        <p className="text-[#0f172a]/90 text-base leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export default function PartnerWithUsPage() {
  const [tab, setTab] = useState<PartnerTab>("partner");

  return (
    <>
      <PageHeader
        title="Partner With Us"
        subtitle="Collaborate with SDIPP on outreach, education, and community impact"
      />

      <section className="relative z-10 -mt-16 md:-mt-20 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] bg-white overflow-hidden">
        <GrainientWhiteSection />
        <div className="container mx-auto relative z-10 py-12 md:py-16 px-4 md:px-6 pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div
              role="tablist"
              aria-label="Partner information"
              className="flex flex-wrap gap-2 border-b border-[#1a3a5c]/15 pb-px mb-8"
            >
              <button
                type="button"
                role="tab"
                id="tab-partner"
                aria-selected={tab === "partner"}
                aria-controls="panel-partner"
                tabIndex={tab === "partner" ? 0 : -1}
                onClick={() => setTab("partner")}
                className={`relative px-4 py-3 text-sm md:text-base font-semibold rounded-t-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 ${
                  tab === "partner"
                    ? "text-[#1a3a5c]"
                    : "text-[#1a3a5c]/60 hover:text-[#1a3a5c]"
                }`}
              >
                Partner with us
                {tab === "partner" ? (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue rounded-full" />
                ) : null}
              </button>
              <button
                type="button"
                role="tab"
                id="tab-collaborator"
                aria-selected={tab === "collaborator"}
                aria-controls="panel-collaborator"
                tabIndex={tab === "collaborator" ? 0 : -1}
                onClick={() => setTab("collaborator")}
                className={`relative px-4 py-3 text-sm md:text-base font-semibold rounded-t-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 ${
                  tab === "collaborator"
                    ? "text-[#1a3a5c]"
                    : "text-[#1a3a5c]/60 hover:text-[#1a3a5c]"
                }`}
              >
                Become a collaborator
                {tab === "collaborator" ? (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue rounded-full" />
                ) : null}
              </button>
            </div>

            <div
              id="panel-partner"
              role="tabpanel"
              aria-labelledby="tab-partner"
              hidden={tab !== "partner"}
              className="space-y-10 text-[#1a3a5c]"
            >
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  At SDIPP, we are committed to advancing injury prevention through education,
                  outreach, and collaboration. By partnering with us, organizations gain access to a
                  passionate team dedicated to promoting health, expanding community impact, and
                  supporting evidence-based initiatives. Together, we can amplify outreach efforts,
                  share valuable resources, and create meaningful, lasting improvements in public
                  safety and well-being.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a3a5c] text-white font-semibold hover:bg-[#0f2a42] transition-colors"
                >
                  Contact SDIPP
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 space-y-12">
                {COLLABORATORS.map((group) => (
                  <div key={group.category} className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-sans font-bold text-accent-blue border-b border-accent-blue/10 pb-3">
                      {group.category}
                    </h3>
                    <div className="grid gap-6">
                      {group.items.map((item) => (
                        <PartnerCard key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="panel-collaborator"
              role="tabpanel"
              aria-labelledby="tab-collaborator"
              hidden={tab !== "collaborator"}
              className="space-y-6 text-[#1a3a5c]"
            >
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#1a3a5c]">
                Become a collaborator
              </h2>
              <p className="text-lg leading-relaxed">
                We&apos;re always excited to connect with organizations and individuals who share
                our commitment to injury prevention, health education, and community outreach.
                Whether you&apos;re interested in hosting events, co-leading programs, or exploring
                new ideas, we welcome opportunities to work together.
              </p>

              <div className="pt-6 border-t border-[#1a3a5c]/10">
                <p className="text-lg leading-relaxed mb-6">
                  If you&apos;re interested in collaborating, feel free to{" "}
                  <Link
                    href="/contact"
                    className="font-semibold text-accent-blue underline-offset-2 hover:underline"
                  >
                    reach out to us
                  </Link>{" "}
                  or contact the relevant{" "}
                  <Link
                    href="/staff"
                    className="font-semibold text-accent-blue underline-offset-2 hover:underline"
                  >
                    board members
                  </Link>
                  —we&apos;d love to start the conversation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a3a5c] text-white font-semibold hover:bg-[#0f2a42] transition-colors"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
