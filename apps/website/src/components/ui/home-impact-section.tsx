"use client";

import { Users, Heart, Dumbbell, Shield, Handshake } from "lucide-react";
import { ImpactPlansFeatures } from "@/components/ui/impact-plans-features";

const impactCards = [
  { title: "Committees", description: "Join a variety of committees, including outreach, legal, and research.", icon: Users },
  { title: "Health Fairs", description: "Network at health fairs, both with APAMSA and in the community.", icon: Heart },
  { title: "Weekly classes", description: "Lead fitness, yoga, and other classes for residents of nursing homes.", icon: Dumbbell },
  { title: "Fall/Injury prevention", description: "Volunteer through Scripps and the UCSD Health Trauma Center.", icon: Shield },
  { title: "Collaboration", description: "Work with the San Diego Fall Prevention Task Force.", icon: Handshake },
];

export default function HomeImpactSection() {
  return <ImpactPlansFeatures items={impactCards} />;
}
