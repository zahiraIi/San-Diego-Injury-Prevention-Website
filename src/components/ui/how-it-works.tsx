"use client";

import { cn } from "@/lib/utils";
import { FileText, Users, Heart } from "lucide-react";
import type React from "react";

// The main props for the HowItWorks component
interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {}

// The props for a single step card
interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  link?: string;
}

/**
 * A single step card within the "How It Works" section.
 * It displays an icon, title, description, and a list of benefits.
 */
const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  benefits,
  link,
}) => (
  <div
    className={cn(
      "relative rounded-2xl border bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-lg hover:border-primary/50 hover:bg-muted"
    )}
  >
    {/* Icon */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary">
      {icon}
    </div>
    {/* Title and Description */}
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="mb-6 text-muted-foreground">{description}</p>
    {/* Benefits List */}
    <ul className="space-y-3 mb-4">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
          </div>
          <span className="text-muted-foreground">{benefit}</span>
        </li>
      ))}
    </ul>
    {/* Link Button */}
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Apply Now
        <FileText className="ml-2 h-4 w-4" />
      </a>
    )}
  </div>
);

/**
 * A responsive "How It Works" section that displays a 3-step process.
 * It is styled with shadcn/ui theme variables to support light and dark modes.
 */
export const HowItWorks: React.FC<HowItWorksProps> = ({
  className,
  ...props
}) => {
  const stepsData = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Submit Your Application",
      description:
        "Fill out our membership application form with your basic information and areas of interest.",
      benefits: [
        "Quick and easy online application",
        "No application fees required",
        "Response within 48 hours",
      ],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSd5pc-3ocPrIEtTGq6do2Gc6kGwnQe-qd1JfT8zqcfDsBJ0jQ/viewform",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Join Our Community",
      description:
        "Get connected with our team and other members through orientation sessions and welcome events.",
      benefits: [
        "Attend orientation sessions",
        "Meet current members and leadership",
        "Learn about volunteer opportunities",
      ],
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Start Making a Difference",
      description:
        "Begin volunteering in committees, health fairs, fitness classes, and fall prevention programs.",
      benefits: [
        "Join outreach, legal, or research teams",
        "Lead fitness and yoga classes",
        "Volunteer at health fairs and events",
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className={cn("w-full bg-background py-16 sm:py-24", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-sans">
            How to Become a Member
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-charter">
            Join the San Diego Injury Prevention Program and make a meaningful impact in your community
          </p>
        </div>

        {/* Step Indicators with Connecting Line */}
        <div className="relative mx-auto mb-8 w-full max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-border"
          ></div>
          {/* Use grid to align numbers with the card grid below */}
          <div className="relative grid grid-cols-3">
            {stepsData.map((_, index) => (
              <div
                key={index}
                // Center the number within its grid column
                className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-muted font-semibold text-foreground ring-4 ring-background"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
              link={step.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

