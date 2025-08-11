import React from 'react';

const Careers = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-orange-100">
      {/* Hero Section - Matching Home Page Style */}
      <div className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 py-16 overflow-hidden">
        {/* Decorative background elements - Same as Home */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-orange-400 to-orange-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent mb-4">
              Careers at Praxora
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto mb-4"></div>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto leading-relaxed font-medium">
              Join our team of innovators and robotics enthusiasts
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section - Matching About Page Style */}
      <div className="py-12 bg-white shadow-xl -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Current Opportunities Card */}
          <div className="group bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-xl border-2 border-slate-100 hover:border-orange-200 transition-all duration-500 p-8 transform hover:-translate-y-1 relative overflow-hidden mb-8">
            {/* Decorative background pattern - Same as Home */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative z-10">
              {/* Icon and Title */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent">
                  Current Opportunities
                </h3>
              </div>

              {/* Separator - Matching Home Style */}
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mb-6"></div>

              <div className="text-center max-w-2xl mx-auto">
                <p className="text-slate-700 leading-relaxed mb-6">
                  We're always looking for talented and passionate individuals to join our growing team. 
                  While we may not have specific openings listed, we welcome applications from motivated 
                  professionals in the fields of robotics, electronics, software development, mechanical 
                  engineering, and underwater technologies.
                </p>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 mb-6 border border-orange-100">
                  <h4 className="text-xl font-bold text-slate-800 mb-4">How to Apply</h4>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Please send your resume/CV and a brief cover letter explaining your interest in 
                    Praxora Robotics to:
                  </p>
                  
                  <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg p-4 inline-block border-2 border-orange-200">
                    <a href="mailto:careers@praxora.com" className="text-orange-700 font-semibold text-lg hover:text-orange-800 transition-colors">
                      careers@praxora.com
                    </a>
                  </div>
                  
                  <p className="text-slate-600 mt-4 text-sm font-medium">
                    Use the subject line: "Application for [Your Area of Expertise] - [Your Name]"
                  </p>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  We review all applications and will contact qualified candidates for further discussion. 
                  Thank you for your interest in being part of our innovative team!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Matching Home Page Style Exactly */}
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center bg-gradient-to-r from-white via-orange-50 to-orange-100 shadow-xl rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-3">
              Have questions about working with us?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Contact our team to learn more about our company culture and what makes Praxora Robotics an exciting place to work.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
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

export default Careers;