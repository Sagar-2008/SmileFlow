import type { Doctor } from "@/types/site";

export const doctorsConfig: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Rajesh Sharma, BDS, MDS",
    title: "Chief Dental Surgeon & Implantologist",
    specialty: "Dental Implants & Root Canals",
    qualifications: "MDS (Prosthodontics & Implantology), ICOI Fellow",
    image: "/images/doctor-1.jpg",
    bio: "Dr. Rajesh Sharma has over 14 years of clinical experience in painless root canal treatments, 3D computer-guided dental implants, and full mouth restorations.",
    experienceYears: 14,
    availability: "Monday – Saturday",
  },
  {
    id: "doc-2",
    name: "Dr. Ananya Rao, BDS, MDS",
    title: "Specialist Orthodontist",
    specialty: "Clear Aligners & Invisible Braces",
    qualifications: "MDS (Orthodontics), Certified Invisalign® Specialist",
    image: "/images/doctor-2.jpg",
    bio: "Dr. Ananya Rao specializes in digital teeth alignment using Invisalign clear aligners and ceramic braces for teenagers and adult patients.",
    experienceYears: 10,
    availability: "Tuesday – Saturday",
  },
];
