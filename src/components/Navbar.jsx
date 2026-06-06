import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-navy bg-opacity-90 backdrop-blur-sm border-b border-navy/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-white tracking-tight">
              MilPath
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/form" className="text-gray-300 hover:text-white transition-colors">
                Get Started
              </Link>
              <Link to="/results" className="text-gray-300 hover:text-white transition-colors">
                Results
              </Link>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            {/* Mobile menu button */}
            <button id="mobile-menu-button" className="text-gray-300 hover:text-white transition-colors p-1 rounded">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy/20">
            Home
          </Link>
          <Link to="/form" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy/20">
            Get Started
          </Link>
          <Link to="/results" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-navy/20">
            Results
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;