"use client";

import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { footerConfig } from "@/config/footer";
import { socialConfig } from "@/config/social";
import Container from "@/components/ui/Container";
import type { ClinicConfig } from "@/types/site";

interface FooterProps {
  config: ClinicConfig;
  onOpenBooking: (serviceId?: string) => void;
}

export default function Footer({ config, onOpenBooking }: FooterProps) {
  const { contact, logo } = config;

  return (
    <footer className="bg-secondary text-white pt-20 pb-12 relative overflow-hidden border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-theme bg-primary flex items-center justify-center text-white font-display font-bold text-xl">
                {logo.mark}
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-base tracking-tight text-white leading-none">
                  {logo.wordmark}
                </span>
                <span className="text-[10px] font-mono tracking-[0.15em] text-primary uppercase font-bold mt-0.5">
                  {logo.wordmarkSuffix}
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed mb-6 font-medium">
              {config.description}
            </p>

            <div className="flex items-center gap-2.5 text-xs font-mono text-white/80 bg-white/5 p-3 rounded-theme border border-white/10">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>{footerConfig.complianceNote.split(".")[0]}.</span>
            </div>
          </div>

          {/* Col 2: Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="font-sans font-extrabold text-xs uppercase tracking-wider text-primary mb-4">
              Clinic Contact
            </h4>

            <ul className="space-y-4 text-xs text-white/85 font-semibold">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-white">
                    {contact.address.street}, {contact.address.suite}
                  </p>
                  <p>{contact.address.cityStateZip}</p>
                  <a
                    href={contact.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-primary hover:underline mt-1.5 font-bold uppercase tracking-wider"
                  >
                    Open Google Maps <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <span>Office: </span>
                  <a href={`tel:${contact.phone}`} className="font-extrabold text-white hover:text-primary">
                    {contact.phoneDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Emergency */}
          <div className="lg:col-span-4">
            <h4 className="font-sans font-extrabold text-xs uppercase tracking-wider text-primary mb-4">
              Office Hours
            </h4>

            <ul className="space-y-2.5 text-xs text-white/85 font-semibold mb-6">
              {contact.hours.map((h, idx) => (
                <li key={idx} className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-white">{h.day}</span>
                  <span className="font-mono text-primary font-bold">{h.hours}</span>
                </li>
              ))}
            </ul>

            <div className="bg-primary/10 rounded-theme p-3 border border-primary/20 text-xs text-primary font-semibold">
              <span className="font-black text-white">Dental Emergency Hotline:</span>{" "}
              <a href={`tel:${contact.emergencyPhone}`} className="underline font-mono ml-1 font-bold">
                {contact.emergencyPhone}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom footer bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4 font-semibold">
          <p>© {new Date().getFullYear()} {footerConfig.copyright}</p>
          <div className="flex gap-6">
            {footerConfig.links.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
