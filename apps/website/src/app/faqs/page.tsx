"use client";

import Link from "next/link";
import PageHeader from "@/components/ui/page-header";
import FAQSection, { type FAQItem } from "@/components/ui/faq-section";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

const ABOUT_ITEMS: FAQItem[] = [
  {
    question: "What is San Diego Injury Prevention Program (SDIPP)?",
    answer:
      "San Diego Injury Prevention Program is a student-run nonprofit organization based at UC San Diego that works to promote community well-being through injury prevention education, volunteering, research, and resource dissemination. Our initiatives include fall prevention classes at senior residential facilities, community health fairs, injury prevention presentations, and collaborations with organizations such as the UCSD Trauma Center and Scripps Health.",
  },
  {
    question: "What makes SDIPP unique?",
    answer:
      "SDIPP is one of the premier student-run injury prevention organizations in San Diego. Our student-led structure allows volunteers to take leadership roles, build meaningful connections with community members, and develop professional skills while contributing to evidence-based public health initiatives.",
  },
  {
    question: "What is SDIPP's structure?",
    answer:
      "SDIPP is run by a student leadership board and supported by committees focused on outreach, research, legal initiatives, and program development. Students lead and organize programs while collaborating with community partners and health professionals to deliver injury prevention education and outreach.",
  },
  {
    question: "Is SDIPP part of a larger organization?",
    answer:
      "Yes. SDIPP is part of the California Injury Prevention Program (CAIPP), which currently includes chapters at UCLA, UC Davis, and UC Berkeley. CAIPP is our parent organization that supports our overall mission and helps connect us with opportunities to collaborate across the state.",
  },
];

const VOLUNTEER_ITEMS: FAQItem[] = [
  {
    question: "Who can join SDIPP?",
    answer:
      "SDIPP is open to all UC San Diego students, especially those interested in public health, medicine, community service, or injury prevention. Members can participate in various programs and committees.",
  },
  {
    question: "Are there any prerequisites to join?",
    answer: (
      <>
        No prior experience or prerequisites are required. SDIPP provides{" "}
        <Link href="/more/for-volunteers">training and guidance</Link> to help you get started.
      </>
    ),
  },
  {
    question: "Is there a membership fee?",
    answer: "No, there are no membership fees.",
  },
  {
    question: "Is there a minimum volunteering requirement?",
    answer: "No minimum commitment is required; opportunities are flexible.",
  },
  {
    question: "What skills can members gain from SDIPP?",
    answer: (
      <>
        Members gain hands-on experience in community outreach, health education, leadership,
        teamwork, event planning, and more. You can deepen your involvement through our{" "}
        <Link href="/committees">committees</Link> and programs that match your interests.
      </>
    ),
  },
  {
    question: "Can non-students volunteer with SDIPP?",
    answer:
      "Opportunities are primarily for UC San Diego students, but some collaborations may allow non-students depending on the program or partner.",
  },
  {
    question: "What SDIPP events require official t-shirts?",
    answer: (
      <>
        Requirements vary by event. Retirement home classes may not require them, while events
        with partner organizations (such as the Pediatrics Health Literacy Program or health
        fairs) may ask volunteers to wear SDIPP shirts for visibility and professionalism. If
        you are unsure, email{" "}
        <a href="mailto:sdinjurypreventionprogram@gmail.com">sdinjurypreventionprogram@gmail.com</a>
        .
      </>
    ),
  },
  {
    question: "What kinds of volunteer opportunities are available?",
    answer:
      "Volunteers can participate in programs such as:\n\n• Weekly fall prevention and mobility classes for seniors\n• Community health fairs focused on injury prevention\n• Collaborations with organizations such as UCSD Trauma, Scripps, and Safe Kids, including a joint internship\n• Educational programs such as the Health Literacy Program",
  },
];

const ORG_ITEMS: FAQItem[] = [
  {
    question: "What organizations does SDIPP collaborate with and in what capacity?",
    answer:
      "We collaborate with Scripps Health, UCSD Health, the San Diego Fall Prevention Task Force, various UCSD clubs and organizations, United Way of San Diego County, and others. Our partners are generally in health, public health, prevention, and education. In many cases SDIPP provides a volunteer base for partner events, or we co-host joint events and programs.",
  },
  {
    question: "How can someone start a new SDIPP chapter?",
    answer:
      "Current chapters exist at UC Davis, UCLA, and UC Berkeley, and we hope to expand across California. To start a chapter, you should be affiliated with a college that does not already have one. All chapters operate under CAIPP (the umbrella nonprofit) while retaining flexibility in choosing volunteer opportunities. Reach out through our contact page to be connected with chapter leadership.",
  },
];

const PROGRAM_ITEMS: FAQItem[] = [
  {
    question: "Who are SDIPP programs designed for?",
    answer:
      "Our programs focus on underserved communities and preventable injuries. Target groups include seniors, students of all ages, blue-collar workers, and individuals navigating mental health challenges. We use advocacy, education, and resource dissemination, and we are open to developing new events (for example, park-based classes) when there is community interest.",
  },
  {
    question: "What types of programs does SDIPP offer?",
    answer:
      "We offer programs for all ages, including school-based injury prevention for children, health fairs for families and community members, and fall prevention classes for seniors. We currently provide weekly tai chi and chair exercise classes at two local retirement communities. We are exploring future initiatives such as gun violence prevention and urban design. We also maintain a resource list for injury-prevention needs.",
  },
  {
    question: "Are SDIPP programs free?",
    answer:
      "Yes. Our goal is to lower barriers to care. As a nonprofit, we welcome tax-deductible donations that help sustain our work.",
  },
  {
    question: "How can I request an SDIPP event or program?",
    answer: (
      <>
        Use the form on our <Link href="/contact">Contact</Link> page (linked in the site
        navigation) or email{" "}
        <a href="mailto:sdinjurypreventionprogram@gmail.com">sdinjurypreventionprogram@gmail.com</a>
        .
      </>
    ),
  },
];

const MEMBERSHIP_ITEMS: FAQItem[] = [
  {
    question: "How do I become a member?",
    answer: (
      <>
        See the <Link href="/apply">Apply</Link> page on this site for current steps and
        deadlines.
      </>
    ),
  },
  {
    question: "What are the benefits of being an active member?",
    answer:
      "As an active member, you'll be part of a supportive, purpose-driven community. You get the chance to give back, build meaningful connections, and make a real impact while growing personally.\n\nMany members are inspired by personal experiences, such as helping older adults stay mobile and independent so they can enjoy time with family and pursue hobbies. These shared stories and goals create a strong sense of community and fulfillment in SDIPP.\n\nKaplan benefits: Since we've partnered with Kaplan (prep courses for MCAT, law school, and more), UCSD SDIPP members can receive:\n• 15% off Kaplan MCAT courses\n• Exclusive access to a Kaplan expert to help you build your study plan and find the best prep option\n• A free study guide and access to upcoming teacher-led events",
  },
  {
    question: "How do I get certified for volunteer hours?",
    answer:
      "Volunteer hours are tracked through our internal process and master spreadsheet. If you need a letter or verification for a course or program, contact your committee lead or reach out through the Contact page.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <PageHeader title="FAQs" subtitle="Frequently asked questions about SDIPP" />

      <section className="relative z-10 -mt-12 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] overflow-hidden py-12 md:py-16 px-4 md:px-6">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-4xl relative z-10 space-y-16 md:space-y-20 pb-8">
          <FAQSection title="About SDIPP" items={ABOUT_ITEMS} />
          <FAQSection title="Volunteers" items={VOLUNTEER_ITEMS} />
          <FAQSection title="Organizations & chapters" items={ORG_ITEMS} />
          <FAQSection title="Programs & services" items={PROGRAM_ITEMS} />
          <FAQSection title="Membership" items={MEMBERSHIP_ITEMS} />
        </div>
      </section>
    </>
  );
}
