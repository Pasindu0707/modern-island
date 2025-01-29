import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import fullimage from '../assets/fullimageband.jpg';
import fullimage1 from '../assets/fullimage2.jpg';
import fullimage3 from '../assets/fullimage3.jpg';

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [fullimage, fullimage1, fullimage3];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Automatically switch images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative text-white h-screen flex items-center justify-center">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </AnimatePresence>
      </div>

      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: '#00000000' }, // Transparent to show background images
          },
          particles: {
            color: { value: '#ffffff' },
            links: { enable: true, color: '#ffffff', distance: 150 },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
          },
        }}
        className="absolute inset-0 z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-1"></div>

      {/* Hero Content */}
      <motion.div
        className="text-center z-10 px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Welcome to Modern Island
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Experience music like never before. Live the rhythm, feel the vibe.
        </motion.p>
        <motion.a
          href="#events"
          className="px-6 py-3 bg-yellow-400 text-black rounded-full text-sm sm:text-lg font-semibold hover:bg-yellow-500 hover:shadow-lg transition button-hover-effect"
          whileHover={{ scale: 1.1 }}
        >
          Explore Events
        </motion.a>
      </motion.div>
    </div>
  );
}

export default HeroSection;
