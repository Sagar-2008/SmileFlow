"use client";

import Image from "next/image";
import { Award, Calendar, CheckCircle, GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { ClinicConfig } from "@/types/site";

interface DoctorShowcaseProps {
  config: ClinicConfig;
  onOpenBooking: (doctorName?: string) => void;
}

export default function DoctorShowcase({ config, onOpenBooking }: DoctorShowcaseProps) {
  return (
    <section id="doctors" className="py-24 bg-porcelain relative overflow-hidden border-b border-mist-dark/30">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pine/5 border border-pine/10 text-pine text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Award className="w-3.5 h-3.5 text-gold-dark" />
            World-Renowned Specialists
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pine tracking-tight mb-4">
            Meet Our Master Clinicians
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            Our doctors combine clinical excellence, continuous academic research, and personalized artistic care to deliver unbeatable dental outcomes.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {config.doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-porcelain-50 rounded-3xl p-6 sm:p-8 shadow-card border border-mist-dark/50 flex flex-col justify-between hover:shadow-premium transition-all duration-300"
            >
              <div>
                {/* Doctor Portrait Image Container */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-pine/90 text-gold-light text-[10px] font-mono uppercase tracking-widest backdrop-blur-md">
                    {doctor.experienceYears}+ Years Experience
                  </div>
                </div>

                {/* Name & Credentials */}
                <h3 className="font-display font-bold text-2xl text-pine mb-1">
                  {doctor.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-gold-dark uppercase tracking-wider mb-4">
                  {doctor.title}
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-pine bg-porcelain-100 p-3 rounded-xl mb-4">
                  <GraduationCap className="w-4 h-4 text-gold-dark shrink-0" />
                  <span>{doctor.qualifications}</span>
                </div>

                <p className="text-sm text-ink/70 leading-relaxed mb-6">
                  {doctor.bio}
                </p>

                <div className="flex items-center gap-2 text-xs text-ink/60 mb-6">
                  <CheckCircle className="w-3.5 h-3.5 text-sage-dark" />
                  <span>Specialty: <strong>{doctor.specialty}</strong></span>
                </div>
              </div>

              <div className="pt-4 border-t border-mist-dark/30 flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-ink/60">
                  Slots: {doctor.availability}
                </span>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => onOpenBooking(`Appointment with ${doctor.name}`)}
                  icon={<Calendar className="w-3.5 h-3.5 text-ink" />}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
