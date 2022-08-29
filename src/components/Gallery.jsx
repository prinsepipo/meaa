import * as React from "react";

import ContentHeader from "./common/ContentHeader";

import demo from "../images/demo.jpg"

import "./Gallery.scss";


const Gallery = () => {
  return (
    <section className="gallery content-section">
      <ContentHeader>Gallery</ContentHeader>
      <div className="gallery-body">
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map(i => {
            return (
              <img className="gallery-grid-item" src={demo} alt="gallery item" key={i} />
            );
          })}
        </div>
        <div className="gallery-navigator">
          <a href="/">View More</a>
        </div>
      </div>
    </section>
  );
};


export default Gallery;
