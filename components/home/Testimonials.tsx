"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { animationsConfig } from "@/config/animations";
import Container from "@/components/ui/Container";
import type { ClinicConfig } from "@/types/site";

interface TestimonialsProps {
  config: ClinicConfig;
}

export default function Testimonials({ config }: TestimonialsProps) {
  return (
    <section id="reviews" className="py-24 bg-bg-base relative overflow-hidden border-b border-border-theme/40">
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animationsConfig.staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={animationsConfig.fadeInUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-theme bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4 font-bold"
          >
            <Star className="w-3.5 h-3.5 text-accent fill-accent" />
            Patient Reviews
          </motion.div>
          <motion.h2
            variants={animationsConfig.fadeInUp}
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-4"
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            variants={animationsConfig.fadeInUp}
            className="text-base text-text-muted font-medium"
          >
            Read genuine reviews from local patients who chose our office for their family checkups and smile restorations.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid with stagger animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animationsConfig.staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {config.testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={animationsConfig.fadeInUp}
              className="bg-bg-card rounded-theme p-8 shadow-card border border-border-theme flex flex-col justify-between hover:shadow-premium transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex text-accent mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Treatment category tag */}
                <span className="inline-block text-[10px] font-mono uppercase font-bold text-primary bg-primary/10 px-3 py-1 rounded-theme mb-4">
                  {item.treatment}
                </span>

                <blockquote className="text-sm text-text-main font-medium leading-relaxed italic mb-6">
                  &ldquo;{item.comment}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-border-theme flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-secondary text-sm">
                    {item.patientName}
                  </h4>
                  <p className="text-[10px] text-text-muted font-semibold">{item.date}</p>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1 text-[9px] text-primary font-mono bg-primary/10 px-2.5 py-1 rounded-theme font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    Verified Patient
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
