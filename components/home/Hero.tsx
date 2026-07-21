"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, ArrowRight, Calculator, CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";
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
    <section className="relative overflow-hidden bg-porcelain pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-mist-dark/30">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[450px] h-[450px] rounded-full bg-sage-light/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-gold-light/20 blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pine/5 border border-pine/10 text-pine mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase font-semibold">
                {hero.eyebrow}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-pine font-bold leading-[1.08] mb-6">
              {hero.headline[0]}{" "}
              <span className="italic font-normal text-gold-dark">
                {hero.headline[1]}
              </span>{" "}
              {hero.headline[2]}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-ink/70 leading-relaxed max-w-2xl mb-8">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                variant="gold"
                size="lg"
                onClick={() => onOpenBooking()}
                icon={<ArrowRight className="w-4 h-4 text-ink" />}
                className="w-full sm:w-auto shadow-lg"
              >
                Book Your Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#calculator"
                icon={<Calculator className="w-4 h-4 text-pine" />}
                className="w-full sm:w-auto"
              >
                Calculate Treatment Cost
              </Button>
            </div>

            {/* Key Value Checklist */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-pine/80 mb-10 border-t border-b border-mist-dark/40 py-3 w-full">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-dark" />
                <span>Zero-Wait Concierge</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-dark" />
                <span>Painless Laser Dentistry</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-dark" />
                <span>0% Financing Available</span>
              </div>
            </div>

            {/* Trust Metrics / Rating Bar */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <div className="text-sm font-bold text-pine">
                  {hero.trustBadge.rating} <span className="font-normal text-ink/60 text-xs">/ 5.0 ({hero.trustBadge.reviewCount})</span>
                </div>
              </div>

              <div className="h-4 w-px bg-mist-dark hidden sm:block" />

              <div className="flex items-center gap-2 text-xs text-ink/70">
                <ShieldCheck className="w-4 h-4 text-sage-dark" />
                <span>{hero.trustBadge.platform}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Card with High-Res Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto rounded-3xl overflow-hidden shadow-premium border border-mist-dark/60 bg-porcelain-50 p-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt={config.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine/60 via-transparent to-transparent" />
                
                {/* Overlay Doctor / Studio Info */}
                <div className="absolute bottom-4 left-4 right-4 text-porcelain-50">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-light bg-pine/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {config.doctors[0]?.name || "Master Dentist"}
                  </span>
                  <h3 className="font-display font-semibold text-lg mt-1 text-white">
                    {config.name}
                  </h3>
                  <p className="text-xs text-porcelain-100/80">
                    {contact.address.street}, {contact.address.cityStateZip}
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Rating */}
              <div className="absolute -top-4 -left-4 glass-panel p-3.5 rounded-2xl shadow-card flex items-center gap-3 border border-white/80">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold-dark font-bold text-sm">
                  ★ {hero.trustBadge.rating}
                </div>
                <div>
                  <p className="text-xs font-bold text-pine">Top Rated Clinic</p>
                  <p className="text-[11px] text-ink/60">{hero.trustBadge.reviewCount} Patient Reviews</p>
                </div>
              </div>

              {/* Floating Badge 2: Availability */}
              <div className="absolute -bottom-5 -right-4 glass-panel p-3.5 rounded-2xl shadow-card flex items-center gap-3 border border-white/80">
                <div className="w-9 h-9 rounded-xl bg-pine/10 flex items-center justify-center text-pine">
                  <Clock className="w-4 h-4 text-pine" />
                </div>
                <div>
                  <p className="text-xs font-bold text-pine">Immediate Openings</p>
                  <p className="text-[11px] text-ink/60">{hero.availabilityNote}</p>
                </div>
              </div>
            </div>

            {/* Grid of Stats below visual */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="bg-porcelain-50/80 border border-mist-dark/40 rounded-2xl p-3 text-center shadow-sm">
                  <div className="font-display text-xl font-bold text-pine">{stat.value}</div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-ink/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}