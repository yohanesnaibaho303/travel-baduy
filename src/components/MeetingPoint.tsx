import { MapPin } from 'lucide-react';

const MeetingPoint = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-amber-800 mb-6">Meeting Point</h3>

      {/* Card 1: Tanah Abang */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 bg-white shadow-sm p-6 rounded-xl border border-stone-200">
        {/* Description */}
        <div className="flex-1">
          <h4 className="flex items-center text-lg font-bold text-stone-700 mb-3">
            <MapPin className="w-5 h-5 text-amber-600 mr-2" />
            Stasiun KRL Tanah Abang
          </h4>
          <p className="text-stone-700 mb-4">
            Our journey begins at the Stasiun KRL Tanah Abang, the gateway to Baduy territory. This is where you'll meet your local Baduy guide who will accompany you throughout the trek.
          </p>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="text-stone-700 font-medium">Address:</p>
            <p className="text-stone-600">
              Stasiun KRL Tanah Abang<br />
              Jalan Jati Baru Raya, Jl. Cideng Timur,<br />
              Kecamatan Tanah Abang, Jakarta Pusat, <br />
              10250, Indonesia
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 w-full aspect-video rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5892356605655!2d106.80828297604938!3d-6.185688593801844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f684bd7015d1%3A0x790a6a4bfd2f5502!2sStasiun%20Tanahabang!5e0!3m2!1sen!2sid!4v1747725540127!5m2!1sen!2sid"
            width="100%"
            height="100%"
            allowFullScreen
            title="Stasiun Tanah Abang Location Map"
            className="w-full h-full border-0"
          />
        </div>
      </div>

      {/* Card 2: Rangkasbitung */}
      <div className="flex flex-col md:flex-row gap-6 mb-8 bg-white shadow-sm p-6 rounded-xl border border-stone-200">
        {/* Description */}
        <div className="flex-1">
          <h4 className="flex items-center text-lg font-bold text-stone-700 mb-3">
            <MapPin className="w-5 h-5 text-amber-600 mr-2" />
            Stasiun KRL Rangkasbitung
          </h4>
          <p className="text-stone-700 mb-4">
            Our journey also begins at the Stasiun KRL Rangkasbitung, the gateway to Baduy territory. This is where you'll meet your local Baduy guide who will accompany you throughout the trek.
          </p>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="text-stone-700 font-medium">Address:</p>
            <p className="text-stone-600">
              Stasiun KRL Rangkasbitung<br />
              East Muara Ciujung, Rangkasbitung,<br />
              Lebak Regency, Province Banten <br />
              42314, Indonesia
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 w-full aspect-video rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3194046894237!2d106.24895507605045!3d-6.352679993637299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42172cb0a137e3%3A0x1c3d52a6123af3d5!2sStasiun%20Rangkasbitung!5e0!3m2!1sen!2sid!4v1747725720721!5m2!1sen!2sid"
            width="100%"
            height="100%"
            allowFullScreen
            title="Stasiun Rangkasbitung Location Map"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default MeetingPoint;
