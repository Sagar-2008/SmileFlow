import { brandingConfig } from "./branding";
import type { ClinicHours } from "@/types/site";

export interface ContactConfig {
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
  hours: ClinicHours[];
}

export const contactConfig: ContactConfig = {
  phone: brandingConfig.phone,
  phoneDisplay: brandingConfig.phoneDisplay,
  whatsapp: brandingConfig.whatsapp,
  whatsappDisplay: brandingConfig.whatsappDisplay,
  emergencyPhone: brandingConfig.emergencyPhone,
  email: brandingConfig.email,
  address: brandingConfig.address,
  hours: brandingConfig.hours,
};
