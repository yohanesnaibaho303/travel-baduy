import React from 'react';
import { MapPin, Home, Clock, Coffee } from 'lucide-react';

const TripTimeline = () => {
  const timelineSteps = [
    {
      title: 'Jakarta Departure',
      description: 'Early morning departure from Jakarta. We\'ll pick you up from your hotel.',
      icon: <MapPin className="w-5 h-5 text-amber-600" />,
      time: 'Day 1, 5:00 AM',
    },
    {
      title: 'Arrive at Ciboleger',
      description: 'Reach the gateway village to Baduy territory. Meet your local Baduy guide.',
      icon: <MapPin className="w-5 h-5 text-amber-600" />,
      time: 'Day 1, 9:00 AM',
    },
    {
      title: 'Outer Baduy Trek',
      description: 'Hike through terraced rice fields and forest paths to reach the Outer Baduy villages.',
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      time: 'Day 1, 10:00 AM - 3:00 PM',
    },
    {
      title: 'Overnight in Outer Baduy',
      description: 'Experience traditional accommodation in a Baduy home. Share dinner with your host family.',
      icon: <Home className="w-5 h-5 text-amber-600" />,
      time: 'Day 1, Evening',
    },
    {
      title: 'Inner Baduy Trek (Optional)',
      description: 'For the adventurous, a guided trek to witness the even more traditional Inner Baduy villages.',
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      time: 'Day 2, 8:00 AM - 4:00 PM',
    },
    {
      title: 'Return to Ciboleger',
      description: 'Trek back to the starting point. Time for reflection and final purchases of Baduy handicrafts.',
      icon: <Coffee className="w-5 h-5 text-amber-600" />,
      time: 'Day 3, 10:00 AM - 2:00 PM',
    },
    {
      title: 'Jakarta Return',
      description: 'Drive back to Jakarta with a deeper understanding of Indonesia\'s indigenous heritage.',
      icon: <MapPin className="w-5 h-5 text-amber-600" />,
      time: 'Day 3, 6:00 PM',
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-amber-800 mb-6">Your Journey Flow</h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-amber-200 z-0"></div>
        
        {/* Timeline steps */}
        <div className="space-y-8 relative z-10">
          {timelineSteps.map((step, index) => (
            <div key={index} className="flex group">
              <div className="flex-shrink-0 bg-white rounded-full border-4 border-amber-200 z-10 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group-hover:border-amber-600 transition-colors">
                {step.icon}
              </div>
              <div className="ml-4 sm:ml-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <h4 className="text-lg font-bold text-amber-800">{step.title}</h4>
                  <span className="text-sm text-amber-600 font-medium">{step.time}</span>
                </div>
                <p className="text-stone-700 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripTimeline;