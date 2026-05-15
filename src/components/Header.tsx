import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/Mcoop 6 2.png"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Legal', href: '#' },
  ];

  return (
    <header className="absolute top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="MCOOP Logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-emerald-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-emerald-800">
              Login
            </a>
            <div className="w-px h-6 bg-gray-300"></div>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-[#114C3B] hover:bg-[#0a3327] transition-colors"
            >
              Join MCOOP
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-800 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-24 left-0 w-full shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-emerald-800 hover:bg-emerald-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-4 px-3">
              <a href="#" className="text-base font-medium text-gray-800 hover:text-emerald-800">
                Login
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#114C3B] hover:bg-[#0a3327]"
              >
                Join MCOOP
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
