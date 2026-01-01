import { cn } from "@/lib/utils";
import {
  IconHeartHandshake,
  IconCoins,
  IconBook,
} from "@tabler/icons-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesSectionWithHoverEffectsProps {
  features: Feature[];
}

export function FeaturesSectionWithHoverEffects({ features }: FeaturesSectionWithHoverEffectsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto justify-items-center md:justify-items-stretch">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        "items-center text-center md:items-start md:text-left",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-4 md:px-10 text-accent-blue dark:text-accent-blue">
        {icon}
      </div>
      <div className="text-lg font-rosehot font-bold mb-2 relative z-10 px-4 md:px-10 w-full">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-accent-red transition-all duration-200 origin-center hidden md:block" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground dark:text-neutral-100 md:group-hover/feature:translate-x-2 group-hover/feature:translate-x-0">
          {title}
        </span>
      </div>
      <p className="text-sm text-foreground/70 dark:text-neutral-300 max-w-xs relative z-10 px-4 md:px-10 font-charter">
        {description}
      </p>
    </div>
  );
};

