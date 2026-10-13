import React, { useState } from 'react';
import {
  ArrowUpRight,
  X,
  Waves,
  Camera,
  Lightbulb,
  Move3d,
  Gauge,
  Crosshair,
} from 'lucide-react';
import productHeroStage from '../assets/praxoramodel-2.png';
import enquiryDirection from '../assets/EnquiryDirection.png';

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = {
    name: 'Praxora P1 Pro',
    category: 'P1 PRO',
    eyebrow: 'REMOTELY OPERATED VEHICLE',
    shortDescription:
      'An inspection-first underwater robotic platform designed around visibility, controlled movement and mission adaptability.',
    leftSpecs: [
      { Icon: Waves, label: 'DEPTH RATING', value: '200 m', note: 'Maximum operating depth' },
      { Icon: Lightbulb, label: 'LED ILLUMINATION', value: '10,000 lm', note: 'Dual LED lighting system' },
      { Icon: Gauge, label: 'MAX SPEED', value: '3 Knots', note: '≈ 1.5 m/s in still water' },
    ],
    rightSpecs: [
      { Icon: Camera, label: '4K UHD IMAGING', value: '4K UHD', note: 'High-resolution underwater video' },
      { Icon: Move3d, label: 'OMNIDIRECTIONAL MOBILITY', value: '6 DOF', note: 'Six degrees of freedom' },
      { Icon: Crosshair, label: 'PRECISION DEPTH HOLDING', value: '± 1 cm', note: 'Depth-holding stability' },
    ],
    keyApplications: [
      'Bridge & dam inspection',
      'Port and harbour asset monitoring',
      'Pipeline and underwater cable surveys',
      'Tank and reservoir inspection',
      'Marine biology and environmental studies',
    ],
    disclaimer:
      'Features shown represent design intent. Confirm specifications and available configurations with Praxora.',
    overview:
      'Next-generation ROV engineered for high-performance underwater operations — combining AI intelligence, modular expandability, and precision control.',
    features: [
      { title: 'Modular Design', desc: '3 multi-functional ports for sonar, scaler, manipulator arms.' },
      { title: 'Intelligent AI', desc: 'Target tracking, image enhancement, adaptive stabilization.' },
      { title: 'Extended Operation', desc: 'Tethered power for long-duration missions.' },
      { title: 'Deep Diving', desc: 'Operates efficiently at significant depths.' },
      { title: '4K Visuals', desc: 'UHD camera with powerful underwater lighting.' },
    ],
    conclusion:
      'Advanced Underwater ROV — reliability, precision, and versatility for professionals.',
  };

  return (
    <div className="bg-[#EDF0EF] min-h-screen">
      {/* ==================================================================== */}
      {/*  00 / HERO                                                            */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-24 pb-14">
          <div className="flex items-center justify-between mb-12">
            <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold">
              PRODUCTS &nbsp;/&nbsp; {product.category}
            </p>
            <p className="text-[10px] tracking-[0.22em] text-orange-600 font-bold">
              {product.eyebrow}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[1] tracking-tight text-black">
              EXPLORE.
              <br />
              INSPECT. OPERATE.
            </h1>

            <div className="lg:pt-4">
              <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
                {product.shortDescription}
              </p>
            </div>
          </div>

          {/* PRODUCT HEADING ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 mb-10">
            <div className="hidden lg:block lg:col-span-3" />

            <div className="lg:col-span-6 text-center">
              <p className="text-[10px] tracking-[0.22em] text-orange-600 font-bold mb-2">
                {product.eyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black text-black tracking-tight leading-tight mb-2">
                {product.name}
              </h2>
              <p className="text-sm text-neutral-500">
                Explore. Inspect. Operate.
              </p>
            </div>

            <div className="hidden lg:flex lg:col-span-3 justify-end items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-black text-sm font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300"
              >
                View Details
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ROV DIAGRAM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            <div className="hidden lg:flex lg:col-span-3 flex-col">
              {product.leftSpecs.map(({ Icon, label, value, note }) => (
                <div key={label} className="pb-5 mb-5 border-b border-neutral-300 last:border-b-0 last:mb-0 last:pb-0">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-white flex-shrink-0">
                      <Icon className="w-4 h-4 text-orange-500" strokeWidth={1.75} />
                    </div>
                    <p className="text-[10px] tracking-[0.18em] text-neutral-500 font-bold uppercase pt-2">
                      {label}
                    </p>
                  </div>
                  <p className="text-2xl font-black text-black tracking-tight mb-1">{value}</p>
                  <p className="text-xs text-neutral-500 leading-snug">{note}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[460px] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-neutral-300/70" />
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-neutral-300/70" />
                    <div className="absolute inset-[6%] rounded-full border border-neutral-300/50" />
                  </div>
                </div>

                <img
                  src={productHeroStage}
                  alt={product.name}
                  className="relative z-10 w-full h-auto object-contain mix-blend-multiply drop-shadow-[0_30px_50px_rgba(10,10,10,0.15)]"
                />
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-3 flex-col">
              {product.rightSpecs.map(({ Icon, label, value, note }) => (
                <div key={label} className="pb-5 mb-5 border-b border-neutral-300 last:border-b-0 last:mb-0 last:pb-0">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-white flex-shrink-0">
                      <Icon className="w-4 h-4 text-orange-500" strokeWidth={1.75} />
                    </div>
                    <p className="text-[10px] tracking-[0.18em] text-neutral-500 font-bold uppercase pt-2">
                      {label}
                    </p>
                  </div>
                  <p className="text-2xl font-black text-black tracking-tight mb-1">{value}</p>
                  <p className="text-xs text-neutral-500 leading-snug">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View Details */}
          <div className="lg:hidden mt-8 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-black text-sm font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300"
            >
              View Details
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile specs */}
          <div className="lg:hidden mt-10 space-y-5">
            {[...product.leftSpecs, ...product.rightSpecs].map(({ Icon, label, value, note }) => (
              <div key={label} className="pb-5 border-b border-neutral-300 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-white flex-shrink-0">
                    <Icon className="w-4 h-4 text-orange-500" strokeWidth={1.75} />
                  </div>
                  <p className="text-[10px] tracking-[0.18em] text-neutral-500 font-bold uppercase pt-2.5">
                    {label}
                  </p>
                </div>
                <p className="text-2xl font-black text-black tracking-tight mb-1">{value}</p>
                <p className="text-sm text-neutral-500 leading-snug">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-6 border-t border-neutral-300">
            <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-3">
              DESIGN INTENT &nbsp;/&nbsp; NOT SPECIFICATIONS
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">
              {product.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  01 / KEY APPLICATIONS — DARK                                         */}
      {/* ==================================================================== */}
      <section className="relative bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            01 &nbsp;/&nbsp; KEY APPLICATIONS
          </p>

          <div className="grid lg:grid-cols-12 gap-12 items-start mb-12">
            <h2 className="lg:col-span-7 text-5xl sm:text-6xl lg:text-[3.5rem] font-black leading-[1.02] tracking-tight text-white">
              WHERE THE P1 PRO
              <br />
              DELIVERS VALUE.
            </h2>
            <p className="lg:col-span-5 text-neutral-400 text-lg leading-relaxed max-w-md lg:pt-4">
              Designed for asset owners, inspection firms and research teams
              across marine, water and industrial environments.
            </p>
          </div>

          <ul className="border-t border-neutral-700">
            {product.keyApplications.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-6 lg:gap-10 py-5 border-b border-neutral-700 hover:bg-neutral-900 transition-colors px-2 -mx-2"
              >
                <span className="text-[11px] tracking-[0.18em] text-orange-500 font-bold w-10">
                  0{i + 1}
                </span>
                <span className="text-lg sm:text-xl lg:text-[1.35rem] font-bold text-white tracking-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  02 / START A CONVERSATION                                            */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
                <span className="text-orange-500">+</span> &nbsp; START A CONVERSATION
              </p>
              <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-black leading-[1] tracking-tight text-black mb-8">
                WHAT'S BENEATH
                <br />
                YOUR OPERATION?
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-xl mb-6">
                Tell us about your environment, your assets and the challenge below
                the waterline. Let's define the next step together.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xl">
                For your Contact enquiry: mention {product.name}, your intended
                application and the configuration you would like to discuss.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-end gap-10 lg:pt-4">
              <img
                src={enquiryDirection}
                alt=""
                aria-hidden="true"
                className="w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] object-contain"
              />

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300"
              >
                Discuss {product.name}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  PRODUCT DETAILS MODAL                                                */}
      {/* ==================================================================== */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white max-w-3xl w-full border border-neutral-300 max-h-[92vh] overflow-y-auto"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-neutral-100 text-neutral-700 transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>

            <div className="relative w-full h-[280px] bg-white border-b border-neutral-200 flex items-center justify-center">
              <img
                src={productHeroStage}
                alt={product.name}
                className="w-full h-full object-contain p-6"
              />
            </div>

            <div className="p-7 lg:p-8">
              <div className="mb-5">
                <p className="text-[10px] tracking-[0.22em] text-orange-600 font-bold mb-2">
                  {product.eyebrow}
                </p>
                <h2 className="text-2xl lg:text-[1.75rem] font-black text-black tracking-tight leading-tight mb-1.5">
                  {product.name}
                </h2>
                <p className="text-sm text-neutral-500">
                  Explore. Inspect. Operate.
                </p>
              </div>

              <div className="border-t border-neutral-200 mb-5" />

              <div className="mb-5">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-2.5">
                  PRODUCT OVERVIEW
                </p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {product.overview}
                </p>
              </div>

              <div className="mb-5">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-3">
                  ADVANCED FEATURES
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature.title}
                      className="border-l-2 border-orange-500 pl-3"
                    >
                      <p className="text-sm font-bold text-black mb-0.5">
                        {feature.title}
                      </p>
                      <p className="text-sm text-neutral-600 leading-snug">
                        {feature.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-5">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-3">
                  KEY APPLICATIONS
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.keyApplications.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 border border-neutral-200 bg-neutral-50 px-3 py-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-orange-500 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 px-4 py-3 mb-5">
                <p className="text-sm text-neutral-800 leading-relaxed">
                  {product.conclusion}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-black text-sm font-semibold transition-all duration-300"
                >
                  Request Quote
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-400 hover:border-black text-neutral-800 text-sm font-semibold transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;