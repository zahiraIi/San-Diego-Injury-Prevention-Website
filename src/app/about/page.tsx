"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/PageHeader";
import TeamSection from "@/components/ui/team-section";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import AboutSection2 from "@/components/ui/about-section-2";
import { IconHeartHandshake, IconCoins, IconBook } from "@tabler/icons-react";

const staff = [
  {
    name: "Owen Dvorak",
    role: "Co-President & Founder",
    avatar: "/images/team/owendvorak.webp",
    desc: "Owen Dvorak is the co-president and founder of our injury prevention program! His other commitments include neuroblastoma research and registry work with NMDP. Some hobbies of his are board gaming, martial arts, and anything in the sun! Owen wants to help people regain their physical freedom to improve the quality of their lives.",
    reason: "Wants to help people regain their physical freedom to improve the quality of their lives.",
  },
  {
    name: "Albert Liu",
    role: "Co-President & Founder",
    avatar: "/images/team/albertliu.webp",
    desc: "Albert Liu is the co-president and founder of our injury prevention program! He is further engaged in cartilage tissue engineering research and leads outreach work for a free tutoring program for K-12 students. In his free time, he loves racing on the UCSD Dragon Boat Team, playing badminton and volleyball with his friends, or just working out at the gym! Albert wants to support his community by increasing overall wellness through a combination of fitness and education.",
    reason: "Wants to support his community by increasing overall wellness through fitness and education.",
  },
  {
    name: "Sonja Wang",
    role: "Vice President",
    avatar: "/images/team/sonjawang.webp",
    desc: "Sonja Wang is the vice president of our program! In addition to her involvement in SDIPP and volunteering, she enjoys creating art, figure skating, and dancing. Sonja is focused on empowering individuals to enjoy safe and independent lives.",
    reason: "Focused on empowering individuals to enjoy safe and independent lives.",
  },
  {
    name: "Medha Nemani",
    role: "Secretary",
    avatar: "/images/team/medhanamani.webp",
    desc: "Medha Nemani is the secretary of our program! Along with her commitment to the program and research, her hobbies include playing the piano, crafts, taking evening walks, and working on her novel. Medha is passionate about ensuring people are healthy and happy in all phases of their life.",
    reason: "Passionate about ensuring people are healthy and happy in all phases of their life.",
  },
  {
    name: "Payton Chung",
    role: "Treasurer",
    avatar: "/images/team/paytonchung.webp",
    desc: "Payton Chung is the treasurer of our program! His other commitments include research on breast cancer metastasis and leading other UCSD organizations like Quiz Bowl. Some of his hobbies include cooking, baking, board/tabletop games, and trivia. Payton is passionate about helping others in the San Diego community in an administrative role.",
    reason: "Passionate about helping others in the San Diego community in an administrative role.",
  },
  {
    name: "Aarav Rajpara",
    role: "Legal Consultant Chair",
    avatar: "/images/team/aaravrajpara.webp",
    desc: "Aarav Rajpara is a legal consultant chair of our program. His other commitments include internship work at private litigation firms in Southern California and involvement in Triton Mock Trial at UCSD. Some of his hobbies include hiking, skiing and visits to the beach. Aarav hopes to pursue a career in public interest, focusing on providing remedy to individuals and nonprofit organizations in need.",
    reason: "Hopes to pursue a career in public interest, focusing on providing remedy to individuals and nonprofit organizations in need.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <PageHeader title="About Us" subtitle="Meet the team behind SDIPP" />

      <AboutSection2 />

      {/* Our Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 mb-20"
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

      <TeamSection 
        members={staff}
        title="Our Staff"
        subtitle="Meet the team behind SDIPP"
      />

      {/* Volunteering Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <InteractiveBentoGallery
          mediaItems={[
            {
              id: 1,
              type: "image",
              title: "Volunteering at SDIPP",
              desc: "Community outreach and support",
              url: "/images/volunteering/volunteer1.webp",
              span: "col-span-1 row-span-4",
            },
            {
              id: 2,
              type: "image",
              title: "Health Fair Participation",
              desc: "Connecting with the community",
              url: "/images/volunteering/volunteer2.webp",
              span: "col-span-2 row-span-4",
            },
            {
              id: 3,
              type: "image",
              title: "Fitness Classes",
              desc: "Leading weekly fitness sessions",
              url: "/images/volunteering/volunteer3.webp",
              span: "col-span-1 row-span-4",
            },
            {
              id: 4,
              type: "image",
              title: "Fall Prevention Program",
              desc: "Working with UCSD Health",
              url: "/images/volunteering/volunteer4.webp",
              span: "col-span-2 row-span-3",
            },
            {
              id: 5,
              type: "image",
              title: "Community Engagement",
              desc: "Building relationships",
              url: "/images/volunteering/volunteer5.webp",
              span: "col-span-1 row-span-3",
            },
            {
              id: 6,
              type: "image",
              title: "Yoga Sessions",
              desc: "Promoting mobility and wellness",
              url: "/images/volunteering/volunteer6.webp",
              span: "col-span-1 row-span-3",
            },
            {
              id: 7,
              type: "image",
              title: "Outreach Events",
              desc: "Spreading awareness",
              url: "/images/volunteering/volunteer7.webp",
              span: "col-span-2 row-span-3",
            },
            {
              id: 8,
              type: "image",
              title: "Team Collaboration",
              desc: "Working together for the community",
              url: "/images/volunteering/volunteer8.webp",
              span: "col-span-2 row-span-3",
            },
            {
              id: 9,
              type: "image",
              title: "Community Service",
              desc: "Making a difference together",
              url: "/images/volunteering/volunteer9.webp",
              span: "col-span-1 row-span-3",
            },
            {
              id: 10,
              type: "image",
              title: "Student Volunteers",
              desc: "Students helping seniors",
              url: "/images/volunteering/volunteer10.webp",
              span: "col-span-2 row-span-3",
            },
            {
              id: 11,
              type: "image",
              title: "Active Living",
              desc: "Promoting healthy lifestyles",
              url: "/images/volunteering/volunteer 11.webp",
              span: "col-span-1 row-span-3",
            },
          ]}
          title="Volunteering"
          description="Explore our community engagement and outreach activities"
        />
      </motion.div>
    </div>
  );
}
