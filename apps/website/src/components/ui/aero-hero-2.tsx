import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

/** Full-bleed hero image — large WebP from `/public/images`. */
const HERO_IMAGE_SRC =
  "/images/Health Fairs/DSC04455.webp";

const AVATAR_IMAGES: readonly { alt: string; src: string }[] = [
  { alt: "SDIPP board member", src: "/images/generalboard/Panav_Vashishat.webp" },
  { alt: "SDIPP board member", src: "/images/generalboard/Shannon_O_Rourke.webp" },
  { alt: "SDIPP board member", src: "/images/generalboard/Derek_Nguyen.webp" },
  { alt: "SDIPP board member", src: "/images/generalboard/Isha_Mittal.webp" },
];

export default function AeroHero2() {
  return (
    <section className="relative flex min-h-screen w-full items-end justify-center overflow-hidden">
      <div className="absolute inset-0 h-full">
        <Image
          src={HERO_IMAGE_SRC}
          alt="San Diego Injury Prevention Program at a community health event"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 pb-16 pt-28 text-white sm:px-6 md:px-8 md:pb-20 md:pt-32">
        <div className="flex flex-col gap-12 text-left lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-3xl space-y-5 md:space-y-6">
            <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              San Diego Injury Prevention{" "}
              <span className="text-[#E2231A]">Program</span>
            </h1>
            <p className="max-w-2xl font-sans text-lg font-light text-white/90 md:text-xl">
              A student-run 501(c)(3) nonprofit at UC San Diego, empowering our
              community through injury education, outreach, and evidence-based
              programs.
            </p>
          </div>

          <div className="flex w-full flex-col gap-8 lg:mt-0 lg:w-auto lg:max-w-sm lg:shrink-0">
            <div className="flex flex-wrap items-center gap-4">
              <div
                className="flex -space-x-3"
                aria-label="SDIPP leadership team"
              >
                {AVATAR_IMAGES.map((item, i) => (
                  <Avatar
                    key={item.src}
                    className="size-12 border-2 border-white/90 transition-all duration-300 hover:grayscale-0"
                  >
                    <AvatarImage src={item.src} alt={item.alt} />
                    <AvatarFallback className="bg-[#1B2A53] text-white">
                      M{i + 1}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex flex-col font-normal leading-tight">
                <span className="text-base font-heading uppercase tracking-wide text-white sm:text-lg">
                  UC San Diego
                </span>
                <span className="text-sm text-white/80">Student-led teams</span>
              </div>
            </div>

            <div className="flex w-fit">
              <Button
                asChild
                variant="ghost"
                className="group h-auto cursor-pointer rounded-full border-none bg-transparent px-0 py-0 font-normal shadow-none hover:bg-transparent"
              >
                <Link
                  href="/apply"
                  className="flex cursor-pointer items-center justify-center gap-0"
                >
                  <span className="rounded-full bg-white px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-[#1B2A53] transition-colors duration-500 ease-in-out group-hover:bg-[#1B2A53] group-hover:text-white">
                    Apply now
                  </span>
                  <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-white p-5 text-[#1B2A53] duration-500 ease-in-out transition-colors group-hover:bg-[#1B2A53] group-hover:text-white">
                    <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                    <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
