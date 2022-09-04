import * as React from "react";

import PopupProvider from "../context/popup";

import Info from "../components/Info";
import Header from "./Header";
import Footer from "./Footer";
import Popup from "../components/popups/Popup";


const Default = (props) => {
  return (
    <PopupProvider>
      <div className="default">
        <Info />
        <Header />

        {props.children}

        <Footer />

        <Popup />
      </div>
    </PopupProvider>
  );
};


export default Default;
