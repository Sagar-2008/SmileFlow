import type { Doctor } from "@/types/site";

export const doctorsConfig: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Marcus Vance, DDS",
    title: "General & Cosmetic Dentist",
    specialty: "Restorations & Smile Makeovers",
    qualifications: "Stanford Dental School Alum, FAGD, AACD Member",
    image: "/images/doctor-1.jpg",
    bio: "Dr. Vance has over 12 years of experience creating healthy, functional smiles. He focuses on painless restorative procedures and utilizes 3D-guided digital dentistry to ensure extreme precision and comfort.",
    experienceYears: 12,
    availability: "Monday – Thursday",
  },
  {
    id: "doc-2",
    name: "Dr. Sarah Miller, DMD, MS",
    title: "Specialist Orthodontist",
    specialty: "Invisalign & Alignment Therapy",
    qualifications: "Harvard School of Dental Medicine, ABO Board Certified",
    image: "/images/doctor-2.jpg",
    bio: "Dr. Miller is passionate about helping patients of all ages achieve properly aligned jaws and teeth. She specializes in discreet clear aligners and airway-focused orthodontic treatments.",
    experienceYears: 9,
    availability: "Tuesday – Friday",
  },
];
