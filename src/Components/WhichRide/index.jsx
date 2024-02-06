import { Bounce, Fade, Slide } from "react-reveal";
import CarMoney from "../icons/CarMoney";
import Time from "../icons/Time";
import Adjust from "../icons/Adjust";
import Crest from "../icons/Crest";
import "./styles.css";

const Whichride = () => {
  return (
    <div>
      <Fade>
        <Slide top>
          <p id="why-which-ride">Why which ride</p>
        </Slide>
      </Fade>
      <div className="flex flex-direction-row-column parent-elemt">
        <div id="side-left" className="side flex justify-content-end">
          <div id="item-space-left">
            <div className="item-top">
              <Bounce>
                <Fade>
                  <CarMoney />
                </Fade>
              </Bounce>

              <Slide top>
                <Fade>
                  <p className="which-choice-heading">More choices</p>
                  <p className="which-choice-description">
                    WhichRide lets you compare pricing across the major
                    rideshares so you can save money on every ride.
                  </p>
                </Fade>
              </Slide>
            </div>

            <div className="item-top-2">
              <Bounce delay={500}>
                <Fade delay={500}>
                  <Time />
                </Fade>
              </Bounce>

              <Slide delay={500}>
                <Fade top delay={500}>
                  <p className="which-choice-heading">More choices</p>
                  <p className="which-choice-description">
                    WhichRide lets you compare pricing across the major
                    rideshares so you can save money on every ride.
                  </p>
                </Fade>
              </Slide>
            </div>
          </div>
        </div>
        <div className="side">
          <div id="side-right">
            <div className="item-top">
              <Bounce>
                <Fade>
                  <Adjust />
                </Fade>
              </Bounce>
              <Slide>
                <Fade top>
                  <p className="which-choice-heading">More choices</p>
                  <p className="which-choice-description">
                    WhichRide lets you compare pricing across the major
                    rideshares so you can save money on every ride.
                  </p>
                </Fade>
              </Slide>
            </div>
            <div className="item-top-2">
              <Bounce delay={500}>
                <Fade delay={500}>
                  <Crest />
                </Fade>
              </Bounce>
              <Slide top delay={500}>
                <Fade top delay={500}>
                  <p className="which-choice-heading">More choices</p>
                  <p className="which-choice-description">
                    WhichRide lets you compare pricing across the major
                    rideshares so you can save money on every ride.
                  </p>
                </Fade>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whichride;
