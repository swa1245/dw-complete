import { useEffect } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './SubServices.css';

const ITConsulting = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through successful digital transformation initiatives.',
      image: 'https://img.freepik.com/free-photo/digital-transformation-concept-with-icons-devices_23-2149143925.jpg',
      features: ['Strategy Development', 'Process Optimization', 'Technology Integration']
    },
    {
      title: 'Cloud Strategy',
      description: 'Develop and implement effective cloud adoption strategies.',
      image: 'https://img.freepik.com/free-photo/cloud-technology-with-futuristic-hologram-smartwatch_53876-124625.jpg',
      features: ['Cloud Assessment', 'Migration Planning', 'Security & Compliance']
    },
    {
      title: 'Enterprise Architecture',
      description: 'Design scalable and efficient IT architectures for your enterprise.',
      image: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg',
      features: ['Architecture Design', 'System Integration', 'Performance Optimization']
    },
    {
      title: 'Technology Advisory',
      description: 'Strategic guidance on technology investments and innovation.',
      image: 'https://img.freepik.com/free-photo/business-people-meeting-plan-analysis-graph-company-finance-strat_74952-1347.jpg',
      features: ['Technology Assessment', 'Innovation Planning', 'Risk Management']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      solutions: ['EMR Systems', 'Telemedicine', 'Healthcare Analytics'],
      image: 'https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611240.jpg'
    },
    {
      name: 'Finance',
      icon: '🏦',
      solutions: ['FinTech Solutions', 'Digital Banking', 'Risk Management'],
      image: 'https://img.freepik.com/free-photo/business-people-discussing-charts_53876-102773.jpg'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      solutions: ['IoT Integration', 'Supply Chain', 'Automation'],
      image: 'https://img.freepik.com/free-photo/factory-worker-wearing-uniform-hardhat-operating-cnc-machinery_342744-214.jpg'
    },
    {
      name: 'Retail',
      icon: '🛍️',
      solutions: ['E-commerce', 'POS Systems', 'Customer Analytics'],
      image: 'https://img.freepik.com/free-photo/young-woman-shop-assistant-wearing-face-mask-while-working_637285-8675.jpg'
    }
  ];

  const methodology = [
    {
      phase: 'Discovery',
      description: 'Understanding your business needs and challenges',
      activities: ['Stakeholder Interviews', 'Process Analysis', 'Requirements Gathering'],
      icon: '🔍'
    },
    {
      phase: 'Strategy',
      description: 'Developing a comprehensive roadmap for success',
      activities: ['Solution Design', 'Technology Selection', 'Risk Assessment'],
      icon: '📋'
    },
    {
      phase: 'Implementation',
      description: 'Executing the plan with precision and expertise',
      activities: ['Project Management', 'Change Management', 'Quality Assurance'],
      icon: '⚙️'
    },
    {
      phase: 'Optimization',
      description: 'Continuous improvement and refinement',
      activities: ['Performance Monitoring', 'Process Optimization', 'Training'],
      icon: '📈'
    }
  ];

  const heroImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070';
  const description = 'Strategic technology consulting to drive your digital transformation journey';

  const features = [
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through successful digital transformation initiatives.',
      icon: '🔥'
    },
    {
      title: 'Cloud Strategy',
      description: 'Develop and implement effective cloud adoption strategies.',
      icon: '☁️'
    },
    {
      title: 'Enterprise Architecture',
      description: 'Design scalable and efficient IT architectures for your enterprise.',
      icon: '🏢'
    },
    // {
    //   title: 'Technology Advisory',
    //   description: 'Strategic guidance on technology investments and innovation.',
    //   icon: '💻'
    // }
  ];

  const solutions = [
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through successful digital transformation initiatives.',
      image: 'https://img.freepik.com/free-photo/digital-transformation-concept-with-icons-devices_23-2149143925.jpg',
      features: ['Strategy Development', 'Process Optimization', 'Technology Integration']
    },
    {
      title: 'Cloud Strategy',
      description: 'Develop and implement effective cloud adoption strategies.',
      image: 'https://img.freepik.com/free-photo/cloud-technology-with-futuristic-hologram-smartwatch_53876-124625.jpg',
      features: ['Cloud Assessment', 'Migration Planning', 'Security & Compliance']
    },
    {
      title: 'Enterprise Architecture',
      description: 'Design scalable and efficient IT architectures for your enterprise.',
      image: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg',
      features: ['Architecture Design', 'System Integration', 'Performance Optimization']
    },
    // {
    //   title: 'Technology Advisory',
    //   description: 'Strategic guidance on technology investments and innovation.',
    //   image: 'https://img.freepik.com/free-photo/business-people-meeting-plan-analysis-graph-company-finance-strat_74952-1347.jpg',
    //   features: ['Technology Assessment', 'Innovation Planning', 'Risk Management']
    // }
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "50+", label: "Successful Projects" },
    { number: "100+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="bg-gray-300 w-screen min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="h-[60vh] relative flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="IT Consulting"
            className="w-full h-full object-cover object-center"
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
              IT Consulting
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
            className="text-4xl text-black font-bold font-['Orbitron'] tracking-wider text-center mb-16"
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
          <div className="solutions-grid">
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

export default ITConsulting;
