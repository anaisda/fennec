import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaUsers, FaCertificate, FaUniversity, FaLaptop } from 'react-icons/fa';

const Training = () => {
  const programs = [
    {
      icon: <FaUsers />,
      title: 'Corporate Training',
      description: 'Customized AI training programs for your entire team',
      features: ['On-site or Remote', 'Customized Content', '3-6 months duration', 'Team Certificates']
    },
    {
      icon: <FaCertificate />,
      title: 'Professional Certification',
      description: 'Industry-recognized AI certification programs',
      features: ['Self-paced Learning', 'Practical Projects', '6-12 months', 'Professional Certificate']
    },
    {
      icon: <FaUniversity />,
      title: 'University Partnerships',
      description: 'Academic programs and research collaboration',
      features: ['Curriculum Development', 'Guest Lectures', 'Research Projects', 'Student Internships']
    },
    {
      icon: <FaLaptop />,
      title: 'Workshops & Bootcamps',
      description: 'Intensive hands-on AI training sessions',
      features: ['1-5 days', 'Hands-on Projects', 'Small Groups', 'Completion Certificate']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Training & Education Programs | Anateck AI</title>
      </Helmet>

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">AI Training & Education</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Transform your team with comprehensive, hands-on AI training
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card hover:scale-105 transition-transform">
                <div className="text-4xl text-primary-600 mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-dark-800 mb-3">{program.title}</h3>
                <p className="text-dark-600 mb-4">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="text-dark-600 text-sm">• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary">Inquire About Training</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;
