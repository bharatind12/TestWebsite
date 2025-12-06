import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Handshake, Star, Lightbulb, Briefcase, ArrowRight } from "lucide-react";
import homepagebg from '../assets/homepagebg.png';

const Home = () => {
  const heroRef = useRef(null);
  const cursorRef = useRef(null);
  const bubblesContainerRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const cursor = cursorRef.current;
    const bubblesContainer = bubblesContainerRef.current;

    if (!hero || !cursor || !bubblesContainer) return;

    let throttleTimer = null;

    // Function to create a trail bubble
    const createTrailBubble = (x, y) => {
      const bubble = document.createElement('div');
      
      // Randomize size for variety
      const size = Math.random() * 6 + 4; // Between 4px and 10px
      
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.position = 'absolute';
      bubble.style.borderRadius = '50%';
      bubble.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
      bubble.style.border = '1px solid rgba(165, 243, 252, 0.5)'; // Cyan-200
      bubble.style.pointerEvents = 'none';
      bubble.style.transform = 'translate(-50%, -50%)';
      bubble.style.zIndex = '50';
      // Add custom animation class
      bubble.classList.add('bubble-trail-animation');

      bubblesContainer.appendChild(bubble);

      // Remove bubble after animation completes (1s)
      setTimeout(() => {
        if (bubblesContainer.contains(bubble)) {
          bubblesContainer.removeChild(bubble);
        }
      }, 1000);
    };

    const handleMouseMove = (e) => {
      // 1. Move the main cursor
      // Get bounding rect to calculate position relative to the hero container
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      cursor.style.opacity = '1';

      // 2. Spawn trail bubbles (throttled for performance)
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          createTrailBubble(x, y);
          throttleTimer = null;
        }, 40); // Spawn a bubble every 40ms
      }
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    // Attach events specifically to the Hero Section
    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseenter', handleMouseEnter);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseenter', handleMouseEnter);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* SVG Filter for Realistic Water Text Distortion */}
      <svg className="hidden">
        <defs>
          <filter id="water-distortion">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="3" result="noise" seed="1">
              <animate attributeName="baseFrequency" dur="10s" values="0.01 0.02;0.02 0.04;0.01 0.02" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
          </filter>
        </defs>
      </svg>

      {/* 
         REALISTIC DEEP OCEAN HERO WITH VIDEO BACKGROUND
         Custom Cursor Logic applied ONLY here via ref
      */}
      <div 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 cursor-none"
      >
        {/* Custom Bubble Cursor Container (Scoped to Hero) */}
        <div className="absolute inset-0 pointer-events-none z-[100] overflow-hidden" ref={bubblesContainerRef}>
          {/* Main Pointer Bubble */}
          <div 
            ref={cursorRef}
            className="absolute w-10 h-10 rounded-full border-2 border-cyan-200 bg-white/10 shadow-[0_0_15px_rgba(6,182,212,0.6)] backdrop-blur-[2px] transition-opacity duration-200 opacity-0 will-change-transform"
            style={{ left: 0, top: 0 }}
          >
             {/* Reflection dot */}
             <div className="absolute top-2 left-2 w-2.5 h-2.5 bg-white rounded-full opacity-60"></div>
          </div>
          {/* Trail bubbles are appended here dynamically via JS */}
        </div>

        {/* 1. Background Image with Floating Water Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={homepagebg}
            alt="Homepage Background"
            className="w-full h-full object-cover min-w-full min-h-full filter brightness-75 scale-110 ocean-float-animation"
          />
        </div>

        {/* 2. Ocean Atmosphere Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/40 via-blue-900/20 to-blue-950/60 z-10 pointer-events-none"></div>
        
        {/* Caustic Light Refraction */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none z-10">
            <div className="caustic-overlay"></div>
        </div>

        {/* Marine Snow Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-50 z-10">
            <div className="marine-snow"></div>
        </div>

        {/* 3. Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Main Title with Liquid Hover Effect */}
          <div className="group relative inline-block cursor-none">
            <h1 className="liquid-text-target text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] tracking-wide transition-all duration-500">
              <span className="block mb-2">Welcome to Praxora Robotics</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">
                Underwater Robotic Solutions
              </span>
            </h1>
          </div>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.6)]"></div>
          
          <p className="text-lg md:text-xl text-cyan-50 max-w-3xl mx-auto leading-relaxed font-bold drop-shadow-md mb-10">
            Precision in depths, excellence in inspection pioneering the future of underwater robotics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-30">
            <a 
              href="/services" 
              // Added cursor-none class to keep the bubble effect even when hovering the button
              className="cursor-none inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.5)] text-lg"
            >
              Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="/contact" 
              className="cursor-none inline-flex items-center px-8 py-3.5 bg-transparent border-2 border-cyan-300 text-cyan-100 hover:bg-cyan-900/50 hover:border-cyan-200 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Features Section - Standard Cursor */}
      <div className="py-16 bg-white relative z-20 cursor-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl font-semibold text-cyan-600 mb-2 tracking-wider">
              OUR VALUES
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent">
              What We Stand For
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
          </div>

          {/* Grid with values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: ShieldCheck, title: "Safety First", desc: "We always put safety above everything else." },
              { icon: Handshake, title: "Integrity", desc: "We always do the right thing, no matter what." },
              { icon: Star, title: "Quality Excellence", desc: "We deliver the best in everything we do." },
              { icon: Lightbulb, title: "Innovation", desc: "We think outside the box and create new solutions." },
              { icon: Briefcase, title: "Ownership", desc: "We take ownership of our work and deliver results." }
            ].map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6 border-2 border-blue-100 hover:border-cyan-300 relative overflow-hidden">
                {/* Decorative Card Background */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full -translate-y-10 translate-x-10 opacity-40 group-hover:scale-125 transition-transform duration-700"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-cyan-800 transition-colors">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium group-hover:text-slate-700">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action - Standard Cursor */}
      <div className="pb-16 px-4 sm:px-6 lg:px-8 bg-white cursor-auto">
        <div className="max-w-6xl mx-auto text-center bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl p-10 border-2 border-blue-100 relative overflow-hidden">
          {/* CTA Background Decor */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full -translate-y-20 translate-x-20 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full translate-y-16 -translate-x-16 opacity-30"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent mb-4">
              Ready to explore underwater innovations?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
              Discover how our advanced underwater robotics can transform your inspection and maintenance operations.
            </p>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 text-lg"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* CSS Styles for Realistic Ocean Effects & Bubbles */}
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

        /* 3. Ocean Swell Animation for Background Image */
        .ocean-float-animation {
            animation: ocean-swell 15s ease-in-out infinite alternate;
        }
        @keyframes ocean-swell {
            0% { transform: scale(1.1) translate(0, 0); }
            33% { transform: scale(1.15) translate(-1%, 0.5%); }
            66% { transform: scale(1.12) translate(1%, -0.5%); }
            100% { transform: scale(1.1) translate(0, 0); }
        }

        /* 4. Liquid Text Hover Effect */
        .liquid-text-target:hover {
            filter: url(#water-distortion);
            animation: liquid-bob 3s ease-in-out infinite;
            text-shadow: 0 0 20px rgba(6,182,212,0.8);
        }

        @keyframes liquid-bob {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        /* 5. Trail Bubble Animation */
        .bubble-trail-animation {
            animation: bubble-rise-fade 1s ease-out forwards;
        }

        @keyframes bubble-rise-fade {
            0% {
                opacity: 0.6;
                transform: translate(-50%, -50%) scale(0.5);
            }
            50% {
                opacity: 0.8;
                transform: translate(-50%, -150%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -300%) scale(1.2);
            }
        }
      `}</style>
    </div>
  );
};

export default Home;