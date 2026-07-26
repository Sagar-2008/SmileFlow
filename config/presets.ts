import type { ClinicConfig } from "@/types/site";
import { siteConfig } from "./site";

export interface Preset {
  id: string;
  label: string;
  subtitle: string;
  config: ClinicConfig;
}

export const PRESET_CLINICS: Preset[] = [
  {
    id: "evergreen-dental",
    label: "Evergreen Dental Care",
    subtitle: "Default Family & Wellness Care",
    config: siteConfig,
  },
  {
    id: "apex-partners",
    label: "Apex Dental Partners",
    subtitle: "Modern Multi-Specialty Group",
    config: {
      ...siteConfig,
      id: "apex-partners",
      name: "Apex Dental Partners",
      shortName: "Apex",
      tagline: "State-of-the-Art Care, Exceptional Service",
      description: "Apex Dental Partners utilizes advanced digital scanning, painless laser fillings, and modern restoration options to provide clinical excellence for your family.",
      logo: {
        mark: "A",
        wordmark: "APEX DENTAL",
        wordmarkSuffix: "PARTNERS",
      },
      contact: {
        ...siteConfig.contact,
        phoneDisplay: "(650) 555-8899",
        address: {
          street: "880 El Camino Real",
          suite: "Suite 100",
          cityStateZip: "Mountain View, CA 94040",
          mapUrl: "https://maps.google.com/?q=880+El+Camino+Real+Mountain+View",
        },
      },
      theme: {
        primaryColor: "#0f172a", // Navy
        secondaryColor: "#1e293b", // Slate
        accentColor: "#3b82f6", // Bright Blue
        bgColor: "#f1f5f9",
        bgCardColor: "#ffffff",
        textColor: "#0f172a",
        textMutedColor: "#475569",
        borderColor: "#cbd5e1",
        borderRadius: "0.5rem", // Modern boxy
        shadowSm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        shadowMd: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        shadowLg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        heroStyle: "modern",
      },
      hero: {
        ...siteConfig.hero,
        eyebrow: "Comprehensive Digital Dentistry",
        headline: [
          "Advanced dentistry.",
          "Caring specialists.",
          "Trusted outcomes.",
        ],
        description: "Experience modern healthcare designed to preserve your teeth for life. Enjoy on-time visits, digital scanning, and painless treatment protocols.",
      },
    },
  },
  {
    id: "radiant-smiles",
    label: "Radiant Smile Studio",
    subtitle: "Premium Ortho & Cosmetic Center",
    config: {
      ...siteConfig,
      id: "radiant-smiles",
      name: "Radiant Smile Studio",
      shortName: "Radiant",
      tagline: "Healthy Alignment, Beautiful Smiles",
      description: "Radiant Smile Studio is your premier local clinic for Invisalign clear aligners, teeth whitening, and custom cosmetic veneers in a friendly setting.",
      logo: {
        mark: "R",
        wordmark: "RADIANT",
        wordmarkSuffix: "SMILE STUDIO",
      },
      contact: {
        ...siteConfig.contact,
        phoneDisplay: "(415) 555-2244",
        address: {
          street: "1020 Post Street",
          suite: "Suite 400",
          cityStateZip: "San Francisco, CA 94109",
          mapUrl: "https://maps.google.com/?q=1020+Post+Street+San+Francisco",
        },
      },
      theme: {
        primaryColor: "#0d9488", // Deep Teal
        secondaryColor: "#115e59", // Teal Dark
        accentColor: "#ec4899", // Pink Accent
        bgColor: "#fafaf9",
        bgCardColor: "#ffffff",
        textColor: "#1c1917",
        textMutedColor: "#57534e",
        borderColor: "#e7e5e4",
        borderRadius: "1.5rem", // Extra friendly rounded
        shadowSm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        shadowMd: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        shadowLg: "0 10px 15px -3px rgba(0, 0, 0, 0.08)",
        heroStyle: "minimal",
      },
      hero: {
        ...siteConfig.hero,
        eyebrow: "Orthodontic & Aesthetic Specialists",
        headline: [
          "Perfect alignment.",
          "Luminous whitening.",
          "Confidence restored.",
        ],
        description: "Transform your smile comfortably with state-of-the-art clear aligner therapy, laser whitening, and expert aesthetic evaluations from our friendly team.",
      },
    },
  },
];
