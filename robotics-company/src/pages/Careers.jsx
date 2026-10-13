import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import productHeroStage from '../assets/transparent-rov.png';

const Careers = () => {
  const expertiseCategories = [
    {
      title: 'Robotics & ROVs',
      roles: [
        'Custom ROV Development Engineer',
        'Robotics R&D Specialist',
        'Systems Integration Engineer',
      ],
    },
    {
      title: 'Electronics & Embedded',
      roles: [
        'Embedded Systems & Firmware Engineer',
        'PCB Design & Hardware Specialist',
        'Sensor & Power Integration Engineer',
      ],
    },
    {
      title: 'Software & AI',
      roles: [
        'ROS / BlueOS / ArduSub Developer',
        'Computer Vision & Defect Detection Specialist',
        'Control Systems & Telemetry Developer',
      ],
    },
    {
      title: 'Mechanical Engineering',
      roles: [
        'Subsea Mechanical Design Engineer',
        'Waterproofing & Enclosure Specialist',
        'Gripper & Robotic Arm Integration Engineer',
      ],
    },
  ];

  return (
    <div className="bg-[#EDF0EF] min-h-screen">
      {/* ==================================================================== */}
      {/*  00 / HERO — BUILD WHAT GOES BELOW. + ROV with crosshair             */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-28 pb-20">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-12">
            CAREERS &nbsp;/&nbsp; OPEN APPLICATIONS
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1.02] tracking-tight text-black mb-14">
                BUILD WHAT
                <br />
                GOES BELOW.
              </h1>

              <p className="text-neutral-600 text-lg leading-relaxed max-w-md mb-10">
                Welcome open applications in robotics, electronics, software,
                mechanical engineering and underwater technologies.
              </p>

              <a
                href="mailto:praxorarobotics@gmail.com?subject=Application%20for%20%5BExpertise%5D%20-%20%5BName%5D"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300"
              >
                Email Your Application
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* RIGHT: ROV with crosshair */}
            <div className="relative w-full aspect-square max-w-[560px] mx-auto">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-neutral-400/60" />
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-neutral-400/60" />
                  <div className="absolute inset-x-[8%] inset-y-[18%] rounded-full border border-neutral-400/50" />
                </div>
              </div>

              <img
                src={productHeroStage}
                alt="P1 PRO ROV platform"
                className="relative z-10 w-full h-full object-contain scale-125 drop-shadow-[0_25px_40px_rgba(10,10,10,0.15)]"
              />
            </div>
          </div>
        </div>

        {/* Bottom hairline + tagline */}
        <div className="border-t border-neutral-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
            <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold">
              ROBOTIC ENGINEERING &nbsp;/&nbsp; BELOW THE WATERLINE
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  01 / AREAS OF EXPERTISE — DARK, COMPACT 4-COLUMN                     */}
      {/* ==================================================================== */}
      <section className="relative bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            01 &nbsp;/&nbsp; AREAS OF EXPERTISE
          </p>

          <div className="grid lg:grid-cols-12 gap-12 items-start mb-14">
            <h2 className="lg:col-span-7 text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.02] tracking-tight text-white">
              BRING YOUR
              <br />
              EXPERTISE.
            </h2>
            <p className="lg:col-span-5 text-neutral-400 text-base leading-relaxed max-w-md lg:pt-4">
              We're hiring across four disciplines — from ROV engineering to
              underwater operations.
            </p>
          </div>

          {/* Compact 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {expertiseCategories.map((category) => (
              <div key={category.title}>
                {/* Category heading */}
                <div className="border-t border-neutral-700 pt-5 mb-5">
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Roles list */}
                <ul className="space-y-3">
                  {category.roles.map((role) => (
                    <li key={role} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                      <a
                        href={`mailto:praxorarobotics@gmail.com?subject=${encodeURIComponent(
                          `Application for ${role}`
                        )}`}
                        className="text-sm text-neutral-300 hover:text-orange-400 transition-colors leading-snug"
                      >
                        {role}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/*  02 / HOW TO APPLY — LIGHT                                            */}
      {/* ==================================================================== */}
      <section className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-12">
                02 &nbsp;/&nbsp; HOW TO APPLY
              </p>

              <h2 className="text-5xl sm:text-6xl lg:text-[4rem] font-black leading-[1.02] tracking-tight text-black mb-10">
                INTRODUCE
                <br />
                YOURSELF.
              </h2>

              <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
                Email your CV and a short cover note to{' '}
                <a
                  href="mailto:praxorarobotics@gmail.com"
                  className="text-black font-bold underline decoration-orange-500 decoration-2 underline-offset-4 hover:text-orange-600 transition-colors"
                >
                  praxorarobotics@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <div className="border-t border-neutral-400 pt-6 mb-10">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-3">
                  TO
                </p>
                <a
                  href="mailto:praxorarobotics@gmail.com"
                  className="text-2xl sm:text-3xl font-bold text-black hover:text-orange-600 transition-colors break-all"
                >
                  praxorarobotics@gmail.com
                </a>
              </div>

              <div className="border-t border-neutral-400 pt-6 mb-10">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-3">
                  SUBJECT
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  Application for [Expertise] — [Name]
                </p>
              </div>

              <a
                href="mailto:praxorarobotics@gmail.com?subject=Application%20for%20%5BExpertise%5D%20-%20%5BName%5D"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300"
              >
                Email Your Application
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;