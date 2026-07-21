"use client";

import { useState } from "react";
import { Sparkles, Clock, Check, ArrowRight, Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { ClinicConfig, TreatmentCategory } from "@/types/site";

interface ServicesProps {
  config: ClinicConfig;
  onOpenBooking: (serviceId?: string) => void;
}

export default function Services({ config, onOpenBooking }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory | "all">("all");

  const categories: Array<{ id: TreatmentCategory | "all"; label: string }> = [
    { id: "all", label: "All Treatments" },
    { id: "cosmetic", label: "Cosmetic & Veneers" },
    { id: "restorative", label: "Implants & Restorations" },
    { id: "orthodontics", label: "Invisalign® & Alignment" },
    { id: "preventive", label: "Hygiene & Wellness" },
  ];

  const filteredServices = activeCategory === "all"
    ? config.services
    : config.services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-porcelain relative overflow-hidden border-b border-mist-dark/30">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pine/5 border border-pine/10 text-pine text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
              <Shield className="w-3.5 h-3.5 text-gold-dark" />
              World-Class Dental Care
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pine tracking-tight">
              Bespoke Dental Procedures
            </h2>
          </div>
          <p className="text-base text-ink/70 max-w-md">
            Transparent pricing, 3D surgical precision, and hand-crafted porcelain artistry for long-lasting health and elegance.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-mist-dark/40 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-pine text-porcelain-50 shadow-md"
                  : "bg-porcelain-50 text-ink/70 hover:bg-mist border border-mist-dark/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                service.popular
                  ? "bg-porcelain-50 border-2 border-gold/60 shadow-premium"
                  : "bg-porcelain-50/70 border border-mist-dark/50 hover:bg-porcelain-50 shadow-card"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gold text-ink font-mono text-[10px] uppercase font-bold tracking-widest shadow-sm">
                  Most Requested
                </div>
              )}

              <div>
                <span className="text-[11px] font-mono tracking-widest text-gold-dark uppercase font-semibold">
                  {service.tag}
                </span>

                <h3 className="font-display font-bold text-2xl text-pine mt-2 mb-3">
                  {service.name}
                </h3>

                <p className="text-sm text-ink/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Duration & Price Badge */}
                <div className="bg-porcelain-100/80 rounded-2xl p-4 mb-6 border border-mist-dark/30">
                  <div className="flex items-center justify-between text-xs text-ink/70 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold-dark" />
                      Duration: {service.duration}
                    </span>
                  </div>
                  <div className="font-mono text-lg font-bold text-pine mt-1">
                    {service.priceRange}
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-ink/80">
                      <Check className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={service.popular ? "gold" : "primary"}
                size="md"
                onClick={() => onOpenBooking(service.name)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full"
              >
                Book {service.name}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
