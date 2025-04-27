import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-white text-xl font-bold">Praxora Robotics</span>
            <div className="w-16 h-1 bg-orange-400 my-4"></div>
            <p className="mt-2 text-gray-400">
              Leading the future of robotics and automation with innovative solutions for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="w-12 h-1 bg-orange-400 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="w-12 h-1 bg-orange-400 mb-4"></div>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">📍</span>
                <span>Mazgaon, Murud-Janjira<br />Raigad, Maharashtra-402401</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">📞</span>
                <span>+91 7720885262/+91 8983301371</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2">✉️</span>
                <a href="mailto:praxorarobotics@gmail.com" className="hover:text-orange-400 transition-colors duration-200">
                  praxorarobotics@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Praxorarobotics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;