"use client";

import React from "react";
import { motion } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQSection({
  items,
  title = "Client FAQs",
}: FAQSectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto text-left">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#4a0404] mb-8 md:mb-12 font-sans tracking-tight"
      >
        {title}
      </motion.h2>

      <div className="space-y-8 md:space-y-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#4a0404] mb-3 md:mb-4 font-sans leading-tight">
              {item.question}
            </h3>
            <div className="text-[#1a3a5c] text-base md:text-lg leading-relaxed font-light [&_a]:font-semibold [&_a]:text-accent-blue [&_a]:underline-offset-2 hover:[&_a]:underline">
              {typeof item.answer === "string" ? (
                <span className="whitespace-pre-line">{item.answer}</span>
              ) : (
                <div className="space-y-3">{item.answer}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
