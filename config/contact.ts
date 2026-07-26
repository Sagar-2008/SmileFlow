import type { ClinicHours } from "@/types/site";

export interface ContactConfig {
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
  hours: ClinicHours[];
}

export const contactConfig: ContactConfig = {
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  emergencyPhone: "+91 80 4567 8900",
  email: "care@apexdental.in",
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
};
