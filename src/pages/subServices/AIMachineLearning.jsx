import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './AIMachineLearning.css';

const AIMachineLearning = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const aiServices = [
    {
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for object detection, recognition, and tracking.',
      image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2070',
      icon: '👁️',
      features: ['Object Detection', 'Facial Recognition', 'Video Analytics', 'Scene Understanding']
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis and language understanding solutions for automated communication and insights.',
      image: 'https://plus.unsplash.com/premium_photo-1733317429945-a3688f50430b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJhbCUyMGxhbmd1YWdlJTIwcHJvY2Vzc2luZ3xlbnwwfHwwfHx8MA%3D%3D?w=2070&auto=format&fit=crop&q=60', 
      icon: '💬',
      features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Chatbots']
    }
,    
    {
      title: 'Predictive Analytics',
      description: 'Data-driven forecasting and prediction models for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
      icon: '📊',
      features: ['Demand Forecasting', 'Risk Analysis', 'Pattern Recognition', 'Time Series Analysis']
    },
    // {
    //   title: 'Deep Learning',
    //   description: 'Neural network solutions for complex pattern recognition and decision-making.',
    //   image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070',
    //   icon: '🧠',
    //   features: ['Neural Networks', 'Transfer Learning', 'Model Optimization', 'Reinforcement Learning']
    // }
  ];

  const applications = [
    {
      sector: 'Healthcare',
      icon: '🏥',
      use_cases: ['Disease Detection', 'Patient Monitoring', 'Drug Discovery', 'Medical Imaging'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070'
    },
    {
      sector: 'Finance',
      icon: '🏦',
      use_cases: ['Fraud Detection', 'Risk Assessment', 'Trading Algorithms', 'Credit Scoring'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070'
    },
    {
      sector: 'Manufacturing',
      icon: '🏭',
      use_cases: ['Quality Control', 'Predictive Maintenance', 'Process Optimization', 'Supply Chain'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070'
    },
    {
      sector: 'Retail',
      icon: '🛍️',
      use_cases: ['Customer Analytics', 'Inventory Management', 'Personalization', 'Demand Forecasting'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070'
    }
  ];

  const features = [
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions designed to address your specific business challenges.',
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070'
    },
    {
      title: 'Scalable Architecture',
      description: 'Cloud-native solutions that scale with your business needs.',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070'
    },
    {
      title: 'Real-time Processing',
      description: 'Fast and efficient processing for immediate insights and actions.',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070'
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade security measures to protect your sensitive data.',
      icon: '🔒',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070'
    }
  ];

  const technologies = [
    { name: 'TensorFlow', icon: '🧮' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Scikit-learn', icon: '🔬' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'NLTK', icon: '📝' },
    { name: 'Keras', icon: '🧠' }
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "50+", label: "Successful Projects" },
    { number: "100+", label: "Happy Clients" },
  ];

  const heroImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072';
  const description = 'Transform your business with cutting-edge artificial intelligence and machine learning solutions';

  return (
    <div className="bg-white w-screen w-screen min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="h-[60vh] relative flex items-center bg-black justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="AI & Machine Learning"
            className="w-full h-full object-cover bg-black object-center opacity-50"
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
              AI & Machine Learning
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
            className="text-4xl text-orange-500 font-bold font-['Orbitron'] tracking-wider text-center mb-16"
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
            className="text-4xl text-orange-500 font-bold font-['Orbitron'] tracking-wider text-center mb-16"
            data-aos="fade-down"
          >
            Our Solutions
          </h2>
          <div className="solutions-grid">
            {aiServices.map((solution, index) => (
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
                          className="w-5 h-5 text-blue-500 mr-2"
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
      <section className="py-20 bg-black-800">
        <div className="container mx-auto px-4">
          <div className="stats-grid">
            {applications.map((stat, index) => (
              <div
                key={index}
                className="stat-card bg-black"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="stat-number">{stat.sector}</div>
                <div className="text-gray-400">{stat.use_cases.join(', ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Stats Section */}
       <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="features-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="feature-card bg-black"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
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
            <h2 className="text-4xl font-bold font-['Orbitron'] tracking-wider mb-6" data-aos="fade-down">
              Ready to Transform Your Business?
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Let's work together to bring your vision to life with our
              innovative AI solutions.
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
      </section>
    </div>
  );
};

export default AIMachineLearning;
