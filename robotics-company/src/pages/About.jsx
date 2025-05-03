import React from "react";

const AboutUs = () => {
  const sections = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
      ),
      title: "About Us",
      description: (
        <div className="space-y-4">
          <p className="font-semibold text-xl mb-2">Innovating Tomorrow, Beneath and Beyond the Surface</p>
          <p><strong>Praxora Robotics Pvt Ltd</strong> is a next-generation robotics and deep-tech company, redefining how industries inspect, analyze, and maintain critical infrastructure. We specialize in <strong>underwater robotic inspections</strong>, <strong>custom robotic systems</strong>, and <strong>indigenous technology development</strong> — all designed to meet the unique challenges of modern-day infrastructure.</p>
          <p>Born from a vision to bridge the gap between conventional methods and advanced automation, Praxora delivers <strong>smart, scalable, and safe solutions</strong> powered by cutting-edge research and real-world engineering.</p>
          <p>Our core strength lies in <strong>ROV-based underwater inspections</strong>, but our R&D doesn't stop at the water's edge. From land-based robots to AI-integrated embedded systems, we are actively pushing the boundaries of what's possible in <strong>industrial automation and robotics innovation</strong>.</p>
        </div>
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-8 h-8">
          <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6-.6 0-1.1.2-1.4.6L7 9.1c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 16h2v-6l-2.2-2.5zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
        </svg>
      ),
      title: "Industries We Serve",
      description: (
        <p>We empower a wide spectrum of sectors — including <strong>marine infrastructure, ports, oil & gas, utilities, defense, and smart cities</strong> — with solutions that go where humans can't, and do what traditional tools won't.</p>
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-8 h-8">
          <path d="M19.92 12.08c-.2-.45-.47-.81-.79-1.09l-.69-.61c-.2-.18-.37-.33-.52-.46a.94.94 0 0 1-.26-.91c.3-1.2-.57-2.28-1.68-2.59-.49-.14-1-.09-1.47.14a2 2 0 0 0-1.1 1.25c-.33.79-.21 1.83.32 2.49.13.17.15.38.05.56-.11.19-.32.31-.55.31-.23 0-.43-.12-.54-.3-.23-.38-.53-.68-.89-.89l.05-.05c.31-.31.49-.74.49-1.18 0-.45-.18-.87-.49-1.18a1.65 1.65 0 0 0-2.36 0c-.31.31-.49.73-.49 1.18 0 .45.18.87.49 1.18.04.04.09.08.13.12-.22.05-.43.13-.62.24-.2-.43-.54-.8-.97-1.04a1.987 1.987 0 0 0-1.89 0 2 2 0 0 0-.97 1.04c-.44.96-.05 2.09.87 2.68l.01.01c.34.37.79.89 1.48 1.58l.09.1c1.27 1.27 2.96 1.97 4.75 1.97 1.79 0 3.48-.7 4.75-1.97s1.97-2.96 1.97-4.75c0-.2-.02-.4-.04-.59zM15 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
          <path d="M11.92 16.92l-1.41 1.41-3.54-3.54 1.41-1.41 3.54 3.54z" />
        </svg>
      ),
      title: "Our Mission",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>To deliver <strong>safe, accurate, and cost-effective</strong> robotic inspection solutions</li>
          <li>To build India's <strong>strongest R&D ecosystem</strong> for next-generation robotics</li>
          <li>To drive <strong>indigenous design and development</strong> in automation technologies</li>
          <li>To support <strong>academic, government, and industrial collaborations</strong> in robotics innovation</li>
        </ul>
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      ),
      title: "Our Vision",
      description: (
        <p>To become <strong>India's most trusted name in robotics-driven infrastructure transformation</strong> — starting with underwater systems, and expanding across all domains of intelligent automation, aligned with <strong>Make in India</strong> and <strong>Digital India</strong> missions.</p>
      ),
    },
  ];

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-6 h-6">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
        </svg>
      ),
      title: "Indigenous Innovation",
      description: "Designed, developed, and built in India — with pride and purpose."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-6 h-6">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      ),
      title: "Safer Than Diver-Based Methods",
      description: "Our advanced ROV systems eliminate human risk and maximize safety."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-6 h-6">
          <path d="M12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.03 4.17l.53-.87.55.87.51-.29-.98-1.65.51-.3.99 1.65.53-.29-.55-.93.51-.29.99 1.65 1.43-.81-.56-1.35 2.52-1.45-1.01-1.73-2.48 1.43-.55-1.35-1.43.81.96 1.64-.51.29-.96-1.63-.53.29.56.93-.51.29-.99-1.65-1.43.81.56 1.35-2.52 1.45 1.01 1.73 2.48-1.43.55 1.35 1.43-.81-.96-1.64.51-.29.96 1.63.53-.29-.56-.93.51-.29.99 1.65z" />
        </svg>
      ),
      title: "Real-Time Intelligence",
      description: "Live visuals, telemetry, and data — right at your fingertips."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      title: "Nationwide Deployment",
      description: "From bustling metros to remote coastlines — we deploy anywhere, fast."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-6 h-6">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      title: "Custom Engineering & R&D",
      description: "Rapid prototyping and tailored solutions for your unique project needs."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-6 h-6">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      ),
      title: "Insight-Rich Reports",
      description: "Actionable findings backed by visuals, analytics, and engineering insight."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-6 h-6">
          <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" />
        </svg>
      ),
      title: "Transparent Partnerships",
      description: "Clear communication, reliable timelines, and long-term support."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Praxora Robotics</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Pushing the boundaries of innovation in underwater and industrial robotics
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        {/* About Section Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 p-6 transform hover:-translate-y-1"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div className="bg-orange-50 p-3 rounded-lg mr-4">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {section.title}
                </h3>
              </div>

              {/* Separator */}
              <div className="w-24 h-1 bg-orange-400 mb-4"></div>

              {/* Content */}
              <div className="text-gray-600">
                {section.description}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Praxora Robotics?</h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Praxora, we combine cutting-edge technology with practical engineering to deliver solutions that truly make a difference.
            </p>
          </div>

          {/* Optimized card layout: 3-2-2 arrangement instead of 3-3-1 */}
          <div className="grid grid-cols-1 gap-8">
            {/* First row: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.slice(0, 3).map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-400"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-50 p-3 rounded-full mr-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            {/* Second row: 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16">
              {features.slice(3, 5).map((feature, index) => (
                <div 
                  key={index + 3} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-400"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-50 p-3 rounded-full mr-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            {/* Third row: 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16">
              {features.slice(5, 7).map((feature, index) => (
                <div 
                  key={index + 5} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-orange-400"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-50 p-3 rounded-full mr-3">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-white shadow-xl rounded-2xl p-10 border-t-4 border-orange-500">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to transform your operations?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team of experts to discuss how our robotic solutions can address your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg"
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

export default AboutUs;