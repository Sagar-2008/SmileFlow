"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, MessageCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { animationsConfig } from "@/config/animations";
import Container from "@/components/ui/Container";
import type { ClinicConfig } from "@/types/site";

interface NavbarProps {
  config: ClinicConfig;
  onOpenBooking: (serviceId?: string) => void;
}

export default function Navbar({ config, onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-card/95 backdrop-blur-lg border-b border-border-theme/80 py-3.5 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Brand Logo Presentation */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary via-cyan-600 to-primary flex items-center justify-center text-white font-display font-black text-2xl shadow-md transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-glow">
              {config.logo.mark}
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-secondary leading-none group-hover:text-primary transition-colors">
                {config.logo.wordmark}
              </span>
              <span className="text-xs font-mono tracking-[0.15em] text-primary uppercase mt-0.5 font-extrabold">
                {config.logo.wordmarkSuffix}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {config.navigation.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-extrabold tracking-wider text-text-muted hover:text-primary transition-colors py-1.5 duration-200 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Iconic Green WhatsApp Button */}
            <a
              href={`https://wa.me/${config.contact.whatsapp.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-white fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Sleek Call Button */}
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold text-secondary hover:text-primary bg-slate-100/90 hover:bg-primary/10 border border-slate-200/80 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>{config.contact.phoneDisplay}</span>
            </a>

            {/* Stunning High-Impact Book Appointment CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-primary via-cyan-500 to-primary bg-[length:200%_auto] hover:bg-right text-white font-display text-xs uppercase tracking-wider font-black shadow-[0_0_25px_rgba(2,132,199,0.4)] hover:shadow-[0_0_35px_rgba(2,132,199,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
                <span>{config.primaryCta}</span>
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              </span>
              {/* Shine flare overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 pointer-events-none" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full text-secondary hover:bg-primary/5 lg:hidden transition-colors cursor-pointer border border-border-theme"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={animationsConfig.fadeIn}
              className="lg:hidden mt-4 pb-6 pt-3 border-t border-border-theme bg-bg-card rounded-theme p-5 shadow-2xl"
            >
              <div className="flex flex-col gap-3">
                {config.navigation.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-bold text-secondary hover:text-primary py-2.5 px-3 rounded-theme hover:bg-primary/5 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-border-theme flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${config.contact.whatsapp.replace(/\+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-black text-white bg-[#25D366]"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${config.contact.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-extrabold text-secondary bg-slate-100"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>Call Us: {config.contact.phoneDisplay}</span>
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-cyan-500 text-white font-display text-sm font-black uppercase tracking-wider shadow-glow flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{config.primaryCta}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}