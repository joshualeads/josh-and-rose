import { useState } from "react";

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

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import for Nuptail theme usage
import "../../develop/src/styles/nuptail/superfish.css"; // For Mega Mega Menu Links
import "../../develop/src/styles/nuptail/styles.scss";

// Import for tooplate theme usage
import "./styles/tooplate/styles.scss";

function App() {
  const [toggle, toggleMenu] = useState(false);

  function triggerToggleMenu(event) {
    console.log(event);
    console.log("current toggle state ", toggle);
    window.scrollTo(0, 0);
    toggleMenu(!toggle);
  }

  return (
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
          </div>
        </div>
      </div>
      <ScrollTop />
    </>
  );
}

export default App;
