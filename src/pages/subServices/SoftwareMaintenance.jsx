import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SubServices.css";

const SoftwareMaintenance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    {
      title: "Preventive Maintenance",
      description:
        "Regular system checks and updates to prevent issues before they occur.",
      icon: "🛡️",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      features: [
        "Performance monitoring",
        "Security updates",
        "Code optimization",
        "Database maintenance",
      ],
    },
    {
      title: "Corrective Maintenance",
      description: "Quick resolution of software issues and bug fixes.",
      icon: "🔧",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069",
      features: [
        "Bug fixing",
        "Error handling",
        "System recovery",
        "Performance tuning",
      ],
    },
    {
      title: "Adaptive Maintenance",
      description: "Keeping software up-to-date with changing business needs.",
      icon: "🔄",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974",
      features: [
        "Feature updates",
        "Platform upgrades",
        "Integration updates",
        "Compatibility maintenance",
      ],
    },
    // {
    //   title: '24/7 Support',
    //   description: 'Round-the-clock technical support and issue resolution.',
    //   icon: '🎯',
    //   image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070',
    //   features: [
    //     'Emergency response',
    //     'Remote support',
    //     'Issue tracking',
    //     'Regular reporting'
    //   ]
    // }
  ];

  const features = [
    {
      title: "Proactive Monitoring",
      description:
        "Continuous system monitoring to identify and prevent issues",
      icon: "📊",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    },
    {
      title: "Regular Backups",
      description: "Automated backup systems with secure data storage",
      icon: "💾",
      image:
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070",
    },
    {
      title: "Security Updates",
      description: "Regular security patches and vulnerability assessments",
      icon: "🔒",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    },
    {
      title: "Performance Optimization",
      description: "Continuous performance monitoring and optimization",
      icon: "⚡",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    },
  ];

  const tools = [
    { name: "Monitoring", icon: "📈" },
    { name: "Issue Tracking", icon: "🎯" },
    { name: "Version Control", icon: "📚" },
    { name: "CI/CD", icon: "🔄" },
    { name: "Testing", icon: "✅" },
    { name: "Documentation", icon: "📝" },
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "50+", label: "Successful Projects" },
    { number: "100+", label: "Happy Clients" },

    { number: "5+", label: "Years Experience" },
  ];

  const heroImage =
    "https://img.freepik.com/free-photo/programming-background-concept_23-2150170128.jpg?ga=GA1.1.402563534.1736440284&semt=ais_incoming";
  const description =
    "Comprehensive software maintenance services to keep your systems running smoothly and efficiently.";

  return (
    <div className="bg-gray-300  w-screen min-h-screen">
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
            alt="Software Maintenance"
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
              Software Maintenance
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto w-full">
          <h2
            className="text-4xl text-black font-bold font-['Orbitron'] tracking-wider text-center mb-16"
            data-aos="fade-down"
          >
            Core Features
          </h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-black"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl text-white font-bold font-['Orbitron'] tracking-wider text-center mb-16"
            data-aos="fade-down"
          >
            Our Solutions
          </h2>
          <div className="solutions-grid">
            {services.map((solution, index) => (
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
            <h2
              className="text-4xl font-bold font-['Orbitron'] tracking-wider mb-6"
              data-aos="fade-down"
            >
              Ready to Transform Your Business?
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Let's work together to bring your vision to life with our reliable
              software maintenance services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
              data-aos="fade-up"
              
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

export default SoftwareMaintenance;
