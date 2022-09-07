import * as React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Default from "../../layout/Default";

import "./BlogView.scss";


const BlogView = (props) => {
  const blog = props.pageContext.blog;

  return (
    <Default>
      <main>
        <div className="blog-view">
          <GatsbyImage className="blog-image" image={getImage(blog.image.src)} alt={blog.title + " image"} />
          <div className="wrapper">
            <h1 className="blog-title">{blog.title}</h1>
            <small className="blog-date">{blog.date}</small>
            <p className="blog-content">{blog.content}</p>
            <p className="blog-content">{blog.content}</p>
          </div>
        </div>
      </main>
    </Default>
  );
};


export default BlogView;
