import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaCog, FaGraduationCap, FaChartLine, FaRobot, FaDatabase, FaCode, FaChalkboardTeacher, FaCertificate, FaHandshake, FaLightbulb, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  const mainServices = [
    {
      id: 'development',
      icon: <FaCog />,
      title: 'AI Development & Integration',
      tagline: 'Building Production-Ready AI Systems',
      description: 'We don\'t just consult—we build, deploy, and maintain real AI systems that solve your business challenges.',
      features: [
        {
          icon: <FaRobot />,
          title: 'Custom AI Development',
          description: 'Intelligent chatbots, recommendation engines, predictive analytics, and more'
        },
        {
          icon: <FaDatabase />,
          title: 'Data Preparation',
          description: 'Data collection, cleaning, organization, and pipeline creation'
        },
        {
          icon: <FaCode />,
          title: 'System Integration',
          description: 'Seamless integration into your existing business workflows'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Technical Support',
          description: 'Ongoing maintenance, monitoring, and optimization'
        }
      ],
      benefits: [
        'Production-ready solutions',
        'Scalable architecture',
        'Full documentation',
        'Ongoing support included'
      ]
    },
    {
      id: 'training',
      icon: <FaGraduationCap />,
      title: 'AI Training & Education',
      tagline: 'Empowering Your Team with AI Skills',
      description: 'Transform your workforce with comprehensive, hands-on AI training programs tailored to your industry and skill level.',
      features: [
        {
          icon: <FaChalkboardTeacher />,
          title: 'Corporate Training',
          description: 'Customized programs for teams at all levels'
        },
        {
          icon: <FaCertificate />,
          title: 'Certification Programs',
          description: 'Industry-recognized AI certifications'
        },
        {
          icon: <FaHandshake />,
          title: 'University Partnerships',
          description: 'Academic programs and research collaboration'
        },
        {
          icon: <FaLightbulb />,
          title: 'Hands-on Workshops',
          description: 'Practical, project-based learning experiences'
        }
      ],
      benefits: [
        'Flexible delivery (online/in-person)',
        'Customized content',
        'Real-world projects',
        'Certification included'
      ]
    },
    {
      id: 'consulting',
      icon: <FaChartLine />,
      title: 'Digital Transformation Consulting',
      tagline: 'Strategic Guidance for Your AI Journey',
      description: 'Navigate the complexities of AI adoption with expert guidance from strategy to implementation.',
      features: [
        {
          icon: <FaChartLine />,
          title: 'AI Readiness Assessment',
          description: 'Evaluate your organization\'s AI maturity and opportunities'
        },
        {
          icon: <FaLightbulb />,
          title: 'Strategy Development',
          description: 'Custom roadmaps aligned with business objectives'
        },
        {
          icon: <FaHandshake />,
          title: 'Implementation Support',
          description: 'End-to-end guidance through deployment'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Change Management',
          description: 'Smooth organizational transition and adoption'
        }
      ],
      benefits: [
        'Data-driven insights',
        'Practical roadmaps',
        'Risk mitigation',
        'Measurable outcomes'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Custom Development, Training & Consulting | Anateck AI</title>
        <meta name="description" content="Comprehensive AI services including custom development, corporate training, and digital transformation consulting. End-to-end solutions for businesses worldwide." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Comprehensive AI Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              From development to deployment, we provide end-to-end AI solutions that transform businesses worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {mainServices.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full text-3xl mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-800 mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-primary-600 font-semibold mb-4">
                  {service.tagline}
                </p>
                <p className="text-lg text-dark-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-dark-700">
                      <FaCheckCircle className="text-success-500 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="card">
                    <div className="text-3xl text-primary-600 mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-dark-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-dark-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/contact" className="btn-primary">
                Get Started with {service.title}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your challenges and opportunities' },
              { step: '02', title: 'Strategy', description: 'Design custom AI solutions and roadmap' },
              { step: '03', title: 'Development', description: 'Build and test production-ready systems' },
              { step: '04', title: 'Deployment', description: 'Launch with ongoing support and optimization' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-display font-bold text-primary-300 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-primary-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-800 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-dark-600 mb-8">
              Schedule a free consultation to discuss your AI needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us Today
              </Link>
              <Link to="/case-studies" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
