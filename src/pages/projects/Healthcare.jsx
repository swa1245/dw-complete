import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Healthcare = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    'Patient Management System',
    'Telemedicine Integration',
    'Electronic Health Records',
    'Appointment Scheduling',
    'Prescription Management',
    'Lab Results Integration'
  ];

  const technologies = [
    { name: 'React Native', icon: '📱' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'TensorFlow', icon: '🧠' }
  ];

  const challenges = [
    {
      title: 'Data Security',
      description: 'Ensuring HIPAA compliance and protecting sensitive patient data.',
      solution: 'Implemented end-to-end encryption and strict access controls.'
    },
    {
      title: 'Real-time Communication',
      description: 'Enabling seamless video consultations and instant messaging.',
      solution: 'Integrated WebRTC and Socket.io for real-time communication.'
    },
    {
      title: 'AI Integration',
      description: 'Implementing AI for symptom analysis and health predictions.',
      solution: 'Developed custom ML models using TensorFlow for health analytics.'
    }
  ];

  const achievements = [
    '1M+ Patient Records Managed',
    '50,000+ Daily Active Users',
    '30% Reduction in Wait Times',
    'HIPAA Certified Platform',
    'Healthcare Innovation Award 2023'
  ];

  const testimonial = {
    quote: "This platform has revolutionized how we deliver healthcare. Our patient satisfaction scores have increased by 45%.",
    author: "Dr. Michael Chen",
    position: "Medical Director, HealthFirst Hospital",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
  };

  const stats = [
    { label: 'Active Hospitals', value: '200+' },
    { label: 'Daily Consultations', value: '5,000+' },
    { label: 'Patient Satisfaction', value: '98%' },
    { label: 'Response Time', value: '<2min' }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Healthcare App</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A comprehensive healthcare management system revolutionizing patient care through technology.
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
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
              alt="Healthcare App"
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
            Our Healthcare App is built using React Native for cross-platform mobile support, with a 
            Node.js backend and MongoDB for data storage. The platform implements HIPAA-compliant 
            security measures, including end-to-end encryption for all patient data and secure 
            authentication protocols.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The telemedicine feature utilizes WebRTC for real-time video consultations, while our 
            AI-powered symptom analysis system uses TensorFlow for predictive analytics. The entire 
            system is hosted on HIPAA-compliant cloud infrastructure with automated scaling and 
            redundancy measures.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Healthcare;
