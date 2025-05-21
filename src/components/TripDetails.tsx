import { useState } from "react";
import { MapPin, Coffee, Ban, Route } from "lucide-react";
import TripTimeline from "./TripTimeline";
import MeetingPoint from "./MeetingPoint";
import Facilities from "./Facilities";
import Guidelines from "./Guidelines";
import { useTranslation } from "react-i18next";

const TripDetails = () => {
  const [activeTab, setActiveTab] = useState("timeline");
  const { t } = useTranslation();

  const tabs = [
    {
      id: "timeline",
      label: t("tripDetails.tabs.timeline"),
      icon: <Route size={20} />,
    },
    {
      id: "meeting",
      label: t("tripDetails.tabs.meeting"),
      icon: <MapPin size={20} />,
    },
    {
      id: "facilities",
      label: t("tripDetails.tabs.facilities"),
      icon: <Coffee size={20} />,
    },
    {
      id: "guidelines",
      label: t("tripDetails.tabs.guidelines"),
      icon: <Ban size={20} />,
    },
  ];

  return (
    <section id="trip-details" className="section-padding bg-amber-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">
            {t("tripDetails.title")}
          </h2>
          <p className="max-w-3xl mx-auto text-stone-700">
            {t("tripDetails.description")}
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
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-white text-stone-700 hover:bg-amber-100"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
          {activeTab === "timeline" && <TripTimeline />}
          {activeTab === "meeting" && <MeetingPoint />}
          {activeTab === "facilities" && <Facilities />}
          {activeTab === "guidelines" && <Guidelines />}
        </div>
      </div>
    </section>
  );
};

export default TripDetails;
