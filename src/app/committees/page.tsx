"use client";

import { motion } from "motion/react";
import { Timeline } from "@/components/ui/timeline";
import { IconUsers, IconCalendarEvent, IconChartBar, IconScale } from "@tabler/icons-react";

const committees = [
  {
    name: "Outreach Committee",
    members: "5+ general members",
    icon: IconUsers,
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
    icon: IconCalendarEvent,
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
    icon: IconChartBar,
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
    icon: IconScale,
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
        <span className="text-[#a8c4d4] font-charter text-xl bg-[#1a3a5c]/50 px-5 py-2 rounded-full">
          {committee.members}
        </span>
      </div>

      {/* Description */}
      <div className="space-y-4">
        {committee.description.map((desc, i) => (
          <p key={i} className="text-white/90 text-base md:text-lg leading-relaxed flex items-start gap-3">
            <span className="text-accent-blue mt-1.5 text-xl">•</span>
            <span>{desc}</span>
          </p>
        ))}
      </div>

      {/* Focus and Tasks Grid */}
      {(committee.focus || committee.tasks) && (
        <div className="grid md:grid-cols-2 gap-8 mt-8 bg-[#1a3a5c]/30 rounded-xl p-8">
          {committee.focus && (
            <div>
              <h4 className="text-xl font-rosehot text-accent-blue mb-4">Focus</h4>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">{committee.focus}</p>
            </div>
          )}
          {committee.tasks && (
            <div className={committee.focus ? "md:border-l md:border-[#5a8fa8]/50 md:pl-8" : ""}>
              <h4 className="text-xl font-rosehot text-[#7dd3fc] mb-4">Member Tasks</h4>
              <ul className="space-y-3">
                {committee.tasks.map((task, i) => (
                  <li key={i} className="text-white/90 text-base md:text-lg flex items-start gap-3">
                    <span className="text-[#7dd3fc]">✓</span>
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
    <div className="bg-[#1a3a5c] min-h-screen">
      {/* Header */}
      <div className="container mx-auto pt-32 pb-8 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-rosehot text-white text-center"
        >
          Committees
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#a8c4d4] text-center mt-4 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Join a committee and contribute to our mission of promoting injury prevention in San Diego
        </motion.p>
      </div>

      {/* Timeline */}
      <Timeline data={timelineData} />
    </div>
  );
}
