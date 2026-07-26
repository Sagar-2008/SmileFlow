"use client";

import { Star, Quote, CheckCircle2, ShieldCheck } from "lucide-react";
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-theme bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4 font-bold"
          >
            <Star className="w-4 h-4 text-accent fill-accent animate-pulse" />
            Verified Patient Reviews
          </motion.div>
          <motion.h2
            variants={animationsConfig.fadeInUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-4"
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            variants={animationsConfig.fadeInUp}
            className="text-base sm:text-lg text-text-muted font-medium"
          >
            Read genuine feedback from local families who trust our clinic for their routine checkups and smile transformations.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid with High-Impact Aesthetics */}
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
              className="bg-bg-card rounded-theme p-8 shadow-card border border-border-theme flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 relative group"
            >
              <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6 pointer-events-none group-hover:text-primary/20 transition-colors" />

              <div>
                {/* Rating stars */}
                <div className="flex text-accent mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Treatment category tag */}
                <span className="inline-block text-xs font-mono uppercase font-black text-primary bg-primary/10 px-3.5 py-1 rounded-theme mb-4">
                  {item.treatment}
                </span>

                <blockquote className="text-sm sm:text-base text-text-main font-medium leading-relaxed italic mb-6">
                  &ldquo;{item.comment}&rdquo;
                </blockquote>
              </div>

              <div className="pt-5 border-t border-border-theme flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan-500 text-white font-display font-extrabold text-sm flex items-center justify-center shadow-md">
                    {item.patientName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-secondary text-sm">
                      {item.patientName}
                    </h4>
                    <p className="text-xs text-text-muted font-semibold">{item.date}</p>
                  </div>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified</span>
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
