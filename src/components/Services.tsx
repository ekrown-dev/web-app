'use client';

import { motion } from 'framer-motion';
import { ServerIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Networking",
    description: "Enterprise-grade networking solutions with high availability and security",
    icon: ServerIcon,
  },
  {
    title: "System Administration",
    description: "Expert system management and maintenance for optimal performance",
    icon: CpuChipIcon,
  },
  {
    title: "DevOps",
    description: "Streamlined development and operations with modern practices",
    icon: CommandLineIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#040B24]/80 p-6 rounded-lg hover:bg-[#040B24]/95 transition-colors duration-300"
            >
              <service.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 