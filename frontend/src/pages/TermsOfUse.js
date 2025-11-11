import React from 'react';
import { Helmet } from 'react-helmet';

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Fennec AI</title>
        <meta name="description" content="Fennec AI Terms of Use - Terms and conditions for using our website and services." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gray-50">
        <div className="section-container max-w-4xl">
          <h1 className="text-4xl font-display font-bold text-dark-800 mb-6">Terms of Use</h1>
          <p className="text-dark-600 mb-8">Last Updated: November 10, 2025</p>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-dark-600 leading-relaxed">
                By accessing and using the Fennec AI website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">2. Use of Services</h2>
              <p className="text-dark-600 leading-relaxed mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-dark-600 ml-4">
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use automated systems to access our services without permission</li>
                <li>Impersonate others or provide false information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">3. Intellectual Property</h2>
              <p className="text-dark-600 leading-relaxed">
                All content, features, and functionality on our website are owned by Fennec AI and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">4. Services and Deliverables</h2>
              <p className="text-dark-600 leading-relaxed">
                Our services are provided "as is" without warranties of any kind. We strive to deliver high-quality AI solutions but cannot guarantee specific outcomes. Detailed terms for specific services will be outlined in separate service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">5. Limitation of Liability</h2>
              <p className="text-dark-600 leading-relaxed">
                To the fullest extent permitted by law, Fennec AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">6. Indemnification</h2>
              <p className="text-dark-600 leading-relaxed">
                You agree to indemnify and hold harmless Fennec AI from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">7. Modifications to Terms</h2>
              <p className="text-dark-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of material changes. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">8. Governing Law</h2>
              <p className="text-dark-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable international laws, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">9. Contact Information</h2>
              <p className="text-dark-600 leading-relaxed">
                For questions about these Terms of Use, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-dark-700"><strong>Email:</strong> legal@fennec.ai</p>
                <p className="text-dark-700"><strong>Website:</strong> www.fennec.ai</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;
