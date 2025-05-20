import React from 'react';
import { Check, Home, Utensils, ShowerHead, Backpack, Map } from 'lucide-react';

const Facilities = () => {
  const includedFacilities = [
    {
      name: 'Transportation',
      description: 'Round-trip transportation from Jakarta to Ciboleger village',
      icon: <Backpack className="w-6 h-6 text-amber-600" />,
    },
    {
      name: 'Accommodation',
      description: 'Traditional homestay with a Baduy family (simple accommodation)',
      icon: <Home className="w-6 h-6 text-amber-600" />,
    },
    {
      name: 'Meals',
      description: 'All meals during your stay (traditional Baduy cuisine)',
      icon: <Utensils className="w-6 h-6 text-amber-600" />,
    },
    {
      name: 'Local Guide',
      description: 'Authentic Baduy guide who speaks basic English/Indonesian',
      icon: <Map className="w-6 h-6 text-amber-600" />,
    },
  ];

  const notIncludedFacilities = [
    'Personal expenses and souvenirs',
    'Travel insurance (highly recommended)',
    'Alcoholic beverages (not allowed in Baduy territory)',
    'Modern amenities (electricity, hot water, internet)',
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-amber-800 mb-6">Facilities & Inclusions</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {includedFacilities.map((facility, index) => (
          <div key={index} className="flex bg-white rounded-lg p-4 shadow-sm border border-amber-100 hover:border-amber-300 transition-colors">
            <div className="flex-shrink-0 bg-amber-50 rounded-full p-3">
              {facility.icon}
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-stone-800">{facility.name}</h4>
              <p className="text-stone-600">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
        <h4 className="text-lg font-bold text-stone-800 mb-4">Not Included:</h4>
        <ul className="space-y-2">
          {notIncludedFacilities.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 mr-2 mt-1 text-amber-600">•</span>
              <span className="text-stone-700">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 p-4 bg-amber-100 rounded-lg border border-amber-200">
          <p className="text-stone-700 font-medium">
            <span className="font-bold">Important Note:</span> Baduy villages have minimal facilities. There is no electricity, plumbing, or modern amenities. Be prepared for a basic, authentic experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;