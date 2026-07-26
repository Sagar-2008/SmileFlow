export interface BrandingConfig {
  clinicName: string;
  shortName: string;
  establishedYear: number;
  logo: {
    mark: string;
    wordmark: string;
    wordmarkSuffix: string;
  };
  tagline: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  emergencyPhone: string;
  email: string;
  address: {
    street: string;
    suite: string;
    cityStateZip: string;
    mapUrl: string;
  };
  hours: Array<{
    day: string;
    hours: string;
  }>;
  primaryCta: string;
  secondaryCta: string;
  copyright: string;
  socialLinks: Array<{
    platform: string;
    href: string;
  }>;
}

export const brandingConfig: BrandingConfig = {
  clinicName: "Apex Dental & Implant Centre",
  shortName: "Apex Dental",
  establishedYear: 2012,
  logo: {
    mark: "A",
    wordmark: "APEX DENTAL",
    wordmarkSuffix: "IMPLANT & COSMETIC CENTRE",
  },
  tagline: "Gentle, Modern Dental Care for Your Family",
  description:
    "Apex Dental & Implant Centre is a trusted local practice committed to gentle, painless treatments, 3D digital diagnostics, and honest family dental health.",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "+919876543210",
  whatsappDisplay: "+91 98765 43210",
  emergencyPhone: "+91 80 4567 8900",
  email: "sagarsalgar280@gmail.com",
  address: {
    street: "Plot 42, 100 Feet Road",
    suite: "Indiranagar",
    cityStateZip: "Bengaluru, Karnataka 560038",
    mapUrl: "https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru",
  },
  hours: [
    { day: "Monday – Saturday", hours: "9:00 AM – 8:30 PM" },
    { day: "Sunday", hours: "10:00 AM – 2:00 PM (By Appt)" },
  ],
  primaryCta: "Book Appointment",
  secondaryCta: "Calculate EMI Cost",
  copyright: "Apex Dental & Implant Centre. All rights reserved.",
  socialLinks: [
    { platform: "Facebook", href: "https://facebook.com/apexdental" },
    { platform: "Instagram", href: "https://instagram.com/apexdental" },
    { platform: "Google", href: "https://g.page/apexdental" },
  ],
};
