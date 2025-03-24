'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Network Engineer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Lam Jean-Baptiste',
    role: 'System Administrator',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'David Smith',
    role: 'DevOps Engineer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-white text-center mb-12"
        >
          Meet Our Team
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-[#040B24]/80 rounded-lg overflow-hidden group relative"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040B24] to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              <motion.div 
                className="p-6 text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-medium text-white mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 