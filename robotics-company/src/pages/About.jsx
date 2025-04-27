import React from "react";
import { FaUserTie, FaBullseye, FaRocket, FaBrain } from "react-icons/fa";

const sections = [
  {
    icon: <FaUserTie className="text-orange-500 w-8 h-8" />, 
    title: "Who We Are",
    description:
      "Praxora Robotics Pvt Ltd is a next-generation robotics and deep-tech company specializing in underwater inspection services, custom robotic systems, and indigenous product development. Founded with a vision to bridge the gap between critical infrastructure needs and advanced automation, we offer smart, reliable, and scalable technology solutions across multiple sectors.\n\nWhile our flagship expertise lies in ROV-based underwater inspection, our Research & Development wing actively explores robotics beyond water – including industrial automation, sensor-driven embedded systems, AI-integrated machines, and land-based inspection bots.\n\nWe work across industries such as marine construction, ports, oil & gas, water utilities, smart infrastructure, and defense R&D — delivering technology where traditional approaches fall short.",
  },
  {
    icon: <FaBullseye className="text-orange-500 w-8 h-8" />, 
    title: "Vision",
    description:
      "To become India's most trusted name in robotics-driven infrastructure innovation, starting from underwater systems and expanding across diverse automation domains — proudly aligned with Make in India and Digital India.",
  },
  {
    icon: <FaRocket className="text-orange-500 w-8 h-8" />, 
    title: "Mission",
    description: (
      <ul className="list-disc list-inside space-y-2">
        <li>To empower industries with safe, cost-effective, and high-precision robotic inspection services</li>
        <li>To build a strong R&D foundation for next-gen robotic innovations across land, water, and hybrid environments</li>
        <li>To promote indigenous design, development, and manufacturing of advanced robotic platforms</li>
        <li>To be a tech enabler for academic, industrial, and government projects in the robotics ecosystem</li>
      </ul>
    ),
  },
  {
    icon: <FaBrain className="text-orange-500 w-8 h-8" />, 
    title: "Why Choose Praxora?",
    description: (
      <div className="space-y-4">
        <p className="font-semibold text-base">Empowering Tomorrow's Infrastructure — Today.</p>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-medium">🧪 Indigenous Innovation:</span> Proudly aligned with the Make in India mission, our technology is designed, developed, and built in-house for Indian industries.</li>
          <li><span className="font-medium">🌊 Safer Than Diver-Based Methods:</span> Our ROV-based inspections eliminate human risk and ensure unmatched safety in hazardous underwater environments.</li>
          <li><span className="font-medium">📡 Real-Time Monitoring & Data Capture:</span> Experience live visuals, precision telemetry, and accurate reporting — all in real time.</li>
          <li><span className="font-medium">💼 Pan-India On-Site Deployment:</span> Whether in metros or remote coastlines — our agile team and portable systems deploy quickly, anywhere across India.</li>
          <li><span className="font-medium">🔧 Fast Customization & R&D Support:</span> Our in-house engineering team specializes in rapid prototyping, integration, and project-specific customization.</li>
          <li><span className="font-medium">📊 Insight-Driven Reports:</span> We convert raw inspection data into actionable insights with visuals, analytics, and structural health summaries.</li>
          <li><span className="font-medium">🤝 Reliable, Transparent Partnership:</span> From the first call to the final report, we stay connected, committed, and clear in everything we do.</li>
        </ul>
      </div>
    ),
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">About Us</h1>
          <p className="text-gray-600 mb-8">Discover our journey, mission, and what makes Praxora Robotics a trusted name in innovation</p>
        </div>

        {/* About Section Cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 p-6"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div className="bg-orange-50 p-3 rounded-lg text-orange-500 mr-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {section.title}
                </h3>
              </div>

              {/* Separator */}
              <div className="w-16 h-1 bg-orange-400 mb-4"></div>

              {/* Content */}
              <div className="text-gray-600 whitespace-pre-wrap">
                {section.description}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-white shadow-xl rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to transform your operations?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team of experts to discuss how our robotic solutions can address your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:translate-y-1"
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;