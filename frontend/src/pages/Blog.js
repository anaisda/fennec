import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blog');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Insights & Resources | Anateck AI Blog</title>
      </Helmet>

      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">AI Insights & Resources</h1>
          <p className="text-xl text-primary-100">Expert perspectives on AI trends, best practices, and innovation</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="section-container">
          {loading ? (
            <div className="text-center"><div className="loader mx-auto"></div></div>
          ) : posts.length === 0 ? (
            <div className="text-center text-dark-600"><p>No blog posts available yet. Check back soon!</p></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="card hover:scale-105 transition-transform">
                  {post.image_url && <img src={post.image_url} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />}
                  <div className="text-sm text-primary-600 mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold text-dark-800 mb-3">{post.title}</h3>
                  <p className="text-dark-600 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-dark-500">By {post.author}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
