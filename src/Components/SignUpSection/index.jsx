import { Fade, Zoom } from "react-reveal";
import "./styles.css";

const SignUpSection = () => {
  return (
    <div id="signup-section">
      <div className="flex justify-content-center">
        <div>
          <Fade>
            <p id="signup-info" className="text-center">
              Sign up to our beta form
            </p>
          </Fade>

          <Fade delay={500}>
            <p id="signup-info-2" className="text-center">
              Sign up to our mailing list to find out more information
              <br />
              and keep up to date about our activities.
            </p>
          </Fade>
        </div>
      </div>
      <div className="flex justify-content-center">
        <div id="sign-up-container" className="flex">
          <div className="flex flex-direction-row-column full-width">
            <div className="form-1">
              <Zoom>
                <input
                  type="email"
                  placeholder="email"
                  className="full-width"
                />
              </Zoom>
            </div>
            <div className="form-2">
              <Zoom delay={500}>
                <button id="sub" className="full-width">
                  Subscribe
                </button>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
