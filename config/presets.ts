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
    id: "meridian-atelier",
    label: "Meridian Atelier",
    subtitle: "Luxury Cosmetic & Implant Studio",
    config: siteConfig,
  },
  {
    id: "vogue-cosmetic",
    label: "Vogue Dental Spa",
    subtitle: "Beverly Hills Aesthetic Dentistry",
    config: {
      ...siteConfig,
      id: "vogue-cosmetic",
      name: "Vogue Dental Spa",
      shortName: "Vogue",
      tagline: "High-Fashion Smile Architecture",
      description: "Beverly Hills' premier dental lounge specializing in Hollywood smile makeovers, porcelain veneers, and red-carpet teeth whitening.",
      logo: {
        mark: "V",
        wordmark: "VOGUE",
        wordmarkSuffix: "DENTAL SPA",
      },
      contact: {
        ...siteConfig.contact,
        phoneDisplay: "(310) 555-9020",
        address: {
          street: "9680 Wilshire Boulevard",
          suite: "Floor 5",
          cityStateZip: "Beverly Hills, CA 90212",
          mapUrl: "https://maps.google.com/?q=9680+Wilshire+Blvd+Beverly+Hills",
        },
      },
      theme: {
        primaryColor: "#17151D",
        accentColor: "#E0C097",
        heroStyle: "luxury",
      },
      hero: {
        ...siteConfig.hero,
        eyebrow: "Beverly Hills Aesthetic Dental Lounge",
        headline: [
          "Red carpet smiles.",
          "Flawless elegance.",
          "Zero compromise.",
        ],
        description: "Transform your smile with the elite cosmetic dentists trusted by fashion icons, actors, and executives worldwide.",
      },
    },
  },
  {
    id: "apex-family",
    label: "Apex Family Care",
    subtitle: "Modern Family & General Dentistry",
    config: {
      ...siteConfig,
      id: "apex-family",
      name: "Apex Family Dental Care",
      shortName: "Apex",
      tagline: "Gentle Care for Every Generation",
      description: "Comprehensive family dentistry combining gentle pediatric care, preventive wellness, and modern restoration for all ages.",
      logo: {
        mark: "A",
        wordmark: "APEX",
        wordmarkSuffix: "FAMILY DENTAL",
      },
      contact: {
        ...siteConfig.contact,
        phoneDisplay: "(510) 555-3344",
        address: {
          street: "450 University Avenue",
          suite: "Building B",
          cityStateZip: "Palo Alto, CA 94301",
          mapUrl: "https://maps.google.com/?q=450+University+Ave+Palo+Alto",
        },
      },
      theme: {
        primaryColor: "#0F2C59",
        accentColor: "#4F709C",
        heroStyle: "modern",
      },
      hero: {
        ...siteConfig.hero,
        eyebrow: "Palo Alto Comprehensive Family Care",
        headline: [
          "Warm, gentle care",
          "for your entire family.",
          "Modern dentistry.",
        ],
        description: "From your child's first checkup to advanced tooth restoration, we make dental visits comfortable, transparent, and stress-free.",
      },
    },
  },
];
