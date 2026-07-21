import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Meridian Dental Studio",
  shortName: "Meridian",
  domain: "meridiandental.studio",
  url: "https://www.meridiandental.studio",
  tagline: "Precision dentistry, practiced like a craft.",
  description:
    "Meridian Dental Studio blends restorative and cosmetic dentistry with the unhurried pace of a private atelier — every appointment planned around your comfort, not the clock.",
  logo: {
    mark: "M",
    wordmark: "Meridian",
    wordmarkSuffix: "Dental Studio",
  },
  contact: {
    phone: "+1 (415) 555-0148",
    phoneDisplay: "(415) 555-0148",
    email: "hello@meridiandental.studio",
    address: {
      line1: "148 Linden Court, Suite 3",
      line2: "San Francisco, CA 94108",
      mapUrl: "https://maps.google.com/?q=148+Linden+Court+San+Francisco",
    },
  },
  hours: [
    { day: "Monday – Thursday", time: "8:00 AM – 6:00 PM" },
    { day: "Friday", time: "8:00 AM – 4:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: [
    { platform: "Instagram", href: "https://instagram.com/meridiandental" },
    { platform: "LinkedIn", href: "https://linkedin.com/company/meridiandental" },
    { platform: "Google", href: "https://g.page/meridiandental" },
  ],
  cta: {
    bookLabel: "Book a consultation",
    callLabel: "Call the studio",
  },
  hero: {
    eyebrow: "Private Dental Studio — Est. 2014",
    headline: ["Precision dentistry,", "practiced like a craft."],
    description:
      "Restorative and cosmetic care delivered with the calm, unhurried pace of a private atelier — every visit planned around your comfort, not the clock.",
    primaryCta: { label: "Book a consultation", href: "#contact" },
    secondaryCta: { label: "See our approach", href: "#about" },
    stats: [
      { value: "12+", label: "Years in practice" },
      { value: "4.9", label: "Average rating" },
      { value: "3,400+", label: "Smiles treated" },
    ],
    trustBadge: { rating: "4.9", reviewCount: "500+" },
    availabilityNote: "New patients seen within the week.",
  },
};