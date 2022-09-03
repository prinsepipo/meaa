import * as React from "react";

import "./BlogView.scss";


const BlogView = (props) => {
  const blog = props.blog;

  return (
    <div className="blog-view">
      <img className="blog-image" src={blog.image} alt={blog.title + " image"} />
      <div className="wrapper">
        <h1 className="blog-title">{blog.title}</h1>
        <small className="blog-date">{blog.date}</small>
        <p className="blog-content">{blog.content}</p>
        <p className="blog-content">{blog.content}</p>
      </div>
    </div>
  );
}


export default BlogView;
