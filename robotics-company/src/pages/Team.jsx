import React from 'react';
import pranav from '../assets/pranav.jpeg';
import bharat from '../assets/bharat.jpeg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Bharat Manohar Khanvilkar',
      role: 'Director - Underwater Operations',
      description: 'Electronics and Telecommunication Engineering graduate with hands-on experience in robotics, underwater ROV systems for inspection services, and Research & Development in underwater technologies.',
      image: bharat,
    },
    {
      name: 'Pranav Bhaskar Kulkarni',
      role: 'Director - Software & Data Systems',
      description: 'Computer Science Engineering graduate with specialization in Data Analytics (C-DAC), overseeing software, automation, and data operations.',
      image: pranav,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Team</h1>
          <p className="text-gray-600 mb-8">Technical leaders driving innovation at Praxora Robotics Pvt Ltd</p>
        </div>

        {/* Team Members Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 p-6"
            >
              <div className="flex flex-col items-center">
                {/* Member Image */}
                <div className="mb-6">
                  <img
                    className="h-48 w-48 object-cover rounded-full border-4 border-orange-50"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                
                {/* Member Details */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-medium mt-2">{member.role}</p>
                  
                  {/* Separator */}
                  <div className="w-16 h-1 bg-orange-400 mx-auto my-4"></div>
                  
                  <p className="text-gray-600 mt-4">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-white shadow-xl rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Want to join our team?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about robotics and innovation.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:translate-y-1"
          >
            View Openings
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;