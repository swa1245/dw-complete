import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SmartHome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    'Voice Control Integration',
    'Energy Management',
    'Security System',
    'Climate Control',
    'Lighting Automation',
    'Remote Monitoring'
  ];

  const technologies = [
    { name: 'IoT', icon: '🏠' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MQTT', icon: '📡' },
    { name: 'WebSockets', icon: '🔌' }
  ];

  const challenges = [
    {
      title: 'Device Integration',
      description: 'Integrating diverse IoT devices from different manufacturers.',
      solution: 'Developed a universal device protocol adapter using MQTT.'
    },
    {
      title: 'Real-time Response',
      description: 'Ensuring instant response to user commands and device status changes.',
      solution: 'Implemented WebSocket connections with device state caching.'
    },
    {
      title: 'Security',
      description: 'Protecting sensitive home data and preventing unauthorized access.',
      solution: 'End-to-end encryption and multi-factor authentication system.'
    }
  ];

  const achievements = [
    '100,000+ Connected Homes',
    '30% Average Energy Savings',
    '24/7 Uptime Guarantee',
    'Smart Home Innovation Award',
    'Zero Security Breaches'
  ];

  const testimonial = {
    quote: "The system has made our home truly intelligent. We've seen significant energy savings and improved security.",
    author: "David Martinez",
    position: "Early Adopter",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&fit=crop"
  };

  const stats = [
    { label: 'Connected Devices', value: '1M+' },
    { label: 'Active Homes', value: '100K+' },
    { label: 'Energy Saved', value: '30%' },
    { label: 'Response Time', value: '<100ms' }
  ];

  const deviceTypes = [
    { name: 'Smart Lights', count: '250K+' },
    { name: 'Thermostats', count: '100K+' },
    { name: 'Security Cameras', count: '150K+' },
    { name: 'Door Locks', count: '80K+' },
    { name: 'Energy Meters', count: '120K+' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-screen bg-gray-200 mt-20 text-black py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Smart Home System</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            An intelligent home automation platform that transforms everyday living spaces into connected, efficient environments.
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
              src="https://img.freepik.com/free-photo/digital-tablet-screen-with-smart-home-controller-wooden-table_53876-98547.jpg?ga=GA1.1.373861391.1735111696&semt=ais_hybrid"
              alt="Smart Home System"
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

        {/* Connected Devices Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Connected Devices</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {deviceTypes.map((device, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl p-6 text-center hover:bg-dark-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{device.name}</h3>
                <p className="text-gray-400">{device.count}</p>
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
            Our Smart Home System is built on a microservices architecture using Node.js and React. 
            The system uses MQTT protocol for device communication and WebSockets for real-time 
            updates. Each device connects through our universal protocol adapter, which handles 
            different manufacturer specifications and ensures seamless integration.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The platform includes advanced features like machine learning for energy optimization, 
            predictive maintenance, and behavioral pattern recognition. Security is implemented 
            through end-to-end encryption, secure boot for IoT devices, and regular security audits. 
            The entire system is monitored 24/7 with automated failover and recovery procedures.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SmartHome;
