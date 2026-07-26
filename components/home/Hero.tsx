"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, ArrowRight, Calculator, CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";
import { animationsConfig } from "@/config/animations";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { ClinicConfig } from "@/types/site";

interface HeroProps {
  config: ClinicConfig;
  onOpenBooking: (serviceId?: string) => void;
}

export default function Hero({ config, onOpenBooking }: HeroProps) {
  const { hero, contact } = config;

  return (
    <section className="relative overflow-hidden bg-bg-base pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-border-theme/40">
      {/* Background Ambient Glows & Clean Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animationsConfig.staggerContainer}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Eyebrow Pill */}
            <motion.div
              variants={animationsConfig.fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-theme bg-primary/10 border border-primary/20 text-primary mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase font-extrabold">
                {hero.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={animationsConfig.fadeInUp}
              className="font-sans text-4xl sm:text-5xl lg:text-[56px] tracking-tight text-secondary font-black leading-[1.1] mb-6"
            >
              {hero.headline[0]}{" "}
              <span className="text-primary font-bold">
                {hero.headline[1]}
              </span>{" "}
              {hero.headline[2]}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={animationsConfig.fadeInUp}
              className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mb-8 font-medium"
            >
              {hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={animationsConfig.fadeInUp}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenBooking()}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Schedule Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#calculator"
                icon={<Calculator className="w-4 h-4 text-primary" />}
                className="w-full sm:w-auto"
              >
                Estimate Care Cost
              </Button>
            </motion.div>

            {/* Checklist */}
            <motion.div
              variants={animationsConfig.fadeInUp}
              className="flex flex-wrap gap-x-6 gap-y-2.5 text-xs font-bold text-secondary mb-10 border-t border-b border-border-theme/60 py-4 w-full"
            >
              {config.amenities.slice(0, 3).map((amenity) => (
                <div key={amenity.title} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{amenity.title}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={animationsConfig.fadeInUp}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-sm font-black text-secondary">
                  {hero.trustBadge.rating}{" "}
                  <span className="font-medium text-text-muted text-xs">
                    / 5.0 ({hero.trustBadge.reviewCount})
                  </span>
                </div>
              </div>
              <div className="h-4 w-px bg-border-theme hidden sm:block" />
              <div className="flex items-center gap-2 text-xs text-text-muted font-semibold">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>{hero.trustBadge.platform}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Hero Image & Badges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animationsConfig.scaleUp}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto rounded-theme overflow-hidden shadow-premium border border-border-theme bg-bg-card p-3">
              <div className="relative aspect-[4/3] rounded-[calc(var(--border-radius)-0.5rem)] overflow-hidden">
                <Image
                  src={hero.heroImage}
                  alt={config.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-accent bg-secondary/80 px-2.5 py-1 rounded-theme backdrop-blur-sm font-bold">
                    {config.doctors[0]?.name || "Dental Expert"}
                  </span>
                  <h3 className="font-sans font-extrabold text-lg mt-1.5 text-white">
                    {config.name}
                  </h3>
                  <p className="text-xs text-white/80 font-medium">
                    {contact.address.street}, {contact.address.cityStateZip}
                  </p>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="absolute -top-4 -left-4 glass-panel p-3.5 rounded-theme shadow-card flex items-center gap-3 border border-white">
                <div className="w-10 h-10 rounded-theme bg-primary/10 flex items-center justify-center text-primary font-black text-sm">
                  ★ {hero.trustBadge.rating}
                </div>
                <div>
                  <p className="text-xs font-black text-secondary">Verified Care</p>
                  <p className="text-[10px] text-text-muted font-bold">
                    {hero.trustBadge.reviewCount} Patient Reviews
                  </p>
                </div>
              </div>

              {/* Floating Wait Time Badge */}
              <div className="absolute -bottom-5 -right-4 glass-panel p-3.5 rounded-theme shadow-card flex items-center gap-3 border border-white">
                <div className="w-9 h-9 rounded-theme bg-accent/10 flex items-center justify-center text-accent">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-secondary">Appointments</p>
                  <p className="text-[10px] text-text-muted font-bold">
                    {hero.availabilityNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Block */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-bg-card border border-border-theme rounded-theme p-3 text-center shadow-card"
                >
                  <div className="font-sans text-xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-text-muted mt-0.5 font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}