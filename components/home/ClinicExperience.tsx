"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock, Scan, Zap, ShieldCheck } from "lucide-react";
import { animationsConfig } from "@/config/animations";
import Container from "@/components/ui/Container";
import type { ClinicConfig } from "@/types/site";

interface ClinicExperienceProps {
  config: ClinicConfig;
}

export default function ClinicExperience({ config }: ClinicExperienceProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-7 h-7" />,
    Scan: <Scan className="w-7 h-7" />,
    Zap: <Zap className="w-7 h-7" />,
    Sparkles: <Sparkles className="w-7 h-7" />,
  };

  return (
    <section className="py-24 bg-bg-base relative overflow-hidden border-b border-border-theme/40">
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
            <ShieldCheck className="w-4 h-4 text-primary" />
            Patient Comfort Standards
          </motion.div>
          <motion.h2
            variants={animationsConfig.fadeInUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-4"
          >
            Modern Dental Technology & Comfort
          </motion.h2>
          <motion.p
            variants={animationsConfig.fadeInUp}
            className="text-base sm:text-lg text-text-muted font-medium"
          >
            We combine painless clinical equipment, 3D digital impressions, and zero waiting room delays to make every visit relaxed and efficient.
          </motion.p>
        </motion.div>

        {/* 4-Card High-Impact Vibrant Grid Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={animationsConfig.staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {config.amenities.map((item) => (
            <motion.div
              key={item.title}
              variants={animationsConfig.fadeInUp}
              className="bg-bg-card rounded-theme p-7 sm:p-8 border border-border-theme shadow-card hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Vibrant Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 via-cyan-500/10 to-primary/20 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  {iconMap[item.iconName] || <Sparkles className="w-7 h-7" />}
                </div>

                <h3 className="font-display font-black text-xl text-secondary mb-3 leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-text-muted font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border-theme/60 flex items-center justify-between text-xs font-mono font-bold text-primary">
                <span>Clinical Standard</span>
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
