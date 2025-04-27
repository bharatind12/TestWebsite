import React from 'react';

const Careers = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Careers</h1>
          <p className="text-gray-600 mb-8">Join our team of innovators and robotics enthusiasts</p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-16">
          {/* Icon and Title */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-orange-50 p-4 rounded-lg text-orange-500 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Current Opportunities
            </h3>
          </div>

          {/* Separator */}
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-8"></div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-700 mb-8">
              We're always looking for talented and passionate individuals to join our growing team. 
              While we may not have specific openings listed, we welcome applications from motivated 
              professionals in the fields of robotics, electronics, software development, mechanical 
              engineering, and underwater technologies.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">How to Apply</h4>
              <p className="text-gray-700 mb-4">
                Please send your resume/CV and a brief cover letter explaining your interest in 
                Praxora Robotics to:
              </p>
              
              <div className="bg-orange-50 rounded-lg p-4 inline-block">
                <a href="mailto:careers@praxora.com" className="text-orange-500 font-medium text-lg hover:text-orange-600 transition-colors">
                  careers@praxora.com
                </a>
              </div>
              
              <p className="text-gray-600 mt-4 text-sm">
                Use the subject line: "Application for [Your Area of Expertise] - [Your Name]"
              </p>
            </div>
            
            <p className="text-gray-700">
              We review all applications and will contact qualified candidates for further discussion. 
              Thank you for your interest in being part of our innovative team!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-white shadow-xl rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Have questions about working with us?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about our company culture and what makes Praxora Robotics an exciting place to work.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:translate-y-1"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;