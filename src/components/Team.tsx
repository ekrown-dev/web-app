import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Network Architect',
    image: '/images/team/sarah.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Systems Engineer',
    image: '/images/team/michael.jpg',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300"
          >
            Expert professionals ready to solve your IT challenges
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-navy-800 rounded-lg overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-secondary">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 