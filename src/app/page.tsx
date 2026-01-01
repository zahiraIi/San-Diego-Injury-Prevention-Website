"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { LiquidGlassCard, LiquidButton } from "@/components/kokonutui/liquid-glass-card";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { WordPullUp } from "@/components/ui/word-pull-up";
import { AnimatedIcon } from "@/components/ui/animated-icon";
import TeamSection from "@/components/ui/team-section";
import FAQSection from "@/components/ui/faq-section";
import ContactForm from "@/components/ui/contact-form";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import AboutSection2 from "@/components/ui/about-section-2";
import { HowItWorks } from "@/components/ui/how-it-works";
import { IconHeartHandshake, IconCoins, IconBook } from "@tabler/icons-react";
import { useEffect } from "react";
import Lenis from "lenis";

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
    name: "Sonja Wang",
    role: "Program Researcher",
    avatar: "/images/team/sonjawang.webp",
    desc: "Sonja Wang is the program researcher of our program! In addition to her involvement in SDIPP and volunteering, she enjoys creating art, figure skating, and dancing. Sonja is focused on empowering individuals to enjoy safe and independent lives.",
    reason: "Focused on empowering individuals to enjoy safe and independent lives.",
  },
  {
    name: "Aarav Rajpara",
    role: "Legal Consultant Chair",
    avatar: "/images/team/aaravrajpara.webp",
    desc: "Aarav Rajpara is a legal consultant chair of our program. His other commitments include internship work at private litigation firms in Southern California and involvement in Triton Mock Trial at UCSD. Some of his hobbies include hiking, skiing and visits to the beach. Aarav hopes to pursue a career in public interest, focusing on providing remedy to individuals and nonprofit organizations in need.",
    reason: "Hopes to pursue a career in public interest, focusing on providing remedy to individuals and nonprofit organizations in need.",
  },
];

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
        <Image
              src="/logo.png"
              alt="San Diego Injury Prevention Program Logo"
              fill
              className="object-contain"
          priority
        />
          </motion.div>
          
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl md:text-2xl font-bold tracking-widest text-accent-red mb-4 uppercase">
                Welcome to the
              </h2>
            </motion.div>
            
            <div className="w-full max-w-7xl mx-auto px-4">
              <GradualSpacing
                text="San Diego Injury Prevention Program"
                className="font-rosehot text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight tracking-tight"
                duration={0.6}
                delayMultiple={0.05}
                framerProps={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
            </div>
            
            <div className="max-w-2xl mx-auto">
              <WordPullUp
                words="Promoting fitness, mobility, and injury-free lives for seniors in our community."
                className="text-xl md:text-2xl text-accent-blue font-charter leading-normal tracking-normal"
                wrapperFramerProps={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 1.2,
                    },
                  },
                }}
                framerProps={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="min-h-screen flex items-center px-6 py-32">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <LiquidGlassCard className="border border-accent-blue/20 bg-gradient-to-br from-background/80 to-accent-blue/10">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/volunteering/volunteer1.webp"
                    alt="Volunteering at San Diego Injury Prevention Program"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </LiquidGlassCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left space-y-6"
            >
              <h2 className="text-5xl font-rosehot text-accent-blue">Our Mission</h2>
              <p className="text-lg opacity-80 leading-relaxed">
                We are dedicated to promoting fitness and mobility among older individuals in the San Diego area. 
                Our club offers a supportive community where members can engage in various activities to enhance 
                their overall well-being.
              </p>
              <p className="text-lg opacity-80 leading-relaxed">
                At San Diego Injury Prevention Program, we believe in empowering seniors to lead active lives 
                free from injuries. Through our programs, we focus on improving fitness levels, mobility, 
                and quality of life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="min-h-screen flex items-center px-6 py-32">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-rosehot text-center text-accent-red mb-16"
          >
            Our Pillars
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 pt-20"
          >
            <h2 className="text-6xl md:text-7xl font-rosehot text-foreground mb-4">About Us</h2>
            <p className="text-xl text-accent-blue font-charter max-w-2xl mx-auto mb-8">
              Meet the team behind SDIPP
            </p>
            <div className="w-24 h-1 bg-accent-red mx-auto" />
          </motion.div>

          <AboutSection2 />

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
              ]}
              title="Gallery"
              description="Explore our community engagement and outreach activities"
            />
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="min-h-screen flex items-center px-6 py-32">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-6xl md:text-7xl font-rosehot text-foreground mb-4">Events</h2>
            <p className="text-xl text-accent-blue font-charter max-w-2xl mx-auto mb-8">
              Join us at our upcoming events
            </p>
            <div className="w-24 h-1 bg-accent-red mx-auto" />
          </motion.div>

          <LiquidGlassCard className="border border-accent-blue/20 bg-gradient-to-br from-background/80 to-accent-blue/10 p-12">
            <h2 className="text-3xl font-rosehot mb-6 text-center">Upcoming Events</h2>
            <div className="w-full max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                <iframe
                  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  width="800"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  title="SDIPP Events Calendar"
                ></iframe>
              </div>
              <p className="text-sm text-center text-muted-foreground mt-4 opacity-70">
                Replace the calendar src URL with your Google Calendar embed URL
              </p>
            </div>
          </LiquidGlassCard>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="min-h-screen flex items-center px-6 py-32">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-6xl md:text-7xl font-rosehot text-foreground mb-4">Apply</h2>
            <p className="text-xl text-accent-blue font-charter max-w-2xl mx-auto mb-8">
              Join the movement
            </p>
            <div className="w-24 h-1 bg-accent-red mx-auto" />
          </motion.div>

          <HowItWorks />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="min-h-screen flex items-center px-6 py-32">
        <div className="container mx-auto">
          <FAQSection
            faqs={[
              { question: "How do I become a member?", answer: "Refer to the Apply section on this website!" },
              { question: "What are the benefits?", answer: "Join a supportive community, get Kaplan benefits (15% off courses), and make a real impact." },
              { question: "How do I get certified for volunteer hours?", answer: "Our master spreadsheet logs your hours. More info coming soon." }
            ]}
            title="Looking for answers?"
            subtitle="Find answers to common questions about our program and membership."
            imageUrl="/images/volunteering/volunteer2.webp"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-32">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-6xl md:text-7xl font-rosehot text-foreground mb-4">Contact Us</h2>
            <p className="text-xl text-accent-blue font-charter max-w-2xl mx-auto mb-8">
              We'd love to hear from you
            </p>
            <div className="w-24 h-1 bg-accent-red mx-auto" />
          </motion.div>

          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="mb-8 text-center">
              <p className="text-lg mb-2"><strong>Email:</strong> sdinjurypreventionprogram@gmail.com</p>
              <p className="text-lg"><strong>Location:</strong> La Jolla, CA</p>
            </div>
            <div className="w-full flex justify-center">
              <ContactForm />
            </div>
          </div>
    </div>
      </section>
    </>
  );
}
