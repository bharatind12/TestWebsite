import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import enquiryDirection from '../assets/EnquiryDirection.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    enquiryType: 'Inspection',
    projectDetails: '',
  });

  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const enquiryTypes = ['Inspection', 'R&D', 'Support', 'Other'];

  /* ---------------------------------------------------------------------- */
  /*  SCROLL TO FORM ON HASH — offset for fixed navbar                     */
  /* ---------------------------------------------------------------------- */
  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      const timer = setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleEnquiryType = (type) =>
    setFormData((prev) => ({ ...prev, enquiryType: type }));

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Required — enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Required — enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails =
        'Required — include your asset, location and inspection objective.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    // 👇 SWAP THIS LINE WHEN DEPLOYING TO RENDER
    // Local:      http://localhost:5000
    // Production: https://my-backend-v0xm.onrender.com
    //const API_URL = 'http://localhost:5000';
    const API_URL = 'https://my-backend-v0xm.onrender.com';

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          enquiryType: 'Inspection',
          projectDetails: '',
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#EDF0EF] min-h-screen">
      {/* ==================================================================== */}
      {/*  00 / WHAT'S BENEATH YOUR OPERATION?                                  */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF] border-b border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
                CONTACT &nbsp;/&nbsp; START A CONVERSATION
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1.02] tracking-tight text-black mb-10">
                WHAT'S BENEATH
                <br />
                YOUR OPERATION?
              </h1>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-xl">
                Tell us about your asset, location and underwater challenge.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-end gap-8 lg:pt-8">
              <img
                src={enquiryDirection}
                alt=""
                aria-hidden="true"
                className="w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  01 / GET IN TOUCH — anchor for Send Enquiry                         */}
      {/* ==================================================================== */}
      <section id="contact-form" className="relative bg-[#EDF0EF] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
            {/* ---------------- LEFT: Contact Info ---------------- */}
            <div className="lg:col-span-5">
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
                01 &nbsp;/&nbsp; GET IN TOUCH
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black leading-[1.05] tracking-tight text-black mb-14">
                START WITH
                <br />
                THE CHALLENGE.
              </h2>

              {/* EMAIL */}
              <div className="mb-10">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-3">
                  EMAIL
                </p>
                <a
                  href="mailto:praxorarobotics@gmail.com"
                  className="text-xl sm:text-2xl font-bold text-black hover:text-orange-600 transition-colors break-all"
                >
                  praxorarobotics@gmail.com
                </a>
              </div>

              {/* OFFICE */}
              <div className="mb-10">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-3">
                  OFFICE
                </p>
                <a
                  href="tel:+917887889173"
                  className="text-xl sm:text-2xl font-bold text-black hover:text-orange-600 transition-colors"
                >
                  +91 78878 89173
                </a>
              </div>

              {/* Divider + note */}
              <div className="border-t border-neutral-300 pt-8">
                <p className="text-base text-neutral-600 leading-relaxed max-w-md">
                  Prefer email or phone? Reach us directly using the details
                  above — we typically respond within 24 hours.
                </p>
              </div>
            </div>

            {/* ---------------- RIGHT: Form ---------------- */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black leading-[1.05] tracking-tight text-black mb-6">
                  TELL US ABOUT YOUR PROJECT.
                </h2>

                <p className="text-sm text-neutral-500">
                  <span className="text-red-500">*</span> Required fields. All
                  other fields are optional.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base font-bold text-black mb-3"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full bg-white border px-5 py-4 text-base text-black placeholder:text-neutral-400 outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500'
                          : 'border-neutral-300 focus:border-orange-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-2">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-bold text-black mb-3"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className={`w-full bg-white border px-5 py-4 text-base text-black placeholder:text-neutral-400 outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500'
                          : 'border-neutral-300 focus:border-orange-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-2">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-base font-bold text-black mb-3"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company or organisation"
                      className="w-full bg-white border border-neutral-300 focus:border-orange-500 px-5 py-4 text-base text-black placeholder:text-neutral-400 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-base font-bold text-black mb-3"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Include country code"
                      className="w-full bg-white border border-neutral-300 focus:border-orange-500 px-5 py-4 text-base text-black placeholder:text-neutral-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-base font-bold text-black mb-3">
                    Enquiry type
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {enquiryTypes.map((type) => {
                      const active = formData.enquiryType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleEnquiryType(type)}
                          className={`px-6 py-3 text-sm font-semibold transition-all duration-200 border ${
                            active
                              ? 'bg-orange-500 border-orange-500 text-black'
                              : 'bg-white border-neutral-300 text-neutral-800 hover:border-orange-400'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="projectDetails"
                    className="block text-base font-bold text-black mb-3"
                  >
                    Project details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={7}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Describe your asset, location and underwater challenge."
                    className={`w-full bg-white border px-5 py-4 text-base text-black placeholder:text-neutral-400 outline-none transition-colors resize-none ${
                      errors.projectDetails
                        ? 'border-red-500'
                        : 'border-neutral-300 focus:border-orange-500'
                    }`}
                  />
                  {errors.projectDetails ? (
                    <p className="text-xs text-red-600 mt-2">
                      {errors.projectDetails}
                    </p>
                  ) : (
                    <p className="text-xs text-neutral-500 mt-2">
                      Required — include your asset, location and inspection
                      objective.
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  {status === 'success' && (
                    <p className="text-sm font-semibold text-green-700">
                      Enquiry sent. We'll respond shortly.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm font-semibold text-red-600">
                      Something went wrong. Try again or email us directly.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  02 / OUR LOCATIONS — DARK                                            */}
      {/* ==================================================================== */}
      <section className="relative bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-14">
            02 &nbsp;/&nbsp; OUR LOCATIONS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* HEAD OFFICE */}
            <div>
              <div className="border-t border-neutral-700 pt-6 mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  HEAD OFFICE
                </h3>
              </div>

              <p className="text-base text-neutral-400 leading-relaxed mb-8">
                Mazgaon, Murud-Janjira, Raigad, Maharashtra 402401
              </p>

              <div className="space-y-3">
                <a
                  href="tel:+918983301371"
                  className="block text-lg font-bold text-white hover:text-orange-500 transition-colors"
                >
                  +91 89833 01371
                </a>
                <a
                  href="tel:+917887889173"
                  className="block text-lg font-bold text-white hover:text-orange-500 transition-colors"
                >
                  +91 78878 89173
                </a>
              </div>
            </div>

            {/* PUNE */}
            <div>
              <div className="border-t border-neutral-700 pt-6 mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  PUNE
                </h3>
              </div>

              <p className="text-base text-neutral-400 leading-relaxed mb-8">
                Ganga Acropolis, Mohan Nagar Co-Op Society, Baner, Pune 411021.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:+917720885262"
                  className="block text-lg font-bold text-white hover:text-orange-500 transition-colors"
                >
                  +91 77208 85262
                </a>
                <a
                  href="tel:+917887889173"
                  className="block text-lg font-bold text-white hover:text-orange-500 transition-colors"
                >
                  +91 78878 89173
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;