"use client";

import { BookOpen, Heart, Dumbbell, Megaphone, Handshake } from "lucide-react";
import { ImpactPlansFeatures } from "@/components/ui/impact-plans-features";

const impactCards = [
  {
    title: "Health Literacy Presentations",
    description:
      "Educate students in San Diego schools on the importance of injury prevention",
    icon: BookOpen,
  },
  {
    title: "Health Fairs",
    description:
      "Provide helpful resources for local communities, promoting health and wellness",
    icon: Heart,
  },
  {
    title: "Fall Prevention Classes",
    description:
      "Lead fitness, mobility, and tai chi classes for residents of nursing homes.",
    icon: Dumbbell,
  },
  {
    title: "Community Outreach",
    description:
      "Promote health programs by distributing informational materials and engaging with local residents to increase awareness and participation.",
    icon: Megaphone,
  },
  {
    title: "Collaboration",
    description:
      "Work with professionals from various hospitals and health groups to coordinate initiatives, share resources, and support efforts that improve public health outcomes.",
    icon: Handshake,
  },
];

export default function HomeImpactSection() {
  return (
    <ImpactPlansFeatures
      subtitle="From community outreach to collaborations within healthcare—see what drives our mission forward."
      items={impactCards}
    />
  );
}
