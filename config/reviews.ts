import type { Testimonial } from "@/types/site";

export const reviewsConfig: Testimonial[] = [
  {
    id: "review-1",
    patientName: "Sunita Patel",
    rating: 5,
    treatment: "Routine Exam & Cleaning",
    comment: "This was the first time I actually felt relaxed at a dental clinic. The teeth cleaning was completely painless, the staff was warm and respectful, and there was zero waiting time.",
    date: "1 week ago",
    verified: true,
  },
  {
    id: "review-2",
    patientName: "Rohan Mehta",
    rating: 5,
    treatment: "Modern Dental Implant",
    comment: "I had a missing tooth replaced with a titanium implant. Dr. Rajesh Sharma explained the computer-guided process clearly. The procedure was fast, and my new tooth looks and feels completely natural.",
    date: "1 month ago",
    verified: true,
  },
  {
    id: "review-3",
    patientName: "Priya Sharma",
    rating: 5,
    treatment: "Invisalign® Clear Aligners",
    comment: "Highly recommend Dr. Ananya Rao! The 3D digital scanner eliminated those awful impression trays. My clear aligner sets were ready quickly and my smile is now perfectly aligned.",
    date: "3 weeks ago",
    verified: true,
  },
];
