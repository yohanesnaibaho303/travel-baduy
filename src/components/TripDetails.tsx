import React, { useState } from 'react';
import { MapPin, Calendar, Coffee, Utensils, Home, Ban, Check, Route } from 'lucide-react';
import TripTimeline from './TripTimeline';
import MeetingPoint from './MeetingPoint';
import Facilities from './Facilities';
import Guidelines from './Guidelines';

const TripDetails = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  
  const tabs = [
    { id: 'timeline', label: 'Journey Flow', icon: <Route size={20} /> },
    { id: 'meeting', label: 'Meeting Point', icon: <MapPin size={20} /> },
    { id: 'facilities', label: 'Facilities', icon: <Coffee size={20} /> },
    { id: 'guidelines', label: 'Do\'s & Don\'ts', icon: <Ban size={20} /> },
  ];

  return (
    <section id="trip-details" className="section-padding bg-amber-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">Trip Details</h2>
          <p className="max-w-3xl mx-auto text-stone-700">
            Everything you need to know about your journey to Baduy Village, from start to finish.
            Our trips are carefully designed to provide an authentic experience while respecting local customs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2 sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-amber-100'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
          {activeTab === 'timeline' && <TripTimeline />}
          {activeTab === 'meeting' && <MeetingPoint />}
          {activeTab === 'facilities' && <Facilities />}
          {activeTab === 'guidelines' && <Guidelines />}
        </div>
      </div>
    </section>
  );
};

export default TripDetails;