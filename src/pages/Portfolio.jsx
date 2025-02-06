import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      description:
        "Modern e-commerce solution with advanced features and seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      path: "/projects/ecommerce",
    },
    {
      title: "Healthcare App",
      category: "mobile",
      description:
        "Innovative healthcare management system for patients and providers.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "AI"],
      path: "/projects/healthcare",
    },
    {
      title: "Financial Dashboard",
      category: "web",
      description: "Real-time financial analytics and reporting dashboard.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Python", "D3.js"],
      path: "/projects/finance",
    },
    {
      title: "Smart Home System",
      category: "IoT",
      description: "IoT-based home automation and monitoring system.",
      image:
        "https://img.freepik.com/free-photo/digital-tablet-screen-with-smart-home-controller-wooden-table_53876-98547.jpg?ga=GA1.1.373861391.1735111696&semt=ais_hybrid",
      tags: ["IoT", "React", "Node.js"],
      path: "/projects/smarthome",
    },
    {
      title: "AI Content Generator",
      category: "ai",
      description: "AI-powered content creation and optimization platform.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["Python", "TensorFlow", "GPT-3"],
      path: "/projects/ai-content",
    },
    {
      title: "Supply Chain Platform",
      category: "web",
      description: "End-to-end supply chain management and tracking system.",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop",
      tags: ["React", "Blockchain", "AWS"],
      path: "/projects/supply-chain",
    },
  ];

  const handleProjectClick = (path) => {
    console.log("Navigating to:", path); // Debug log
    navigate(path);
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="w-screen overflow-hidden">
      {/* Hero Section - Keeping original banner structure */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww?w=1080&auto=format&fit=crop&q=60"
            alt="Portfolio Hero"
            className="w-full h-full bg-black object-cover opacity-50 "
          />
          <div className="absolute inset-0 bg-dark-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Rajdhani'] tracking-wider text-white mb-4"
            data-aos="fade-down"
          >
            Our Portfolio
          </h1>
          <p
            className="sm:text-lg lg:text-xl max-w-2xl text-gray-200 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover our latest projects, innovations, creative solutions, achievements, advancements, success stories
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 sm:py-16 bg-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap gap-4 justify-center mb-12"
            data-aos="fade-up"
          >
            {["all", "web", "mobile", "IoT", "ai"].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full capitalize ${
                  filter === category
                    ? "bg-primary-500 "
                    : "bg-blue-400 text-dark-900 "
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => handleProjectClick(project.path)}
                className="bg-black rounded-xl overflow-hidden shadow-lg cursor-pointer group transform transition-all duration-300 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-primary-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-dark-800 text-primary-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
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
              Let's work together to bring your vision to life with our expert IT consulting services.
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

export default Portfolio;
