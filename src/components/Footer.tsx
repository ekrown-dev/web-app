import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-navy-900 py-12 border-t border-navy-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">eKROWN | Technologies</h3>
            <p className="text-gray-300 mb-4">
              Professional IT solutions for modern enterprises.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-secondary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-blue-secondary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-blue-secondary transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-blue-secondary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>3 rue des Tulipes</li>
              <li>31170 GRADIGNAN</li>
              <li>FRANCE</li>
              <li>contact@ekrown.com</li>
              <li>+33 6550000000</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 eKROWN Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/ekrown-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-secondary transition"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-secondary transition"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-secondary transition"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 