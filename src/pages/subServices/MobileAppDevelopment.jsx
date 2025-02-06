import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SubServices.css";

const MobileAppDevelopment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  const heroImage =
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080&auto=format&fit=crop&q=60";

  const description =
    "Transform your ideas into powerful mobile applications with our expert development services. We create innovative solutions for both iOS and Android platforms.";

  const features = [
    {
      title: "Native App Development",
      description:
        "High-performance native applications for iOS and Android platforms.",
      icon: (
        <svg
          className="w-12 h-12 text-orange-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Cross-Platform Development",
      description:
        "Cost-effective solutions that work seamlessly across multiple platforms.",
      icon: (
        <svg
          className="w-12 h-12 text-orange-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
    {
      title: "App Maintenance",
      description:
        "Continuous support and updates to keep your app running smoothly.",
      icon: (
        <svg
          className="w-12 h-12 text-orange-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const solutions = [
    {
      title: "Native App Development",
      description:
        "High-performance native applications for iOS and Android platforms.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974",
      features: [
        "Platform-specific UI/UX",
        "Hardware integration",
        "High performance",
        "App store optimization",
      ],
    },
    {
      title: "Cross-Platform Development",
      description:
        "Cost-effective solutions that work seamlessly across multiple platforms.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470",
      features: [
        "Code reusability",
        "Faster development",
        "Consistent UI",
        "Easy maintenance",
      ],
    },
    {
      title: "App Maintenance",
      description:
        "Continuous support and updates to keep your app running smoothly.",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470",
      features: [
        "Regular updates",
        "Performance monitoring",
        "Bug fixes",
        "Feature enhancements",
      ],
    },
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "50+", label: "Successful Projects" },
    { number: "100+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="bg-white w-screen  min-h-screen">
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
            alt="Mobile App Development"
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
              Mobile App Development
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
            className="text-4xl text-dark-800 font-bold font-['Orbitron'] tracking-wider text-center mb-16"
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
              Let's work together to bring your vision to life with our
              innovative solutions.
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

export default MobileAppDevelopment;
