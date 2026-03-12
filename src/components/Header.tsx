import React from "react";
import { Calculator, Smartphone } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mobile App Price Estimator</h1>
            <p className="text-gray-600">Get instant pricing for your mobile app development project</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
