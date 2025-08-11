import React from 'react';
import { ArrowRight } from 'lucide-react';
import pranav from '../assets/pranav.jpeg';
import bharat from '../assets/bharat.jpeg';
const Team = () => {
  // Using placeholder images since we can't access the actual image imports
  const teamMembers = [
    {
      name: 'Bharat Manohar Khanvilkar',
      role: 'Underwater Operations',
      description: 'Electronics and Telecommunication Engineering graduate with hands-on experience in robotics, underwater ROV systems for inspection services, and Research & Development in underwater technologies.',
      image: bharat,
      additionalTitle: 'Managing Director',
    },
    {
      name: 'Pranav Bhaskar Kulkarni',
      role: 'Software & Data Systems',
      description: 'Computer Science Engineering graduate with specialization in Data Analytics (C-DAC), overseeing software, automation, and data operations.',
      image: pranav,
      additionalTitle: 'Operations Director',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-orange-100 min-h-screen">
      {/* Enhanced Hero Section matching contact page */}
      <div className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 py-16 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-orange-400 to-orange-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent mb-4">
            Leadership Team
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto mb-4"></div>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed font-medium">
            The visionary minds driving innovation at Praxora Robotics Pvt Ltd
          </p>
        </div>
      </div>

      {/* Main Content with overlap effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
        {/* Team Members Grid - Optimized spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:border-orange-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Decorative gradient overlay matching contact page style */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-12 translate-x-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-100 to-orange-50 rounded-full translate-y-10 -translate-x-10 opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="flex flex-col items-center relative z-10">
                {/* Optimized Member Image */}
                <div className="mb-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                    className="h-36 w-36 object-cover rounded-full border-4 border-white shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-300"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                
                {/* Co-founder Badge with consistent orange styling */}
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white py-1.5 px-3 rounded-full text-xs font-bold shadow-md tracking-wider uppercase">
                    Co-founder
                  </span>
                </div>
                
                {/* Optimized Member Details */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                    {member.name}
                  </h3>
                  
                  {/* Additional Title with consistent styling */}
                  <div className="mb-2">
                    <span className="inline-block bg-gradient-to-r from-slate-100 to-orange-50 text-slate-800 font-semibold text-sm px-3 py-1 rounded-lg border border-slate-200">
                      {member.additionalTitle}
                    </span>
                  </div>
                  
                  {/* Role with orange gradient */}
                  <p className="text-transparent bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text font-semibold text-sm mb-3">
                    {member.role}
                  </p>
                  
                  {/* Optimized Separator */}
                  <div className="flex justify-center mb-3">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                    <div className="w-1 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-2 mt-[-1px]"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full"></div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section matching contact page */}
        <div className="bg-gradient-to-r from-white via-orange-50 to-orange-100 rounded-2xl shadow-xl p-8 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-3">
              Join Our Innovative Team
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
              We're seeking passionate visionaries who want to revolutionize the future of robotics technology and make a lasting impact.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Opportunities
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;