import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { FaUsers, FaEnvelope, FaBlog, FaSignOutAlt, FaChartBar } from 'react-icons/fa';

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getAuthHeader = () => {
    const token = localStorage.getItem('fennec_admin_token');
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, contactsRes, subscribersRes] = await Promise.all([
          axios.get('http://localhost:5000/api/admin/stats', getAuthHeader()),
          axios.get('http://localhost:5000/api/admin/contacts', getAuthHeader()),
          axios.get('http://localhost:5000/api/admin/newsletter', getAuthHeader())
        ]);
        setStats(statsRes.data);
        setContacts(contactsRes.data);
        setSubscribers(subscribersRes.data);
      } catch (error) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          navigate('/admin/login');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('fennec_admin_token');
    navigate('/admin/login');
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="loader"></div></div>;

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Fennec AI</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <nav className="bg-primary-900 text-white p-4">
          <div className="section-container flex justify-between items-center">
            <h1 className="text-xl font-bold">Fennec AI Admin</h1>
            <button onClick={handleLogout} className="flex items-center hover:text-primary-200">
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        </nav>

        <div className="section-container py-8">
          <Routes>
            <Route path="/" element={
              <div>
                <h2 className="text-3xl font-bold text-dark-800 mb-8">Dashboard Overview</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  <div className="card">
                    <FaUsers className="text-3xl text-primary-600 mb-2" />
                    <div className="text-3xl font-bold text-dark-800">{stats.totalContacts}</div>
                    <div className="text-dark-600">Total Contacts</div>
                  </div>
                  <div className="card">
                    <FaEnvelope className="text-3xl text-success-500 mb-2" />
                    <div className="text-3xl font-bold text-dark-800">{stats.newContacts}</div>
                    <div className="text-dark-600">New Messages</div>
                  </div>
                  <div className="card">
                    <FaChartBar className="text-3xl text-accent-500 mb-2" />
                    <div className="text-3xl font-bold text-dark-800">{stats.totalSubscribers}</div>
                    <div className="text-dark-600">Newsletter Subscribers</div>
                  </div>
                  <div className="card">
                    <FaBlog className="text-3xl text-primary-600 mb-2" />
                    <div className="text-3xl font-bold text-dark-800">{stats.publishedPosts}</div>
                    <div className="text-dark-600">Published Posts</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-xl font-bold mb-4">Recent Contacts</h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                      {contacts.slice(0, 10).map((contact) => (
                        <div key={contact.id} className="border-b pb-3">
                          <div className="font-semibold text-dark-800">{contact.name}</div>
                          <div className="text-sm text-dark-600">{contact.email}</div>
                          <div className="text-sm text-dark-500 mt-1">{contact.message.substring(0, 100)}...</div>
                          <div className="text-xs text-dark-400 mt-1">{new Date(contact.created_at).toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-xl font-bold mb-4">Recent Subscribers</h3>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {subscribers.slice(0, 15).map((sub) => (
                        <div key={sub.id} className="flex justify-between border-b pb-2">
                          <span className="text-dark-700">{sub.email}</span>
                          <span className="text-sm text-dark-500">{new Date(sub.subscribed_at).toLocaleDateString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
