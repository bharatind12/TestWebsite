// src/pages/Home.js
import React from 'react';
import { ShieldCheck, Handshake, Star, Lightbulb, Briefcase } from "lucide-react";
import homepagebg from '../assets/homepagebg.png';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-orange-100">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {/* Note: Replace the src with your actual image path when implementing */}
        <img
          src={homepagebg}
          alt="Underwater Robotics Background"
          className="absolute inset-0 z-0 w-full h-full min-w-full min-h-full object-cover max-w-none max-h-none"
          draggable="false"
        />

        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10 z-15">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-orange-400 to-orange-200 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent mb-4">
            <span className="block mb-2">Welcome to Praxora Robotics</span>
            <span className="block">Underwater Robotic Solutions</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto mb-4"></div>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
            Precision in depths, excellence in inspection—pioneering the future of underwater robotics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/services" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Our Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-orange-200 text-orange-100 hover:bg-orange-200 hover:text-orange-800 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Features Section - Optimized spacing */}
      <div className="py-12 bg-white shadow-xl -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-orange-600 mb-2">
              OUR VALUES
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent">
              What We Stand For
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mt-3"></div>
          </div>

          <div className="mt-8">
            {/* Grid with values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {/* Safety First */}
              <div className="group bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-5 border-2 border-slate-100 hover:border-orange-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-3 mx-auto">
                    <ShieldCheck size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 text-center mb-2">Safety First</h4>
                  <p className="text-slate-600 text-sm text-center">
                    We always put safety above everything else.
                  </p>
                </div>
              </div>

              {/* Integrity */}
              <div className="group bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-5 border-2 border-slate-100 hover:border-orange-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-3 mx-auto">
                    <Handshake size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 text-center mb-2">Integrity</h4>
                  <p className="text-slate-600 text-sm text-center">
                    We always do the right thing, no matter what.
                  </p>
                </div>
              </div>

              {/* Quality Excellence */}
              <div className="group bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-5 border-2 border-slate-100 hover:border-orange-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-3 mx-auto">
                    <Star size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 text-center mb-2">Quality Excellence</h4>
                  <p className="text-slate-600 text-sm text-center">
                    We deliver the best in everything we do.
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="group bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-5 border-2 border-slate-100 hover:border-orange-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-3 mx-auto">
                    <Lightbulb size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 text-center mb-2">Innovation</h4>
                  <p className="text-slate-600 text-sm text-center">
                    We think outside the box and create new solutions.
                  </p>
                </div>
              </div>

              {/* Ownership & Responsibility */}
              <div className="group bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-5 border-2 border-slate-100 hover:border-orange-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white mb-3 mx-auto">
                    <Briefcase size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 text-center mb-2">Ownership & Responsibility</h4>
                  <p className="text-slate-600 text-sm text-center">
                    We take ownership of our work and deliver results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center bg-gradient-to-r from-white via-orange-50 to-orange-100 shadow-xl rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-3">
              Ready to explore underwater innovations?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Discover how our advanced underwater robotics can transform your inspection and maintenance operations.
            </p>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Our Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
