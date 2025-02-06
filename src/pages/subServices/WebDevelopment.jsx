import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SubServices.css";

const WebDevelopment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const techStack = [
    {
      category: "Frontend",
      technologies: [
        { name: "React.js", icon: "/icons/frontend/react.svg" },
        { name: "Next.js", icon: "/icons/frontend/next.svg" },
        { name: "Vue.js", icon: "/icons/frontend/vue.svg" },
        { name: "Angular", icon: "/icons/frontend/angular.svg" },
        { name: "TailwindCSS", icon: "/icons/frontend/tailwind.svg" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "/icons/backend/node.svg" },
        { name: "Python/Django", icon: "/icons/backend/python.svg" },
        { name: "PHP/Laravel", icon: "/icons/backend/php.svg" },
        { name: ".NET Core", icon: "/icons/backend/dotnet.svg" },
      ],
    },
    {
      category: "Database",
      technologies: [
        { name: "MongoDB", icon: "/icons/database/mongodb.svg" },
        { name: "PostgreSQL", icon: "/icons/database/postgresql.svg" },
        { name: "MySQL", icon: "/icons/database/mysql.svg" },
      ],
    },
  ];

  const services = [
    {
      title: "Custom Web Applications",
      description:
        "Tailored web solutions that perfectly align with your business needs and objectives.",
      icon: "🎯",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      features: [
        "Scalable architecture",
        "Responsive design",
        "Cross-browser compatibility",
        "Performance optimization",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Robust online stores with seamless payment integration and inventory management.",
      icon: "🛍️",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      features: [
        "Secure payment gateways",
        "Inventory tracking",
        "Order management",
        "Customer analytics",
      ],
    },
    {
      title: "Progressive Web Apps",
      description:
        "Modern web applications that offer native app-like experience across all devices.",
      icon: "📱",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      features: [
        "Offline functionality",
        "Push notifications",
        "Fast loading speeds",
        "Native app features",
      ],
    },
  ];

  const heroImage =
    "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3Dcc&q=80&w=2072";

  const description =
    "Creating powerful, scalable, and beautiful web applications using cutting-edge technologies and best practices.";

  const features = [
    {
      title: "Scalable Architecture",
      description:
        "Our web applications are designed to scale with your business, ensuring seamless performance and reliability.",
      icon: "🚀",
    },
    {
      title: "Responsive Design",
      description:
        "Our web applications are optimized for all devices, providing an exceptional user experience across desktops, tablets, and mobile devices.",
      icon: "📱",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Our web applications are tested across all major browsers, ensuring compatibility and a consistent user experience.",
      icon: "🌐",
    },
    {
      title: "Performance Optimization",
      description:
        "Our web applications are optimized for speed and performance, ensuring fast loading times and a seamless user experience.",
      icon: "⚡️",
    },
  ];

  const solutions = [
    {
      title: "Custom Web Applications",
      description:
        "Tailored web solutions that perfectly align with your business needs and objectives.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      features: [
        "Scalable architecture",
        "Responsive design",
        "Cross-browser compatibility",
        "Performance optimization",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Robust online stores with seamless payment integration and inventory management.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb21tZXJjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      features: [
        "Secure payment gateways",
        "Inventory tracking",
        "Order management",
        "Customer analytics",
      ],
    },
    {
      title: "Progressive Web Apps",
      description:
        "Modern web applications that offer native app-like experience across all devices.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      features: [
        "Offline functionality",
        "Push notifications",
        "Fast loading speeds",
        "Native app features",
      ],
    },
  ];

  const stats = [
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "50+",
      label: "Successful Projects",
    },
    {
      number: "100+",
      label: "Happy Clients",
    },
    {
      number: "1000+",
      label: "Lines of Code",
    },
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
            alt="Web Development"
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
            <h2 className="text-7xl font-bold font-['Orbitron'] text-white tracking-wider mb-6 gradient-text">
              Web Development
            </h2>
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
          <div className="solutions-grid container">
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

export default WebDevelopment;
