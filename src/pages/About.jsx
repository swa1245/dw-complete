import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "./About.css";
import Card from "../components/Card";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "30+", label: "Team Members" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "Pushing boundaries and embracing new technologies to deliver cutting-edge solutions.",
      features: [
        "Emerging Technologies",
        "Creative Solutions",
        "Forward Thinking",
      ],
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500&auto=format",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "Committed to delivering the highest quality in everything we do.",
      features: [
        "Quality Assurance",
        "Best Practices",
        "Continuous Improvement",
      ],
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description:
        "Working together to achieve extraordinary results for our clients.",
      features: ["Team Synergy", "Client Partnership", "Open Communication"],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Our journey began with a small team of passionate innovators in Silicon Valley. Starting with just 5 dedicated members, we set out to revolutionize digital solutions. Within our first year, we successfully delivered cutting-edge projects for startups and established enterprises alike, laying the foundation for our future growth. Our commitment to excellence and client satisfaction quickly earned us recognition in the tech community.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format",
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "A pivotal moment in our growth as we expanded beyond borders, establishing offices in key tech hubs across Asia, Europe, and North America. Our team grew to over 100 talented professionals from diverse backgrounds, bringing together a wealth of global perspectives and expertise. We introduced innovative remote collaboration tools and agile methodologies, enabling seamless project delivery across time zones while maintaining our high standards of quality.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60",
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Achieved a major milestone as we were recognized as an industry leader in digital transformation. Our innovative solutions have impacted over 500 businesses worldwide, earning multiple prestigious awards including 'Tech Innovator of the Year' and 'Best Digital Solutions Provider'. We've pioneered new approaches in AI and cloud technologies, published groundbreaking research papers, and actively contributed to open-source communities. Our team has grown to 200+ experts, serving Fortune 500 companies while maintaining our commitment to helping startups thrive.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=500&auto=format",
    },
  ];

  return (
    <div className="w-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1080&auto=format&fit=crop&q=60"
            alt="About Hero"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Orbitron'] tracking-wider mb-4 sm:mb-6 text-white"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            About Us
          </h1>
          <p
            className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-gray-200"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Transforming businesses through innovative technology solutions and
            exceptional service
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-300 -mt-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-xl bg-dark-900 text-center transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-400 mb-2">
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

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Orbitron'] tracking-wider text-center mb-8 sm:mb-12 lg:mb-16 text-white"
            data-aos="fade-down"
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                {...value}
                delay={index * 100}
                variant="value"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Orbitron'] tracking-wider text-center mb-8 sm:mb-12 lg:mb-16 text-orange-600"
            data-aos="fade-down"
          >
            Our Journey
          </h2>
          <div className="space-y-12 sm:space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0 ? "sm:order-1" : "sm:order-2"
                  }`}
                >
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  </div>
                </div>
                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0 ? "sm:order-2" : "sm:order-1"
                  } text-center sm:text-left`}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-400 mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-dark-900">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {milestone.description}
                  </p>
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

export default About;
