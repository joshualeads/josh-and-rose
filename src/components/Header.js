function Header(props) {
  return (
    <>
      <nav className="navbar sticky-top fh5co-header-section-sticky-header">
        <header id="fh5co-header-section" className="sticky-banner">
          <div className="container">
            <div className="nav-header">
              <span
                className={`js-fh5co-nav-toggle fh5co-nav-toggle dark ${
                  props.toggleState ? "active" : ""
                }`}
                onClick={props.toggleMenu}
              >
                <i></i>
              </span>
              <h1 id="fh5co-logo">
                <a href="#home">Josh &amp; Rose</a>
              </h1>
              {/* START #fh5co-menu-wrap */}
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul className="sf-menu" id="fh5co-primary-menu">
                  <li className="active">
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#story" className="fh5co-sub-ddown">
                      Groom &amp; Bride
                    </a>
                  </li>
                  <li>
                    <a href="#event">When &amp; Where</a>
                  </li>
                  <li>
                    <a href="#family">Family</a>
                  </li>
                  <li>
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
}

export default Header;
