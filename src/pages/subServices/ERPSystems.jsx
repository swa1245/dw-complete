import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './SubServices.css';

const ERPSystems = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const heroImage = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070';
  const description = 'Integrated enterprise solutions that streamline your business operations and drive growth.';

  const solutions = [
    {
      title: 'Financial Management',
      description: 'Comprehensive financial management and accounting solutions.',
      icon: '💰',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
      features: [
        'General ledger',
        'Accounts payable/receivable',
        'Asset management',
        'Financial reporting'
      ]
    },
    {
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain visibility and optimization.',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070',
      features: [
        'Inventory management',
        'Procurement',
        'Order processing',
        'Supplier management'
      ]
    },
    {
      title: 'Human Resources',
      description: 'Complete HR management and employee lifecycle solutions.',
      icon: '👥',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070',
      features: [
        'Payroll management',
        'Recruitment',
        'Performance management',
        'Training & development'
      ]
    },
    // {
    //   title: 'Manufacturing',
    //   description: 'Streamlined manufacturing operations and resource planning.',
    //   icon: '🏭',
    //   image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
    //   features: [
    //     'Production planning',
    //     'Quality control',
    //     'Equipment maintenance',
    //     'Cost tracking'
    //   ]
    // }
  ];

  const benefits = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline workflows',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074'
    },
    {
      title: 'Data Integration',
      description: 'Centralized data management and real-time insights',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs and improve efficiency',
      icon: '💰',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072'
    },
    {
      title: 'Scalability',
      description: 'Grow your business with flexible and scalable solutions',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015'
    }
  ];

  const tools = [
    { name: 'SAP', icon: '💼' },
    { name: 'Oracle', icon: '🔮' },
    { name: 'Microsoft Dynamics', icon: '🪟' },
    { name: 'Salesforce', icon: '☁️' },
    { name: 'Odoo', icon: '🔧' },
    { name: 'NetSuite', icon: '🌐' }
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "50+", label: "Successful Projects" },
    { number: "100+", label: "Happy Clients" },
    { number: "10+", label: "Awards Won" }
  ];

  return (
    <div className="bg-gray-300 w-screen  min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="h-[60vh] relative flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src={heroImage}
            alt="ERP Systems"
            className="w-full h-full object-cover object-center bg-black opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-dark-950/80 to-dark-950"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-7xl font-bold font-['Orbitron'] tracking-wider mb-6 gradient-text">
              ERP & CRM Systems
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Solutions Section */}
      <section className="py-20 0">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl text-black font-bold font-['Orbitron'] tracking-wider text-center mb-16"
            data-aos="fade-down"
          >
            Our Solutions
          </h2>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="solution-card bg-black"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="solution-image"
                />
                <div className="solution-content">
                  <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-orange-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto w-full">
          <h2
            className="text-4xl text-black font-bold font-['Orbitron'] tracking-wider text-center mb-16"
            data-aos="fade-down"
          >
            Key Benefits
          </h2>
          <div className="features-grid">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="feature-card bg-black"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {benefit.icon}
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Stats Section */}
       <section className="py-12 sm:py-16 lg:py-20 bg-gray-300 -mt-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card p-6 sm:p-8 text-center transform hover:scale-105 transition-transform duration-300 bg-dark-900"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section py-20">
        <div className="container mx-auto px-4">
          <div className="cta-content text-center">
            <h2 className="text-4xl font-bold font-['Orbitron'] tracking-wider mb-6" data-aos="fade-down">
              Ready to Transform Your Business?
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Let's work together to bring your vision to life with our comprehensive ERP solutions.
            </p>
            <Link
              to="/contact"
              className="cta-button"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Start Your Project
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPSystems;
