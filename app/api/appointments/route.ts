import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export interface AppointmentPayload {
  patientName: string;
  phone: string;
  email: string;
  service: string;
  doctor?: string;
  date: string;
}

export async function POST(request: Request) {
  try {
    const body: Partial<AppointmentPayload> = await request.json();
    const { patientName, phone, email, service, doctor, date } = body;

    // Server-side Validation
    if (!patientName || patientName.trim().length < 2) {
      return NextResponse.json(
        { error: "Invalid patient name. Please provide your full name." },
        { status: 400 }
      );
    }

    if (!phone || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { error: "Invalid phone number. Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address. Please check your email entry." },
        { status: 400 }
      );
    }

    if (!service || !date) {
      return NextResponse.json(
        { error: "Service selection and appointment date are required." },
        { status: 400 }
      );
    }

    // Generate unique booking reference ID
    const bookingRef = `APT-${Math.floor(100000 + Math.random() * 900000)}`;

    let savedToDb = false;

    // Attempt database save if Supabase is connected
    if (supabase) {
      const { error: dbError } = await supabase.from("appointments").insert([
        {
          booking_ref: bookingRef,
          patient_name: patientName,
          phone,
          email,
          service,
          doctor: doctor || "First Available Specialist",
          appointment_date: date,
          status: "pending",
          created_at: new Date().toISOString(),
        },
      ]);

      if (dbError) {
        console.error("[Appointments API] Supabase DB Insert Warning:", dbError.message);
      } else {
        savedToDb = true;
      }
    }

    // Email Dispatch Architecture Placeholder
    // In production, integrate email service (SendGrid/Resend/Nodemailer)
    console.log(`[Appointments API] Email confirmation queued for ${email} (${bookingRef})`);

    return NextResponse.json(
      {
        success: true,
        bookingRef,
        savedToDb,
        message: `Appointment request received for ${patientName}. Our team will contact you shortly.`,
        data: {
          patientName,
          phone,
          email,
          service,
          doctor: doctor || "First Available Specialist",
          date,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Appointments API Error]:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try calling the clinic directly." },
      { status: 500 }
    );
  }
}
