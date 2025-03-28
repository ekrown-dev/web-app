'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function SystemAdministrationPage() {
  return (
    <div className="min-h-screen bg-[#040B24] text-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/sysadmin-hero.jpg"
          alt="System Administration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#040B24]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center">System Administration Services</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Comprehensive System Management</h2>
            <p className="text-gray-300 mb-6">
              Our expert system administration services ensure your infrastructure runs at peak performance.
              We provide:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                24/7 System Monitoring
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Server Management & Maintenance
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Backup & Disaster Recovery
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Security Management
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/server-room.jpg"
              alt="Modern Server Room"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#0A0F2C] p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Proactive Monitoring</h3>
            <p className="text-gray-300">
              24/7 system monitoring with instant alerts and automated responses to potential issues.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#0A0F2C] p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Security Management</h3>
            <p className="text-gray-300">
              Comprehensive security protocols including updates, patches, and threat prevention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-[#0A0F2C] p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Performance Optimization</h3>
            <p className="text-gray-300">
              Regular maintenance and optimization to ensure peak system performance.
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Link 
            href="/#contact"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
} 