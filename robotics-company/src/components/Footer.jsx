import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-400/10 to-orange-300/10 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-500/10 to-orange-200/10 rounded-full translate-x-32 translate-y-32"></div>
      <div className="absolute top-1/2 left-1/2 w-52 h-52 bg-gradient-to-r from-orange-400/5 to-orange-300/5 rounded-full -translate-x-28 -translate-y-28"></div>
      
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-5">
            <span className="text-white text-2xl font-black bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              Praxora Robotics
            </span>
            <div className="flex items-center mt-2 mb-3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full"></div>
              <div className="w-1 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-1.5"></div>
              <div className="w-4 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
            </div>
            <p className="text-slate-300 leading-snug text-sm font-medium">
              Leading robotics and automation with innovative underwater technology solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-2 mt-3">
              {['📧','🔗','📱'].map((icon, i) => (
                <a key={i} href="#" className="group w-9 h-9 bg-gradient-to-br from-slate-700 to-slate-800 hover:from-orange-500 hover:to-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1">
                  <span className="text-slate-300 group-hover:text-white text-base">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-white font-black text-lg mb-2">Quick Links</h3>
            <div className="flex items-center mb-3">
              <div className="w-6 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-1"></div>
            </div>
            <ul className="space-y-1">
              {['Home','About','Services','Products','Team','Careers'].map((name, i) => (
                <li key={i}>
                  <a href={`/${name.toLowerCase()}`} className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 font-medium text-sm">
                    <span className="w-1 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-white font-black text-lg mb-2">Get In Touch</h3>
            <div className="flex items-center mb-3">
              <div className="w-6 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-1"></div>
            </div>
            <div className="space-y-2">
              {[
                { icon: '📍', text: 'Ganga Acropolis, Mohan Nagar Co-Op Society, Baner, Pune (MH) - 411021' },
                { icon: '📞', text: '+91 9325051772' },
                { icon: '✉️', text: 'praxorarobotics@gmail.com', link: 'mailto:praxorarobotics@gmail.com' }
              ].map((item, i) => (
                <div key={i} className="group flex items-center p-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg border border-slate-700/50 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10">
                  <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md flex items-center justify-center mr-2">
                    <span className="text-white text-sm">{item.icon}</span>
                  </div>
                  {item.link ? (
                    <a href={item.link} className="text-slate-300 hover:text-orange-400 transition-colors duration-300 font-medium text-sm">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-slate-300 font-medium text-sm">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/20 to-transparent h-px"></div>
          <div className="pt-3">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-sm">P</span>
                </div>
                <p className="text-slate-400 font-medium text-sm">
                  © {new Date().getFullYear()} Praxora Robotics Pvt Ltd. All rights reserved.
                </p>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                {['Privacy Policy','Terms of Service','Sitemap'].map((item, i) => (
                  <React.Fragment key={i}>
                    <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 font-medium">{item}</a>
                    {i < 2 && <span className="text-slate-600">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
