import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import "./SubServices.css";

const ItInfrac = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const features = [
    {
      title: "Network Design",
      description:
        "Custom network architecture optimized for performance and security.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure with optimal resource utilization.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: "Security",
      description: "Advanced security measures to protect your digital assets.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Monitoring",
      description: "24/7 infrastructure monitoring and proactive maintenance.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  const solutions = [
    {
      title: "Network Infrastructure",
      description: "Design and implementation of robust network solutions.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500&auto=format",
      features: [
        "High-performance networking",
        "Redundant connections",
        "Network segmentation",
        "Quality of Service (QoS)",
      ],
    },
    {
      title: "Cloud Computing",
      description: "Scalable and flexible cloud infrastructure solutions.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format",
      features: [
        "Public/Private cloud",
        "Hybrid solutions",
        "Cloud migration",
        "Resource optimization",
      ],
    },
    {
      title: "Security Systems",
      description: "Comprehensive security infrastructure implementation.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500&auto=format",
      features: [
        "Firewall systems",
        "Intrusion detection",
        "Access control",
        "Security monitoring",
      ],
    },
  ];

  const technologies = [
    {
      name: "Cisco",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
  ];

  const stats = [
    { number: "100%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "30+", label: "Projects Completed" },
    { number: "30+", label: "Satisfied Clients" },
  ];

  return (
    <div className="bg-white w-screen w-screen min-h-screen">
      {/* Hero Section */}
      {/* <section className="subservice-hero text-center relative flex items-center justify-center">
        <div className="hero-pattern"></div>
        <div className="container mx-auto px-4">
          <div className="hero-content max-w-4xl">
            <h1 className="hero-title mb-6">IT Infrastructure</h1>
            <p 
              className="text-xl text-gray-300 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Build and maintain robust IT systems that scale with your business needs
            </p>
            <div 
              className="flex gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <motion.div
        className="h-[60vh] relative flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.freepik.com/free-photo/cyber-security-protection-firewall-interface-concept_53876-125636.jpg?ga=GA1.1.402563534.1736440284&semt=ais_incoming"
             alt="Mobile App Development"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-dark-950/80 to-dark-950"></div>
        </div>

        <div className="container mx-auto px-4  relative z-10 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-7xl  font-bold font-['Orbitron'] tracking-wider mb-6 gradient-text">
            IT Infrastructure
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Build and maintain robust IT systems that scale with your business needs
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap  justify-center gap-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          ></motion.div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90"></div>
      </motion.div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90"></div> */}

      {/* Features Section */}
      <section className="py-20  ">
        <div className="container  mx-auto w-full">
          <h2
            className="text-4xl text-orange-500 font-bold font-['Orbitron'] tracking-wider text-center mb-16"
            data-aos="fade-down"
          >
            Core Features
          </h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-black "
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
      <section className="py-20 bg-dark-900 ">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl text-orange-500 font-bold font-['Orbitron'] tracking-wider text-center mb-16"
            data-aos="fade-down"
          >
            Our Solutions
          </h2>
          <div className="solutions-grid ">
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
                        className="flex items-center  text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-blue-500  mr-2"
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

      {/* Technologies Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-16"
            data-aos="fade-down"
          >
            Technologies We Use
          </h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="tech-item"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img 
                  src={tech.icon}
                  alt={tech.name}
                  className="tech-icon"
                />
                <span className="text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
            <h2 className="text-4xl font-bold mb-6" data-aos="fade-down">
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
              // data-aos="fade-up"
              data-aos-delay="200"
            >
              Start Your Project
              <svg
                className="w-5 h-5 "
                fill="none"
                // stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // strokeWidth="2"
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

export default ItInfrac;
