"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, Sparkles } from "lucide-react";
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

  const navLinks = [
    { label: "Treatments", href: "#services" },
    { label: "Smile Gallery", href: "#transformations" },
    { label: "Cost Estimator", href: "#calculator" },
    { label: "Specialists", href: "#doctors" },
    { label: "Amenities", href: "#experience" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-porcelain/90 backdrop-blur-md border-b border-mist-dark/40 py-3 shadow-card"
          : "bg-transparent py-5"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-pine flex items-center justify-center text-gold font-display font-bold text-xl shadow-md transition-transform group-hover:scale-105">
              {config.logo.mark}
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-pine leading-none">
                {config.logo.wordmark}
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-gold-dark uppercase mt-0.5">
                {config.logo.wordmarkSuffix}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-ink/70 hover:text-pine transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium text-pine hover:bg-mist/50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-dark" />
              <span>{config.contact.phoneDisplay}</span>
            </a>

            <Button
              variant="gold"
              size="sm"
              onClick={() => onOpenBooking()}
              icon={<Sparkles className="w-3.5 h-3.5 text-ink" />}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-pine hover:bg-mist/50 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 pt-2 border-t border-mist-dark/30 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-ink/80 hover:text-pine py-2 px-3 rounded-lg hover:bg-mist/40"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-mist-dark/20 flex flex-col gap-2">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-pine font-medium"
                >
                  <Phone className="w-4 h-4 text-gold-dark" />
                  <span>Call: {config.contact.phoneDisplay}</span>
                </a>
                <Button
                  variant="gold"
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
          </div>
        )}
      </Container>
    </header>
  );
}