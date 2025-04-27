// src/pages/Home.js
import React from 'react';
import { ShieldCheck, Handshake, Star, Lightbulb, Briefcase } from "lucide-react";
import backgroundVideo from '../assets/underwater.mp4'; // Import your video file

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Background Video */}
      <div className="relative bg-gray-900 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block mb-2">Welcome to Praxora Robotics</span>
            <span className="block text-orange-400">Underwater Robotic Solutions</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
            Precision in depths, excellence in inspection—pioneering the future of underwater robotics.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <a 
              href="/services" 
              className="inline-flex items-center px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:translate-y-1"
            >
              Our Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl font-semibold text-orange-400 mb-2">
              OUR VALUES
            </h2>
            <h3 className="text-3xl font-bold text-gray-800">
              What We Stand For
            </h3>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-4"></div>
          </div>

          <div className="mt-12">
            {/* Grid with values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
              {/* Safety First */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 text-orange-500 mr-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Safety First</h4>
                </div>
                <p className="text-gray-600">
                  We always put safety above everything else.
                </p>
              </div>

              {/* Integrity */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 text-orange-500 mr-4">
                    <Handshake size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Integrity</h4>
                </div>
                <p className="text-gray-600">
                  We always do the right thing, no matter what.
                </p>
              </div>

              {/* Quality Excellence */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 text-orange-500 mr-4">
                    <Star size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Quality Excellence</h4>
                </div>
                <p className="text-gray-600">
                  We deliver the best in everything we do.
                </p>
              </div>
            </div>

            {/* Innovation and Ownership */}
            <div className="mt-10 flex flex-col md:flex-row justify-center gap-10">
              {/* Innovation */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex-1 max-w-md">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 text-orange-500 mr-4">
                    <Lightbulb size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Innovation</h4>
                </div>
                <p className="text-gray-600">
                  We think outside the box and create new solutions.
                </p>
              </div>

              {/* Ownership & Responsibility */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex-1 max-w-md">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-50 text-orange-500 mr-4">
                    <Briefcase size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">Ownership & Responsibility</h4>
                </div>
                <p className="text-gray-600">
                  We take ownership of our work and deliver results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center bg-white shadow-xl rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to explore underwater innovations?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our advanced underwater robotics can transform your inspection and maintenance operations.
          </p>
          <a
            href="/services"
            className="inline-flex items-center px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:translate-y-1"
          >
            Explore Our Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;