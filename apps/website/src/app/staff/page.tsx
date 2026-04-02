"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/page-header";
import TeamSection from "@/components/ui/team-section";
import GeneralBoardGallery from "@/components/ui/general-board-gallery";

const GENERAL_BOARD_MEMBERS = [
  { filename: "Derek_Nguyen.webp", email: "den010@ucsd.edu", role: "Executive Health Coordinator" },
  { filename: "Enzo_Bautista.webp", email: "enbautista@ucsd.edu", role: "Logistics Chair" },
  { filename: "Henry_Hsieh.webp", email: "kunghenry02@gmail.com", role: "Service Chair" },
  { filename: "Isha_Mittal.webp", email: "imittal@ucsd.edu", role: "Chapter Administration Officer" },
  { filename: "Laiken_Thoesen.webp", email: "lthoesen@ucsd.edu", role: "Outreach Chair" },
  { filename: "Maria_Nouri.webp", email: "mnouri@ucsd.edu", role: "Secretary" },
  { filename: "Minshen_Yang.webp", email: "miy035@ucsd.edu", role: "Trauma Programs Chair" },
  { filename: "Panav_Vashishat.webp", email: "pvashishat@ucsd.edu", role: "Research Chair" },
  { filename: "Ranya_Ato.webp", email: "r1ato@ucsd.edu", role: "Fundraising Chair" },
  { filename: "Rebecca_Zhang.webp", email: "rlz001@ucsd.edu", role: "Executive Media Chair" },
  { filename: "Ryan_Lao.webp", email: "laoryan100@gmail.com", role: "Volunteer Recruitment Chair" },
  { filename: "Saya_Butler.webp", email: "sayabutler@gmail.com", role: "Health Coordinator" },
  { filename: "Shannon_O_Rourke.webp", email: "slorourke@ucsd.edu", role: "Health Coordinator" },
  { filename: "Sophia_Qin.webp", email: "strollingsofa@gmail.com", role: "Chapter Administration Officer" },
];

function generalBoardFileNameToName(filename: string): string {
  const base = filename.replace(/\.(webp|jpg|jpeg|png)$/i, "");
  if (base.includes("O_Rourke")) return base.replace(/_/g, " ").replace("O Rourke", "O'Rourke");
  return base.replace(/_/g, " ");
}

// General board photos are loaded from public/images/generalboard/
const generalBoard = GENERAL_BOARD_MEMBERS.map(({ filename, email, role }) => ({
  name: generalBoardFileNameToName(filename),
  image: `/images/generalboard/${filename}`,
  email,
  role,
}));

const staff = [
  {
    name: "Owen Dvorak",
    role: "Co-Founder & Executive President of Strategy",
    avatar: "/images/team/owendvorak.webp",
    email: "oedvorak@ucsd.edu",
    desc: "Owen Dvorak is the co-president and founder of our injury prevention program! His other commitments include neuroblastoma research and registry work with NMDP. Some hobbies of his are board gaming, martial arts, and anything in the sun! Owen wants to help people regain their physical freedom to improve the quality of their lives.",
    reason: "Wants to help people regain their physical freedom to improve the quality of their lives.",
  },
  {
    name: "Albert Liu",
    role: "Co-Founder & Executive President of Operations",
    avatar: "/images/team/albertliu.webp",
    email: "axliu@ucsd.edu",
    desc: "Albert Liu is the co-president and founder of our injury prevention program! He is further engaged in cartilage tissue engineering research and leads outreach work for a free tutoring program for K-12 students. In his free time, he loves racing on the UCSD Dragon Boat Team, playing badminton and volleyball with his friends, or just working out at the gym! Albert wants to support his community by increasing overall wellness through a combination of fitness and education.",
    reason: "Wants to support his community by increasing overall wellness through fitness and education.",
  },
  {
    name: "Sonja Wang",
    role: "Executive Vice President",
    avatar: "/images/team/sonjawang.webp",
    email: "sow022@ucsd.edu",
    desc: "Sonja Wang is the vice president of our program! In addition to her involvement in SDIPP and volunteering, she enjoys creating art, figure skating, and dancing. Sonja is focused on empowering individuals to enjoy safe and independent lives.",
    reason: "Focused on empowering individuals to enjoy safe and independent lives.",
  },
  {
    name: "Medha Nemani",
    role: "Executive Secretary",
    avatar: "/images/team/medhanamani.webp",
    email: "medhanemani@gmail.com",
    desc: "Medha Nemani is the secretary of our program! Along with her commitment to the program and research, her hobbies include playing the piano, crafts, taking evening walks, and working on her novel. Medha is passionate about ensuring people are healthy and happy in all phases of their life.",
    reason: "Passionate about ensuring people are healthy and happy in all phases of their life.",
  },
  {
    name: "Payton Chung",
    role: "Executive Treasurer",
    avatar: "/images/team/paytonchung.webp",
    email: "pchung6867@gmail.com",
    desc: "Payton Chung is the treasurer of our program! His other commitments include research on breast cancer metastasis and leading other UCSD organizations like Quiz Bowl. Some of his hobbies include cooking, baking, board/tabletop games, and trivia. Payton is passionate about helping others in the San Diego community in an administrative role.",
    reason: "Passionate about helping others in the San Diego community in an administrative role.",
  },
  {
    name: "Aarav Rajpara",
    role: "Executive Legal Consultation Chair",
    avatar: "/images/team/aaravrajpara.webp",
    email: "avrajpara@ucsd.edu",
    desc: "Aarav Rajpara is a legal consultant chair of our program. His other commitments include internship work at private litigation firms in Southern California and involvement in Triton Mock Trial at UCSD. Some of his hobbies include hiking, skiing and visits to the beach. Aarav hopes to pursue a career in public interest, focusing on providing remedy to individuals and nonprofit organizations in need.",
    reason: "Hopes to pursue a career in public interest, focusing on providing remedy to individuals and nonprofit organizations in need.",
  },
];

export default function StaffPage() {
  return (
    <>
      <PageHeader title="Our Staff" subtitle="Meet the team behind SDIPP" />

      <section className="relative z-10 sm: overflow-hidden py-12 md:py-16 px-4 md:px-6">
                <div className="container mx-auto relative z-10">
          <section className="pt-2 pb-8 md:pb-10">
            {/* unoptimized: serve file as-is (no Next image pipeline). Intrinsic sizing preserves original aspect ratio. */}
            <Image
              src="/images/board/wholeboard.webp"
              alt="SDIPP whole board"
              width={3200}
              height={2133}
              unoptimized
              priority
              className="mx-auto h-auto w-full max-w-5xl rounded-2xl shadow-lg"
            />
          </section>

          <section className="pt-2">
            <h2 className="text-xl md:text-2xl font-sans font-bold text-[#1B2A53] mb-4 text-center md:text-left">
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
