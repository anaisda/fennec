import React from 'react';
import { Helmet } from 'react-helmet';
import { FaRocket, FaUsers, FaGlobeAmericas, FaLightbulb, FaHeart, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const values = [
    { icon: <FaLightbulb />, title: 'Innovation', description: 'Pushing boundaries with cutting-edge AI solutions' },
    { icon: <FaUsers />, title: 'Accessibility', description: 'Making AI accessible to businesses of all sizes' },
    { icon: <FaHeart />, title: 'Social Impact', description: 'Using technology for positive change' },
    { icon: <FaShieldAlt />, title: 'Excellence', description: 'Delivering world-class technical solutions' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Leading AI Services Company | Fennec AI</title>
      </Helmet>

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Fennec AI</h1>
            <p className="text-xl text-primary-100">Your Technical AI Partner for Digital Transformation</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-dark-800 mb-6">Our Mission</h2>
              <p className="text-lg text-dark-600 leading-relaxed mb-6">
                At Fennec AI, we bridge the gap between AI awareness and practical implementation. We don't just advise—we build, deploy, and maintain actual AI systems that drive real business results.
              </p>
              <p className="text-lg text-dark-600 leading-relaxed">
                With a foundation in academic research and years of hands-on experience, we bring technical excellence and business acumen to every project. Our mission is to make AI accessible to organizations worldwide, regardless of size or industry.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
                  <div className="text-dark-600">Clients Served</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-dark-600">Projects</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-dark-600">Industries</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">Global</div>
                  <div className="text-dark-600">Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-dark-800 mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-3xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-2">{value.title}</h3>
                <p className="text-dark-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
