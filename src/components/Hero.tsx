import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Modern IT Solutions
              <span className="block text-blue-secondary">for Your Enterprise</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Expert networking, system administration, and DevOps services to transform your
              business infrastructure
            </p>
            <div className="flex gap-4">
              <Link
                href="#contact"
                className="bg-blue-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition"
              >
                Contact Us
              </Link>
              <Link
                href="#services"
                className="border border-blue-primary text-blue-primary hover:bg-blue-primary/10 px-8 py-3 rounded-lg transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/hero-image.png"
              alt="Modern IT Infrastructure"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 