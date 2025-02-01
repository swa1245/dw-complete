import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SupplyChain = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    'Real-time Tracking',
    'Inventory Management',
    'Predictive Analytics',
    'Supplier Management',
    'Order Processing',
    'Logistics Optimization'
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⎈' }
  ];

  const challenges = [
    {
      title: 'Data Integration',
      description: 'Integrating data from multiple sources and legacy systems.',
      solution: 'Developed custom APIs and ETL pipelines for seamless data flow.'
    },
    {
      title: 'Real-time Tracking',
      description: 'Maintaining accurate real-time visibility across the supply chain.',
      solution: 'Implemented IoT sensors and blockchain for transparent tracking.'
    },
    {
      title: 'Scalability',
      description: 'Handling increasing transaction volumes and data growth.',
      solution: 'Deployed microservices architecture with auto-scaling capabilities.'
    }
  ];

  const achievements = [
    '500+ Active Companies',
    '30% Cost Reduction',
    '99.9% Uptime',
    'Supply Chain Excellence Award',
    '40% Faster Deliveries'
  ];

  const testimonial = {
    quote: "This platform transformed our supply chain operations. We've seen dramatic improvements in efficiency and cost savings.",
    author: "Michael Rodriguez",
    position: "Supply Chain Director, Global Logistics Corp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  };

  const stats = [
    { label: 'Shipments Tracked', value: '10M+' },
    { label: 'Active Users', value: '100K+' },
    { label: 'Countries', value: '50+' },
    { label: 'Efficiency Gain', value: '40%' }
  ];

  const metrics = [
    { type: 'Orders Processed', count: '1M+/day' },
    { type: 'Inventory Items', count: '5M+' },
    { type: 'Suppliers Connected', count: '50K+' },
    { type: 'Warehouses', count: '1000+' },
    { type: 'Routes Optimized', count: '100K+' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-screen bg-gray-200 text-black mt-20 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Supply Chain Platform</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A comprehensive supply chain management solution that optimizes operations and enhances visibility across the entire supply network.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 rounded-xl p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
              alt="Supply Chain Platform"
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

        {/* Metrics Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Platform Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl p-6 text-center hover:bg-dark-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{metric.type}</h3>
                <p className="text-gray-400">{metric.count}</p>
              </motion.div>
            ))}
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
            Our Supply Chain Platform is built on a modern microservices architecture using React 
            and Node.js. The system utilizes MongoDB for flexible data storage and Docker with 
            Kubernetes for containerization and orchestration. Real-time tracking is achieved through 
            IoT integration and WebSocket connections.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The platform incorporates machine learning for predictive analytics and route optimization. 
            Our distributed architecture ensures high availability and scalability, with automatic 
            failover mechanisms. Data security is maintained through end-to-end encryption and 
            role-based access control, while blockchain technology ensures transparency and 
            traceability across the supply chain.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SupplyChain;
