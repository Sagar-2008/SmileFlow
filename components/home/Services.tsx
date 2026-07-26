"use client";

import { useState } from "react";
import { Clock, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { animationsConfig } from "@/config/animations";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { ClinicConfig, TreatmentCategory } from "@/types/site";

interface ServicesProps {
  config: ClinicConfig;
  onOpenBooking: (serviceId?: string) => void;
}

export default function Services({ config, onOpenBooking }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<TreatmentCategory | "all">("all");

  const tabs: Array<{ id: TreatmentCategory | "all"; label: string }> = [
    { id: "all", label: "All Services" },
    { id: "preventive", label: "Preventive Care" },
    { id: "cosmetic", label: "Cosmetic & Veneers" },
    { id: "restorative", label: "Restoration & Implants" },
    { id: "orthodontics", label: "Invisalign® Alignment" },
  ];

  const filteredServices = activeTab === "all"
    ? config.services
    : config.services.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-bg-card relative overflow-hidden border-b border-border-theme/40">
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animationsConfig.staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <motion.div
              variants={animationsConfig.fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-theme bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4 font-bold"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Specialized Treatment
            </motion.div>
            <motion.h2
              variants={animationsConfig.fadeInUp}
              className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight"
            >
              Dental Care Services
            </motion.h2>
          </div>
          <motion.p
            variants={animationsConfig.fadeInUp}
            className="text-base text-text-muted font-medium max-w-md"
          >
            We provide clear, honest pricing, advanced treatments, and gentle care plans to keep your teeth healthy and functional.
          </motion.p>
        </motion.div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border-theme pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-theme text-xs font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-bg-base text-text-muted hover:bg-primary/5 border border-border-theme"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid with entrance animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={animationsConfig.staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={animationsConfig.fadeInUp}
              className={`relative rounded-theme p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                service.popular
                  ? "bg-bg-card border-2 border-primary shadow-premium"
                  : "bg-bg-base/70 border border-border-theme hover:bg-bg-card shadow-card"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-theme bg-primary text-white font-mono text-[9px] uppercase font-black tracking-widest shadow-sm">
                  Most Common
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-extrabold">
                  {service.tag}
                </span>

                <h3 className="font-sans font-extrabold text-xl text-secondary mt-2 mb-3 leading-snug">
                  {service.name}
                </h3>

                <p className="text-xs text-text-muted font-medium leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Duration & Price info */}
                <div className="bg-bg-card border border-border-theme/80 rounded-theme p-3.5 mb-6">
                  <div className="flex items-center justify-between text-[11px] text-text-muted font-semibold mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      Appt: {service.duration}
                    </span>
                  </div>
                  <div className="font-mono text-base font-extrabold text-secondary">
                    Est: {service.priceRange}
                  </div>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-text-muted font-medium">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={service.popular ? "primary" : "outline"}
                size="md"
                onClick={() => onOpenBooking(service.name)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full"
              >
                Schedule {service.name.split(" ")[0]}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
