import React from "react";
import { Feature } from "@/types/estimator";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeatureSelectorProps {
  features: Feature[];
  selectedFeatures: string[];
  onSelectionChange: (selectedFeatures: string[]) => void;
}

const FeatureSelector: React.FC<FeatureSelectorProps> = ({ features, selectedFeatures, onSelectionChange }) => {
  const toggleFeature = (featureId: string) => {
    const isSelected = selectedFeatures.includes(featureId);
    if (isSelected) {
      onSelectionChange(selectedFeatures.filter((id) => id !== featureId));
    } else {
      onSelectionChange([...selectedFeatures, featureId]);
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "low":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="grid gap-3">
      {features.map((feature) => {
        const isSelected = selectedFeatures.includes(feature.id);

        return (
          <Card
            key={feature.id}
            className={`p-3 cursor-pointer transition-all hover:shadow-md ${
              isSelected ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-gray-50"
            }`}
            onClick={() => toggleFeature(feature.id)}
          >
            <div className="flex items-start space-x-3">
              <Checkbox checked={isSelected} onChange={() => toggleFeature(feature.id)} className="mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{feature.name}</h4>
                  <div className="flex items-center space-x-2 ml-2">
                    <Badge className={getComplexityColor(feature.complexity)}>{feature.complexity}</Badge>
                    <span className="font-semibold text-blue-600">${feature.basePrice.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default FeatureSelector;
