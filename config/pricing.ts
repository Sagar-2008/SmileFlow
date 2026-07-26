export interface PriceItem {
  serviceId: string;
  priceRange: string;
  estimatedPrice: number;
}

export const pricingConfig: Record<string, Omit<PriceItem, "serviceId">> = {
  "srv-hygiene": {
    priceRange: "$150 - $250",
    estimatedPrice: 180,
  },
  "srv-veneers": {
    priceRange: "$1,200 - $2,000 / tooth",
    estimatedPrice: 1450,
  },
  "srv-implants": {
    priceRange: "$2,500 - $4,500 / tooth",
    estimatedPrice: 3100,
  },
  "srv-whitening": {
    priceRange: "$399 - $599",
    estimatedPrice: 450,
  },
  "srv-invisalign": {
    priceRange: "$3,500 - $5,800 total",
    estimatedPrice: 4500,
  },
  "srv-sedation": {
    priceRange: "$150 - $400",
    estimatedPrice: 250,
  },
};
