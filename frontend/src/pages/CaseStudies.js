import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/case-studies');
        setCaseStudies(response.data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCaseStudies();
  }, []);

  return (
    <>
      <Helmet>
        <title>Success Stories & Case Studies | Anateck AI</title>
      </Helmet>

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-primary-100">Real results from AI implementations worldwide</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          {loading ? (
            <div className="text-center"><div className="loader mx-auto"></div></div>
          ) : caseStudies.length === 0 ? (
            <div className="text-center text-dark-600"><p>Case studies coming soon!</p></div>
          ) : (
            <div className="space-y-12">
              {caseStudies.map((study) => (
                <div key={study.id} className="card">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {study.image_url && (
                      <div className="lg:col-span-1">
                        <img src={study.image_url} alt={study.title} className="w-full h-full object-cover rounded-lg" />
                      </div>
                    )}
                    <div className={study.image_url ? 'lg:col-span-2' : 'lg:col-span-3'}>
                      <div className="text-sm text-primary-600 mb-2">{study.industry}</div>
                      <h3 className="text-2xl font-bold text-dark-800 mb-4">{study.title}</h3>
                      <div className="space-y-4">
                        <div><strong className="text-dark-800">Challenge:</strong> <p className="text-dark-600 mt-1">{study.challenge}</p></div>
                        <div><strong className="text-dark-800">Solution:</strong> <p className="text-dark-600 mt-1">{study.solution}</p></div>
                        <div><strong className="text-dark-800">Results:</strong> <p className="text-dark-600 mt-1">{study.results}</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
