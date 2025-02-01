import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Careers.css";
import { FaBriefcase, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Careers = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const careers = [
    {
      title: "Web Development",
      experience: "6+ months",
      requirements: [
        "Strong knowledge of HTML, CSS, and JavaScript",
        "Experience with React or similar frameworks",
        "Understanding of responsive design principles",
      ],
      location: "Remote/On-site",
      icon: "💻",
    },
    {
      title: "SEO Executive",
      experience: "6+ months",
      requirements: [
        "Experience in keyword research and optimization",
        "Knowledge of SEO tools and analytics",
        "Content optimization skills",
      ],
      location: "Remote/On-site",
      icon: "🔍",
    },
    {
      title: "Graphic Designer",
      experience: "6+ months",
      requirements: [
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio of design work",
        "Understanding of brand guidelines",
      ],
      location: "Remote/On-site",
      icon: "🎨",
    },
    {
      title: "Social Media Executive",
      experience: "6+ months",
      requirements: [
        "Experience managing social media platforms",
        "Content creation skills",
        "Knowledge of social media analytics",
      ],
      location: "Remote/On-site",
      icon: "📱",
    },
    {
      title: ".Net Developer",
      experience: "6+ months",
      requirements: [
        "Strong C# and .NET Framework knowledge",
        "Experience with ASP.NET",
        "Database management skills",
      ],
      location: "Remote/On-site",
      icon: "⚡",
    },
    {
      title: "Sales Executive",
      experience: "6+ months",
      requirements: [
        "Strong communication skills",
        "Experience in B2B sales",
        "Target-driven mindset",
      ],
      location: "Remote/On-site",
      icon: "📈",
    },
    {
      title: "Sales Manager",
      experience: "6+ months",
      requirements: [
        "Team management experience",
        "Strategic planning skills",
        "Revenue growth track record",
      ],
      location: "Remote/On-site",
      icon: "👥",
    },
    {
      title: "Business Development Executive",
      experience: "6+ months",
      requirements: [
        "Market research skills",
        "Client relationship management",
        "Business strategy development",
      ],
      location: "Remote/On-site",
      icon: "🚀",
    },
  ];

  return (
    <div className="careers-container">
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black z-0" data-aos="fade-down">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            alt="Careers Banner"
            className="w-full h-full bg-black object-cover opacity-50 "
          />
          <div className="banner-content">
            <h1>Join Our Team</h1>
            <p className="text-white">Build Your Career With Us</p>
          </div>
        </div>
      </section>

      <div className="careers-grid">
        {careers.map((career, index) => (
          <div
            className="career-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="career-card-header">
              <span className="career-icon">{career.icon}</span>
              <h3>{career.title}</h3>
            </div>

            <div className="career-info">
              <div className="info-item">
                <FaClock className="info-icon" />
                <span>{career.experience}</span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>{career.location}</span>
              </div>
            </div>

            <div className="requirements">
              <h4>Requirements:</h4>
              <ul>
                {career.requirements.map((req, idx) => (
                  <li key={idx}>
                    <span className="bullet">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate('/careers/apply')}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
