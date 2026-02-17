import React, { useState } from 'react';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const contactInfo = {
    address: "Khasra No-161, Plot No.10, Block A, Marium Nagar, Sewa Nagar, Ghaziabad 201003",
    phone: "+91 98765 43210",
    email: "info@armcafe.com",
    whatsapp: "+91 98765 43210"
  };

  const openingHours = [
    { day: "Monday - Friday", hours: "11:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "11:00 AM - 12:00 AM" },
    { day: "Sunday", hours: "11:00 AM - 12:00 AM" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    setFormStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
            alt="Contact A.R.M Cafe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/80 to-coffee-700/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-elegant">
            Contact Us
          </h1>
          <p className="text-xl text-coffee-100">
            Get in touch with A.R.M CAFE
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-coffee-600" />
              </div>
              <h3 className="font-bold text-coffee-900 mb-2">Visit Us</h3>
              <p className="text-sm text-coffee-600">
                Marium Nagar, Sewa Nagar<br />
                Ghaziabad 201003
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-8 h-8 text-coffee-600" />
              </div>
              <h3 className="font-bold text-coffee-900 mb-2">Call Us</h3>
              <a 
                href="tel:+919876543210"
                className="text-sm text-coffee-600 hover:text-coffee-700 transition-colors"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="w-8 h-8 text-coffee-600" />
              </div>
              <h3 className="font-bold text-coffee-900 mb-2">Email Us</h3>
              <a 
                href="mailto:info@armcafe.com"
                className="text-sm text-coffee-600 hover:text-coffee-700 transition-colors"
              >
                info@armcafe.com
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-coffee-900 mb-2">WhatsApp</h3>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:text-green-700 transition-colors"
              >
                Chat with us
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-coffee-900 mb-6">Send us a Message</h2>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-coffee-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-coffee-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="input-field"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cafe-button flex items-center justify-center"
                >
                  <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-4 border-b border-coffee-200">
                  <h3 className="text-lg font-bold text-coffee-900">Find Us</h3>
                </div>
                <div className="relative h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.123456789!2d77.456789!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMjcnMjQuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="A.R.M CAFE Location"
                    className="rounded-b-2xl"
                  />
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <ClockIcon className="w-6 h-6 text-coffee-600 mr-3" />
                  <h3 className="text-lg font-bold text-coffee-900">Opening Hours</h3>
                </div>
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-coffee-600">{schedule.day}</span>
                      <span className="font-medium text-coffee-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-coffee-50 rounded-lg">
                  <p className="text-sm text-coffee-600">
                    <strong>Delivery Hours:</strong> 11:00 AM - 11:00 PM (Daily)
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-coffee-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:+919876543210"
                    className="w-full cafe-button block text-center"
                  >
                    📞 Call for Reservation
                  </a>
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors block text-center"
                  >
                    💬 WhatsApp Order
                  </a>
                  <a 
                    href="/menu"
                    className="w-full px-6 py-3 border border-coffee-300 text-coffee-700 rounded-lg font-semibold hover:bg-coffee-50 transition-colors block text-center"
                  >
                    🍽️ View Menu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-coffee-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4 font-elegant">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-coffee-900 mb-2">Do you offer home delivery?</h3>
              <p className="text-coffee-600">
                Yes, we offer home delivery within a 5km radius of our café. Delivery charges may apply based on distance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-coffee-900 mb-2">Can I make reservations for dine-in?</h3>
              <p className="text-coffee-600">
                Absolutely! You can call us at +91 98765 43210 to make a reservation, especially recommended for weekends.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-coffee-900 mb-2">Do you have vegetarian options?</h3>
              <p className="text-coffee-600">
                Yes, we have a wide variety of vegetarian dishes across all categories. All veg items are clearly marked on our menu.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-coffee-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-coffee-600">
                We accept cash, UPI, credit/debit cards, and various digital wallet options for both dine-in and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
