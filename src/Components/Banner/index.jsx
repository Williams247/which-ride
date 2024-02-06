import { Slide, Fade } from "react-reveal";
import Phones from "../../static/images/phones.png";
import "./styles.css";

const Banner = () => {
  return (
    <div className="flex flex-direction-row-column">
      <div className="side">
        <div id="compare-container">
          <Slide top>
            <Fade>
              <p className="compare-text-heading">
                Compare & book
                <br />
                ride-hailing providers
              </p>
            </Fade>
          </Slide>
          <Slide bottom delay={100}>
            <Fade delay={100}>
              <p className="compare-text-mobile">
                Save money and time with WhichrRide.
                <br />
                Think Compare the market but for taxis.
              </p>
            </Fade>
          </Slide>
        </div>
      </div>
      <div className="side">
        <Fade delay={300}>
          <img id="phone" src={Phones} alt="Phones" />
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
