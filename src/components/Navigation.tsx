import React from 'react';
import { Menu, X, MapPin, Users, Phone, Star, Plane } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const tabs = [
    { id: 'destinations', path: '/destinos', label: 'Destinos', icon: MapPin },
    { id: 'reviews', path: '/avaliacoes', label: 'Avaliações', icon: Star },
    { id: 'contact', path: '/contato', label: 'Contato', icon: Phone },
    { id: 'about', path: '/sobre', label: 'Sobre', icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <Plane className="h-8 w-8 text-teal-600 group-hover:animate-bounce" />
            <span className="text-xl font-bold text-teal-600 ml-2">Maria Excursões e Turismo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {tabs.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
                  ${location.pathname === path
                    ? 'text-teal-600 bg-teal-50 scale-105'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50 hover:scale-105'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-teal-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {tabs.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                  ${location.pathname === path
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;