import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/${slug}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return <div className="py-20 text-center"><div className="loader mx-auto"></div></div>;
  if (!post) return <div className="py-20 text-center"><p>Post not found</p></div>;

  return (
    <>
      <Helmet>
        <title>{post.title} | Anateck AI Blog</title>
      </Helmet>

      <article className="pt-32 pb-20">
        <div className="section-container max-w-4xl">
          <div className="text-sm text-primary-600 mb-4">{post.category}</div>
          <h1 className="text-4xl font-display font-bold text-dark-800 mb-6">{post.title}</h1>
          <div className="text-dark-500 mb-8">By {post.author} • {new Date(post.created_at).toLocaleDateString()}</div>
          {post.image_url && <img src={post.image_url} alt={post.title} className="w-full h-96 object-cover rounded-xl mb-8" />}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
