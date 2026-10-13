import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  ArrowUpRight,
  ArrowUp,
} from 'lucide-react';
import logo from '../assets/pra-logo.png';

/* Custom X (formerly Twitter) icon — Lucide doesn't ship the new X logo */
const XIcon = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Careers', href: '/careers' },
];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: XIcon, href: '#', label: 'X' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#EDF0EF] text-neutral-900">
      {/* Solid orange accent bar — mirrors Navbar */}
      <div className="h-[2px] w-full bg-orange-500"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 pb-12 border-b border-neutral-300">
          {/* Brand */}
          <div className="md:col-span-5 md:pr-8">
            <Link to="/" className="inline-flex items-center mb-4">
              <img
                src={logo}
                alt="Praxora Robotics"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-neutral-600 text-sm leading-relaxed max-w-xs mb-6">
              Exploring the depths with precision. Delivering advanced underwater robotic
              solutions for inspection, maintenance, and research.
            </p>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group w-9 h-9 flex items-center justify-center bg-white border border-neutral-300 hover:bg-orange-600 hover:border-orange-500 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4 text-neutral-600 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3 md:border-l md:border-neutral-300 md:px-8">
            <h3 className="text-[10px] font-bold tracking-[0.22em] text-orange-600 mb-5">
              NAVIGATE
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-600 hover:text-orange-600 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500/50 group-hover:bg-orange-500"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 md:border-l md:border-neutral-300 md:pl-8">
            <h3 className="text-[10px] font-bold tracking-[0.22em] text-orange-600 mb-5">
              CONNECT
            </h3>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-neutral-600 leading-snug">
                  Ganga Acropolis, Baner,
                  <br />
                  Pune, Maharashtra - 411021
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <a
                  href="tel:+917887889173"
                  className="text-sm text-neutral-600 hover:text-orange-600 transition-colors"
                >
                  +91 7887889173
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <a
                  href="mailto:praxorarobotics@gmail.com"
                  className="text-sm text-neutral-600 hover:text-orange-600 transition-colors"
                >
                  praxorarobotics@gmail.com
                </a>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 mt-6 px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-black text-sm font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300"
            >
              Discuss a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Praxora Robotics Pvt Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-neutral-500 hover:text-orange-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-neutral-500 hover:text-orange-600 transition-colors"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-neutral-400 hover:border-orange-500 hover:bg-orange-50 text-[11px] font-bold tracking-wider text-neutral-700 hover:text-orange-600 transition-all duration-300"
            >
              BACK TO TOP
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;