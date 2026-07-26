import type { ClinicConfig, Service } from "@/types/site";
import { brandingConfig } from "./branding";
import { themeConfig } from "./theme";
import { heroConfig } from "./hero";
import { servicesConfig, amenitiesConfig } from "./services";
import { pricingConfig } from "./pricing";
import { beforeAfterConfig } from "./beforeAfter";
import { doctorsConfig } from "./doctors";
import { reviewsConfig } from "./reviews";
import { faqConfig } from "./faq";
import { navigationConfig } from "./navigation";
import { footerConfig } from "./footer";

// Map services with pricing configuration dynamically
const fullyMappedServices: Service[] = servicesConfig.map((service) => {
  const priceData = pricingConfig[service.id] || {
    priceRange: "Contact for pricing",
    estimatedPrice: 0,
  };
  return {
    ...service,
    priceRange: priceData.priceRange,
    estimatedPrice: priceData.estimatedPrice,
  } as Service;
});

export const siteConfig: ClinicConfig = {
  id: "apex-dental",
  name: brandingConfig.clinicName,
  shortName: brandingConfig.shortName,
  url: "https://apexdental.in",
  tagline: brandingConfig.tagline,
  description: brandingConfig.description,
  establishedYear: brandingConfig.establishedYear,
  logo: brandingConfig.logo,
  primaryCta: brandingConfig.primaryCta,
  secondaryCta: brandingConfig.secondaryCta,
  contact: {
    phone: brandingConfig.phone,
    phoneDisplay: brandingConfig.phoneDisplay,
    whatsapp: brandingConfig.whatsapp,
    whatsappDisplay: brandingConfig.whatsappDisplay,
    emergencyPhone: brandingConfig.emergencyPhone,
    email: brandingConfig.email,
    address: brandingConfig.address,
    hours: brandingConfig.hours,
  },
  theme: themeConfig,
  hero: heroConfig,
  navigation: navigationConfig,
  footer: footerConfig,
  doctors: doctorsConfig,
  services: fullyMappedServices,
  transformations: beforeAfterConfig,
  amenities: amenitiesConfig,
  testimonials: reviewsConfig,
  faqs: faqConfig,
};