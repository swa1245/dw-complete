import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SubServices.css';

const SoftwareDevelopment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const heroImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070';
  const description = 'Building scalable, secure, and efficient software solutions that drive business growth and innovation.';

  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailor-made software solutions designed to meet your specific business requirements.',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1542744095-08cf8e431dbb?w=2070&auto=format&fit=crop&q=60',
      features: [
        'Scalable architecture',
        'Modern tech stack',
        'Security best practices',
        'Performance optimization'
      ]
    },
    {
      title: 'Enterprise Solutions',
      description: 'Robust enterprise-grade applications that streamline business operations.',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
      features: [
        'System integration',
        'Workflow automation',
        'Data analytics',
        'Legacy system modernization'
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud-native applications with high availability and scalability.',
      icon: '☁️',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072',
      features: [
        'Multi-cloud support',
        'Microservices architecture',
        'Auto-scaling',
        'Disaster recovery'
      ]
    }

  ];
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "50+", label: "Successful Projects" },
    { number: "100+", label: "Happy Clients" },
  ];

  const methodologies = [
    {
      name: 'Agile Development',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
      description: 'Iterative approach with regular feedback and adaptability',
      features: [
        'Sprint planning',
        'Daily standups',
        'Regular demos',
        'Continuous improvement'
      ]
    },
    {
      name: 'DevOps Practices',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=2070',
      description: 'Seamless integration of development and operations',
      features: [
        'CI/CD pipelines',
        'Automated testing',
        'Infrastructure as code',
        'Monitoring & logging'
      ]
    },
    {
      name: 'Quality Assurance',
      icon: '✅',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070',
      description: 'Comprehensive testing and quality control',
      features: [
        'Unit testing',
        'Integration testing',
        'Performance testing',
        'Security testing'
      ]
    }
  ];

  return (
    <div className="bg-white w-screen w-screen min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="h-[60vh] relative flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Software Development"
            className="w-full h-full object-cover object-center"
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
              Software Development
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto w-full">
          <h2
            className="text-4xl text-orange-500 font-bold font-['Orbitron'] tracking-wider text-center mb-16"
            data-aos="fade-down"
          >
            Our Services
          </h2>
          <div className="features-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="feature-card bg-black"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="solution-image"
                />
                <div className="solution-content">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2"
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

      {/* Methodologies Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl text-orange-500 font-bold font-['Orbitron'] tracking-wider text-center mb-16"
            data-aos="fade-down"
          >
            Our Development Process
          </h2>
          <div className="solutions-grid">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="solution-card bg-black"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={method.image}
                  alt={method.name}
                  className="solution-image"
                />
                <div className="solution-content">
                  <h3 className="text-xl font-bold mb-4">{method.name}</h3>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                  <ul className="space-y-2">
                    {method.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2"
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
       {/* Stats Section */}
       <section className="py-20 bg-black-800">
        <div className="container mx-auto px-4">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-black"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
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
              Let's work together to bring your vision to life with our
              innovative solutions.
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

export default SoftwareDevelopment;
