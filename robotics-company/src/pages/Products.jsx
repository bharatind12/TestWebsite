// src/pages/Products.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import praxora_p1 from "../assets/praxora.jpg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "PRAXORA P1 Expert M200A",
      tagline: "Precision Beneath the Surface",
      image: praxora_p1, // Replace with actual product image path
      description: "The PRAXORA P1 Expert M200A is a professional-grade underwater drone engineered for high-demand tasks in inspection, research, and exploration. Built with six vectored thrusters, it offers 360° omnidirectional control, enabling smooth, precise navigation in confined or complex underwater environments.",
      details: {
        longDescription: "The PRAXORA P1 Expert M200A is a professional-grade underwater drone engineered for high-demand tasks in inspection, research, and exploration. Built with six vectored thrusters, it offers 360° omnidirectional control, enabling smooth, precise navigation in confined or complex underwater environments.\n\nWith a 4K UHD camera and dual 6000-lumen LED lights, it delivers exceptional image clarity even in dark or turbid waters. It operates at depths up to 100 meters, supported by a 200-meter Kevlar-reinforced tether for stable real-time communication and extended reach.\n\nPowered by a 156Wh battery, it delivers 3–5 hours of continuous runtime, ideal for prolonged underwater missions. The system features a modular Q-Interface, allowing seamless integration of accessories like sensors, cameras, and its included parallel-grip robotic arm, expanding its operational versatility.\n\nCompact, rugged, and mission-ready, the M200A ensures performance without compromise—designed for professionals who require reliability and detail beneath the surface.",
        features: [
          "360° Movement via 6 vectored thrusters",
          "100m Depth Rating with 200m Kevlar tether",
          "4K Video + Slow Motion: 1080p120 / 720p240",
          "Dual 6000-Lumen LEDs for clear low-light vision",
          "156Wh Battery: 3–5 hours operational time",
          "Modular Q-Interface for advanced add-ons",
          "Robotic Arm with parallel gripper",
          "128GB microSD Support + Live Video Streaming"
        ],
        applications: [
          "Marine Biology & Research – Behavioral studies and habitat monitoring",
          "Infrastructure Inspection – Pipelines, dams, bridges, and offshore assets",
          "Underwater Cinematography – Stable, cinematic footage in challenging conditions",
          "Archaeology & Exploration – Documenting submerged sites and wrecks",
          "Environmental Monitoring – Deploy sensors and capture critical data"
        ],
        conclusion: "PRAXORA P1 Expert M200A — engineered for underwater professionals who explore deeper, inspect smarter, and document with unmatched clarity."
      }
    }
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
          <p className="text-gray-600 mb-8">Innovative underwater robotics solutions</p>
        </div>

        {/* Products Display */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-100"
            >
              <div className="flex flex-col md:flex-row">
                {/* Product Image */}
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-gray-200">
                  <img
                    src={product.image} // Updated to use actual imported image
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                    <div className="w-16 h-1 bg-orange-400 mt-3 mb-4"></div>
                    <p className="text-orange-500 font-medium mb-4">{product.tagline}</p>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(product);
                    }}
                    className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-500 rounded-lg hover:bg-orange-100 transition-colors duration-300 font-medium self-start"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for upcoming products */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center">
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              More Products Coming Soon
            </h3>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-3 mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're currently working on bringing you our latest innovative robotics products. 
              Check back soon to explore our cutting-edge solutions designed to transform your business.
            </p>
          </div>
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8 overflow-y-auto max-h-[90vh] animate-fadeIn"
              style={{ animation: 'fadeIn 0.3s ease-out' }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 transition-colors duration-200"
              >
                <X size={24} />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Product Image in Modal */}
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <img
                    src={selectedProduct.image} // Updated to use actual imported image
                    alt={selectedProduct.name}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                {/* Product Details */}
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-orange-500 font-medium mb-4">{selectedProduct.tagline}</p>
                  <div className="w-16 h-1 bg-orange-400 mb-6"></div>
                  
                  {/* Long Description */}
                  <div className="mb-6">
                    <p className="text-gray-700 whitespace-pre-line">
                      {selectedProduct.details.longDescription}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProduct.details.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Applications</h4>
                    <ul className="space-y-2">
                      {selectedProduct.details.applications.map((application, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span className="text-gray-700">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Conclusion */}
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg text-gray-800 font-medium">
                    {selectedProduct.details.conclusion}
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="mt-8 flex justify-center space-x-4">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="px-6 py-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition duration-300 inline-flex items-center"
                >
                  <span>Inquire About This Product</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Interest Form / CTA */}
        <div className="mt-12 text-center bg-white shadow-xl rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Interested in our products?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our current and upcoming product line and be the first to know when new innovations launch.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:translate-y-1"
          >
            Get in Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
