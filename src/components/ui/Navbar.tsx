"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Mission", href: "#mission" },
  { name: "Pillars", href: "#pillars" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Apply", href: "#apply" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].href.substring(1));
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(section, { offset: -80, duration: 1.5 });
      } else {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="w-full py-6 px-8 flex items-center justify-between font-charter bg-transparent fixed top-0 z-40 backdrop-blur-sm bg-background/80">
      {/* Logo */}
      <button
        onClick={() => scrollToSection("#home")}
        className="text-2xl font-rosehot text-accent-red z-50"
      >
        SDIPP
      </button>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.href)}
            className={clsx(
              "text-foreground hover:text-accent-red transition-colors text-sm uppercase tracking-widest font-bold",
              activeSection === link.href.substring(1) && "text-accent-red border-b-2 border-accent-red"
            )}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 flex flex-col items-center justify-center gap-8 z-40 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-rosehot text-foreground hover:text-accent-red"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

