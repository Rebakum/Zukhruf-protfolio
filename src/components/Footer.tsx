import React from "react";
import { Link } from "react-router-dom";
import Zukhruficon from "../assets/images/Zukhruf icon.png";
import ZukhrufLogo from "../assets/images/Zukhruf logo.png";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ChevronUp } from "lucide-react";

export const Footer: React.FC = React.memo(() => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Logo Design", path: "/services" },
    { name: "Brand Identity", path: "/services" },
    { name: "Packaging Design", path: "/services" },
    { name: "Social Media Design", path: "/services" },
    { name: "Print Design", path: "/services" },
    { name: "Merchandise Design", path: "/services" },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0F19] text-slate-300 border-t border-slate-900 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-6 text-left">
            <div className="md:hidden">
              <img src={Zukhruficon} alt="Zukhruf Icon" loading="lazy" className="h-12 w-auto" />
            </div>
            <div className="hidden md:block">
              <img src={ZukhrufLogo} alt="Zukhruf Logo" loading="lazy" className="h-14 w-auto" />
            </div>
            <p className="text-[16px] leading-relaxed text-slate-400 font-medium max-w-xs">
              Helping businesses build powerful brands through creative and strategic design.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-1">
              {[
                { icon: <Facebook className="w-4.5 h-4.5" />, href: "https://facebook.com" },
                { icon: <Twitter className="w-4.5 h-4.5" />, href: "https://twitter.com" },
                { icon: <Instagram className="w-4.5 h-4.5" />, href: "https://instagram.com" },
                { icon: <Linkedin className="w-4.5 h-4.5" />, href: "https://linkedin.com" },
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#E10F0F] hover:bg-[#E10F0F] transition-all duration-300"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left space-y-5">
            <h4 className="text-[18px] md:text-[20px] font-extrabold tracking-[0.2em] text-white uppercase font-display">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[16px] font-medium text-slate-400 hover:text-white hover:pl-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="text-left space-y-5">
            <h4 className="text-[18px] md:text-[20px] font-extrabold tracking-[0.2em] text-white uppercase font-display">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((svc, i) => (
                <li key={i}>
                  <Link
                    to={svc.path}
                    className="text-[16px] font-medium text-slate-400 hover:text-white hover:pl-1 transition-all duration-200 inline-block"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="text-left space-y-5">
            <h4 className="text-[18px] md:text-[20px] font-extrabold tracking-[0.2em] text-white uppercase font-display">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#E10F0F]" />
                </div>
                <span className="text-[16px] font-medium text-slate-400">+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#E10F0F]" />
                </div>
                <span className="text-[16px] font-medium text-slate-400">hello@zukhruf.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#E10F0F]" />
                </div>
                <span className="text-[16px] font-medium text-slate-400">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[16px] font-medium text-slate-500 text-center sm:text-left">
            &copy; 2025 Zukhruf. All rights reserved.
          </p>

          {/* Scroll To Top Button */}
          <button
            onClick={handleScrollTop}
            aria-label="Scroll to top"
            className="w-11 h-11 rounded-full bg-[#E10F0F] hover:bg-[#C90D0D] text-white flex items-center justify-center transition-all duration-300 shadow-md shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:scale-110 active:scale-90 cursor-pointer"
          >
            <ChevronUp className="w-5 h-5 stroke-[3]" />
          </button>
        </div>
      </div>
    </footer>
  );
});
