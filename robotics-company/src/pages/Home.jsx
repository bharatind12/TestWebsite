import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  Play,
  X,
  VideoOff,
  Box,
  Scan,
  ScanEye,
  Wrench,
  Waves,
  Camera,
  Lightbulb,
  Move3d,
  Gauge,
  Crosshair,
} from 'lucide-react';
import homepagebg from '../assets/transparent-rov.png';
import praxoramodel from '../assets/praxoramodel.jpeg';
import damsImg from '../assets/Solution/Solution IMG/dam-2.png';
import portsImg from '../assets/Solution/Solution IMG/port-1.png';
import bridgesImg from '../assets/Solution/Solution IMG/bridge-2.png';
import pipelinesImg from '../assets/Solution/Solution IMG/pipeline-1.png';
import enquiryDirection from '../assets/EnquiryDirection.png';

const videoSrc = null;

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const environments = [
  { name: 'Dams', detail: 'Dam faces, intakes & gates', image: damsImg },
  { name: 'Ports', detail: 'Quay walls, piles & jetty structures', image: portsImg },
  { name: 'Bridges', detail: 'Piers, piles & submerged foundations', image: bridgesImg },
  { name: 'Pipelines', detail: 'Submerged pipelines, intakes & outfalls', image: pipelinesImg },
];

const approachSteps = [
  { title: 'Robotics', text: 'Deploy engineered robotic systems in challenging and hard-to-reach environments.', Icon: Box },
  { title: 'Sense', text: 'Capture underwater imagery, sensor data and inspection evidence.', Icon: Scan },
  { title: 'Intelligence', text: 'Turn inspection data into actionable insights about asset condition.', Icon: ScanEye },
  { title: 'Intervene', text: 'Enable future robotic intervention through purpose-built tools and systems.', Icon: Wrench },
];

const leftSpecs = [
  { Icon: Waves, title: 'Depth Rating', value: '200 m', note: 'Maximum operating depth' },
  { Icon: Lightbulb, title: 'LED Illumination', value: '10,000 Lumens', note: 'Dual LED lighting system' },
  { Icon: Gauge, title: 'Maximum Speed', value: '3 Knots', note: 'Approx. 1.5 m/s in still water' },
];

const rightSpecs = [
  { Icon: Camera, title: '4K UHD Imaging', value: '4K UHD', note: 'High-resolution underwater video' },
  { Icon: Move3d, title: 'Omnidirectional Mobility', value: '6 DOF', note: 'Six degrees of freedom for underwater manoeuvring' },
  { Icon: Crosshair, title: 'Precision Depth Holding', value: '±1 cm', note: 'Depth-holding stability' },
];

/* -------------------------------------------------------------------------- */
/*  HELPERS                                                                   */
/* -------------------------------------------------------------------------- */

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth' });
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */

const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => e.key === 'Escape' && setIsVideoOpen(false);
    if (isVideoOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isVideoOpen]);

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoOpen(false);
  };

  return (
    <div className="relative bg-[#EDF0EF]">
      {/* ==================================================================== */}
      {/*  01 / HERO                                                            */}
      {/* ==================================================================== */}
      <section id="home" className="relative overflow-hidden bg-[#EDF0EF]">
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-24 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="flex flex-col h-full pt-4">
              <div
                className="fade-up inline-flex items-center gap-2 px-3.5 py-1.5 border border-neutral-300 mb-8 w-fit"
                style={{ animationDelay: '0.05s' }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                </span>
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold">
                  INDIAN UNDERWATER ROBOTICS COMPANY
                </p>
              </div>

              <h1
                className="fade-up text-5xl sm:text-6xl lg:text-[4.2rem] font-black leading-[1.05] tracking-tight mb-6 text-black"
                style={{ animationDelay: '0.1s' }}
              >
                ENGINEERING
                <br />
                BENEATH
                <br />
                THE SURFACE.
              </h1>

              <div className="fade-up w-14 h-[3px] bg-orange-500 mb-6" style={{ animationDelay: '0.15s' }} />

              <p
                className="fade-up text-neutral-600 text-base sm:text-lg max-w-md mb-9 leading-relaxed"
                style={{ animationDelay: '0.2s' }}
              >
                Advanced robotic systems built to inspect, understand and operate
                underwater — engineered for depth, built for precision.
              </p>

              <div className="fade-up flex flex-wrap items-center gap-4 mb-12" style={{ animationDelay: '0.25s' }}>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black/10">
                    <Play className="w-2.5 h-2.5 fill-black ml-0.5" />
                  </span>
                  Video
                </button>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-400 hover:border-neutral-900 text-neutral-800 font-semibold transition-all duration-300"
                >
                  Discuss a Project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <p
                className="fade-up mt-auto pt-4 text-[11px] tracking-widest text-neutral-500 font-semibold"
                style={{ animationDelay: '0.3s' }}
              >
                TRUSTED BY INDUSTRIAL &amp; MARINE OPERATORS ACROSS INDIA.
              </p>
            </div>

            <div className="relative flex flex-col h-full pt-4">
              <div className="relative flex-1 flex items-center justify-center min-h-[520px]">
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.55]"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #f5d6bd 1px, transparent 1px), linear-gradient(to bottom, #f5d6bd 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(circle at center, black 45%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 80%)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[90%] h-[90%] rounded-full bg-gradient-to-br from-orange-200/40 via-orange-100/20 to-transparent blur-3xl" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[65%] aspect-square rounded-full border border-orange-300/30" />
                  <div className="absolute w-[85%] aspect-square rounded-full border border-orange-300/15" />
                  <div className="absolute w-[105%] aspect-square rounded-full border border-orange-300/[0.08]" />
                </div>

                <img
                  src={homepagebg}
                  alt="P1 Pro ROV Platform"
                  className="relative z-10 w-[150%] max-w-none object-contain drop-shadow-[0_35px_45px_rgba(10,10,10,0.25)]"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[65%] h-8 bg-neutral-900/25 blur-3xl rounded-full" />
              </div>

              <div className="flex items-center justify-between pt-4 mt-1">
                <p className="text-[11px] tracking-[0.18em] font-bold text-neutral-500">BUILT IN INDIA</p>
                <p className="text-[11px] tracking-[0.18em] font-bold text-orange-600">
                  ENGINEERED FOR THE WORLD BELOW
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  02 / THE UNSEEN ENVIRONMENT — DARK                                   */}
      {/* ==================================================================== */}
      <section id="environment" className="relative bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <p className="text-[10px] tracking-[0.22em] text-orange-500 font-bold mb-10">
            01 / THE UNSEEN ENVIRONMENT
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black leading-[1.05] tracking-tight text-white">
              CRITICAL
              <br />
              INFRASTRUCTURE
              <br />
              DOESN'T STOP AT
              <br />
              THE WATERLINE.
            </h2>
            <div className="space-y-4 max-w-md lg:pt-4">
              <p className="text-neutral-400 text-base leading-relaxed">
                Below the surface, visibility is limited and access is challenging. Yet
                the infrastructure we depend on extends far beneath the waterline.
              </p>
              <p className="text-neutral-400 text-base leading-relaxed">
                Praxora Robotics deploys remotely operated vehicles (ROVs) to
                inspect hard-to-reach underwater structures, capture high-quality
                visual evidence, and support informed infrastructure maintenance
                decisions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {environments.map((env) => (
              <article key={env.name} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 mb-4">
                  <img
                    src={env.image}
                    alt={`Underwater ${env.name.toLowerCase()} infrastructure`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1.5">{env.name}</h3>
                <p className="text-[10px] tracking-[0.18em] text-neutral-500 font-bold uppercase">
                  {env.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="flex justify-end mt-10">
            <button
              onClick={() => scrollToSection('approach')}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] font-bold text-neutral-400 hover:text-orange-500 transition-colors"
            >
              SCROLL TO DISCOVER
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  03 / OUR APPROACH                                                    */}
      {/* ==================================================================== */}
      <section id="approach" className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            02 &nbsp;/&nbsp; OUR APPROACH
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1] tracking-tight text-black">
              SEE WHAT
              <br />
              OTHERS CAN'T.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-md lg:pt-6">
              Praxora uses remotely operated vehicles that connect physical access with
              meaningful intelligence. Inspection is the starting point, not the limit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map(({ title, text, Icon }) => (
              <article
                key={title}
                className="border-2 border-[#EDF0EF] p-7 lg:p-8 flex flex-col"
              >
                <Icon
                  className="w-8 h-8 text-orange-500 mb-10"
                  strokeWidth={1.5}
                />

                <h3 className="text-xl sm:text-2xl font-black text-black mb-3 tracking-tight">
                  {title.toUpperCase()}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  04 / ROV PLATFORM — 3-column, static image                           */}
      {/* ==================================================================== */}
      <section id="platform" className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-12">
            03 &nbsp;/&nbsp; ROV PLATFORM &nbsp;/&nbsp; P1 PRO
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1] tracking-tight text-black">
              EXPLORE.
              <br />
              INSPECT. OPERATE.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-md lg:pt-6">
              An inspection-first robotic platform. Designed around visibility,
              controlled movement and the freedom to evolve with the mission.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* LEFT SPECS */}
            <div className="hidden lg:flex lg:col-span-3 flex-col">
              {leftSpecs.map(({ Icon, title, value, note }) => (
                <div
                  key={title}
                  className="pb-6 mb-6 border-b border-neutral-300 last:border-b-0 last:mb-0 last:pb-0"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-white flex-shrink-0">
                      <Icon
                        className="w-4 h-4 text-orange-500"
                        strokeWidth={1.75}
                      />
                    </div>
                    <p className="text-[10px] tracking-[0.18em] text-neutral-500 font-bold uppercase pt-2">
                      {title}
                    </p>
                  </div>
                  <p className="text-2xl font-black text-black tracking-tight mb-1">
                    {value}
                  </p>
                  <p className="text-xs text-neutral-500 leading-snug">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            {/* CENTER: ROV IMAGE — static */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-neutral-300/70" />
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-neutral-300/70" />
                    <div className="absolute inset-[6%] rounded-full border border-neutral-300/50" />
                  </div>
                </div>

                <img
                  src={praxoramodel}
                  alt="Praxora P1 PRO ROV"
                  loading="lazy"
                  className="relative z-10 w-full h-auto object-contain mix-blend-multiply"
                />
              </div>

              <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.22em] text-neutral-500 font-bold whitespace-nowrap">
                P1 PRO &nbsp;/&nbsp; ROV PLATFORM
              </p>
            </div>

            {/* RIGHT SPECS */}
            <div className="hidden lg:flex lg:col-span-3 flex-col">
              {rightSpecs.map(({ Icon, title, value, note }) => (
                <div
                  key={title}
                  className="pb-6 mb-6 border-b border-neutral-300 last:border-b-0 last:mb-0 last:pb-0"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-white flex-shrink-0">
                      <Icon
                        className="w-4 h-4 text-orange-500"
                        strokeWidth={1.75}
                      />
                    </div>
                    <p className="text-[10px] tracking-[0.18em] text-neutral-500 font-bold uppercase pt-2">
                      {title}
                    </p>
                  </div>
                  <p className="text-2xl font-black text-black tracking-tight mb-1">
                    {value}
                  </p>
                  <p className="text-xs text-neutral-500 leading-snug">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile fallback */}
          <div className="lg:hidden mt-12 space-y-6">
            {[...leftSpecs, ...rightSpecs].map(({ Icon, title, value, note }) => (
              <div
                key={title}
                className="pb-6 border-b border-neutral-300 last:border-b-0 last:pb-0"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-white flex-shrink-0">
                    <Icon className="w-4 h-4 text-orange-500" strokeWidth={1.75} />
                  </div>
                  <p className="text-[10px] tracking-[0.18em] text-neutral-500 font-bold uppercase pt-2.5">
                    {title}
                  </p>
                </div>
                <p className="text-2xl font-black text-black tracking-tight mb-1">
                  {value}
                </p>
                <p className="text-sm text-neutral-500 leading-snug">{note}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-20">
            <button
              onClick={() => scrollToSection('conversation')}
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] font-bold text-neutral-500 hover:text-orange-600 transition-colors"
            >
              SCROLL TO DISCOVER
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  05 / START A CONVERSATION                                            */}
      {/* ==================================================================== */}
      <section id="conversation" className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-12">
                <span className="text-orange-500">+</span> &nbsp; 04 &nbsp;/&nbsp; START A
                CONVERSATION
              </p>
              <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1] tracking-tight text-black mb-10">
                WHAT'S BENEATH
                <br />
                YOUR OPERATION?
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-xl">
                Tell us about your environment, your assets and the challenge below the
                waterline. Let's define the next step together.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-end gap-10 lg:pt-4">
              <img
                src={enquiryDirection}
                alt=""
                aria-hidden="true"
                className="w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] object-contain"
              />

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300"
              >
                Discuss a Project
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  VIDEO MODAL                                                          */}
      {/* ==================================================================== */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-neutral-950 overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

            {videoSrc ? (
              <video ref={videoRef} src={videoSrc} controls autoPlay className="w-full h-full" />
            ) : (
              <div className="flex flex-col items-center justify-center text-center px-6">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <VideoOff className="w-6 h-6 text-neutral-400" />
                </div>
                <p className="text-neutral-200 font-semibold mb-1">Video coming soon</p>
                <p className="text-neutral-500 text-sm max-w-xs">
                  We're preparing a demo reel of the P1 Pro in action. Check back shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </div>
  );
};

export default Home;