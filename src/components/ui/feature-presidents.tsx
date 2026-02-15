"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface FeatureItem {
  title?: string;
  description: string;
}

interface FeaturePresidentsProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
  imageSrc: string;
  imageAlt: string;
  /** Use white text (e.g. on blue gradient) */
  light?: boolean;
}

export function FeaturePresidents({
  badge = "Message",
  title,
  subtitle,
  items,
  imageSrc,
  imageAlt,
  light = false,
}: FeaturePresidentsProps) {
  const textClass = light
    ? "text-white"
    : "text-foreground";
  const mutedClass = light
    ? "text-white/80"
    : "text-muted-foreground";

  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`grid border rounded-xl p-8 md:p-10 grid-cols-1 gap-8 items-center lg:grid-cols-2 w-full backdrop-blur-xl shadow-2xl shadow-black/10 ${
            light
              ? "border-white/25 bg-[#002E5D]/30"
              : "border-border bg-card/80"
          }`}
        >
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              {badge && (
                <div>
                  <Badge
                    variant="outline"
                    className={light ? "border-white/40 text-white/90" : ""}
                  >
                    {badge}
                  </Badge>
                </div>
              )}
              <div className="flex gap-2 flex-col">
                <h2
                  className={`text-4xl lg:text-5xl xl:text-6xl tracking-tighter max-w-xl text-left font-bold ${textClass}`}
                >
                  {title}
                </h2>
                {subtitle && (
                  <p
                    className={`text-xl leading-relaxed tracking-tight max-w-xl text-left ${mutedClass}`}
                  >
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              {items.map((item, i) => (
                <div
                  key={i}
                  data-reveal="left"
                  className="flex flex-row gap-6 items-start"
                >
                  <Check
                    className={`w-5 h-5 mt-2 flex-shrink-0 ${
                      light ? "text-white" : "text-primary"
                    }`}
                  />
                  <div className="flex flex-col gap-1 min-w-0">
                    {item.title && (
                      <p className={`font-medium text-lg ${textClass}`}>{item.title}</p>
                    )}
                    <p className={`${mutedClass} text-base md:text-lg leading-relaxed`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            data-reveal="right"
            data-delay=""
            className="relative bg-muted rounded-md aspect-square overflow-hidden"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
