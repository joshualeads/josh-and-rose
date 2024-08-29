import React, { Component } from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

class Completed extends Component {
  render() {
    return (
      <span className="event-complete">
        Thank you from the bottom of my heart for joining us at the event. Your
        presence made it truly special.
      </span>
    );
  }
}

class FlipperCountDown extends Component {
  render() {
    return (
      <>
        <FlipClockCountdown
          to={new Date("August 30, 2024 11:30:00")}
          className={"flip-clock"}
        >
          <Completed />
        </FlipClockCountdown>
      </>
    );
  }
}

export default FlipperCountDown;
