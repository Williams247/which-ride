import React, { useState } from "react";
import { Fade, Slide } from "react-reveal";
import steps from "../../constants/steps";
import Iphone from "../../static/images/iPhone.png";
import "./styles.css";

const Info = () => {
  const [stepData] = useState([...steps]);
  return (
    <div id="info">
      <div className="flex justify-content-center">
        <div id="content-width">
        <Slide top>
          <Fade>
            <p id="which-ride-intro">
              Whichride brings
              together multiple <br />
              ride hailing providers
              and local taxi<br />
              firms in one app
            </p>
          </Fade>
        </Slide>
          <Slide top delay={500}>
            <Fade delay={500}>
              <p id="which-ride-intro-text">
                Allowing riders to select the provider that offers<br />
                the best price,
                service or travel time, then seamlessly<br />
                book within the app
              </p>
            </Fade>
          </Slide>
          <div className="flex flex-direction-row-column">
            <div className="side">
              <Slide left delay={500}>
                <Fade delay={500}>
                  <img src={Iphone} className="full-width" alt="Iphone" />
                </Fade>
              </Slide>
            </div>
            <div className="side">
              <div id="top-space">
                {stepData.map((i, index) => {
                  return (
                    <div key={index}>
                      <Fade delay={index === 0 ? 600 : index === 1 ? 1000 : 100}>
                      <div className="flex">
                        <div
                          className={index === 0 ? 'step-circle flex align-items-center justify-content-center step-circle-yellow':'step-circle flex align-items-center justify-content-center'}>
                          Step: {i.step}
                        </div>
                        <div className="step-item-content">
                          <p className="step-title">{i.title}</p>
                          <p className="step-description">{i.description}</p>
                        </div>
                      </div>
                      </Fade>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Info;
