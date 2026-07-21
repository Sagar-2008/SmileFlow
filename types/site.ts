export interface NavItem {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface BusinessHour {
  day: string;
  time: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}

export interface Address {
  line1: string;
  line2: string;
  mapUrl: string;
}

export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  address: Address;
}

export interface Logo {
  mark: string;
  wordmark: string;
  wordmarkSuffix: string;
}

export interface TrustBadge {
  rating: string;
  reviewCount: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string[];
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  stats: HeroStat[];
  trustBadge: TrustBadge;
  availabilityNote: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  logo: Logo;
  contact: ContactInfo;
  hours: BusinessHour[];
  social: SocialLink[];
  cta: {
    bookLabel: string;
    callLabel: string;
  };
  hero: HeroContent;
}