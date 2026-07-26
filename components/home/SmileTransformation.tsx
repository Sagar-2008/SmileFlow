"use client";

import { useState, useRef, useCallback } from "react";
import { Sparkles, MoveHorizontal, CheckCircle2, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Guarantee valid index synchronization across config swaps
  const safeActiveIndex = (activeIndex >= 0 && activeIndex < config.transformations.length)
    ? activeIndex
    : 0;

  const activeCase = config.transformations[safeActiveIndex] || config.transformations[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
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
    <section id="transformations" className="py-24 bg-bg-base relative overflow-hidden border-b border-border-theme/40">
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-theme bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4 font-bold"
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            Verified Patient Outcomes
          </motion.div>
          <motion.h2
            variants={animationsConfig.fadeInUp}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-4"
          >
            Smile Gallery Transformations
          </motion.h2>
          <motion.p
            variants={animationsConfig.fadeInUp}
            className="text-base sm:text-lg text-text-muted font-medium"
          >
            Drag the handle left or right to compare real before and after treatment outcomes from our clinical procedures.
          </motion.p>
        </motion.div>

        {/* Case Selector Buttons */}
        <div className="flex justify-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {config.transformations.map((t, idx) => {
            const isSelected = safeActiveIndex === idx;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setActiveIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-5 py-3 rounded-theme text-xs font-extrabold tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer hover:scale-105 ${
                  isSelected
                    ? "bg-primary text-white shadow-md ring-2 ring-primary/30"
                    : "bg-bg-card text-text-muted hover:bg-primary/5 border border-border-theme"
                }`}
              >
                {t.title}
              </button>
            );
          })}
        </div>

        {/* Interactive Drag Guide */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/15 animate-bounce shadow-sm">
            <SlidersHorizontal className="w-4 h-4" />
            ← Drag slider handle left or right to compare Before & After results →
          </span>
        </div>

        {/* Comparison Card Slider - 100% Unclipped Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animationsConfig.scaleUp}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-bg-card rounded-theme p-4 sm:p-6 shadow-premium border border-border-theme hover:shadow-2xl transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.9 }}
                transition={{ duration: 0.2 }}
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
                className="relative aspect-[16/10] w-full rounded-[calc(var(--border-radius)-0.25rem)] overflow-hidden select-none cursor-ew-resize touch-none shadow-inner bg-slate-900 border border-border-theme/60"
              >
                {/* UNCLIPPED OVERLAY BADGES - ALWAYS VISIBLE AT TOP-LEFT & TOP-RIGHT */}
                <div className="absolute top-4 left-4 z-30 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white font-mono text-xs uppercase tracking-wider backdrop-blur-md font-extrabold shadow-lg border border-white/20">
                    BEFORE TREATMENT
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-30 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-primary text-white font-mono text-xs uppercase tracking-wider backdrop-blur-md font-extrabold shadow-lg border border-white/20">
                    AFTER RESULT
                  </span>
                </div>

                {/* Full Background Image: BEFORE */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeCase.beforeImage})` }}
                />

                {/* Clipped Top Image: AFTER */}
                <div
                  className="absolute inset-0 bg-cover bg-center z-10 transition-none"
                  style={{
                    backgroundImage: `url(${activeCase.afterImage})`,
                    clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                  }}
                />

                {/* Vertical Slider Handle Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] z-30"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl border-2 border-white hover:scale-110 active:scale-95 transition-transform">
                    <MoveHorizontal className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Details & Direct Action CTA */}
            <div className="mt-6 grid sm:grid-cols-12 gap-6 items-center border-t border-border-theme pt-6">
              <div className="sm:col-span-8">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-extrabold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0" />
                  <span>Procedure: {activeCase.treatment} ({activeCase.duration})</span>
                </div>
                <blockquote className="text-base italic text-text-main leading-relaxed font-sans font-medium">
                  &ldquo;{activeCase.patientQuote}&rdquo;
                </blockquote>
                <p className="text-sm font-extrabold text-secondary mt-2">
                  — Treated by {activeCase.doctorName}
                </p>
              </div>

              <div className="sm:col-span-4 flex justify-end">
                <Button
                  variant="accent"
                  size="md"
                  onClick={() => onOpenBooking(activeCase.treatment)}
                  icon={<Sparkles className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-md hover:scale-105 transition-transform font-bold"
                >
                  Schedule Similar Care
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
