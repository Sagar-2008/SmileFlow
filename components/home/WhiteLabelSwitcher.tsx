"use client";

import { useState } from "react";
import { SlidersHorizontal, Check, RefreshCw, X, Sparkles } from "lucide-react";
import { PRESET_CLINICS, type Preset } from "@/config/presets";
import type { ClinicConfig } from "@/types/site";

interface WhiteLabelSwitcherProps {
  currentConfig: ClinicConfig;
  onSelectConfig: (config: ClinicConfig) => void;
}

export default function WhiteLabelSwitcher({
  currentConfig,
  onSelectConfig,
}: WhiteLabelSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Floating Demo Trigger Button */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-pine text-gold shadow-2xl border border-gold/40 hover:scale-105 transition-all duration-300 group cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4 text-gold group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-xs font-mono font-bold tracking-wider uppercase">
            ⚡ White-Label Preset Switcher
          </span>
        </button>
      ) : (
        /* Expanded Preset Drawer Panel */
        <div className="bg-pine text-porcelain-50 rounded-3xl p-6 shadow-2xl border border-gold/30 max-w-sm w-full animate-in slide-in-from-bottom-4 fade-in">
          <div className="flex items-center justify-between mb-4 border-b border-porcelain-100/10 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <h4 className="font-display font-bold text-sm text-white">
                Reseller Live White-Label Demo
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-porcelain-100/70 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-porcelain-100/70 mb-4 leading-relaxed">
            Click below to instantly swap clinic branding, colors, doctors, phone numbers, and locations in real-time to show prospective buyers:
          </p>

          <div className="space-y-2 mb-4">
            {PRESET_CLINICS.map((preset: Preset) => {
              const isSelected = currentConfig.id === preset.config.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => onSelectConfig(preset.config)}
                  className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gold/20 border-gold text-white"
                      : "bg-porcelain-100/5 border-white/10 text-porcelain-100/80 hover:bg-white/10"
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold font-display">{preset.label}</div>
                    <div className="text-[10px] text-gold-light font-mono mt-0.5">
                      {preset.subtitle}
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-gold" />}
                </button>
              );
            })}
          </div>

          <div className="text-[10px] font-mono text-porcelain-100/50 text-center border-t border-white/10 pt-3">
            Powered by single <code className="text-gold">config/site.ts</code> architecture
          </div>
        </div>
      )}
    </div>
  );
}
