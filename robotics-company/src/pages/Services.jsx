import React, { useState } from 'react';
import { X } from 'lucide-react'; // for premium looking close icon

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Underwater ROV Inspection Services',
      points: [
        'Bridge pillar visual inspection',
        'Water storage tank visual inspection',
        'Ship hull inspection',
        'Dam structure inspection',
        'Underwater thickness measurement (UTM)',
      ],
      icon: '🌊',
      details: `
Real-Time Visual Inspection: Live HD camera feed for observing submerged parts of bridge pillars.

Structural Condition Assessment: Inspects cracks, surface damage, tilt, or joint displacements.

Scour Monitoring: Observes sediment removal near pillar base due to water flow (scouring).

Marine Growth Observation: Identifies algae, barnacles, or other biological growth on pillars.

Corrosion Observation: Checks for rusting, pitting, and surface degradation on metallic structures.

Measurement Support (Laser + UTM): Measures crack size, scour depth, or metal thickness using laser & ultrasonic tools.

Debris and Obstruction Check: Detects driftwood, cables, or objects lodged around the pillars.

Leak or Seepage Detection (if applicable): Spots leaks or seepage in submerged pipes or joints connected to the structure.

Documentation and Reporting: Generates visual and data-based inspection reports with timestamps and findings.
      `,
    },
    {
      title: 'Custom ROV Development',
      points: [
        'Tailored underwater robotic systems',
        'R&D-based custom design',
        'Integration of payloads and sensors',
        'Prototype testing and deployment',
        'Upgradable modular designs',
      ],
      icon: '⚙️',
      details: `
We design and build custom underwater remotely operated vehicles (ROVs) suited to your specific needs.
From payload integration (sonar, sensors, cameras) to specialized propulsion systems and modular designs,
we offer complete R&D, prototyping, and field deployment solutions for marine robotics.
      `,
    },
    {
      title: 'Embedded Systems & Robotics R&D',
      points: [
        'Custom automation solutions',
        'Sensor integration and IoT',
        'Control system development',
        'Real-time data acquisition systems',
        'Prototyping and field testing',
      ],
      icon: '🧪',
      details: `
Our expertise in embedded systems enables us to develop tailored hardware-software robotic platforms,
integrate a wide range of sensors (IMU, sonar, pressure, etc.), build real-time controllers,
and create smart, data-driven underwater robotics and automation solutions.
      `,
    },
    {
      title: 'Maintenance & Post-Inspection Support',
      points: [
        'Defect analysis and reporting',
        'Inspection data interpretation',
        'Performance monitoring services',
        'Recommendations for corrective actions',
        'Post-inspection technical support',
      ],
      icon: '🛠️',
      details: `
We provide complete post-inspection support including detailed defect analysis,
report generation, structural integrity recommendations, corrective maintenance planning,
and 24x7 technical assistance to ensure the best outcome after underwater inspections.
      `,
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Services</h1>
          <p className="text-gray-600 mb-8">Comprehensive robotics solutions tailored to your needs</p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => openModal(service)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 p-6 cursor-pointer"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div className="text-4xl bg-orange-50 p-3 rounded-lg text-orange-500 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
              </div>

              {/* Separator */}
              <div className="w-16 h-1 bg-orange-400 mb-4"></div>

              {/* Points */}
              <ul className="space-y-2 text-gray-600 mb-6">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* View More Button */}
              <div className="mt-4 text-right">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(service);
                  }}
                  className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-500 rounded-lg hover:bg-orange-100 transition-colors duration-300 font-medium"
                >
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 overflow-y-auto max-h-[90vh] animate-fadeIn"
              style={{ animation: 'fadeIn 0.3s ease-out' }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 transition-colors duration-200"
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="flex items-center mb-6">
                <span className="text-4xl bg-orange-50 p-3 rounded-lg text-orange-500 mr-4">
                  {selectedService.icon}
                </span>
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedService.title}
                </h3>
              </div>
              
              <div className="w-16 h-1 bg-orange-400 mb-6"></div>
              
              <div className="text-gray-700 whitespace-pre-wrap font-sans text-base leading-relaxed">
                {selectedService.details}
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={closeModal}
                  className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center bg-white shadow-xl rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to automate your business?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help transform your operations with our state-of-the-art robotics solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:translate-y-1"
          >
            Get in Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;