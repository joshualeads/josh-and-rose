import Wedding from "./../images/tooplate/decorated-table-setting-wedding-celebration.jpg";
import Reception_Bangalore from "./../images/tooplate/front-view-wedding-couple.jpg";

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
              <h3 className="my-3">Wedding Ceremony</h3>

              <p className="mb-2">
                <i className="bi-geo-alt me-1"></i>
                5th Avenue at, Central Park S
              </p>

              <p>
                <i className="bi-clock me-1"></i>
                6:30 PM to 9:30 PM
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              <img src={Wedding} className="img-fluid" alt="" />
            </div>

            <div className="section-block">
              <h3 className="my-3 text-sm-center">Bangalore Reception</h3>

              <p className="mb-2 text-sm-center">
                <i className="bi-geo-alt me-1"></i>
                5th Avenue at, Central Park S
              </p>

              <p className="text-sm-center">
                <i className="bi-clock me-1"></i>
                5:00 PM
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              <img src={Wedding} className="img-fluid" alt="" />
            </div>

            <div className="section-block">
              <h3 className="my-3 text-sm-center">Chennai Reception</h3>

              <p className="mb-2">
                <i className="bi-geo-alt me-1 text-sm-center"></i>
                5th Avenue at, Central Park S
              </p>

              <p className="text-sm-center">
                <i className="bi-clock me-1"></i>
                5:00 PM
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column">
            <iframe
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8046.475092226252!2d-73.9752829999323!3d40.766655075110314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f07d5da561%3A0x61f6aa300ba8339d!2sThe%20Plaza!5e1!3m2!1sen!2ssg!4v1662129560604!5m2!1sen!2ssg"
              width="100%"
              height="310"
              allowFullScreen=""
              loading="lazy"
              title="location"
            ></iframe>

            <div className="section-block">
              <h3 className="my-3 text-sm-center">Location</h3>

              <p className="mb-2 text-sm-center">
                <i className="bi-geo-alt me-1"></i>
                5th Avenue at, Central Park S, New York, NY 10019, United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
