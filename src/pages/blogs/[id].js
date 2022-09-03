import * as React from "react";

import Default from "../../layout/Default";
import BlogView from "../../components/blogs/BlogView";

import { blogs } from "../../data";


const BlogPage = (props) => {
  const blog = blogs.filter(b => b.id === parseInt(props.params.id))[0];

  return (
    <Default>
      <main>
        <BlogView blog={blog} />
      </main>
    </Default>
  );
};


export default BlogPage;
