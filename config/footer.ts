import { brandingConfig } from "./branding";

export interface FooterConfig {
  complianceNote: string;
  copyright: string;
  links: Array<{ label: string; href: string }>;
}

export const footerConfig: FooterConfig = {
  complianceNote: `${brandingConfig.clinicName} is fully compliant with state and national healthcare standards. Our clinic operates under strict sterilization protocols.`,
  copyright: brandingConfig.copyright,
  links: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Patient Guidelines", href: "#guidelines" },
    { label: "Book Appointment", href: "#services" },
  ],
};
