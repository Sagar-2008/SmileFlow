"use client";

import { useState } from "react";
import { Calculator, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";
import { calculatorConfig } from "@/config/calculator";
import { animationsConfig } from "@/config/animations";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { ClinicConfig } from "@/types/site";

interface CostCalculatorProps {
  config: ClinicConfig;
  onOpenBooking: (treatmentPlan?: string) => void;
}

export default function CostCalculator({ config, onOpenBooking }: CostCalculatorProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["srv-rootcanal"]);
  const [financingMonths, setFinancingMonths] = useState<number>(12);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalEstimatedCost = selectedServices.reduce((sum, id) => {
    const srv = config.services.find((s) => s.id === id);
    return sum + (srv ? srv.estimatedPrice : 0);
  }, 0);

  const activePeriod = calculatorConfig.financingPeriods.find(p => p.months === financingMonths) || 
                       calculatorConfig.financingPeriods[0];

  const monthlyPayment = totalEstimatedCost > 0
    ? Math.round(totalEstimatedCost / activePeriod.months)
    : 0;

  const symbol = calculatorConfig.currencySymbol || "₹";

  return (
    <section id="calculator" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info & Perks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animationsConfig.staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div
              variants={animationsConfig.fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-theme bg-white/10 border border-white/20 text-white text-xs font-mono uppercase tracking-wider mb-4 font-bold"
            >
              <Calculator className="w-3.5 h-3.5" />
              {calculatorConfig.subtitle}
            </motion.div>
            <motion.h2
              variants={animationsConfig.fadeInUp}
              className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight"
            >
              {calculatorConfig.title}
            </motion.h2>
            <motion.p
              variants={animationsConfig.fadeInUp}
              className="text-base text-white/80 leading-relaxed mb-8 font-medium"
            >
              {calculatorConfig.description}
            </motion.p>

            <motion.div
              variants={animationsConfig.fadeInUp}
              className="space-y-4 border-t border-white/15 pt-6"
            >
              <div className="flex items-start gap-3 text-sm text-white/90 font-medium">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{calculatorConfig.financingNote}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/90 font-medium">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{calculatorConfig.insuranceNote}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/90 font-medium">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{calculatorConfig.consultationNote}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Widget Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animationsConfig.scaleUp}
            className="lg:col-span-7"
          >
            <div className="bg-bg-card text-text-main rounded-theme p-6 sm:p-8 shadow-premium border border-white/20">
              <h3 className="font-sans font-extrabold text-lg text-secondary mb-4 leading-none">
                {calculatorConfig.steps.step1}
              </h3>

              {/* Service Grid Selectors */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {config.services.map((srv) => {
                  const isSelected = selectedServices.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-4 rounded-theme border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "bg-primary/5 border-primary shadow-sm"
                          : "bg-bg-base/70 border-border-theme hover:bg-bg-base"
                      }`}
                    >
                      <div>
                        <p className="text-xs font-black text-secondary">{srv.name}</p>
                        <p className="text-[11px] text-primary font-mono font-bold mt-1">
                          ~{symbol}{srv.estimatedPrice.toLocaleString("en-IN")}
                        </p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                          isSelected
                            ? "bg-primary border-primary text-white"
                            : "border-border-theme"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <h3 className="font-sans font-extrabold text-lg text-secondary mb-4 leading-none">
                {calculatorConfig.steps.step2}
              </h3>

              {/* Financing Periods Grid */}
              <div className="grid grid-cols-3 gap-2 mb-8">
                {calculatorConfig.financingPeriods.map((period) => (
                  <button
                    key={period.months}
                    onClick={() => setFinancingMonths(period.months)}
                    className={`py-3 rounded-theme text-xs font-bold font-mono transition-all duration-200 cursor-pointer text-center ${
                      financingMonths === period.months
                        ? "bg-primary text-white shadow-md"
                        : "bg-bg-base text-text-muted hover:bg-primary/5 border border-border-theme"
                    }`}
                  >
                    {period.label}
                  </button>
                ))}
              </div>

              {/* Monthly Cost Summary Board */}
              <div className="bg-secondary text-white rounded-theme p-5 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 shadow-md">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">
                    Estimated Total
                  </span>
                  <div className="text-2xl font-extrabold font-mono text-white mt-0.5">
                    {symbol}{totalEstimatedCost.toLocaleString("en-IN")}
                  </div>
                  <div className="text-xs text-white/70 mt-1 font-medium">
                    {selectedServices.length} procedure(s) selected
                  </div>
                </div>

                <div className="text-right sm:border-l sm:border-white/10 sm:pl-6 w-full sm:w-auto">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">
                    Monthly EMI
                  </span>
                  <div className="text-3xl font-extrabold font-mono text-primary mt-0.5 flex items-center justify-end">
                    <span className="text-2xl text-primary mr-0.5">{symbol}</span>
                    {monthlyPayment.toLocaleString("en-IN")}
                    <span className="text-xs font-sans text-white/80 font-bold ml-1">/mo</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <Button
                variant="accent"
                size="lg"
                onClick={() =>
                  onOpenBooking(
                    `Selected Plan: ${selectedServices.length} procedures (~${symbol}${monthlyPayment}/mo EMI)`
                  )
                }
                icon={<Sparkles className="w-4 h-4" />}
                className="w-full mt-6"
              >
                {calculatorConfig.ctaText}
              </Button>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
