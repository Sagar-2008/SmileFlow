export interface BrandingConfig {
  name: string;
  shortName: string;
  establishedYear: number;
  logo: {
    mark: string;
    wordmark: string;
    wordmarkSuffix: string;
  };
  tagline: string;
  description: string;
}

export const brandingConfig: BrandingConfig = {
  name: "Apex Dental & Implant Centre",
  shortName: "Apex Dental",
  establishedYear: 2012,
  logo: {
    mark: "A",
    wordmark: "APEX DENTAL",
    wordmarkSuffix: "IMPLANT & COSMETIC CENTRE",
  },
  tagline: "Gentle, Modern Dental Care for Your Family",
  description:
    "Apex Dental & Implant Centre is your trusted local clinic committed to painless treatments, 3D digital diagnostics, and honest family dental health.",
};
