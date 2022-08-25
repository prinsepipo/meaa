import * as React from "react";

import "./ContentHeader.scss";


const ContentHeader = (props) => {
  return (
    <h2 className="content-header">
      { props.children }
    </h2>
  );
};


export default ContentHeader;
