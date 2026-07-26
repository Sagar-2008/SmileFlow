"use client";

import Image from "next/image";
import { Sparkles, Clock, Scan, Zap, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { animationsConfig } from "@/config/animations";
import Container from "@/components/ui/Container";
import type { ClinicConfig } from "@/types/site";

interface ClinicExperienceProps {
  config: ClinicConfig;
}

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-5 h-5 text-primary" />,
  Scan: <Scan className="w-5 h-5 text-primary" />,
  Zap: <Zap className="w-5 h-5 text-primary" />,
  Sparkles: <Sparkles className="w-5 h-5 text-primary" />,
};

export default function ClinicExperience({ config }: ClinicExperienceProps) {
  return (
    <section id="experience" className="py-24 bg-bg-card relative overflow-hidden border-b border-border-theme/40">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Interior Showcase Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animationsConfig.scaleUp}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-theme overflow-hidden shadow-premium border border-border-theme bg-bg-base p-3">
              <div className="relative h-full w-full rounded-[calc(var(--border-radius)-0.5rem)] overflow-hidden">
                <Image
                  src="/images/clinic.jpg"
                  alt="Clinic Treatment Office Lounge"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-secondary/80 px-3 py-1 rounded-theme backdrop-blur-sm font-bold">
                    Safe & Sanitary Clinical Space
                  </span>
                  <h3 className="font-sans font-extrabold text-2xl mt-2 text-white">
                    Built for Your Comfort
                  </h3>
                  <p className="text-xs text-white/80 mt-1 font-medium">
                    Strict sterilization guidelines, comfortable amenities, and on-time doctor scheduling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Title, Copy & Perks Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animationsConfig.staggerContainer}
            className="lg:col-span-6"
          >
            <motion.div
              variants={animationsConfig.fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-theme bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4 font-bold"
            >
              <Heart className="w-3.5 h-3.5 text-accent" />
              Patient comfort
            </motion.div>
            
            <motion.h2
              variants={animationsConfig.fadeInUp}
              className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-6"
            >
              A Better Dental Experience
            </motion.h2>
            
            <motion.p
              variants={animationsConfig.fadeInUp}
              className="text-base text-text-muted leading-relaxed mb-8 font-medium"
            >
              We have eliminated the classic friction points of old-fashioned dental visits. Enjoy modern diagnostic scanners, drill-free laser fillings, and gentle patient comforts designed to put you at ease.
            </motion.p>

            {/* Perks Cards Grid */}
            <motion.div
              variants={animationsConfig.staggerContainer}
              className="grid sm:grid-cols-2 gap-4"
            >
              {config.amenities.map((amenity, idx) => (
                <motion.div
                  key={idx}
                  variants={animationsConfig.fadeInUp}
                  className="bg-bg-base rounded-theme p-5 border border-border-theme shadow-card hover:border-primary/50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-theme bg-primary/10 flex items-center justify-center mb-3">
                    {iconMap[amenity.iconName] || <Shield className="w-5 h-5 text-primary" />}
                  </div>
                  <h4 className="font-sans font-extrabold text-base text-secondary mb-1 leading-snug">
                    {amenity.title}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed font-semibold">
                    {amenity.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
