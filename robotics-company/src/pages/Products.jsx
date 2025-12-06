import React, { useState, useRef } from 'react';
import { X, Zap, Cog, Eye, Shield, Target, ArrowRight } from 'lucide-react';
import praxora from "../assets/praxora.png";

const Products = () => {
  // State for ROV Mouse Follower & Modal
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const heroRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Praxora P1 Pro",
      tagline: "Explore. Inspect. Operate.",
      image: praxora,
      description: "The **Praxora P1 Pro** is a next-generation **Remotely Operated Vehicle (ROV)** engineered for high-performance underwater operations. Designed for professionals across the marine industries, this ROV combines **AI-powered intelligence**, **modular expandability**, and **precision control** to deliver unparalleled inspection and exploration capabilities.",
      badge: "Featured Product",
      features: [
        { icon: Cog, title: "Modular Design", desc: "3 multi-functional ports" },
        { icon: Zap, title: "AI-Powered", desc: "Intelligent tracking & stabilization" },
        { icon: Eye, title: "4K UHD Camera", desc: "Crystal clear underwater footage" },
        { icon: Shield, title: "Deep Water Ready", desc: "Operates at significant depths" }
      ],
      details: {
        longDescription: "The **Praxora P1 Pro** is a next-generation **Remotely Operated Vehicle (ROV)** engineered for high-performance underwater operations. Designed for professionals across the marine industries, this ROV combines **AI-powered intelligence**, **modular expandability**, and **precision control** to deliver unparalleled inspection and exploration capabilities.\n\nWhether it's infrastructure monitoring, marine research, or asset evaluation, the Praxora P1 Pro performs where human access is limited — and traditional tools fall short.",
        features: [
          "**Modular Design:** Supports up to 3 multi-functional ports for tools like sonar, laser scaler, and manipulator arms",
          "**Intelligent AI Functions:** Target tracking, image enhancement, and adaptive posture stabilization",
          "**Extended Operation:** Tethered power system for long-duration missions without battery limitations",
          "**Deep Diving Capability:** Operates efficiently up to significant depths with high maneuverability",
          "**High-Definition Visuals:** Equipped with a 4K UHD camera and powerful lighting for clear underwater footage"
        ],
        applications: [
          "Bridge & dam inspection",
          "Port and harbor asset monitoring",
          "Pipeline and underwater cable surveys",
          "Tank and reservoir inspection",
          "Marine biology and environmental studies"
        ],
        conclusion: "The **Praxora P1 Pro** – Advanced Underwater ROV designed for professionals who demand reliability, precision, and versatility in underwater operations."
      }
    }
  ];

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

  // Function to render text with bold formatting (Updated to Blue Theme)
  const renderFormattedText = (text) => {
    if (!text) return '';
    
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.substring(2, part.length - 2);
        return <strong key={index} className="text-cyan-700 font-bold">{boldText}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 
         REALISTIC DEEP OCEAN HERO (Consistent with Team Page)
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
            Our Products
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-2 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.4)]"></div>
          <p className="text-base text-cyan-50 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-md">
            Revolutionary underwater robotics solutions engineered for professional excellence
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
          {/* Spotlight (Forward Facing) */}
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

          {/* ROV Unit (Medium: w-16 h-16) */}
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

      {/* Main Content with overlap effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
        
        {/* Featured Products - Optimized Layout */}
        <div className="space-y-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 border-blue-100 hover:border-cyan-200 hover:-translate-y-1 relative"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full -translate-y-12 translate-x-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-stretch">
                  {/* Product Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden flex items-center justify-center min-h-[320px] lg:min-h-full">
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full text-xs font-bold shadow-md">
                        {product.badge}
                      </span>
                    </div>
                    
                    <div className="relative w-full h-full p-8 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto max-h-[350px] object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Product Info Section */}
                  <div className="lg:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent mb-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-2"></div>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                      </div>
                      
                      <p className="text-base font-semibold text-transparent bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text mb-3">
                        {product.tagline}
                      </p>
                      
                      <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                        {renderFormattedText(product.description)}
                      </p>

                      {/* Quick Features */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 p-2 bg-white rounded-lg border border-blue-100 hover:border-cyan-200 transition-colors">
                            <div className="p-1.5 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-md flex-shrink-0">
                              <feature.icon className="w-3 h-3 text-white" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-slate-800 text-xs leading-tight">{feature.title}</p>
                              <p className="text-slate-600 text-xs leading-tight">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={() => openModal(product)}
                        className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 text-sm"
                      >
                        <span>View Details</span>
                        <Eye className="w-4 h-4" />
                      </button>
                      
                      <a
                        href="/contact"
                        className="px-5 py-2.5 bg-white border-2 border-blue-200 text-slate-700 font-semibold rounded-lg hover:border-cyan-300 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 text-sm"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section - Optimized */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-6 border-2 border-blue-100 relative overflow-hidden mb-8">
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-cyan-200 to-blue-100 rounded-full -translate-y-10 -translate-x-10 opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-cyan-200 to-blue-100 rounded-full translate-y-8 translate-x-8 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full mb-2">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent mb-2">
              Innovation Never Stops
            </h3>
            
            <div className="flex justify-center items-center mb-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-2"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            </div>
            
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium mb-4 text-sm">
              We're continuously pushing the boundaries of underwater robotics technology. Our R&D team is working on groundbreaking solutions that will reshape marine operations and underwater exploration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
              <div className="bg-white p-3 rounded-xl shadow-md border border-blue-100 hover:border-cyan-200 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-1 text-sm">Next-Gen AI</h4>
                <p className="text-slate-600 text-xs leading-tight">Advanced machine learning algorithms for autonomous underwater operations</p>
              </div>
              
              <div className="bg-white p-3 rounded-xl shadow-md border border-blue-100 hover:border-cyan-200 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Cog className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-1 text-sm">Modular Systems</h4>
                <p className="text-slate-600 text-xs leading-tight">Highly customizable platforms for specialized industrial applications</p>
              </div>
              
              <div className="bg-white p-3 rounded-xl shadow-md border border-blue-100 hover:border-cyan-200 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-1 text-sm">Enhanced Vision</h4>
                <p className="text-slate-600 text-xs leading-tight">Revolutionary imaging systems for unprecedented underwater clarity</p>
              </div>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Stay Updated</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Enhanced Modal - Optimized */}
        {selectedProduct && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full p-0 overflow-hidden max-h-[90vh] overflow-y-auto"
              style={{ 
                animation: 'modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transformOrigin: 'center'
              }}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-cyan-800 via-blue-800 to-cyan-900 p-5 text-white">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full -translate-y-12 translate-x-12"></div>
                </div>
                
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <X size={18} />
                </button>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-cyan-200 font-medium">{selectedProduct.tagline}</p>
                </div>
              </div>

              {/* Modal Content - Optimized */}
              <div className="p-5">
                <div className="flex flex-col lg:flex-row lg:space-x-6">
                  {/* Product Image */}
                  <div className="lg:w-2/5 mb-4 lg:mb-0">
                    <div className="relative h-64 lg:h-96">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-contain rounded-xl shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-2 rounded-lg shadow-md">
                        <p className="font-semibold text-xs">Advanced ROV</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="lg:w-3/5">
                    {/* Long Description */}
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Product Overview</h4>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-2"></div>
                      <p className="text-slate-700 whitespace-pre-line leading-relaxed text-sm">
                        {renderFormattedText(selectedProduct.details.longDescription)}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Advanced Features</h4>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-2"></div>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedProduct.details.features.map((feature, index) => (
                          <div key={index} className="flex items-start p-2 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border-l-3 border-cyan-500">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-1.5 mr-2"></div>
                            <span className="text-slate-700 leading-relaxed text-sm">{renderFormattedText(feature)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Applications */}
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Key Applications</h4>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-2"></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedProduct.details.applications.map((application, index) => (
                          <div key={index} className="flex items-center p-2 bg-white rounded-lg shadow-sm border border-gray-300">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-2"></div>
                            <span className="text-slate-700 font-medium text-sm">{application}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Conclusion */}
                <div className="mt-4 p-3 bg-gradient-to-r from-cyan-50 via-white to-blue-50 rounded-xl border-2 border-blue-100">
                  <p className="text-slate-800 font-semibold text-center text-sm">
                    {renderFormattedText(selectedProduct.details.conclusion)}
                  </p>
                </div>
                
                {/* Enhanced Call to Action */}
                <div className="mt-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={closeModal}
                    className="px-5 py-2.5 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition-colors duration-300 text-sm"
                  >
                    Close Details
                  </button>
                  <a
                    href="/contact"
                    className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center text-sm"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced CTA Section - Matching contact page */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 border-2 border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-cyan-800 bg-clip-text text-transparent mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
              Discover how our cutting-edge underwater robotics can revolutionize your business. Get in touch for a personalized consultation and product demonstration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Contact Our Experts</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-200 text-slate-700 font-semibold rounded-lg hover:border-cyan-300 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More About Us
              </a>
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
        
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Products;