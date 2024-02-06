import React, { useState } from "react";
import Logo from "../../static/images/Logo.png";
import "./styles.css";

const Header = () => {
  const [path] = useState(["The App", "About Us", "Get in Touch"]);
  return (
    <div>
      <div className="flex flex-direction-row-column">
        <div id="header-pane-1">
          <img id="header-id" src={Logo} alt="Header id" />
        </div>
        <div id="header-pane-2">
          <div className="menu-list-container flex">
            <ul className="flex">
              {path.map((i, index) => {
                return (
                  <a href="#" key={index}>
                    <li className="list-padding">{i}</li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
