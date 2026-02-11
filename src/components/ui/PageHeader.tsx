import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="text-center pt-8 pb-6 md:pt-12 md:pb-8 space-y-3">
      <h1 className="text-5xl md:text-7xl font-rosehot text-foreground">{title}</h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-accent-blue font-charter max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-accent-red mx-auto mt-4 md:mt-6" />
    </div>
  );
}

