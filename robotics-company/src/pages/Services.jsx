// src/pages/Services.jsx
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Industrial Automation',
      description: 'Complete automation solutions for manufacturing facilities, including robotic arms, conveyor systems, and smart control systems.',
      icon: '🏭',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Integration of artificial intelligence and machine learning algorithms to create smart, adaptive robotic systems.',
      icon: '🤖',
    },
    {
      title: 'Custom Robotics',
      description: 'Tailored robotics solutions designed and built specifically for your unique business needs and challenges.',
      icon: '⚙️',
    },
    {
      title: 'Maintenance & Support',
      description: '24/7 technical support and regular maintenance services to ensure your robotic systems operate at peak efficiency.',
      icon: '🔧',
    },
    {
      title: 'Consulting',
      description: 'Expert consultation on robotics implementation, process automation, and digital transformation strategies.',
      icon: '💡',
    },
    {
      title: 'Training Programs',
      description: 'Comprehensive training programs for your team to effectively operate and maintain robotic systems.',
      icon: '📚',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive robotics solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-6 py-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Ready to automate your business?
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Contact us today to discuss how we can help transform your operations
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;