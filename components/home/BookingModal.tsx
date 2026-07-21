"use client";

import { useState } from "react";
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, Sparkles, ChevronRight } from "lucide-react";
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
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState(
    initialService || config.services[0]?.name || "Cosmetic Consultation"
  );
  const [selectedDoctor, setSelectedDoctor] = useState(config.doctors[0]?.name || "Any Specialist");
  const [selectedDate, setSelectedDate] = useState("Tomorrow at 10:00 AM");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pine/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-porcelain-50 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-white/20 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-porcelain-100 flex items-center justify-center text-pine hover:bg-mist transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-gold-dark bg-gold/10 px-3 py-1 rounded-full">
                Step {step} of 3 • Concierge Scheduling
              </span>
              <h3 className="font-display font-bold text-2xl text-pine mt-2">
                Book Your Studio Visit
              </h3>
              <p className="text-xs text-ink/60 mt-1">
                {config.name} • {config.contact.phoneDisplay}
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    step >= s ? "bg-pine" : "bg-mist-dark/40"
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Select Service & Doctor */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-pine mb-2">
                    Select Preferred Treatment
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-mist-dark/60 bg-porcelain text-sm text-pine font-medium focus:ring-2 focus:ring-gold"
                  >
                    {config.services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.priceRange})
                      </option>
                    ))}
                    <option value="General Cosmetic Consultation">
                      General Cosmetic Consultation ($150 - Free if treated)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-pine mb-2">
                    Select Doctor / Specialist
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {config.doctors.map((doc) => (
                      <button
                        type="button"
                        key={doc.id}
                        onClick={() => setSelectedDoctor(doc.name)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                          selectedDoctor === doc.name
                            ? "bg-pine text-porcelain-50 border-pine"
                            : "bg-porcelain-100/60 text-pine border-mist-dark/40 hover:bg-mist"
                        }`}
                      >
                        <div>{doc.name.split(",")[0]}</div>
                        <div className="text-[10px] opacity-70 font-normal font-mono">{doc.specialty.split("&")[0]}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  variant="gold"
                  size="md"
                  onClick={() => setStep(2)}
                  className="w-full mt-4"
                  icon={<ChevronRight className="w-4 h-4" />}
                >
                  Continue to Select Time
                </Button>
              </div>
            )}

            {/* Step 2: Select Date & Slot */}
            {step === 2 && (
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-pine mb-2">
                  Choose Available Appointment Slot
                </label>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Tomorrow at 10:00 AM",
                    "Tomorrow at 2:30 PM",
                    "Thursday at 9:15 AM",
                    "Friday at 11:00 AM",
                    "Friday at 3:45 PM",
                    "Saturday at 11:30 AM",
                  ].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedDate(slot)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center gap-2 transition-all ${
                        selectedDate === slot
                          ? "bg-pine text-porcelain-50 border-pine"
                          : "bg-porcelain-100/60 text-pine border-mist-dark/40 hover:bg-mist"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setStep(1)}
                    className="w-1/3"
                  >
                    Back
                  </Button>
                  <Button
                    variant="gold"
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

            {/* Step 3: Contact & Confirmation */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-pine mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-ink/40 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 rounded-xl border border-mist-dark/60 text-sm focus:ring-2 focus:ring-gold bg-porcelain"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-pine mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-ink/40 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="(415) 000-0000"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-3 rounded-xl border border-mist-dark/60 text-sm focus:ring-2 focus:ring-gold bg-porcelain"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-pine mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-ink/40 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-3 rounded-xl border border-mist-dark/60 text-sm focus:ring-2 focus:ring-gold bg-porcelain"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-porcelain-100 p-3 rounded-xl text-xs text-ink/70">
                  <span className="font-bold text-pine">Summary:</span> {selectedService} with {selectedDoctor} on {selectedDate}.
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setStep(2)}
                    className="w-1/3"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="gold"
                    size="md"
                    className="w-2/3 shadow-md"
                    icon={<Sparkles className="w-4 h-4 text-ink" />}
                  >
                    Confirm Booking
                  </Button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Step 4: Success Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-sage/20 text-pine flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-sage-dark" />
            </div>
            <h3 className="font-display font-bold text-2xl text-pine mb-2">
              Appointment Reserved!
            </h3>
            <p className="text-sm text-ink/70 leading-relaxed max-w-md mx-auto mb-6">
              Thank you, <strong>{patientName}</strong>. Our concierge team will call you at <strong>{patientPhone}</strong> shortly to confirm your {selectedService} on <strong>{selectedDate}</strong>.
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
