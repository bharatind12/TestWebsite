import React, { useState, useRef, useMemo } from "react";

export default function OceanHero({ title, subtitle }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef(null);

  // FIX: bubbles generated ONCE on mount, not re-randomized every render
  const bubbles = useMemo(
    () =>
      Array.from({ length: 15 }, () => ({
        size: Math.random() * 8 + 3,
        left: Math.random() * 100,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.1,
      })),
    []
  );

  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <div
      ref={heroRef}
      className={`relative bg-[radial-gradient(circle_at_top,_#006994_0%,_#004e70_40%,_#002845_100%)] py-10 overflow-hidden transition-cursor duration-300 ${
        isHovering ? "cursor-none" : ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Atmospheric layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 mix-blend-overlay opacity-40 pointer-events-none">
        <div className="caustic-overlay" />
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="marine-snow" />
      </div>

      {/* Jellyfish — glow fixed to cyan for theme consistency */}
      <div className="absolute top-1/4 left-[15%] opacity-80 animate-float-jellyfish pointer-events-none mix-blend-screen">
        <svg width="120" height="160" viewBox="0 0 100 140" fill="none">
          <path
            d="M10 40 C 10 15, 30 0, 50 0 C 70 0, 90 15, 90 40 C 90 55, 70 50, 50 50 C 30 50, 10 55, 10 40 Z"
            fill="url(#jellyGradient)"
            stroke="rgba(200, 240, 255, 0.4)"
            strokeWidth="0.5"
          />
          <ellipse cx="50" cy="35" rx="20" ry="10" fill="rgba(150, 230, 255, 0.25)" filter="url(#glow)" />
          <path d="M30 50 Q 25 70, 30 90 T 30 130" stroke="rgba(200, 240, 255, 0.5)" strokeWidth="1" fill="none" className="tentacle t1" />
          <path d="M40 50 Q 35 70, 40 90 T 40 130" stroke="rgba(200, 240, 255, 0.6)" strokeWidth="1.5" fill="none" className="tentacle t2" />
          <path d="M50 50 Q 45 70, 50 90 T 50 135" stroke="rgba(200, 240, 255, 0.7)" strokeWidth="1.5" fill="none" className="tentacle t3" />
          <path d="M60 50 Q 55 70, 60 90 T 60 130" stroke="rgba(200, 240, 255, 0.6)" strokeWidth="1.5" fill="none" className="tentacle t4" />
          <path d="M70 50 Q 65 70, 70 90 T 70 130" stroke="rgba(200, 240, 255, 0.5)" strokeWidth="1" fill="none" className="tentacle t5" />
          <defs>
            <radialGradient id="jellyGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(220, 240, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(220, 240, 255, 0.05)" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Fish school */}
      <div className="absolute top-2/3 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 -left-[200px] animate-school-swim opacity-30 mix-blend-multiply">
          <svg width="300" height="100" viewBox="0 0 300 100">
            <path d="M10,20 Q25,5 50,20 Q60,25 50,30 Q25,45 10,30 L0,35 L0,15 Z" fill="#001529" />
            <path d="M60,40 Q75,25 100,40 Q110,45 100,50 Q75,65 60,50 L50,55 L50,35 Z" fill="#001529" />
            <path d="M30,60 Q45,45 70,60 Q80,65 70,70 Q45,85 30,70 L20,75 L20,55 Z" fill="#001529" />
          </svg>
        </div>
      </div>

      {/* Bubbles — now stable positions */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className="natural-bubble"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              bottom: "-20px",
              animation: `bubble-rise ${b.duration}s linear infinite`,
              animationDelay: `${b.delay}s`,
              opacity: b.opacity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] tracking-wide">
          {title}
        </h1>
        <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-2 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.4)]" />
        <p className="text-base text-cyan-50 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-md">{subtitle}</p>
      </div>

      {/* ROV + spotlight follower */}
      <div
        className="pointer-events-none absolute z-50 transition-transform duration-75 ease-out will-change-transform"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, opacity: isHovering ? 1 : 0, left: 0, top: 0 }}
      >
        <div
          className="absolute top-1/2 left-8 w-[400px] h-[120px] origin-left -translate-y-1/2 pointer-events-none"
          style={{
            clipPath: "polygon(0% 45%, 100% 0%, 100% 100%, 0% 55%)",
            background: "linear-gradient(90deg, rgba(220,255,255,0.4) 0%, rgba(220,255,255,0.1) 60%, transparent 100%)",
            filter: "blur(3px)",
            mixBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjAuNSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] animate-beam-flow opacity-60" />
        </div>

        <div className="absolute -top-8 -left-8 w-16 h-16 filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-hover-float">
            <rect x="5" y="35" width="8" height="30" rx="1" fill="#1e293b" />
            <path d="M5 50 L -2 45 M 5 50 L -2 55" stroke="#94a3b8" strokeWidth="2" className="animate-spin-propeller" style={{ transformBox: "fill-box", transformOrigin: "5px 50px" }} />
            <path d="M15 45 C 15 30, 25 20, 45 20 L 75 20 C 90 20, 95 30, 95 50 C 95 70, 90 80, 75 80 L 45 80 C 25 80, 15 70, 15 45 Z" fill="#F59E0B" stroke="#FCD34D" strokeWidth="1" />
            <path d="M15 45 C 15 65, 25 75, 45 75 L 75 75 C 85 75, 90 70, 92 60 L 18 60 C 16 55, 15 50, 15 45 Z" fill="rgba(0,0,0,0.1)" />
            <path d="M75 20 C 90 20, 95 30, 95 50 C 95 70, 90 80, 75 80 Z" fill="#06b6d4" fillOpacity="0.4" />
            <ellipse cx="78" cy="50" rx="6" ry="18" fill="#cffafe" fillOpacity="0.6" filter="url(#glow)" />
            <rect x="40" y="15" width="10" height="5" fill="#333" />
            <circle cx="45" cy="15" r="3" fill="#ef4444" className="animate-blink" />
            <path d="M40 80 L 35 95 H 55 L 50 80" fill="#475569" />
            <path d="M35 95 L 30 100 M 55 95 L 60 100" stroke="#94a3b8" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}