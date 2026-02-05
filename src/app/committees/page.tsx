"use client";

import { motion } from "motion/react";
import PageHeader from "@/components/ui/PageHeader";

const committees = [
  {
    name: "Outreach Committee",
    members: "5+ general members",
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
    description: [
      "Research, develop plans, and execute projects related to improving San Diego county (and other places) through policy and education.",
    ],
    focus: null,
    tasks: null,
  },
];

const impactCards = [
  {
    title: "Committees",
    description: "Join a variety of committees, including outreach, legal, and research.",
  },
  {
    title: "Health Fairs",
    description: "Network at health fairs, both with APAMSA and in the community.",
  },
  {
    title: "Weekly classes",
    description: "Lead fitness, yoga, and other classes for residents of nursing homes.",
  },
  {
    title: "Fall/Injury prevention",
    description: "Volunteer through Scripps and the UCSD Health Trauma Center.",
  },
  {
    title: "Collaboration",
    description: "Work with the San Diego Fall Prevention Task Force.",
  },
];

export default function CommitteesPage() {
  return (
    <div className="pb-20">
      {/* Impact & Plans Section */}
      <section className="bg-[#7a9bb5] py-20 px-6">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-rosehot text-white text-center mb-12"
          >
            Impact & Plans
          </motion.h1>

          {/* Top Row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {impactCards.slice(0, 3).map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#f5f0e8] rounded-lg p-8 text-center"
              >
                <h3 className="text-2xl font-rosehot text-[#1a3a5c] mb-4">{card.title}</h3>
                <p className="text-[#1a3a5c] text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {impactCards.slice(3).map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                className="bg-[#f5f0e8] rounded-lg p-8 text-center"
              >
                <h3 className="text-2xl font-rosehot text-[#1a3a5c] mb-4">{card.title}</h3>
                <p className="text-[#1a3a5c] text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="bg-[#1a3a5c] py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-rosehot text-white text-center mb-16"
          >
            Committees
          </motion.h2>

          <div className="space-y-16">
            {committees.map((committee, index) => (
              <motion.div
                key={committee.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6"
              >
                {/* Committee Header */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="bg-[#5a8fa8] rounded-full px-8 py-4">
                    <h3 className="text-2xl md:text-3xl font-rosehot text-white">{committee.name}</h3>
                  </div>
                  <span className="text-[#a8c4d4] font-charter text-lg">{committee.members}</span>
                </div>

                {/* Description bullets */}
                <ul className="text-white space-y-2 ml-4">
                  {committee.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-white mt-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Focus and Tasks */}
                {(committee.focus || committee.tasks) && (
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {committee.focus && (
                      <div>
                        <h4 className="text-xl font-rosehot text-[#a8c4d4] mb-4">Focus</h4>
                        <p className="text-white">{committee.focus}</p>
                      </div>
                    )}
                    {committee.tasks && (
                      <div className="md:border-l md:border-[#5a8fa8] md:pl-8">
                        <h4 className="text-xl font-rosehot text-[#a8c4d4] mb-4">Member tasks</h4>
                        <ul className="text-white space-y-2">
                          {committee.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-2">•</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Divider between committees */}
                {index < committees.length - 1 && (
                  <div className="w-full h-px bg-[#5a8fa8] mt-12" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
