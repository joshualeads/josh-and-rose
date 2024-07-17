import Groom from "./../images/tooplate/vertical-shot-young-handsome-guy-autumn-park.jpeg";
import Bride from "./../images/tooplate/vertical-shot-beautiful-smiling-girl.jpg";

function Couple() {
  return (
    <>
      <section className="about-section section-padding" id="section_2">
        <div className="container" id="story">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="section-title-wrap mb-5">
                <h2 className="section-title">Our Story</h2>

                <div className="section-title-bottom">
                  <span className="section-title-line"></span>
                  <i className="section-title-icon bi-heart-fill"></i>
                  <span className="section-title-line"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-12">
              <div className="image-hover-thumb">
                <img
                  src={Bride}
                  className="about-image img-fluid"
                  alt="Bride"
                />
              </div>
            </div>

            <div className="col-lg-3 col-12">
              <div className="about-info-wrap d-flex flex-column">
                <div className="about-info-title d-flex align-items-center my-3">
                  <h4>Roselin</h4>

                  <span className="about-tag ms-2">The Bride</span>
                </div>

                <p className="description">
                  Josh is amazing. When I first met him I knew he was amazing
                  and every passing day reminds me of just how amazing he is!
                </p>

                <div className="social-icon-wrap mt-auto">
                  <ul className="social-icon ms-auto">
                    <li className="social-icon-item">
                      <a
                        href="https://www.facebook.com/profile.php?id=100009528203152&mibextid=LQQJ4d"
                        target="_blank"
                        className="social-icon-link bi-facebook"
                      ></a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://mobile.x.com/roselin_159"
                        target="_blank"
                        className="social-icon-link bi-twitter"
                      ></a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://www.instagram.com/94.pink?igsh=aWFqNGMxZHE4ODR1&utm_source=qr"
                        target="_blank"
                        className="social-icon-link bi-instagram"
                      ></a>
                    </li>

                    {/* <li className="social-icon-item">
                      <a href="#" className="social-icon-link bi-whatsapp"></a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-12">
              <div className="image-hover-thumb">
                <img
                  src={Groom}
                  className="about-image img-fluid"
                  alt="Groom"
                />
              </div>
            </div>

            <div className="col-lg-3 col-12">
              <div className="about-info-wrap d-flex flex-column">
                <div className="about-info-title d-flex align-items-center my-3">
                  <h4>Joshua</h4>

                  <span className="about-tag ms-2">The Groom</span>
                </div>

                <p className="description">
                  I really love her incredibly unique blend of talents. Rose is
                  a talented person, always excited about genuinely loving
                  others
                </p>

                <div className="social-icon-wrap mt-auto">
                  <ul className="social-icon ms-auto">
                    <li className="social-icon-item">
                      <a
                        href="https://www.facebook.com/share/uvDAA45UTVdaEqd7/?mibextid=LQQJ4d"
                        target="_blank"
                        className="social-icon-link bi-facebook"
                      ></a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://mobile.x.com/JoshuaJabakumar"
                        target="_blank"
                        className="social-icon-link bi-twitter"
                      ></a>
                    </li>

                    <li className="social-icon-item">
                      <a
                        href="https://www.instagram.com/joshua_jabakumar?igsh=ODFzczNrNjB1M2R4&utm_source=qr"
                        target="_blank"
                        className="social-icon-link bi-instagram"
                      ></a>
                    </li>

                    {/* <li className="social-icon-item">
                      <a href="#" target="_blank" className="social-icon-link bi-whatsapp"></a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Couple;
