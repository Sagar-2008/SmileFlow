export interface PriceItem {
  serviceId: string;
  priceRange: string;
  estimatedPrice: number;
}

export const pricingConfig: Record<string, Omit<PriceItem, "serviceId">> = {
  "srv-cleaning": {
    priceRange: "₹800 - ₹1,800",
    estimatedPrice: 1200,
  },
  "srv-rootcanal": {
    priceRange: "₹3,500 - ₹7,000",
    estimatedPrice: 4500,
  },
  "srv-whitening": {
    priceRange: "₹3,500 - ₹7,500",
    estimatedPrice: 5000,
  },
  "srv-implants": {
    priceRange: "₹18,000 - ₹35,000 / tooth",
    estimatedPrice: 24000,
  },
  "srv-aligners": {
    priceRange: "₹45,000 - ₹1,20,000 total",
    estimatedPrice: 65000,
  },
  "srv-kids": {
    priceRange: "₹1,000 - ₹2,500",
    estimatedPrice: 1500,
  },
};
