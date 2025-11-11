import React from 'react';
import { Helmet } from 'react-helmet';
import { FaHospital, FaShoppingCart, FaIndustry, FaGraduationCap, FaLandmark } from 'react-icons/fa';

const Industries = () => {
  const industries = [
    {
      icon: <FaHospital />,
      title: 'Healthcare',
      description: 'AI-powered diagnostics, patient management, and medical imaging solutions',
      useCases: ['Medical Image Analysis', 'Patient Risk Prediction', 'Drug Discovery', 'Hospital Management']
    },
    {
      icon: <FaShoppingCart />,
      title: 'Retail & E-commerce',
      description: 'Personalized recommendations, inventory optimization, and customer insights',
      useCases: ['Recommendation Systems', 'Demand Forecasting', 'Chatbots', 'Fraud Detection']
    },
    {
      icon: <FaIndustry />,
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and process optimization',
      useCases: ['Predictive Maintenance', 'Quality Inspection', 'Supply Chain', 'Production Planning']
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      description: 'Personalized learning, student performance analytics, and administrative automation',
      useCases: ['Adaptive Learning', 'Student Analytics', 'Content Generation', 'Automation']
    },
    {
      icon: <FaLandmark />,
      title: 'Government & Public Sector',
      description: 'Citizen services, policy analysis, and operational efficiency',
      useCases: ['Public Services', 'Resource Allocation', 'Policy Analysis', 'Smart Cities']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve | Fennec AI</title>
      </Helmet>

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Delivering AI solutions across diverse sectors worldwide
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-3xl mb-6">
                    {industry.icon}
                  </div>
                  <h2 className="text-3xl font-display font-bold text-dark-800 mb-4">{industry.title}</h2>
                  <p className="text-lg text-dark-600 leading-relaxed mb-6">{industry.description}</p>
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold text-dark-800 mb-4">Use Cases</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.useCases.map((useCase, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg text-sm text-dark-700">{useCase}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
