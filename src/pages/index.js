import * as React from "react";

import PopupProvider from "../context/popup";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Popup from "../components/popups/Popup";
import Banner from "../components/Banner";
import Introduction from "../components/Introduction";
import Events from "../components/Events";


const IndexPage = () => {
  return (
    <PopupProvider>
      <div className="page-index">
        <Header />

        <main>
          <Banner />
          <Introduction />
          <Events />
        </main>

        <Footer />

        <Popup />
      </div>
    </PopupProvider>
  );
};

export default IndexPage;
