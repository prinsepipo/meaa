import * as React from "react";

import { Link } from "gatsby";

import { blogs } from "../../data";

import "./BlogList.scss";


const BlogList = () => {
  return (
    <div className="blog-list">
      {blogs.map((blog, i) => {
        return (
          <div className="blog-item" key={i}>
            <Link to={"/blogs/" + blog.id}>
              <img className="blog-image" src={blog.image} alt={blog.title + " image"} />
              <h3 className="blog-title">{blog.title}</h3>
              <small className="blog-date">{blog.date}</small>
            </Link>
          </div>
        );
      })}
    </div>
  );
};


export default BlogList;
