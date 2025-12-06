import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-12">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-display font-bold mb-2">Stay Updated</h3>
              <p className="text-primary-50">Get the latest AI insights and company news delivered to your inbox</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-dark-700 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button type="submit" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
          <Link to="/" className="flex h-20 w-48 items-center space-x-2 group">
          <img 
  src="/assets/images/white.svg" 
  alt="Anateck Logo" 
  className="h-50 w-auto max-w-[150px] object-contain"
/>
          </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your Technical AI Partner for Digital Transformation. We help businesses worldwide implement practical AI solutions that drive real results.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/anateck-dz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-primary-400 transition-colors">Industries</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-primary-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#development" className="text-gray-400 hover:text-primary-400 transition-colors">AI Development</Link></li>
              <li><Link to="/services#training" className="text-gray-400 hover:text-primary-400 transition-colors">AI Training</Link></li>
              <li><Link to="/services#consulting" className="text-gray-400 hover:text-primary-400 transition-colors">Consulting</Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-primary-400 transition-colors">Workshops</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <span>Pôle universitaire<br />Sidi Abdellah, Algiers, Algeria</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 flex-shrink-0" />
                <a href="mailto:contact.anateck@gmail.com" className="hover:text-primary-400 transition-colors">contact.anateck@gmail.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary-400 transition-colors">+213 783927766</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Anateck AI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-use" className="hover:text-primary-400 transition-colors">Terms of Use</Link>
              <Link to="/cookie-policy" className="hover:text-primary-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
