import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="text-center py-20 space-y-4">
      <h1 className="text-6xl md:text-7xl font-rosehot text-foreground">{title}</h1>
      {subtitle && (
        <p className="text-xl text-accent-blue font-charter max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-accent-red mx-auto mt-8" />
    </div>
  );
}

