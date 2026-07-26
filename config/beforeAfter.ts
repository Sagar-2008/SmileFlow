import type { SmileTransformation } from "@/types/site";

export const beforeAfterConfig: SmileTransformation[] = [
  {
    id: "trans-1",
    title: "Cosmetic Smile Whitening & Restoration",
    treatment: "6 Anterior Porcelain Veneers",
    duration: "2 appointments over 10 days",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    patientQuote: "I was self-conscious about my chipped teeth for years. The team at the clinic was incredibly gentle, and the results exceeded my expectations!",
    doctorName: "Dr. Marcus Vance",
  },
  {
    id: "trans-2",
    title: "Discreet Aligner Alignment",
    treatment: "Invisalign® Clear Aligners + Whitening Boost",
    duration: "8 months total",
    beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    patientQuote: "Straightening my teeth with clear aligners was so convenient. Nobody noticed I was wearing them, and the final laser whitening made them shine.",
    doctorName: "Dr. Sarah Miller",
  },
];
