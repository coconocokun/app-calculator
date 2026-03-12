export interface Feature {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: "authentication" | "ui" | "integration" | "advanced";
  complexity: "low" | "medium" | "high";
}

export interface PageType {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  complexity: "low" | "medium" | "high";
}

export interface EstimateData {
  selectedFeatures: string[];
  selectedPages: string[];
  appComplexity: "simple" | "medium" | "complex";
  platform: "ios" | "android" | "both";
  designComplexity: "basic" | "custom" | "premium";
  timeline: "standard" | "rushed";
}

export interface PriceBreakdown {
  featuresTotal: number;
  pagesTotal: number;
  platformMultiplier: number;
  designMultiplier: number;
  timelineMultiplier: number;
  complexityMultiplier: number;
  subtotal: number;
  total: number;
}
