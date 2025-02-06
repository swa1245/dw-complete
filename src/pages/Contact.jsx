import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

// EmailJS credentials
const EMAILJS_PUBLIC_KEY = "Lr9QXkZnwsu2UE8JG";
const EMAILJS_SERVICE_ID = "service_9wk2k5y";
const EMAILJS_TEMPLATE_ID = "template_g22a2h7";

emailjs.init(EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirement: '',
    budget: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, type: '', message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Please fill in all required fields',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setNotification({
        show: true,
        type: 'error',
        message: 'Please enter a valid email address',
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        requirement: formData.requirement,
        budget: formData.budget,
        message: formData.message,
        to_name: 'DW Innovation Team',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setNotification({
        show: true,
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        requirement: '',
        budget: '',
        message: '',
      });

    } catch (error) {
      console.error('Email send error:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-orange-500 w-8 h-8" />,
      title: "Call Us",
      info: "+91 9028954278"
    },
    {
      icon: <FaEnvelope className="text-orange-500 w-8 h-8" />,
      title: "Email Us",
      info: "info@dwi4u.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-orange-500 w-8 h-8" />,
      title: "Visit Us",
      info: "Pune, Maharashtra, India"
    },
    {
      icon: <FaClock className="text-orange-500 w-8 h-8" />,
      title: "Business Hours",
      info: "Mon - Sat: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="w-screen overflow-hidden">
      {notification.show && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
            notification.type === 'success'
              ? 'bg-green-500/90 text-white'
              : 'bg-red-500/90 text-white'
          } transition-all duration-300 z-50`}
        >
          {notification.message}
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Rajdhani'] tracking-wider text-white mb-4"
            data-aos="fade-down"
          >
            Get in Touch
          </h1>
          <p
            className="sm:text-lg lg:text-xl max-w-2xl text-gray-200 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Have a project in mind? Let's talk about it and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6" data-aos="fade-right">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-900 p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-4 text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 pl-16">{item.info}</p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" data-aos="fade-left">
              <div className="bg-black p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold font-['Rajdhani'] tracking-wider text-white mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirement" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Requirement
                    </label>
                    <select
                      id="requirement"
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    >
                      <option value="" className="bg-dark-900">Select a service</option>
                      <option value="Web Development" className="bg-dark-900">Web Development</option>
                      <option value="Mobile App Development" className="bg-dark-900">Mobile App Development</option>
                      <option value="UI/UX Design" className="bg-dark-900">UI/UX Design</option>
                      <option value="Cloud Solutions" className="bg-dark-900">Cloud Solutions</option>
                      <option value="AI & Machine Learning" className="bg-dark-900">AI & Machine Learning</option>
                      <option value="Blockchain Development" className="bg-dark-900">Blockchain Development</option>
                      <option value="DevOps Services" className="bg-dark-900">DevOps Services</option>
                      <option value="Cybersecurity" className="bg-dark-900">Cybersecurity</option>
                      <option value="Data Analytics" className="bg-dark-900">Data Analytics</option>
                      <option value="IoT Solutions" className="bg-dark-900">IoT Solutions</option>
                      <option value="IT Consulting" className="bg-dark-900">IT Consulting</option>
                      <option value="Custom Development" className="bg-dark-900">Custom Development</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    >
                      <option value="" className="bg-dark-900">Select budget range</option>
                      <option value="$5,000 - $10,000" className="bg-dark-900">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000" className="bg-dark-900">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000" className="bg-dark-900">$25,000 - $50,000</option>
                      <option value="$50,000+" className="bg-dark-900">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl sm:text-4xl font-bold font-['Orbitron'] tracking-wider text-white text-center mb-12"
            data-aos="fade-down"
          >
            Our Location
          </h2>
          <div className="relative h-[400px] rounded-xl overflow-hidden" data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.6810172771!2d73.72287828917153!3d18.524870614917432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650907631908!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
