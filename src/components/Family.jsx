import Person1 from "./../images/tooplate/people/attractive-laughing-guy-having-fun-smiling-happy.jpg";
import Person2 from "./../images/tooplate/people/portrait-handsome-attractive-young-man-posing.jpg";
import Person3 from "./../images/tooplate/people/lifestyle-people-emotions-casual-concept.jpg";
import Person4 from "./../images/tooplate/people/portrait-beautiful-young-woman-standing-grey-wall.jpg";

function Family() {
  return (
    <>
      <section className="people-section section-padding" id="section_4">
        <div className="container" id="family">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="section-title-wrap mb-5">
                <h2 className="section-title">Family</h2>

                <div className="section-title-bottom">
                  <span className="section-title-line"></span>
                  <i className="section-title-icon bi-heart-fill"></i>
                  <span className="section-title-line"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-5 col-12 me-auto">
              <nav>
                <div
                  className="nav nav-tabs flex-lg-column align-items-baseline"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-groomsmen-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-groomsmen"
                    type="button"
                    role="tab"
                    aria-controls="nav-groomsmen"
                    aria-selected="true"
                  >
                    <h3>Groom Side</h3>
                  </button>

                  <button
                    className="nav-link"
                    id="nav-bridesmaid-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-bridesmaid"
                    type="button"
                    role="tab"
                    aria-controls="nav-bridesmaid"
                    aria-selected="false"
                  >
                    <h3>Bride Side</h3>
                  </button>
                </div>
              </nav>
            </div>

            <div className="col-lg-8 col-md-6 col-12">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-groomsmen"
                  role="tabpanel"
                  aria-labelledby="nav-groomsmen-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="people-thumb image-hover-thumb">
                        <img
                          src={Person1}
                          className="people-image img-fluid"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="d-flex align-items-center my-3">
                          <h4 className="mb-0">Kevin</h4>

                          <span className="about-tag ms-2">Cousin</span>
                        </div>

                        <p>Thank You!</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="people-thumb image-hover-thumb">
                        <img
                          src={Person2}
                          className="people-image img-fluid"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="d-flex align-items-center my-3">
                          <h4 className="mb-0">Wilson</h4>

                          <span className="about-tag ms-2">Best friend</span>
                        </div>

                        <p>Thank you!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade show"
                  id="nav-bridesmaid"
                  role="tabpanel"
                  aria-labelledby="nav-bridesmaid-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="people-thumb image-hover-thumb">
                        <img
                          src={Person3}
                          className="people-image img-fluid"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="d-flex align-items-center my-3">
                          <h4 className="mb-0">Jennie</h4>

                          <span className="about-tag ms-2">Sister</span>
                        </div>

                        <p>Thank You!</p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="people-thumb image-hover-thumb">
                        <img
                          src={Person4}
                          className="people-image img-fluid"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="d-flex align-items-center my-3">
                          <h4 className="mb-0">Madam</h4>

                          <span className="about-tag ms-2">Friend</span>
                        </div>

                        <p>Thank You!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Family;
