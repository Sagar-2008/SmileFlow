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
  name: "Evergreen Dental Care",
  shortName: "Evergreen",
  establishedYear: 2015,
  logo: {
    mark: "E",
    wordmark: "EVERGREEN",
    wordmarkSuffix: "DENTAL CARE",
  },
  tagline: "Gentle, Modern Dental Care You Can Trust",
  description:
    "At Evergreen Dental Care, we combine advanced dental technology with a warm, patient-first approach to keep your family's smiles healthy and bright.",
};
