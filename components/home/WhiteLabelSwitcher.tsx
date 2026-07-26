"use client";

import { useState } from "react";
import { SlidersHorizontal, Check, X, Sparkles } from "lucide-react";
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
      {/* Floating Button */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-theme bg-secondary text-white shadow-2xl border border-white/10 hover:scale-105 transition-all duration-300 group cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-xs font-mono font-black tracking-wider uppercase">
            ⚡ White-Label Demo Switcher
          </span>
        </button>
      ) : (
        /* Preset Swapping Drawer */
        <div className="bg-secondary text-white rounded-theme p-6 shadow-2xl border border-white/10 max-w-sm w-full animate-in slide-in-from-bottom-4 fade-in">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <h4 className="font-sans font-black text-sm text-white">
                Preset White-Label Switcher
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-theme text-white/70 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-white/80 mb-4 leading-relaxed font-semibold">
            Select a clinical preset below to instantly rebrand the layout styling, theme colors, copy, and doctor credentials:
          </p>

          <div className="space-y-2 mb-4">
            {PRESET_CLINICS.map((preset: Preset) => {
              const isSelected = currentConfig.id === preset.config.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => onSelectConfig(preset.config)}
                  className={`w-full p-3 rounded-theme border text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-primary/20 border-primary text-white"
                      : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                  }`}
                >
                  <div>
                    <div className="text-xs font-black font-sans">{preset.label}</div>
                    <div className="text-[10px] text-white/60 font-mono mt-0.5">
                      {preset.subtitle}
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-primary" />}
                </button>
              );
            })}
          </div>

          <div className="text-[10px] font-mono text-white/55 text-center border-t border-white/10 pt-3">
            Pure configuration driven. Zero coding changes.
          </div>
        </div>
      )}
    </div>
  );
}
