"use client";

import { useState } from "react";
import { X, CheckCircle2, Clock, User, Phone, Mail, Sparkles, ChevronRight, AlertCircle, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import type { ClinicConfig } from "@/types/site";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ClinicConfig;
  initialService?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  config,
  initialService,
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState(
    initialService || config.services[0]?.name || "Teeth Cleaning & Polish"
  );
  const [selectedDoctor, setSelectedDoctor] = useState(config.doctors[0]?.name || "First Available Specialist");
  const [selectedDate, setSelectedDate] = useState("Tomorrow at 10:00 AM");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName,
          phone: patientPhone,
          email: patientEmail,
          service: selectedService,
          doctor: selectedDoctor,
          date: selectedDate,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to request appointment. Please check input values.");
      }

      setBookingRef(result.bookingRef || `APT-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again.";
      setErrorMsg(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setErrorMsg(null);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-bg-card rounded-theme max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-border-theme relative overflow-hidden text-text-main">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-bg-base flex items-center justify-center text-secondary hover:bg-border-theme transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-theme">
                Step {step} of 3 • Book Consultation
              </span>
              <h3 className="font-sans font-black text-2xl text-secondary mt-2">
                Schedule Your Appointment
              </h3>
              <p className="text-xs text-text-muted mt-1 font-semibold">
                {config.name} • {config.contact.phoneDisplay}
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    step >= s ? "bg-primary" : "bg-border-theme"
                  }`}
                />
              ))}
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-theme bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Step 1: Treatment & Doctor */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                    Select Dental Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full p-3.5 rounded-theme border border-border-theme bg-bg-base text-sm text-secondary font-bold focus:ring-2 focus:ring-primary focus:outline-none"
                  >
                    {config.services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.priceRange})
                      </option>
                    ))}
                    <option value="General Checkup & Consultation">
                      General Checkup & Consultation
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                    Select Specialist
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {config.doctors.map((doc) => (
                      <button
                        type="button"
                        key={doc.id}
                        onClick={() => setSelectedDoctor(doc.name)}
                        className={`p-3 rounded-theme border text-left text-xs font-bold transition-all cursor-pointer ${
                          selectedDoctor === doc.name
                            ? "bg-primary text-white border-primary"
                            : "bg-bg-base text-secondary border-border-theme hover:bg-primary/5"
                        }`}
                      >
                        <div>{doc.name.split(",")[0]}</div>
                        <div className="text-[10px] opacity-70 font-semibold mt-0.5">{doc.specialty}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setStep(2)}
                  className="w-full mt-4"
                  icon={<ChevronRight className="w-4 h-4" />}
                >
                  Choose Time Slot
                </Button>
              </div>
            )}

            {/* Step 2: Date & Time Slot */}
            {step === 2 && (
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                  Select Preferred Day & Time
                </label>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Tomorrow at 10:00 AM",
                    "Tomorrow at 2:30 PM",
                    "Thursday at 9:30 AM",
                    "Friday at 11:00 AM",
                    "Friday at 4:00 PM",
                    "Saturday at 11:30 AM",
                  ].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedDate(slot)}
                      className={`p-3 rounded-theme border text-left text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                        selectedDate === slot
                          ? "bg-primary text-white border-primary"
                          : "bg-bg-base text-secondary border-border-theme hover:bg-primary/5"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    variant="ghost"
                    size="md"
                    onClick={() => setStep(1)}
                    className="w-1/3"
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setStep(3)}
                    className="w-2/3"
                    icon={<ChevronRight className="w-4 h-4" />}
                  >
                    Enter Patient Info
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Patient Information Form */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Kumar"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 rounded-theme border border-border-theme text-sm focus:ring-2 focus:ring-primary focus:outline-none bg-bg-base font-semibold text-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-theme border border-border-theme text-sm focus:ring-2 focus:ring-primary focus:outline-none bg-bg-base font-semibold text-secondary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-text-muted absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="patient@example.com"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-theme border border-border-theme text-sm focus:ring-2 focus:ring-primary focus:outline-none bg-bg-base font-semibold text-secondary"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-bg-base p-3 rounded-theme text-xs text-text-muted font-bold border border-border-theme/60">
                  <span className="text-secondary">Summary:</span> {selectedService} with {selectedDoctor.split(",")[0]} on {selectedDate}.
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="ghost"
                    size="md"
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={isSubmitting}
                    className="w-1/3"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="accent"
                    size="md"
                    disabled={isSubmitting}
                    className="w-2/3 shadow-md"
                    icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  >
                    {isSubmitting ? "Confirming..." : "Confirm Booking"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <span className="inline-block px-3 py-1 rounded-theme bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-2">
              Ref: {bookingRef}
            </span>
            <h3 className="font-sans font-black text-2xl text-secondary mb-2">
              Appointment Confirmed!
            </h3>
            <p className="text-sm text-text-muted leading-relaxed max-w-md mx-auto mb-6 font-semibold">
              Thank you, <strong>{patientName}</strong>. Your request for <strong>{selectedService}</strong> on <strong>{selectedDate}</strong> has been logged. Our reception team will call <strong>{patientPhone}</strong> shortly to confirm.
            </p>

            <Button variant="primary" size="md" onClick={resetAndClose}>
              Done & Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
