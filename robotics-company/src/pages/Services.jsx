import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, X, ChevronRight, Eye, Settings, Cpu, Wrench } from 'lucide-react';
import Bridge from '../assets/Bridge.png';
import Dam from '../assets/Dam.png';
import Ship from '../assets/Ship.png';
import UTM from '../assets/UTM.png';
import Watertank from '../assets/Watertank.png';
import enquiryDirection from '../assets/EnquiryDirection.png';

/* ============================== DATA ====================================== */

const inspectionEnvironments = [
  { n: '01', title: 'Marine structures', detail: 'Visual inspection of bridge pillars, jetties, piles and port structures.', image: Bridge, caption: 'PORT STRUCTURES' },
  { n: '02', title: 'Dams & water infrastructure', detail: 'Submerged walls, intakes, reservoirs and penstocks.', image: Dam, caption: 'SUBMERGED WALLS & INTAKES' },
  { n: '03', title: 'Tanks & storage', detail: 'Underwater surfaces inside water-storage and industrial tanks.', image: Watertank, caption: 'TANKS & STORAGE' },
  { n: '04', title: 'Vessels & pipelines', detail: 'Ship hulls and submerged pipelines.', image: Ship, caption: 'SUBMERGED PIPELINES' },
];

const assessmentSteps = [
  { n: '01', title: 'Interpret inspection data', detail: 'Review underwater footage and measurements.' },
  { n: '02', title: 'Document visible defects', detail: 'Classify issues and record supporting evidence.' },
  { n: '03', title: 'Plan further assessment', detail: 'Recommend next steps, repairs or additional surveys.' },
];

const futureCapabilities = [
  { title: 'Custom ROV development', detail: 'Mission-specific platforms, payloads and sensors.' },
  { title: 'Embedded systems & robotics R&D', detail: 'Automation, sensor integration and control systems.' },
];

const services = [
  { title: 'Underwater ROV Inspection Services', description: 'We provide comprehensive underwater inspection services using state-of-the-art ROV technology. Our experienced team conducts detailed visual inspections and measurements of underwater structures without the need for divers, ensuring safety and efficiency.', points: [{ title: 'Bridge pillar visual inspection', image: Bridge, content: { title: 'Bridge Pillar Visual Inspection', description: 'We perform detailed visual inspections of underwater bridge pillars using advanced ROV technology.', process: ['Capture 360° video and images around the pillars using high-resolution ROV cameras.', 'Identify cracks, corrosion, leakages, sediment accumulation, or structural damages.', 'Provide recorded footage and inspection reports for analysis.', 'Perform thickness measurements if required.'] } }, { title: 'Water storage tank visual inspection', image: Watertank, content: { title: 'Water Storage Tank Visual Inspection', description: 'We inspect water storage tanks internally using ROVs without the need to drain the tank, saving time and cost.', process: ['Deploy ROV inside the tank to visually scan walls, floor, and joints.', 'Identify corrosion, cracks, sediment buildup, and internal damage.', 'Provide complete video documentation and inspection report.'] } }, { title: 'Ship hull inspection', image: Ship, content: { title: 'Ship Hull Inspection', description: 'We conduct underwater inspections of ship hulls to assess the condition without dry-docking.', process: ['Scan the hull surface thoroughly using ROV cameras.', 'Detect corrosion, biofouling, patches, or structural damages.', 'Provide high-resolution video and image evidence for reports.'] } }, { title: 'Dam structure inspection', image: Dam, content: { title: 'Dam Structure Inspection', description: 'We offer underwater inspections of dam structures to identify potential threats and maintain safety.', process: ['Inspect submerged walls, spillways, and pillars using ROVs.', 'Detect cracks, seepages, sediment deposits, and erosion.', 'Provide complete video documentation for technical analysis.'] } }, { title: 'Underwater thickness measurement (UTM)', image: UTM, content: { title: 'Underwater Thickness Measurement (UTM)', description: 'We measure the metal thickness of submerged structures to assess their integrity.', process: ['Use specialized underwater thickness gauges through ROVs.', 'Detect thinning, corrosion, and structural weakening.'] } }], icon: Eye },
  { title: 'Custom ROV Development', description: 'We specialize in developing customized underwater robotic systems to meet specific project requirements. Our expertise lies in R&D-based design, payload integration, and modular, upgradable solutions.', points: [{ title: 'Tailored underwater robotic systems' }, { title: 'R&D-based custom design' }, { title: 'Integration of payloads and sensors' }, { title: 'Prototype testing and deployment' }, { title: 'Upgradable modular designs' }], icon: Settings, comingSoon: true },
  { title: 'Embedded Systems & Robotics R&D', description: 'We offer specialized R&D services in embedded systems and robotics, delivering tailored automation solutions with integrated sensors, real-time control, and data systems.', points: [{ title: 'Custom automation solutions' }, { title: 'Sensor integration and IoT' }, { title: 'Control system development' }, { title: 'Real-time data acquisition systems' }, { title: 'Prototyping and field testing' }], icon: Cpu, comingSoon: true },
  { title: 'Maintenance & Post-Inspection Support', description: 'We provide comprehensive maintenance and support services after inspections, ensuring sustained system performance and accurate defect management.', points: [{ title: 'Defect analysis and reporting' }, { title: 'Inspection data interpretation' }, { title: 'Performance monitoring services' }, { title: 'Recommendations for corrective actions' }, { title: 'Post-inspection technical support' }], icon: Wrench },
];

/* ============================ COMPONENT ================================== */

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.serviceTitle) {
      const target = services.find((s) => s.title === location.state.serviceTitle);
      if (target) {
        setSelectedService(target);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location]);

  const closeModal = () => setSelectedService(null);

  return (
    <div className="bg-[#EDF0EF] min-h-screen">

      {/* ==================================================================== */}
      {/*  00 / HERO                                                            */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-28 pb-16">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            SOLUTIONS &nbsp;/&nbsp; UNDERWATER INSPECTION
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] font-black leading-[1.02] tracking-tight text-black mb-14 max-w-5xl">
            CLARITY BELOW<br />THE WATERLINE.
          </h1>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 pt-2">
              <p className="text-neutral-700 text-lg leading-relaxed mb-10 max-w-md">
                Inspect submerged assets with remotely operated vehicles.
                Capture underwater observations to support assessment and maintenance decisions.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300">
                Discuss an Inspection <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] tracking-[0.18em] text-neutral-500 font-semibold mt-8 max-w-xs">
                FOR YOUR CONTACT ENQUIRY: SHARE THE ASSET, INSPECTION OBJECTIVE AND KNOWN SITE CONDITIONS.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
                <img src={Bridge} alt="Bridge foundation below the waterline" className="w-full h-full object-cover" />
              </div>
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mt-5">
                BRIDGE FOUNDATIONS &nbsp;/&nbsp; BELOW THE WATERLINE
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="border-t border-neutral-300 pt-6 pb-6">
            <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold">
              INSPECTION ENVIRONMENTS ↓
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  01 / INSPECTION ENVIRONMENTS — DARK ANCHOR                           */}
      {/* ==================================================================== */}
      <section className="relative bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            01 &nbsp;/&nbsp; INSPECTION ENVIRONMENTS
          </p>

          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <h2 className="lg:col-span-7 text-5xl sm:text-6xl lg:text-[4rem] font-black leading-[1.02] tracking-tight text-white">
              WHAT DO YOU NEED<br />TO INSPECT?
            </h2>
            <p className="lg:col-span-5 text-neutral-400 text-lg leading-relaxed max-w-md lg:pt-4">
              We inspect the submerged structures that matter most — below the waterline.
            </p>
          </div>

          {/* 4 service entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
            {inspectionEnvironments.map((item) => (
              <div key={item.n} className="border-t border-neutral-700 pt-8">
                <p className="text-[11px] tracking-[0.18em] text-orange-500 font-bold mb-5">{item.n}</p>
                <h3 className="text-2xl sm:text-[1.75rem] font-black text-white tracking-tight mb-3">{item.title}</h3>
                <p className="text-base text-neutral-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* 3-image strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[inspectionEnvironments[0], inspectionEnvironments[1], inspectionEnvironments[3]].map((item) => (
              <div key={item.caption}>
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                </div>
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mt-4">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  02 / FROM OBSERVATION TO ASSESSMENT — LIGHT                          */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            02 &nbsp;/&nbsp; FROM OBSERVATION TO ASSESSMENT
          </p>
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
            <h2 className="lg:col-span-7 text-5xl sm:text-6xl lg:text-[4rem] font-black leading-[1.02] tracking-tight text-black">
              FROM OBSERVATION<br />TO NEXT STEPS.
            </h2>
            <p className="lg:col-span-5 text-neutral-600 text-lg leading-relaxed max-w-md lg:pt-4">
              Interpret inspection data, document visible defects and plan further assessment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {assessmentSteps.map((step) => (
              <div key={step.n} className="border-t border-neutral-400 pt-8">
                <p className="text-[11px] tracking-[0.18em] text-orange-600 font-bold mb-5">{step.n}</p>
                <h3 className="text-2xl font-black text-black tracking-tight mb-3">{step.title}</h3>
                <p className="text-base text-neutral-600 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  03 / OUR SERVICES — CARDS ON LIGHT                                   */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF] border-t border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            03 &nbsp;/&nbsp; OUR SERVICES
          </p>

          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <h2 className="lg:col-span-7 text-5xl sm:text-6xl lg:text-[4rem] font-black leading-[1.02] tracking-tight text-black">
              WHAT WE<br />DELIVER.
            </h2>
            <p className="lg:col-span-5 text-neutral-600 text-lg leading-relaxed max-w-md lg:pt-4">
              Four core service lines across inspection, custom development, R&D and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.title}
                  onClick={() => setSelectedService(service)}
                  className="group text-left bg-white border border-neutral-200 hover:border-orange-400 transition-all duration-300 p-8 lg:p-10 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="w-7 h-7 text-orange-500" strokeWidth={1.5} />
                    {service.comingSoon && (
                      <span className="text-[10px] tracking-[0.18em] text-orange-600 font-bold border border-orange-500 px-2.5 py-1">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl lg:text-[1.75rem] font-black text-black tracking-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base text-neutral-600 leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-black group-hover:text-orange-600 transition-colors">
                    Explore Details <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  04 / FUTURE CAPABILITIES                                             */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF] border-t border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            04 &nbsp;/&nbsp; FUTURE CAPABILITIES
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {futureCapabilities.map((item) => (
              <div key={item.title} className="border-t border-neutral-400 pt-8">
                <span className="inline-block text-[10px] tracking-[0.18em] text-orange-600 font-bold border border-orange-500 px-2.5 py-1 mb-6">
                  Coming soon
                </span>
                <h3 className="text-2xl sm:text-[1.75rem] font-black text-black tracking-tight mb-3">{item.title}</h3>
                <p className="text-base text-neutral-600 leading-relaxed max-w-md">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  05 / START A CONVERSATION                                            */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF] border-t border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-12">
                <span className="text-orange-500">+</span> &nbsp; START A CONVERSATION
              </p>
              <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1] tracking-tight text-black mb-10">
                WHAT'S BENEATH<br />YOUR OPERATION?
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-xl mb-6">
                Tell us about your environment, your assets and the challenge below the waterline. Let's define the next step together.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xl">
                Contact enquiry context: underwater inspection, project requirements or future development.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col items-end gap-10 lg:pt-4">
              <img src={enquiryDirection} alt="" aria-hidden="true" className="w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] object-contain" />
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300">
                Discuss a Project <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  SERVICE MODAL                                                        */}
      {/* ==================================================================== */}
      {selectedService && (
        <div onClick={closeModal} className="fixed inset-0 z-50 flex items-start lg:items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-12 overflow-y-auto">
          <div onClick={(e) => e.stopPropagation()} className="relative bg-white max-w-3xl w-full p-8 lg:p-10 border border-neutral-300 my-auto">
            <button onClick={closeModal} className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors" aria-label="Close">
              <X size={16} />
            </button>
            <div className="flex items-start gap-4 mb-8 pr-12">
              {selectedService.icon && React.createElement(selectedService.icon, { className: 'w-6 h-6 text-orange-600 mt-1 flex-shrink-0' })}
              <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight">{selectedService.title}</h2>
            </div>
            {selectedService.description && (
              <p className="text-neutral-700 leading-relaxed mb-8 text-base">{selectedService.description}</p>
            )}
            {selectedService.comingSoon && (
              <div className="border-l-4 border-orange-500 bg-orange-50 px-5 py-4 mb-8">
                <p className="text-[10px] tracking-[0.22em] text-orange-700 font-bold mb-1">IN DEVELOPMENT</p>
                <p className="text-sm text-neutral-700">This service is currently in development and will be available soon.</p>
              </div>
            )}
            <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-5">SERVICES OFFERED</p>
            {selectedService.title === 'Underwater ROV Inspection Services' ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedService.points.map((point) => (
                  <div key={point.title} className="border border-neutral-200">
                    {point.image && (
                      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                        <img src={point.image} alt={point.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <p className="text-xs font-bold text-neutral-800 p-3 leading-tight">{point.title}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="border-t border-neutral-200">
                {selectedService.points.map((point) => (
                  <li key={point.title} className="flex items-center gap-3 py-4 border-b border-neutral-200">
                    <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-sm text-neutral-800 font-medium">{point.title}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-black font-semibold transition-all duration-300">
                Discuss this Service <ArrowUpRight className="w-4 h-4" />
              </a>
              <button onClick={closeModal} className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-400 hover:border-black text-neutral-800 font-semibold transition-all duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;