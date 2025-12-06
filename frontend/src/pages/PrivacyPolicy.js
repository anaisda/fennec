import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Anateck AI</title>
        <meta name="description" content="Anateck AI Privacy Policy - How we collect, use, and protect your personal information." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gray-50">
        <div className="section-container max-w-4xl">
          <h1 className="text-4xl font-display font-bold text-dark-800 mb-6">Privacy Policy</h1>
          <p className="text-dark-600 mb-8">Last Updated: November 10, 2025</p>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">1. Introduction</h2>
              <p className="text-dark-600 leading-relaxed">
                Anateck AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-dark-700 mb-3">Personal Information</h3>
              <p className="text-dark-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-dark-600 ml-4">
                <li>Fill out contact forms or request information</li>
                <li>Subscribe to our newsletter</li>
                <li>Register for training programs or workshops</li>
                <li>Engage with our services</li>
              </ul>
              <p className="text-dark-600 leading-relaxed mt-4">
                This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-dark-700 mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-dark-600 leading-relaxed">
                When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and browsing behavior through cookies and similar technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-dark-600 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-dark-600 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-dark-600 ml-4">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
                <li><strong>Business Partners:</strong> When necessary to provide requested services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-dark-600 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can control cookies through your browser settings. For more information, please see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">6. Data Security</h2>
              <p className="text-dark-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">7. Your Rights</h2>
              <p className="text-dark-600 leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 text-dark-600 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">8. International Data Transfers</h2>
              <p className="text-dark-600 leading-relaxed">
                Your information may be transferred to and maintained on servers located outside of your country. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">9. Children's Privacy</h2>
              <p className="text-dark-600 leading-relaxed">
                Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-dark-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark-800 mb-4">11. Contact Us</h2>
              <p className="text-dark-600 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-dark-700"><strong>Email:</strong> privacy@Anateck.ai</p>
                <p className="text-dark-700"><strong>Address:</strong> Anateck AI, Global Operations</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
