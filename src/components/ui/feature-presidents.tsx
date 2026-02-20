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
  /** Use solid white card background (e.g. on message-from-presidents page) */
  whiteCard?: boolean;
}

export function FeaturePresidents({
  badge = "Message",
  title,
  subtitle,
  items,
  imageSrc,
  imageAlt,
  light = false,
  whiteCard = false,
}: FeaturePresidentsProps) {
  const onDark = light && !whiteCard;
  const textClass = onDark
    ? "text-white"
    : whiteCard
      ? "text-black"
      : "text-foreground";
  const mutedClass = onDark
    ? "text-white/80"
    : whiteCard
      ? "text-black/85"
      : "text-muted-foreground";
  const cardClass = whiteCard
    ? "border-border bg-white"
    : light
      ? "border-white/25 bg-[#002E5D]/30"
      : "border-border bg-card/80";

  return (
    <div className="w-full py-12 lg:py-16">
      <div className="mx-auto w-full px-4 md:px-10 lg:px-16">
        <div
          className={`grid border rounded-xl p-8 md:p-10 grid-cols-1 gap-8 items-center lg:grid-cols-2 w-full backdrop-blur-xl shadow-2xl shadow-black/10 ${cardClass}`}
        >
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              {badge && (
                <div>
                  <Badge
                    variant="outline"
                    className={
                      onDark
                        ? "border-white/40 text-white/90"
                        : whiteCard
                          ? "border-black/30 text-black"
                          : ""
                    }
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
                      onDark ? "text-white" : whiteCard ? "text-black" : "text-primary"
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
            className="relative w-full max-w-md mx-auto lg:max-w-sm xl:max-w-md min-w-0 bg-muted rounded-md aspect-[3/4] sm:aspect-[4/5] lg:aspect-square overflow-hidden self-center"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              loading="lazy"
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
