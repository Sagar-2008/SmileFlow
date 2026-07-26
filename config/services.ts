import type { Service, Amenity } from "@/types/site";

export const servicesConfig: Omit<Service, "priceRange" | "estimatedPrice">[] = [
  {
    id: "srv-hygiene",
    name: "Preventive Cleaning & Exam",
    category: "preventive",
    tag: "Essential Wellness",
    description: "Gentle plaque and tartar removal, polishing, comprehensive exam, and oral cancer screening using advanced technologies.",
    duration: "45 - 60 minutes",
    features: [
      "Ultrasonic gentle scale and clean",
      "Prophy jet stain removal and polishing",
      "Full digital checkup and gum assessment",
      "Comfort amenities (neck pillows, music)",
    ],
  },
  {
    id: "srv-veneers",
    name: "Custom Porcelain Veneers",
    category: "cosmetic",
    tag: "Cosmetic Enhancement",
    description: "Thin, hand-crafted porcelain shells bonded to the front of your teeth to correct gaps, chips, alignment, or discoloration.",
    duration: "2 visits over 10 days",
    features: [
      "Custom color-matched to your face shape",
      "High-grade, stain-resistant porcelain",
      "Digital 3D visualization preview",
      "Long-lasting durable restoration",
    ],
    popular: true,
  },
  {
    id: "srv-implants",
    name: "Modern Dental Implants",
    category: "restorative",
    tag: "Tooth Replacement",
    description: "State-of-the-art titanium roots with custom porcelain crowns that look, feel, and function just like your natural teeth.",
    duration: "3 - 6 months healing period",
    features: [
      "Precise 3D-guided surgical placement",
      "Zero discomfort sleep sedation options",
      "Restores natural chewing power",
      "Prevents bone loss and shifting teeth",
    ],
    popular: true,
  },
  {
    id: "srv-whitening",
    name: "In-Office Professional Whitening",
    category: "cosmetic",
    tag: "Brighten Your Smile",
    description: "Safe, medical-grade cold laser teeth whitening that brightens enamel up to 8 shades in a single comfortable visit.",
    duration: "60 minutes",
    features: [
      "Fast results in one appointment",
      "Custom desensitizing enamel shield",
      "Includes take-home touch-up kit",
      "Monitored safely by dental staff",
    ],
  },
  {
    id: "srv-invisalign",
    name: "Invisalign® Clear Aligners",
    category: "orthodontics",
    tag: "Discreet Straightening",
    description: "Clear, removable medical-grade plastic aligners customized to straighten your teeth without brackets or metal wires.",
    duration: "6 - 15 months average",
    features: [
      "Nearly invisible comfortable aligners",
      "No food restrictions (removable)",
      "iTero 3D digital oral scanner (no messy paste)",
      "Fewer office visits required",
    ],
    popular: true,
  },
  {
    id: "srv-sedation",
    name: "Comfortable Dental Sedation",
    category: "preventive",
    tag: "Anxiety-Free Care",
    description: "Safe nitrous oxide or oral conscious sedation options to ensure a completely calm, stress-free dental experience.",
    duration: "Varies per procedure",
    features: [
      "Ideal for dental anxiety or phobias",
      "Fully monitored by clinical staff",
      "Enables multiple procedures in one visit",
      "Drift off safely and wake up refreshed",
    ],
  },
];

export const amenitiesConfig: Amenity[] = [
  {
    title: "On-Time Appointments",
    description: "We value your schedule. Your appointment starts at the exact scheduled time with zero crowded waiting room delays.",
    iconName: "Clock",
  },
  {
    title: "3D Digital scanning",
    description: "Say goodbye to uncomfortable molding paste. Our high-definition 3D laser scanner maps your mouth digitally in seconds.",
    iconName: "Scan",
  },
  {
    title: "Gentle Laser Dentistry",
    description: "State-of-the-art dental lasers for painless, needle-free fillings and gentle gum treatments with immediate recovery.",
    iconName: "Zap",
  },
  {
    title: "Patient Comforts",
    description: "Enjoy noise-canceling headphones, ceiling-mounted screens for movies, soft warm blankets, and scented towels.",
    iconName: "Sparkles",
  },
];
