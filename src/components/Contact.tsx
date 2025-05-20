import React, { useState } from 'react';
import { User, Mail, Calendar, MessageSquare, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        date: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-stone-100">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">Start Your Journey</h2>
          <p className="max-w-3xl mx-auto text-stone-700">
            Ready to experience the authentic Baduy culture? Get in touch with us to plan your trip.
            We'll help you create a memorable journey that respects both the traditions and your preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-6">Contact Us</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
                <p className="font-medium">Thank you for your inquiry!</p>
                <p className="mt-1">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
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
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
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
                    <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-1">Preferred Travel Date</label>
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
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Your Message</label>
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
                      type="submit"
                      className="w-full btn btn-primary flex justify-center items-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
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
                  <p className="text-amber-100 mb-2">Outer Baduy villages only</p>
                  <p className="font-bold text-2xl">IDR 1,500,000 - 2,000,000</p>
                  <p className="text-sm text-amber-100">per person (min. 2 people)</p>
                </div>
                
                <div className="border-b border-amber-600 pb-4">
                  <h4 className="font-bold text-xl">3-Day Full Experience</h4>
                  <p className="text-amber-100 mb-2">Outer & Inner Baduy villages</p>
                  <p className="font-bold text-2xl">IDR 2,500,000 - 3,000,000</p>
                  <p className="text-sm text-amber-100">per person (min. 2 people)</p>
                </div>
                
                <p className="text-sm">
                  * Prices include transportation, accommodation, meals, and guide fees. 
                  Prices vary based on group size and specific requirements.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
                    <User className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-stone-800">Local Guide</h4>
                    <p className="text-stone-600">Jaro Saija (Baduy Community Coordinator)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-stone-800">WhatsApp / Phone</h4>
                    <p className="text-stone-600">+62 812-3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-stone-800">Email</h4>
                    <p className="text-stone-600">baduytravel@example.com</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <p className="text-stone-700">
                    <span className="font-bold">Best time to visit:</span> May to September (dry season)
                  </p>
                  <p className="text-stone-700 mt-2">
                    <span className="font-bold">Booking notice:</span> Please book at least 2 weeks in advance
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