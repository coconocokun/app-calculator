import React from "react";
import { EstimateData } from "@/types/estimator";
import { features, pageTypes } from "@/lib/pricing";
import FeatureSelector from "./FeatureSelector";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface EstimatorFormProps {
  data: EstimateData;
  onChange: (data: EstimateData) => void;
}

const EstimatorForm: React.FC<EstimatorFormProps> = ({ data, onChange }) => {
  const updateData = (updates: Partial<EstimateData>) => {
    onChange({ ...data, ...updates });
  };

  return (
    <div className="space-y-6">
      {/* App Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>📱</span>
            <span>App Configuration</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Select value={data.platform} onValueChange={(value: any) => updateData({ platform: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ios">iOS Only</SelectItem>
                  <SelectItem value="android">Android Only</SelectItem>
                  <SelectItem value="both">
                    iOS + Android{" "}
                    <Badge variant="secondary" className="ml-2">
                      +70%
                    </Badge>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="complexity">App Complexity</Label>
              <Select value={data.appComplexity} onValueChange={(value: any) => updateData({ appComplexity: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select complexity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="simple">Simple</SelectItem>
                  <SelectItem value="medium">
                    Medium{" "}
                    <Badge variant="secondary" className="ml-2">
                      +30%
                    </Badge>
                  </SelectItem>
                  <SelectItem value="complex">
                    Complex{" "}
                    <Badge variant="secondary" className="ml-2">
                      +60%
                    </Badge>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="design">Design Complexity</Label>
              <Select
                value={data.designComplexity}
                onValueChange={(value: any) => updateData({ designComplexity: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select design" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic UI</SelectItem>
                  <SelectItem value="custom">
                    Custom Design{" "}
                    <Badge variant="secondary" className="ml-2">
                      +40%
                    </Badge>
                  </SelectItem>
                  <SelectItem value="premium">
                    Premium Design{" "}
                    <Badge variant="secondary" className="ml-2">
                      +80%
                    </Badge>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline</Label>
              <Select value={data.timeline} onValueChange={(value: any) => updateData({ timeline: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="rushed">
                    Rushed{" "}
                    <Badge variant="secondary" className="ml-2">
                      +50%
                    </Badge>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>⚡</span>
            <span>Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FeatureSelector
            features={features}
            selectedFeatures={data.selectedFeatures}
            onSelectionChange={(selectedFeatures) => updateData({ selectedFeatures })}
          />
        </CardContent>
      </Card>

      {/* Pages Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>📄</span>
            <span>Pages & Screens</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FeatureSelector
            features={pageTypes.map((page) => ({
              ...page,
              category: "page" as any,
            }))}
            selectedFeatures={data.selectedPages}
            onSelectionChange={(selectedPages) => updateData({ selectedPages })}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EstimatorForm;
