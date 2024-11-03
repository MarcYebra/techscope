import React from 'react';

const BlogTile = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>{props.subhead}</h4>
      <p>{props.body}</p>
      <p><strong>Author:</strong> {props.author}</p>
      <hr />
    </div>
  );
};

export default BlogTile;
