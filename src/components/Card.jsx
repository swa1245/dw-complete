import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ 
  image, 
  icon, 
  title, 
  description, 
  features,
  year,
  delay = 0,
  variant = 'default', // 'default', 'timeline', 'value'
  to = '' // URL to navigate to
}) => {
  const CardContent = () => (
    <div className="relative overflow-hidden rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700 h-full group">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 to-dark-900/90 group-hover:opacity-75 transition-opacity duration-300"></div>

      {/* Card Media */}
      {image && (
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
        </div>
      )}

      {/* Card Body */}
      <div className="relative z-10 p-6 sm:p-8">
        {/* Year (for timeline cards) */}
        {year && (
          <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-3">
            {year}
          </div>
        )}

        {/* Icon */}
        {icon && (
          <div className="text-primary-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary-400">
          {title}
        </h3>

        {/* Description */}
        <p className="text-dark-200 text-sm sm:text-base mb-6">
          {description}
        </p>

        {/* Features List */}
        {features && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center text-sm sm:text-base text-dark-300"
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 mr-2 flex-shrink-0" 
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
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 border-2 border-primary-400 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
    </div>
  );

  return (
    <div
      className="h-full transform hover:scale-105 transition-transform duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {to ? (
        <Link to={to} className="block h-full">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.string,
  delay: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'timeline', 'value']),
  to: PropTypes.string
};

export default Card;
