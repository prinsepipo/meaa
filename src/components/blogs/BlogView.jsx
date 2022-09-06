import * as React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./BlogView.scss";


const BlogView = (props) => {
  const blog = props.blog.node;

  return (
    <div className="blog-view">
      <GatsbyImage className="blog-image" image={getImage(blog.image.src)} alt={blog.title + " image"} />
      <div className="wrapper">
        <h1 className="blog-title">{blog.title}</h1>
        <small className="blog-date">{blog.date}</small>
        <p className="blog-content">{blog.content}</p>
        <p className="blog-content">{blog.content}</p>
      </div>
    </div>
  );
};


export default BlogView;
