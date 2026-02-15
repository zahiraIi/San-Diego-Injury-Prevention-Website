"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import GrainientBlueSection from "@/components/ui/GrainientBlueSection";

type NavItem = {
  name: string;
  link?: string;
  children?: { name: string; link: string }[];
};

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  {
    name: "About",
    link: "/about",
    children: [
      { name: "Staff", link: "/staff" },
      { name: "Committees", link: "/committees" },
    ],
  },
  { name: "Events", link: "/events" },
  { name: "Gallery", link: "/gallery" },
  { name: "More", link: "/more" },
  { name: "Contact", link: "/contact" },
];

export default function StaticNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;

        if (currentY < 10) {
          setIsVisible(true);
        } else if (currentY > lastScrollY.current + 5) {
          setIsVisible(false);
        } else if (currentY < lastScrollY.current - 5) {
          setIsVisible(true);
        }

        lastScrollY.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 transition-all duration-300",
          "bg-transparent py-3 md:py-5",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {/* Left: Logo */}
        <Link href="/" className="relative w-10 h-10 md:w-16 md:h-16">
          <Image
            src="/logo.webp"
            alt="SDIPP Logo"
            fill
            className="object-contain drop-shadow-lg"
            priority
            sizes="64px"
          />
        </Link>

        {/* Right: Navigation */}
        <div className="flex items-center gap-3 md:gap-8">
          {/* Links (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="inline-flex items-center gap-1 font-sans text-sm md:text-base font-medium text-white/90 hover:text-white transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.name && "-rotate-180",
                      )}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-1/2 z-40 mt-3 w-40 -translate-x-1/2 rounded-2xl bg-white py-3 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.link}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-left text-sm font-sans text-[#1a3a5c] hover:bg-gray-100"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.link ?? "/"}
                  className="font-sans text-sm md:text-base font-medium transition-colors text-white/90 hover:text-white"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Apply Button (desktop) */}
          <Link
            href="/apply"
            className="hidden md:group flex items-center gap-2 px-6 py-2 rounded-full font-sans text-sm font-medium transition-all bg-[#7f1d1d] hover:bg-[#6b1515] border border-[#6b1515] text-white"
          >
            <span>apply</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 pt-20 pb-8 px-6 overflow-y-auto">
          <GrainientBlueSection className="-z-10" />
          <div className="relative z-10 flex flex-col gap-4 max-w-md mx-auto">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="flex items-center justify-between w-full px-4 py-3 text-left font-sans text-lg font-medium text-white/90 hover:text-white transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform",
                        openDropdown === item.name && "-rotate-180",
                      )}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 pt-2 pb-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.link}
                          onClick={() => {
                            setOpenDropdown(null);
                            setMobileMenuOpen(false);
                          }}
                          className="block px-4 py-2 text-left text-base font-sans text-white/80 hover:text-white transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.link ?? "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-left font-sans text-lg font-medium text-white/90 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ),
            )}
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 rounded-full font-sans text-base font-medium text-center bg-[#7f1d1d] hover:bg-[#6b1515] border border-[#6b1515] text-white transition-all"
            >
              apply →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
