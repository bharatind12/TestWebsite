import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Headset, Phone, MessageCircle, Send } from 'lucide-react';
import logo from '../assets/pra-logo.png';

// Solution category images
import bridgeImg from '../assets/Solution/Solution IMG/bridge-2.png';
import tunnelImg from '../assets/Solution/Solution IMG/tunnel-1.png';
import portImg from '../assets/Solution/Solution IMG/port-1.png';
import pipelineImg from '../assets/Solution/Solution IMG/pipeline-1.png';
import damImg from '../assets/Solution/Solution IMG/dam-2.png';
import shipHullImg from '../assets/Solution/Solution IMG/ship-hull-1.png';
import defenceImg from '../assets/Solution/Solution IMG/defence-1.png';
import searchRescueImg from '../assets/Solution/Solution IMG/search-rescue-1.png';
import marineResearchImg from '../assets/Solution/Solution IMG/marine-research-1.png';
import waterTanksImg from '../assets/Solution/Solution IMG/water-tanks-1.png';
import powerPlantImg from '../assets/Solution/Solution IMG/power-plant-1.png';
import offshoreImg from '../assets/Solution/Solution IMG/offshore-1.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Solutions',
    href: '/solutions',
    children: [
      { name: 'Bridges', title: 'Bridges', image: bridgeImg, desc: 'Piers, piles & submerged foundations' },
      { name: 'Tunnels', title: 'Underwater Tunnel & Conduit Inspection', image: tunnelImg, desc: 'Submerged & water-filled passages' },
      { name: 'Ports & Marine', title: 'Ports, Harbours & Marine Structures', image: portImg, desc: 'Quay walls, jetties & berthing' },
      { name: 'Pipelines', title: 'Submerged Pipeline Inspection', image: pipelineImg, desc: 'External pipeline visual evidence' },
      { name: 'Dams & Hydropower', title: 'Dams, Reservoirs & Hydropower', image: damImg, desc: 'Submerged dam faces & intakes' },
      { name: 'Ship Hull', title: 'Ship Hull & Vessel Inspection', image: shipHullImg, desc: 'Underwater hull visual inspection' },
      { name: 'Defence & Naval', title: 'Defence & Naval Applications', image: defenceImg, desc: 'Remote naval asset observation' },
      { name: 'Search & Rescue', title: 'Search, Rescue & Underwater Recovery Support', image: searchRescueImg, desc: 'Underwater search operations' },
      { name: 'Marine Research', title: 'Marine Research & Environmental Observation', image: marineResearchImg, desc: 'Underwater visual data collection' },
      { name: 'Water Tanks', title: 'Water Tanks & Utility Infrastructure', image: waterTanksImg, desc: 'Storage structure inspection' },
      { name: 'Power Plants', title: 'Industrial & Power Plant Infrastructure', image: powerPlantImg, desc: 'Industrial water systems' },
      { name: 'Offshore & Subsea', title: 'Offshore & Subsea Infrastructure', image: offshoreImg, desc: 'Subsea assets & foundations' },
    ],
  },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

const connectOptions = [
  { label: 'Call Us', sub: '+91 78878 89173', href: 'tel:+917887889173', Icon: Phone },
  { label: 'WhatsApp', sub: 'Chat with us', href: 'https://wa.me/917887889173', Icon: MessageCircle, external: true },
  { label: 'Send Enquiry', sub: 'Via contact form', href: '/contact#contact-form', Icon: Send },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const connectRef = useRef(null);
  const solutionsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileSolutionsOpen(false);
    setConnectOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (connectRef.current && !connectRef.current.contains(e.target)) {
        setConnectOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href) => location.pathname === href;

  return (
    <>
      <div className="h-[72px]"></div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#EDF0EF]/95 backdrop-blur-xl shadow-md border-neutral-300'
            : 'bg-[#EDF0EF]/85 backdrop-blur-md border-transparent'
        }`}
      >
        <div className="h-[2px] w-full bg-orange-500"></div>

        <nav className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[70px] relative">
            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <img
                src={logo}
                alt="Praxora Robotics"
                className="h-11 w-auto object-contain"
              />
            </Link>

            {/* Nav items — centered */}
            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navigation.map((item) => {
                const isSolutions = item.name === 'Solutions';
                return (
                  <div
                    key={item.name}
                    className="relative"
                    ref={isSolutions ? solutionsRef : null}
                    onMouseEnter={() => isSolutions && setSolutionsOpen(true)}
                    onMouseLeave={() => isSolutions && setSolutionsOpen(false)}
                  >
                    <Link
                      to={item.href}
                      className={`relative flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-orange-600'
                          : 'text-neutral-700 hover:text-orange-600'
                      }`}
                    >
                      {item.name}
                      {item.children && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isSolutions && solutionsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      )}

                      <span
                        className={`absolute left-3.5 right-3.5 bottom-0 h-[2px] bg-orange-500 origin-left transition-transform duration-300 ${
                          isActive(item.href) || (isSolutions && solutionsOpen)
                            ? 'scale-x-100'
                            : 'scale-x-0'
                        }`}
                      ></span>
                    </Link>

                    {/* ============ SOLUTIONS MEGA-MENU (3 COLUMNS) ============ */}
                    {isSolutions && (
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 z-50 ${
                          solutionsOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="bg-white shadow-2xl border border-neutral-200 p-6 w-[1080px] max-w-[calc(100vw-48px)]">
                          <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={item.href}
                                state={{ categoryTitle: child.title }}
                                onClick={() => setSolutionsOpen(false)}
                                className="group flex items-start gap-3 p-2 hover:bg-orange-50 transition-colors"
                              >
                                <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden bg-neutral-100">
                                  <img
                                    src={child.image}
                                    alt={child.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>

                                <div className="flex flex-col flex-1 min-w-0 pt-0.5">
                                  <span className="text-sm font-bold text-neutral-800 group-hover:text-orange-600 transition-colors leading-tight mb-1">
                                    {child.name}
                                  </span>
                                  <span className="text-xs text-neutral-500 leading-snug line-clamp-2">
                                    {child.desc}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Bottom bar */}
                          <div className="mt-5 pt-4 border-t border-neutral-200 flex items-center justify-between">
                            <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold">
                              12 INSPECTION CATEGORIES
                            </p>
                            <Link
                              to="/solutions"
                              onClick={() => setSolutionsOpen(false)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                            >
                              View All Solutions
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right group — Connect + hamburger */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div ref={connectRef} className="hidden lg:block relative">
                <button
                  onClick={() => setConnectOpen(!connectOpen)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-orange-600 transition-colors duration-200"
                  aria-expanded={connectOpen}
                  aria-haspopup="true"
                  aria-label="Connect"
                >
                  <Headset className="w-5 h-5 text-orange-600" strokeWidth={2} />
                  <span>Connect</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      connectOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`absolute right-0 top-full pt-3 w-72 origin-top-right transition-all duration-200 ${
                    connectOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="bg-white shadow-xl border border-neutral-200 overflow-hidden">
                    {connectOptions.map(({ label, sub, href, Icon, external }) => {
                      const isExternal = external;
                      const isTel = href.startsWith('tel:');
                      const isMail = href.startsWith('mailto:');

                      if (isTel || isExternal || isMail) {
                        return (
                          <a
                            key={label}
                            href={href}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            onClick={() => setConnectOpen(false)}
                            className="flex items-start gap-3 px-4 py-3.5 hover:bg-orange-50 transition-colors border-l-2 border-transparent hover:border-orange-500 group"
                          >
                            <div className="w-9 h-9 flex items-center justify-center bg-[#EDF0EF] group-hover:bg-orange-500 transition-colors flex-shrink-0">
                              <Icon className="w-4 h-4 text-orange-600 group-hover:text-black transition-colors" strokeWidth={1.75} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-neutral-800 group-hover:text-orange-700 transition-colors">{label}</span>
                              <span className="text-xs text-neutral-500">{sub}</span>
                            </div>
                          </a>
                        );
                      }

                      return (
                        <Link
                          key={label}
                          to={href}
                          onClick={() => setConnectOpen(false)}
                          className="flex items-start gap-3 px-4 py-3.5 hover:bg-orange-50 transition-colors border-l-2 border-transparent hover:border-orange-500 group"
                        >
                          <div className="w-9 h-9 flex items-center justify-center bg-[#EDF0EF] group-hover:bg-orange-500 transition-colors flex-shrink-0">
                            <Icon className="w-4 h-4 text-orange-600 group-hover:text-black transition-colors" strokeWidth={1.75} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-neutral-800 group-hover:text-orange-700 transition-colors">{label}</span>
                            <span className="text-xs text-neutral-500">{sub}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-neutral-700 hover:bg-neutral-200/50 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#EDF0EF] border-t border-neutral-300 ${
            isOpen ? 'max-h-[calc(100vh-72px)] overflow-y-auto' : 'max-h-0'
          }`}
        >
          <div className="px-6 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        className={`flex-1 py-3 text-base font-semibold ${
                          isActive(item.href) ? 'text-orange-600' : 'text-neutral-800'
                        }`}
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className="p-2 text-neutral-500"
                        aria-label="Toggle solutions"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            mobileSolutionsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileSolutionsOpen ? 'max-h-[1200px]' : 'max-h-0'
                      }`}
                    >
                      <div className="pl-2 pb-2 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={item.href}
                            state={{ categoryTitle: child.title }}
                            className="flex items-center gap-3 py-2 px-2 hover:bg-white/60 transition-colors"
                          >
                            <div className="relative w-10 h-10 flex-shrink-0 overflow-hidden bg-neutral-200">
                              <img
                                src={child.image}
                                alt={child.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-sm text-neutral-600 hover:text-orange-600">
                              {child.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block py-3 text-base font-semibold border-b border-neutral-300/60 ${
                      isActive(item.href) ? 'text-orange-600' : 'text-neutral-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 pb-2">
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-3">
                CONNECT
              </p>
              <div className="space-y-1">
                {connectOptions.map(({ label, sub, href, Icon, external }) => {
                  const isExternal = external;
                  const isTel = href.startsWith('tel:');
                  const isMail = href.startsWith('mailto:');

                  if (isTel || isExternal || isMail) {
                    return (
                      <a
                        key={label}
                        href={href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 px-4 py-3 bg-white border border-neutral-300/60 group"
                      >
                        <Icon className="w-4 h-4 text-orange-600 flex-shrink-0" strokeWidth={1.75} />
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-neutral-800">{label}</span>
                          <span className="text-xs text-neutral-500">{sub}</span>
                        </div>
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={label}
                      to={href}
                      className="flex items-center gap-3 px-4 py-3 bg-white border border-neutral-300/60 group"
                    >
                      <Icon className="w-4 h-4 text-orange-600 flex-shrink-0" strokeWidth={1.75} />
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-neutral-800">{label}</span>
                        <span className="text-xs text-neutral-500">{sub}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3.5 bg-orange-600 text-black font-semibold shadow-md shadow-orange-600/20"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;