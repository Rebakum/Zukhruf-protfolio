import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ZukhrufLogo from "../assets/images/Zukhruf logo.png";
import Zukhruficon from "../assets/images/Zukhruf icon.png";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Case Study", path: "/CaseStudy" },
    // { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b py-1 border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo on Left */}
          <div className="flex-shrink-0">
            <Link to="/" className="block focus:outline-none">
              <img src={ZukhrufLogo} alt="Zukhruf Logo" className="hidden lg:block h-10 w-auto" />
              <img src={Zukhruficon} alt="Zukhruf Icon" className="lg:hidden h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Links (Centered) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[16px] tracking-tight front-semibold transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E10F0F] after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === item.path
                    ? "text-[#E10F0F] after:w-full"
                    : "text-black  hover:text-[#E10F0F]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button on Right */}
          <div className="hidden sm:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[16px] font-bold py-3.5 px-8 rounded-lg transition-all duration-300 shadow-md shadow-red-500/10 hover:shadow-xl hover:shadow-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:scale-[1.05] active:scale-[0.98]"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-[#E10F0F] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E10F0F]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 stroke-[2]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl py-4 px-6 space-y-3 absolute top-full left-0 w-full z-40 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-[16px] font-bold tracking-tight transition-all duration-200 hover:pl-4 ${
                  location.pathname === item.path
                    ? "bg-red-50 text-[#E10F0F]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#E10F0F]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 flex justify-center">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E10F0F] hover:bg-[#C90D0D] text-white text-[16px] font-bold py-3.5 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Hire Me
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
});
