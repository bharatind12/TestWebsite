import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import bharatImg from '../assets/Bharat.png';
import pranavImg from '../assets/Pranav.png';

const About = () => {
  const team = [
    {
      name: 'Bharat Manohar Khanvilkar',
      badge: 'CO-FOUNDER',
      role: 'Co-Founder & Director — Technology & R&D',
      bio: 'Leads technology, engineering and R&D at Praxora Robotics with a focus on robotics systems, underwater ROV technology, product development and technical innovation.',
      image: bharatImg,
    },
    {
      name: 'Pranav Bhaskar Kulkarni',
      badge: 'CO-FOUNDER',
      role: 'Co-Founder & Managing Director',
      bio: 'Leads business strategy, operations and organizational growth at Praxora Robotics — including client relationships, project management, business development and overall company management.',
      image: pranavImg,
    },
  ];

  return (
    <div className="bg-[#EDF0EF] min-h-screen">
      {/* ==================================================================== */}
      {/*  00 / HERO — text only                                                */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-28 pb-20">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            ABOUT US &nbsp;/&nbsp; PRAXORA ROBOTICS
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] font-black leading-[1.02] tracking-tight text-black mb-14 max-w-5xl">
            BUILT IN INDIA.
            <br />
            FOCUSED BELOW
            <br />
            THE SURFACE.
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 max-w-5xl">
            <p className="text-neutral-700 text-lg leading-relaxed max-w-2xl">
              Praxora Robotics develops underwater robotic systems for
              inspecting and understanding submerged infrastructure. Our core
              focus is ROV-based inspection, supported by engineering and
              research.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300 flex-shrink-0 self-start"
            >
              Discuss a Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  01 / OUR DIRECTION — DARK                                            */}
      {/* ==================================================================== */}
      <section className="relative bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-12">
            01 &nbsp;/&nbsp; OUR DIRECTION
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* MISSION */}
            <div className="border-t border-neutral-700 pt-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-black text-white tracking-tight mb-6">
                MISSION
              </h3>
              <p className="text-lg sm:text-xl lg:text-[1.35rem] font-normal leading-[1.4] tracking-tight text-neutral-200">
                Make underwater inspection safer, clearer and more accessible
                through robotic engineering.
              </p>
            </div>

            {/* VISION */}
            <div className="border-t border-neutral-700 pt-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-black text-white tracking-tight mb-6">
                VISION
              </h3>
              <p className="text-lg sm:text-xl lg:text-[1.35rem] font-normal leading-[1.4] tracking-tight text-neutral-200">
                Build trusted, India-developed robotic systems for
                infrastructure below and beyond the waterline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  02 / TEAM — modern card layout, on-brand styling                     */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            02 &nbsp;/&nbsp; TEAM
          </p>

          <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1] tracking-tight text-black mb-16">
            THE PEOPLE BEHIND PRAXORA.
          </h2>

          {/* Team cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {team.map((member) => (
              <article
                key={member.name}
                className="bg-white border border-neutral-200 hover:border-orange-400 hover:shadow-[0_20px_40px_-20px_rgba(234,88,12,0.25)] transition-all duration-300 p-8 lg:p-10 flex flex-col"
              >
                {/* Photo + badge + name + role block */}
                <div className="flex flex-col items-center text-center mb-6">
                  {/* Circular photo */}
                  <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-neutral-200 mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-[10px] tracking-[0.22em] text-orange-600 font-bold border border-orange-500 px-3 py-1 mb-4">
                    {member.badge}
                  </span>

                  {/* Name */}
                  <h3 className="text-2xl lg:text-[1.75rem] font-black text-black tracking-tight leading-tight mb-2">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sm text-neutral-600 font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-200 my-4" />

                {/* Bio */}
                <p className="text-sm text-neutral-600 leading-relaxed text-center">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>

          {/* CTA row */}
          <div className="border-t border-neutral-400 pt-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <h3 className="text-2xl sm:text-[1.85rem] font-normal text-black tracking-tight">
                BUILD WHAT GOES BELOW.
              </h3>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-500 hover:border-orange-500 hover:bg-orange-50 text-black font-semibold transition-all duration-300 self-start sm:self-auto"
              >
                Explore Careers
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;