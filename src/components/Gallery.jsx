import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import Image1 from "./../images/tooplate/gallery/bearded-stylish-groom-suit-beautiful-blonde.jpg";
import Image2 from "./../images/tooplate/gallery/couple.jpg";
import Image3 from "./../images/tooplate/gallery/groom-with-bride-are-knocking-glasses-with-champagne.jpg";
import Image4 from "./../images/tooplate/gallery/bearded-stylish-groom-suit-beautiful-blonde.jpg";
import Image5 from "./../images/tooplate/gallery/bride-groom-having-their-wedding-with-guests-beach.jpg";
import Image6 from "./../images/tooplate/gallery/wedding-ceremony-place-nature-outside-summer.jpg";
import Image7 from "./../images/tooplate/gallery/elegant-young-woman-fashionable.jpg";
import Image8 from "./../images/tooplate/gallery/young-couple-broke-down-car-while-traveling.jpg";
import Image9 from "./../images/tooplate/gallery/young-couple-traveling-car-sunny-day.jpg";
import { auto } from "@popperjs/core";

function Gallery() {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + "section_5",
      children: "a",
      showHideAnimationType: "zoom",
      secondaryZoomLevel: "fill",
      maxZoomLevel: "2",

      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <>
      <section
        className="gallery-section section-bg section-padding"
        id="section_5"
      >
        <div className="container" id="gallery">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="section-title-wrap mb-5">
                <h2 className="section-title">Gallery</h2>

                <div className="section-title-bottom">
                  <span className="section-title-line"></span>
                  <i className="section-title-icon bi-heart-fill"></i>
                  <span className="section-title-line"></span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="gallery-thumb image-hover-thumb">
                <a
                  href={Image1}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"1000px"}
                  data-pswp-height={"1500px"}
                >
                  <img
                    src={Image1}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-12 d-flex flex-column">
              <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
                <a
                  href={Image2}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"1500px"}
                  data-pswp-height={"1000px"}
                >
                  <img
                    src={Image2}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>

              <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
                <a
                  href={Image3}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"1500px"}
                  data-pswp-height={"1000px"}
                >
                  <img
                    src={Image3}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="gallery-thumb image-hover-thumb">
                <a
                  href={Image4}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"1000"}
                  data-pswp-height={"1500"}
                >
                  <img
                    src={Image4}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-12 d-flex flex-column">
              <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
                <a
                  href={Image5}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"1500px"}
                  data-pswp-height={"1001px"}
                >
                  <img
                    src={Image5}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>

              <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
                <a
                  href={Image6}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"1500"}
                  data-pswp-height={"1000"}
                >
                  <img
                    src={Image6}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="gallery-thumb image-hover-thumb">
                <a
                  href={Image7}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"1000px"}
                  data-pswp-height={"1500px"}
                >
                  <img
                    src={Image7}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-12 d-flex flex-column">
              <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
                <a
                  href={Image8}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"1500px"}
                  data-pswp-height={"1000px"}
                >
                  <img
                    src={Image8}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>

              <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
                <a
                  href={Image9}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"1500"}
                  data-pswp-height={"1000"}
                >
                  <img
                    src={Image9}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
