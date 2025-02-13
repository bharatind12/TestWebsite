// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Welcome to RoboTech</span>
              <span className="block text-blue-400">Innovative Robotics Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Revolutionizing automation with cutting-edge robotics technology and innovative solutions for the future.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Our Expertise
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Robotics Solutions
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  {/* Add icon here */}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Industrial Automation</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Streamline your manufacturing processes with our advanced robotics solutions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  {/* Add icon here */}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">AI Integration</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Smart robotics powered by cutting-edge artificial intelligence.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  {/* Add icon here */}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Custom Solutions</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Tailored robotics solutions designed for your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;