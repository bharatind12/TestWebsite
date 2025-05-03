import React, { useState } from 'react';
import { X } from 'lucide-react'; // for premium looking close icon

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubpoint, setSelectedSubpoint] = useState(null);

  const services = [
    {
      title: 'Underwater ROV Inspection Services',
      points: [
        {
          title: 'Bridge pillar visual inspection',
          content: {
            title: 'Bridge Pillar Visual Inspection',
            description: 'We perform detailed visual inspections of underwater bridge pillars using advanced ROV technology.',
            process: [
              'Capture 360° video and images around the pillars using high-resolution ROV cameras.',
              'Identify cracks, corrosion, leakages, sediment accumulation, or structural damages.',
              'Provide recorded footage and inspection reports for analysis.',
              'Perform thickness measurements if required.'
            ],
            importance: [
              'Ensures the structural safety of bridges.',
              'Helps in early detection of damages, preventing major accidents.'
            ]
          }
        },
        {
          title: 'Water storage tank visual inspection',
          content: {
            title: 'Water Storage Tank Visual Inspection',
            description: 'We inspect water storage tanks internally using ROVs without the need to drain the tank, saving time and cost.',
            process: [
              'Deploy ROV inside the tank to visually scan walls, floor, and joints.',
              'Identify corrosion, cracks, sediment buildup, and internal damage.',
              'Provide complete video documentation and inspection report.'
            ],
            importance: [
              'Enhances the lifespan of tanks.',
              'Ensures safe and clean water storage.'
            ]
          }
        },
        {
          title: 'Ship hull inspection',
          content: {
            title: 'Ship Hull Inspection',
            description: 'We conduct underwater inspections of ship hulls to assess the condition without dry-docking.',
            process: [
              'Scan the hull surface thoroughly using ROV cameras.',
              'Detect corrosion, biofouling, patches, or structural damages.',
              'Provide high-resolution video and image evidence for reports.'
            ],
            importance: [
              'Maintains vessel integrity and performance.',
              'Helps in accurate maintenance planning.'
            ]
          }
        },
        {
          title: 'Dam structure inspection',
          content: {
            title: 'Dam Structure Inspection',
            description: 'We offer underwater inspections of dam structures to identify potential threats and maintain safety.',
            process: [
              'Inspect submerged walls, spillways, and pillars using ROVs.',
              'Detect cracks, seepages, sediment deposits, and erosion.',
              'Provide complete video documentation for technical analysis.'
            ],
            importance: [
              'Essential for the structural health of dams.',
              'Helps in timely repair and disaster prevention.'
            ]
          }
        },
        {
          title: 'Underwater thickness measurement (UTM)',
          content: {
            title: 'Underwater Thickness Measurement (UTM)',
            description: 'We measure the metal thickness of submerged structures to assess their integrity.',
            process: [
              'Use specialized underwater thickness gauges through ROVs.',
              'Detect thinning, corrosion, and structural weakening.'
            ],
            importance: [
              'Helps in determining the lifespan of metallic structures.',
              'Critical for planning repairs and replacements.'
            ]
          }
        },
      ],
      icon: '🌊',
      details: [
        { title: 'Real-Time Visual Inspection', description: 'Live HD camera feed for observing submerged parts of bridge pillars.' },
        { title: 'Structural Condition Assessment', description: 'Inspects cracks, surface damage, tilt, or joint displacements.' },
        { title: 'Scour Monitoring', description: 'Observes sediment removal near pillar base due to water flow (scouring).' },
        { title: 'Marine Growth Observation', description: 'Identifies algae, barnacles, or other biological growth on pillars.' },
        { title: 'Corrosion Observation', description: 'Checks for rusting, pitting, and surface degradation on metallic structures.' },
        { title: 'Measurement Support (Laser + UTM)', description: 'Measures crack size, scour depth, or metal thickness using laser & ultrasonic tools.' },
        { title: 'Debris and Obstruction Check', description: 'Detects driftwood, cables, or objects lodged around the pillars.' },
        { title: 'Leak or Seepage Detection (if applicable)', description: 'Spots leaks or seepage in submerged pipes or joints connected to the structure.' },
        { title: 'Documentation and Reporting', description: 'Generates visual and data-based inspection reports with timestamps and findings.' },
      ],
    },
    {
      title: 'Custom ROV Development',
      description: 'We specialize in developing customized underwater robotic systems to meet specific project requirements. Our expertise lies in R&D-based design, payload integration, and modular, upgradable solutions.',
      points: [
        {
          title: 'Tailored underwater robotic systems',
          content: {
            title: 'Tailored Underwater Robotic Systems',
            description: 'We design and develop underwater robotic vehicles specifically tailored to the operational needs of our clients.',
            process: [
              'Understanding project requirements and mission goals.',
              'Designing ROVs with customized features and capabilities.',
              'Fabricating specialized frames, thrusters, control systems, and tooling.'
            ],
            importance: [
              'Provides precise solutions for unique underwater tasks.',
              'Enhances operational efficiency and effectiveness.'
            ]
          }
        },
        {
          title: 'R&D-based custom design',
          content: {
            title: 'R&D-Based Custom Design',
            description: 'We apply advanced research and development methodologies to create innovative underwater solutions.',
            process: [
              'Conducting feasibility studies and technology research.',
              'Prototyping and testing new design concepts.',
              'Engineering reliable and high-performance underwater systems.'
            ],
            importance: [
              'Enables breakthrough underwater applications.',
              'Reduces technical risks and improves project success rates.'
            ]
          }
        },
        {
          title: 'Integration of payloads and sensors',
          content: {
            title: 'Integration of Payloads and Sensors',
            description: 'We integrate various payloads such as sonar systems, cameras, sensors, and manipulators into the ROVs.',
            process: [
              'Selection of suitable payloads based on mission requirements.',
              'Seamless integration with the ROV\'s communication and power systems.',
              'Calibration and testing of all integrated devices.'
            ],
            importance: [
              'Enhances the ROV\'s functionality.',
              'Increases the accuracy and capability of underwater missions.'
            ]
          }
        },
        {
          title: 'Prototype testing and deployment',
          content: {
            title: 'Prototype Testing and Deployment',
            description: 'We conduct rigorous prototype testing and real-world deployment trials to validate ROV performance.',
            process: [
              'Lab-based mechanical and electrical testing.',
              'Field trials in controlled underwater environments.',
              'Final adjustments based on operational feedback.'
            ],
            importance: [
              'Ensures system reliability and mission readiness.',
              'Reduces chances of failure during actual operations.'
            ]
          }
        },
        {
          title: 'Upgradable modular designs',
          content: {
            title: 'Upgradable Modular Designs',
            description: 'We design ROVs with a modular architecture, allowing easy upgrades and system modifications.',
            process: [
              'Designing interchangeable modules for different mission profiles.',
              'Future-proofing the ROV with upgradable components.',
              'Simplifying maintenance and part replacement.'
            ],
            importance: [
              'Increases the operational lifespan of the ROV.',
              'Reduces long-term ownership and maintenance costs.'
            ]
          }
        },
      ],
      icon: '⚙️',
      details: [
        { title: 'Custom Design', description: 'We design and build custom underwater remotely operated vehicles (ROVs) suited to your specific needs.' },
        { title: 'Payload Integration', description: 'Integration of sonars, sensors, cameras and other specialized equipment.' },
        { title: 'Propulsion Systems', description: 'Specialized propulsion systems designed for your specific underwater environment.' },
        { title: 'Modular Architecture', description: 'Upgradable modular designs that can adapt to changing requirements.' },
        { title: 'Complete Solutions', description: 'We offer complete R&D, prototyping, and field deployment solutions for marine robotics.' },
      ],
      comingSoon: true, // Add coming soon property
    },
    {
      title: 'Embedded Systems & Robotics R&D',
      description: 'We offer specialized R&D services in embedded systems and robotics, delivering tailored automation solutions with integrated sensors, real-time control, and data systems.',
      points: [
        {
          title: 'Custom automation solutions',
          content: {
            title: 'Custom Automation Solutions',
            description: 'We design and develop customized automation systems for various industrial and underwater applications.',
            process: [
              'Understanding specific operational requirements.',
              'Designing embedded solutions for automation control.',
              'Developing user-friendly interfaces and system architectures.'
            ],
            importance: [
              'Enhances productivity and operational precision.',
              'Reduces manual intervention and operational risks.'
            ]
          }
        },
        {
          title: 'Sensor integration and IoT',
          content: {
            title: 'Sensor Integration and IoT',
            description: 'We integrate advanced sensors and IoT technologies into embedded systems to enable smart, connected operations.',
            process: [
              'Selecting and integrating sensors (pressure, temperature, humidity, proximity, etc.).',
              'Establishing IoT-based remote monitoring and control.',
              'Ensuring data security and reliable communication.'
            ],
            importance: [
              'Enables real-time data monitoring and remote access.',
              'Supports intelligent decision-making based on live data.'
            ]
          }
        },
        {
          title: 'Control system development',
          content: {
            title: 'Control System Development',
            description: 'We develop robust control systems for robotics, automation, and underwater vehicles.',
            process: [
              'Designing control algorithms for stable and responsive operation.',
              'Implementing PID, adaptive, and custom controllers as per requirements.',
              'Hardware and software integration for real-world deployment.'
            ],
            importance: [
              'Ensures precise movement, navigation, and system stability.',
              'Critical for successful robotic and automation projects.'
            ]
          }
        },
        {
          title: 'Real-time data acquisition systems',
          content: {
            title: 'Real-Time Data Acquisition Systems',
            description: 'We build real-time data acquisition systems that capture, store, and transmit critical sensor data accurately.',
            process: [
              'Designing hardware interfaces for sensor inputs.',
              'Developing embedded software for high-speed data logging and transmission.',
              'Implementing error detection and correction mechanisms.'
            ],
            importance: [
              'Provides accurate and timely insights for system monitoring.',
              'Essential for control, diagnostics, and performance analysis.'
            ]
          }
        },
        {
          title: 'Prototyping and field testing',
          content: {
            title: 'Prototyping and Field Testing',
            description: 'We conduct prototyping and rigorous field testing of embedded and robotic systems before final deployment.',
            process: [
              'Building working prototypes based on design specifications.',
              'Performing lab tests and operational field trials.',
              'Refining designs based on test results and field performance.'
            ],
            importance: [
              'Validates design concepts and ensures practical functionality.',
              'Reduces risks of operational failures and ensures system readiness.'
            ]
          }
        },
      ],
      icon: '🧪',
      details: [
        { title: 'Tailored Hardware-Software Platforms', description: 'Our expertise in embedded systems enables us to develop tailored hardware-software robotic platforms.' },
        { title: 'Sensor Integration', description: 'Integration of a wide range of sensors including IMU, sonar, pressure, and more.' },
        { title: 'Real-Time Controllers', description: 'Build real-time controllers for precise and responsive operation.' },
        { title: 'Smart Solutions', description: 'Create smart, data-driven underwater robotics and automation solutions.' },
        { title: 'IoT Connectivity', description: 'Implement IoT capabilities for remote monitoring and control of robotics systems.' },
      ],
      comingSoon: true, // Add coming soon property
    },
    {
      title: 'Maintenance & Post-Inspection Support',
      description: 'We provide comprehensive maintenance and support services after inspections, ensuring sustained system performance and accurate defect management.',
      points: [
        {
          title: 'Defect analysis and reporting',
          content: {
            title: 'Defect Analysis and Reporting',
            description: 'We perform detailed analysis of detected defects and generate comprehensive reports for our clients.',
            process: [
              'Reviewing inspection footage, images, and sensor data.',
              'Classifying defects based on severity and type.',
              'Preparing structured reports with findings and visual evidence.'
            ],
            importance: [
              'Provides clarity on the condition of the inspected structure.',
              'Assists in planning maintenance and repair strategies.'
            ]
          }
        },
        {
          title: 'Inspection data interpretation',
          content: {
            title: 'Inspection Data Interpretation',
            description: 'We interpret complex inspection data to extract meaningful insights for asset management.',
            process: [
              'Analyzing recorded inspection data (visuals, measurements, sensor outputs).',
              'Identifying patterns, anomalies, and degradation trends.',
              'Summarizing findings in an easily understandable format.'
            ],
            importance: [
              'Helps clients make informed decisions regarding asset maintenance.',
              'Prevents potential failures through early detection.'
            ]
          }
        },
        {
          title: 'Performance monitoring services',
          content: {
            title: 'Performance Monitoring Services',
            description: 'We offer ongoing monitoring services to track asset performance over time post-inspection.',
            process: [
              'Setting up periodic inspection schedules and health checks.',
              'Utilizing sensors and remote systems to monitor key parameters.',
              'Updating clients with regular performance reports.'
            ],
            importance: [
              'Ensures assets remain operational and safe.',
              'Detects performance issues before they escalate.'
            ]
          }
        },
        {
          title: 'Recommendations for corrective actions',
          content: {
            title: 'Recommendations for Corrective Actions',
            description: 'Based on inspection findings, we provide expert recommendations for necessary corrective actions.',
            process: [
              'Assessing defect severity and system risk factors.',
              'Suggesting repair methods, material replacements, or further inspections.',
              'Assisting in maintenance planning and execution strategies.'
            ],
            importance: [
              'Minimizes downtime and repair costs.',
              'Extends the life of the inspected structure or system.'
            ]
          }
        },
        {
          title: 'Post-inspection technical support',
          content: {
            title: 'Post-Inspection Technical Support',
            description: 'We provide technical support after inspections to assist with queries, troubleshooting, and operational guidance.',
            process: [
              'Offering assistance in report interpretation and action planning.',
              'Supporting repair and maintenance teams as needed.',
              'Providing additional inspection services if required.'
            ],
            importance: [
              'Ensures smooth execution of recommended actions.',
              'Maintains high levels of client satisfaction and system performance.'
            ]
          }
        },
      ],
      icon: '🛠️',
      details: [
        { title: 'Detailed Defect Analysis', description: 'We provide complete analysis of detected defects with severity assessment.' },
        { title: 'Comprehensive Reporting', description: 'Generate detailed reports with visual documentation and data interpretation.' },
        { title: 'Structural Integrity Recommendations', description: 'Expert recommendations for maintaining structural integrity.' },
        { title: 'Corrective Maintenance Planning', description: 'Develop actionable plans for corrective maintenance based on inspection findings.' },
        { title: 'Technical Support', description: '24x7 technical assistance to ensure the best outcome after underwater inspections.' },
      ],
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setSelectedSubpoint(null);
  };

  const closeModal = () => {
    setSelectedService(null);
    setSelectedSubpoint(null);
  };

  const openSubpointModal = (e, subpoint) => {
    e.stopPropagation();
    setSelectedSubpoint(subpoint);
  };

  const closeSubpointModal = (e) => {
    e.stopPropagation();
    setSelectedSubpoint(null);
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
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 p-6 cursor-pointer relative"
            >
              {/* Coming Soon Tag */}
              {service.comingSoon && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white py-1 px-4 rounded-tr-2xl rounded-bl-lg font-semibold text-sm shadow-md">
                  Coming Soon
                </div>
              )}
              
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
                    <span>{point.title || point}</span>
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

        {/* Service Modal */}
        {selectedService && !selectedSubpoint && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 overflow-y-auto max-h-[90vh] animate-fadeIn"
              style={{ animation: 'fadeIn 0.3s ease-out' }}
            >
              {/* Coming Soon Badge in Modal */}
              {selectedService.comingSoon && (
                <div className="absolute top-4 left-8 bg-orange-500 text-white py-1 px-4 rounded-lg font-semibold text-sm shadow-md">
                  Coming Soon
                </div>
              )}
              
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
              
              {/* Service Description */}
              {selectedService.description && (
                <p className="text-gray-700 mb-6">{selectedService.description}</p>
              )}
              
              {/* Coming Soon Message */}
              {selectedService.comingSoon && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 rounded-lg">
                  <p className="text-orange-700">
                    This service is currently in development and will be available soon. 
                    Please contact us for more information and to discuss your future requirements.
                  </p>
                </div>
              )}
              
              {/* Points with clickable behavior for all services */}
              <div className="mb-8">
                <h4 className="font-bold text-gray-800 mb-4">Services Offered:</h4>
                <ul className="space-y-3">
                  {selectedService.points.map((point, idx) => (
                    <li 
                      key={idx} 
                      onClick={point.content && !selectedService.comingSoon ? (e) => openSubpointModal(e, point) : null}
                      className={`bg-gray-50 rounded-lg p-4 border-l-4 border-orange-400 hover:shadow-md transition-shadow flex justify-between items-center ${point.content && !selectedService.comingSoon ? 'cursor-pointer' : ''} ${selectedService.comingSoon ? 'opacity-70' : ''}`}
                    >
                      <span>{point.title}</span>
                      {point.content && !selectedService.comingSoon && (
                        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Structured Details Display */}
              <div className="grid grid-cols-1 gap-4">
                {selectedService.details.map((detail, idx) => (
                  <div key={idx} className={`bg-gray-50 rounded-lg p-4 border-l-4 border-orange-400 hover:shadow-md transition-shadow ${selectedService.comingSoon ? 'opacity-70' : ''}`}>
                    <h4 className="font-bold text-gray-800 mb-1">{detail.title}</h4>
                    <p className="text-gray-600">{detail.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Modified CTA for Coming Soon Services */}
              {selectedService.comingSoon && (
                <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-gray-800 mb-2">Want to be notified when this service launches?</h4>
                  <p className="text-gray-600 mb-4">Leave your contact information and we'll keep you updated on our progress.</p>
                  <button
                    onClick={closeModal}
                    className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                  >
                    Register Interest
                  </button>
                </div>
              )}
              
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

        {/* Subpoint Modal */}
        {selectedSubpoint && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 overflow-y-auto max-h-[90vh] animate-fadeIn"
              style={{ animation: 'fadeIn 0.3s ease-out' }}
            >
              {/* Close Button */}
              <button
                onClick={closeSubpointModal}
                className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 transition-colors duration-200"
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedSubpoint.content.title}
                </h3>
                <div className="w-16 h-1 bg-orange-400 mb-6"></div>
                
                <p className="text-gray-700 mb-6">
                  {selectedSubpoint.content.description}
                </p>
                
                {selectedSubpoint.content.process && selectedSubpoint.content.process.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-800 mb-3">Process:</h4>
                    <ul className="space-y-2 bg-gray-50 rounded-lg p-4">
                      {selectedSubpoint.content.process.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedSubpoint.content.importance && selectedSubpoint.content.importance.length > 0 && (
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Importance:</h4>
                    <ul className="space-y-2 bg-gray-50 rounded-lg p-4">
                      {selectedSubpoint.content.importance.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={closeSubpointModal}
                  className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                >
                  Back to Services
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