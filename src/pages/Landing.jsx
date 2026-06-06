import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* American flag stripe */}
      <div className="h-4 flex">
        <div className="w-1/3 bg-red-600"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-blue-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Your AI guide through every PCS move
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Military families deserve a smoother relocation experience. MilPath uses advanced AI to generate personalized PCS plans that cover everything from timelines and housing to schools, healthcare, and finances—tailored to your specific move.
          </p>
          <Link to="/form" className="mt-8 inline-block bg-navy text-white px-8 py-3 rounded-lg font-medium hover:bg-navy/80 transition-colors transform hover:scale-105">
            Get Started
          </Link>
        </section>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-xl shadow-md border border-navy/10 p-6 hover:bg-navy/50 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-gold/10 p-3 rounded-full mr-3">
                <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1H13v3a.5.5 0 01-1 0V14h-1a.5.5 0 01-.5-.5v-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy">Week-by-Week Timeline</h3>
            </div>
            <p className="text-gray-600">
              Get a customized countdown to your move date with all the critical milestones—from household goods pickup to final clearance—so nothing falls through the cracks.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-xl shadow-md border border-navy/10 p-6 hover:bg-navy/50 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-gold/10 p-3 rounded-full mr-3">
                <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy">Base-Specific Resources</h3>
            </div>
            <p className="text-gray-600">
              Detailed insights for your specific bases—including housing waitlists, school ratings, healthcare facilities, and local tips—so you know exactly what to expect at your new duty station.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-xl shadow-md border border-navy/10 p-6 hover:bg-navy/50 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-gold/10 p-3 rounded-full mr-3">
                <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.029 9-11.622 0-.145-.001-.29-.006-.434z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy">Family Tailored</h3>
            </div>
            <p className="text-gray-600">
              Whether you're moving with infants, teens, elderly parents, or pets—your plan adapts to your family's unique needs, including spouse employment options and childcare solutions.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white rounded-xl shadow-md border border-navy/10 p-6 hover:bg-navy/50 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-gold/10 p-3 rounded-full mr-3">
                <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1H13v3a.5.5 0 01-1 0V14h-1a.5.5 0 01-.5-.5v-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy">Financial Guidance</h3>
            </div>
            <p className="text-gray-600">
              Maximize your entitlements with precise BAH/BAS calculations, DITY/PPM move comparisons, storage cost estimates, and spouse benefit programs like MyCAA and MSEP—all personalized to your rank and location.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-white rounded-xl shadow-md border border-navy/10 p-6 hover:bg-navy/50 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-gold/10 p-3 rounded-full mr-3">
                <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy">TriCare & Healthcare</h3>
            </div>
            <p className="text-gray-600">
              Seamless healthcare transitions including TriCare Prime/Select transfers, finding new providers, understanding base medical facilities, and managing ongoing treatments during your move.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-white rounded-xl shadow-md border border-navy/10 p-6 hover:bg-navy/50 transition-colors">
            <div className="flex items-center mb-4">
              <div className="bg-gold/10 p-3 rounded-full mr-3">
                <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M6 5.636A9 9 0 0118.364 5M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy">AI-Powered Intelligence</h3>
            </div>
            <p className="text-gray-600">
              Powered by Claude AI, MilPath learns from thousands of successful PCS moves to provide insights you won't find in standard checklists—like which off-base neighborhoods military families actually prefer or hidden PCS benefits.
            </p>
          </div>
        </div>

        {/* Virginia Installations Banner */}
        <div className="bg-navy/50 rounded-xl p-6 text-center border border-navy/20">
          <h3 className="text-xl font-semibold text-navy mb-4">Virginia Installations We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white text-navy px-3 py-1 rounded text-sm">Fort Gregg-Adams</span>
            <span className="bg-white text-navy px-3 py-1 rounded text-sm">MCB Quantico</span>
            <span className="bg-white text-navy px-3 py-1 rounded text-sm">Joint Base Langley-Eustis</span>
            <span className="bg-white text-navy px-3 py-1 rounded text-sm">Naval Station Norfolk</span>
            <span className="bg-white text-navy px-3 py-1 rounded text-sm">NAS Oceana</span>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Plus all major CONUS and OCONUS installations worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;