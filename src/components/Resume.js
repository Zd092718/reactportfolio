import React from "react";
import reicon from "../assets/react.png";
import jsicon from "../assets/js.png";
import mongoicon from "../assets/mongo.png";
import nodeicon from "../assets/node.png";
import htmlicon from "../assets/html.png";
import cssicon from "../assets/css.png";
function Resume() {
  return (
    <>
      <section id="resume" className="blue-grey darken-1">
        <h2>Resume</h2>
        <a href="../assets/resume.pdf">Download Resume Here</a>
        <br />
        <br />
        <div id="proficiencies">
          <h4>Developer proficiencies</h4>
          <img src={reicon} alt="react icon" />
          <img src={jsicon} alt="js icon" />
          <img src={mongoicon} alt="mongodb icon" />
          <img src={nodeicon} alt="node.js icon" />
          <img src={htmlicon} alt="html icon" />
          <img src={cssicon} alt="css icon" />
        </div>
      </section>
    </>
  );
}

export default Resume;
