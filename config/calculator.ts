export interface CalculatorConfig {
  currencySymbol: string;
  title: string;
  subtitle: string;
  description: string;
  steps: {
    step1: string;
    step2: string;
  };
  financingPeriods: Array<{
    months: number;
    apr: number;
    label: string;
  }>;
  insuranceNote: string;
  financingNote: string;
  consultationNote: string;
  ctaText: string;
}

export const calculatorConfig: CalculatorConfig = {
  currencySymbol: "₹",
  title: "Estimate Your Treatment Cost",
  subtitle: "Interactive Cost & EMI Estimator",
  description:
    "We believe in 100% transparent pricing. Select your required treatment procedures below to calculate estimated monthly payments with 0% interest EMI options.",
  steps: {
    step1: "1. Select Dental Procedures",
    step2: "2. Choose EMI Tenure",
  },
  financingPeriods: [
    { months: 6, apr: 0, label: "6 Months (0% EMI)" },
    { months: 12, apr: 0, label: "12 Months (0% EMI)" },
    { months: 18, apr: 0, label: "18 Months (0% EMI)" },
  ],
  insuranceNote: "We assist with corporate health claims and dental reimbursement documentation.",
  financingNote: "Easy 0% interest EMI available with instant in-office approval.",
  consultationNote: "Consultation and digital X-ray charges are credited toward your treatment.",
  ctaText: "Apply 0% EMI & Book Appointment",
};
