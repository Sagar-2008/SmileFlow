"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import type { ClinicConfig } from "@/types/site";

interface TestimonialsProps {
  config: ClinicConfig;
}

export default function Testimonials({ config }: TestimonialsProps) {
  return (
    <section id="reviews" className="py-24 bg-porcelain relative overflow-hidden border-b border-mist-dark/30">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pine/5 border border-pine/10 text-pine text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
            Verified Patient Feedback
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pine tracking-tight mb-4">
            Loved by Hundreds of Happy Smiles
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            Read authentic reviews from patients who experienced our bespoke cosmetic and restorative dental treatments.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {config.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-porcelain-50 rounded-3xl p-8 shadow-card border border-mist-dark/50 flex flex-col justify-between hover:shadow-premium transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-gold/20 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex text-gold mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Treatment Tag */}
                <span className="inline-block text-[11px] font-mono uppercase font-semibold text-gold-dark bg-gold/10 px-3 py-1 rounded-full mb-4">
                  {item.treatment}
                </span>

                <blockquote className="text-sm text-ink/80 leading-relaxed italic mb-6 font-serif">
                  &ldquo;{item.comment}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-mist-dark/30 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-pine text-sm">
                    {item.patientName}
                  </h4>
                  <p className="text-[11px] text-ink/50">{item.date}</p>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1 text-[10px] text-sage-dark font-mono bg-sage/15 px-2.5 py-1 rounded-full font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-sage-dark" />
                    Verified
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
