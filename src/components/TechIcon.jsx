import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TechIcon = ({ name, icon, size = 'md' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = icon;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [icon]);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  if (error) {
    return (
      <div className={`${sizeClasses[size]} flex items-center justify-center bg-gray-100 rounded-lg`}>
        <span className="text-gray-400 text-xs">{name[0]}</span>
      </div>
    );
  }

  return (
    <motion.div
      className="relative group"
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={iconVariants}
    >
      {!isLoaded && (
        <div className={`${sizeClasses[size]} animate-pulse bg-gray-200 rounded-lg`} />
      )}
      {isLoaded && (
        <>
          <img
            src={icon}
            alt={`${name} icon`}
            className={`${sizeClasses[size]} object-contain transition-opacity duration-300`}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-200" />
        </>
      )}
    </motion.div>
  );
};

export default TechIcon;
