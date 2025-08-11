import React, { useState } from 'react';
import { X, ChevronRight, Eye, Settings, Cpu, Wrench, ShipIcon } from 'lucide-react';
import Bridge from '../assets/Bridge.png';
import Dam from '../assets/Dam.png';
import Ship from '../assets/Ship.png';
import UTM from '../assets/UTM.png';
import Watertank from '../assets/Watertank.png';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubpoint, setSelectedSubpoint] = useState(null);

  const services = [
    {
      title: 'Underwater ROV Inspection Services',
      description: 'We provide comprehensive underwater inspection services using state-of-the-art ROV technology. Our experienced team conducts detailed visual inspections and measurements of underwater structures without the need for divers, ensuring safety and efficiency.',
      points: [
        {
          title: 'Bridge pillar visual inspection',
          image: Bridge,
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
          image: Watertank,
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
          image: Ship,
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
          image: Dam,
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
          image: UTM,
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
      icon: Eye,
      color: 'orange',
      details: [],
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
      icon: Settings,
      color: 'orange',
      details: [],
      comingSoon: true,
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
      icon: Cpu,
      color: 'orange',
      details: [],
      comingSoon: true,
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
      icon: Wrench,
      color: 'orange',
      details: [],
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
    <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-orange-100 min-h-screen">
      {/* Optimized Hero Section - Matching Contact Page */}
      <div className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 py-12 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-8 w-48 h-48 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-8 right-8 w-56 h-56 bg-gradient-to-tl from-orange-400 to-orange-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent mb-3">
            Our Services
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto mb-3"></div>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Comprehensive underwater robotics solutions designed to meet your specific operational needs with cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Main Content with optimized spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6 relative z-20">
        
        {/* Services Grid - Optimized spacing */}
        <div className="grid gap-5 lg:grid-cols-2 mb-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                onClick={() => openModal(service)}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-slate-200 transition-all duration-500 p-6 cursor-pointer relative overflow-hidden hover:-translate-y-1 hover:shadow-orange-500/25"
              >
                {/* Decorative background pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full -translate-y-10 translate-x-10 opacity-30 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-100 to-orange-50 rounded-full translate-y-8 -translate-x-8 opacity-20 group-hover:scale-110 transition-transform duration-700"></div>

                {/* Coming Soon Badge */}
                {service.comingSoon && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-1 px-2.5 rounded-full font-bold text-xs shadow-lg">
                    Coming Soon
                  </div>
                )}
                
                {/* Icon and Title */}
                <div className="flex items-center mb-4 relative z-10">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 p-2.5 rounded-xl mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Service Description */}
                {service.description && (
                  <p className="text-slate-600 mb-3 leading-relaxed font-medium relative z-10 text-sm">
                    {service.description}
                  </p>
                )}

                {/* Service Points - Optimized */}
                <div className="space-y-2 text-slate-600 mb-4 relative z-10">
                  {service.points.slice(0, 3).map((point, idx) => (
                    <div key={idx} className="flex items-start bg-gradient-to-r from-slate-50 to-white rounded-lg p-2.5 border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></div>
                      <span className="font-medium text-sm leading-tight">{point.title || point}</span>
                    </div>
                  ))}
                  {service.points.length > 3 && (
                    <div className="flex items-start text-slate-500 bg-gradient-to-r from-slate-50 to-white rounded-lg p-2.5 border border-slate-100">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-slate-300 to-slate-400 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></div>
                      <span className="font-medium text-sm">+{service.points.length - 3} more specialized services</span>
                    </div>
                  )}
                </div>

                {/* Enhanced Separator */}
                <div className="flex justify-center mb-4 relative z-10">
                  <div className="w-10 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full mx-2 mt-[-3px]"></div>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full"></div>
                </div>

                {/* View Details Button - Uniform Orange */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(service);
                  }}
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full justify-center relative z-10 text-sm"
                >
                  Explore Details
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Service Modal - Optimized */}
        {selectedService && !selectedSubpoint && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full p-6 overflow-y-auto max-h-[90vh] border border-slate-200 mt-16"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 transition-all duration-200 shadow-lg z-10"
              >
                <X size={16} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center mb-5">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 p-2.5 rounded-xl mr-3 shadow-lg">
                  <selectedService.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-1">
                    {selectedService.title}
                  </h3>
                  {selectedService.comingSoon && (
                    <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white py-1 px-2.5 rounded-full font-bold text-xs shadow-lg">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
              
              {/* Service Description */}
              {selectedService.description && (
                <div className="bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl p-5 mb-6 border border-slate-200">
                  <p className="text-slate-700 text-base leading-relaxed font-medium">{selectedService.description}</p>
                </div>
              )}
              
              {/* Coming Soon Message */}
              {selectedService.comingSoon && (
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-4 mb-6 rounded-r-xl shadow-lg">
                  <h4 className="font-bold text-orange-800 text-base mb-1">🚀 Innovation in Progress</h4>
                  <p className="text-orange-700 leading-relaxed font-medium text-sm">
                    This service is currently in development and will be available soon. 
                    Please contact us for more information and to discuss your future requirements.
                  </p>
                </div>
              )}
              
              {/* Services Offered - Enhanced with Images for ROV Inspection Services */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-800 mb-4">Services Offered:</h4>
                
                {selectedService.title === 'Underwater ROV Inspection Services' ? (
                  <div className="grid gap-3 lg:grid-cols-2">
                    {selectedService.points.map((point, idx) => (
                      <div 
                        key={idx} 
                        onClick={point.content && !selectedService.comingSoon ? (e) => openSubpointModal(e, point) : null}
                        className={`group bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg hover:shadow-xl border border-slate-200 overflow-hidden transition-all duration-500 ${point.content && !selectedService.comingSoon ? 'cursor-pointer hover:-translate-y-1' : ''} ${selectedService.comingSoon ? 'opacity-70' : ''}`}
                      >
                        {/* Image Container */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                          <img src={point.image} alt={point.title} className="w-full h-full object-cover" />
                          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-3">
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="text-sm font-bold text-slate-800 group-hover:text-slate-900 transition-colors leading-tight">
                              {point.title}
                            </h5>
                            {point.content && !selectedService.comingSoon && (
                              <div className="w-5 h-5 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-orange-100 group-hover:to-orange-200 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0 ml-2">
                                <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-orange-600 transition-colors" />
                              </div>
                            )}
                          </div>
                          
                          {/* Quick preview of service benefits */}
                          <div className="space-y-0.5">
                            <div className="flex items-center text-xs text-slate-600">
                              <div className="w-1 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-1.5 flex-shrink-0"></div>
                              <span className="font-medium">High-precision inspection</span>
                            </div>
                            <div className="flex items-center text-xs text-slate-600">
                              <div className="w-1 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-1.5 flex-shrink-0"></div>
                              <span className="font-medium">Advanced ROV technology</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-3 md:grid-cols-2">
                    {selectedService.points.map((point, idx) => (
                      <div 
                        key={idx} 
                        onClick={point.content && !selectedService.comingSoon ? (e) => openSubpointModal(e, point) : null}
                        className={`bg-gradient-to-r from-slate-50 to-white rounded-xl p-3 border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300 flex justify-between items-center ${point.content && !selectedService.comingSoon ? 'cursor-pointer hover:-translate-y-1' : ''} ${selectedService.comingSoon ? 'opacity-70' : ''} shadow-sm`}
                      >
                        <span className="font-bold text-slate-800 text-sm">{point.title}</span>
                        {point.content && !selectedService.comingSoon && (
                          <div className="w-6 h-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                            <ChevronRight className="w-3 h-3 text-slate-600" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* CTA for Coming Soon Services */}
              {selectedService.comingSoon && (
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200 mb-4 shadow-lg">
                  <h4 className="font-bold text-orange-800 mb-1 text-base">Want to be notified when this service launches?</h4>
                  <p className="text-orange-700 mb-3 leading-relaxed font-medium text-sm">Leave your contact information and we'll keep you updated on our progress.</p>
                  <button
                    onClick={closeModal}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
                  >
                    Register Interest
                  </button>
                </div>
              )}
              
              <div className="text-center">
                <button
                  onClick={closeModal}
                  className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-lg text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Subpoint Modal - Enhanced with Icons */}
        {selectedSubpoint && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-6 overflow-y-auto max-h-[90vh] border border-slate-200 mt-16"
            >
              {/* Close Button */}
              <button
                onClick={closeSubpointModal}
                className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 transition-all duration-200 shadow-lg z-10"
              >
                <X size={16} />
              </button>

              {/* Hero Image Section */}
              {selectedSubpoint.image ? (
                <div className="relative aspect-[16/9] w-full mb-5 rounded-xl overflow-hidden shadow-lg">
                  <img src={selectedSubpoint.image} alt={selectedSubpoint.content.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="relative h-36 mb-5 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-slate-100 to-slate-200">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-2">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-700">{selectedSubpoint.content.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-1"></div>
                  </div>
                </div>
              )}

              {/* Modal Content */}
              <div className="mb-5">
                {selectedSubpoint.image && (
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {selectedSubpoint.content.title}
                  </h3>
                )}
                
                <div className="bg-gradient-to-r from-slate-50 to-orange-50 rounded-xl p-4 mb-6 border border-slate-200">
                  <p className="text-slate-700 text-base leading-relaxed font-medium">
                    {selectedSubpoint.content.description}
                  </p>
                </div>
                
                {selectedSubpoint.content.process && selectedSubpoint.content.process.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-800 mb-3">Our Process:</h4>
                    <div className="space-y-2">
                      {selectedSubpoint.content.process.map((item, idx) => (
                        <div key={idx} className="flex items-start bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-3 shadow-sm hover:shadow-lg transition-all duration-300">
                          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2.5 mt-0.5 flex-shrink-0 shadow-lg">
                            {idx + 1}
                          </div>
                          <span className="text-slate-700 font-medium leading-relaxed text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedSubpoint.content.importance && selectedSubpoint.content.importance.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-800 mb-3">Why It's Important:</h4>
                    <div className="space-y-2">
                      {selectedSubpoint.content.importance.map((item, idx) => (
                        <div key={idx} className="flex items-start bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-3 shadow-sm hover:shadow-lg transition-all duration-300">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2.5 mt-0.5 flex-shrink-0 shadow-lg">
                            <span className="text-xs">✓</span>
                          </div>
                          <span className="text-slate-700 font-medium leading-relaxed text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <button
                  onClick={closeSubpointModal}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-lg text-sm"
                >
                  Back to Services
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced CTA Section - Matching Contact Page */}
        <div className="mt-10 bg-gradient-to-r from-white via-orange-50 to-orange-100 rounded-2xl shadow-xl p-8 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -translate-y-12 translate-x-12 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-3">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-base lg:text-lg text-slate-600 mb-5 max-w-2xl mx-auto">
              Contact us today to discuss how our cutting-edge underwater robotics solutions can revolutionize your operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                Get Started Today
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
              <button className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-800 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-slate-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;