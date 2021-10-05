import React from "react";
import githubicon from "../assets/giticon.png";
import linkedin from "../assets/linkedin.png";
function Footer() {
  return (
    <>
      <footer className="page-footer red darken-4 custfooter" id="contact">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text madeby">
                Made and designed by Zachary Dowd 🤖
              </h5>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/zachary-dowd-9a86a8213/">
                    <img src={linkedin} alt="linkedin icon" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Zd092718">
                    <img src={githubicon} alt="github icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
