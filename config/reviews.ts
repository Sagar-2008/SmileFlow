import type { Testimonial } from "@/types/site";

export const reviewsConfig: Testimonial[] = [
  {
    id: "review-1",
    patientName: "Linda Henderson",
    rating: 5,
    treatment: "Routine Exam & Cleaning",
    comment: "This was the first time I actually enjoyed going to the dentist. The cleaning was completely painless, the staff was extremely friendly, and there was no waiting around.",
    date: "1 week ago",
    verified: true,
  },
  {
    id: "review-2",
    patientName: "David K.",
    rating: 5,
    treatment: "Modern Dental Implant",
    comment: "I had a missing molar replaced with an implant. Dr. Vance walked me through the 3D-guided process step-by-step. The surgery was fast, and the tooth feels completely natural.",
    date: "1 month ago",
    verified: true,
  },
  {
    id: "review-3",
    patientName: "Amanda Reyes",
    rating: 5,
    treatment: "Invisalign® Aligners",
    comment: "Highly recommend Dr. Miller! The 3D iTero scans were so cool, and my aligner trays arrived in just a few days. Now my teeth are perfectly straight.",
    date: "3 weeks ago",
    verified: true,
  },
];
