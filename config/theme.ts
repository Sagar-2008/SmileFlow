export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  bgColor: string;
  bgCardColor: string;
  textColor: string;
  textMutedColor: string;
  borderColor: string;
  borderRadius: string;
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;
  heroStyle: 'clinical' | 'modern' | 'minimal';
}

export const themeConfig: ThemeConfig = {
  primaryColor: "#0284c7", // Trustworthy Clinical Sky Blue
  secondaryColor: "#0f172a", // Deep Professional Navy
  accentColor: "#f97316", // Friendly Warm Coral Orange
  bgColor: "#f8fafc", // Pristine White-gray background
  bgCardColor: "#ffffff", // Crisp White cards
  textColor: "#0f172a", // Clear Dark Text
  textMutedColor: "#475569", // Gentle Muted Gray text
  borderColor: "#e2e8f0", // Clean light border
  borderRadius: "1rem", // Friendly rounded corners
  shadowSm: "0 1px 2px 0 rgba(15, 23, 42, 0.05)",
  shadowMd: "0 10px 15px -3px rgba(15, 23, 42, 0.05), 0 4px 6px -4px rgba(15, 23, 42, 0.05)",
  shadowLg: "0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.08)",
  heroStyle: "clinical",
};
