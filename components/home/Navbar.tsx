"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, CheckSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationConfig } from "@/config/navigation";
import { animationsConfig } from "@/config/animations";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
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
          ? "bg-bg-card/95 backdrop-blur-md border-b border-border-theme/60 py-3 shadow-card"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo Brand Icon & Copy */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-theme bg-primary flex items-center justify-center text-white font-display font-bold text-xl shadow-sm transition-transform duration-300 group-hover:scale-105">
              {config.logo.mark}
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-base tracking-tight text-secondary leading-none">
                {config.logo.wordmark}
              </span>
              <span className="text-[10px] font-mono tracking-[0.15em] text-primary uppercase mt-0.5 font-bold">
                {config.logo.wordmarkSuffix}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navigationConfig.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-text-muted hover:text-primary transition-colors py-1.5 duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 px-3 py-2 rounded-theme text-xs font-semibold text-secondary hover:bg-primary/5 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>{config.contact.phoneDisplay}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenBooking()}
              icon={<Calendar className="w-3.5 h-3.5" />}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-theme text-secondary hover:bg-primary/5 lg:hidden transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu with Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={animationsConfig.fadeIn}
              className="lg:hidden mt-4 pb-6 pt-2 border-t border-border-theme/40"
            >
              <div className="flex flex-col gap-2">
                {navigationConfig.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-text-main hover:text-primary py-2 px-3 rounded-theme hover:bg-primary/5 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-border-theme/20 flex flex-col gap-2.5">
                  <a
                    href={`tel:${config.contact.phone}`}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-secondary font-bold"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>Call Us: {config.contact.phoneDisplay}</span>
                  </a>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full"
                    icon={<Calendar className="w-4 h-4" />}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}