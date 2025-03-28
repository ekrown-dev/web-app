'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function DevOpsPage() {
  return (
    <div className="min-h-screen bg-[#040B24] text-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/devops-hero.jpg"
          alt="DevOps Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#040B24]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center">DevOps Solutions</h1>
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
            <h2 className="text-3xl font-bold mb-6">Streamlined Development Operations</h2>
            <p className="text-gray-300 mb-6">
              Our DevOps services bridge the gap between development and operations, enabling faster 
              delivery and improved collaboration. We specialize in:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                CI/CD pipeline implementation
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Infrastructure as Code (IaC)
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Container orchestration with Kubernetes
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                Automated testing and deployment
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
              src="/devops-pipeline.jpg"
              alt="DevOps Pipeline Visualization"
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
            <h3 className="text-xl font-bold mb-4">Continuous Integration</h3>
            <p className="text-gray-300">
              Automated build and test processes to ensure code quality and reduce integration issues.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#0A0F2C] p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Continuous Deployment</h3>
            <p className="text-gray-300">
              Streamlined deployment processes with automated rollback capabilities and zero downtime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-[#0A0F2C] p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Infrastructure Management</h3>
            <p className="text-gray-300">
              Cloud-native infrastructure management with scalability and security built-in.
            </p>
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 bg-[#0A0F2C] p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-[#040B24] rounded-lg">
              <div className="relative h-16 w-full mx-auto mb-2 flex items-center justify-center">
                <Image
                  src="/images/docker-logo.png"
                  alt="Docker"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-gray-300">Docker</p>
            </div>
            <div className="text-center p-4 bg-[#040B24] rounded-lg">
              <div className="relative h-16 w-full mx-auto mb-2 flex items-center justify-center">
                <Image
                  src="/images/kubernetes-logo.png"
                  alt="Kubernetes"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-gray-300">Kubernetes</p>
            </div>
            <div className="text-center p-4 bg-[#040B24] rounded-lg">
              <div className="relative h-16 w-full mx-auto mb-2 flex items-center justify-center">
                <Image
                  src="/images/jenkins-logo.png"
                  alt="Jenkins"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-gray-300">Jenkins</p>
            </div>
            <div className="text-center p-4 bg-[#040B24] rounded-lg">
              <div className="relative h-16 w-full mx-auto mb-2 flex items-center justify-center">
                <Image
                  src="/images/terra-logo.png"
                  alt="Terraform"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-gray-300">Terraform</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Link 
            href="/#contact"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Start Your DevOps Journey
          </Link>
        </div>
      </div>
    </div>
  );
} 