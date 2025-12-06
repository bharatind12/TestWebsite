import React, { useState, useRef } from "react";

const AboutUs = () => {
  // State for ROV Mouse Follower
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const heroRef = useRef(null);

  // Handle Mouse Move for ROV Effect
  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const sections = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
      ),
      title: "About Us",
      description: (
        <div className="space-y-3">
          <p className="font-bold text-lg mb-3 bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent">
            Innovating Tomorrow, Beneath and Beyond the Surface
          </p>
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-cyan-700">Praxora Robotics Pvt Ltd</strong> is a next-generation robotics and deep-tech company, redefining how industries inspect, analyze, and maintain critical infrastructure through <strong className="text-cyan-600">underwater robotic inspections</strong> and <strong className="text-cyan-600">custom robotic systems</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed text-sm">
            Our core strength lies in <strong className="text-cyan-700">ROV based underwater inspections</strong>, delivering <strong className="text-cyan-700">smart, scalable, and safe solutions</strong> powered by cutting-edge research and real-world engineering expertise.
          </p>
        </div>
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-6 h-6">
          <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6-.6 0-1.1.2-1.4.6L7 9.1c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 16h2v-6l-2.2-2.5zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
        </svg>
      ),
      title: "Industries We Serve",
      description: (
        <div className="space-y-3">
          <p className="text-slate-700 leading-relaxed text-sm">
            Our ROVs and customized robotics systems perform critical inspections and monitoring in challenging environments across multiple sectors.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Marine Infrastructure",
              "Ports & Harbors", 
              "Oil & Gas",
              "Utilities",
              "Defense",
              "Smart Cities"
            ].map((item, index) => (
              <div key={index} className="bg-white px-3 py-2 rounded-lg border border-blue-100 hover:border-cyan-300 transition-colors">
                <h4 className="font-semibold text-cyan-700 text-xs">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-6 h-6">
          <path d="M19.92 12.08c-.2-.45-.47-.81-.79-1.09l-.69-.61c-.2-.18-.37-.33-.52-.46a.94.94 0 0 1-.26-.91c.3-1.2-.57-2.28-1.68-2.59-.49-.14-1-.09-1.47.14a2 2 0 0 0-1.1 1.25c-.33.79-.21 1.83.32 2.49.13.17.15.38.05.56-.11.19-.32.31-.55.31-.23 0-.43-.12-.54-.3-.23-.38-.53-.68-.89-.89l.05-.05c.31-.31.49-.74.49-1.18 0-.45-.18-.87-.49-1.18a1.65 1.65 0 0 0-2.36 0c-.31.31-.49.73-.49 1.18 0 .45.18.87.49 1.18.04.04.09.08.13.12-.22.05-.43.13-.62.24-.2-.43-.54-.8-.97-1.04a1.987 1.987 0 0 0-1.89 0 2 2 0 0 0-.97 1.04c-.44.96-.05 2.09.87 2.68l.01.01c.34.37.79.89 1.48 1.58l.09.1c1.27 1.27 2.96 1.97 4.75 1.97 1.79 0 3.48-.7 4.75-1.97s1.97-2.96 1.97-4.75c0-.2-.02-.4-.04-.59zM15 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      ),
      title: "Our Mission",
      description: (
        <div className="space-y-2">
          {[
            "Deliver safe, accurate, and cost-effective robotic inspection solutions",
            "Build India's strongest R&D ecosystem for next-generation robotics", 
            "Drive indigenous design and development in automation technologies"
          ].map((mission, index) => (
            <div key={index} className="flex items-start space-x-3 group">
              <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-slate-700 font-medium leading-relaxed text-sm">{mission}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      ),
      title: "Our Vision",
      description: (
        <div className="relative p-4 bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-blue-100">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-200 to-blue-100 rounded-full -translate-y-8 translate-x-8 opacity-20"></div>
          <p className="text-sm text-slate-800 font-semibold leading-relaxed relative z-10">
            To become <strong className="text-transparent bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text">India's most trusted name in robotics-driven infrastructure transformation</strong> starting with underwater systems, aligned with <strong className="text-cyan-700">Make in India</strong> and <strong className="text-blue-600">Digital India</strong> missions.
          </p>
        </div>
      ),
    },
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
        </svg>
      ),
      title: "Indigenous Innovation",
      description: "Designed, developed, and built in India with pride and purpose.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Safer Operations",
      description: "Advanced ROV systems eliminate human risk and maximize safety.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      ),
      title: "Real-Time Intelligence",
      description: "Live visuals, telemetry, and data right at your fingertips.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      title: "Nationwide Deployment",
      description: "From bustling metros to remote coastlines — we deploy anywhere, fast.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      title: "Custom Engineering",
      description: "Rapid prototyping and tailored solutions for unique project needs.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      ),
      title: "Insight-Rich Reports",
      description: "Actionable findings backed by visuals, analytics, and engineering insight.",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 
         REALISTIC DEEP OCEAN HERO (Consistent with Team/Products/Services)
         Natural Lighting, Organic Creatures, Volumetric Atmosphere
      */}
      <div 
        ref={heroRef}
        className={`relative bg-[radial-gradient(circle_at_top,_#006994_0%,_#004e70_40%,_#002845_100%)] py-10 overflow-hidden transition-cursor duration-300 ${isHoveringHero ? 'cursor-none' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHoveringHero(true)}
        onMouseLeave={() => setIsHoveringHero(false)}
      >
        {/* ==================== 1. ATMOSPHERIC LAYERS ==================== */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400/20 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 mix-blend-overlay opacity-40 pointer-events-none">
            <div className="caustic-overlay"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="marine-snow"></div>
        </div>

        {/* ==================== 2. ORGANIC AQUATIC LIFE ==================== */}
        
        {/* Jellyfish */}
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

        {/* School of Fish */}
        <div className="absolute top-2/3 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 -left-[200px] animate-school-swim opacity-30 mix-blend-multiply">
                 <svg width="300" height="100" viewBox="0 0 300 100">
                    <path d="M10,20 Q25,5 50,20 Q60,25 50,30 Q25,45 10,30 L0,35 L0,15 Z" fill="#001529"/>
                    <path d="M60,40 Q75,25 100,40 Q110,45 100,50 Q75,65 60,50 L50,55 L50,35 Z" fill="#001529"/>
                    <path d="M30,60 Q45,45 70,60 Q80,65 70,70 Q45,85 30,70 L20,75 L20,55 Z" fill="#001529"/>
                 </svg>
            </div>
        </div>

        {/* ==================== 3. REALISTIC BUBBLES ==================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
                <div key={`bubble-${i}`} className={`natural-bubble bubble-${i + 1}`}></div>
            ))}
        </div>

        {/* ==================== 4. CONTENT ==================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] tracking-wide">
            About Praxora Robotics
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-2 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.4)]"></div>
          <p className="text-base text-cyan-50 max-w-3xl mx-auto leading-relaxed font-bold drop-shadow-md">
            Pushing the boundaries of innovation in underwater and industrial robotics
          </p>
        </div>

        {/* ==================== 5. ROV & VOLUMETRIC LIGHTING ==================== */}
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

      {/* Main Content - Optimized Spacing */}
      <div className="py-12 bg-white -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section Cards - Compact Grid */}
          <div className="grid gap-6 lg:grid-cols-2 mb-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-xl border-2 border-blue-100 hover:border-cyan-200 transition-all duration-500 p-6 transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Decorative background pattern */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white mr-3 shadow-md">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent">
                      {section.title}
                    </h3>
                  </div>

                  {/* Separator */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full mb-3"></div>

                  {/* Content */}
                  <div className="text-slate-700 leading-relaxed">
                    {section.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section - Compact */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-cyan-600 mb-2">
              WHY CHOOSE US
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent">
              What Makes Us Different
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full mx-auto mt-3"></div>
          </div>

          {/* Features Grid - Compact Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-4 border-2 border-blue-100 hover:border-cyan-200 relative overflow-hidden"
              >
                {/* Decorative gradient background */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full -translate-y-6 translate-x-6 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-2">
                    <div className={`bg-gradient-to-br ${feature.gradient} p-2.5 rounded-lg mr-3 group-hover:scale-105 transition-transform shadow-md`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-base text-slate-800 group-hover:text-slate-900 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium group-hover:text-slate-700 transition-colors text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl p-8 border-2 border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent mb-3">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Discover how our advanced underwater robotics can revolutionize your inspection and maintenance operations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
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

export default AboutUs;