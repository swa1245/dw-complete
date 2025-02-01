import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faqs = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = [
    { id: 'general', name: 'General', icon: '🏢' },
    { id: 'services', name: 'Services', icon: '⚡' },
    { id: 'technical', name: 'Technical', icon: '🔧' },
    { id: 'support', name: 'Support', icon: '🤝' },
    { id: 'pricing', name: 'Pricing', icon: '💰' },
  ];

  const faqs = {
    general: [
      {
        question: 'What is DW Innovation?',
        answer: 'DW Innovation is a leading technology company specializing in IT infrastructure, web development, app development, ERP systems, and custom software solutions. We help businesses transform and grow through innovative digital solutions.',
        videoUrl: '/videos/company-intro.mp4',
      },
      {
        question: 'How long has DW Innovation been in business?',
        answer: 'DW Innovation has been providing technology solutions for over 10 years, serving clients across various industries globally. Our track record includes successful partnerships with Fortune 500 companies and innovative startups alike.',
        imageUrl: '/images/timeline.jpg',
      },
      {
        question: 'Where is DW Innovation located?',
        answer: 'Our headquarters is located in Tech City, with remote teams working globally to serve our clients worldwide. We maintain offices in major tech hubs and leverage a distributed workforce to provide 24/7 support and development capabilities.',
        imageUrl: '/images/global-presence.jpg',
      },
      {
        question: 'What makes DW Innovation different?',
        answer: 'We combine cutting-edge technology expertise with a deep understanding of business needs. Our approach focuses on delivering measurable results, maintaining transparent communication, and ensuring long-term success for our clients.',
        videoUrl: '/videos/our-difference.mp4',
      },
    ],
    services: [
      {
        question: 'What services does DW Innovation offer?',
        answer: 'We offer a comprehensive range of services including:\n• IT Infrastructure Setup and Maintenance\n• Web and Mobile App Development\n• ERP System Implementation\n• Custom Software Development\n• Cloud Solutions and Migration\n• AI and Machine Learning Integration\n• Digital Transformation Consulting',
        imageUrl: '/images/services-overview.jpg',
      },
      {
        question: 'Do you provide custom solutions?',
        answer: 'Yes, we specialize in creating custom solutions tailored to our clients\' specific needs and business requirements. Our process includes detailed requirement analysis, prototype development, iterative feedback, and comprehensive testing to ensure the perfect fit for your business.',
        videoUrl: '/videos/custom-solutions.mp4',
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve clients across various industries including:\n• Healthcare\n• Finance\n• Retail\n• Manufacturing\n• Technology\n• Education\n• Logistics\n• E-commerce',
        imageUrl: '/images/industries.jpg',
      },
    ],
    technical: [
      {
        question: 'What technologies do you work with?',
        answer: 'We work with a wide range of modern technologies including:\n• Frontend: React, Vue.js, Angular\n• Backend: Node.js, Python, Java\n• Mobile: React Native, Flutter\n• Database: MongoDB, PostgreSQL, MySQL\n• Cloud: AWS, Azure, Google Cloud\n• AI/ML: TensorFlow, PyTorch',
        imageUrl: '/images/tech-stack.jpg',
      },
      {
        question: 'How do you ensure security in your solutions?',
        answer: 'We implement multiple layers of security including:\n• End-to-end encryption\n• Regular security audits\n• Compliance with industry standards (GDPR, HIPAA)\n• Secure authentication and authorization\n• Regular penetration testing',
        videoUrl: '/videos/security-measures.mp4',
      },
      {
        question: 'What is your development process?',
        answer: 'We follow an Agile development methodology with:\n• Sprint planning and daily standups\n• Regular client communications\n• Continuous integration and deployment\n• Comprehensive testing at each stage\n• Regular code reviews and quality checks',
        imageUrl: '/images/development-process.jpg',
      },
    ],
    support: [
      {
        question: 'What kind of support do you provide?',
        answer: 'We offer comprehensive support including:\n• 24/7 technical support\n• Regular maintenance and updates\n• Performance monitoring\n• Security patches\n• Training and documentation',
        videoUrl: '/videos/support-services.mp4',
      },
      {
        question: 'What are your support response times?',
        answer: 'Our support response times vary by priority:\n• Critical issues: < 1 hour\n• High priority: < 4 hours\n• Medium priority: < 8 hours\n• Low priority: < 24 hours',
        imageUrl: '/images/response-times.jpg',
      },
    ],
    pricing: [
      {
        question: 'How do you structure your pricing?',
        answer: 'We offer flexible pricing models including:\n• Project-based pricing\n• Time and materials\n• Retainer agreements\n• Subscription-based services\nEach engagement is customized based on project scope, complexity, and timeline.',
        imageUrl: '/images/pricing-models.jpg',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans including:\n• Monthly installments\n• Milestone-based payments\n• Annual contracts with quarterly billing\nWe work with clients to find the most suitable payment structure.',
        imageUrl: '/images/payment-plans.jpg',
      },
    ],
  };

  const toggleQuestion = (questionId) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {faqs[activeCategory].map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                onClick={() => toggleQuestion(`${activeCategory}-${index}`)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openQuestions[`${activeCategory}-${index}`] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openQuestions[`${activeCategory}-${index}`] && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                  {faq.videoUrl && (
                    <div className="mt-4">
                      <video
                        className="w-full rounded-lg shadow-lg"
                        controls
                        poster={faq.imageUrl}
                      >
                        <source src={faq.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {!faq.videoUrl && faq.imageUrl && (
                    <img
                      src={faq.imageUrl}
                      alt="FAQ illustration"
                      className="mt-4 w-full rounded-lg shadow-lg"
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">
            We're here to help! Contact our support team for assistance
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
