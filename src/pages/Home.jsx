import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import ImageSlider from "../components/ImageSlider";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUsers, FaBriefcase } from "react-icons/fa";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Stats Data
  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "30+", label: "Expert Developers" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
  ];

  // Process Steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We analyze your requirements and create a comprehensive plan.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our team creates intuitive and engaging designs for your solution.",
      icon: "✨",
    },
    {
      number: "03",
      title: "Development",
      description: "We build your solution using cutting-edge technologies.",
      icon: "⚡",
    },
    {
      number: "04",
      title: "Deployment",
      description: "Your solution is thoroughly tested and launched.",
      icon: "🚀",
    },
  ];

  // Technologies
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  // Services Data
  const services = [
    {
      title: "Web Development",
      description:
        "Create stunning, responsive websites that engage your audience and drive results.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      link: "/services/web-development",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Progressive Web Apps",
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "Build powerful mobile applications that connect with your users on any device.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      link: "/services/MobileAppDevelopment",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
      ],
    },
    {
      title: "Software Development",
      description:
        "Develop scalable software solutions that streamline your business operations.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      link: "/services/software-development",
      features: [
        "Custom Software",
        "Enterprise Solutions",
        "Cloud Applications",
      ],
    },
    {
      title: "ERP & CRM Systems",
      description:
        "Integrate comprehensive ERP solutions to optimize your business processes.",
      icon: "🔄",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      link: "/services/erp-systems",
      features: [
        "Business Integration",
        "Process Automation",
        "Data Management",
      ],
    },
    {
      title: "Software Maintenance",
      description:
        "Keep your software running smoothly with our comprehensive maintenance services.",
      icon: "🛠️",
      // path: '/services/software-maintenance',
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      link: "/services/software-maintenance",
      features: [
        "Performance Optimization",
        "Security Updates",
        "24/7 Support",
      ],
    },
    {
      title: "Digital Innovation",
      description:
        "Stay ahead with cutting-edge digital solutions and innovative technologies.",
      icon: "💡",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      link: "/services/ai-machine-learning",
      features: ["AI Solutions", "IoT Integration", "Blockchain"],
    },
  ];

  const slides = [
    {
      title: "Innovating Tomorrow's Solutions",
      description:
        "Leading the way in digital transformation with cutting-edge technology solutions",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "Empowering Digital Growth",
      description:
        "Building scalable and sustainable solutions for businesses worldwide",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60", // New Unsplash image URL
    },
    {
      title: "Future-Ready Solutions",
      description:
        "Transforming ideas into reality with advanced technology and expertise",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&auto=format&fit=crop&q=60", // New Unsplash image URL
    },
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Modern Technology",
      description:
        "Utilizing cutting-edge technologies to deliver innovative solutions.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Fast Performance",
      description: "Optimized solutions that deliver exceptional performance.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Expert Team",
      description: "Dedicated professionals with years of industry experience.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-screen overflow-hidden">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-white flex items-center justify-center overflow-hidden ">
        <ImageSlider slides={slides} />
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

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Cormorant'] tracking-wider text-center mb-8 sm:mb-12 lg:mb-16 text-white"
            data-aos="fade-down"
          >
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="process-card p-6 sm:p-8 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700 transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="process-number text-2xl sm:text-3xl font-bold text-primary-400 mb-3">
                  {step.number}
                </div>
                <div className="text-3xl sm:text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-dark-200 text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold font-['Cormorant'] tracking-wider  mb-4 sm:mb-6 bg-gradient-to-r from-dark-800 to-dark-900 text-transparent bg-clip-text">
              Our Services
            </h2>
            <p className="text-dark-900 text-base sm:text-lg max-w-3xl mx-auto px-4">
              Comprehensive digital solutions tailored to transform your
              business vision into reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <motion.div
                  className="relative overflow-hidden rounded-xl bg-black backdrop-blur-sm border border-dark-700 h-full p-4 sm:p-6 lg:p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 z-0">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-10"
                      initial={{ scale: 1.2 }}
                      whileHover={{ scale: 1.1, opacity: 0.15 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <div className="relative z-10">
                    <motion.div
                      className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-primary-400">
                      {service.title}
                    </h3>
                    <p className="text-dark-200 text-sm sm:text-base mb-4 sm:mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-xs sm:text-sm lg:text-base text-dark-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-primary-400 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block text-sm sm:text-base text-primary-400 hover:text-primary-500 transition-colors duration-300"
                    >
                      Learn More →
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-dark-800 p-8 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="feature-icon ">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 ">
          
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
              Let's work together to bring your vision to life with our expert IT consulting services.
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
        {/* WhatsApp Contact Button */}
        <section className="fixed bottom-6 gap-3 right-6 z-10 flex items-center justify-center">
          <div className="text-xs bg-white p-2 rounded-md text-black">
            Need Help? <b className="text-orange-600">Chat with us</b>
          </div>
          <div>
            {/* WhatsApp Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center  bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white w-14 h-14 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition duration-300 transform"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp className="text-xl sm:text-3xl " />
            </button>

            {/* Suggestions Menu */}
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute bottom-20 right-0 bg-black rounded-lg shadow-xl p-4 w-56 space-y-4"
              >
                <a
                  href="https://wa.me/9028954278?text=Hello%20HR%20Team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaUsers className="text-green-500 text-xl" />
                  <span>Chat with HR Team</span>
                </a>
                <a
                  href="https://wa.me/9028954265?text=Hello%20Marketing%20Team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
                >
                  <FaBriefcase className="text-green-500 text-xl" />
                  <span>Chat with Marketing Team</span>
                </a>
              </motion.div>
            )}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
