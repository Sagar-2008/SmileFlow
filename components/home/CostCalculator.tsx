"use client";

import { useState } from "react";
import { Calculator, Sparkles, Check, DollarSign } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { ClinicConfig } from "@/types/site";

interface CostCalculatorProps {
  config: ClinicConfig;
  onOpenBooking: (treatmentPlan?: string) => void;
}

export default function CostCalculator({ config, onOpenBooking }: CostCalculatorProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["srv-veneers"]);
  const [financingMonths, setFinancingMonths] = useState<12 | 24 | 36>(24);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalEstimatedCost = selectedServices.reduce((sum, id) => {
    const srv = config.services.find((s) => s.id === id);
    return sum + (srv ? srv.estimatedPrice : 0);
  }, 0);

  const monthlyPayment = totalEstimatedCost > 0
    ? Math.round(totalEstimatedCost / financingMonths)
    : 0;

  return (
    <section id="calculator" className="py-24 bg-pine text-porcelain-50 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sage/10 blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              Transparent Self-Service Estimator
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Estimate Your Treatment Investment
            </h2>
            <p className="text-base text-porcelain-100/80 leading-relaxed mb-8">
              Dental care should never come with pricing surprises. Select your desired treatment procedures below to calculate estimated monthly payments with 0% APR financing options.
            </p>

            <div className="space-y-4 border-t border-porcelain-100/10 pt-6">
              <div className="flex items-center gap-3 text-sm text-porcelain-100/90">
                <Check className="w-5 h-5 text-gold shrink-0" />
                <span>0% APR financing available up to 24 months (CareCredit)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-porcelain-100/90">
                <Check className="w-5 h-5 text-gold shrink-0" />
                <span>PPO insurance out-of-network claims automated</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-porcelain-100/90">
                <Check className="w-5 h-5 text-gold shrink-0" />
                <span>Complimentary initial 3D digital scan & consultation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Widget Card */}
          <div className="lg:col-span-7">
            <div className="bg-porcelain-50 text-ink rounded-3xl p-6 sm:p-8 shadow-premium border border-white/20">
              <h3 className="font-display font-bold text-xl text-pine mb-4">
                Step 1: Select Your Treatments
              </h3>

              {/* Service Selection Grid */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {config.services.map((srv) => {
                  const isSelected = selectedServices.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "bg-pine/5 border-gold/80 shadow-sm"
                          : "bg-porcelain-100/50 border-mist-dark/40 hover:bg-porcelain-100"
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-pine">{srv.name}</p>
                        <p className="text-[11px] text-gold-dark font-mono font-semibold">
                          ~${srv.estimatedPrice.toLocaleString()}
                        </p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${
                          isSelected
                            ? "bg-gold border-gold text-ink"
                            : "border-mist-dark"
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <h3 className="font-display font-bold text-xl text-pine mb-4">
                Step 2: Choose Financing Period
              </h3>

              <div className="flex gap-3 mb-8">
                {[12, 24, 36].map((months) => (
                  <button
                    key={months}
                    onClick={() => setFinancingMonths(months as 12 | 24 | 36)}
                    className={`flex-1 py-3 rounded-2xl text-xs font-bold font-mono transition-all cursor-pointer ${
                      financingMonths === months
                        ? "bg-pine text-porcelain-50 shadow-md"
                        : "bg-porcelain-100 text-ink/70 hover:bg-mist border border-mist-dark/40"
                    }`}
                  >
                    {months} Months (0% APR)
                  </button>
                ))}
              </div>

              {/* Summary Display Box */}
              <div className="bg-pine text-porcelain-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-pine-light">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold">
                    Estimated Plan Total
                  </span>
                  <div className="text-2xl font-bold font-mono text-white mt-0.5">
                    ${totalEstimatedCost.toLocaleString()}
                  </div>
                  <div className="text-xs text-porcelain-100/70 mt-1">
                    {selectedServices.length} treatment(s) selected
                  </div>
                </div>

                <div className="text-right sm:border-l sm:border-porcelain-100/20 sm:pl-6 w-full sm:w-auto">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold-light">
                    Estimated Monthly
                  </span>
                  <div className="text-3xl font-bold font-mono text-gold mt-0.5 flex items-center justify-end">
                    <DollarSign className="w-6 h-6 text-gold -mr-1" />
                    {monthlyPayment}
                    <span className="text-xs font-sans text-porcelain-100/80 font-normal">/mo</span>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <Button
                variant="gold"
                size="lg"
                onClick={() =>
                  onOpenBooking(
                    `Selected Plan (${selectedServices.length} items - ~$${monthlyPayment}/mo)`
                  )
                }
                icon={<Sparkles className="w-4 h-4 text-ink" />}
                className="w-full mt-6 shadow-md"
              >
                Apply Financing & Reserve Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
