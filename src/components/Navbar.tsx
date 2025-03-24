import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-navy-900/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="eKROWN Technologies" width={40} height={40} />
          <span className="text-xl font-bold">eKROWN | Technologies</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-blue-secondary transition">
            Home
          </Link>
          <Link href="#services" className="text-white hover:text-blue-secondary transition">
            Services
          </Link>
          <Link href="#team" className="text-white hover:text-blue-secondary transition">
            Team
          </Link>
          <Link href="#contact" className="text-white hover:text-blue-secondary transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 