import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import bridgeImg from '../assets/Solution/Solution IMG/bridge-2.png';
import tunnelImg from '../assets/Solution/Solution IMG/tunnel-1.png';
import portImg from '../assets/Solution/Solution IMG/port-1.png';
import damImg from '../assets/Solution/Solution IMG/dam-2.png';
import pipelineImg from '../assets/Solution/Solution IMG/pipeline-1.png';
import offshoreImg from '../assets/Solution/Solution IMG/offshore-1.png';
import defenceImg from '../assets/Solution/Solution IMG/defence-1.png';
import searchRescueImg from '../assets/Solution/Solution IMG/search-rescue-1.png';
import marineResearchImg from '../assets/Solution/Solution IMG/marine-research-1.png';
import waterTanksImg from '../assets/Solution/Solution IMG/water-tanks-1.png';
import powerPlantImg from '../assets/Solution/Solution IMG/power-plant-1.png';
import shipHullImg from '../assets/Solution/Solution IMG/ship-hull-1.png';
import enquiryDirection from '../assets/EnquiryDirection.png';

/* ========================================================================== */
/*  CATEGORY DATA                                                             */
/* ========================================================================== */

const categories = [
  {
    id: 'bridges',
    title: 'Bridges',
    tagline: 'Underwater visibility for critical bridge infrastructure.',
    image: bridgeImg,
    overview:
      'Bridge foundations and submerged structural elements are exposed to changing water conditions, sediment movement and potential deterioration. Praxora Robotics provides ROV-based underwater visual inspection to document accessible submerged components and help infrastructure teams understand their visible condition.',
    whatWeInspect: [
      'Bridge piers and submerged columns',
      'Foundation piles and pile caps',
      'Exposed foundation surfaces',
      'Visible cracks, concrete damage and surface deterioration',
      'Scour zones, sediment accumulation and debris around foundations, where observable',
    ],
    approach:
      'We deploy a remotely operated vehicle (ROV) to capture underwater video and photographic evidence of designated structural areas. Inspection coverage depends on water visibility, current, access and site conditions.',
    deliverables: [
      'Underwater inspection videos and photographs',
      'Visual observations of accessible structural elements',
      'Location-based or structure-based evidence, where feasible',
      'Technical Observation Report, if included in the agreed scope',
    ],
    scopeNote:
      'ROV visual inspection documents observable conditions. It does not independently establish structural integrity or replace detailed engineering assessment, underwater NDT or certified structural evaluation.',
  },
  {
    id: 'ports',
    title: 'Ports, Harbours & Marine Structures',
    tagline: 'Underwater inspection for port and coastal infrastructure.',
    image: portImg,
    overview:
      'Port infrastructure operates in demanding marine environments where submerged structural components may be affected by corrosion, marine growth, physical damage and seabed changes. Praxora Robotics provides ROV-based visual inspection of accessible underwater port and harbour structures.',
    whatWeInspect: [
      'Quay walls and submerged retaining structures',
      'Jetty and wharf piles',
      'Berthing structures and dolphins',
      'Accessible submerged concrete and steel surfaces',
      'Visible damage, corrosion indicators, marine growth and debris',
      'Mooring structures, where accessible and included in the inspection scope',
    ],
    approach:
      'The ROV is manoeuvred around designated structures to record visual evidence without requiring a diver to perform the initial visual observation. The inspection plan is adapted to the structure, water conditions and operational restrictions.',
    deliverables: [
      'Underwater videos and still photographs',
      'Visual condition observations',
      'Documentation of accessible areas of concern',
      'Technical Observation Report, if included in the agreed scope',
    ],
    scopeNote:
      'Bathymetric surveys, seabed mapping, mooring-load assessment, underwater NDT and certified structural surveys require appropriate equipment, specialist methods or additional service arrangements.',
  },
  {
    id: 'dams',
    title: 'Dams, Reservoirs & Hydropower',
    tagline: 'Underwater visibility for water resource infrastructure.',
    image: damImg,
    overview:
      'Dam and reservoir infrastructure contains submerged components that may be difficult to examine through conventional visual methods. Praxora Robotics uses ROV-based inspection to capture visual evidence of accessible underwater structures and support maintenance planning.',
    whatWeInspect: [
      'Submerged dam faces and accessible concrete surfaces',
      'Water intake structures',
      'Trash racks and intake screens',
      'Accessible gate surfaces and associated structures',
      'Reservoir walls and designated submerged areas',
      'Visible debris, obstructions, surface damage and sediment accumulation',
    ],
    approach:
      'An ROV is deployed to inspect the designated underwater areas and record video and photographic evidence. The inspection is planned around water depth, visibility, currents, access openings and operational requirements.',
    deliverables: [
      'Underwater video and photographic records',
      'Visual observations of accessible structures',
      'Documentation of visible damage, debris or obstruction',
      'Technical Observation Report, if included in the agreed scope',
    ],
    scopeNote:
      'ROV inspection may reduce the need for diver entry or dewatering for suitable visual inspection tasks, but it does not guarantee that either will be unnecessary in every case. Gate operation, leakage quantification, structural NDT and detailed hydraulic assessment are outside a standard visual inspection unless separately agreed.',
  },
  {
    id: 'ship-hull',
    title: 'Ship Hull & Vessel Inspection',
    tagline: 'Underwater visual inspection of vessel structures.',
    image: shipHullImg,
    overview:
      'A vessel\u2019s underwater hull and appendages are not always readily accessible for routine visual examination. Praxora Robotics provides ROV-based visual inspection of accessible submerged vessel components to document visible condition and support further inspection or maintenance decisions.',
    whatWeInspect: [
      'External underwater hull surfaces',
      'Propellers and rudders, where accessible',
      'Sea chests and vessel intake openings, where accessible',
      'Visible hull damage, coating deterioration and marine growth',
      'Accessible underwater appendages and surrounding structures',
    ],
    approach:
      'The ROV is manoeuvred around the designated areas of a vessel to capture underwater video and photographs. Inspection planning considers vessel access, water clarity, current, operating conditions and the required coverage.',
    deliverables: [
      'Underwater hull video and still photographs',
      'Visual observations of accessible hull areas and appendages',
      'Documentation of visible damage or fouling',
      'Inspection records to support maintenance planning',
    ],
    scopeNote:
      'A standard ROV visual inspection is not equivalent to a classification-approved in-water survey, thickness measurement or a certified vessel condition assessment. Such work requires the applicable approvals, equipment and qualified personnel.',
  },
  {
    id: 'tunnels',
    title: 'Underwater Tunnel & Conduit Inspection',
    tagline: 'Remote visual inspection of submerged and water-filled passages.',
    image: tunnelImg,
    overview:
      'Submerged tunnels and water conveyance conduits can present restricted access, limited visibility and challenging navigation conditions. ROV-based inspection can provide visual access to suitable water-filled passages without requiring personnel to enter the inspected section.',
    whatWeInspect: [
      'Suitable water-filled hydraulic tunnels',
      'Accessible submerged conduit surfaces',
      'Suitable penstocks and water conveyance structures',
      'Visible cracks, surface deterioration and deposits',
      'Debris, obstructions and visible changes in accessible areas',
    ],
    approach:
      'Before deployment, the tunnel geometry, length, flow conditions, access points, tether requirements and visibility must be assessed. Where the environment and equipment permit, the ROV captures video and photographic records of the designated inspection areas.',
    deliverables: [
      'Underwater video and photographic records',
      'Visual observations of accessible tunnel surfaces',
      'Documentation of visible obstructions and areas of concern',
      'Technical Observation Report, if included in the agreed scope',
    ],
    scopeNote:
      'Not every tunnel is suitable for a standard inspection ROV. High-flow passages, long tunnels, confined geometry and poor visibility may require specialised navigation, tether management or purpose-built equipment.',
  },
  {
    id: 'pipelines',
    title: 'Submerged Pipeline Inspection',
    tagline: 'Visual evidence for accessible underwater pipeline assets.',
    image: pipelineImg,
    overview:
      'Submerged pipelines and associated structures may be exposed to external damage, coating deterioration, support changes and surrounding debris. Praxora Robotics provides ROV-based visual inspection of accessible external pipeline sections to document their observable condition.',
    whatWeInspect: [
      'Accessible submerged pipeline sections',
      'Exposed external pipe surfaces and joints',
      'Pipeline supports and accessible crossings',
      'Visible coating damage and corrosion indicators',
      'Exposed sections, debris and apparent support or alignment changes',
      'Intake and outfall structures associated with pipelines',
    ],
    approach:
      'The ROV follows a planned inspection path along accessible pipeline sections, capturing video and photographs of the external surfaces and surrounding structures. Water conditions, current, access, pipeline diameter and operating restrictions determine the feasible inspection coverage.',
    deliverables: [
      'Underwater video and photographic evidence',
      'Visual observations of accessible pipeline sections',
      'Documentation of visible damage, debris and support conditions',
      'Technical Observation Report, if included in the agreed scope',
    ],
    scopeNote:
      'External visual inspection does not establish internal pipe condition, quantify leakage or certify pipeline integrity. Internal inspection, wall-thickness measurement, leak detection, cathodic protection measurement and long-route survey require appropriate specialised equipment and methods.',
  },
  {
    id: 'defence',
    title: 'Defence & Naval Applications',
    tagline: 'Remote underwater observation for naval and maritime assets.',
    image: defenceImg,
    overview:
      'Naval and defence-related underwater assets may require remote visual observation in environments where access is restricted or direct inspection presents operational challenges. Subject to authorisation and mission requirements, ROV technology can support selected underwater inspection and observation tasks.',
    whatWeInspect: [
      'Visual inspection of accessible submerged vessel hulls',
      'Observation of designated underwater structural components',
      'Documentation of visible damage to authorised assets',
      'Remote examination of accessible underwater areas',
      'Inspection support for approved maritime infrastructure',
    ],
    approach:
      'Each mission requires prior assessment of the asset, permitted inspection area, security requirements, operating conditions and equipment suitability. Only authorised inspection tasks within the available technical capability are undertaken.',
    deliverables: [
      'Underwater video and photographic records',
      'Visual observations of authorised inspection areas',
      'Structured inspection documentation, where required',
    ],
    scopeNote:
      'Defence-related work is subject to applicable permissions, security protocols, procurement requirements and mission-specific approvals. Surveillance, mine countermeasures, ordnance handling and other specialised military operations are not implied by standard ROV visual inspection.',
  },
  {
    id: 'search-rescue',
    title: 'Search, Rescue & Underwater Recovery Support',
    tagline: 'Remote underwater search and visual assessment.',
    image: searchRescueImg,
    overview:
      'Underwater search operations can be complicated by low visibility, depth, debris and restricted access. Suitable ROV systems can provide remote visual observation to assist authorised response teams in locating and examining submerged objects or designated search areas.',
    whatWeInspect: [
      'Searching for submerged objects and debris',
      'Visual examination of designated search areas',
      'Locating and documenting visible submerged wreckage',
      'Recording underwater incident scenes',
      'Supporting assessment before a specialist recovery operation',
    ],
    approach:
      'The mission is planned around the search area, water depth, current, visibility, access and available equipment. The ROV captures video and photographs to help authorised teams review observable underwater conditions.',
    deliverables: [
      'Underwater search video and still images',
      'Documentation of visible objects and relevant observations',
      'Search-area records, where location information is available',
      'Inspection summary, if included in the agreed scope',
    ],
    scopeNote:
      'Search support is not a guarantee of locating a missing person or object. Human rescue, recovery lifting, hazardous-material handling and emergency response require appropriately trained and authorised specialist teams. Actual search capability depends on the ROV, sensors and site conditions.',
  },
  {
    id: 'marine-research',
    title: 'Marine Research & Environmental Observation',
    tagline: 'Underwater visual data for marine research.',
    image: marineResearchImg,
    overview:
      'Underwater observation can support marine research by documenting submerged habitats, aquatic environments and visible changes in underwater ecosystems. ROV-based visual data collection provides researchers with imagery from selected areas without requiring direct human access to every observation point.',
    whatWeInspect: [
      'Underwater habitat and seabed visual documentation',
      'Observation of aquatic environments and visible organisms',
      'Photographic records of submerged features',
      'Repeat visual observations of designated locations',
      'Research support for universities, laboratories and marine organisations',
    ],
    approach:
      'The observation plan is developed around the research objective, target area, water visibility, lighting, environmental conditions and required imagery. The ROV records video and photographs for subsequent review by the research team.',
    deliverables: [
      'Underwater research video and photographs',
      'Visual documentation of selected observation areas',
      'Organised image and video records for research review',
      'Field observation summary, if included in the agreed scope',
    ],
    scopeNote:
      'Visual observation alone does not constitute a scientific ecological survey, species identification study, water-quality analysis or environmental compliance assessment. These require appropriate research methods, sensors and specialist expertise.',
  },
  {
    id: 'water-tanks',
    title: 'Water Tanks & Utility Infrastructure',
    tagline: 'Underwater visual inspection of water storage structures.',
    image: waterTanksImg,
    overview:
      'Water storage infrastructure is essential to municipal, industrial and public water supply systems. Praxora Robotics provides ROV-based underwater visual inspection of suitable water-filled tanks and utility structures to document accessible submerged surfaces and support maintenance planning.',
    whatWeInspect: [
      'Clear Water Reservoirs (CWR)',
      'Ground Service Reservoirs (GSR)',
      'Underground Water Storage Tanks (UGWT)',
      'Elevated Service Reservoirs (ESR)',
      'Accessible submerged walls and tank floors',
      'Suitable sumps, wet wells and water-storage structures',
    ],
    approach:
      'The inspection is planned around tank geometry, water depth, access openings, internal obstructions, water conditions and operational requirements. The ROV is deployed through a suitable access point to capture video and photographic evidence of designated submerged surfaces.',
    deliverables: [
      'Underwater video and still photographs',
      'Visual observations of accessible walls and floors',
      'Documentation of visible cracks, deposits, debris and surface deterioration',
      'Technical Observation Report, if included in the agreed scope',
    ],
    scopeNote:
      'The feasibility of inspecting a tank while it remains filled depends on access, water conditions, hygiene requirements and operating procedures. A visual inspection does not certify watertightness, structural safety or drinking-water quality. Cleaning, disinfection and water-quality testing are separate services.',
  },
  {
    id: 'power-plant',
    title: 'Industrial & Power Plant Infrastructure',
    tagline: 'Remote visual inspection of industrial water systems.',
    image: powerPlantImg,
    overview:
      'Industrial facilities and power plants rely on submerged water-handling structures that may be difficult to inspect during normal operations. ROV-based inspection can provide visual access to suitable water-filled systems and document the observable condition of accessible components.',
    whatWeInspect: [
      'Cooling-water intake structures',
      'Accessible intake channels and outfall structures',
      'Suitable pump sumps and wet wells',
      'Submerged industrial structures and supports',
      'Accessible water-filled chambers and reservoirs',
      'Visible debris, obstruction and surface deterioration',
    ],
    approach:
      'The inspection is designed around the structure, operating conditions, access constraints, water flow, visibility and required inspection coverage. ROV video and photographic evidence are collected from designated accessible areas.',
    deliverables: [
      'Underwater video and photographic records',
      'Visual observations of accessible structures',
      'Documentation of visible obstruction, debris and damage',
      'Technical Observation Report, if included in the agreed scope',
    ],
    scopeNote:
      'Live operating systems, strong currents, hot water, hazardous atmospheres and restricted industrial environments require additional risk assessment and may be unsuitable for standard ROV deployment. Shutdown coordination, NDT and detailed mechanical assessment are separate requirements where applicable.',
  },
  {
    id: 'offshore',
    title: 'Offshore & Subsea Infrastructure',
    tagline: 'Underwater visual inspection of offshore assets.',
    image: offshoreImg,
    overview:
      'Offshore and subsea infrastructure operates in environments where access, water depth, currents and marine conditions can make inspection complex. Suitable ROV systems can capture underwater visual evidence of accessible submerged assets to support inspection planning and maintenance decisions.',
    whatWeInspect: [
      'Accessible offshore structural foundations',
      'Submerged piles and structural supports',
      'Selected subsea structures and exposed pipeline sections',
      'Accessible mooring components',
      'Visible debris, marine growth and external surface deterioration',
      'Underwater asset observation for approved inspection projects',
    ],
    approach:
      'Every mission requires assessment of water depth, current, visibility, tether length, vessel access, environmental conditions and the equipment\u2019s rated operating limits. The inspection plan defines the target assets, coverage and required records before deployment.',
    deliverables: [
      'Underwater video and photographic evidence',
      'Visual observations of accessible structures',
      'Documentation of visible damage, debris and marine growth',
      'Technical Observation Report, if included in the agreed scope',
    ],
    scopeNote:
      'Offshore inspection may require specialised ROVs, work vessels, positioning systems, sonar or other sensors. Standard visual inspection does not imply deepwater capability, subsea intervention, certified integrity assessment or offshore mobilisation capability unless specifically confirmed for the project.',
  },
];

/* ========================================================================== */
/*  COMPONENT                                                                 */
/* ========================================================================== */

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.categoryTitle) {
      const target = categories.find((c) => c.title === location.state.categoryTitle);
      if (target) {
        setSelectedCategory(target);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location]);

  const closeModal = () => setSelectedCategory(null);

  return (
    <div className="bg-[#EDF0EF] min-h-screen">
      {/* ============== 00 / HERO ============== */}
      <section className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-28 pb-12">
          {/* Eyebrow */}
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            SOLUTIONS &nbsp;/&nbsp; UNDERWATER INSPECTION
          </p>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] font-black leading-[1.02] tracking-tight text-black mb-10 max-w-4xl">
            CLARITY BELOW
            <br />
            THE WATERLINE.
          </h1>

          {/* Description + CTA row — description left, CTA right-aligned to bottom */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 max-w-5xl">
            <p className="text-neutral-700 text-lg leading-relaxed max-w-2xl">
              Inspect submerged assets with remotely operated vehicles.
              Capture underwater observations to support assessment and
              maintenance decisions.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300 flex-shrink-0 self-start sm:self-end"
            >
              Discuss an Inspection
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hairline divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="border-t border-neutral-300"></div>
        </div>
      </section>

      {/* ============== 01 / CATEGORY GRID ============== */}
      <section className="relative bg-[#EDF0EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24">
          <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-10">
            01 &nbsp;/&nbsp; INSPECTION CATEGORIES
          </p>

          <div className="grid lg:grid-cols-12 gap-12 items-start mb-14">
            <h2 className="lg:col-span-7 text-5xl sm:text-6xl lg:text-[4rem] font-black leading-[1.02] tracking-tight text-black">
              WHAT DO YOU NEED
              <br />
              TO INSPECT?
            </h2>
            <p className="lg:col-span-5 text-neutral-600 text-lg leading-relaxed max-w-md lg:pt-4">
              Choose a category to see the specific inspection services we
              deliver in that environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className="group text-left flex gap-4 items-start py-2 hover:bg-white/60 transition-colors px-3 -mx-3"
              >
                <div className="relative w-[88px] h-[88px] flex-shrink-0 overflow-hidden bg-neutral-200">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-1 pt-1 min-w-0">
                  <h3 className="text-[15px] font-bold text-black tracking-tight leading-tight mb-1.5 group-hover:text-orange-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[13px] text-neutral-500 leading-snug">
                    {cat.tagline}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============== 02 / START A CONVERSATION ============== */}
      <section className="relative bg-[#EDF0EF] border-t border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-12">
                <span className="text-orange-500">+</span> &nbsp; START A
                CONVERSATION
              </p>
              <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1] tracking-tight text-black mb-10">
                HAVE AN
                <br />
                INSPECTION REQUIREMENT?
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-xl mb-6">
                Every underwater environment presents different technical and
                operational challenges. Share your asset details, location and
                inspection objectives with Praxora Robotics to discuss a
                suitable ROV inspection approach.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-end gap-10 lg:pt-4">
              <img
                src={enquiryDirection}
                alt=""
                aria-hidden="true"
                className="w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] object-contain"
              />
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-semibold shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 transition-all duration-300"
              >
                Discuss Your Project
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CATEGORY DETAIL MODAL ============== */}
      {selectedCategory && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-start lg:items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-12 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white max-w-3xl w-full border border-neutral-300 my-auto"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white hover:bg-neutral-100 text-neutral-700 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="relative w-full aspect-[16/8] overflow-hidden bg-neutral-900">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-[10px] tracking-[0.22em] text-orange-600 font-bold mb-3">
                  INSPECTION CATEGORY
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-black text-black tracking-tight leading-tight">
                  {selectedCategory.title}
                </h2>
              </div>

              <div className="mb-8">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-3">
                  OVERVIEW
                </p>
                <p className="text-neutral-700 leading-relaxed text-base">
                  {selectedCategory.overview}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-4">
                  WHAT WE INSPECT
                </p>
                <ul className="space-y-2.5">
                  {selectedCategory.whatWeInspect.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-3">
                  OUR INSPECTION APPROACH
                </p>
                <p className="text-neutral-700 leading-relaxed text-base">
                  {selectedCategory.approach}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-[10px] tracking-[0.22em] text-neutral-500 font-bold mb-4">
                  DELIVERABLES
                </p>
                <ul className="space-y-2.5">
                  {selectedCategory.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 px-5 py-4 mb-8">
                <p className="text-[10px] tracking-[0.22em] text-orange-700 font-bold mb-2">
                  SCOPE NOTE
                </p>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {selectedCategory.scopeNote}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-black font-semibold transition-all duration-300"
                >
                  Discuss this Service
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-400 hover:border-black text-neutral-800 font-semibold transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Solutions;