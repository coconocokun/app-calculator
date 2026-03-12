import React from "react";
import { PriceBreakdown as PriceBreakdownType } from "@/types/estimator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Clock, Palette, Smartphone } from "lucide-react";

interface PriceBreakdownProps {
  breakdown: PriceBreakdownType;
}

const PriceBreakdown: React.FC<PriceBreakdownProps> = ({ breakdown }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatMultiplier = (multiplier: number) => {
    if (multiplier === 1) return "";
    return `×${multiplier}`;
  };

  return (
    <div className="space-y-6">
      {/* Total Price Card */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5" />
            <span>Total Estimate</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-2">{formatCurrency(breakdown.total)}</div>
          <p className="text-blue-100">Estimated development cost for your mobile application</p>
        </CardContent>
      </Card>

      {/* Price Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>Price Breakdown</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Base Costs */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Features</span>
              <span className="font-semibold">{formatCurrency(breakdown.featuresTotal)}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Pages & Screens</span>
              <span className="font-semibold">{formatCurrency(breakdown.pagesTotal)}</span>
            </div>

            <Separator />

            <div className="flex justify-between items-center">
              <span className="font-medium">Base Subtotal</span>
              <span className="font-semibold">{formatCurrency(breakdown.subtotal)}</span>
            </div>
          </div>

          <Separator />

          {/* Multipliers */}
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900 mb-3">Cost Multipliers</h4>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Platform</span>
              </div>
              <div className="flex items-center space-x-2">
                {breakdown.platformMultiplier > 1 && (
                  <Badge variant="secondary">{formatMultiplier(breakdown.platformMultiplier)}</Badge>
                )}
                <span className="font-medium">
                  {breakdown.platformMultiplier === 1
                    ? "No change"
                    : `+${((breakdown.platformMultiplier - 1) * 100).toFixed(0)}%`}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">App Complexity</span>
              </div>
              <div className="flex items-center space-x-2">
                {breakdown.complexityMultiplier > 1 && (
                  <Badge variant="secondary">{formatMultiplier(breakdown.complexityMultiplier)}</Badge>
                )}
                <span className="font-medium">
                  {breakdown.complexityMultiplier === 1
                    ? "No change"
                    : `+${((breakdown.complexityMultiplier - 1) * 100).toFixed(0)}%`}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Design</span>
              </div>
              <div className="flex items-center space-x-2">
                {breakdown.designMultiplier > 1 && (
                  <Badge variant="secondary">{formatMultiplier(breakdown.designMultiplier)}</Badge>
                )}
                <span className="font-medium">
                  {breakdown.designMultiplier === 1
                    ? "No change"
                    : `+${((breakdown.designMultiplier - 1) * 100).toFixed(0)}%`}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Timeline</span>
              </div>
              <div className="flex items-center space-x-2">
                {breakdown.timelineMultiplier > 1 && (
                  <Badge variant="secondary">{formatMultiplier(breakdown.timelineMultiplier)}</Badge>
                )}
                <span className="font-medium">
                  {breakdown.timelineMultiplier === 1
                    ? "No change"
                    : `+${((breakdown.timelineMultiplier - 1) * 100).toFixed(0)}%`}
                </span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Final Total */}
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold">Total Estimate</span>
            <span className="font-bold text-blue-600">{formatCurrency(breakdown.total)}</span>
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-amber-600 text-sm">ℹ</span>
            </div>
            <div className="text-sm text-amber-800">
              <p className="font-medium mb-1">Please Note:</p>
              <p>
                This is an estimated cost based on typical development rates. Final pricing may vary based on specific
                requirements, team location, and project scope. We recommend getting a detailed quote from development
                teams.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceBreakdown;
