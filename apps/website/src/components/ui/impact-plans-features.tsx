"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

export interface ImpactPlanItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ImpactPlansFeaturesProps {
  title?: string;
  subtitle?: string;
  items: ImpactPlanItem[];
}

export function ImpactPlansFeatures({
  title = "HOW WE CREATE IMPACT",
  subtitle = "From community outreach to collaborations within healthcare—see what drives our mission forward.",
  items,
}: ImpactPlansFeaturesProps) {
  const [topRow, bottomRow] = [items.slice(0, 3), items.slice(3, 5)];

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:max-w-6xl">
        <div className="mb-12 md:mb-16">
          <span className="text-sm font-bold tracking-widest text-[#E2231A] uppercase mb-3 block">
            Impact & Plans
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#1B2A53] uppercase mb-4 tracking-wide">
            {title}
          </h2>
          <p className="text-lg text-[#1B2A53]/80 max-w-2xl font-medium">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex h-full">
                <Card className="relative flex flex-col h-full w-full bg-white border-2 border-gray-100 rounded-none shadow-none hover:border-[#1B2A53] transition-colors group">
                  <CardContent className="pt-8 px-6 pb-8 flex flex-col h-full items-start">
                    <div className="mb-6 flex aspect-square size-14 items-center justify-center bg-[#E2231A] text-white rounded-full group-hover:bg-[#1B2A53] transition-colors">
                      <Icon className="size-7" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold uppercase tracking-wide text-[#1B2A53] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#1B2A53]/80 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
