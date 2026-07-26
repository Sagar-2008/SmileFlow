"use client";

import { useState, useRef, useCallback } from "react";
import { Sparkles, MoveHorizontal, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { animationsConfig } from "@/config/animations";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { ClinicConfig } from "@/types/site";

interface SmileTransformationProps {
  config: ClinicConfig;
  onOpenBooking: (serviceId?: string) => void;
}

export default function SmileTransformation({ config, onOpenBooking }: SmileTransformationProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = config.transformations[activeIndex] || config.transformations[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="transformations" className="py-20 bg-bg-base relative overflow-hidden border-b border-border-theme/40">
      <Container>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animationsConfig.staggerContainer}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            variants={animationsConfig.fadeInUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-theme bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4 font-bold"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Treatment Outcomes
          </motion.div>
          <motion.h2
            variants={animationsConfig.fadeInUp}
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-4"
          >
            Smile Gallery transformations
          </motion.h2>
          <motion.p
            variants={animationsConfig.fadeInUp}
            className="text-base text-text-muted font-medium"
          >
            Drag the slider to compare real patient alignment, whitening, and cosmetic restoration results performed by our clinical specialists.
          </motion.p>
        </motion.div>

        {/* Case selector buttons */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {config.transformations.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-theme text-xs font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeIndex === idx
                  ? "bg-primary text-white shadow-md"
                  : "bg-bg-card text-text-muted hover:bg-primary/5 border border-border-theme"
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Comparison card slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animationsConfig.scaleUp}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-bg-card rounded-theme p-4 sm:p-5 shadow-premium border border-border-theme">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] w-full rounded-[calc(var(--border-radius)-0.25rem)] overflow-hidden select-none cursor-ew-resize touch-none shadow-inner bg-slate-100"
            >
              {/* Before Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${activeCase.beforeImage})` }}
              >
                <span className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-theme bg-secondary/80 text-white font-mono text-xs uppercase tracking-wider backdrop-blur-sm font-bold">
                  Before Treatment
                </span>
              </div>

              {/* After Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${activeCase.afterImage})`,
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              >
                <span className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-theme bg-primary/95 text-white font-mono text-xs uppercase tracking-wider backdrop-blur-sm font-bold">
                  After Result
                </span>
              </div>

              {/* Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-xl border border-white">
                  <MoveHorizontal className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Quote details */}
            <div className="mt-6 grid sm:grid-cols-12 gap-6 items-center border-t border-border-theme pt-5">
              <div className="sm:col-span-8">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Procedure: {activeCase.treatment} ({activeCase.duration})</span>
                </div>
                <blockquote className="text-sm italic text-text-muted leading-relaxed font-sans">
                  &ldquo;{activeCase.patientQuote}&rdquo;
                </blockquote>
                <p className="text-xs font-bold text-secondary mt-1.5">
                  — Treated by {activeCase.doctorName}
                </p>
              </div>

              <div className="sm:col-span-4 flex justify-end">
                <Button
                  variant="accent"
                  size="md"
                  onClick={() => onOpenBooking(activeCase.treatment)}
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  Consult Similar Care
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
