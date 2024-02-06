import { Fade } from "react-reveal";
import Layout from "../Layout";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <Layout>
        <div className="flex flex-direction-row-column justify-content-between">
          <div id="footer-item-1">
            <Fade>
              <p className="footer-text">
                &copy; 2020 Whichrides - All rights reserved
              </p>
            </Fade>
          </div>
          <div id="footer-item-2" className="flex">
            <Fade>
              <p className="footer-text">Privacy Policy</p>
              <p className="footer-text">Terms and Conditions</p>
            </Fade>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
