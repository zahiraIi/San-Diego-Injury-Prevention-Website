"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

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
      { name: "Message from Presidents", link: "/message-from-presidents" },
      { name: "Staff", link: "/staff" },
      { name: "Committees", link: "/committees" },
    ],
  },
  {
    name: "Events",
    link: "/events",
    children: [
      { name: "Calendar", link: "/events" },
      { name: "Programs", link: "/programs" },
      { name: "Gallery", link: "/gallery" },
    ],
  },
  {
    name: "Resources",
    link: "/more",
    children: [
      { name: "For Community Members", link: "/more/community-members" },
      { name: "Partner With Us", link: "/more/partner-with-us" },
      { name: "For Volunteers", link: "/more/for-volunteers" },
    ],
  },
  { name: "Apply", link: "/apply" },
  { name: "FAQs", link: "/faqs" },
  { name: "Contact", link: "/contact" },
  { name: "Login", link: process.env.NEXT_PUBLIC_PORTAL_URL || "/portal" },
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
        {/* Left: Logo — larger on mobile */}
        <Link href="/" className="relative w-14 h-14 md:w-16 md:h-16">
          <Image
            src="/logo.webp"
            alt="SDIPP Logo"
            fill
            className="object-contain drop-shadow-lg"
            priority
            sizes="(max-width: 768px) 56px, 64px"
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

          {/* Mobile Menu Button — larger tap target and icon on mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-3 -m-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>

          {/* Apply Button (desktop) — signup-style with glow */}
          <Link
            href="/apply"
            className="hidden md:group relative flex items-center justify-center w-full sm:w-auto"
          >
            <span
              className="absolute inset-0 -m-2 rounded-full bg-gray-100 opacity-40 blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"
              aria-hidden
            />
            <span className="relative z-10 flex items-center gap-2 px-4 py-2 sm:px-5 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200">
              <span>apply</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu — first-section overlay on all pages: transparent, centered, spans ~first section only */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 right-0 z-40 h-[48svh] flex flex-col items-center justify-center px-6 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(143,191,217,0.88), rgba(26,90,138,0.9), rgba(0,26,58,0.92))",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* Centered watermark */}
          <p
            className="absolute inset-0 flex items-center justify-center font-sans text-white/10 pointer-events-none select-none text-[clamp(2.5rem,12vw,5rem)] font-bold tracking-tight"
            aria-hidden
          >
            san diego injury prevention
          </p>
          <p className="absolute top-[55%] left-1/2 -translate-x-1/2 font-sans text-white/10 text-sm pointer-events-none select-none" aria-hidden>
            program
          </p>
          {/* Nav + CTA centered */}
          <div className="relative z-10 flex flex-col items-center gap-1 w-full max-w-xs">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name} className="flex flex-col items-center w-full">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="flex items-center justify-center gap-1 w-full py-2.5 font-sans text-base font-medium text-white/95 hover:text-white transition-colors"
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
                    <div className="flex flex-col items-center gap-1 pt-1 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.link}
                          onClick={() => {
                            setOpenDropdown(null);
                            setMobileMenuOpen(false);
                          }}
                          className="py-1.5 font-sans text-sm text-white/85 hover:text-white transition-colors"
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
                  className="py-2.5 font-sans text-base font-medium text-white/95 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ),
            )}
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="relative group mt-3 w-full sm:w-auto flex items-center justify-center"
            >
              <span
                className="absolute inset-0 -m-2 rounded-full bg-gray-100 opacity-40 blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl"
                aria-hidden
              />
              <span className="relative z-10 px-5 py-2.5 rounded-full font-sans text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full text-center">
                apply →
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
