import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Save, Trash2, Printer, RotateCcw } from 'lucide-react';

const Results = () => {
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedPlan = window.sessionStorage.getItem('milpathPlan');
    if (storedPlan) {
      setPlan(storedPlan);
    } else {
      // If no plan is stored, redirect to form
      window.location.href = '/form';
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    // In a real app, you might save to a database or local storage
    alert('Plan saved successfully! (In a production app, this would save to your account)');
  };

  const handleStartOver = () => {
    window.sessionStorage.removeItem('milpathPlan');
    window.location.href = '/form';
  };

  // Parse the plan into sections
  const sections = [
    { title: 'TIMELINE', icon: 'Schedule' },
    { title: 'HOUSING', icon: 'Home' },
    { title: 'SCHOOLS & CHILDCARE', icon: 'School' },
    { title: 'HEALTHCARE', icon: 'Heart' },
    { title: 'LOGISTICS', icon: 'Truck' },
    { title: 'FINANCES', icon: 'DollarSign' },
    { title: 'BASE RESOURCES', icon: 'MapPin' },
    { title: 'QUICK WINS', icon: 'Zap' }
  ];

  const parsePlan = (planText) => {
    const result = {};
    let currentSection = null;
    let currentContent = [];

    const lines = planText.split('\n');
    lines.forEach(line => {
      const sectionMatch = line.match(/^([A-Z\s&]+):?$/);
      if (sectionMatch) {
        if (currentSection) {
          result[currentSection] = currentContent.join('\n').trim();
        }
        currentSection = sectionMatch[1].trim();
        currentContent = [];
      } else if (currentSection) {
        currentContent.push(line);
      }
    });

    // Add the last section
    if (currentSection) {
      result[currentSection] = currentContent.join('\n').trim();
    }

    return result;
  };

  const parsedPlan = plan ? parsePlan(plan) : {};

  return (
    <div className="min-h-screen bg-white">
      {/* American flag stripe */}
      <div className="h-4 flex">
        <div className="w-1/3 bg-red-600"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-blue-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!plan && !loading && !error ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-navy mb-4">No PCS plan available</h2>
            <p className="text-gray-600">
              Please go back and fill out the form to generate your personalized PCS plan.
            </p>
            <Link to="/form" className="mt-6 inline-block bg-navy text-white px-6 py-2 rounded-lg font-medium hover:bg-navy/80 transition-colors">
              Go to Form
            </Link>
          </div>
        ) : (
          <>
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded mb-6">
                {error}
              </div>
            )}

            {/* Route and Family Badges */}
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="bg-navy/10 text-navy px-3 py-1 rounded text-sm font-medium">
                {/* We would get these from form data, but for now we'll use placeholders */}
                Current Base → Destination Base
              </span>
              <span className="bg-gold/10 text-gold px-3 py-1 rounded text-sm font-medium">
                Family Size: 4 members
              </span>
            </div>

            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-navy mb-2">
                Your Personalized PCS Plan
              </h1>
              <p className="text-gray-600">
                Generated specifically for your military relocation. Review each section below for detailed guidance.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mb-8 flex flex-wrap items-center justify-between">
              <div className="flex space-x-3">
                <button onClick={handlePrint} className="flex items-center bg-navy text-white px-4 py-2 rounded hover:bg-navy/80 transition-colors">
                  <Printer className="mr-2 h-4 w-4" /> Print
                </button>
                <button onClick={handleSave} className="flex items-center bg-gold text-navy px-4 py-2 rounded hover:bg-gold/80 transition-colors">
                  <Save className="mr-2 h-4 w-4" /> Save Plan
                </button>
              </div>
              <Link to="/form" onClick={handleStartOver} className="bg-navy text-white px-6 py-2 rounded-lg font-medium hover:bg-navy/80 transition-colors">
                Start Over <RotateCcw className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Sections Grid */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div key={index} className="border border-navy/10 rounded-xl overflow-hidden shadow-md">
                  {/* Section Header */}
                  <div className="bg-navy text-white px-6 py-4">
                    <div className="flex items-center">
                      {/* Icon would come from lucide-react, but we'll use a placeholder for now */}
                      <div className="bg-gold/20 text-gold p-2 rounded-full mr-3">
                        {/* We would map the section title to an icon, but for simplicity we'll use a dot */}
                        <span className="h-2.5 w-2.5 bg-gold rounded-full" />
                      </div>
                      <h2 className="text-lg font-semibold">{section.title}</h2>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-6">
                    {parsedPlan[section.title] ? (
                      <div className="prose prose-navy max-w-none text-gray-700">
                        {parsedPlan[section.title].split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-4">{paragraph}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">
                        No specific information provided for this section.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Results;