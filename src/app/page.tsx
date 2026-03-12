"use client";

import { useState } from "react";
import { EstimateData } from "@/types/estimator";
import { calculatePrice } from "@/lib/pricing";
import EstimatorForm from "@/components/EstimatorForm";
import PriceBreakdown from "@/components/PriceBreakdown";
import Header from "@/components/Header";

const initialData: EstimateData = {
  selectedFeatures: [],
  selectedPages: [],
  appComplexity: "medium",
  platform: "both",
  designComplexity: "custom",
  timeline: "standard",
};

export default function Home() {
  const [estimateData, setEstimateData] = useState<EstimateData>(initialData);
  const priceBreakdown = calculatePrice(estimateData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <EstimatorForm data={estimateData} onChange={setEstimateData} />
          <PriceBreakdown breakdown={priceBreakdown} />
        </div>
      </main>
    </div>
  );
}
