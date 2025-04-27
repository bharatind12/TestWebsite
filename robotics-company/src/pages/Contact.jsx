import React, { useState } from "react";
import axios from "axios";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FiUser, FiMail, FiPhone, FiMessageCircle, FiSend } from "react-icons/fi";

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
      await axios.post("http://localhost:5000/api/contact", formData);
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

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-12">We'd love to hear from you. Get in touch with our team.</p>
        
        {/* Main Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Address Section */}
          <div className="space-y-8 bg-white rounded-2xl shadow-lg p-8 order-2 md:order-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-10 h-1 bg-orange-400 mr-3"></span>
              Our Offices
            </h2>
            
            <div className="transition-all duration-300 hover:shadow-md p-6 rounded-xl border border-gray-100">
              <p className="text-xl font-bold text-orange-400 mb-3">PRAXORA ROBOTICS</p>
              <p className="text-gray-700 font-medium">Head Office</p>
              <div className="mt-3 space-y-1 text-gray-600">
                <p>Mazgaon, Murud-Janjira</p>
                <p>Dist-Raigarh (MH) - 402401</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 mb-1">R&D Project inquiries:</p>
                <p className="text-gray-800 font-semibold">+91 8983301371</p>
                <p className="text-gray-600 mt-1">praxorarobotics@gmail.com</p>
              </div>
            </div>

            <div className="transition-all duration-300 hover:shadow-md p-6 rounded-xl border border-gray-100">
              <p className="text-xl font-bold text-orange-400 mb-3">PRAXORA ROBOTICS</p>
              <p className="text-gray-700 font-medium">Pune Branch</p>
              <div className="mt-3 space-y-1 text-gray-600">
                <p>Ganga Acropolis, Mohan Nagar Co-Op Society,</p>
                <p>Baner, Pune (MH) - 411021</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 mb-1">Service and Job inquiries:</p>
                <p className="text-gray-800 font-semibold">+91 7720885262</p>
                <p className="text-gray-600 mt-1">praxorarobotics@gmail.com</p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="pt-6 mt-6 border-t border-gray-100">
              <p className="text-gray-700 font-medium mb-4">Connect with us:</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" 
                  className="bg-orange-50 hover:bg-orange-100 text-orange-500 p-3 rounded-full transition duration-300 transform hover:scale-110">
                  <FaInstagram size={20} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" 
                  className="bg-orange-50 hover:bg-orange-100 text-orange-500 p-3 rounded-full transition duration-300 transform hover:scale-110">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://wa.me/917720885262" target="_blank" rel="noopener noreferrer" 
                  className="bg-orange-50 hover:bg-orange-100 text-orange-500 p-3 rounded-full transition duration-300 transform hover:scale-110">
                  <FaWhatsapp size={20} />
                </a>
                <a href="mailto:praxorarobotics@gmail.com" 
                  className="bg-orange-50 hover:bg-orange-100 text-orange-500 p-3 rounded-full transition duration-300 transform hover:scale-110">
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 order-1 md:order-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <span className="w-10 h-1 bg-orange-400 mr-3"></span>
                Send a Message
              </h2>
              <p className="text-gray-600 mt-2">We'll get back to you as soon as possible</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiUser />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition bg-gray-50 hover:bg-white"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiMail />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition bg-gray-50 hover:bg-white"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiPhone />
                </div>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Phone Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition bg-gray-50 hover:bg-white"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FiMessageCircle />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition bg-gray-50 hover:bg-white"
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-32 border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 focus:outline-none transition resize-none bg-gray-50 hover:bg-white"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:translate-y-1 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Status Message */}
            {status === "success" && (
              <div className="mt-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p>Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}
            
            {status === "error" && (
              <div className="mt-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p>Error sending message. Please try again or contact us directly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;