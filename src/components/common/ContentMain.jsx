import * as React from "react";

import "./ContentMain.scss";


const ContentMain = (props) => {
  return (
    <main {...props} className={"content-main " + props.className}>
      {props.children}
    </main>
  );
};


export default ContentMain;
