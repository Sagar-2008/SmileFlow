export interface NavLink {
  label: string;
  href: string;
}

export const navigationConfig: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#transformations" },
  { label: "EMI Calculator", href: "#calculator" },
  { label: "Doctors", href: "#doctors" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];