import React from 'react';

const Footer = () => {
  return (
    <footer className="group relative bg-[radial-gradient(ellipse_at_bottom,_#001529_0%,_#002845_100%)] text-white py-6 overflow-hidden border-t border-cyan-900/50 font-sans">
      
      {/* ==================== 1. DEEP SEA ATMOSPHERE ==================== */}
      
      {/* Caustic Light Refraction (Light hitting the ocean floor) */}
      <div className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none z-0">
          <div className="caustic-overlay"></div>
      </div>

      {/* Marine Snow (Floating Particles) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
          <div className="marine-snow"></div>
      </div>

      {/* ==================== 2. SEABED SCENERY (Rocks & Shells) ==================== */}
      
      <div className="absolute bottom-0 left-0 w-full h-32 z-0 pointer-events-none opacity-60">
        {/* Sand Dunes Gradient */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/80 via-blue-950/50 to-transparent"></div>
        
        {/* Rocks & Shells SVG Illustration */}
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 100">
           {/* Seaweed (Sways on hover) */}
           <path className="seaweed fill-cyan-900/40 stroke-cyan-800/30 stroke-2 origin-bottom" d="M50,100 Q60,50 50,20 Q40,50 50,100" />
           <path className="seaweed fill-cyan-900/40 stroke-cyan-800/30 stroke-2 origin-bottom" d="M70,100 Q80,60 70,40 Q60,70 70,100" style={{animationDelay: '0.5s'}} />
           <path className="seaweed fill-cyan-900/40 stroke-cyan-800/30 stroke-2 origin-bottom" d="M1380,100 Q1370,50 1380,30 Q1390,60 1380,100" style={{animationDelay: '1s'}} />

           {/* Rocks */}
           <path d="M0,100 L20,85 L50,90 L80,100 Z" fill="#0f172a" stroke="#1e293b" />
           <path d="M1300,100 L1340,80 L1380,95 L1440,100 Z" fill="#0f172a" stroke="#1e293b" />
           <path d="M200,100 C230,80 270,80 300,100 Z" fill="#0b1120" opacity="0.6" />

           {/* Shells */}
           <path d="M1350,95 Q1360,80 1370,95 Z" fill="#334155" />
           <path d="M40,95 Q50,85 60,95 Z" fill="#334155" />
        </svg>
      </div>

      {/* ==================== 3. BUBBLES (Ambient + Hover) ==================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Constant Ambient Bubbles */}
          {[...Array(6)].map((_, i) => (
              <div key={`amb-${i}`} className={`bubble ambient-bubble bubble-${i + 1}`}></div>
          ))}
          
          {/* Interaction: Bubbles that release from rocks ON HOVER */}
          <div className="group-hover:block hidden">
             {[...Array(8)].map((_, i) => (
                <div key={`hov-${i}`} className={`bubble hover-bubble hover-bubble-${i + 1}`}></div>
             ))}
          </div>
      </div>

      {/* ==================== 4. CONTENT LAYER ==================== */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* COMPANY INFO */}
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center mb-3">
              {/* Logo Icon placeholder */}
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-2 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <span className="font-black text-white text-lg">P</span>
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent tracking-wide">
                Praxora Robotics
              </span>
            </div>
            
            <p className="text-cyan-100/70 text-xs leading-relaxed font-medium max-w-xs mb-4 backdrop-blur-sm">
              Exploring the depths with precision. Delivering advanced underwater robotic solutions for inspection, maintenance, and research.
            </p>

            {/* Glassmorphic Social Links */}
            <div className="flex space-x-3">
              {['Linkedin', 'Twitter', 'Instagram'].map((platform, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-blue-950/50 hover:bg-cyan-600/80 border border-cyan-800/50 hover:border-cyan-400 rounded-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(6,182,212,0.6)] group/icon">
                  {/* Simple generic icon representation */}
                  <div className="w-4 h-4 bg-cyan-400/50 group-hover/icon:bg-white rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-3 border-b border-cyan-900/50 pb-1 inline-block">Navigate</h3>
            <ul className="space-y-1.5">
              {['Home', 'About Us', 'Services', 'Products', 'Careers'].map((link, i) => (
                <li key={i}>
                  <a href={`/${link.toLowerCase().replace(' ', '')}`} className="flex items-center text-cyan-100/60 hover:text-white hover:translate-x-1 transition-all duration-200 text-xs font-medium">
                    <span className="w-1 h-1 bg-cyan-600 rounded-full mr-2 opacity-50"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-3 border-b border-cyan-900/50 pb-1 inline-block">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-lg mr-2 opacity-80">📍</span>
                <p className="text-cyan-100/60 text-xs leading-snug">
                  Ganga Acropolis, Baner,<br/>Pune, Maharashtra - 411021
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-2 opacity-80">📞</span>
                <p className="text-cyan-100/60 text-xs">+91 9325051772</p>
              </div>
              <div className="flex items-center">
                <span className="text-lg mr-2 opacity-80">✉️</span>
                <a href="mailto:praxorarobotics@gmail.com" className="text-cyan-100/60 hover:text-cyan-300 text-xs transition-colors">
                  praxorarobotics@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-6 pt-3 border-t border-cyan-900/30 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-cyan-400/40 text-[10px] font-medium">
            © {new Date().getFullYear()} Praxora Robotics Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 text-[10px] font-medium text-cyan-400/40">
            <a href="#" className="hover:text-cyan-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* ==================== CSS STYLES ==================== */}
      <style>{`
        /* 1. Caustics Overlay */
        .caustic-overlay {
            width: 200%;
            height: 200%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
            background-size: 300px 300px;
            animation: drift-slow 60s linear infinite;
        }
        @keyframes drift-slow {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-50px, -20px); }
        }

        /* 2. Marine Snow */
        .marine-snow {
            background-image: radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px);
            background-size: 40px 40px;
            animation: snow-drift 30s linear infinite;
        }
        @keyframes snow-drift {
            from { background-position: 0 0; }
            to { background-position: 20px 50px; }
        }

        /* 3. Seaweed Sway Animation */
        .seaweed {
            animation: sway 4s ease-in-out infinite;
            transform-origin: bottom;
        }
        .group:hover .seaweed {
            animation-duration: 2s; /* Faster on hover */
        }
        @keyframes sway {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(5deg); }
        }

        /* 4. Bubbles */
        .bubble {
            position: absolute;
            bottom: -20px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(255,255,255,0.1));
            border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 0 4px rgba(255,255,255,0.3);
        }

        /* Ambient Bubbles (Always rising slowly) */
        .ambient-bubble {
            animation: rise-slow linear infinite;
        }
        ${[...Array(6)].map((_, i) => `
            .bubble-${i + 1} {
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                left: ${Math.random() * 100}%;
                animation-duration: ${Math.random() * 10 + 10}s;
                animation-delay: ${Math.random() * 5}s;
                opacity: 0.3;
            }
        `).join('')}

        /* Hover Bubbles (Release rapidly on hover) */
        .hover-bubble {
            animation: rise-fast linear forwards; /* Play once per hover interaction mostly */
        }
        ${[...Array(8)].map((_, i) => `
            .hover-bubble-${i + 1} {
                width: ${Math.random() * 6 + 3}px;
                height: ${Math.random() * 6 + 3}px;
                left: ${Math.random() * 100}%;
                animation-duration: ${Math.random() * 2 + 1}s;
                animation-delay: ${Math.random() * 0.5}s;
                opacity: 0.6;
            }
        `).join('')}

        @keyframes rise-slow {
            0% { transform: translateY(0); opacity: 0; }
            20% { opacity: 0.4; }
            100% { transform: translateY(-150px); opacity: 0; }
        }
        @keyframes rise-fast {
            0% { transform: translateY(0) scale(0.5); opacity: 0; }
            10% { opacity: 0.8; }
            100% { transform: translateY(-200px) scale(1.2); opacity: 0; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;