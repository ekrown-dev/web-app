'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="/high-connectivity.png"
            alt="High Connectivity Cityscape"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040B24]/90 via-[#040B24]/60 to-[#040B24]/90" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Transforming Business Through Technology
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Innovative IT solutions that drive growth, efficiency, and success for modern enterprises
        </motion.p>
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
} 