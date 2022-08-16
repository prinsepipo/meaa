import * as React from "react";

import PopupProvider from "../context/popup";

import Header from "../layout/Header";
import Popup from "../components/popups/Popup";


const IndexPage = () => {
  return (
    <PopupProvider>
      <div className="page-index">
        <Header />

        <Popup />
      </div>
    </PopupProvider>
  );
};

export default IndexPage;
