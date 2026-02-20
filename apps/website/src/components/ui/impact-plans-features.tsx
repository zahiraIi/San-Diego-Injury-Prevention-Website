"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import GrainientWhiteSection from "@/components/ui/GrainientWhiteSection";

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
  title = "How we create impact",
  subtitle = "From committees to community collaboration—see what drives our mission forward.",
  items,
}: ImpactPlansFeaturesProps) {
  const [topRow, bottomRow] = [items.slice(0, 3), items.slice(3, 5)];

  return (
    <section className="relative py-12 md:py-16">
      <GrainientWhiteSection />
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:max-w-5xl">
        <div className="relative">
          <div
            data-reveal="left"
            className="mb-10 md:mb-14 text-center"
          >
            <p className="text-sm font-semibold tracking-widest text-[#1a3a5c]/70 uppercase mb-3">
              Impact & Plans
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#1a3a5c] mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-6 gap-3">
            {/* Top row - 3 cards (each spans 2 cols on lg) */}
            {topRow.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-reveal="right"
                  data-delay=""
                  className="col-span-full lg:col-span-2"
                >
                  <Card className="relative flex h-full overflow-hidden bg-white border-gray-100 shadow-sm">
                    <CardContent className="pt-6">
                      <div className="relative mx-auto flex aspect-square size-12 items-center justify-center rounded-full border border-[#1a3a5c]/15 bg-[#1a3a5c]/5 text-[#1a3a5c">
                        <Icon className="size-6" strokeWidth={2} />
                      </div>
                      <div className="relative z-10 mt-6 space-y-2 text-center">
                        <h3 className="text-lg font-semibold text-[#1a3a5c] transition">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}

            {/* Bottom row - 2 cards (each spans 3 cols on lg) */}
            {bottomRow.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-reveal="right"
                  data-delay=""
                  className="col-span-full lg:col-span-3"
                >
                  <Card className="relative flex h-full overflow-hidden bg-white border-gray-100 shadow-sm">
                    <CardContent className="pt-6">
                      <div className="relative mx-auto flex aspect-square size-12 items-center justify-center rounded-full border border-[#1a3a5c]/15 bg-[#1a3a5c]/5 text-[#1a3a5c">
                        <Icon className="size-6" strokeWidth={2} />
                      </div>
                      <div className="relative z-10 mt-6 space-y-2 text-center">
                        <h3 className="text-lg font-semibold text-[#1a3a5c] transition">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
