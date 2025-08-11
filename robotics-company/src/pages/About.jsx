import React from "react";

const AboutUs = () => {
  const sections = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600 w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
      ),
      title: "About Us",
      description: (
        <div className="space-y-3">
          <p className="font-bold text-lg mb-3 bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent">
            Innovating Tomorrow, Beneath and Beyond the Surface
          </p>
          <p className="text-slate-700 leading-relaxed text-sm">
            <strong className="text-orange-700">Praxora Robotics Pvt Ltd</strong> is a next-generation robotics and deep-tech company, redefining how industries inspect, analyze, and maintain critical infrastructure through <strong className="text-orange-600">underwater robotic inspections</strong> and <strong className="text-orange-600">custom robotic systems</strong>.
          </p>
          <p className="text-slate-700 leading-relaxed text-sm">
            Our core strength lies in <strong className="text-orange-700">ROV-based underwater inspections</strong>, delivering <strong className="text-orange-700">smart, scalable, and safe solutions</strong> powered by cutting-edge research and real-world engineering expertise.
          </p>
        </div>
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600 w-8 h-8">
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
              <div key={index} className="bg-gradient-to-r from-orange-50 to-orange-100 px-3 py-2 rounded-lg border-l-2 border-orange-500">
                <h4 className="font-semibold text-orange-700 text-xs">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600 w-8 h-8">
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
              <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-600 w-8 h-8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <circle cx="12" cy="12" r="5" />
        </svg>
      ),
      title: "Our Vision",
      description: (
        <div className="relative p-4 bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-xl border-2 border-orange-100">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -translate-y-8 translate-x-8 opacity-20"></div>
          <p className="text-sm text-slate-800 font-semibold leading-relaxed relative z-10">
            To become <strong className="text-transparent bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text">India's most trusted name in robotics-driven infrastructure transformation</strong> — starting with underwater systems, aligned with <strong className="text-orange-700">Make in India</strong> and <strong className="text-orange-600">Digital India</strong> missions.
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
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Safer Operations",
      description: "Advanced ROV systems eliminate human risk and maximize safety.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        </svg>
      ),
      title: "Real-Time Intelligence",
      description: "Live visuals, telemetry, and data right at your fingertips.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      title: "Nationwide Deployment",
      description: "From bustling metros to remote coastlines — we deploy anywhere, fast.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      title: "Custom Engineering",
      description: "Rapid prototyping and tailored solutions for unique project needs.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white w-5 h-5">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      ),
      title: "Insight-Rich Reports",
      description: "Actionable findings backed by visuals, analytics, and engineering insight.",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-orange-100">
      {/* Hero Section - Matching Home Page Style */}
      <div className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 py-16 overflow-hidden">
        {/* Decorative background elements - Same as Home */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-orange-400 to-orange-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent mb-4">
              About Praxora Robotics
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto mb-4"></div>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto leading-relaxed font-medium">
              Pushing the boundaries of innovation in underwater and industrial robotics
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Optimized Spacing */}
      <div className="py-12 bg-white shadow-xl -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section Cards - Compact Grid */}
          <div className="grid gap-6 lg:grid-cols-2 mb-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-xl border-2 border-slate-100 hover:border-orange-200 transition-all duration-500 p-6 transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Decorative background pattern - Same as Home */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white mr-3">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent">
                      {section.title}
                    </h3>
                  </div>

                  {/* Separator - Matching Home Style */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mb-3"></div>

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
            <h2 className="text-xl font-semibold text-orange-600 mb-2">
              WHY CHOOSE US
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent">
              What Makes Us Different
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mt-3"></div>
          </div>

          {/* Features Grid - Compact Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 p-4 border-2 border-slate-100 hover:border-orange-200 relative overflow-hidden"
              >
                {/* Decorative gradient background - Same pattern as Home */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full -translate-y-6 translate-x-6 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
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

      {/* CTA Section - Matching Home Page Style Exactly */}
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center bg-gradient-to-r from-white via-orange-50 to-orange-100 shadow-xl rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-3">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Discover how our advanced underwater robotics can revolutionize your inspection and maintenance operations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;