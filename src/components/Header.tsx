import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import logo from "../assets/Mcoop 6 2.png";
import { ROUTES } from "../routes/paths";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", href: ROUTES.about },
    { name: "Contact", href: ROUTES.contact },
    { name: "Products", href: ROUTES.products },
    { name: "Support", href: ROUTES.support },
    { name: "Legal", href: ROUTES.legal },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-[1px_2px_25px_10px_#00000012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to={ROUTES.home} className="flex items-center gap-2">
              <img src={logo} alt="MCOOP Logo" className="h-8" />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-[#114C3B]"
                    : "text-gray-800 hover:text-[#114C3B]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to={ROUTES.login}
              className="text-[#0B3B2E] py-2.5 px-5 rounded-lg hover:text-[#114C3B] transition-colors border border-[#0B3B2E]"
            >
              Login
            </Link>
            <Link
              to={ROUTES.join}
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-[#114C3B] hover:bg-[#0a3327] transition-colors shadow-sm"
            >
              Join MCOOP
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#114C3B] focus:outline-none p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-24 left-0 w-full shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-[#114C3B] hover:bg-emerald-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-4 px-3">
              <Link
                to={ROUTES.search}
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 text-base font-medium text-gray-800 hover:text-[#114C3B] py-2 border border-gray-200 rounded-lg"
              >
                <Search className="w-5 h-5" /> Search
              </Link>
              <Link
                to={ROUTES.login}
                onClick={closeMenu}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#114C3B] hover:bg-[#0a3327]"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
