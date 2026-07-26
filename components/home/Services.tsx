"use client";

import { useState } from "react";
import { Clock, Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    { id: "restorative", label: "Root Canals & Implants" },
    { id: "orthodontics", label: "Clear Aligners & Braces" },
    { id: "cosmetic", label: "Teeth Whitening & Veneers" },
  ];

  // Filter services, fallback to all services if category match returns empty
  const rawFiltered = activeTab === "all"
    ? config.services
    : config.services.filter((s) => s.category === activeTab);

  const filteredServices = rawFiltered.length > 0 ? rawFiltered : config.services;

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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-theme bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4 font-bold"
            >
              <ShieldCheck className="w-4 h-4" />
              Specialized Dental Healthcare
            </motion.div>
            <motion.h2
              variants={animationsConfig.fadeInUp}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight"
            >
              Treatments & Clinical Services
            </motion.h2>
          </div>
          <motion.p
            variants={animationsConfig.fadeInUp}
            className="text-base sm:text-lg text-text-muted font-medium max-w-md"
          >
            We provide gentle procedures, 3D digital impressions, and transparent pricing for your family's oral health.
          </motion.p>
        </motion.div>

        {/* Tab Filter Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-border-theme pb-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-theme text-xs sm:text-sm font-extrabold tracking-wider transition-all duration-200 cursor-pointer hover:scale-105 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md ring-2 ring-primary/30"
                  : "bg-bg-base text-text-muted hover:bg-primary/5 border border-border-theme"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Alive Hover Motions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`relative rounded-theme p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group ${
                  service.popular
                    ? "bg-bg-card border-2 border-primary shadow-premium hover:shadow-[0_20px_35px_rgba(2,132,199,0.15)]"
                    : "bg-bg-base/70 border border-border-theme hover:bg-bg-card shadow-card hover:shadow-2xl hover:border-primary/40"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-theme bg-primary text-white font-mono text-xs uppercase font-black tracking-widest shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <span className="text-xs font-mono tracking-widest text-primary uppercase font-extrabold bg-primary/10 px-2.5 py-1 rounded-theme inline-block mb-3">
                    {service.tag}
                  </span>

                  <h3 className="font-display font-black text-2xl text-secondary mt-1 mb-3 leading-snug group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-text-muted font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Duration & Price Info Box */}
                  <div className="bg-bg-card border border-border-theme rounded-theme p-4 mb-6 shadow-sm group-hover:border-primary/30 transition-colors">
                    <div className="flex items-center justify-between text-xs text-text-muted font-bold mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-primary" />
                        Time: {service.duration}
                      </span>
                    </div>
                    <div className="font-mono text-lg font-black text-secondary">
                      Est: {service.priceRange}
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-main font-semibold">
                        <Check className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={service.popular ? "primary" : "outline"}
                  size="md"
                  onClick={() => onOpenBooking(service.name)}
                  icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  className="w-full font-extrabold shadow-sm hover:scale-[1.02]"
                >
                  Schedule {service.name.split(" ")[0]}
                </Button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
