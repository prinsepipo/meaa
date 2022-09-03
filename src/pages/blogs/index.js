import * as React from "react";

import Default from "../../layout/Default";
import ContentMain from "../../components/common/ContentMain";
import ContentHeader from "../../components/common/ContentHeader";
import BlogList from "../../components/blogs/BlogList";


const Blogs = () => {
  return (
    <Default>
      <ContentMain className="wrapper">
        <ContentHeader>Blogs and News</ContentHeader>
        <BlogList />
      </ContentMain>
    </Default>
  );
};


export default Blogs;
