import { MapPinned, Milestone, BedDouble, Footprints, Car } from "lucide-react";

const TripTimeline = () => {
  const timelineSteps = [
    {
      title: "Meeting Point Jakarta Departure",
      description:
        "Early morning departure from Jakarta. We'll pick you up from station.",
      icon: <MapPinned className="w-5 h-5 text-amber-600" />,
      time: "Day 1, 5:00 AM",
    },
    {
      title: "Arrive at Ciboleger",
      description:
        "Reach the gateway village to Baduy territory. Meet your local Baduy guide.",
      icon: <Milestone className="w-5 h-5 text-amber-600" />,
      time: "Day 1, 9:00 AM",
    },
    {
      title: "Desa Cibeo Dalam",
      description:
        "Hike through terraced rice fields and forest paths to reach the Inside Baduy villages.",
      icon: <Footprints className="w-5 h-5 text-amber-600" />,
      time: "Day 1, 10:00 AM - 12:00 PM",
    },
    {
      title: "Desa Ciboleger Baduy Luar",
      description:
        "Hike through terraced rice fields and forest paths to reach the Outer Baduy villages.",
      icon: <Footprints className="w-5 h-5 text-amber-600" />,
      time: "Day 1, 12:00 PM - 3:00 PM",
    },
    {
      title: "Overnight in Outer Baduy",
      description:
        "Experience traditional accommodation in a Baduy home. Share dinner with your host family.",
      icon: <BedDouble className="w-5 h-5 text-amber-600" />,
      time: "Day 1, Evening",
    },
    {
      title: "Jembatan Akar",
      description:
        "Yes, the bridge is made of two tree roots connected to each other. This Baduy root bridge does not even use nails or other adhesives. This root bridge stretches over a 30 cm wide river. The existence of this root bridge is a link between the outside world and the Baduy Tribe.",
      icon: <Footprints className="w-5 h-5 text-amber-600" />,
      time: "Day 2, 8:00 AM - 10:00 AM",
    },
    {
      title: "Jembatan Bambu",
      description:
        "When trekking to Baduy Luar and Baduy Dalam, travelers will pass an iconic bridge. What is special is that the bamboo bridge is assembled without nails. The traditional Baduy bridge is not just a connection between regions, but also a cultural work that reflects the local wisdom of the Baduy people.",
      icon: <Footprints className="w-5 h-5 text-amber-600" />,
      time: "Day 2, 10:00 AM - 12:00 PM",
    },
    {
      title: "Jakarta Return",
      description:
        "Drive back to Jakarta with a deeper understanding of Indonesia's indigenous heritage.",
      icon: <Car className="w-5 h-5 text-amber-600" />,
      time: "Day 2, 13:00 PM",
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-amber-800 mb-6">
        Your Journey Flow
      </h3>

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
                  <h4 className="text-lg font-bold text-amber-800">
                    {step.title}
                  </h4>
                  <span className="text-sm text-amber-600 font-medium">
                    {step.time}
                  </span>
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
