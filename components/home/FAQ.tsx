"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import type { ClinicConfig } from "@/types/site";

interface FAQProps {
  config: ClinicConfig;
}

export default function FAQ({ config }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-porcelain-100 relative overflow-hidden border-b border-mist-dark/30">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pine/5 border border-pine/10 text-pine text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-gold-dark" />
            Common Questions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pine tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            Everything you need to know about your first visit, insurance coverage, and procedures at {config.name}.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {config.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-porcelain-50 rounded-2xl border border-mist-dark/50 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-semibold text-lg text-pine hover:text-gold-dark transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-porcelain-100 flex items-center justify-center text-pine shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gold/20 text-gold-dark" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-ink/75 leading-relaxed border-t border-mist-dark/20 pt-4 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
