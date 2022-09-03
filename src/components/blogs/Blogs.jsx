import * as React from "react";

import { Link } from "gatsby";

import ContentHeader from "../common/ContentHeader";
import BlogList from "./BlogList";

import "./Blogs.scss";


const Blogs = () => {
  return (
    <section className="blogs content-section">
      <div className="wrapper">
        <ContentHeader>Blogs &amp; News</ContentHeader>

        <BlogList />

        <Link className="blogs-navigator" to="/blogs">See More</Link>
      </div>
    </section>
  );
};


export default Blogs;
