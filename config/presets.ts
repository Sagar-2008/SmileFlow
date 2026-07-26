import type { ClinicConfig } from "@/types/site";
import { siteConfig } from "./site";

export interface Preset {
  id: string;
  label: string;
  subtitle: string;
  config: ClinicConfig;
}

export const PRESET_CLINICS: Preset[] = [
  {
    id: "apex-dental",
    label: siteConfig.name,
    subtitle: siteConfig.tagline,
    config: siteConfig,
  },
];
