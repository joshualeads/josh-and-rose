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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#story" className="fh5co-sub-ddown sf-with-ul">
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
            <a href="#contact">;Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default OffCanvasMenu;
