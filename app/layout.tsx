import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.theme.primaryColor,
  width: "device-width",
  initialScale: 1,
};

// Theme CSS custom properties — set at the layout level (server-rendered, no FOUC)
const themeStyles = {
  "--primary-color": siteConfig.theme.primaryColor,
  "--secondary-color": siteConfig.theme.secondaryColor,
  "--accent-color": siteConfig.theme.accentColor,
  "--bg-color": siteConfig.theme.bgColor,
  "--bg-card": siteConfig.theme.bgCardColor,
  "--text-color": siteConfig.theme.textColor,
  "--text-muted": siteConfig.theme.textMutedColor,
  "--border-color": siteConfig.theme.borderColor,
  "--border-radius": siteConfig.theme.borderRadius,
  "--shadow-sm-val": siteConfig.theme.shadowSm,
  "--shadow-md-val": siteConfig.theme.shadowMd,
  "--shadow-lg-val": siteConfig.theme.shadowLg,
} as React.CSSProperties;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${outfit.variable}`}
      style={themeStyles}
    >
      <body className="bg-bg-base font-sans text-text-main antialiased">{children}</body>
    </html>
  );
}