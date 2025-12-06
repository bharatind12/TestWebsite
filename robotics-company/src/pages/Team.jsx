import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import pranav from '../assets/pranav.jpeg';
import bharat from '../assets/bharat.jpeg';

const Team = () => {
  // State for ROV Mouse Follower
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const heroRef = useRef(null);

  // Using placeholder images
  const teamMembers = [
    {
      name: 'Bharat Manohar Khanvilkar',
      image: bharat,
      additionalTitle: '',
    },
    {
      name: 'Pranav Bhaskar Kulkarni',
      image: pranav,
      additionalTitle: '',
    },
  ];

  // Dynamic grid class
  const getGridClass = () => {
    const memberCount = teamMembers.length;
    if (memberCount === 1) {
      return "grid grid-cols-1 gap-8 mb-10 justify-items-center max-w-lg mx-auto";
    } else if (memberCount === 2) {
      return "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10";
    } else if (memberCount === 3) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10";
    } else {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10";
    }
  };

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

  return (
    <div className="bg-white min-h-screen">
      {/* 
         REALISTIC DEEP OCEAN HERO 
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
        
        {/* Layer A: Sunlight filtering from surface (Top Glow) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400/20 to-transparent pointer-events-none"></div>

        {/* Layer B: Caustic Light Refraction (The wavy lines on sea floor) */}
        <div className="absolute inset-0 mix-blend-overlay opacity-40 pointer-events-none">
            <div className="caustic-overlay"></div>
        </div>

        {/* Layer C: Marine Snow (Organic Floating Particles) */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="marine-snow"></div>
        </div>

        {/* ==================== 2. ORGANIC AQUATIC LIFE ==================== */}
        
        {/* Creature 1: Realistic Bioluminescent Jellyfish */}
        <div className="absolute top-1/4 left-[15%] opacity-80 animate-float-jellyfish pointer-events-none mix-blend-screen">
            <svg width="120" height="160" viewBox="0 0 100 140" fill="none">
                {/* Bell (Head) - Organic Curve */}
                <path d="M10 40 C 10 15, 30 0, 50 0 C 70 0, 90 15, 90 40 C 90 55, 70 50, 50 50 C 30 50, 10 55, 10 40 Z" 
                      fill="url(#jellyGradient)" stroke="rgba(200, 240, 255, 0.4)" strokeWidth="0.5"/>
                
                {/* Internal Organs (Glow) */}
                <ellipse cx="50" cy="35" rx="20" ry="10" fill="rgba(255, 100, 255, 0.2)" filter="url(#glow)"/>

                {/* Tentacles - Sinusoidal Waves */}
                <path d="M30 50 Q 25 70, 30 90 T 30 130" stroke="rgba(255, 200, 255, 0.5)" strokeWidth="1" fill="none" className="tentacle t1"/>
                <path d="M40 50 Q 35 70, 40 90 T 40 130" stroke="rgba(255, 200, 255, 0.6)" strokeWidth="1.5" fill="none" className="tentacle t2"/>
                <path d="M50 50 Q 45 70, 50 90 T 50 135" stroke="rgba(255, 200, 255, 0.7)" strokeWidth="1.5" fill="none" className="tentacle t3"/>
                <path d="M60 50 Q 55 70, 60 90 T 60 130" stroke="rgba(255, 200, 255, 0.6)" strokeWidth="1.5" fill="none" className="tentacle t4"/>
                <path d="M70 50 Q 65 70, 70 90 T 70 130" stroke="rgba(255, 200, 255, 0.5)" strokeWidth="1" fill="none" className="tentacle t5"/>

                {/* Definitions for Gradients/Filters */}
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

        {/* Creature 2: School of Fish (Silhouettes in Distance) */}
        <div className="absolute top-2/3 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 -left-[200px] animate-school-swim opacity-30 mix-blend-multiply">
                 <svg width="300" height="100" viewBox="0 0 300 100">
                    {/* Fish 1 */}
                    <path d="M10,20 Q25,5 50,20 Q60,25 50,30 Q25,45 10,30 L0,35 L0,15 Z" fill="#001529"/>
                    {/* Fish 2 */}
                    <path d="M60,40 Q75,25 100,40 Q110,45 100,50 Q75,65 60,50 L50,55 L50,35 Z" fill="#001529"/>
                    {/* Fish 3 */}
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
            Leadership Team
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-2 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.4)]"></div>
          <p className="text-base text-cyan-50 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-md">
            Navigating the future of underwater robotics at Praxora
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
          {/* A. The Volumetric Spotlight (Forward Facing) */}
          <div 
             className="absolute top-1/2 left-8 w-[400px] h-[120px] origin-left -translate-y-1/2 pointer-events-none"
             style={{
                // Cone shape projecting forward
                clipPath: 'polygon(0% 45%, 100% 0%, 100% 100%, 0% 55%)',
                // Bright beam gradient
                background: 'linear-gradient(90deg, rgba(220, 255, 255, 0.4) 0%, rgba(220, 255, 255, 0.1) 60%, transparent 100%)',
                filter: 'blur(3px)',
                mixBlendMode: 'overlay',
             }}
          >
             {/* Dust particles caught in the light beam */}
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] animate-beam-flow opacity-60"></div>
          </div>

          {/* B. The ROV Unit (Medium Size: w-16 h-16) */}
          <div className="absolute -top-8 -left-8 w-16 h-16 filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-hover-float">
               {/* Rear Propellers */}
               <rect x="5" y="35" width="8" height="30" rx="1" fill="#1e293b" />
               <path d="M5 50 L -2 45 M 5 50 L -2 55" stroke="#94a3b8" strokeWidth="2" className="animate-spin-propeller" style={{transformBox: 'fill-box', transformOrigin: '5px 50px'}}/>

               {/* Main Chassis - Industrial Yellow/Orange */}
               <path d="M15 45 C 15 30, 25 20, 45 20 L 75 20 C 90 20, 95 30, 95 50 C 95 70, 90 80, 75 80 L 45 80 C 25 80, 15 70, 15 45 Z" 
                     fill="#F59E0B" stroke="#FCD34D" strokeWidth="1"/>
               
               {/* Depth Shader on Body */}
               <path d="M15 45 C 15 65, 25 75, 45 75 L 75 75 C 85 75, 90 70, 92 60 L 18 60 C 16 55, 15 50, 15 45 Z" fill="rgba(0,0,0,0.1)"/>

               {/* Viewport Dome */}
               <path d="M75 20 C 90 20, 95 30, 95 50 C 95 70, 90 80, 75 80 Z" fill="#06b6d4" fillOpacity="0.4" />
               <ellipse cx="78" cy="50" rx="6" ry="18" fill="#cffafe" fillOpacity="0.6" filter="url(#glow)" />

               {/* Top Light/Sensor */}
               <rect x="40" y="15" width="10" height="5" fill="#333" />
               <circle cx="45" cy="15" r="3" fill="#ef4444" className="animate-blink" />

               {/* Mechanical Arm */}
               <path d="M40 80 L 35 95 H 55 L 50 80" fill="#475569" />
               <path d="M35 95 L 30 100 M 55 95 L 60 100" stroke="#94a3b8" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* ==================== CSS STYLES ==================== */}
      <style jsx>{`
        /* 1. Realistic Caustics (Using SVG Turbulence Pattern) */
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

        /* 2. Marine Snow (Particulates) */
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

      {/* Main Content with overlap effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
        {/* Team Members Grid - Auto-adjustable spacing */}
        <div className={getGridClass()}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-xl p-6 border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full -translate-y-12 translate-x-12 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full translate-y-10 -translate-x-10 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <div className="flex flex-col items-center relative z-10">
                {/* Optimized Member Image - Smaller size (w-32 h-32) and less margin */}
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <img
                    className="h-32 w-32 object-cover rounded-full border-4 border-white shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-300 group-hover:border-cyan-100"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                
                {/* Co-founder Badge */}
                <div className="mb-2">
                  <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-1 px-3 rounded-full text-xs font-bold shadow-md tracking-wider uppercase group-hover:from-cyan-400 group-hover:to-blue-400 transition-all">
                    Co-founder
                  </span>
                </div>
                
                {/* Optimized Member Details */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-cyan-800 transition-colors">
                    {member.name}
                  </h3>
                  
                  {/* Additional Title */}
                  <div className="mb-1">
                    <span className="inline-block bg-white text-slate-700 font-semibold text-xs px-3 py-1 rounded-lg border border-cyan-100 shadow-sm">
                      {member.additionalTitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-xl p-8 border-2 border-cyan-100 relative overflow-hidden group hover:border-blue-300 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-3">
              Join Our Innovative Team
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
              We're seeking passionate visionaries who want to revolutionize the future of robotics technology and make a lasting impact.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-400/30 transform hover:-translate-y-0.5"
            >
              Explore Opportunities
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;