import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../ServicePage.css';

const WebDevelopment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const features = [
    {
      title: 'Custom Development',
      description: 'Tailor-made websites that perfectly match your business needs.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Responsive Design',
      description: 'Websites that look and work perfectly on all devices.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'E-Commerce',
      description: 'Full-featured online stores with secure payment processing.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'SEO Optimization',
      description: 'Built-in SEO best practices for maximum visibility.',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  const process = [
    {
      title: 'Discovery',
      description: 'Understanding your business goals and requirements.'
    },
    {
      title: 'Design',
      description: 'Creating beautiful and functional website designs.'
    },
    {
      title: 'Development',
      description: 'Building your website with cutting-edge technologies.'
    },
    {
      title: 'Launch',
      description: 'Deploying and optimizing your website for performance.'
    }
  ];

  const benefits = [
    {
      title: 'Brand Growth',
      description: 'Establish a strong online presence.'
    },
    {
      title: 'User Experience',
      description: 'Intuitive navigation and engagement.'
    },
    {
      title: 'Performance',
      description: 'Fast-loading, optimized websites.'
    },
    {
      title: 'Conversion',
      description: 'Design focused on converting visitors.'
    }
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-hero-content">
          <h1 className="service-title">Web Development</h1>
          <p className="service-subtitle">
            Create stunning, responsive websites that drive results
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
            Ready to Build Your Dream Website?
          </h2>
          <p 
            className="text-xl text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's create a website that sets you apart from the competition
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

export default WebDevelopment;
