"use client";

import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconInfoCircle,
  IconStack,
  IconUsers,
  IconCalendar,
  IconFileText,
  IconHelpCircle,
  IconMail,
} from "@tabler/icons-react";

const sections = [
  { id: "home", label: "Home", icon: IconHome },
  { id: "mission", label: "Mission", icon: IconInfoCircle },
  { id: "pillars", label: "Pillars", icon: IconStack },
  { id: "about", label: "About", icon: IconUsers },
  { id: "events", label: "Events", icon: IconCalendar },
  { id: "apply", label: "Apply", icon: IconFileText },
  { id: "faq", label: "FAQ", icon: IconHelpCircle },
  { id: "contact", label: "Contact", icon: IconMail },
];

export default function DynamicIslandNav() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Use viewport-based threshold
      
      let current = sections[0].id; // Default to first section
      
      // Find the section that's currently in view
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // Check if scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = sections[i].id;
            break;
          }
          // If we've scrolled past this section, it's the current one
          if (scrollPosition >= sectionTop) {
            current = sections[i].id;
          }
        }
      }
      
      setCurrentSection((prev) => {
        if (prev !== current) {
          return current;
        }
        return prev;
      });
    };

    // Initial check
    handleScroll();

    // Listen to window scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Listen to Lenis scroll events for smooth scroll updates
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.on("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (lenis) {
        lenis.off("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(section, { 
          offset: -80, 
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const dockItems = sections.map((section) => {
    const IconComponent = section.icon;
    const isActive = section.id === currentSection;
    return {
      title: section.label,
      icon: (
        <IconComponent className={`h-full w-full transition-colors ${
          isActive ? 'text-accent-red' : 'text-accent-blue'
        }`} />
      ),
      href: `#${section.id}`,
    };
  });

  const handleItemClick = (href: string) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      setCurrentSection(sectionId);
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 pointer-events-none">
      <div className="pointer-events-auto flex justify-center">
        <FloatingDock
          items={dockItems}
          desktopClassName="bg-background/90 backdrop-blur-xl border border-accent-blue/20 shadow-2xl"
          mobileClassName=""
          onItemClick={handleItemClick}
        />
      </div>
    </div>
  );
}
