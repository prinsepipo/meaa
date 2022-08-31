import * as React from "react";

import Default from "../layout/Default";
import Banner from "../components/Banner";
import Introduction from "../components/Introduction";
import Levels from "../components/Levels";
import Blogs from "../components/Blogs";
import Gallery from "../components/Gallery";


const IndexPage = () => {
  return (
    <Default>
      <main>
        <Banner />
        <Introduction />
        <Levels />
        <Blogs />
        <Gallery />
      </main>
    </Default>
  );
};

export default IndexPage;
