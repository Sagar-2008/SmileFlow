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
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<string | undefined>();

  const handleOpenBooking = (serviceName?: string) => {
    setBookingInitialService(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-bg-base font-sans transition-colors duration-300">
      {/* Top Header Navbar */}
      <Navbar config={siteConfig} onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero config={siteConfig} onOpenBooking={handleOpenBooking} />

      {/* Interactive Before/After Smile Transformation Gallery */}
      <SmileTransformation config={siteConfig} onOpenBooking={handleOpenBooking} />

      {/* Services & Pricing Catalog */}
      <Services config={siteConfig} onOpenBooking={handleOpenBooking} />

      {/* Interactive Cost & EMI Calculator */}
      <CostCalculator config={siteConfig} onOpenBooking={handleOpenBooking} />

      {/* Doctor & Specialist Roster */}
      <DoctorShowcase config={siteConfig} onOpenBooking={handleOpenBooking} />

      {/* Tech & Patient Comfort Amenities */}
      <ClinicExperience config={siteConfig} />

      {/* Verified Testimonials */}
      <Testimonials config={siteConfig} />

      {/* FAQ Section */}
      <FAQ config={siteConfig} />

      {/* Footer */}
      <Footer config={siteConfig} onOpenBooking={handleOpenBooking} />

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        config={siteConfig}
        initialService={bookingInitialService}
      />
    </main>
  );
}