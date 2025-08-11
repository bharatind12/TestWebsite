import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <>
      {/* Spacer div to push content down when navbar is fixed */}
      <div className="h-16"></div>
      
      <nav className="bg-gradient-to-r from-white via-orange-50/50 to-orange-100/60 shadow-lg border-b border-orange-200/60 fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        {/* Decorative background elements matching your theme */}
        <div className="absolute top-0 right-0 w-32 h-16 bg-gradient-to-bl from-orange-200/10 to-orange-100/5 rounded-full translate-x-16 -translate-y-8"></div>
        <div className="absolute top-0 left-0 w-24 h-16 bg-gradient-to-br from-orange-100/8 to-orange-50/5 rounded-full -translate-x-12 -translate-y-8"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section - Optimized */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center group">
                  <div className="relative">
                    <img
                      src={logo} 
                      alt="Praxora Robotics Logo"
                      className="h-10 w-auto mr-3 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300" 
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-400/0 to-orange-300/0 group-hover:from-orange-400/10 group-hover:to-orange-300/5 transition-all duration-300"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 text-xl font-black bg-gradient-to-r from-slate-900 to-orange-800 bg-clip-text text-transparent group-hover:from-orange-800 group-hover:to-orange-700 transition-all duration-300">
                      Praxora Robotics
                    </span>
                    <div className="flex items-center mt-0.5">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full group-hover:w-8 transition-all duration-300"></div>
                      <div className="w-0.5 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-1"></div>
                      <div className="w-3 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full group-hover:w-4 transition-all duration-300"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="group relative text-slate-800 hover:text-orange-700 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/70 hover:shadow-sm"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400/0 to-orange-300/0 group-hover:from-orange-400/5 group-hover:to-orange-300/5 transition-all duration-300"></div>
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold ml-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get in Touch
                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full -translate-y-4 translate-x-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Mobile menu button - Enhanced */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative inline-flex items-center justify-center p-2.5 rounded-lg text-slate-800 hover:text-orange-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 hover:shadow-sm"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400/0 to-orange-300/0 group-hover:from-orange-400/10 group-hover:to-orange-300/5 transition-all duration-300"></div>
                {isOpen ? (
                  <XMarkIcon className="block h-5 w-5 relative z-10" />
                ) : (
                  <Bars3Icon className="block h-5 w-5 relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isOpen && (
          <div className="md:hidden border-t border-orange-200/60 bg-gradient-to-br from-white via-orange-50/40 to-orange-100/50 backdrop-blur-md shadow-lg">
            <div className="px-4 pt-4 pb-4 space-y-2 sm:px-6 relative">
              {/* Decorative element for mobile menu */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-200/10 to-orange-100/5 rounded-full translate-x-8 -translate-y-8"></div>
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group relative text-slate-800 hover:text-orange-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/70 block px-4 py-3 rounded-lg text-base font-bold transition-all duration-300 border border-transparent hover:border-orange-200/60 hover:shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400/0 to-orange-300/0 group-hover:from-orange-400/5 group-hover:to-orange-300/5 transition-all duration-300"></div>
                </Link>
              ))}
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white block px-4 py-3 rounded-lg text-base font-semibold mt-4 mx-1 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get in Touch
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full -translate-y-6 translate-x-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
