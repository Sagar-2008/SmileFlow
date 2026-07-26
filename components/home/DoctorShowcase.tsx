"use client";

import { motion } from "framer-motion";
import { UserCheck, Award, Calendar, Clock } from "lucide-react";
import Image from "next/image";
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
    <section id="doctors" className="py-24 bg-bg-card relative overflow-hidden border-b border-border-theme/40">
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
            <UserCheck className="w-4 h-4" />
            Clinical Leadership
          </motion.div>
          <motion.h2
            variants={animationsConfig.fadeInUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-4"
          >
            Meet Our Dental Specialists
          </motion.h2>
          <motion.p
            variants={animationsConfig.fadeInUp}
            className="text-base sm:text-lg text-text-muted font-medium"
          >
            Our experienced specialists bring compassionate care, MDS qualifications, and computer-guided precision to every treatment.
          </motion.p>
        </motion.div>

        {/* Doctor Roster Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animationsConfig.staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {config.doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={animationsConfig.fadeInUp}
              className="bg-bg-base/80 rounded-theme p-6 sm:p-7 border border-border-theme shadow-card hover:shadow-2xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Zoom and Floating Status Badges */}
                <div className="relative aspect-[4/3] rounded-[calc(var(--border-radius)-0.25rem)] overflow-hidden mb-6 border border-border-theme/60 shadow-md">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                  
                  {/* Floating Available Today Badge */}
                  <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs font-mono font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>Available Today</span>
                  </div>

                  {/* Doctor Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-accent bg-secondary/90 px-3 py-1 rounded-theme backdrop-blur-sm inline-block mb-1">
                      {doctor.specialty}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white leading-snug">
                      {doctor.name}
                    </h3>
                  </div>
                </div>

                {/* Experience & Qualification Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-theme flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    {doctor.experienceYears}+ Years Clinical Practice
                  </span>
                  <span className="text-xs font-mono font-bold text-text-muted bg-bg-card border border-border-theme px-3 py-1 rounded-theme">
                    {doctor.qualifications}
                  </span>
                </div>

                <p className="text-sm text-text-main font-medium leading-relaxed mb-6">
                  {doctor.bio}
                </p>

                {/* Availability info */}
                <div className="flex items-center gap-2 text-xs text-text-muted font-bold mb-6 bg-bg-card border border-border-theme p-3 rounded-theme">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Clinic Days: {doctor.availability}</span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenBooking(`Consultation with ${doctor.name}`)}
                icon={<Calendar className="w-4 h-4 text-white" />}
                className="w-full font-extrabold shadow-sm hover:scale-[1.02] transition-transform"
              >
                Book Consultation with {doctor.name.split(" ")[1] || "Specialist"}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
