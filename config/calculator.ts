export interface CalculatorConfig {
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
  title: "Calculate Your Treatment Cost",
  subtitle: "Self-Service Cost Estimator",
  description:
    "We believe in transparent pricing. Select your desired treatments to view estimated costs and monthly payment options under 0% APR dental financing.",
  steps: {
    step1: "1. Select Treatment Procedures",
    step2: "2. Choose Payment Plan Duration",
  },
  financingPeriods: [
    { months: 12, apr: 0, label: "12 Months (0% APR)" },
    { months: 18, apr: 0, label: "18 Months (0% APR)" },
    { months: 24, apr: 0, label: "24 Months (0% APR)" },
  ],
  insuranceNote: "We accept most major PPO dental insurance plans and file claims on your behalf.",
  financingNote: "Flexible monthly plans available through CareCredit with easy online pre-approval.",
  consultationNote: "Initial checkup & consultation fee goes toward your treatment cost.",
  ctaText: "Apply Financing & Book Appointment",
};
