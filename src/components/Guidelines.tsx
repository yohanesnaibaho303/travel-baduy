import React from 'react';
import { Check, X } from 'lucide-react';

const Guidelines = () => {
  const doList = [
    'Dress modestly (long pants/skirts, covered shoulders)',
    'Ask permission before taking photographs',
    'Remove shoes when entering homes',
    'Speak quietly and respectfully',
    'Bring a small gift for your host family (e.g., rice, sugar)',
    'Carry out all non-biodegradable trash',
    'Follow your guide\'s instructions at all times'
  ];

  const dontList = [
    'No alcoholic drinks or smoking',
    'No modern music or loud noises',
    'No revealing clothing',
    'Do not pick plants or disturb nature',
    'Do not bring electrical devices to Inner Baduy',
    'Never enter sacred areas without permission',
    'Do not offer money as gifts (goods are preferred)'
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-amber-800 mb-6">Cultural Guidelines</h3>
      
      <p className="text-stone-700 mb-6">
        The Baduy people maintain strict cultural practices. Respecting these guidelines is essential for a harmonious 
        visit and to preserve their way of life. Your guide will help you navigate these customs, but please 
        familiarize yourself with these key points:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Do's */}
        <div className="bg-green-50 rounded-lg p-6 border border-green-100">
          <h4 className="text-xl font-bold text-green-800 mb-4">Do's</h4>
          <ul className="space-y-3">
            {doList.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="flex-shrink-0 w-5 h-5 text-green-600 mr-3 mt-0.5" />
                <span className="text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Don'ts */}
        <div className="bg-red-50 rounded-lg p-6 border border-red-100">
          <h4 className="text-xl font-bold text-red-800 mb-4">Don'ts</h4>
          <ul className="space-y-3">
            {dontList.map((item, index) => (
              <li key={index} className="flex items-start">
                <X className="flex-shrink-0 w-5 h-5 text-red-600 mr-3 mt-0.5" />
                <span className="text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-amber-100 rounded-lg">
        <p className="text-amber-800 font-medium">
          The Baduy people believe in living in harmony with nature and following their ancestral traditions. 
          By respecting their customs, you help preserve one of Indonesia's most unique cultural treasures.
        </p>
      </div>
    </div>
  );
};

export default Guidelines;