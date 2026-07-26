export interface HeroConfig {
  eyebrow: string;
  headline: string[];
  description: string;
  trustBadge: {
    rating: string;
    reviewCount: string;
    platform: string;
  };
  availabilityNote: string;
  stats: Array<{ value: string; label: string }>;
  heroImage: string;
}

export const heroConfig: HeroConfig = {
  eyebrow: "Trusted Family & Cosmetic Dentistry",
  headline: [
    "Painless dental care.",
    "Modern technology.",
    "Healthy, confident smiles.",
  ],
  description:
    "From routine teeth cleaning and painless root canals to laser whitening, clear aligners, and dental implants—we deliver gentle, affordable care for every family member.",
  trustBadge: {
    rating: "4.9",
    reviewCount: "520+",
    platform: "Google Patient Reviews",
  },
  availabilityNote: "Appointments available today.",
  stats: [
    { value: "14+", label: "Years in Practice" },
    { value: "15,000+", label: "Happy Smiles" },
    { value: "99.2%", label: "Patient Satisfaction" },
    { value: "0 min", label: "Average Wait Time" },
  ],
  heroImage: "/images/hero.jpg",
};
