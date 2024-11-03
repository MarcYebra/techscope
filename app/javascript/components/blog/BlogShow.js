import React from 'react';

const BlogShow = ({ id, title, subhead, body, author }) => {
  return (
    <div key={id}>
      <h2>{title}</h2>
      <h4>{subhead}</h4>
      <p>{body}</p>
      <p><strong>Author:</strong> {author}</p>
      <hr />
    </div>
  );
};

export default BlogShow;
