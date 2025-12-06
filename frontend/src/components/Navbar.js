import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Development & Integration', path: '/services#development' },
        { name: 'AI Training & Education', path: '/services#training' },
        { name: 'Digital Transformation', path: '/services#consulting' },
      ]
    },
    { name: 'Industries', path: '/industries' },
    { name: 'Training', path: '/training' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="section-container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex h-12 w-48 items-center space-x-2 group">
          <img 
  src="/assets/images/black.svg" 
  alt="Anateck Logo" 
  className="h-50 w-auto max-w-[150px] object-contain"
/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setShowServicesDropdown(true)}
                onMouseLeave={() => link.hasDropdown && setShowServicesDropdown(false)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${
                    isActive(link.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-dark-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <FaChevronDown className="ml-1 text-xs" />
                  )}
                </Link>
                
                {link.hasDropdown && showServicesDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-dark-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="btn-primary text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-dark-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 animate-slide-up">
            <div className="section-container">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={toggleMenu}
                    className={`block py-3 text-base font-medium transition-colors ${
                      isActive(link.path)
                        ? 'text-primary-600'
                        : 'text-dark-600 hover:text-primary-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 space-y-2 mt-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={toggleMenu}
                          className="block py-2 text-sm text-dark-500 hover:text-primary-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block btn-primary text-center mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
