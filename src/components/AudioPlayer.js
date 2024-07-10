import React, { Component } from "react";
import ReactHowler from "react-howler";
import BackrgoundMusic from "../music/Blessing_Oceans_Yeshua.mp3";

class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: true,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    this.setState({
      playing: true,
    });
  }

  handlePause() {
    this.setState({
      playing: false,
    });
  }

  renderPlayPauseButton() {
    if (this.state.playing && window.Howler.state != "suspended") {
      return (
        <span
          className="bg-audio d-flex align-items-center justify-content-center"
          onClick={this.handlePause}
        >
          <i className={"bi bi-pause-fill"}></i>
        </span>
      );
    } else {
      return (
        <span
          className="bg-audio d-flex align-items-center justify-content-center"
          onClick={this.handlePlay}
        >
          <i className={"bi bi-play-fill"}></i>
        </span>
      );
    }
  }

  // This sound file may not work due to cross-origin setting
  render() {
    return (
      <>
        <ReactHowler
          src={BackrgoundMusic}
          playing={this.state.playing}
          loop={true}
          volume={0.3}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
        />

        {this.renderPlayPauseButton()}
      </>
    );
  }
}

export default AudioPlayer;
