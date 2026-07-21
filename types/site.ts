export type TreatmentCategory = 'cosmetic' | 'restorative' | 'orthodontics' | 'preventive';

export interface NavItem {
  label: string;
  href: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  qualifications: string;
  image: string;
  bio: string;
  experienceYears: number;
  availability: string;
}

export interface Service {
  id: string;
  name: string;
  category: TreatmentCategory;
  tag: string;
  description: string;
  priceRange: string;
  estimatedPrice: number; // For cost calculator
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface SmileTransformation {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  patientQuote: string;
  doctorName: string;
}

export interface Amenity {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  rating: number;
  treatment: string;
  comment: string;
  date: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'treatments' | 'first-visit';
}

export interface ClinicHours {
  day: string;
  hours: string;
}

export interface ClinicConfig {
  id: string;
  name: string;
  shortName: string;
  url: string;
  tagline: string;
  description: string;
  establishedYear: number;
  logo: {
    mark: string;
    wordmark: string;
    wordmarkSuffix: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    emergencyPhone: string;
    email: string;
    address: {
      street: string;
      suite: string;
      cityStateZip: string;
      mapUrl: string;
    };
  };
  hours: ClinicHours[];
  theme: {
    primaryColor: string;
    accentColor: string;
    heroStyle: 'luxury' | 'modern' | 'minimal';
  };
  hero: {
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
  };
  doctors: Doctor[];
  services: Service[];
  transformations: SmileTransformation[];
  amenities: Amenity[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
}