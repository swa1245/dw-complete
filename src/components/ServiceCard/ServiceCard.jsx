import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-dark-900 backdrop-blur-sm border border-dark-700 transform hover:scale-105 transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Card Media */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
        <div className="absolute top-4 right-4 p-2 bg-dark-800/80 backdrop-blur-sm rounded-lg text-primary-400 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {service.icon}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 bg-dark-900">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary-400">{service.title}</h3>
        <p className="text-gray-300 text-sm sm:text-base mb-6">{service.description}</p>
        
        <Link 
          to={service.path} 
          className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300"
        >
          <span className="text-sm sm:text-base font-medium">Explore Service</span>
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
