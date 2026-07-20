"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import Container from "../ui/Container";
import FloatingCard from "../ui/FloatingCard";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/70 px-4 py-2 backdrop-blur">
              ⭐
              <span className="text-sm font-medium text-slate-700">
                Trusted by 1200+ Happy Patients
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              Smile With
              <br />
              <span className="text-teal-600">Confidence,</span>
              <br />
              Every Day.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Premium dental care using modern technology, gentle treatment and
              experienced specialists, focused on giving you a healthy smile.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-4 font-semibold text-white transition hover:bg-teal-700">
                Book Appointment
                <ArrowRight size={18} />
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold transition hover:border-teal-600">
                Explore Services
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-teal-600" size={18} />
                Pain-Free
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-teal-600" size={18} />
                Same-Day Booking
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="text-teal-600" size={18} />
                Modern Technology
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="relative h-[500px] w-[390px] overflow-hidden rounded-[32px] bg-gradient-to-br from-teal-100 to-white shadow-2xl">

              <Image
                src="/images/dentist.png"
                alt="Dentist"
                fill
                priority
                className="object-cover"
              />

              <FloatingCard
                icon="⭐"
                title="4.9 Rating"
                subtitle="Google Reviews"
                className="left-[-25px] top-8"
              />

              <FloatingCard
                icon="🦷"
                title="15+ Years"
                subtitle="Experience"
                className="right-[-25px] top-48"
              />

              <FloatingCard
                icon="📅"
                title="Available Today"
                subtitle="Book Now"
                className="bottom-8 left-[-20px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}