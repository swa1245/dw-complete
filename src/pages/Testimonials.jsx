import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: 'Mark Thompson',
      role: 'CEO, Tech Solutions Inc.',
      company: 'Tech Solutions Inc.',
      image: 'https://via.placeholder.com/150x150',
      content: "DW Innovation transformed our business with their innovative solutions. Their team's expertise and dedication to excellence is unmatched.",
      rating: 5,
    },
    {
      name: 'Rachel Chen',
      role: 'CTO, E-commerce Pro',
      company: 'E-commerce Pro',
      image: 'https://via.placeholder.com/150x150',
      content: "Working with DW Innovation was a game-changer for our e-commerce platform. Their technical expertise and attention to detail exceeded our expectations.",
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Director of Operations',
      company: 'Global Manufacturing Ltd.',
      image: 'https://via.placeholder.com/150x150',
      content: "The ERP system developed by DW Innovation streamlined our operations and increased efficiency by 40%. Excellent work!",
      rating: 5,
    },
    {
      name: 'Sarah Miller',
      role: 'Marketing Manager',
      company: 'Digital Marketing Agency',
      image: 'https://via.placeholder.com/150x150',
      content: "Their web development team created a beautiful, high-performing website that helped us increase our conversion rates significantly.",
      rating: 5,
    },
    {
      name: 'David Brown',
      role: 'Founder',
      company: 'HealthTech Solutions',
      image: 'https://via.placeholder.com/150x150',
      content: "The mobile app developed by DW Innovation has received outstanding feedback from our users. Their team's commitment to quality is impressive.",
      rating: 5,
    },
    {
      name: 'Emily Zhang',
      role: 'IT Director',
      company: 'Financial Services Co.',
      image: 'https://via.placeholder.com/150x150',
      content: "DW Innovation's IT infrastructure solutions have greatly improved our system's reliability and security. Highly recommended!",
      rating: 5,
    },
  ];

  const stats = [
    { number: '95%', label: 'Client Satisfaction' },
    { number: '200+', label: 'Projects Delivered' },
    { number: '50+', label: 'Active Clients' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary w-screen  text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl">
              See what our clients say about working with us.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
                data-aos="fade-up"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-lg shadow-lg p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-primary">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and experience the difference our solutions can make.
          </p>
          <a href="/contact" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
