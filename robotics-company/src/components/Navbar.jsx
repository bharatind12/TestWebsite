import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'Underwater ROV Inspection', title: 'Underwater ROV Inspection Services' },
        { name: 'Custom ROV Development', title: 'Custom ROV Development' },
        { name: 'Embedded Systems & Robotics R&D', title: 'Embedded Systems & Robotics R&D' },
        { name: 'Maintenance & Support', title: 'Maintenance & Post-Inspection Support' },
      ]
    },
    { name: 'Products', href: '/products' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <>
      {/* Spacer div to push content down when navbar is fixed */}
      <div className="h-16"></div>
      
      <nav className="bg-gradient-to-r from-white/90 via-cyan-50/80 to-blue-100/70 shadow-lg border-b border-cyan-200/60 fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        {/* Decorative water shimmer elements */}
        <div className="absolute top-0 right-0 w-32 h-16 bg-gradient-to-bl from-cyan-200/20 to-blue-100/10 rounded-full translate-x-16 -translate-y-8 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-24 h-16 bg-gradient-to-br from-blue-100/20 to-cyan-50/10 rounded-full -translate-x-12 -translate-y-8 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center group">
                  <div className="relative">
                    <img
                      src={logo} 
                      alt="Praxora Robotics Logo"
                      className="h-10 w-auto mr-3 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300" 
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/0 to-blue-300/0 group-hover:from-cyan-400/10 group-hover:to-blue-300/5 transition-all duration-300"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 text-xl font-black bg-gradient-to-r from-slate-900 to-cyan-800 bg-clip-text text-transparent group-hover:from-cyan-800 group-hover:to-blue-700 transition-all duration-300">
                      Praxora Robotics
                    </span>
                    {/* Animated Underline Bars */}
                    <div className="flex items-center mt-0.5">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-full group-hover:w-8 transition-all duration-300"></div>
                      <div className="w-0.5 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full mx-1"></div>
                      <div className="w-3 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full group-hover:w-4 transition-all duration-300"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className="group relative text-slate-800 hover:text-cyan-700 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-100/70 hover:shadow-sm flex items-center"
                    >
                      <span className="relative z-10 flex items-center">
                        {item.name}
                        {item.children && (
                          <ChevronDownIcon className="w-3 h-3 ml-1 stroke-2 group-hover:rotate-180 transition-transform duration-300" />
                        )}
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>

                    {/* Dropdown Menu */}
                    {item.children && (
                      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                         <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                         
                         <div className="rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 overflow-hidden border border-cyan-100">
                           <div className="py-2 bg-gradient-to-br from-white to-cyan-50/30">
                             {item.children.map((child) => (
                               <Link
                                 key={child.name}
                                 to={item.href}
                                 state={{ serviceTitle: child.title }}
                                 className="block px-4 py-3 text-sm text-slate-700 hover:bg-cyan-50 hover:text-cyan-700 transition-colors duration-200 border-l-2 border-transparent hover:border-cyan-500"
                               >
                                 {child.name}
                               </Link>
                             ))}
                           </div>
                         </div>
                      </div>
                    )}
                  </div>
                ))}
                
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold ml-4 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get in Touch
                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full -translate-y-4 translate-x-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative inline-flex items-center justify-center p-2.5 rounded-lg text-slate-800 hover:text-cyan-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-100/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 hover:shadow-sm"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/0 to-blue-300/0 group-hover:from-cyan-400/10 group-hover:to-blue-300/5 transition-all duration-300"></div>
                {isOpen ? (
                  <XMarkIcon className="block h-5 w-5 relative z-10" />
                ) : (
                  <Bars3Icon className="block h-5 w-5 relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-cyan-200/60 bg-gradient-to-br from-white via-cyan-50/90 to-blue-100/90 backdrop-blur-md shadow-lg h-screen overflow-y-auto pb-20">
            <div className="px-4 pt-4 pb-4 space-y-2 sm:px-6 relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-200/10 to-blue-100/5 rounded-full translate-x-8 -translate-y-8"></div>
              
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <div 
                        className="group relative text-slate-800 hover:text-cyan-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-100/70 flex justify-between items-center px-4 py-3 rounded-lg text-base font-bold transition-all duration-300 border border-transparent hover:border-cyan-200/60 hover:shadow-sm cursor-pointer"
                        onClick={(e) => {
                          if(mobileServicesOpen) setMobileServicesOpen(false);
                          else setMobileServicesOpen(true);
                        }}
                      >
                         <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Link 
                                to={item.href} 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsOpen(false);
                                }}
                            >
                                {item.name}
                            </Link>
                         </div>
                         <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </div>
                      
                      {/* Mobile Submenu */}
                      <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={item.href}
                              state={{ serviceTitle: child.title }}
                              onClick={() => setIsOpen(false)}
                              className="block pl-12 pr-4 py-2 text-sm text-slate-600 hover:text-cyan-700 hover:bg-cyan-50 rounded-lg border-l-2 border-transparent hover:border-cyan-300"
                            >
                              {child.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="group relative text-slate-800 hover:text-cyan-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-100/70 block px-4 py-3 rounded-lg text-base font-bold transition-all duration-300 border border-transparent hover:border-cyan-200/60 hover:shadow-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white block px-4 py-3 rounded-lg text-base font-semibold mt-4 mx-1 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get in Touch
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full -translate-y-6 translate-x-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;