import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({
        type: 'success',
        message: response.data.message
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_interest: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.error || 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Fennec AI</title>
        <meta name="description" content="Contact Fennec AI for AI services, training, and consulting. Schedule a free consultation to discuss your AI needs." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Transform Your Business Together
            </h1>
            <p className="text-xl text-primary-100">
              Get in touch with our team to discuss how AI can solve your specific challenges
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-display font-bold text-dark-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-dark-600 mb-8">
                Ready to start your AI journey? Reach out to us and we'll respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark-800 mb-1">Email</h3>
                    <a href="mailto:contact@fennec.ai" className="text-primary-600 hover:text-primary-700">
                      contact@fennec.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <FaPhone className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark-800 mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark-800 mb-1">Global Operations</h3>
                    <p className="text-dark-600">Serving Clients Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-dark-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-display font-bold text-dark-800 mb-6">
                  Send Us a Message
                </h2>

                {status.message && (
                  <div className={`mb-6 p-4 rounded-lg flex items-center ${
                    status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                    {status.type === 'success' ? (
                      <FaCheckCircle className="mr-3 flex-shrink-0" />
                    ) : (
                      <FaExclamationCircle className="mr-3 flex-shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service_interest"
                      value={formData.service_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="AI Development">AI Development & Integration</option>
                      <option value="AI Training">AI Training & Education</option>
                      <option value="Consulting">Digital Transformation Consulting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or questions..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-dark-800 mb-6">
              Schedule a Free Consultation
            </h2>
            <p className="text-xl text-dark-600 mb-8">
              Not sure where to start? Book a free 30-minute consultation with our AI experts to discuss your needs.
            </p>
            <button className="btn-primary">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
