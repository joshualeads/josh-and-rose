import RoseParents from "./../images/tooplate/people/ArulSelvan_DevaKumari.jpeg";
import Merlin from "./../images/tooplate/people/Merlin.jpeg";

import JoshParents from "./../images/tooplate/people/DevaDoss_Pushpa.jpeg";
import Daniel from "./../images/tooplate/people/Daniel.jpeg";
import Aishu from "./../images/tooplate/people/Aishu.jpeg";
import Chotu from "./../images/tooplate/people/Chotu.jpeg";
import Raichel from "./../images/tooplate/people/Raichel.jpeg";

function Family() {
  return (
    <>
      <section className="people-section section-padding" id="section_4">
        <div className="container" id="family">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="section-title-wrap mb-5">
                <h2 className="section-title">Our Family</h2>

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
                    <h3>Bride Side</h3>
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
                    <h3>Groom Side</h3>
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
                          src={RoseParents}
                          className="people-image img-fluid"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="align-items-center my-3 member-name">
                          <p className="mb-0 text-lg-left text-md-left text-sm-center">
                            Rev. G.Arul Selvan and T. Devakumari
                          </p>

                          {/* <div className="about-tag ms-2">
                            <p className="text-lg-left text-md-left text-sm-center"></p>
                          </div> */}
                        </div>

                        <p className="text-lg-left text-md-left text-sm-center">
                          Dad and Mom
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="people-thumb image-hover-thumb">
                        <img
                          src={Merlin}
                          className="people-image img-fluid"
                          alt="Merlin"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="d-flex align-items-center my-3 member-name">
                          <p className="mb-0">Merlin</p>
                          <span className="about-tag ms-2"></span>
                        </div>

                        <p>Sister</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Groom Side Contents */}
                <div
                  className="tab-pane fade show"
                  id="nav-bridesmaid"
                  role="tabpanel"
                  aria-labelledby="nav-bridesmaid-tab"
                >
                  <div className="row">
                    {/* Parents */}
                    <div className="col-lg-6 col-12">
                      <div className="people-thumb image-hover-thumb">
                        <img
                          src={JoshParents}
                          className="people-image img-fluid"
                          alt="Josh Parents"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="d-flex align-items-center my-3 member-name">
                          <p className="mb-0">Rev. L. Devadoss and P. Pushpa</p>

                          <span className="about-tag ms-2"></span>
                        </div>

                        <p>Dad and Mom</p>
                      </div>
                    </div>

                    {/* Elder Brother */}
                    <div className="col-lg-6 col-12">
                      <div className="people-thumb image-hover-thumb">
                        <img
                          src={Daniel}
                          className="people-image img-fluid"
                          alt="Daniel"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="d-flex align-items-center my-3 member-name">
                          <p className="mb-0">Daniel Sukumar</p>

                          {/* <span className="about-tag ms-2">Elder Brother</span> */}
                        </div>

                        <p>Elder Brother</p>
                      </div>
                    </div>

                    {/* Sister Inlaw */}
                    <div className="col-lg-6 col-12">
                      <div className="people-thumb image-hover-thumb">
                        <img
                          src={Aishu}
                          className="people-image img-fluid"
                          alt="Aishwarya Rao"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="d-flex align-items-center my-3 member-name">
                          <p className="mb-0">Aishwarya Rao</p>

                          {/* <span className="about-tag ms-2">Elder Brother</span> */}
                        </div>

                        <p>Sister-in-law</p>
                      </div>
                    </div>

                    {/* Nephew */}
                    <div className="col-lg-6 col-12">
                      <div className="people-thumb image-hover-thumb">
                        <img
                          src={Chotu}
                          className="people-image img-fluid"
                          alt="Aishwarya Rao"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="d-flex align-items-center my-3 member-name">
                          <p className="mb-0">Ezra (Chotu)</p>

                          {/* <span className="about-tag ms-2">Elder Brother</span> */}
                        </div>

                        <p>Nephew</p>
                      </div>
                    </div>

                    {/* Sister */}
                    <div className="col-lg-6 col-12">
                      <div className="people-thumb image-hover-thumb">
                        <img
                          src={Raichel}
                          className="people-image img-fluid"
                          alt="Aishwarya Rao"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-12">
                      <div className="section-block">
                        <div className="d-flex align-items-center my-3 member-name">
                          <p className="mb-0">Raichel Priyadharshini</p>

                          {/* <span className="about-tag ms-2">Elder Brother</span> */}
                        </div>

                        <p>Sister</p>
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
