"use client";

import { useState } from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import SmileTransformation from "@/components/home/SmileTransformation";
import Services from "@/components/home/Services";
import CostCalculator from "@/components/home/CostCalculator";
import DoctorShowcase from "@/components/home/DoctorShowcase";
import ClinicExperience from "@/components/home/ClinicExperience";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import BookingModal from "@/components/home/BookingModal";
import { siteConfig } from "@/config/site";

export default function Home() {
  const activeConfig = siteConfig;
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<string | undefined>();

  const handleOpenBooking = (serviceName?: string) => {
    setBookingInitialService(serviceName);
    setBookingModalOpen(true);
  };

  // Construct CSS style properties based on config theme settings
  const themeStyles = {
    "--primary-color": activeConfig.theme.primaryColor,
    "--secondary-color": activeConfig.theme.secondaryColor,
    "--accent-color": activeConfig.theme.accentColor,
    "--bg-color": activeConfig.theme.bgColor,
    "--bg-card": activeConfig.theme.bgCardColor,
    "--text-color": activeConfig.theme.textColor,
    "--text-muted": activeConfig.theme.textMutedColor,
    "--border-color": activeConfig.theme.borderColor,
    "--border-radius": activeConfig.theme.borderRadius,
    "--shadow-sm-val": activeConfig.theme.shadowSm,
    "--shadow-md-val": activeConfig.theme.shadowMd,
    "--shadow-lg-val": activeConfig.theme.shadowLg,
  } as React.CSSProperties;

  return (
    <main
      style={themeStyles}
      className="min-h-screen bg-bg-base font-sans transition-colors duration-300"
    >
      {/* Top Header Navbar */}
      <Navbar config={activeConfig} onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero config={activeConfig} onOpenBooking={handleOpenBooking} />

      {/* Interactive Before/After Smile Transformation Gallery */}
      <SmileTransformation config={activeConfig} onOpenBooking={handleOpenBooking} />

      {/* Services & Pricing Catalog */}
      <Services config={activeConfig} onOpenBooking={handleOpenBooking} />

      {/* Interactive Cost & EMI Calculator */}
      <CostCalculator config={activeConfig} onOpenBooking={handleOpenBooking} />

      {/* Doctor & Specialist Roster */}
      <DoctorShowcase config={activeConfig} onOpenBooking={handleOpenBooking} />

      {/* Tech & Patient Comfort Amenities */}
      <ClinicExperience config={activeConfig} />

      {/* Verified Testimonials */}
      <Testimonials config={activeConfig} />

      {/* FAQ Section */}
      <FAQ config={activeConfig} />

      {/* Footer */}
      <Footer config={activeConfig} onOpenBooking={handleOpenBooking} />

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        config={activeConfig}
        initialService={bookingInitialService}
      />
    </main>
  );
}