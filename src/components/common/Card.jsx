import * as React from "react";

import "./Card.scss";;


const Card = (props) => {
  return (
    <div {...props} className={"card " + props.className}>{props.children}</div>
  );
};


export default Card;
