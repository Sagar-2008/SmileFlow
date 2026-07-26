"use client";

import Image from "next/image";
import { Award, Calendar, CheckCircle2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { animationsConfig } from "@/config/animations";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { ClinicConfig } from "@/types/site";

interface DoctorShowcaseProps {
  config: ClinicConfig;
  onOpenBooking: (doctorName?: string) => void;
}

export default function DoctorShowcase({ config, onOpenBooking }: DoctorShowcaseProps) {
  return (
    <section id="doctors" className="py-24 bg-bg-base relative overflow-hidden border-b border-border-theme/40">
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
            <Award className="w-3.5 h-3.5 text-accent" />
            Clinical Excellence
          </motion.div>
          <motion.h2
            variants={animationsConfig.fadeInUp}
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-4"
          >
            Meet Our Specialist Dentists
          </motion.h2>
          <motion.p
            variants={animationsConfig.fadeInUp}
            className="text-base text-text-muted font-medium"
          >
            Our dental professionals combine academic research with warm, personalized clinical care to deliver optimal health outcomes.
          </motion.p>
        </motion.div>

        {/* Doctors Grid with animation cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animationsConfig.staggerContainer}
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {config.doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={animationsConfig.fadeInUp}
              className="bg-bg-card rounded-theme p-6 sm:p-8 shadow-card border border-border-theme flex flex-col justify-between hover:shadow-premium transition-all duration-300"
            >
              <div>
                {/* Doctor Portrait Image */}
                <div className="relative aspect-[4/3] w-full rounded-[calc(var(--border-radius)-0.25rem)] overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-theme bg-secondary/90 text-accent text-[9px] font-mono uppercase tracking-wider backdrop-blur-sm font-bold">
                    {doctor.experienceYears}+ Years Clinical Practice
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-sans font-extrabold text-2xl text-secondary mb-1 leading-snug">
                  {doctor.name}
                </h3>
                <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4">
                  {doctor.title}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-secondary bg-bg-base p-3 rounded-theme mb-4 border border-border-theme/40">
                  <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                  <span>{doctor.qualifications}</span>
                </div>

                <p className="text-sm text-text-muted font-medium leading-relaxed mb-6">
                  {doctor.bio}
                </p>

                <div className="flex items-center gap-2 text-xs text-text-muted font-bold mb-6">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Specialty Focus: <strong className="text-secondary font-black">{doctor.specialty}</strong></span>
                </div>
              </div>

              <div className="pt-4 border-t border-border-theme flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-text-muted font-bold">
                  Schedule: {doctor.availability}
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenBooking(`Consultation with ${doctor.name}`)}
                  icon={<Calendar className="w-3.5 h-3.5" />}
                >
                  Book Appointment
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
