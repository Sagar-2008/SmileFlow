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
  eyebrow: "Welcome to Modern Family Dentistry",
  headline: [
    "Gentle dental care.",
    "Warm environment.",
    "Healthy smiles.",
  ],
  description:
    "We provide complete dental care for patients of all ages. From preventive checkups to cosmetic smile makeovers and dental implants, our focus is always on your comfort.",
  trustBadge: {
    rating: "4.9",
    reviewCount: "480+",
    platform: "Google Verified Reviews",
  },
  availabilityNote: "Appointments available this week.",
  stats: [
    { value: "10+", label: "Years in Practice" },
    { value: "5,000+", label: "Happy Patients" },
    { value: "99%", label: "Satisfaction Rate" },
    { value: "0 min", label: "Average Wait Time" },
  ],
  heroImage: "/images/hero.jpg",
};
