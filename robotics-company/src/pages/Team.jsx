// src/pages/Team.jsx
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Founder',
      description: 'Ph.D. in Robotics from MIT with 15+ years of experience in industrial automation.',
      image: '/api/placeholder/300/300', // Using placeholder image
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      description: 'Former Lead Engineer at SpaceX with expertise in AI and robotic systems.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Dr. James Wilson',
      role: 'Head of R&D',
      description: 'Pioneering researcher in machine learning and robotic control systems.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Emily Watson',
      role: 'Lead Engineer',
      description: 'Specialized in industrial robotics and automated manufacturing solutions.',
      image: '/api/placeholder/300/300',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Industry experts dedicated to advancing robotics technology
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="h-48 w-48 object-cover"
                src={member.image}
                alt={member.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-600">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At RoboTech, we believe in pushing the boundaries of what's possible in robotics and automation. 
              Our team of experts is committed to developing innovative solutions that help businesses thrive 
              in the age of digital transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;