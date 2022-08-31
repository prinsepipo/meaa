import * as React from "react";

import PopupProvider from "../context/popup";

import Popup from "../components/popups/Popup";
import Header from "./Header";
import Footer from "./Footer";


const Default = (props) => {
  return (
    <PopupProvider>
      <div className="default">
        <Header />

        {props.children}

        <Footer />

        <Popup />
      </div>
    </PopupProvider>
  );
};


export default Default;
