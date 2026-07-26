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
  phone: "+15105553344",
  phoneDisplay: "(510) 555-3344",
  emergencyPhone: "(510) 555-0911",
  email: "care@evergreendental.com",
  address: {
    street: "450 University Avenue",
    suite: "Suite B",
    cityStateZip: "Palo Alto, CA 94301",
    mapUrl: "https://maps.google.com/?q=450+University+Ave+Palo+Alto",
  },
  hours: [
    { day: "Monday – Thursday", hours: "8:00 AM – 5:00 PM" },
    { day: "Friday", hours: "8:00 AM – 2:00 PM" },
    { day: "Saturday", hours: "By Appointment Only" },
    { day: "Sunday", hours: "Closed" },
  ],
};
