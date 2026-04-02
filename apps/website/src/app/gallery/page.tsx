"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import PageHeader from "@/components/ui/page-header";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// ─── Gallery section config: folder label + image list ─────────────────────

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  /** Optional caption shown under the image */
  caption?: string;
}

interface GallerySectionConfig {
  title: string;
  images: GalleryImage[];
}

function GalleryImageTile({
  img,
  hasCaptions,
}: {
  img: GalleryImage;
  hasCaptions: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={hasCaptions ? "flex flex-col gap-2 min-w-0" : "contents"}>
      <div
        className={
          hasCaptions
            ? "relative aspect-[4/3] sm:aspect-square rounded-lg overflow-hidden border border-[#1B2A53]/15 bg-gray-100"
            : "relative aspect-square rounded-lg overflow-hidden border border-[#1B2A53]/15 bg-gray-100"
        }
      >
        {!isLoaded ? (
          <div
            className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200"
            aria-hidden
          />
        ) : null}
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className={`object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes={
            hasCaptions
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          }
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
      {hasCaptions && img.caption ? (
        <p className="text-sm md:text-[15px] text-[#1B2A53]/90 leading-relaxed">
          {img.caption}
        </p>
      ) : null}
    </div>
  );
}

const FALL_PREVENTION_ATRIA_IMAGES: GalleryImage[] = [
  {
    id: "atria-fp-1",
    src: "/images/Fall Prevention Classes at Atria La Jolla/1.webp",
    alt: "SDIPP Executive Health Coordinator leads a guided warm-up for residents",
    caption:
      "SDIPP Executive Health Coordinator leads participants through a guided warm-up, helping residents improve mobility, build strength, and prepare safely for fall prevention exercises.",
  },
  {
    id: "atria-fp-2",
    src: "/images/Fall Prevention Classes at Atria La Jolla/2.webp",
    alt: "SDIPP volunteers lead chair-based exercises for participants",
    caption:
      "SDIPP volunteers adapt exercises into chair-based movements, ensuring workouts are safe, accessible, and effective for participants of all mobility levels.",
  },
  {
    id: "atria-fp-3",
    src: "/images/Fall Prevention Classes at Atria La Jolla/3.webp",
    alt: "Participants in a gentle shoulder warm-up during fall prevention class",
    caption:
      "Participants engage in a gentle shoulder warm-up, improving flexibility and relieving stiffness, part of a regular routine to promote mobility, maintain joint health, and support long-term injury prevention.",
  },
];

const FALL_PREVENTION_CHATEAU_IMAGES: GalleryImage[] = [
  {
    id: "chateau-fp-1",
    src: "/images/Fall Prevention Classes at Chateau La Jolla/chateau1.webp",
    alt: "Participants in guided hip-strengthening exercises with chairs and volunteers",
    caption:
      "In one of our first classes, participants perform guided hip-strengthening exercises with the support of chairs and volunteers, helping improve stability, enhance balance, and reduce the risk of falls in a safe and supportive environment.",
  },
  {
    id: "chateau-fp-2",
    src: "/images/Fall Prevention Classes at Chateau La Jolla/chateau2.webp",
    alt: "Volunteers demonstrate safe techniques for getting back up after a fall",
    caption:
      "Volunteers demonstrate safe techniques for getting back up after a fall, empowering participants with the skills and confidence to respond effectively and reduce the risk of injury.",
  },
  {
    id: "chateau-fp-3",
    src: "/images/Fall Prevention Classes at Chateau La Jolla/chateau3.webp",
    alt: "Participants perform guided lunges for strength and balance",
    caption:
      "Participants perform guided lunges to build lower body strength, improve balance, and support overall mobility in a safe and encouraging environment.",
  },
];

const HEALTH_FAIRS_IMAGES: GalleryImage[] = [
  {
    id: "health-fair-55",
    src: "/images/Health Fairs/DSC04455.webp",
    alt: "Volunteers teach Stop the Bleed tourniquet and first aid skills at a health fair",
    caption:
      "Volunteers utilize their ACS Stop the Bleed training to teach participants how to apply a tourniquet and provide basic first aid for traumatic injuries, building confidence and lifesaving skills in emergency situations.",
  },
  {
    id: "health-fair-01",
    src: "/images/Health Fairs/DSC04501.webp",
    alt: "Volunteers demonstrate tai chi with an older participant",
    caption:
      "Volunteers demonstrate tai chi techniques to an older participant, promoting gentle movement, balance, and confidence through guided, individualized instruction.",
  },
  {
    id: "health-fair-39",
    src: "/images/Health Fairs/DSC04539.webp",
    alt: "Pualani Vazquez presents on car safety and injury prevention",
    caption:
      "Pualani Vazquez, a Trauma Injury Prevention Coordinator at Scripps Health, delivers an engaging session on car safety, educating attendees on best practices, injury prevention, and strategies to stay safe on the road.",
  },
];

const HEALTH_LITERACY_PRESENTATIONS_IMAGES: GalleryImage[] = [
  {
    id: "hlp-1",
    src: "/images/Health Literacy Presentations/hlp1.webp",
    alt: "Volunteer leads a health literacy presentation for high school students",
    caption:
      "Volunteer leads an engaging presentation for high school students, introducing key concepts of health literacy in a relatable and accessible way. By encouraging questions and real-life connections, they help students build the confidence and knowledge needed to better understand their health and make informed choices in their daily lives.",
  },
  {
    id: "hlp-2",
    src: "/images/Health Literacy Presentations/hlp2.webp",
    alt: "SDIPP Health Coordinator teaches Lincoln High School students blood pressure measurement",
    caption:
      "An SDIPP Health Coordinator assists in teaching Lincoln High School students how to measure blood pressure manually using auscultation, along with training in standard vital sign assessment.",
  },
  {
    id: "hlp-3",
    src: "/images/Health Literacy Presentations/hlp3.webp",
    alt: "SDIPP volunteers table at United Way Lunchtime Orientation Kickoff",
    caption:
      'SDIPP student volunteers host a tabling event at the United Way "Lunchtime Orientation Kickoff," representing the Healthcare Pathway by sharing information about program participation and answering general questions about the college experience.',
  },
];

const ORGANIZATION_MEETINGS_IMAGES: GalleryImage[] = [
  {
    id: "org-1",
    src: "/images/Organization Meetings/org1.webp",
    alt: "Co-president introduces nursing home volunteer opportunities for fall prevention classes",
    caption:
      "A co-president introduces upcoming nursing home volunteer opportunities, where members will lead fall prevention and mobility classes. Members learn how they can get involved in supporting older adults while gaining meaningful, hands-on experience in community health.",
  },
  {
    id: "org-2",
    src: "/images/Organization Meetings/org2.webp",
    alt: "Members listen during a general meeting as leaders share updates",
    caption:
      "Members listen attentively during a general meeting as club leaders share updates on ongoing activities and introduce new opportunities for involvement.",
  },
];

const VOLUNTEER_TRAINING_IMAGES: GalleryImage[] = [
  {
    id: "vt-1",
    src: "/images/volunteer training/vt1.webp",
    alt: "Volunteers practice first aid for traumatic injuries and severe bleeding",
    caption:
      "Volunteers practice first aid for traumatic injuries, focusing on managing bleeding from bullet wounds and similar severe injuries using techniques like direct pressure.",
  },
  {
    id: "vt-2",
    src: "/images/volunteer training/vt2.webp",
    alt: "Volunteers in a simulated emergency trauma scenario",
    caption:
      "Volunteers participate in a simulated emergency scenario, putting their first aid and trauma response skills into practice in a realistic, hands-on training exercise.",
  },
  {
    id: "vt-3",
    src: "/images/volunteer training/vt3.webp",
    alt: "Volunteers practice wound packing and tourniquet application",
    caption:
      "Two volunteers get hands-on practice with advanced trauma care, practicing wound packing and the proper application of tourniquets to control serious bleeding.",
  },
  {
    id: "vt-4",
    src: "/images/volunteer training/vt4.webp",
    alt: "SDIPP Health Coordinators and EMTs prepare to lead vitals training",
    caption:
      "SDIPP Health Coordinators and National Registry Certified EMTs prepare to lead a vitals training session, preparing to teach essential skills to volunteers.",
  },
  {
    id: "vt-5",
    src: "/images/volunteer training/vt5.webp",
    alt: "Volunteers practice measuring vital signs with certified EMTs",
    caption:
      "Volunteers practice measuring key vital signs—including blood pressure, respiratory rate, heart rate, pupillary reactivity, and capillary refill time—gaining hands-on experience under the guidance of our certified EMTs.",
  },
];

const GALLERY_SECTIONS: GallerySectionConfig[] = [
  {
    title: "Fall Prevention Classes at Atria La Jolla",
    images: FALL_PREVENTION_ATRIA_IMAGES,
  },
  {
    title: "Fall Prevention Classes at Chateau La Jolla",
    images: FALL_PREVENTION_CHATEAU_IMAGES,
  },
  {
    title: "Health Fairs",
    images: HEALTH_FAIRS_IMAGES,
  },
  {
    title: "Health Literacy Presentations",
    images: HEALTH_LITERACY_PRESENTATIONS_IMAGES,
  },
  { title: "Organization Meetings", images: ORGANIZATION_MEETINGS_IMAGES },
  {
    title: "Volunteer Training",
    images: VOLUNTEER_TRAINING_IMAGES,
  },
];

// ─── Single collapsible section ─────────────────────────────────────────────

function GallerySection({ title, images }: GallerySectionConfig) {
  const [open, setOpen] = useState(false);
  const hasCaptions = images.some((img) => img.caption);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="border border-[#1B2A53]/20 rounded-xl bg-white/60 overflow-hidden">
        <CollapsibleTrigger className="flex items-center justify-between w-full px-5 md:px-6 py-4 md:py-5 cursor-pointer hover:bg-white/80 transition-colors group">
          <div className="flex items-center gap-3">
            <h2 className="text-xl md:text-2xl font-sans font-bold text-[#1B2A53]">
              {title}
            </h2>
            <span className="text-sm text-[#1B2A53]/50 font-medium">
              {images.length} photos
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-[#1B2A53]/60 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden">
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-1">
            <div
              className={
                hasCaptions
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
                  : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
              }
            >
              {images.map((img) => (
                <GalleryImageTile
                  key={img.id}
                  img={img}
                  hasCaptions={hasCaptions}
                />
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Photos from our events and activities"
      />

      <section className="relative z-10 md: sm: bg-white overflow-hidden">
                <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10 py-10 md:py-14 pb-20 md:pb-24">
          <div className="space-y-4">
            {GALLERY_SECTIONS.map((section) => (
              <GallerySection
                key={section.title}
                title={section.title}
                images={section.images}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
