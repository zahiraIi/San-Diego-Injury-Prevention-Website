"use client";

import { Timeline } from "@/components/ui/timeline";
import { Users, CalendarDays, BarChart3, Scale } from "lucide-react";
import PageHeader from "@/components/ui/page-header";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

const committees = [
  {
    name: "Outreach Committee",
    members: "5+ general members",
    icon: Users,
    description: [
      "Explore public health initiatives and research in San Diego county and seeing how we could get involved → focus on underserved communities.",
      "Expand and maintain program partnerships.",
      "Work on optimizing program structure along with organization-wide recruitment strategies and events",
    ],
    focus: "Building and maintaining relationships with schools, clinics, community centers, and potential collaborators.",
    tasks: [
      "Contacting potential partners",
      "Planning follow-up outreach",
      "Coordinating joint projects",
      "Designing partnership proposals",
      "Creating resources for tracking partner contacts/relationships",
      "Planning socials, guest speakers, educational presentations, and other volunteer privileges",
    ],
  },
  {
    name: "Logistics Committee",
    members: "~6 general members",
    icon: CalendarDays,
    description: [
      "Organize and facilitate smooth execution of volunteer events to maximize community benefit",
    ],
    focus: "Planning and executing all events (mobility classes, safety checks, fundraisers, health fairs, etc.).",
    tasks: [
      "Venue booking",
      "Materials prep",
      "Set-up/clean-up plans",
      "Sign-in sheets",
      "Scheduling volunteers",
      "Brainstorming new event formats",
    ],
  },
  {
    name: "Research & Impact Committee",
    members: "~6 general members",
    icon: BarChart3,
    description: [
      "Research and utilize resources to educate the community and improve our programs.",
      "Write summaries to support advertising and volunteer initiatives",
    ],
    focus: "Evaluating program effectiveness, identifying community needs, informing org-wide strategy.",
    tasks: [
      "Collecting and analyzing event data (e.g., # of falls prevented, participant surveys)",
      "Writing impact summaries to support grants",
      "Proposing program tweaks based on findings",
      "Facilitate patient education that addresses systemic obstacles to support long-term patient health",
    ],
  },
  {
    name: "Legal Committee",
    members: "~3 general members",
    icon: Scale,
    description: [
      "Research, develop plans, and execute projects related to improving San Diego county (and other places) through policy and education.",
    ],
    focus: null,
    tasks: null,
  },
];

// Transform committees data into timeline format
const timelineData = committees.map((committee) => ({
  title: committee.name,
  content: (
    <div className="space-y-8">
      {/* Member count badge */}
      <div className="flex items-center gap-4">
        <committee.icon className="w-8 h-8 text-accent-blue" />
        <span className="text-[#1a3a5c] font-sans text-xl bg-accent-blue/10 px-5 py-2 rounded-full">
          {committee.members}
        </span>
      </div>

      {/* Description */}
      <div className="space-y-4">
        {committee.description.map((desc, i) => (
          <p key={i} className="text-[#0f172a] text-base md:text-lg leading-relaxed flex items-start gap-3">
            <span className="text-accent-blue mt-1.5 text-xl">•</span>
            <span>{desc}</span>
          </p>
        ))}
      </div>

      {/* Focus and Tasks Grid */}
      {(committee.focus || committee.tasks) && (
        <div className="grid md:grid-cols-2 gap-8 mt-8 bg-white/60 rounded-xl p-8 border border-accent-blue/20">
          {committee.focus && (
            <div>
              <h4 className="text-xl font-sans text-accent-blue mb-4">Focus</h4>
              <p className="text-[#0f172a] text-base md:text-lg leading-relaxed">{committee.focus}</p>
            </div>
          )}
          {committee.tasks && (
            <div className={committee.focus ? "md:border-l md:border-accent-blue/30 md:pl-8" : ""}>
              <h4 className="text-xl font-sans text-[#7f1d1d] mb-4">Member Tasks</h4>
              <ul className="space-y-3">
                {committee.tasks.map((task, i) => (
                  <li key={i} className="text-[#0f172a] text-base md:text-lg flex items-start gap-3">
                    <span className="text-[#7f1d1d]">✓</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  ),
}));

export default function CommitteesPage() {
  return (
    <>
      <PageHeader
        title="Committees"
        subtitle="Join a committee and contribute to our mission of promoting injury prevention in San Diego."
      />

      {/* Timeline Section */}
      <section className="relative z-10 -mt-12 rounded-t-[2rem] sm:rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] overflow-hidden py-12 md:py-16 px-6">
        <GrainientWhiteSection />
        <div className="container mx-auto max-w-6xl relative z-10">
          <Timeline data={timelineData} />
        </div>
      </section>
    </>
  );
}
