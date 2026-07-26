export interface FooterConfig {
  complianceNote: string;
  copyright: string;
  links: Array<{ label: string; href: string }>;
}

export const footerConfig: FooterConfig = {
  complianceNote: "Evergreen Dental Care is fully HIPAA compliant and ADA accessible. Our office operates in full compliance with state and federal healthcare standards.",
  copyright: "Evergreen Dental Care. All rights reserved.",
  links: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Accessibility Statement", href: "#accessibility" },
    { label: "Patient Portal", href: "#portal" },
  ],
};
