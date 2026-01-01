"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Heart } from "lucide-react";
import { useRef } from "react";

export default function AboutSection2() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto" ref={heroRef}>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Right side - Content */}
          <div className="flex-1">
            <TimelineContent
              as="h1"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="sm:text-4xl text-2xl md:text-5xl !leading-[110%] font-rosehot text-foreground mb-8"
            >
              We are{" "}
              <TimelineContent
                as="span"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-accent-blue border-2 border-accent-blue inline-block xl:h-16 border-dotted px-2 rounded-md"
              >
                dedicated
              </TimelineContent>{" "}
              to promoting fitness, mobility, and injury-free lives for seniors
              in our community. Our mission is to{" "}
              <TimelineContent
                as="span"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-accent-red border-2 border-accent-red inline-block xl:h-16 border-dotted px-2 rounded-md"
              >
                empower
              </TimelineContent>{" "}
              individuals through{" "}
              <TimelineContent
                as="span"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-accent-blue border-2 border-accent-blue inline-block xl:h-16 border-dotted px-2 rounded-md"
              >
                education and support.
              </TimelineContent>
            </TimelineContent>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="mb-4 sm:text-xl text-base"
              >
                <div className="font-rosehot font-medium text-foreground mb-1 capitalize">
                  San Diego Injury Prevention Program
                </div>
                <div className="font-charter text-accent-blue font-semibold uppercase">
                  Building healthier communities
                </div>
              </TimelineContent>

              <a
                href="#our-focus"
                className="bg-accent-blue gap-2 font-medium shadow-lg shadow-accent-blue/50 text-white h-12 px-6 rounded-full text-sm inline-flex items-center cursor-pointer hover:bg-accent-red transition-colors"
              >
                <Heart fill="white" size={16} />
                Our Focus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

