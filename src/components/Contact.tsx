import React, { useState } from "react";
import { User, Mail, Calendar, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    // setTimeout(() => {
    //   setIsSubmitted(false);
    //   setFormData({
    //     name: "",
    //     email: "",
    //     date: "",
    //     message: "",
    //   });
    // }, 3000);
  };

  const handleSendWhatsapp = () => {
    setIsSubmitted(true);

    const phoneNumber = "6285173085996"; // Replace with your number
    const message = `
      🌿 *Tour Inquiry - Baduy Village* 🌿

      Hello, I would like to inquire about a tour package to Baduy Village.

      🧾 *Details:*
      ━━━━━━━━━━━━━━━━━━
      👤 *Name:* ${formData.name.trim()}
      📧 *Email:* ${formData.email.trim()}
      📅 *Preferred Date:* ${formData.date.trim()}
      💬 *Message:* 
      ${formData.message.trim()}
      ━━━━━━━━━━━━━━━━━━

      Looking forward to your response. Thank you!
      `.trim();

    console.log("🚀 ~ handleSendWhatsapp ~ message:", message.trim());

    const encodedMessage = encodeURIComponent(message.trim());
    console.log("🚀 ~ handleSendWhatsapp ~ encodedMessage:", encodedMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-stone-100">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">
            Start Your Journey
          </h2>
          <p className="max-w-3xl mx-auto text-stone-700">
            Ready to experience the authentic Baduy culture? Get in touch with
            us to plan your trip. We'll help you create a memorable journey that
            respects both the traditions and your preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-6">
              Contact Us
            </h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
                <p className="font-medium">Thank you for your inquiry!</p>
                <p className="mt-1">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-stone-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-stone-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                        placeholder="youremail@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Preferred Travel Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-stone-400" />
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-stone-700 mb-1"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-stone-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                        placeholder="Tell us about your trip expectations..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleSendWhatsapp}
                      className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Send via WhatsApp
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-amber-700 text-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Tour Packages</h3>

              <div className="space-y-4">
                <div className="border-b border-amber-600 pb-4">
                  <h4 className="font-bold text-xl">2-Day Experience</h4>
                  <p className="text-amber-100 mb-2">
                    Outer Baduy villages only
                  </p>
                  <p className="font-bold text-2xl">
                    IDR 1,500,000 - 2,000,000
                  </p>
                  <p className="text-sm text-amber-100">
                    per person (min. 2 people)
                  </p>
                </div>

                <div className="border-b border-amber-600 pb-4">
                  <h4 className="font-bold text-xl">3-Day Full Experience</h4>
                  <p className="text-amber-100 mb-2">
                    Outer & Inner Baduy villages
                  </p>
                  <p className="font-bold text-2xl">
                    IDR 2,500,000 - 3,000,000
                  </p>
                  <p className="text-sm text-amber-100">
                    per person (min. 2 people)
                  </p>
                </div>

                <p className="text-sm">
                  * Prices include transportation, accommodation, meals, and
                  guide fees. Prices vary based on group size and specific
                  requirements.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-amber-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
                    <User className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-stone-800">Local Guide</h4>
                    <p className="text-stone-600">
                      A Saptri (Baduy Community Coordinator)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-stone-800">
                      WhatsApp / Phone
                    </h4>
                    <p className="text-stone-600">+62 813-8408-2716</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-stone-800">Email</h4>
                    <p className="text-stone-600">saptribaduyt@gmail.com</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-stone-200">
                  <p className="text-stone-700">
                    <span className="font-bold">Best time to visit:</span> May
                    to September (dry season)
                  </p>
                  <p className="text-stone-700 mt-2">
                    <span className="font-bold">Booking notice:</span> Please
                    book at least 2 weeks in advance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
