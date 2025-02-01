import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Finance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    'Real-time Market Data',
    'Portfolio Management',
    'Risk Analytics',
    'Automated Trading',
    'Performance Reporting',
    'Compliance Monitoring'
  ];

  const technologies = [
    { name: 'Vue.js', icon: '💚' },
    { name: 'Python', icon: '🐍' },
    { name: 'D3.js', icon: '📊' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔄' }
  ];

  const challenges = [
    {
      title: 'Real-time Processing',
      description: 'Handling millions of real-time market data points with minimal latency.',
      solution: 'Implemented Redis for caching and WebSocket for real-time updates.'
    },
    {
      title: 'Data Visualization',
      description: 'Creating complex financial charts and visualizations for analysis.',
      solution: 'Developed custom D3.js components for interactive data visualization.'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Meeting strict financial regulations and security requirements.',
      solution: 'Built comprehensive audit trails and encryption systems.'
    }
  ];

  const achievements = [
    '$50B+ Assets Managed',
    '10ms Average Response Time',
    '99.999% System Uptime',
    'ISO 27001 Certified',
    'FinTech Innovation Award'
  ];

  const testimonial = {
    quote: "This dashboard has transformed how we analyze market data. Our trading efficiency improved by 300%.",
    author: "James Wilson",
    position: "Head of Trading, Global Investments Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  };

  const stats = [
    { label: 'Daily Transactions', value: '1M+' },
    { label: 'Active Users', value: '10K+' },
    { label: 'Data Points/Sec', value: '500K' },
    { label: 'Markets Covered', value: '100+' }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Financial Dashboard</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A powerful financial analytics platform delivering real-time insights and advanced trading capabilities.
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
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
              alt="Financial Dashboard"
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
            The Financial Dashboard is built with Vue.js for the frontend, leveraging D3.js for 
            complex data visualizations. The backend uses Python for high-performance data processing 
            and analysis, with PostgreSQL for persistent storage and Redis for real-time data caching.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our system processes millions of market data points per second with sub-millisecond 
            latency. We use WebSocket connections for real-time updates and implement sophisticated 
            algorithms for risk analysis and automated trading strategies. The platform is hosted on 
            a high-availability infrastructure with automatic failover capabilities.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Finance;
