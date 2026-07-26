import type { ClinicConfig, Service } from "@/types/site";
import { brandingConfig } from "./branding";
import { contactConfig } from "./contact";
import { themeConfig } from "./theme";
import { heroConfig } from "./hero";
import { servicesConfig, amenitiesConfig } from "./services";
import { pricingConfig } from "./pricing";
import { beforeAfterConfig } from "./beforeAfter";
import { doctorsConfig } from "./doctors";
import { reviewsConfig } from "./reviews";
import { faqConfig } from "./faq";

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
  contact: contactConfig,
  theme: themeConfig,
  hero: heroConfig,
  doctors: doctorsConfig,
  services: fullyMappedServices,
  transformations: beforeAfterConfig,
  amenities: amenitiesConfig,
  testimonials: reviewsConfig,
  faqs: faqConfig,
};