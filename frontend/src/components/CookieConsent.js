import React from 'react';
import { Link } from 'react-router-dom';
import { FaCookie } from 'react-icons/fa';

const CookieConsent = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-2 border-primary-600 z-50 animate-slide-up">
      <div className="section-container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start md:items-center gap-4 flex-1">
            <FaCookie className="text-accent-500 text-3xl flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-dark-800 mb-1">We Value Your Privacy</h3>
              <p className="text-sm text-dark-600 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                By clicking "Accept All Cookies", you consent to our use of cookies.{' '}
                <Link to="/cookie-policy" className="text-primary-600 hover:text-primary-700 underline">
                  Learn more
                </Link>
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Link
              to="/cookie-policy"
              className="flex-1 md:flex-initial px-6 py-2 text-dark-600 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
            >
              Settings
            </Link>
            <button
              onClick={onAccept}
              className="flex-1 md:flex-initial btn-primary"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
