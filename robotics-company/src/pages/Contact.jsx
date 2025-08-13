import React, { useState } from "react";
import { Instagram, Linkedin, MessageCircle, Mail, User, Phone, Send, MapPin, Clock } from "lucide-react";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("sending");
    try {
      // Simulating API call
      //await axios.post("http://localhost:5000/api/contact", formData);
      await axios.post("https://my-backend-v0xm.onrender.com/api/contact", formData);
      setStatus("success");
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const offices = [
    {
      type: "Head Office",
      location: "Mazgaon, Murud-Janjira",
      address: "Dist-Raigarh (MH) - 402401",
      phone: "+91 9325051772",
      email: "praxorarobotics@gmail.com",
      specialty: "R&D Project inquiries",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      type: "Pune Branch",
      location: "Ganga Acropolis, Mohan Nagar Co-Op Society",
      address: "Baner, Pune (MH) - 411021",
      phone: "+91 9325051772",
      email: "praxorarobotics@gmail.com",
      specialty: "Service and Job inquiries",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      url: "https://www.instagram.com/praxorarobitics?igsh=MXVtbmltNnZmeTllZQ==", 
      color: "from-pink-500 to-purple-600",
      name: "Instagram"
    },
    { 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/praxora-robotics-95b55937a/", 
      color: "from-blue-600 to-blue-700",
      name: "LinkedIn"
    },
    { 
      icon: MessageCircle, 
      url: "https://wa.me/qr/QZZTKJFPBCECF1", 
      color: "from-green-500 to-green-600",
      name: "WhatsApp"
    },
    { 
      icon: Mail, 
      url: "mailto:praxorarobotics@gmail.com", 
      color: "from-red-500 to-red-600",
      name: "Email"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-orange-100 min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 py-16 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-orange-400 to-orange-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-orange-100 to-orange-200 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto mb-4"></div>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to revolutionize your operations? Let's discuss how our robotic solutions can transform your business.
          </p>
        </div>
      </div>

      {/* Main Content with overlap effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Information - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Office Locations */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full -translate-y-12 translate-x-12 opacity-40"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-6 flex items-center">
                  <MapPin className="text-orange-600 mr-3" size={24} />
                  Our Offices
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {offices.map((office, index) => (
                    <div 
                      key={index}
                      className="group bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border-2 border-slate-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
                    >
                      {/* Decorative gradient overlay */}
                      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${office.gradient} rounded-full -translate-y-8 translate-x-8 opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                      
                      <div className="relative z-10">
                        <div className="mb-4">
                          <div className={`inline-block px-3 py-1 bg-gradient-to-r ${office.gradient} text-white rounded-full text-xs font-bold mb-2`}>
                            {office.specialty}
                          </div>
                          <h3 className="text-lg font-bold text-slate-800 mb-1">PRAXORA ROBOTICS</h3>
                          <p className="text-base font-semibold text-orange-700">{office.type}</p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <MapPin className="text-slate-500 mt-1 flex-shrink-0" size={14} />
                            <div>
                              <p className="text-slate-700 font-medium text-sm">{office.location}</p>
                              <p className="text-slate-600 text-sm">{office.address}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Phone className="text-slate-500" size={14} />
                            <a href={`tel:${office.phone}`} className="text-slate-800 font-semibold hover:text-orange-600 transition-colors text-sm">
                              {office.phone}
                            </a>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Mail className="text-slate-500" size={14} />
                            <a href={`mailto:${office.email}`} className="text-slate-700 hover:text-orange-600 transition-colors text-sm">
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Hours & Social Media */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-100 to-orange-50 rounded-full translate-y-10 -translate-x-10 opacity-30"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                    <Clock className="text-orange-600 mr-2" size={20} />
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-700 font-medium text-sm">Monday - Friday</span>
                      <span className="text-slate-800 font-semibold text-sm">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-700 font-medium text-sm">Saturday</span>
                      <span className="text-slate-800 font-semibold text-sm">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-700 font-medium text-sm">Sunday</span>
                      <span className="text-red-600 font-semibold text-sm">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full -translate-y-10 translate-x-10 opacity-30"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Connect With Us</h3>
                  <p className="text-slate-600 mb-4 text-sm">Follow us on social media for updates and insights</p>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center justify-center p-3 bg-gradient-to-r ${social.color} text-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5`}
                      >
                        <social.icon className="mr-1" size={16} />
                        <span className="font-semibold text-xs">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Takes 1 column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white shadow-xl rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full -translate-y-12 -translate-x-12 opacity-30"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-2">
                    Send Message
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mb-3"></div>
                  <p className="text-slate-600 text-sm">We'll respond within 24 hours</p>
                </div>
                
                <div className="space-y-4">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                      <User size={16} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-slate-200 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition-all bg-slate-50 hover:bg-white focus:bg-white text-sm"
                    />
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                      <Mail size={16} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-slate-200 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition-all bg-slate-50 hover:bg-white focus:bg-white text-sm"
                    />
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                      <Phone size={16} />
                    </div>
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Phone Number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-slate-200 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition-all bg-slate-50 hover:bg-white focus:bg-white text-sm"
                    />
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
                      <MessageCircle size={16} />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-slate-200 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition-all bg-slate-50 hover:bg-white focus:bg-white text-sm"
                    />
                  </div>
                  
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full border-2 border-slate-200 rounded-lg py-3 px-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition-all resize-none bg-slate-50 hover:bg-white focus:bg-white text-sm"
                  ></textarea>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                        <span className="text-sm">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span className="text-sm">Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Enhanced Status Messages */}
                {status === "success" && (
                  <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center shadow-md">
                    <div className="bg-green-500 text-white rounded-full p-1 mr-2">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-xs">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="mt-4 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center shadow-md">
                    <div className="bg-red-500 text-white rounded-full p-1 mr-2">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Error sending message</p>
                      <p className="text-xs">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-white via-orange-50 to-orange-100 rounded-2xl shadow-xl p-10 border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-800 bg-clip-text text-transparent mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              For urgent inquiries or immediate project discussions, reach out to our team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918983301371"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                <Phone className="mr-2" size={16} />
                Call Head Office
              </a>
              <a
                href="https://wa.me/919325051772"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="mr-2" size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;