import React, { useState } from 'react';
import { X, Zap, Cog, Eye, Shield, Target } from 'lucide-react';
import praxora from "../assets/praxora.png";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Praxora P1 Pro",
      tagline: "Explore. Inspect. Operate.",
      image: praxora,
      description: "The **Praxora P1 Pro** is a next-generation **Remotely Operated Vehicle (ROV)** engineered for high-performance underwater operations. Designed for professionals across the marine industries, this ROV combines **AI-powered intelligence**, **modular expandability**, and **precision control** to deliver unparalleled inspection and exploration capabilities.",
      badge: "Featured Product",
      gradient: "from-orange-600 to-orange-700",
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

  // Function to render text with bold formatting
  const renderFormattedText = (text) => {
    if (!text) return '';
    
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.substring(2, part.length - 2);
        return <strong key={index} className="text-orange-700 font-bold">{boldText}</strong>;
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
    <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-orange-100 min-h-screen">
      {/* Hero Section matching contact page */}
      <div className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-orange-400 to-orange-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent mb-4">
            Our Products
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto mb-4"></div>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Revolutionary underwater robotics solutions engineered for professional excellence
          </p>
        </div>
      </div>

      {/* Main Content with overlap effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
        
        {/* Featured Products - Optimized Layout */}
        <div className="space-y-6 mb-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl border border-slate-200 hover:border-orange-200 hover:-translate-y-1 relative"
            >
              {/* Decorative gradient overlay matching contact page style */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-12 translate-x-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row">
                  {/* Product Image Section - Optimized */}
                  <div className="lg:w-2/5 relative overflow-hidden bg-gradient-to-br from-slate-100 to-orange-100">
                    {/* Product Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full text-xs font-bold shadow-md">
                        {product.badge}
                      </span>
                    </div>
                    
                    <div className="h-48 lg:h-52 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Product Info Section - Optimized */}
                  <div className="lg:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full mx-2"></div>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full"></div>
                      </div>
                      
                      <p className="text-base font-semibold text-transparent bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text mb-3">
                        {product.tagline}
                      </p>
                      
                      <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                        {renderFormattedText(product.description)}
                      </p>

                      {/* Quick Features - Optimized Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 p-2 bg-gradient-to-r from-slate-50 to-orange-50 rounded-lg border border-slate-200 hover:border-orange-200 transition-colors">
                            <div className="p-1.5 bg-gradient-to-r from-orange-600 to-orange-700 rounded-md flex-shrink-0">
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
                        className="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-2 text-sm"
                      >
                        <span>View Details</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </button>
                      
                      <a
                        href="/contact"
                        className="px-5 py-2.5 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-orange-300 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 text-sm"
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
        <div className="bg-gradient-to-br from-white via-orange-50 to-orange-100 rounded-2xl shadow-xl p-6 border border-slate-200 relative overflow-hidden mb-8">
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -translate-y-10 -translate-x-10 opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-200 to-orange-100 rounded-full translate-y-8 translate-x-8 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full mb-2">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-2">
              Innovation Never Stops
            </h3>
            
            <div className="flex justify-center items-center mb-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full mx-2"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full"></div>
            </div>
            
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium mb-4 text-sm">
              We're continuously pushing the boundaries of underwater robotics technology. Our R&D team is working on groundbreaking solutions that will reshape marine operations and underwater exploration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
              <div className="bg-white p-3 rounded-xl shadow-md border border-slate-200 hover:border-orange-200 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-1 text-sm">Next-Gen AI</h4>
                <p className="text-slate-600 text-xs leading-tight">Advanced machine learning algorithms for autonomous underwater operations</p>
              </div>
              
              <div className="bg-white p-3 rounded-xl shadow-md border border-slate-200 hover:border-orange-200 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Cog className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-1 text-sm">Modular Systems</h4>
                <p className="text-slate-600 text-xs leading-tight">Highly customizable platforms for specialized industrial applications</p>
              </div>
              
              <div className="bg-white p-3 rounded-xl shadow-md border border-slate-200 hover:border-orange-200 transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg flex items-center justify-center mb-2 mx-auto">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-1 text-sm">Enhanced Vision</h4>
                <p className="text-slate-600 text-xs leading-tight">Revolutionary imaging systems for unprecedented underwater clarity</p>
              </div>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Stay Updated</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
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
              {/* Modal Header - Matching contact page style */}
              <div className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 p-5 text-white">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full -translate-y-12 translate-x-12"></div>
                </div>
                
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <X size={18} />
                </button>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-orange-200 font-medium">{selectedProduct.tagline}</p>
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
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white p-2 rounded-lg shadow-md">
                        <p className="font-semibold text-xs">Advanced ROV</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="lg:w-3/5">
                    {/* Long Description */}
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Product Overview</h4>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-2"></div>
                      <p className="text-slate-700 whitespace-pre-line leading-relaxed text-sm">
                        {renderFormattedText(selectedProduct.details.longDescription)}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Advanced Features</h4>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-2"></div>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedProduct.details.features.map((feature, index) => (
                          <div key={index} className="flex items-start p-2 bg-gradient-to-r from-slate-50 to-orange-50 rounded-lg border-l-3 border-orange-500">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-1.5 mr-2"></div>
                            <span className="text-slate-700 leading-relaxed text-sm">{renderFormattedText(feature)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Applications */}
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">Key Applications</h4>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-2"></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedProduct.details.applications.map((application, index) => (
                          <div key={index} className="flex items-center p-2 bg-white rounded-lg shadow-sm border border-slate-200">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-2"></div>
                            <span className="text-slate-700 font-medium text-sm">{application}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Conclusion */}
                <div className="mt-4 p-3 bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-xl border-2 border-orange-100">
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
                    className="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center text-sm"
                  >
                    <span>Request Quote</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced CTA Section - Matching contact page */}
        <div className="bg-gradient-to-r from-white via-orange-50 to-orange-100 rounded-2xl shadow-xl p-8 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed font-medium">
              Discover how our cutting-edge underwater robotics can revolutionize your business. Get in touch for a personalized consultation and product demonstration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Contact Our Experts</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-orange-300 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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