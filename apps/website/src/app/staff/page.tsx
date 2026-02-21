"use client";

import PageHeader from "@/components/ui/page-header";
import TeamSection from "@/components/ui/team-section";
import GeneralBoardGallery from "@/components/ui/general-board-gallery";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

const GENERAL_BOARD_IMAGES = [
  "Celine_Chang.webp",
  "Derek_Nguyen.webp",
  "Enzo_Bautista.webp",
  "Henry_Hsieh.webp",
  "Isha_Mittal.webp",
  "Laiken_Thoesen.webp",
  "Maria_Nouri.webp",
  "Minshen_Yang.webp",
  "Panav_Vashishat.webp",
  "Ranya_Ato.webp",
  "Rebecca_Zhang.webp",
  "Ryan_Lao.webp",
  "Saya_Butler.webp",
  "Shannon_O_Rourke.webp",
  "Sophia_Qin.webp",
];

function generalBoardFileNameToName(filename: string): string {
  const base = filename.replace(/\.(webp|jpg|jpeg|png)$/i, "");
  if (base.includes("O_Rourke")) return base.replace(/_/g, " ").replace("O Rourke", "O'Rourke");
  return base.replace(/_/g, " ");
}

// General board photos are loaded from public/images/generalboard/
const generalBoard = GENERAL_BOARD_IMAGES.map((filename) => ({
  name: generalBoardFileNameToName(filename),
  image: `/images/generalboard/${filename}`,
}));

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

export default function StaffPage() {
  return (
    <>
      <PageHeader title="Our Staff" subtitle="Meet the team behind SDIPP" />

      <section className="relative z-10 -mt-12 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] overflow-hidden py-12 md:py-16 px-4 md:px-6">
        <GrainientWhiteSection />
        <div className="container mx-auto relative z-10">
          <section className="pt-2">
            <h2 className="text-xl md:text-2xl font-sans font-bold text-[#1a3a5c] mb-4 text-center md:text-left">
              Executive Board
            </h2>
            <TeamSection members={staff} />
          </section>

          <GeneralBoardGallery members={generalBoard} title="General Board" />
        </div>
      </section>
    </>
  );
}
