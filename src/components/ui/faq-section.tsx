"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import React from "react";
import { motion } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

export default function FAQSection({ 
  faqs, 
  title = "FAQ",
  subtitle,
  imageUrl 
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-sm w-full rounded-xl h-auto hidden md:block"
        >
          <img
            src={imageUrl}
            alt="FAQ"
            className="rounded-xl object-cover w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      )}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-red text-sm font-bold uppercase tracking-wider mb-2">FAQ's</p>
          <h1 className="text-4xl md:text-5xl font-rosehot font-semibold text-foreground mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-accent-blue font-charter mt-2 pb-4 opacity-80">
              {subtitle}
            </p>
          )}
        </motion.div>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-accent-blue/20 py-4 cursor-pointer hover:border-accent-blue/40 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg font-rosehot font-medium text-foreground pr-4">
                  {faq.question}
                </h3>
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 18 18" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={cn(
                    "transition-all duration-500 ease-in-out flex-shrink-0",
                    openIndex === index ? "rotate-180" : ""
                  )}
                >
                  <path 
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-accent-blue"
                  />
                </svg>
              </div>
              <div 
                className={cn(
                  "text-sm md:text-base text-accent-blue font-charter transition-all duration-500 ease-in-out max-w-md whitespace-pre-line",
                  openIndex === index 
                    ? "opacity-100 max-h-[800px] translate-y-0 pt-4" 
                    : "opacity-0 max-h-0 -translate-y-2 overflow-hidden"
                )}
              >
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

