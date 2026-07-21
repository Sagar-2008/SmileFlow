"use client";

import { useState, useRef, useCallback } from "react";
import { Sparkles, MoveHorizontal, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { ClinicConfig } from "@/types/site";

interface SmileTransformationProps {
  config: ClinicConfig;
  onOpenBooking: (serviceId?: string) => void;
}

export default function SmileTransformation({ config, onOpenBooking }: SmileTransformationProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTransformationIndex, setActiveTransformationIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTransformation = config.transformations[activeTransformationIndex] || config.transformations[0];

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
    <section id="transformations" className="py-20 bg-porcelain-100 relative overflow-hidden border-b border-mist-dark/30">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pine/5 border border-pine/10 text-pine text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            Real Patient Results
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-pine tracking-tight mb-4">
            Interactive Smile Transformation Gallery
          </h2>
          <p className="text-base text-ink/70 leading-relaxed">
            Drag the interactive slider left and right to reveal the hand-crafted porcelain veneer and alignment results designed at {config.name}.
          </p>
        </div>

        {/* Transformation Case Selector */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {config.transformations.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTransformationIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                activeTransformationIndex === idx
                  ? "bg-pine text-porcelain-50 shadow-md"
                  : "bg-porcelain-50 text-ink/70 hover:bg-mist border border-mist-dark/40"
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        {/* Interactive Before/After Visual Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-porcelain-50 rounded-3xl p-4 sm:p-6 shadow-premium border border-mist-dark/60">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize touch-none shadow-inner"
            >
              {/* BEFORE Image (Base layer) */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${activeTransformation.beforeImage})` }}
              >
                <span className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-pine/80 text-white font-mono text-xs uppercase tracking-widest backdrop-blur-md">
                  BEFORE
                </span>
              </div>

              {/* AFTER Image (Clipped overlay layer) */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-none"
                style={{
                  backgroundImage: `url(${activeTransformation.afterImage})`,
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
              >
                <span className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-gold-dark/90 text-white font-mono text-xs uppercase tracking-widest backdrop-blur-md">
                  AFTER RESULT
                </span>
              </div>

              {/* Center Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-pine text-gold flex items-center justify-center shadow-xl border-2 border-white">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Case Details & Patient Testimonial Quote */}
            <div className="mt-6 grid sm:grid-cols-12 gap-6 items-center border-t border-mist-dark/30 pt-6">
              <div className="sm:col-span-8">
                <div className="flex items-center gap-2 text-xs font-mono text-gold-dark font-semibold uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  Treatment: {activeTransformation.treatment} ({activeTransformation.duration})
                </div>
                <blockquote className="text-sm italic text-ink/80 leading-relaxed font-serif">
                  &ldquo;{activeTransformation.patientQuote}&rdquo;
                </blockquote>
                <p className="text-xs font-semibold text-pine mt-2">
                  — Crafted by {activeTransformation.doctorName}
                </p>
              </div>

              <div className="sm:col-span-4 flex justify-end">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => onOpenBooking(activeTransformation.treatment)}
                  icon={<Sparkles className="w-4 h-4 text-ink" />}
                >
                  Book Similar Results
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
