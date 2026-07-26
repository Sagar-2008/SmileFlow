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

// Combine servicesConfig and pricingConfig dynamically
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
  ...brandingConfig,
  id: "evergreen-dental",
  url: "https://evergreendental.com",
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