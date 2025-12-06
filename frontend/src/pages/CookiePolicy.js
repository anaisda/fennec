import React from 'react';
import { Helmet } from 'react-helmet';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Anateck AI</title>
      </Helmet>

      <section className="pt-32 pb-20 bg-gray-50">
        <div className="section-container max-w-4xl">
          <h1 className="text-4xl font-display font-bold text-dark-800 mb-6">Cookie Policy</h1>
          <p className="text-dark-600 mb-8">Last Updated: November 10, 2025</p>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">1. What Are Cookies</h2>
              <p className="text-dark-600 leading-relaxed">
                Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">2. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-dark-700 mb-2">Essential Cookies</h3>
                  <p className="text-dark-600">Required for the website to function properly. These cannot be disabled.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-dark-700 mb-2">Analytics Cookies</h3>
                  <p className="text-dark-600">Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-dark-700 mb-2">Marketing Cookies</h3>
                  <p className="text-dark-600">Used to track visitors across websites to display relevant advertisements.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-dark-700 mb-2">Preference Cookies</h3>
                  <p className="text-dark-600">Remember your preferences and settings for a personalized experience.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">3. Managing Cookies</h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-dark-600 ml-4">
                <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                <li>Cookie consent tool: Use our cookie banner to manage preferences</li>
                <li>Opt-out tools: Use industry opt-out tools for advertising cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">4. Third-Party Cookies</h2>
              <p className="text-dark-600 leading-relaxed">
                We may use third-party services that place cookies on your device. These third parties have their own privacy policies governing their use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">5. Contact Us</h2>
              <p className="text-dark-600 leading-relaxed">
                For questions about our use of cookies, contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-dark-700"><strong>Email:</strong> privacy@Anateck.ai</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
