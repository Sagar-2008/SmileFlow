"use client";

import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import type { ClinicConfig } from "@/types/site";

interface FooterProps {
  config: ClinicConfig;
  onOpenBooking: (serviceId?: string) => void;
}

export default function Footer({ config, onOpenBooking }: FooterProps) {
  const { contact, hours, logo } = config;

  return (
    <footer className="bg-pine text-porcelain-50 pt-20 pb-12 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-porcelain-100/15">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center text-pine font-display font-bold text-xl">
                {logo.mark}
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-wider text-white">
                  {logo.wordmark}
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] text-gold-light uppercase">
                  {logo.wordmarkSuffix}
                </span>
              </div>
            </div>

            <p className="text-sm text-porcelain-100/70 leading-relaxed mb-6">
              {config.description}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-gold-light bg-porcelain-100/10 p-3 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>HIPAA Compliant & ADA Accessible Studio</span>
            </div>
          </div>

          {/* Col 2: Studio Location & Emergency Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-base text-white mb-4 uppercase tracking-wider text-xs font-mono text-gold">
              Studio Location & Contact
            </h4>

            <ul className="space-y-3.5 text-xs text-porcelain-100/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{contact.address.street}, {contact.address.suite}</p>
                  <p>{contact.address.cityStateZip}</p>
                  <a
                    href={contact.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-gold hover:underline mt-1 font-mono"
                  >
                    Open Google Maps <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <span>Main Line: </span>
                  <a href={`tel:${contact.phone}`} className="font-bold text-white hover:text-gold">
                    {contact.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-gold">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-base text-white mb-4 uppercase tracking-wider text-xs font-mono text-gold">
              Concierge Operating Hours
            </h4>

            <ul className="space-y-2.5 text-xs text-porcelain-100/80 mb-6">
              {hours.map((h, idx) => (
                <li key={idx} className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="font-medium text-white">{h.day}</span>
                  <span className="font-mono text-gold-light">{h.hours}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gold/15 rounded-xl p-3 border border-gold/30 text-xs text-gold-light">
              <span className="font-bold text-white">24/7 Dental Emergency Hotline:</span>{" "}
              <a href={`tel:${contact.emergencyPhone}`} className="underline font-mono">
                {contact.emergencyPhone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-porcelain-100/50 gap-4">
          <p>© {new Date().getFullYear()} {config.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
            <a href="#" className="hover:text-gold">Patient Rights</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
