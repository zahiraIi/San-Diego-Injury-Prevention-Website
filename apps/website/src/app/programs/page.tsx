"use client";

import PageHeader from "@/components/ui/page-header";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";
import {
  InteractiveAccordion,
  type AccordionItem,
} from "@/components/ui/interactive-accordion";

interface Program {
  title: string;
  body: string[];
  contact?: { label: string; href: string };
  /** Image path from public/images for this program section */
  image: string;
}

const PROGRAMS: Program[] = [
  {
    title: "Fall Prevention Classes",
    image: "/images/volunteering/volunteer12.webp",
    body: [
      "SDIPP's weekly fall prevention and tai chi classes at local retirement homes are our longest standing volunteer opportunity. Each session includes a warm up, workout, and cool down designed to accommodate the various mobility and activity levels of the seniors.",
      "Our classes highlight the importance of movement to prevent injuries while facilitating connection between generations. Volunteers get the chance to hone their communication, teaching, and professionalism skills while forming meaningful relationships with seniors.",
    ],
  },
  {
    title: "Health Fair",
    image: "/images/volunteering/volunteer9.webp",
    body: [
      "The SDIPP AANHPI Health and Wellness Fair is a free, off-campus, public health fair on February 21st that will focus on the mental and physical wellness of the Asian American, Native Hawaiian, and Pacific Islander community in San Diego.",
      "This fair will bring together a handful of local San Diego organizations, health providers, and educators that will be providing their resources, education and free screenings to our community guests.",
      "This fair will be the first of several health outreach initiatives, with future health fairs being focused on different target populations, different regions in San Diego, and different resources, services, and screenings.",
    ],
  },
  {
    title: "Community Collab Events",
    image: "/images/DSC01200.webp",
    body: [
      "SDIPP participates in a variety of community collaboration events including work with other UCSD student organizations, many different San Diego injury prevention task forces, and a variety of Scripps and UCSD Health faculty.",
      "External community events expand our injury prevention resources, so our organization can participate in more complex outreach targeted toward various community-wide injury-prevention initiatives, including resources that support geriatrics, pediatrics, trauma, public health, and more.",
      "In addition, on campus collaboration bridges our organization to other like-minded student organizations that are similarly focused on community education, injury-prevention, and impactful volunteer service, specifically for underserved communities.",
    ],
  },
  {
    title: "Fall Prevention Internship with UCSD",
    image: "",
    body: [
      "The Trauma Injury Prevention Internship is an incredible volunteer opportunity in partnership with the Trauma Center at UCSD Health. The Trauma Center at UCSD Health aims to prioritize injury prevention with a public health approach, integrating internal and local data to implement activities and community initiatives to make progress in trauma injury prevention.",
      "Volunteers involved in this internship will be involved in various activities including the following: co-facilitating training, set-up and logistics support for events, classes, outreach support (education, assessments), materials editing/development (flyers, handouts, activities, website content, social media posts), communicating and collaborating with community partners, interacting with patients and community members.",
      "Volunteer service in this internship emphasizes outreach and interaction with members of the community, using active listening and effective communication to support injury prevention education. Volunteers should expect to commit 6 hours a month (2 hours in-person).",
    ],
    contact: {
      label: "mrodriguezgyamfi@health.ucsd.edu",
      href: "mailto:mrodriguezgyamfi@health.ucsd.edu",
    },
  },
  {
    title: "Health Literacy Program",
    image: "/images/HLP.webp",
    body: [
      "The San Diego Injury Prevention Program created the Health Literacy Program (HLP) in collaboration with United Way of San Diego's STEAM-to-Careers program to increase access to health-related career guidance for high school students.",
      "Currently held at Lincoln High School, these presentations focus on injury prevention and health topics, incorporating activities that allow students to practice their ability to recognize risks and misinformation as well as college guidance.",
      "SDIPP also offers a quarterly internship for high schoolers who wish to get more involved in developing leadership and research skills.",
    ],
  },
  {
    title: "High School Internship Program",
    image: "",
    body: [
      "This 11 week internship program is designed to prepare high school interns for early career exploration in public health, helping them build transferable skills such as communication, teamwork, and leadership.",
      "Interns will participate in hands-on projects related to injury prevention and community outreach, receive mentorship from our dedicated mentors, attend speaker panels hosting professionals from diverse fields, and receive professional support during rotational workshops.",
      "We aim to educate, engage, and prepare students to promote safer and healthier communities.",
    ],
  },
];

function programToAccordionItem(program: Program, index: number): AccordionItem {
  const number = String(index + 1).padStart(2, "0");
  const id = `program-${index}`;

  return {
    id,
    number,
    title: program.title,
    image: program.image,
    content: (
      <div className="space-y-4">
        {program.body.map((paragraph, i) => (
          <p key={i} className="text-[#0f172a] text-base leading-relaxed">
            {paragraph}
          </p>
        ))}
        {program.contact && (
          <p className="text-base pt-2">
            <span className="text-[#0f172a]">
              Interested volunteers should reach out to the UCSD Health Trauma
              Injury Prevention Coordinator at{" "}
            </span>
            <a
              href={program.contact.href}
              className="text-[#1a3a5c] font-medium underline underline-offset-2 hover:text-[#7f1d1d] transition-colors"
            >
              {program.contact.label}
            </a>
            .
          </p>
        )}
      </div>
    ),
  };
}

const accordionItems: AccordionItem[] = PROGRAMS.map(programToAccordionItem);

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Programs"
        subtitle="Our initiatives and volunteer opportunities"
      />

      <section className="relative z-10 -mt-16 md:-mt-20 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] bg-white overflow-hidden">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-4xl px-4 md:px-6 relative z-10 py-10 md:py-14 pb-20 md:pb-24">
          <InteractiveAccordion
            items={accordionItems}
            defaultActiveId={accordionItems[0]?.id}
            className="w-full max-w-4xl"
          />
        </div>
      </section>
    </>
  );
}
