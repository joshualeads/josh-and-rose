// import Countdown from "react-countdown";
import FlipperCountDown from "./FlipperCounter";

// const Completionist = () => (
//   <div className="single_countdown">
//     <span>Thank you all for your Blessing and Support!</span>
//   </div>
// );

// // Renderer callback with condition
// const renderer = ({ days, hours, minutes, seconds, completed }) => {
//   if (completed) {
//     // Render a completed state
//     return <Completionist />;
//   } else {
//     // Render a countdown
//     return (
//       <div className="countDownArea col-lg-6 col-md-6 col-sm-12">
//         <div className="countdown_wrap d-flex">
//           <div className="single_countdown">
//             <div>{days}</div>
//             <span>Days</span>
//           </div>

//           <div className="single_countdown">
//             <div>{hours}</div>
//             <span>Hours</span>
//           </div>

//           <div className="single_countdown">
//             <div>{minutes}</div>
//             <span>Minutes</span>
//           </div>

//           <div className="single_countdown">
//             <div>{seconds}</div>
//             <span>Seconds</span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

function Hero() {
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
