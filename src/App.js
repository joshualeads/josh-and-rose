import { useState, useEffect } from "react";

// Components
import Hero from "./components/Hero";
import Header from "./components/Header";
import OffCanvasMenu from "./components/OffCanvasMenu";
import Couple from "./components/Couple";
import Events from "./components/Events";
import Family from "./components/Family";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import AudioPlayer from "./components/AudioPlayer";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import for Nuptail theme usage
import "./styles/nuptail/superfish.css"; // For Mega Mega Menu Links
import "./styles/nuptail/styles.scss";

// Import for tooplate theme usage
import "./styles/tooplate/styles.scss";
import Loader from "./components/Loader";

function App() {
  const [toggle, toggleMenu] = useState(false);
  const [loaded, toggleLoadStatus] = useState(false);

  function triggerToggleMenu(event) {
    console.log(event);
    console.log("current toggle state ", toggle);
    toggleMenu(!toggle);
  }

  function changeLoadStatus() {
    setTimeout(() => {
      toggleLoadStatus(!loaded);
    }, 3500);
  }

  useEffect(() => {
    if (!loaded) {
      changeLoadStatus(loaded);
    }
  }, [loaded]);

  console.log(loaded);

  return loaded ? (
    <>
      <div className={`App ${toggle ? "fh5co-offcanvas" : ""}`}>
        <div id="fh5co-wrapper" data-bs-spy="scroll">
          <div id="fh5co-page">
            <Hero />
            <Header toggleMenu={triggerToggleMenu} toggleState={toggle} />
            <Couple />
            <Events />
            <Family />
            <Gallery />
            <ContactUs />
            <OffCanvasMenu
              toggleMenu={triggerToggleMenu}
              toggleState={toggle}
            />
            <Footer />
            <AudioPlayer />
          </div>
        </div>
      </div>
      <ScrollTop />
    </>
  ) : (
    <Loader />
  );
}

export default App;
