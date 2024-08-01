import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { Wrapper } from "@googlemaps/react-wrapper";

const YOUR_API_KEY = "AIzaSyChOepRDJyXnojR4IWv5ACiGMmKYOxbzXU";

const wedding_hall = {
  // 13.001586482774051, 77.62309425605906
  address:
    "2J2F+G79, High Street Cross Rd, Balaji Layout, Cooke Town, Bengaluru, Karnataka 560005",
  lat: 13.001586482774051, // default latitude
  lng: 77.62309425605906, // default longitude
};

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

function MyMarker() {
  return (
    // <Marker position={{ lat: 13.001586482774051, lng: 77.62309425605906 }} />
  );
}

function Locations() {
  return (
    <section
      className="the-wedding-section section-bg section-padding"
      id="section_3"
    >
      <div className="container" id="event">
        <div className="row">
          {/* Section Title */}
          <div className="col-lg-12 col-12">
            <div className="section-title-wrap mb-5">
              <h2 className="section-title">Locations</h2>

              <div className="section-title-bottom">
                <span className="section-title-line"></span>
                <i className="section-title-icon bi-heart-fill"></i>
                <span className="section-title-line"></span>
              </div>
            </div>
          </div>

          {/* Bangalore Wedding Location */}
          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              {/* Insert Wedding Location Map */}
              <div className="map">
                <div className="google-map">
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: YOUR_API_KEY }}
                    defaultCenter={wedding_hall}
                    defaultZoom={17}
                  >
                    <LocationPin
                      lat={wedding_hall.lat}
                      lng={wedding_hall.lng}
                      text={wedding_hall.address}
                    />
                  </GoogleMapReact>
                </div>
              </div>
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
              {/* Insert Reception Location Map */}
              {/* <Map
                apiKey={YOUR_API_KEY}
                defaultZoom={8}
                defaultCenter={{
                  lat: 13.001586482774051, // default latitude
                  lng: 77.62309425605906, // default longitude
                }}
              >
                <MyMarker />
              </Map> */}
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
                6:30 PM
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column mb-4 mb-lg-0 mb-md-0">
            <div className="image-hover-thumb">
              {/* Insert Chennai Reception Location Map */}
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
                6:30 PM
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

export default Locations;
