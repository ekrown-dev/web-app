import { motion } from 'framer-motion';
import { WifiIcon, ServerIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Networking',
    description: 'Enterprise-grade network solutions with security and scalability in mind',
    icon: WifiIcon,
  },
  {
    title: 'System Administration',
    description: 'Professional system management and maintenance services',
    icon: ServerIcon,
  },
  {
    title: 'DevOps',
    description: 'Streamline your development and operations with modern solutions',
    icon: CommandLineIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-navy-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300"
          >
            Comprehensive IT solutions tailored to your needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-navy-700 p-6 rounded-lg hover:bg-navy-600 transition"
            >
              <service.icon className="h-12 w-12 text-blue-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 