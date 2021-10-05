import React from "react";

import portrait from "../assets/selfportrait.jpg";
function About() {
  return (
    <>
      <section id="about" className="blue-grey darken-1">
        <h2>About Me</h2>
        <img src={portrait} alt="Zachary Dowd Self Portrait" />
        <br />
        <br />
        <p>
          My name is Zachary Dowd. I'm a full stack web developer in training
          with a focus on back-end development. I've been programming since
          February of 2021. I spent ten years as a chef and then wanted to make
          my way into the technical field.
          <br />
          I've spent my whole life working with technology in different forms,
          but all of it comes down to computer sciences.
        </p>
      </section>
    </>
  );
}

export default About;
