import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaRocket, FaGraduationCap, FaChartLine, FaCheckCircle, FaArrowRight, FaBrain, FaCog, FaUsers } from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      icon: <FaCog className="text-4xl" />,
      title: 'AI Development & Integration',
      description: 'Custom AI systems built to solve your specific business challenges. From chatbots to predictive analytics, we develop and deploy production-ready solutions.',
      features: ['Custom AI Development', 'System Integration', 'Ongoing Support'],
      link: '/services#development'
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: 'AI Training & Education',
      description: 'Comprehensive training programs that transform your team into AI-ready professionals. Hands-on workshops and certification programs tailored to your needs.',
      features: ['Corporate Training', 'Certification Programs', 'Hands-on Workshops'],
      link: '/services#training'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance for your AI journey. We assess readiness, develop roadmaps, and support implementation from concept to deployment.',
      features: ['AI Strategy', 'Implementation Support', 'Change Management'],
      link: '/services#consulting'
    }
  ];

  const stats = [
    { number: '30+', label: 'Clients Served' },
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Industries' },
    { number: 'Global', label: 'Reach' }
  ];

  const whyChooseUs = [
    {
      icon: <FaBrain />,
      title: 'Research-Backed Solutions',
      description: 'Our team brings academic rigor and cutting-edge research to every project.'
    },
    {
      icon: <FaRocket />,
      title: 'End-to-End Implementation',
      description: "We don't just advise—we build, deploy, and maintain your AI systems."
    },
    {
      icon: <FaUsers />,
      title: 'Global Expertise, Local Understanding',
      description: 'International delivery capabilities with deep market knowledge.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fennec AI - Your Technical AI Partner for Digital Transformation</title>
        <meta name="description" content="Leading AI services company helping businesses implement artificial intelligence solutions worldwide. Custom development, training, and consulting." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-primary-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold">Global AI Solutions Provider</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Your Technical AI Partner for{' '}
                <span className="text-accent-400">Digital Transformation</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                We bridge the gap between AI awareness and implementation. From development to deployment, we build practical AI solutions that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-accent inline-flex items-center justify-center">
                  Get Started Today
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link to="/services" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center">
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="relative animate-float hidden lg:block">
              <div className="relative w-full h-96 bg-gradient-to-br from-primary-500/30 to-primary-700/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-transparent rounded-2xl"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center">
                      <FaBrain className="text-6xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">AI-Powered</h3>
                    <p className="text-primary-100">Innovation at Scale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-800 mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI solutions that transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300">
                <div className="text-primary-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-dark-600">
                      <FaCheckCircle className="text-success-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="text-primary-600 font-semibold inline-flex items-center hover:text-primary-700 transition-colors"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-800 mb-4">
              Why Choose Fennec?
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver AI solutions that work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Schedule a free consultation to discuss how AI can solve your specific challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent">
                Get Free Consultation
              </Link>
              <Link to="/case-studies" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
