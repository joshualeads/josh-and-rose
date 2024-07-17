function OffCanvasMenu(props) {
  return (
    <>
      <nav id="offcanvas-menu" role="navigation">
        <div className="className" onClick={props.toggleMenu}>
          <i
            className="bi bi-x-lg"
            style={{ fontSize: "2rem", color: "white" }}
          ></i>
        </div>
        <ul className="" id="" style={{ touchAction: "pan-y" }}>
          <li className="active">
            <a href="#home" onClick={props.toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#story"
              onClick={props.toggleMenu}
              className="fh5co-sub-ddown sf-with-ul"
            >
              Groom &amp; Bride
            </a>
          </li>
          <li>
            <a href="#event" onClick={props.toggleMenu}>
              When &amp; Where
            </a>
          </li>
          <li>
            <a href="#family" onClick={props.toggleMenu}>
              Our Family
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={props.toggleMenu}>
              Our Gallery
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              Get in touch
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default OffCanvasMenu;
