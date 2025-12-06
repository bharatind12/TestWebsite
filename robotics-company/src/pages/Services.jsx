import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { X, ChevronRight, Eye, Settings, Cpu, Wrench, ArrowRight } from 'lucide-react';
import Bridge from '../assets/Bridge.png';
import Dam from '../assets/Dam.png';
import Ship from '../assets/Ship.png';
import UTM from '../assets/UTM.png';
import Watertank from '../assets/Watertank.png';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubpoint, setSelectedSubpoint] = useState(null);
  
  // ROV State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const heroRef = useRef(null);

  const location = useLocation();

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
      color: 'cyan',
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
      color: 'cyan',
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
      color: 'cyan',
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
      color: 'cyan',
      details: [],
    },
  ];

  // Handle ROV Mouse Move
  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Auto-open modal logic
  useEffect(() => {
    if (location.state && location.state.serviceTitle) {
      const targetService = services.find(s => s.title === location.state.serviceTitle);
      if (targetService) {
        setSelectedService(targetService);
        setSelectedSubpoint(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location]);

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
    <div className="bg-white min-h-screen">
      {/* 
         REALISTIC DEEP OCEAN HERO 
         (Consistent with Team/Products/Contact)
      */}
      <div 
        ref={heroRef}
        className={`relative bg-[radial-gradient(circle_at_top,_#006994_0%,_#004e70_40%,_#002845_100%)] py-10 overflow-hidden transition-cursor duration-300 ${isHoveringHero ? 'cursor-none' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHoveringHero(true)}
        onMouseLeave={() => setIsHoveringHero(false)}
      >
        {/* 1. ATMOSPHERIC LAYERS */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400/20 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 mix-blend-overlay opacity-40 pointer-events-none">
            <div className="caustic-overlay"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="marine-snow"></div>
        </div>

        {/* 2. ORGANIC AQUATIC LIFE */}
        <div className="absolute top-1/4 left-[15%] opacity-80 animate-float-jellyfish pointer-events-none mix-blend-screen">
            <svg width="120" height="160" viewBox="0 0 100 140" fill="none">
                <path d="M10 40 C 10 15, 30 0, 50 0 C 70 0, 90 15, 90 40 C 90 55, 70 50, 50 50 C 30 50, 10 55, 10 40 Z" 
                      fill="url(#jellyGradient)" stroke="rgba(200, 240, 255, 0.4)" strokeWidth="0.5"/>
                <ellipse cx="50" cy="35" rx="20" ry="10" fill="rgba(255, 100, 255, 0.2)" filter="url(#glow)"/>
                <path d="M30 50 Q 25 70, 30 90 T 30 130" stroke="rgba(255, 200, 255, 0.5)" strokeWidth="1" fill="none" className="tentacle t1"/>
                <path d="M40 50 Q 35 70, 40 90 T 40 130" stroke="rgba(255, 200, 255, 0.6)" strokeWidth="1.5" fill="none" className="tentacle t2"/>
                <path d="M50 50 Q 45 70, 50 90 T 50 135" stroke="rgba(255, 200, 255, 0.7)" strokeWidth="1.5" fill="none" className="tentacle t3"/>
                <path d="M60 50 Q 55 70, 60 90 T 60 130" stroke="rgba(255, 200, 255, 0.6)" strokeWidth="1.5" fill="none" className="tentacle t4"/>
                <path d="M70 50 Q 65 70, 70 90 T 70 130" stroke="rgba(255, 200, 255, 0.5)" strokeWidth="1" fill="none" className="tentacle t5"/>
                <defs>
                    <radialGradient id="jellyGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(220, 240, 255, 0.4)" />
                        <stop offset="100%" stopColor="rgba(220, 240, 255, 0.05)" />
                    </radialGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                </defs>
            </svg>
        </div>
        <div className="absolute top-2/3 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 -left-[200px] animate-school-swim opacity-30 mix-blend-multiply">
                 <svg width="300" height="100" viewBox="0 0 300 100">
                    <path d="M10,20 Q25,5 50,20 Q60,25 50,30 Q25,45 10,30 L0,35 L0,15 Z" fill="#001529"/>
                    <path d="M60,40 Q75,25 100,40 Q110,45 100,50 Q75,65 60,50 L50,55 L50,35 Z" fill="#001529"/>
                    <path d="M30,60 Q45,45 70,60 Q80,65 70,70 Q45,85 30,70 L20,75 L20,55 Z" fill="#001529"/>
                 </svg>
            </div>
        </div>

        {/* 3. BUBBLES */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
                <div key={`bubble-${i}`} className={`natural-bubble bubble-${i + 1}`}></div>
            ))}
        </div>

        {/* 4. CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] tracking-wide">
            Our Services
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-2 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.4)]"></div>
          <p className="text-base text-cyan-50 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-md">
            Comprehensive underwater robotics solutions designed to meet your specific operational needs.
          </p>
        </div>

        {/* 5. ROV & VOLUMETRIC LIGHTING */}
        <div 
          className="pointer-events-none absolute z-50 transition-transform duration-75 ease-out will-change-transform"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            opacity: isHoveringHero ? 1 : 0,
            left: 0,
            top: 0
          }}
        >
          {/* Spotlight */}
          <div 
             className="absolute top-1/2 left-8 w-[400px] h-[120px] origin-left -translate-y-1/2 pointer-events-none"
             style={{
                clipPath: 'polygon(0% 45%, 100% 0%, 100% 100%, 0% 55%)',
                background: 'linear-gradient(90deg, rgba(220, 255, 255, 0.4) 0%, rgba(220, 255, 255, 0.1) 60%, transparent 100%)',
                filter: 'blur(3px)',
                mixBlendMode: 'overlay',
             }}
          >
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] animate-beam-flow opacity-60"></div>
          </div>

          {/* ROV Unit */}
          <div className="absolute -top-8 -left-8 w-16 h-16 filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-hover-float">
               <rect x="5" y="35" width="8" height="30" rx="1" fill="#1e293b" />
               <path d="M5 50 L -2 45 M 5 50 L -2 55" stroke="#94a3b8" strokeWidth="2" className="animate-spin-propeller" style={{transformBox: 'fill-box', transformOrigin: '5px 50px'}}/>
               <path d="M15 45 C 15 30, 25 20, 45 20 L 75 20 C 90 20, 95 30, 95 50 C 95 70, 90 80, 75 80 L 45 80 C 25 80, 15 70, 15 45 Z" 
                     fill="#F59E0B" stroke="#FCD34D" strokeWidth="1"/>
               <path d="M15 45 C 15 65, 25 75, 45 75 L 75 75 C 85 75, 90 70, 92 60 L 18 60 C 16 55, 15 50, 15 45 Z" fill="rgba(0,0,0,0.1)"/>
               <path d="M75 20 C 90 20, 95 30, 95 50 C 95 70, 90 80, 75 80 Z" fill="#06b6d4" fillOpacity="0.4" />
               <ellipse cx="78" cy="50" rx="6" ry="18" fill="#cffafe" fillOpacity="0.6" filter="url(#glow)" />
               <rect x="40" y="15" width="10" height="5" fill="#333" />
               <circle cx="45" cy="15" r="3" fill="#ef4444" className="animate-blink" />
               <path d="M40 80 L 35 95 H 55 L 50 80" fill="#475569" />
               <path d="M35 95 L 30 100 M 55 95 L 60 100" stroke="#94a3b8" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6 relative z-20">
        
        {/* Services Grid - Optimized */}
        <div className="grid gap-5 lg:grid-cols-2 mb-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                onClick={() => openModal(service)}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-blue-100 hover:border-cyan-200 transition-all duration-500 p-6 cursor-pointer relative overflow-hidden hover:-translate-y-1"
              >
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full -translate-y-10 translate-x-10 opacity-30 group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full translate-y-8 -translate-x-8 opacity-20 group-hover:scale-110 transition-transform duration-700"></div>

                {/* Coming Soon Badge */}
                {service.comingSoon && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-1 px-2.5 rounded-full font-bold text-xs shadow-lg">
                    Coming Soon
                  </div>
                )}
                
                {/* Icon and Title */}
                <div className="flex items-center mb-4 relative z-10">
                  <div className="bg-gradient-to-br from-cyan-100 to-blue-200 text-cyan-700 p-2.5 rounded-xl mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
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

                {/* Service Points */}
                <div className="space-y-2 text-slate-600 mb-4 relative z-10">
                  {service.points.slice(0, 3).map((point, idx) => (
                    <div key={idx} className="flex items-start bg-white rounded-lg p-2.5 border border-blue-100 hover:border-cyan-200 transition-colors">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></div>
                      <span className="font-medium text-sm leading-tight">{point.title || point}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(service);
                  }}
                  className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full justify-center relative z-10 text-sm"
                >
                  Explore Details
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Service Modal - OPTIMIZED */}
        {selectedService && !selectedSubpoint && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full p-4 overflow-y-auto max-h-[85vh] border-2 border-blue-200 mt-16"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 w-7 h-7 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-all z-10"
              >
                <X size={14} />
              </button>

              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-200 text-cyan-700 p-2 rounded-lg mr-2.5 shadow-lg">
                  <selectedService.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              
              {selectedService.description && (
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-3 mb-4 border border-blue-100">
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">{selectedService.description}</p>
                </div>
              )}
              
              {/* Coming Soon */}
              {selectedService.comingSoon && (
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-3 mb-4 rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-cyan-800 text-sm mb-0.5">🚀 Innovation in Progress</h4>
                  <p className="text-cyan-700 leading-relaxed font-medium text-xs">
                    This service is currently in development and will be available soon.
                  </p>
                </div>
              )}
              
              {/* Services Grid in Modal - OPTIMIZED */}
              <div className="mb-4">
                <h4 className="text-base font-bold text-slate-800 mb-3">Services Offered:</h4>
                
                {selectedService.title === 'Underwater ROV Inspection Services' ? (
                  <div className="grid gap-2.5 lg:grid-cols-2">
                    {selectedService.points.map((point, idx) => (
                      <div 
                        key={idx} 
                        onClick={point.content && !selectedService.comingSoon ? (e) => openSubpointModal(e, point) : null}
                        className={`group bg-gradient-to-br from-white to-slate-50 rounded-lg shadow-md hover:shadow-lg border border-blue-100 overflow-hidden transition-all duration-500 ${point.content && !selectedService.comingSoon ? 'cursor-pointer hover:-translate-y-0.5' : ''} ${selectedService.comingSoon ? 'opacity-70' : ''}`}
                      >
                        <div className="relative aspect-video w-full overflow-hidden">
                          <img src={point.image} alt={point.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-2">
                          <div className="flex justify-between items-start">
                            <h5 className="text-xs font-bold text-slate-800 group-hover:text-cyan-700 transition-colors leading-tight">
                              {point.title}
                            </h5>
                            {point.content && !selectedService.comingSoon && (
                              <div className="w-4 h-4 bg-slate-100 group-hover:bg-cyan-100 rounded-full flex items-center justify-center transition-colors ml-1.5 flex-shrink-0">
                                <ChevronRight className="w-2.5 h-2.5 text-slate-600 group-hover:text-cyan-700" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-2 md:grid-cols-2">
                    {selectedService.points.map((point, idx) => (
                      <div 
                        key={idx} 
                        onClick={point.content && !selectedService.comingSoon ? (e) => openSubpointModal(e, point) : null}
                        className={`bg-white rounded-lg p-2.5 border-l-4 border-cyan-500 border-y border-r border-blue-100 hover:shadow-md transition-all duration-300 flex justify-between items-center ${point.content && !selectedService.comingSoon ? 'cursor-pointer hover:-translate-y-0.5' : ''} ${selectedService.comingSoon ? 'opacity-70' : ''}`}
                      >
                        <span className="font-bold text-slate-800 text-xs leading-tight">{point.title}</span>
                        {point.content && !selectedService.comingSoon && (
                          <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 ml-2">
                            <ChevronRight className="w-3 h-3 text-slate-600" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <button
                  onClick={closeModal}
                  className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-lg text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Subpoint Modal - OPTIMIZED */}
        {selectedSubpoint && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full p-4 overflow-y-auto max-h-[85vh] border-2 border-blue-200 mt-16"
            >
              <button
                onClick={closeSubpointModal}
                className="absolute top-3 right-3 w-7 h-7 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-all z-10"
              >
                <X size={14} />
              </button>

              {selectedSubpoint.image ? (
                <div className="relative aspect-video w-full mb-3 rounded-lg overflow-hidden shadow-lg">
                  <img src={selectedSubpoint.image} alt={selectedSubpoint.content.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="relative h-28 mb-3 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-1.5 mx-auto">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-slate-700">{selectedSubpoint.content.title}</h3>
                  </div>
                </div>
              )}

              <div className="mb-3">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-3 mb-3 border border-blue-100">
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {selectedSubpoint.content.description}
                  </p>
                </div>
                
                {selectedSubpoint.content.process && (
                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-slate-800 mb-2">Our Process:</h4>
                    <div className="space-y-1.5">
                      {selectedSubpoint.content.process.map((item, idx) => (
                        <div key={idx} className="flex items-start bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-2 shadow-sm">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold mr-2 mt-0.5 flex-shrink-0">
                            {idx + 1}
                          </div>
                          <span className="text-slate-700 font-medium leading-relaxed text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <button
                  onClick={closeSubpointModal}
                  className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-lg text-xs"
                >
                  Back to Services
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-10 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 border-2 border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-200 to-blue-100 rounded-full -translate-y-12 translate-x-12 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent mb-3">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-base lg:text-lg text-slate-600 mb-5 max-w-2xl mx-auto">
              Contact us today to discuss how our cutting-edge underwater robotics solutions can revolutionize your operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="inline-flex items-center px-5 py-2.5 bg-white text-slate-800 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-blue-100 hover:border-cyan-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        /* 1. Realistic Caustics */
        .caustic-overlay {
            width: 200%;
            height: 200%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
            background-size: cover;
            animation: drift-slow 40s linear infinite;
        }
        @keyframes drift-slow {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-50px, -30px); }
        }

        /* 2. Marine Snow */
        .marine-snow {
            background-image: radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: snow-drift 20s linear infinite;
        }
        @keyframes snow-drift {
            from { background-position: 0 0; }
            to { background-position: 100px 50px; }
        }

        /* 3. Jellyfish Animation */
        @keyframes float-jellyfish {
            0%, 100% { transform: translateY(0) rotate(5deg); }
            50% { transform: translateY(-25px) rotate(-5deg); }
        }
        .tentacle {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
            animation: wiggle 3s ease-in-out infinite;
            transform-origin: top center;
        }
        .t1 { animation-delay: 0s; }
        .t2 { animation-delay: 0.2s; }
        .t3 { animation-delay: 0.4s; }
        .t4 { animation-delay: 0.6s; }
        .t5 { animation-delay: 0.8s; }
        
        @keyframes wiggle {
            0%, 100% { d: path("M30 50 Q 25 70, 30 90 T 30 130"); }
            50% { d: path("M30 50 Q 35 70, 30 90 T 35 125"); }
        }

        /* 4. Fish School Animation */
        @keyframes school-swim {
            0% { transform: translateX(0) translateY(0); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translateX(120vw) translateY(-20px); opacity: 0; }
        }
        .animate-school-swim {
            animation: school-swim 30s linear infinite;
        }

        /* 5. Natural Bubbles */
        .natural-bubble {
            position: absolute;
            bottom: -20px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.1));
            box-shadow: inset 0 0 4px rgba(255,255,255,0.4);
            border: 1px solid rgba(255,255,255,0.1);
        }
        ${[...Array(15)].map((_, i) => `
            .bubble-${i + 1} {
                width: ${Math.random() * 8 + 3}px;
                height: ${Math.random() * 8 + 3}px;
                left: ${Math.random() * 100}%;
                animation: bubble-rise ${Math.random() * 4 + 3}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                opacity: ${Math.random() * 0.3 + 0.1};
            }
        `).join('')}
        @keyframes bubble-rise {
            0% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-30vh) translateX(10px); }
            50% { transform: translateY(-60vh) translateX(-10px); }
            75% { transform: translateY(-90vh) translateX(5px); }
            100% { transform: translateY(-120vh) translateX(0); opacity: 0; }
        }

        /* 6. Light Beam Flow */
        @keyframes beam-flow {
            from { background-position: 0 0; }
            to { background-position: 100px 0; }
        }
        .animate-beam-flow {
            animation: beam-flow 2s linear infinite;
        }

        /* 7. ROV Animations */
        .animate-spin-propeller {
            animation: spin 0.2s linear infinite;
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .animate-blink { animation: blink 1.5s infinite; }
        @keyframes blink { 0%, 100% { fill: #ef4444; opacity: 1; } 50% { fill: #7f1d1d; opacity: 0.5; } }
        
        .animate-hover-float { animation: hover 3s ease-in-out infinite; }
        @keyframes hover { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

        .cursor-none { cursor: none; }
      `}</style>
    </div>
  );
};

export default Services;