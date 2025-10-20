import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = ({ images, interval = 5000, altTexts = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  const getAltText = (index) => {
    const defaultAlts = [
      'Ethos - Toca Experience',
      'Trajetória - Toca Experience',
      'Experiências - Toca Experience',
      'Mídia - Toca Experience',
      'Tony Monteiro - Toca Experience'
    ];
    return altTexts[index] || defaultAlts[index] || 'Toca Experience Carousel';
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={getAltText(currentIndex)}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Carousel;

