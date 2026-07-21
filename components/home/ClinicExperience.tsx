"use client";

import Image from "next/image";
import { Sparkles, Clock, Scan, Zap, Shield, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import type { ClinicConfig } from "@/types/site";

interface ClinicExperienceProps {
  config: ClinicConfig;
}

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-5 h-5 text-gold-dark" />,
  Scan: <Scan className="w-5 h-5 text-gold-dark" />,
  Zap: <Zap className="w-5 h-5 text-gold-dark" />,
  Sparkles: <Sparkles className="w-5 h-5 text-gold-dark" />,
};

export default function ClinicExperience({ config }: ClinicExperienceProps) {
  return (
    <section id="experience" className="py-24 bg-porcelain-100 relative overflow-hidden border-b border-mist-dark/30">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Feature Highlight */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium border border-mist-dark/60 bg-porcelain-50 p-3">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/clinic.jpg"
                  alt="Clinic Spa Lounge"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-light bg-pine/80 px-3 py-1 rounded-full backdrop-blur-md">
                    Private Care Environment
                  </span>
                  <h3 className="font-display text-2xl font-bold mt-2">
                    Designed for Ultimate Serenity
                  </h3>
                  <p className="text-xs text-porcelain-100/80 mt-1">
                    Zero waiting room stress. Unhurried one-on-one doctor attention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technology & Amenities List */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pine/5 border border-pine/10 text-pine text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              Patient-First Technology
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pine tracking-tight mb-6">
              The Dental Spa Experience
            </h2>
            <p className="text-base text-ink/70 leading-relaxed mb-8">
              We eliminated everything patients dislike about traditional dental visits—replacing noise and waiting with quiet comfort, advanced 3D scanning, and gentle laser techniques.
            </p>

            {/* Amenities Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {config.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="bg-porcelain-50 rounded-2xl p-5 border border-mist-dark/40 shadow-sm hover:border-gold/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-3">
                    {iconMap[amenity.iconName] || <Heart className="w-5 h-5 text-gold-dark" />}
                  </div>
                  <h4 className="font-display font-bold text-lg text-pine mb-1">
                    {amenity.title}
                  </h4>
                  <p className="text-xs text-ink/70 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
