import type { Service, Amenity } from "@/types/site";

export const servicesConfig: Omit<Service, "priceRange" | "estimatedPrice">[] = [
  {
    id: "srv-cleaning",
    name: "Teeth Cleaning & Polish",
    category: "preventive",
    tag: "Routine Care",
    description: "Ultrasonic tartar removal, airflow stain polishing, fluoride protection, and comprehensive oral checkup.",
    duration: "30 - 45 mins",
    features: [
      "Ultrasonic pain-free scaling",
      "Stain removal and polishing",
      "Gum health assessment",
      "Fluoride cavity protection",
    ],
  },
  {
    id: "srv-rootcanal",
    name: "Painless Root Canal Treatment",
    category: "restorative",
    tag: "Single-Sitting RCT",
    description: "Advanced rotary root canal therapy done under local anesthesia to save infected teeth quickly and painlessly.",
    duration: "45 - 60 mins",
    features: [
      "Microscopic rotary technology",
      "Single visit option available",
      "Zero discomfort procedure",
      "Includes high-strength crown fitting",
    ],
    popular: true,
  },
  {
    id: "srv-whitening",
    name: "Laser Teeth Whitening",
    category: "cosmetic",
    tag: "Instant Brightening",
    description: "Safe cold-laser enamel bleaching that removes deep coffee, tea, and tobacco stains in a single session.",
    duration: "45 mins",
    features: [
      "Up to 6-8 shades brighter",
      "Sensitivity-shield formula",
      "Immediate visible results",
      "Enamel-safe medical technology",
    ],
  },
  {
    id: "srv-implants",
    name: "Modern Dental Implants",
    category: "restorative",
    tag: "Permanent Tooth",
    description: "Long-lasting titanium root replacements capped with natural-looking ceramic crowns for a full natural smile.",
    duration: "3D Guided Surgery",
    features: [
      "Computer-guided 3D placement",
      "Natural look, feel, and function",
      "Prevents bone loss and facial sagging",
      "Lifetime durability option",
    ],
    popular: true,
  },
  {
    id: "srv-aligners",
    name: "Clear Braces & Invisalign®",
    category: "orthodontics",
    tag: "Invisible Braces",
    description: "Custom transparent aligners that straighten crooked teeth without ugly metal brackets or food restrictions.",
    duration: "6 - 12 months",
    features: [
      "100% invisible clear aligners",
      "No wire tightening pain",
      "iTero 3D digital impressions",
      "Removable for eating and brushing",
    ],
    popular: true,
  },
  {
    id: "srv-kids",
    name: "Kids Dentistry & Cavity Shield",
    category: "preventive",
    tag: "Child Wellness",
    description: "Gentle dental checkups, cavity fillings, pit & fissure sealants, and habit counseling tailored for children.",
    duration: "30 mins",
    features: [
      "Child-friendly gentle environment",
      "Painless fluoride cavity shield",
      "Thumb-sucking & alignment guidance",
      "Free dental care education kit",
    ],
  },
];

export const amenitiesConfig: Amenity[] = [
  {
    title: "On-Time Appointments",
    description: "Zero waiting room delays. We value your schedule and start appointments right on time.",
    iconName: "Clock",
  },
  {
    title: "3D iTero Digital Scanner",
    description: "Digital intraoral scanner eliminates messy, gag-inducing impression putty.",
    iconName: "Scan",
  },
  {
    title: "Painless Laser Dentistry",
    description: "Needle-free laser technology for gentle fillings and rapid gum healing.",
    iconName: "Zap",
  },
  {
    title: "Sterilized & Clean Space",
    description: "Class-B autoclave 4-tier instrument sterilization for 100% patient safety.",
    iconName: "Sparkles",
  },
];
