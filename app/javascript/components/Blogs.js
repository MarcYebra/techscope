// Blog.js

import React from 'react';

const Blog = () => {
  const blogs = [
    { id: 1, title: "Blog Post 1", content: "Content for blog post 1..." },
    { id: 2, title: "Blog Post 2", content: "Content for blog post 2..." },
    { id: 3, title: "Blog Post 3", content: "Content for blog post 3..." }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id} style={{ marginBottom: "10px" }}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
