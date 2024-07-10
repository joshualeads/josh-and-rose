import React, { useState, useEffect } from "react";
import FlipperCountDown from "./FlipperCounter";
import FireFly from "./firefly";

function Hero() {
  useEffect(() => {
    FireFly();
  }, []);

  return (
    <>
      <div className="fh5co-hero" data-section="home" id={"home"}>
        <div className="fh5co-overlay"></div>
        <div
          className="fh5co-cover text-center"
          data-stellar-background-ratio="0.5"
        >
          <div className="display-t">
            <div className="display-tc">
              <div className="container">
                <div className="col-md-12 col-md-offset-1">
                  <div className="animate-box">
                    <h1>The Wedding</h1>
                    <h2>Josh &amp; Rose</h2>

                    <p>
                      <span>30.08.2024</span>
                    </p>

                    {/* <Countdown
                      date={new Date("2024-08-30")}
                      renderer={renderer}
                    /> */}

                    <FlipperCountDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
