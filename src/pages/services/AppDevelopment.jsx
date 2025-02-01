import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../ServicePage.css';

const AppDevelopment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const features = [
    {
      title: 'Native Development',
      description: 'High-performance native apps for iOS and Android platforms.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Cross-Platform',
      description: 'Unified apps that work seamlessly across all platforms.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'Integration',
      description: 'Seamless integration with existing systems and APIs.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const process = [
    {
      title: 'Strategy',
      description: 'Define app goals, target audience, and core features.'
    },
    {
      title: 'Design',
      description: 'Create intuitive UI/UX designs and user flows.'
    },
    {
      title: 'Development',
      description: 'Build the app using latest technologies and best practices.'
    },
    {
      title: 'Testing & Launch',
      description: 'Rigorous testing and successful app store deployment.'
    }
  ];

  const benefits = [
    {
      title: 'Market Reach',
      description: 'Expand your reach to mobile users.'
    },
    {
      title: 'User Engagement',
      description: 'Keep users engaged with native features.'
    },
    {
      title: 'Performance',
      description: 'Fast and responsive app experience.'
    },
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge mobile tech.'
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-content">
          <h1 className="service-title">Mobile App Development</h1>
          <p className="service-subtitle">
            Create powerful mobile experiences that users love
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-16"
            data-aos="fade-down"
          >
            Core Features
          </h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-16"
            data-aos="fade-down"
          >
            Development Process
          </h2>
          <div className="process-timeline">
            {process.map((step, index) => (
              <div
                key={index}
                className="timeline-item"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="timeline-content">
                  <div className="timeline-dot"></div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-16"
            data-aos="fade-down"
          >
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="cta-content">
          <h2 
            className="text-4xl font-bold mb-6"
            data-aos="fade-down"
          >
            Ready to Build Your Mobile App?
          </h2>
          <p 
            className="text-xl text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's create an app that your users will love
          </p>
          <Link
            to="/contact"
            className="cta-button"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
