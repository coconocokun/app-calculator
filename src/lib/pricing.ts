import { Feature, PageType, EstimateData, PriceBreakdown } from "@/types/estimator";

export const features: Feature[] = [
  // Authentication
  {
    id: "auth-basic",
    name: "Basic Authentication",
    description: "Email/password login",
    basePrice: 1500,
    category: "authentication",
    complexity: "low",
  },
  {
    id: "auth-social",
    name: "Social Login",
    description: "Google, Facebook, Apple",
    basePrice: 2500,
    category: "authentication",
    complexity: "medium",
  },
  {
    id: "auth-biometric",
    name: "Biometric Auth",
    description: "Fingerprint, Face ID",
    basePrice: 3000,
    category: "authentication",
    complexity: "high",
  },

  // UI Features
  {
    id: "ui-animations",
    name: "Custom Animations",
    description: "Smooth transitions and effects",
    basePrice: 2000,
    category: "ui",
    complexity: "medium",
  },
  {
    id: "ui-dark-mode",
    name: "Dark Mode",
    description: "Light/dark theme toggle",
    basePrice: 1000,
    category: "ui",
    complexity: "low",
  },
  {
    id: "ui-responsive",
    name: "Responsive Design",
    description: "Multi-device optimization",
    basePrice: 1500,
    category: "ui",
    complexity: "low",
  },

  // Integrations
  {
    id: "int-payment",
    name: "Payment Integration",
    description: "Stripe, PayPal, etc.",
    basePrice: 4000,
    category: "integration",
    complexity: "high",
  },
  {
    id: "int-maps",
    name: "Maps Integration",
    description: "Google Maps, location services",
    basePrice: 2500,
    category: "integration",
    complexity: "medium",
  },
  {
    id: "int-camera",
    name: "Camera Features",
    description: "Photo/video capture",
    basePrice: 2000,
    category: "integration",
    complexity: "medium",
  },
  {
    id: "int-push",
    name: "Push Notifications",
    description: "Real-time notifications",
    basePrice: 1500,
    category: "integration",
    complexity: "medium",
  },

  // Advanced
  {
    id: "adv-offline",
    name: "Offline Support",
    description: "Work without internet",
    basePrice: 3500,
    category: "advanced",
    complexity: "high",
  },
  {
    id: "adv-ai",
    name: "AI Features",
    description: "Machine learning integration",
    basePrice: 5000,
    category: "advanced",
    complexity: "high",
  },
  {
    id: "adv-realtime",
    name: "Real-time Features",
    description: "Live chat, updates",
    basePrice: 4000,
    category: "advanced",
    complexity: "high",
  },
];

export const pageTypes: PageType[] = [
  { id: "page-splash", name: "Splash Screen", description: "App loading screen", basePrice: 500, complexity: "low" },
  {
    id: "page-onboarding",
    name: "Onboarding",
    description: "User introduction flow",
    basePrice: 1500,
    complexity: "medium",
  },
  { id: "page-dashboard", name: "Dashboard", description: "Main app interface", basePrice: 2500, complexity: "high" },
  {
    id: "page-profile",
    name: "User Profile",
    description: "Account management",
    basePrice: 1500,
    complexity: "medium",
  },
  { id: "page-settings", name: "Settings", description: "App configuration", basePrice: 1000, complexity: "low" },
  { id: "page-list", name: "List View", description: "Data listing page", basePrice: 1200, complexity: "medium" },
  { id: "page-detail", name: "Detail View", description: "Item detail page", basePrice: 1000, complexity: "medium" },
  { id: "page-form", name: "Form Page", description: "Data input forms", basePrice: 1500, complexity: "medium" },
  { id: "page-checkout", name: "Checkout", description: "Payment process", basePrice: 2000, complexity: "high" },
  { id: "page-chat", name: "Chat Interface", description: "Messaging features", basePrice: 3000, complexity: "high" },
];

export const multipliers = {
  platform: {
    ios: 1.0,
    android: 1.0,
    both: 1.7,
  },
  complexity: {
    simple: 1.0,
    medium: 1.3,
    complex: 1.6,
  },
  design: {
    basic: 1.0,
    custom: 1.4,
    premium: 1.8,
  },
  timeline: {
    standard: 1.0,
    rushed: 1.5,
  },
};

export function calculatePrice(data: EstimateData): PriceBreakdown {
  const selectedFeatureObjects = features.filter((f) => data.selectedFeatures.includes(f.id));
  const selectedPageObjects = pageTypes.filter((p) => data.selectedPages.includes(p.id));

  const featuresTotal = selectedFeatureObjects.reduce((sum, feature) => sum + feature.basePrice, 0);
  const pagesTotal = selectedPageObjects.reduce((sum, page) => sum + page.basePrice, 0);

  const subtotal = featuresTotal + pagesTotal;

  const platformMultiplier = multipliers.platform[data.platform];
  const complexityMultiplier = multipliers.complexity[data.appComplexity];
  const designMultiplier = multipliers.design[data.designComplexity];
  const timelineMultiplier = multipliers.timeline[data.timeline];

  const total = subtotal * platformMultiplier * complexityMultiplier * designMultiplier * timelineMultiplier;

  return {
    featuresTotal,
    pagesTotal,
    platformMultiplier,
    complexityMultiplier,
    designMultiplier,
    timelineMultiplier,
    subtotal,
    total: Math.round(total),
  };
}
