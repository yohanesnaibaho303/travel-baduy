import React from "react";
import {
  Compass,
  Instagram,
  Facebook,
  Heart,
  ChevronUp,
  Send,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-stone-800 text-white pt-12 pb-6">
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Compass className="h-8 w-8 text-amber-500 mr-2" />
              <span className="font-bold text-xl">Travel to Baduy</span>
            </div>
            <p className="text-stone-300 mb-4">
              Authentic cultural experiences guided by the Baduy people
              themselves. Discover one of Indonesia's most preserved indigenous
              cultures.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-stone-300 hover:text-amber-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-stone-300 hover:text-amber-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "About Baduy",
                "Trip Details",
                "Gallery",
                "Testimonials",
                "FAQs",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-stone-300 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                "Travel Tips",
                "Packing List",
                "Cultural Guide",
                "Indonesian Phrases",
                "Weather Info",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-stone-300 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-stone-300 mb-4">
              Subscribe to receive updates on new tour dates and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-stone-800 w-full"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 rounded-r-lg px-4 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-stone-400 text-sm">
            &copy; {new Date().getFullYear()} Travel to Baduy. All rights
            reserved | Jovanda Iftithah Vihensya -{" "}
            {
              <>
                <a
                  href="https://president.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-amber-500 transition-colors no-underline"
                >
                  President University
                </a>
              </>
            }
          </p>
          <div className="mt-4 md:mt-0 text-stone-400 text-sm flex items-center">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-amber-500 mx-1" />
            <span>for responsible tourism</span>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-stone-700 hover:bg-stone-600 p-2 rounded-full transition-colors"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
