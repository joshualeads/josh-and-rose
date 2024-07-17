function ContactUs() {
  return (
    <>
      <section
        className="contact-section section-bg section-padding"
        id="section_7"
      >
        <div className="container" id="contact">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="section-title-wrap mb-5">
                <h2 className="section-title">Get in touch</h2>

                <div className="section-title-bottom">
                  <span className="section-title-line"></span>
                  <i className="section-title-icon bi-heart-fill"></i>
                  <span className="section-title-line"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <p className="mb-4 font-weight-bold">Visit Us</p>

              <p>
                {" "}
                SIMS Residency, Byrathi Layout
                <br /> Bangalore, KA 560077, India
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-12 my-4 my-lg-0 my-md-0">
              <p className="mb-4 font-weight-bold">Contact Information</p>

              <p className="mb-2">
                <a href="mailto:joshandrose.life@gmail.com">
                  joshandrose.life@gmail.com
                </a>
              </p>

              <p>
                <a href="tel: +91-7022523272">+91-7022523272</a>
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              {/* <h4 className="mb-4">Socials</h4>

              <ul className="social-icon">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-twitter"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-whatsapp"></a>
                </li>

                <li className="social-icon-item">
                  <a
                    href="#"
                    target="_blank"
                    className="social-icon-link bi-facebook"
                  ></a>
                </li>
              </ul> */}

              {/* <p className="copyright-text mt-3 mb-0">
                Copyright © 2036 Wedding Lite Co., Ltd.
                <br /> Design:{" "}
                <a href="#" target="_parent">
                  Tooplate
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
