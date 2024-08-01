import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import Image1 from "./../images/tooplate/gallery/Image1.jpeg";
import Image2 from "./../images/tooplate/gallery/Image2.jpeg";
import Image3 from "./../images/tooplate/gallery/Image3.jpeg";
import Image4 from "./../images/tooplate/gallery/Image4.jpeg";
import Image5 from "./../images/tooplate/gallery/Image5.jpeg";
import Image6 from "./../images/tooplate/gallery/Image6.jpeg";
import Image7 from "./../images/tooplate/gallery/Image7.jpeg";
import Image8 from "./../images/tooplate/gallery/Image8.jpeg";
import Image9 from "./../images/tooplate/gallery/Image9.jpeg";
import Image10 from "./../images/tooplate/gallery/Image10.jpeg";
import Image11 from "./../images/tooplate/gallery/Image11.jpeg";

import { auto } from "@popperjs/core";

function Gallery() {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + "section_5",
      children: "a",
      showHideAnimationType: "zoom",
      secondaryZoomLevel: "fill",
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
                <h2 className="section-title">Our Gallery</h2>

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
                  data-pswp-width={"507"}
                  data-pswp-height={"737"}
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
                  data-pswp-width={"600"}
                  data-pswp-height={"267"}
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
                  href={Image8}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"687"}
                  data-pswp-height={"806"}
                >
                  <img
                    src={Image8}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
                <a
                  href={Image9}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"720"}
                  data-pswp-height={"1280"}
                >
                  <img
                    src={Image9}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-12 d-flex flex-column">
              <div className="gallery-thumb image-hover-thumb">
                <a
                  href={Image7}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"576"}
                  data-pswp-height={"1024"}
                >
                  <img
                    src={Image7}
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
                  data-pswp-width={"1280"}
                  data-pswp-height={"720"}
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
                  href={Image4}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"720"}
                  data-pswp-height={"1280"}
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
              {/* Image 3 */}
              <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
                <a
                  href={Image3}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"3264"}
                  data-pswp-height={"2174"}
                >
                  <img
                    src={Image3}
                    className="gallery-image img-fluid"
                    alt=""
                  />
                </a>
              </div>

              <div className="gallery-thumb gallery-thumb-small image-hover-thumb">
                <a
                  href={Image5}
                  className="popup-image"
                  target="_blank"
                  rel="noreferrer"
                  data-pswp-width={"1600"}
                  data-pswp-height={"1200"}
                >
                  <img
                    src={Image5}
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
