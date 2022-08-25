import * as React from "react";

import ContentHeader from "./common/ContentHeader";

import demo from "../images/demo.jpg";

import "./Blogs.scss";


const Blogs = () => {
  return (
    <section className="blogs">
      <div className="wrapper">
        <ContentHeader>Blogs &amp; News</ContentHeader>
        {[1,2,3].map(i => {
          return (
            <div className="blog" key={i}>
              <a href="/">
                <img className="blog-image" src={demo} alt="demo" />
                <h3 className="blog-title">Lorem ipsum dolor sit amet</h3>
                <small className="blog-date">08/25/2022</small>
              </a>
            </div>
          );
        })}
        <a className="blogs-navigator" href="/">See More</a>
      </div>
    </section>
  );
};


export default Blogs;
