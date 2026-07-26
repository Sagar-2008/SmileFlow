import type { SmileTransformation } from "@/types/site";

export const beforeAfterConfig: SmileTransformation[] = [
  {
    id: "trans-1",
    title: "Laser Whitening & Micro-Veneers",
    treatment: "Laser Whitening + Ceramic Veneers",
    duration: "2 visits over 7 days",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    patientQuote: "I was hesitant about fixing my discolored front teeth. Dr. Sharma made the entire procedure completely painless and fast!",
    doctorName: "Dr. Rajesh Sharma",
  },
  {
    id: "trans-2",
    title: "Invisalign® Teeth Straightening",
    treatment: "Clear Aligners Therapy",
    duration: "7 months total",
    beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    patientQuote: "Clear aligners were so convenient during work presentations. Nobody even noticed I was wearing them, and my teeth are now perfectly straight.",
    doctorName: "Dr. Ananya Rao",
  },
];
