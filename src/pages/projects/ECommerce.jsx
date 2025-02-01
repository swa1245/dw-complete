import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ECommerce = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    'Responsive Design',
    'Advanced Search and Filtering',
    'Secure Payment Integration',
    'Real-time Inventory Management',
    'Customer Reviews and Ratings',
    'Analytics Dashboard'
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Redux', icon: '🔄' },
    { name: 'AWS', icon: '☁️' }
  ];

  const challenges = [
    {
      title: 'Scale and Performance',
      description: 'Handling high traffic loads during peak shopping seasons while maintaining fast page loads.',
      solution: 'Implemented Redis caching and CDN integration for optimal performance.'
    },
    {
      title: 'Payment Security',
      description: 'Ensuring secure transactions and protecting sensitive customer data.',
      solution: 'Integrated PCI-compliant payment gateways and implemented end-to-end encryption.'
    },
    {
      title: 'Inventory Sync',
      description: 'Real-time synchronization across multiple warehouses and sales channels.',
      solution: 'Developed a microservices architecture for real-time inventory updates.'
    }
  ];

  const achievements = [
    '500,000+ Monthly Active Users',
    '99.99% Uptime Achievement',
    '40% Increase in Conversion Rate',
    'Featured in E-Commerce Weekly',
    '2023 Best UX Design Award'
  ];

  const testimonial = {
    quote: "The e-commerce platform transformed our business. Sales increased by 200% within the first quarter of launch.",
    author: "Sarah Johnson",
    position: "CEO, Fashion Retail Co.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-screen bg-gray-200 text-black py-20 mt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-screen mx-auto">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">E-Commerce Platform</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A modern e-commerce solution with advanced features and seamless user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
              alt="E-Commerce Platform"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="space-y-8">
            <div data-aos="fade-left">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-primary">•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Technologies Used</h2>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-800 text-white px-4 py-2 rounded-full flex items-center space-x-2"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Challenges & Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-dark-800 rounded-xl p-6 hover:bg-dark-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">{challenge.title}</h3>
                <p className="text-gray-300 mb-4">{challenge.description}</p>
                <p className="text-primary-400">Solution: {challenge.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">Key Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl p-6 hover:bg-dark-700 transition-colors"
              >
                <p className="text-lg text-primary-400">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>

       
        {/* Technical Overview */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-dark-800 rounded-2xl p-8"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Technical Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Our E-Commerce Platform is built with scalability and user experience in mind. The frontend 
            utilizes React with Redux for state management, while the backend is powered by Node.js 
            microservices. We've implemented advanced caching strategies using Redis and CDN integration 
            to ensure optimal performance even during high-traffic periods.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The platform features a sophisticated inventory management system that synchronizes in 
            real-time across multiple warehouses. Payment processing is handled through PCI-compliant 
            gateways with end-to-end encryption. The entire infrastructure is deployed on AWS, 
            utilizing various services for high availability and scalability.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ECommerce;
