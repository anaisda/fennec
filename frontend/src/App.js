import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Industries from './pages/Industries';
import Training from './pages/Training';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';

// Admin
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

import './index.css';

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('fennec_cookie_consent');
    if (!cookieConsent) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set('fennec_cookie_consent', 'accepted', { expires: 365 });
    setShowCookieConsent(false);
  };

  return (
    <Router>
      <Helmet>
        <title>Fennec AI - Your Technical AI Partner for Digital Transformation</title>
        <meta name="description" content="Global AI services company helping businesses implement artificial intelligence solutions. Custom AI development, training programs, and digital transformation consulting." />
        <meta name="keywords" content="AI services, artificial intelligence, AI consulting, AI development, AI training, digital transformation, machine learning" />
      </Helmet>
      
      <div className="App min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />
        
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/training" element={<Training />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
          </Routes>
        </main>
        
        <Footer />
        
        {showCookieConsent && (
          <CookieConsent onAccept={handleAcceptCookies} />
        )}
      </div>
    </Router>
  );
}

export default App;
