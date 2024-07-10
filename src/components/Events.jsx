import Wedding from "./../images/tooplate/decorated-table-setting-wedding-celebration.jpg";
import Reception_Bangalore from "./../images/tooplate/front-view-wedding-couple.jpg";
import Chennai_Event from "../images/tooplate/chennai_event.jpeg";

function Events() {
  return (
    <section
      className="the-wedding-section section-bg section-padding"
      id="section_3"
    >
      <div className="container" id="event">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h2 className="section-title">The Wedding</h2>

              <div className="section-title-bottom">
                <span className="section-title-line"></span>
                <i className="section-title-icon bi-heart-fill"></i>
                <span className="section-title-line"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              <img
                src={Reception_Bangalore}
                className="img-fluid"
                alt="Bangalore Reception"
              />
            </div>

            <div className="section-block">
              <h3 className="my-3 text-sm-center event-name">
                Wedding Ceremony
              </h3>

              <p className="mb-2 address text-sm-center">
                <i className="bi-geo-alt me-1"></i>
                Emmanuel Church, Cooke Town
              </p>

              <p className="text-sm-center time">
                <i className="bi-clock me-1"></i>
                10:30 AM to 11:30 AM
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              <img src={Wedding} className="img-fluid" alt="" />
            </div>

            <div className="section-block">
              <h3 className="my-3 text-sm-center event-name">
                Bangalore Reception
              </h3>

              <p className="mb-2 text-sm-center address">
                <i className="bi-geo-alt me-1"></i>
                CMA Grand Convention & Wedding Hall
              </p>

              <p className="text-sm-center time">
                <i className="bi-clock me-1"></i>
                6:00 PM
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              <img src={Chennai_Event} className="img-fluid" alt="" />
            </div>

            <div className="section-block">
              <h3 className="my-3 text-sm-center event-name">
                Chennai Reception
              </h3>

              <p className="mb-2 text-sm-center address">
                <i className="bi-geo-alt me-1 text-sm-center"></i>
                Anand Farms, Ayappakkam
              </p>

              <p className="text-sm-center time">
                <i className="bi-clock me-1"></i>
                5:00 PM
              </p>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6 col-12 d-flex flex-column">
            <iframe
              className="google-map"
              src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyAYacQQrgjdOvCrv6DRyTyauENzNf4DCyk&q=Emmanuel+Church+Cooke+Town,Bengaluru+India"
              width="100%"
              height="310"
              allowFullScreen=""
              loading="lazy"
              title="location"
            ></iframe>

            <div className="section-block">
              <h3 className="my-3 text-sm-center event-name">Location</h3>

              <p className="mb-2 text-sm-center address">
                <i className="bi-geo-alt me-1"></i>
                5th Avenue at, Central Park S, New York, NY 10019, United States
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Events;
